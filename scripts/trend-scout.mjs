// Trend scout — surfaces Morocco search trends that are actually ON-MISSION for
// khedma.pro (work, concours, education, legal migration, cost of living) and
// filters out the noise that dominates any trending feed (football, weather,
// entertainment).
//
// Why a scorer and not just "read the trending list": in Morocco the trending
// board is ~80% football and weather. On 2026-08-01 the top trends were
// birmingham-barcelone (50K+) and fuel prices (20K+), while the biggest news
// story of the day registered 2K+. Eyeballing the list wastes time and, worse,
// tempts you into chasing a spike the site cannot rank for.
//
// Usage:  node scripts/trend-scout.mjs
//         node scripts/trend-scout.mjs --all     (show everything, unfiltered)

const GEO = "MA";
const FEED = `https://trends.google.com/trending/rss?geo=${GEO}`;

// On-mission vocabulary. Latin + Arabic + the Darija-Latin spellings Moroccans
// actually type. A hit here means the trend touches what the site is *for*.
const ON_MISSION = [
  // work
  "emploi", "travail", "job", "recrutement", "offre", "salaire", "smig", "stage",
  "khedma", "khadma", "chomage", "chômage", "cv", "entretien", "embauche",
  "شغل", "عمل", "وظيفة", "توظيف", "خدمة", "راتب", "أجر", "بطالة", "تشغيل",
  // public sector / concours
  "concours", "fonction publique", "anapec", "mobarat", "مباراة", "مباريات",
  "الوظيفة العمومية", "كونكور", "توظيف عمومي",
  // education / training
  "bac", "baccalaureat", "ofppt", "formation", "diplome", "diplôme", "universite",
  "université", "inscription", "master", "licence",
  "باكالوريا", "تكوين", "دبلوم", "جامعة", "تسجيل", "منحة", "تعليم",
  // legal migration / working abroad
  "visa", "immigration", "hijra", "canada", "allemagne", "ausbildung",
  "chancenkarte", "espagne", "contrat de travail", "express entry", "ircc",
  "هجرة", "الهجرة", "فيزا", "تأشيرة", "كندا", "ألمانيا", "اسبانيا", "عقد عمل",
  // cost of living / economy — the backdrop to every career decision
  "prix", "carburant", "gasoil", "essence", "inflation", "cherté", "loyer",
  "retraite", "cnss", "amo",
  "أسعار", "المحروقات", "وقود", "غلاء", "تقاعد", "الضمان الاجتماعي",
];

// Deliberately NOT in the lexicon, because they cost more than they earn:
//   "bourse"  — stock exchange far more often than scholarship in MA headlines
//   "جامعة"   — federation (football) as often as university
//   "stage"   — matches French "stage" of a race/tournament
// Add a term only if a false positive would be cheap to spot.

// Hard noise filter — these dominate the board and are never on-mission.
const NOISE = [
  "barcelone", "barcelona", "madrid", "arsenal", "chelsea", "psg", "liverpool",
  "match", "vs", "ligue", "coupe", "but", "football", "botola", "wydad", "raja",
  "meteo", "météo", "weather", "temperature", "température", "طقس", "الطقس",
  "درجة الحرارة", "مباراة ودية", "كرة القدم", "الجامعة الملكية",
  "film", "serie", "série", "netflix", "chanteur", "acteur", "clip",
];

// Topics where chasing the trend is the wrong move regardless of relevance:
// tragedy, disaster, death. A DR-0 site cannot win a breaking-news SERP against
// wire services, AdSense treats monetised tragedy coverage as a policy risk, and
// the reputational cost of looking like you farmed a disaster is permanent.
const DO_NOT_CHASE = [
  "mort", "morts", "deces", "décès", "tue", "tués", "victime", "victimes",
  "accident", "seisme", "séisme", "zelzal", "noyade", "incendie", "drame",
  "migrants", "naufrage", "crise migratoire", "expulsion",
  "قتلى", "وفاة", "ضحايا", "حادث", "زلزال", "غرق", "حريق", "مأساة", "مهاجرين",
];

const norm = (s) => s.toLowerCase().normalize("NFKD");

// Word-boundary matching, not substring. Naive `includes` matched "bac" inside
// "backlash" and flagged a FIFA story as education. Arabic has no case and \b
// behaves badly against Arabic script, so Arabic terms are matched against
// whitespace/punctuation-delimited tokens instead.
const isArabic = (w) => /[؀-ۿ]/.test(w);
const tokenize = (text) => norm(text).split(/[^\p{L}\p{N}]+/u).filter(Boolean);

function hits(text, list) {
  const tokens = new Set(tokenize(text));
  const joined = norm(text);
  return list.filter((w) => {
    const term = norm(w);
    // Multi-word phrases: substring is fine, they are specific enough.
    if (/\s/.test(term)) return joined.includes(term);
    if (isArabic(term)) return tokens.has(term);
    return new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(text);
  });
}

// Trends' RSS gives "20K+", "2K+", "200+" — turn that into a sortable number.
function trafficToNumber(t) {
  const m = /([\d.]+)\s*([KM]?)/i.exec(t || "");
  if (!m) return 0;
  const mult = { K: 1e3, M: 1e6 }[m[2].toUpperCase()] || 1;
  return parseFloat(m[1]) * mult;
}

function parseFeed(xml) {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => {
    const block = m[1];
    const pick = (tag) => {
      const r = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`).exec(block);
      return r ? r[1].replace(/<!\[CDATA\[|\]\]>/g, "").trim() : "";
    };
    const news = [...block.matchAll(/<ht:news_item_title>([\s\S]*?)<\/ht:news_item_title>/g)]
      .map((n) => n[1].replace(/<!\[CDATA\[|\]\]>/g, "").trim());
    return {
      title: pick("title"),
      traffic: pick("ht:approx_traffic"),
      volume: trafficToNumber(pick("ht:approx_traffic")),
      news,
    };
  });
}

function assess(item) {
  const haystack = [item.title, ...item.news].join(" ");
  const mission = hits(haystack, ON_MISSION);
  const noise = hits(haystack, NOISE);
  const sensitive = hits(haystack, DO_NOT_CHASE);

  // Noise is a HARD kill, even when a mission word also matched. The Royal
  // Football Federation contains "جامعة" (federation/university) and would
  // otherwise pass as an education trend.
  if (noise.length) return { verdict: "skip", why: `noise (${noise[0]})`, mission };
  if (!mission.length) return { verdict: "skip", why: "off-mission", mission };
  if (sensitive.length)
    return { verdict: "DO NOT CHASE", why: `sensitive: ${sensitive.join(", ")}`, mission };
  return { verdict: "CANDIDATE", why: `on-mission: ${mission.join(", ")}`, mission };
}

const main = async () => {
  const showAll = process.argv.includes("--all");
  const xml = await fetch(FEED).then((r) => r.text());
  const items = parseFeed(xml).map((i) => ({ ...i, ...assess(i) }));

  const rank = { CANDIDATE: 0, "DO NOT CHASE": 1, skip: 2 };
  const rows = items
    .filter((i) => showAll || i.verdict !== "skip")
    .sort((a, b) => rank[a.verdict] - rank[b.verdict] || b.volume - a.volume);

  console.log(`\nTrend scout — Google Trends ${GEO}, ${items.length} trends scanned\n`);
  if (!rows.length) {
    console.log("  Nothing on-mission right now. That is the normal result — the");
    console.log("  trending board is mostly football and weather. Do not force it.\n");
    return;
  }
  for (const r of rows) {
    console.log(`  [${r.verdict}] ${r.title}  (${r.traffic || "n/a"})`);
    console.log(`      ${r.why}`);
    if (r.news[0]) console.log(`      ↳ ${r.news[0].slice(0, 100)}`);
    console.log();
  }
  console.log("  Reminder: a trend is only worth writing if you can still rank for");
  console.log("  it in 6 months. Evergreen procedure > news spike, at DR 0.\n");
};

main().catch((e) => {
  console.error("trend-scout failed:", e.message);
  process.exit(1);
});

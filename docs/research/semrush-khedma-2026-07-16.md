# SEMrush Pro deep-scrape — khedma.pro (Morocco DB, 2026-07-16)

Pulled via SEMrush **Pro** (MCP, database `ma`) in a 22-agent workflow: domain state,
our rankings, organic competitors, backlinks, an untapped keyword gap vs the two known
competitors, and full keyword research (related + questions + exact volume/KD) across
all three pillars in FR **and** AR. Supersedes `semrush-khedma-2026-07-15.md` (kept for
history). **Perishable — re-pull each quarter.**

- **KD** = Keyword Difficulty (0–100, lower = easier). **CPC** in $. Intent: com / info / nav / trans.
- Raw per-keyword tables live in the run journal; this file is the curated read.

---

## 0. Reality check — khedma.pro is at zero

| Metric (SEMrush `ma`) | Value |
|---|---|
| Semrush domain rank | **561,763** |
| Organic keywords | **1** (`khdama`, vol 390, KD 31, position **23**) |
| Organic traffic (modeled) | **0** |
| Authority Score / Trust | **2 / 2** |
| Backlinks / ref domains | 60 / 34 — but **58 of 60 are nofollow** (3 follow) |
| Organic competitors | none computable ("NOTHING FOUND") |

**Read it honestly:** SEMrush sees essentially no organic footprint. The "amplify our
winners" playbook from the massar-service.net roadmap **does not apply here — there are
no winners yet.** This is a cold start. GSC will show more than SEMrush does for a small
new site (SEMrush under-samples), so GSC impressions are the truer signal — but the
direction is unambiguous: the lever is *publish winnable content → get indexed → earn a
few real (follow) links*, not optimization of existing ranks.

---

## 1. Strategic read (the five things that matter)

**① The winnable core is public-employment + ANAPEC, not Germany.** The highest
volume-to-difficulty ratios on khedma.pro's actual turf are here — all squarely
on-brand for a careers site:

| Keyword | Vol | KD | Intent | Build |
|---|--:|--:|--|--|
| emploi public | 110,000 | 31 | nav | `/emploi/public` pillar |
| anapec | 246,000 | 36 | trans | ANAPEC guide hub |
| بوابة التشغيل العمومي (public-employment portal) | 33,100 | 31 | nav | `/ar/emploi` public-sector page |
| emploi public ma | 22,200 | **22** 🟢 | nav | same pillar, alt query |
| anapec postuler | 14,800 | **18** 🟢 | trans | "how to apply on ANAPEC" |
| emploi public maroc | 12,100 | **25** 🟢 | nav | pillar (matches brief) |
| anapec login | 3,600 | **12** 🟢 | trans | ANAPEC login/how-to |

**② A programmatic `city × emploi` cluster is a clean, low-KD volume play.** These are
KD 14–21 with real volume — perfect for a templated, genuinely-useful city job page:

| Keyword | Vol | KD |
|---|--:|--:|
| offre d'emploi rabat | 9,900 | **19** 🟢 |
| offre d'emploi casablanca | 8,100 | **21** 🟢 |
| emploi agadir | 3,600 | **17** 🟢 |
| emploi tanger | 3,600 | **20** 🟢 |
| offre d'emploi fes | 3,600 | **14** 🟢 |

**③ Concours = the Arabic "مباراة التعليم" registration long-tails.** The exam head
terms are mid-KD, but the *registration / year-stamped* long-tails are KD 14–27 with
4K–18K volume — and highly seasonal (rentrée spikes). This is the concours engine's job:

| Keyword | Vol | KD |
|---|--:|--:|
| مباراة التعليم 2025 | 18,100 | 38 |
| مباراة التعليم 2024 | 14,800 | **22** 🟢 |
| التسجيل في مباراة التعليم 2024 | 5,400 | **16** 🟢 |
| مباراة التعليم 2024-2025 | 4,400 | **14** 🟢 |
| التسجيل في مباراة التعليم (evergreen) | 6,600 | **27** 🟢 |
| concours taalim 2025 | 1,900 | **16** 🟢 |
| concours ofppt | 1,000 | **21** 🟢 |
| concours cnss | 720 | **14** 🟢 |

**④ Germany is a demand desert in Morocco — reframe the pillar.** This is the
uncomfortable one. Three of the Germany related-keyword pulls returned **"NOTHING
FOUND"** — SEMrush can't even build a related set for `travailler en allemagne`,
`ausbildung maroc`, or `العمل في ألمانيا` in the `ma` database. Exact-match seeds:

| Keyword | Vol | KD |
|---|--:|--:|
| **visa allemagne maroc** | 1,300 | **27** 🟢 (the only real term) |
| travailler en allemagne | 170 | 0 |
| étudier en allemagne | 90 | 0 |
| ausbildung maroc | 30 | 0 |
| العمل في ألمانيا / التدريب المهني / فيزا ألمانيا | 10–20 each | 0 |

The Germany pillar (CapAllemagne tools, YMYL content) is real *product* value and a
*lead-gen/monetization* bet — **but it is not a search-traffic pillar in Morocco today.**
Build the one page that has demand (`visa allemagne maroc`, 1.3K/KD27) and stop expanding
Germany *for SEO*. Caveat: SEMrush's `ma` DB is thin on FR/AR generally, so absence of
data ≠ absence of demand — **validate against GSC impressions before writing off or
investing further.** But do not pour content effort here on the SEMrush numbers alone.

**⑤ CPC is near-zero everywhere → it's a volume game, RPM will be low.** Almost every
Moroccan term prices at $0–0.26 CPC (the AdSense geography trap — cf. massarservic.net's
€0.49 RPM). The few terms with any CPC: `anapec` (0.26), `visa allemagne maroc` (0.13),
`modele cv` (0.14), `lettre de motivation` (0.05). **Implication:** revenue = pageviews ×
tiny RPM, so the strategy must maximize *indexed, ranking pages* (hence ②'s programmatic
cluster and ③'s seasonal long-tails). Depth + volume, not high-value clicks.

---

## 2. Competitor & gap

> **Correction (owner, 2026-07-16):** khedma.pro's real competitors are **job
> portals**, NOT the Massar lookalikes. The massarservic.net analysis below is the
> *sibling* site's (massar-service.net) rival and is kept only to prove the point.

### Real competitors = the Moroccan job portals

These are the domains khedma.pro actually fights in the SERP — all surfaced by the
`emploi maroc` / `concours maroc` related pulls. They rank for the exact clusters in §1:

| Portal | Example term it owns | Vol | KD |
|---|---|--:|--:|
| **indeed.com/maroc** | `indeed maroc` | 40,500 | 38 |
| **rekrute.com** | `rekrute` | 27,100 | 40 |
| **dreamjob.ma** | `dream job` / `dreamjob` | 49,500 / 18,100 | 42 / 46 |
| **emploi-public.ma** | `emploi public` / `emploi public ma` | 110,000 / 22,200 | 31 / **22** |
| **ijob.ma** | `ijob ma` | 9,900 | 58 |
| **marocannonces.com** | `maroc annonce rabat` | 8,100 | **24** |
| **anapec.org** | `anapec` / `anapec postuler` | 246,000 / 14,800 | 36 / **18** |
| **m-job / rekrute-type aggregators** | `offre d'emploi <ville>` | 3.6K–9.9K | **14–21** |

**How khedma.pro beats them:** the portals are thin listing pages with weak on-page
depth. khedma.pro wins on **guide-grade content + genuine tools** (CV builder, employer
finder) around the SAME queries — "how to use ANAPEC", "how to find emploi public",
"offre d'emploi <ville> + how to apply safely" — plus the anti-scam trust angle none of
them own. The `city × emploi` cluster (KD 14–21) is where their listing pages are
weakest and a genuinely useful city guide can outrank them.

**moutamadris.ma** (from the owner's anchor CSV) is a partial competitor on the
**concours/recruitment** overlap only (alwadifa, far/gr/protection-civile, concours) —
and a *link-building model*: downloads + lessons + scholarship/recruitment guides pull
its links. Study it for that, not as a head-to-head jobs rival.

### (Sibling-site reference) massarservic.net — NOT khedma.pro's fight

**massarservic.net** (the same-name lookalike) — AS **46**, **849 backlinks / 305 ref
domains** (337 follow). Its traffic is overwhelmingly Massar/Moutamadris brand &
login intent, all from ONE homepage URL ranking pos 2–3:

| Keyword | Vol | KD |
|---|--:|--:|
| massar service | 5,000,000 | 53 |
| massar | 2,740,000 | 63 |
| moutamadris | 1,830,000 | 47 |
| مسار متمدرس | 1,500,000 | 47 |
| مسار النقط (grades) | 90,500 | 45 |
| massar waliye (parent) | 33,100 | **31** |
| مسار ولي الامر (parent) | 14,800 | **26** |
| massar service 2026 | 40,500 | **38** |
| outlook massar | 18,100 | **21** 🟢 |

**Whose gap is this?** Mostly **the sibling site's (massar-service.net), not
khedma.pro's.** Chasing Massar *login* terms on a *careers* domain is off-brand and
competes with our own ecosystem. The right ecosystem move is the funnel that's already
in the strategy: **massar-service.net (education traffic) → khedma.pro (careers).**
Cross-link the two; don't make khedma.pro a second Massar-login clone. The parent
(`waliye`, KD 26–31) and year terms (KD 38) are a legitimate low-KD lane — but assign
them to **massar-service.net**, which already owns that intent.

**orientation-bac.com** — negligible traffic; ranks pos 40–80 for post-bac orientation
terms (`orientation 24` 3.6K, `توجيه` 2.4K, institute offer-pages KD 12–16). A weak
competitor — if khedma.pro ever adds a post-bac orientation surface, these are
easy to outrank, but it's a lower priority than ① / ② / ③.

---

## 3. Prioritized content backlog (from this data)

Ranked by (volume ÷ difficulty) on khedma.pro's own turf:

1. **ANAPEC hub** — `anapec` (246K), `anapec postuler` (14.8K/KD18), `anapec login`
   (3.6K/KD12). A genuinely useful "how to register, search, and apply on ANAPEC" guide.
2. **Public-employment pillar** — `emploi public` (110K/KD31), `emploi public ma`
   (22.2K/KD22), `emploi public maroc` (12.1K/KD25), `بوابة التشغيل العمومي` (33.1K/KD31).
3. **`city × emploi` programmatic cluster** — Rabat/Casa/Fès/Agadir/Tanger (KD 14–21).
   Template + real, deduped listings (ties into the Supabase job board when live).
4. **Concours `مباراة التعليم` seasonal cluster** — year + `التسجيل` long-tails (KD 14–27),
   timed to the rentrée. The concours engine already has the scaffold.
5. **`visa allemagne maroc`** — 1.3K/KD27, the ONE Germany page with demand (already flagged).
6. **CV / stage quick wins** — `cv maroc` (480/KD12), `stage maroc` (1.3K/KD14) — content
   (`/cv` builder) exists; make sure the pages target these exactly.

Everything above is **higher-priority than any further Germany expansion.**

---

## 4. Caveats

- SEMrush `ma` **modeled** numbers under-sample small/new sites and have thin FR/AR
  coverage (many `NOTHING FOUND`s). Treat volumes as directional; **cross-check the top
  targets against GSC impressions** once GSC coverage is populated (site just redeployed).
- KD is a ranking-difficulty estimate, not a guarantee; low KD + zero backlinks still
  needs indexation + internal links + a couple of real (follow) links to convert.
- Re-pull after the rentrée spike (Sept) to catch seasonal volume the July snapshot misses.

# Khedma Pro — Build Brief (2026-07-14)

Premium rebuild from scratch of the amateur original. Positioning: **the career platform
for young Moroccans** — bridging education → jobs → abroad. Bilingual FR (primary) / AR.
Part of the **Massar/Khedma ecosystem**: massar-service.net (huge education traffic,
top-of-funnel) feeds khedma.pro (careers, bottom-of-funnel).

## Keyword research (SEMrush Pro trial, Morocco DB, 2026-07-14)
Perishable trial data — captured here so it survives the trial expiry (~2026-07-19).

| Pillar | Anchor term | Volume | KD | Read |
|---|---|---:|---:|---|
| **Emploi (jobs)** | `emploi public maroc` | 12.1K | **25 🟢** | Public jobs = high volume + winnable; `offre emploi` cluster (5,780 kw) = listings engine |
| **Concours (مباريات)** | `concours maroc` | 33.4K (cluster) | **16 🟢** | Very low competition; big `exemple`/past-papers angle (1,107 kw) |
| **Germany** | `ausbildung` | 6.6K | **69 🔴** | Competitive (German sites dominate the head term) |

**Critical findings:**
1. **Public jobs + concours are the SEO backbone** — both low-KD (25, 16), seasonal, winnable.
2. **`مباريات` alone is a homonym trap** → it means **football matches** (مباريات اليوم 550K).
   Target the *recruitment* phrasing: `concours` / `مباريات التوظيف` / `التوظيف`, never bare مباريات.
3. **Do NOT fight bare `ausbildung`** (German sites own it, KD 69). Win the **Morocco→Germany**
   angle instead — and per the owner's on-the-ground insight, **Moroccans don't search
   "Ausbildung"; they search occupation + a (usually small) German city seeking an employer**:
   e.g. `elektriker [stadt]`, `pflege [stadt]`. Small cities = labor shortage = higher
   sponsorship odds. So the Germany pillar targets **métier × ville × employeur** long-tail,
   not the head term. In-demand trades: **Elektriker, Pflege, Handwerk**.

## Three pillars → roadmap
- **Concours** — live listings by ministry + deadline; past-paper/"exemple" content; how-to-apply
  via official portal; anti-scam ("aucun concours ne demande de paiement"). *SEO backbone.*
- **Emploi** — verified job board (`offre emploi`), public-sector focus (`emploi public maroc`),
  CV builder (Moroccan format), by-city/sector, application tracking.
- **Allemagne** — Chancenkarte eligibility calculator, Ausbildung explorer, cost calculator,
  and the **occupation×small-city employer finder** (the real search intent). Absorbs the
  massar-service.net `/carriere/allemagne` (CapAllemagne) corridor.

## Ecosystem (the point)
- massar-service.net → khedma.pro (contextual links from /carriere, /orientation, orientation
  pages): funnels education traffic into careers.
- khedma.pro blog → massar-service.net (editorial links: "après le bac", "résultats", Massar):
  a real, relevant backlink to Massar (worth far more than competitor junk links).
- Consolidate the Germany vertical onto khedma.pro; the Massar corridor becomes a feeder.
- **Footprint discipline:** cross-link only where editorially justified (in-content, descriptive
  anchors), never sitewide footers.

## Phases
- **Phase 1 (done):** scaffold — design system, layout, homepage, 3 pillar landing pages.
- **Phase 2 (done, 2026-07-15):** Concours listings + content engine (low-KD SEO backbone),
  sitemap/robots/llms.txt/OG/JSON-LD. 12 concours guides + 5 blog guides, all grounded in
  official-source research (see `docs/research/concours-research-2026-07-15.json` and
  `docs/OFFICIAL_SOURCES.md`). Ecosystem links to massar-service.net seeded on 3 pages.
- **Phase 3:** Emploi job board + CV builder + accounts.
- **Phase 4:** Allemagne — Chancenkarte calculator + occupation×city employer finder; Massar links.
- **Phase 5:** Arabic (AR/RTL) localization.

## Phase 2 notes (for the next session)
- **Weekly refresh:** `lib/concours-actuels.ts` is a hand-verified snapshot of what's open;
  its entries expire by deadline. Re-check statuses in `lib/concours-data.ts` against the
  official portals each week — especially around the September rentrée surge (DGSN announces
  ~mid-Sept, enseignement late-Oct/Nov, santé Dec-Jan).
- **Morocco window:** several official portals (concours.dgsn.gov.ma, recrutement.gr.ma,
  recrutement.far.ma, recrutement.fa.gov.ma, sante.gov.ma family, tawdif/wolouj.men.gov.ma)
  are geo-blocked outside Morocco. Verify their live state from a Moroccan IP when possible.
- **Indexing:** submit the sitemap to GSC + Bing and ping IndexNow after deploy.

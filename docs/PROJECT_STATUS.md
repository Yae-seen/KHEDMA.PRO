# Project status — khedma.pro

_Last updated: 2026-07-15 (Phase 3 + trust pages)._

## Built

### Phase 1 — scaffold
Design system (indigo/amber premium identity, distinct from massar-service.net's
parchment), root layout, homepage, and the three pillar landing pages
(`/concours`, `/emploi`, `/allemagne`).

### Phase 2 — concours engine + content (this batch)
- **Content model** (`lib/content-types.ts`): typed `ConcoursGuide` / `ArticleContent`
  with a discriminated `ContentBlock` union (p/h2/h3/ul/ol/note/warning/table) and an
  inline markup mini-syntax (`[label](/href)`, `**bold**`) rendered by
  `components/render-inline.tsx` + `components/content-blocks.tsx`.
- **Concours registry** (`lib/concours-data.ts`): 12 concours across 5 categories, each
  with status, official portal + explicit Arabic-aware label, diploma levels, Arabic
  search phrase, and a `lastVerified` date. Statuses grounded in official-source research.
- **"Open now" snapshot** (`lib/concours-actuels.ts`): 5 hand-verified currently-open
  concours, filtered by deadline at render time. **Refresh weekly.**
- **Pages**: `/concours` hub (open-now list + category grid + guide cards + FAQ),
  `/concours/[slug]` guide template (breadcrumb, status, anti-scam banner, body, HowTo
  steps, official CTA, FAQ, sources, related), `/blog` index, `/blog/[slug]` article
  template, `not-found`, OG image.
- **12 concours guides + 5 blog guides** authored from the research digest and
  fact-audited (see below). ~1,100–1,650 words each.
- **SEO**: sitemap (22 URLs), robots, `/llms.txt`, canonicals on every page, full JSON-LD
  (WebSite/Article/HowTo/FAQPage/BreadcrumbList/ItemList).
- **Ecosystem**: contextual editorial links to massar-service.net on 3 pages
  (ISPITS → /resultats-bac, enseignement, par-niveau → /orientation-universitaire).

### Phase 3 — Emploi pillar + CV builder (this batch)
- **`/emploi` hub**: real content targeting `emploi public maroc` — where to look
  (emploi-public.ma, ANAPEC, grands recruteurs), the concours-vs-contractuel split,
  by-sector and by-city orientation, anti-scam, CV CTA, FAQ + JSON-LD.
- **`/cv` CV builder**: a fully **client-side** tool (Moroccan format) — live A4 preview,
  localStorage persistence, print-to-PDF via the browser. No account, no backend, and
  the CV data never leaves the device. Link-worthy, AIO-resistant, targets `cv maroc`.
- **2 emploi guides**: `trouver-emploi-public-maroc`, `modele-cv-maroc`.
- **Scope note (stack-driven):** live job-board ingestion, user accounts, and
  application tracking from the brief are NOT built — they require a backend the
  ecosystem stack intentionally excludes (no DB/auth/Supabase). The emploi pillar
  instead orients toward official/verified channels and provides the CV tool. Revisit
  if/when a backend is added.

### Trust & legal pages (this batch)
- `/a-propos`, `/contact`, `/confidentialite`, `/mentions-legales` — independence
  notice (not affiliated with any administration), no-data-collection statement,
  editorial method, and AdSense-readiness basics. Linked from the footer.
- Contact uses `khedmapro.help@gmail.com` (owner-provided support address).

## Verification (2026-07-15)
- `npm run type-check` ✅ · `npm run lint` ✅ · `npm run build` ✅
- Automated adversarial fact-check pass over all 17 concours/blog files (one reviewer
  per file vs the research digest): 21 fixes applied, 37 unverifiable claims softened,
  **0 unresolved**. Plus structural audits: 0 broken internal links, all in-body
  external links official, no aggregator mis-flagged `official:true`.
- JSON-LD validated in-browser; rendering confirmed in the browser preview.

### Phase 4 — Allemagne pillar (this batch)
- **/allemagne hub** with three client-side interactive tools:
  - **Chancenkarte points calculator** — the official points system (threshold 6,
    tiered language/experience/age, bonuses), baseline gates, live eligibility.
  - **Employer finder** — occupation × German city → deep-links the official job
    portals (Bundesagentur Jobbörse `was/wo`, EURES, Make it in Germany, Anerkennung
    Finder). The "métier × ville" intent from the brief, small-city angle.
  - **Cost estimator** — indicative budget; proof-of-funds (Sperrkonto) separated
    from real spend, toggleable lines, months slider.
- **2 Allemagne guides**: chancenkarte-carte-opportunite-guide, trouver-employeur-
  allemagne-metier-ville. Ecosystem link back to massar-service.net.
- **YMYL discipline**: all figures traced to official German sources (make-it-in-
  germany.com, BAMF, gesetze-im-internet §20b AufenthG, anerkennung-in-deutschland.de,
  rabat.diplo.de). Verified by an adversarial pass — caught + fixed the age-bracket
  boundary (strictly <35 = 2 pts). Digest: docs/research/allemagne-research-2026-07-15.json.
  Tools are labelled indicative, never legal advice. Re-verify figures annually
  (Foreign-Office funds figure is reset each January).

### Phase 5 — Arabic (AR/RTL) foundation (this batch)
- **i18n** (`lib/i18n.ts`): fr/ar dictionary for the chrome; `localePath()` helper.
- **Route-group split**: French routes moved under `app/(fr)/` (URLs unchanged),
  Arabic under `app/ar/`. Root layout owns the single `<html>/<body>`; each group
  layout renders locale-aware chrome and sets `dir` on its wrapper — both locales
  stay statically generated.
- **`/ar` RTL homepage** (Cairo font), Arabic header/footer, WebSite + FAQ JSON-LD.
- **Language toggle** (FR ↔ العربية) in the header + **hreflang** alternates on `/`↔`/ar`.
- **Scope**: this is the Arabic entry surface + RTL foundation. Translating the deep
  content pages (concours/emploi/allemagne hubs, guides) into Arabic is the incremental
  next step; the infrastructure (dict, RTL chrome, routing) is in place for it.

## Not built yet
- **Arabic deep content:** AR versions of the pillar hubs and guides (infra ready).
- **Phase 3 remainder (needs backend):** live job board, accounts, application tracking.
- **Phase 4 nice-to-have:** Ausbildung-specific blocked-account figure (€959/mo),
  live Mangelberufe list link, more small-city landing pages.

## Owner / operational follow-ups
- Deploy to Vercel; point khedma.pro DNS.
- Submit sitemap to Google Search Console + Bing Webmaster; ping IndexNow.
- Weekly: refresh `lib/concours-actuels.ts` and re-check `concours-data.ts` statuses
  against the official portals (see `docs/OFFICIAL_SOURCES.md`).
- During the 2026-08-16 → 09-04 Morocco window: verify the geo-blocked `.gov.ma`
  recruitment portals from a Moroccan IP and capture the September rentrée snapshot.
- AdSense: not wired here yet (mirror the massar two-phase env-var gating when ready).

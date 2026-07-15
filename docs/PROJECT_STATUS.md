# Project status — khedma.pro

_Last updated: 2026-07-15 (end of Phase 2)._

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

## Verification (2026-07-15)
- `npm run type-check` ✅ · `npm run lint` ✅ · `npm run build` ✅ (28 static pages)
- 0 broken internal links; all in-body external links resolve to official domains.
- JSON-LD validated in-browser (0 parse errors) on hub + detail + blog.
- Rendering confirmed in the browser preview (RTL Arabic, statuses, official CTAs).
- **Caveat:** the automated fact-check/review agents hit the session usage cap and did
  not all run. Facts were verified structurally (type-check, link audit, source-flag
  audit, date scan) and by manual spot-review of the highest-risk pages (police, FAR,
  finances, ISPITS). A dedicated review pass over all 12 guides is a reasonable follow-up.

## Not built yet
- **Phase 3 — Emploi**: job board (`offre emploi`), public-sector focus, CV builder
  (Moroccan format), accounts, application tracking.
- **Phase 4 — Allemagne**: Chancenkarte eligibility calculator, occupation×small-city
  employer finder, cost calculator; absorb the massar `/carriere/allemagne` corridor.
- **Phase 5 — Arabic**: AR/RTL localization of the content pages.

## Owner / operational follow-ups
- Deploy to Vercel; point khedma.pro DNS.
- Submit sitemap to Google Search Console + Bing Webmaster; ping IndexNow.
- Weekly: refresh `lib/concours-actuels.ts` and re-check `concours-data.ts` statuses
  against the official portals (see `docs/OFFICIAL_SOURCES.md`).
- During the 2026-08-16 → 09-04 Morocco window: verify the geo-blocked `.gov.ma`
  recruitment portals from a Moroccan IP and capture the September rentrée snapshot.
- AdSense: not wired here yet (mirror the massar two-phase env-var gating when ready).

# Khedma Pro

The career platform for young Moroccans — **concours** (fonction publique / مباريات),
**emploi** (verified jobs + CV builder), and the **path to Germany** (Ausbildung /
Chancenkarte). Part of the Massar/Khedma ecosystem: a funnel from massar-service.net's
education traffic into careers.

## Stack
Next.js 16 (App Router) · TypeScript (strict) · Tailwind CSS v4 · Vercel. Mirrors the
proven, fast, SEO-first foundation of the massar-service.net codebase.

## Develop
```
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run type-check # tsc --noEmit
npm run lint       # eslint
```

## Structure
```
app/
  concours/                hub + [slug] guide template (12 concours)
  blog/                    index + [slug] article template (5 guides)
  sitemap.ts robots.ts     SEO surfaces
  opengraph-image.tsx      OG card (Satori-safe)
  llms.txt/route.ts        AI-crawler guidance
components/                json-ld, content-blocks, breadcrumb, faq-section,
                           official-link, anti-scam-banner, concours-card, source-list
lib/
  site-config.ts           site + pillar config (single source of truth)
  content-types.ts         typed content model (ConcoursGuide, ArticleContent, blocks)
  concours-data.ts         concours registry (status/deadline, all official-source-verified)
  concours-actuels.ts      hand-verified "open now" snapshot (refresh weekly)
  structured-data.ts       JSON-LD builders (Article/FAQ/HowTo/Breadcrumb/ItemList/WebSite)
  articles.ts              blog article registry (metadata)
content/
  concours/<slug>.ts       one typed module per concours guide
  blog/<slug>.ts           one typed module per article
docs/
  BUILD_BRIEF.md           keyword research + phase roadmap
  OFFICIAL_SOURCES.md      official-URL table + geo-block notes
  PROJECT_STATUS.md        what's built / what's next
  research/                captured research digests (JSON)
```

## Content discipline
Concours status/deadline facts come only from official sources (emploi-public.ma,
ministry `.gov.ma` sites, maroc.ma) — see `docs/research/`. Reported-secondary facts
are framed as "conditions des dernières sessions", never as the current announcement.
Every page carries a "Dernière vérification" date. Refresh `lib/concours-actuels.ts`
weekly and re-check statuses against the official portals.

## Status
- **Phase 1 (done):** scaffold — design system, layout, homepage, 3 pillar pages.
- **Phase 2 (done):** concours listings + content engine — 12 concours guides, 5 blog
  guides, hub with a staleness-guarded "open now" list (ISR), sitemap/robots/llms.txt/OG,
  full JSON-LD.
- **Phase 3 (partial — SEO core):** Emploi content hub (`emploi public maroc`) + a
  client-side **CV builder** (`/cv`, Moroccan format, PDF, no backend) + 2 emploi guides.
  Live job-board ingestion, accounts, and application tracking are deferred — they need a
  backend the stack excludes.
- **Trust pages (done):** `/a-propos`, `/contact`, `/confidentialite`, `/mentions-legales`.
- **Phase 4 (done):** Allemagne — Chancenkarte points calculator, occupation×city employer
  finder (deep-links official job portals), cost estimator + 2 guides. YMYL: figures from
  official German sources, adversarially verified.
- **Phase 5 (foundation):** Arabic (AR/RTL) — locale-aware chrome, `/ar` RTL homepage
  (Cairo font), language toggle, hreflang. Route-group split (`(fr)` / `ar`) keeps both
  locales statically generated with unchanged FR URLs. Deep per-page AR translation is
  incremental from here.

See `docs/BUILD_BRIEF.md` for the keyword-informed roadmap and `docs/PROJECT_STATUS.md`
for the detailed state.

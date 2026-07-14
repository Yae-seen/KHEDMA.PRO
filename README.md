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
app/                homepage + concours / emploi / allemagne pillar pages
components/         site-header, site-footer, pillar-layout
lib/site-config.ts  site + pillar config (single source of truth)
docs/BUILD_BRIEF.md SEMrush keyword research + content roadmap
```

## Status
Phase 1 scaffold: design system, layout, homepage, and the three pillar landing pages
(stubs). See `docs/BUILD_BRIEF.md` for the keyword-informed build roadmap (Phases 2+:
concours listings, job board + CV builder, Chancenkarte tool, Massar ecosystem links).

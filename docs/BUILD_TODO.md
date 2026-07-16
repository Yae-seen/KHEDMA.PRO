# Khedma Pro — Build TODO (living)

Single source of truth for what's pending. **Claude: surface the "Owner actions" and
any time-sensitive items at the start of every session.** Update this file as items
move. Session-by-session detail lives in `docs/sessions/`.

Legend: ☐ open · ◐ in progress · ☑ done · 🔒 blocked on a decision · ⏰ time-sensitive

---

## ⏰ Time-sensitive
- ☑ **SEMrush Pro deep-scrape — DONE 2026-07-16** (22-agent workflow via the Pro MCP).
  Full intel in `docs/research/semrush-khedma-2026-07-16.md`. Headlines: khedma.pro is a
  cold start (rank 561K, AS 2, 1 keyword); winnable core = **ANAPEC + emploi public +
  city×emploi + مباراة التعليم long-tails** (KD 12–31); **Germany is a demand desert** in
  Morocco (only `visa allemagne maroc` 1.3K/KD27 has real volume); CPC ≈ 0 everywhere →
  volume game. Re-pull after the Sept rentrée spike.

## ✅ Decisions made (2026-07-15)
- **Org/official logos: NO.** Keep text-based source attribution (protects independence
  + AdSense + trademark). Higgsfield is only for OUR OWN assets. Real employer logos may
  appear on the live job board later — private employers' own logos only, never gov, never AI-made.
- **Design: keep our "Majorelle & Saffron" identity.** No mirroring. Add a polished,
  logo-free "official sources / trust" strip within the current design.

## ☐ Owner actions (only you can do — activation)
- ☐ **Verify GSC + Bing Webmaster** now that the site redeploys with this build (the
  old build has ~3 months of data on the same domain). Submit `sitemap.xml`; then I can
  audit coverage/queries/CWV.
- ☑ **Analytics — LIVE (2026-07-16).** GA4 `G-NQFV0NQGXH` committed as a default in
  `site-analytics.tsx` + `next.config.ts` (public id, no env step). The owner's
  `GT-MR5XFNM9` is a `gtag.js` Google tag → same property, so the `G-` install alone
  is complete. **Owner: confirm GA4 → Realtime shows traffic after this deploy.**
- ☐ **Provision Supabase**: create project, run `supabase/migrations/0001_init.sql`,
  set the 3 env vars, enable email auth, seed jobs. (Code done, env-gated.) → `docs/SETUP.md`
- ☐ **Run IndexNow after deploy**: `node scripts/indexnow.mjs`.
- ☐ **AdSense**: once traffic + all trust pages + original content confirmed, (re)submit.
  Strategy = earn via traffic → high-quality original content is the lever.

## ◐ / ☐ Build work (me — unblocked) — reprioritized by the 2026-07-16 SEMrush scrape

**Content priority order (volume ÷ difficulty, on khedma.pro's own turf):**
- ☑ **①  ANAPEC hub — SHIPPED 2026-07-16** (`/blog/anapec-inscription-espace-candidat`,
  linked from `/emploi`). Targets `anapec` 246K, `anapec postuler` 14.8K/KD18, `anapec
  login` 3.6K/KD12, `inscription anapec`, `espace candidat`. YMYL research→draft→verify
  workflow; grounded in loi 51-99, anapec.ma, ANAPEC anti-scam alert. **Follow-up: confirm
  exact form-field labels + login URLs during the Morocco window (2026-08-16 → 09-04).**
- ☑ **②  Public-employment portal — SHIPPED 2026-07-16** (`/blog/emploi-public-ma-portail`
  + `/ar/blog/emploi-public-ma-portail`). Targets `emploi public` 110K, `emploi public ma`
  22.2K/KD22, `بوابة التشغيل العمومي` 33.1K/KD31. Portal how-to (account/search/apply),
  distinct from the conceptual `trouver-emploi-public-maroc`. FR+AR, YMYL verify workflow
  (caught a real FAQ misread + softened unverified "gratuit"). Auto-listed on both emploi hubs.
- ☐ **③  `city × emploi` programmatic cluster** — Rabat/Casa/Fès/Agadir/Tanger (KD 14–21);
  template + deduped real listings (ties into the Supabase job board when live).
- ☐ **④  Concours `مباراة التعليم` seasonal cluster** — year + `التسجيل` long-tails
  (KD 14–27), timed to the Sept rentrée. Concours engine scaffold already exists.
- ☐ **⑤  `visa allemagne maroc` surface** on `/allemagne` — 1.3K/KD27, the ONE Germany
  page with real demand. Build this; do NOT expand Germany further for SEO (demand desert).
- ☐ **⑥  CV/stage exactness** — ensure `/cv` targets `cv maroc` (480/KD12) & `stage maroc`
  (1.3K/KD14) exactly.
- ☐ **Content-quality pass for AdSense**: depth/originality/EEAT; no page reads templated.

**Other build work:**
- ☑ **Arabic deep content — guides done**: all 21 guides LIVE — `/ar/concours` (hub + 12)
  and `/ar/blog` (hub + 9), RTL, hreflang, sitemap.
- ☑ **`/ar/emploi` + `/ar/allemagne` hubs — SHIPPED 2026-07-16** (owner: "germany and jobs
  are only in french"). `/ar/emploi` = full Arabic jobs hub (الوظيفة العمومية / بوابة التشغيل
  العمومي / مباريات التوظيف) + Arabic ANAPEC guide (`/ar/blog/anapec-…`). `/ar/allemagne` =
  **lean** hub (Arabic Germany demand is ~nil per SEMrush — points to the FR interactive tools,
  lists the 2 AR Germany guides). `AR_SECTIONS` now routes the AR nav correctly (was bouncing to
  FR). hreflang + sitemap wired. Interactive tools (Chancenkarte calc, employer finder) stay FR.
- ☑ **Logo + animated wordmark — SHIPPED 2026-07-16.** "Career case" mark (Majorelle
  suitcase, saffron handle+latch = career-track start) + Bricolage wordmark with the
  track-line hover sweep + one-time entrance; reduced-motion safe. `<Logo/>` in header +
  footer. Mark also wired into the OG image (`opengraph-image.tsx`) + favicon (`app/icon.svg`).
- ☐ **FR↔AR hreflang** completion as more AR pages go live.

> **Ecosystem note (blind spot from the scrape):** the giant untapped gap vs
> massarservic.net (massar/moutamadris/login, 5M+ vol) belongs to the **sibling
> massar-service.net**, NOT khedma.pro. Don't clone Massar-login intent on a careers
> domain — instead cross-link massar-service.net (education traffic) → khedma.pro (careers).

## ☑ Deploy fixed — site is LIVE (2026-07-16)
Production was 404ing on every route. Three stacked causes, all fixed & verified
(www.khedma.pro/, /concours, /ar/concours, apex all return 200):
1. Build failed — `middleware.ts` `@/` alias rejected by the Edge bundler → removed.
2. Production branch was `main` (repo is `master`) → pushes became Previews → set to `master`.
3. **Framework Preset was `null`** → builds served 404 on all routes → pinned via
   `vercel.json` `{"framework":"nextjs"}`. Keep vercel.json; do not remove.

## ☑ Done (recent)
- ☑ Phases 2–5 (concours engine, emploi + CV builder, Allemagne tools, Arabic/RTL foundation).
- ☑ Design overhaul — "Majorelle & Saffron" identity + motion.
- ☑ Analytics: GA4 + GTM + Vercel + IndexNow + typed events (env-gated).
- ☑ Supabase backend: accounts + job board + saved jobs + application schema (env-gated).
- ☑ Arabic concours cluster live (`/ar/concours` + 12 guides).
- ☑ SEMrush headline pull (free MCP) → `docs/research/semrush-khedma-2026-07-15.md`.
- ☑ Pushed to GitHub (`Yae-seen/KHEDMA.PRO`) → Vercel redeploys.

## ⚠️ Operational note
- **One Claude session on this repo at a time.** A parallel session ("Yae-seen", commit
  `b459225`) committed overlapping work today; two sessions on `master` will collide.

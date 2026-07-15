# Khedma Pro — Build TODO (living)

Single source of truth for what's pending. **Claude: surface the "Owner actions" and
any time-sensitive items at the start of every session.** Update this file as items
move. Session-by-session detail lives in `docs/sessions/`.

Legend: ☐ open · ◐ in progress · ☑ done · 🔒 blocked on a decision · ⏰ time-sensitive

---

## ⏰ Time-sensitive
- ☐ **SEMrush Pro trial — 4 days left (from 2026-07-15).** Scrape everything we'll need
  via Chrome (logged-in Pro) and store it in `docs/research/`: full keyword lists for
  each pillar (FR + AR), competitor domains (organic + backlinks + top pages), keyword
  gap vs competitors, position tracking baseline, and the Ausbildung/Germany corridor.
  → own its own focused session; the MCP free tier already gave the headline numbers
  (`docs/research/semrush-khedma-2026-07-15.md`).

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

## ◐ / ☐ Build work (me — unblocked)
- ☑ **Arabic deep content — guides done**: all 21 guides LIVE in Arabic — `/ar/concours`
  (hub + 12) and `/ar/blog` (hub + 9), RTL, hreflang, sitemap. Remaining: `/ar/emploi`
  and `/ar/allemagne` HUBS (the interactive tools need Arabic labels — bigger, lower priority).
- ☐ **Logo + animated wordmark**: work-suitcase mark + "Khedma Pro" in a distinctive
  animated wordmark, wired into header/footer/OG. (Unblocked — the site's OWN brand,
  no trademark issue.)
- ☐ **`visa allemagne maroc` surface** on `/allemagne` (SEMrush: 1.3K vol, KD 27 — a
  clean win directly on strategy).
- ☐ **Content-quality pass for AdSense**: audit every page for depth/originality/EEAT;
  strengthen thin spots; ensure no page reads templated.
- ☐ **FR↔AR hreflang** completion as more AR pages go live.

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

# Khedma Pro — activation runbook

Everything below is **optional and off by default**. The site builds and runs as a
static guide with zero config; each integration turns on when you provide its keys.
Set variables in Vercel → Project → Settings → Environment Variables (and `.env.local`
for local dev). See `.env.example`.

## 1. Analytics (GA4 + Vercel) — LIVE

- **GA4 is live** (2026-07-16). Measurement ID `G-NQFV0NQGXH` is committed as a
  default in `components/site-analytics.tsx` + `next.config.ts`, so it loads in
  production with no env step. The site's Google tag `GT-MR5XFNM9` is a `gtag.js`
  tag pointing at the same GA4 property — the committed `G-` install captures all
  data with no double-counting, so nothing more is needed.
- **Verify**: GA4 → Reports → Realtime should show traffic within ~30 min of deploy.
- **Vercel Analytics + Speed Insights** — also live, no keys needed (auto-on on Vercel).
- **Override / new property**: set `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` in Vercel env
  (env wins over the committed default). Only a real **GTM container** (`GTM-XXXXXXX`,
  not a `GT-` tag) should go in `NEXT_PUBLIC_GTM_ID`.
- The CSP auto-widens for Google domains whenever a GA/GTM id is present (it is).
- Typed events already fire: `official_portal_click`, `tool_used`, `employer_search`,
  `cv_export`, `language_switch` → GTM dataLayer + Vercel Analytics.

## 2. IndexNow (instant indexing, Bing/Yandex)

- Key file is committed: `public/91f18365b37142a2b97cbc79171e5447.txt`.
- After deploy, submit all URLs: `node scripts/indexnow.mjs`
  (or specific paths: `node scripts/indexnow.mjs /concours /ar/concours`).

## 3. Supabase backend (accounts + job board + saved jobs)

1. Create a project at supabase.com.
2. Run the schema: paste `supabase/migrations/0001_init.sql` into the SQL editor
   (or `supabase db push` with the CLI). It creates `profiles`, `jobs`, `saved_jobs`,
   `applications` with Row-Level Security and a new-user trigger.
3. Set env:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (server only — for seeding/moderating jobs)
4. Add jobs: insert into `public.jobs` with `published_at` set and `is_verified = true`
   (only published+verified rows are public). Use the service-role key from an admin
   script or the Supabase table editor.
5. Enable email auth in Supabase → Authentication → Providers (email/password).

Once set: `/emploi/offres` shows the live board, `/compte` enables sign-up/login and
saved jobs. Unset → both show graceful placeholders; the rest of the site is unchanged.

## 4. Google Search Console + Bing Webmaster (post-deploy)

These need the site **live on its domain** first — they have no data until then.

1. Deploy to Vercel and point `khedma.pro` DNS.
2. **GSC**: add the `khedma.pro` property (DNS TXT or the HTML-tag method), submit
   `https://khedma.pro/sitemap.xml`.
3. **Bing Webmaster**: add the site (can import from GSC), submit the sitemap; Bing
   also picks up IndexNow pings automatically.
4. Then audits (coverage, queries, Core Web Vitals) become meaningful — re-pull SEMrush
   (`docs/research/semrush-khedma-2026-07-15.md`) each quarter.

## Deploy checklist

- [ ] `npm run build` green (it is).
- [ ] Push repo to GitHub, import to Vercel.
- [ ] Point `khedma.pro` DNS at Vercel; verify TLS.
- [ ] (optional) Set analytics / Supabase env vars.
- [ ] Submit sitemap to GSC + Bing; run `node scripts/indexnow.mjs`.

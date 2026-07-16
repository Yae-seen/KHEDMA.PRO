# AdSense / EEAT content audit — khedma.pro (2026-07-16)

6-agent audit (blog, concours, city pages, trust/AdSense, metadata+linking → synthesis).
Prioritized findings and their resolution.

## P0 — AdSense-review risk
- **Triplicated anti-scam boilerplate across all 10 city pages.** The "ne se paie jamais"
  message appeared 3× per city: the tail of each `whereToLook`, a near-identical anti-scam
  FAQ item (~7 cities), and the hardcoded "Postuler sans se faire arnaquer" box. Across the
  cluster = a duplicate-content / doorway signal, the clearest AdSense-review failure risk.
  → **Fix:** keep the hardcoded box as the ONE canonical notice; strip the security sentence
  from all 10 `whereToLook`; replace the duplicated FAQ with genuinely city-specific questions.
  (Applied via the eeat-fixes workflow.)

## P1 — quality / EEAT / accuracy
- **Fès/Oujda/Tétouan share a narrative skeleton** → intros rewritten to lead with each city's
  real differentiator (Fès artisanat/cuir; Oujda Aptiv + cleantech; Tétouan Tamuda Bay + université).
- **Tétouan was the thinnest page** (6 employers, 2 generic, 1 borrowed from Tanger) → real named
  local employers added; the borrowed "Renault / Tanger Med (à proximité)" line removed.
- **Stale brand facts** → Sitel → Foundever (ex-Sitel); "Renault-Nissan de Melloussa" → "Renault
  Tanger (usine de Melloussa)"; the "ex-" convention applied cluster-wide.
- **modele-cv-maroc.ts read generic/templated** → rewritten Morocco-specific (CV norms, FR/AR
  language, photo/CIN conventions, ANAPEC/OFPPT context, sector examples, cluster internal links).

## P2 — polish
- **Marrakech** had catch-all employers → replaced with specifically named operators + Sidi Ghanem firms.
- **metaTitle year inconsistency** (only 3/10 carried "2026") → year removed from all for a consistent, evergreen set.
- **/concours meta description too long** (~175 chars) → trimmed to ~154. (Applied directly.)

## Confirmed clean
- Trust pages present (à-propos, contact, confidentialité, mentions-légales); independence notices;
  no fake login/credential UI; no gov logos; **no live AdSense code yet** (correct — gated until approval).

# Official sources — concours (Phase 2)

Every concours status/deadline on khedma.pro must trace to a source below. Research
digest: `docs/research/concours-research-2026-07-15.json`. Last full sweep: **2026-07-15**.

**Confidence legend:** `official` = fetched directly from a `.gov.ma` / emploi-public.ma /
maroc.ma page · `secondary` = corroborated press/aggregator only (framed on-site as
"conditions des dernières sessions") · `geo-blocked` = official portal exists but is
unreachable outside Morocco (verify from a Moroccan IP).

## Central portals

| URL | Institution | Purpose | Reachable (EU) | Notes |
|---|---|---|---|---|
| https://www.emploi-public.ma | Min. Transition Numérique / Réforme Admin. | Central concours portal (avis, calendrier, dépôt, résultats) | ✅ | Primary source of truth; verifiable from abroad. Décret 2.11.621. |
| https://www.men.gov.ma/fr/concours | Min. Éducation Nationale | Concours + appels à candidatures enseignement | ✅ | Publishes بطاقات توصيف الاختبارات (exam-spec frameworks). |
| https://www.maroc.ma | Portail national | Official communiqués (e.g. CRMEF session) | ✅ | Used for the enseignants 2025 announcement. |
| https://www.mmsp.gov.ma | Min. Réforme Admin. | Operates emploi-public.ma | ✅ | — |

## Recruitment platforms (dépôt / inscription)

| URL | Institution | Reachable (EU) | Notes |
|---|---|---|---|
| https://concours.dgsn.gov.ma | Police (DGSN) | ❌ geo-blocked | Dec-2025 campaign verified via emploi-public.ma fiches (4139/2100/250/80 posts). |
| https://recrutement.gr.ma | Gendarmerie Royale | ❌ geo-blocked | Élève-gendarme 2026 (1500) verified via emploi-public.ma (code C41333/26). |
| https://recrutement.far.ma | Forces Armées Royales | ❌ (TLS) | Officiers/sous-off. 2026 closed 29 May (Le Matin). Soldat dates conflict → omitted. |
| https://recrutement.fa.gov.ma | Forces Auxiliaires | ❌ geo-blocked | Élèves Mokhaznis 2026 closed mid-Oct 2025 (corrected from Dec via verify pass). |
| https://e-recrutement.finances.gov.ma | Min. Finances (ADII/DGI/TGR) | ❌ geo-blocked | Deposit channel confirmed on emploi-public.ma fiches. |
| https://drh.justice.gov.ma | Min. Justice | ❌ | 450-post 2026 lot; rédacteurs verified-official (codes C41538/39/26). |
| http://ispits.sante.gov.ma | Min. Santé (ISPITS) | ❌ geo-blocked | 2026-27 admission (4985 places) closed 13 July; exams 25-26 July. |
| https://drh.sante.gov.ma | Min. Santé | ❌ geo-blocked | Health-recruitment deposit channel (800 infirmiers Jan 2026 verified). |
| https://wolouj.men.gov.ma | Min. Éducation (CRMEF) | ❌ geo-blocked | Teacher candidature validation; active during campaign (Oct-Nov). |
| https://tawdif.men.gov.ma | Min. Éducation | ❌ (DNS) | Teacher results/lists; seasonal. |

## Verification status per concours page

| Page | Latest verified fact | Confidence |
|---|---|---|
| concours-police-dgsn | Dec-2025 campaign closed (6,599 posts, exam 7 Dec) | official |
| concours-gendarmerie-royale | 2026 (1500) closed 14 Apr, exam 1 Jul | official |
| concours-forces-armees-royales | Officiers/sous-off. 2026 closed 29 May | secondary |
| concours-forces-auxiliaires | 2026 window closed ~16 Oct 2025 | secondary |
| concours-douane | 900 gardiens (Mar) + 226 inspecteurs (exam 5 Jul) closed | official |
| concours-impots-dgi | No own concours; via MEF 503 admin. (closed) | official |
| concours-tresorerie-tgr | No own 2026 concours found; via MEF | secondary |
| concours-enseignement | Nov-2025 session (19,000) closed | official |
| concours-infirmiers-ispits | 2026-27 admission closed 13 Jul | secondary |
| concours-ministere-sante | Médecins avis open (deadlines 21/23 Jul) | official |
| concours-ministere-interieur | 600-post 2026 concours closed (exams June) | secondary |
| concours-ministere-justice | 450-post lot closed 24 Apr; oral ongoing | official |

## Aggregators (NOT authoritative — used only as secondary corroboration)

alwadifa-maroc.com, jadid-alwadifa.com, dreamjob.ma, maroconcours.com,
wadifapublic.ma, orientation-chabab.com, tawjihnet.net, lematin.ma. On-site these appear
only in `sources` arrays with `official: false`, never as a dépôt channel.

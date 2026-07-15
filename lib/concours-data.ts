/**
 * Concours registry — the single source of truth for /concours listings.
 *
 * DATA DISCIPLINE (non-negotiable):
 * - `status` and `deadline` may only reflect facts verified against an official
 *   source (or clearly-sourced press) — never guessed. Default to
 *   "annonce-attendue" when the current campaign is unconfirmed.
 * - `officialUrl` must point to the organisme's real site or emploi-public.ma.
 * - `lastVerified` is the date the status fields were last checked.
 */

export type ConcoursCategory =
  | "securite"
  | "enseignement"
  | "sante"
  | "finances"
  | "administration";

export type ConcoursStatus = "ouvert" | "a-venir" | "cloture" | "annonce-attendue";

export interface Concours {
  slug: string;
  /** Page H1, e.g. "Concours de Police (DGSN) 2026". */
  title: string;
  /** Card label, e.g. "Police (DGSN)". */
  shortTitle: string;
  /** Arabic name — targets the مباراة توظيف phrasing. */
  titleAr: string;
  organisme: string;
  category: ConcoursCategory;
  /** Diploma levels recruited, e.g. ["Niveau bac", "Bac", "Bac+3"]. */
  niveaux: string[];
  status: ConcoursStatus;
  /** ISO date — only when verified. */
  deadline?: string;
  /** One-line status context shown on cards. */
  statusNote: string;
  officialUrl: string;
  officialLabel: string;
  lastVerified: string;
  metaDescription: string;
}

export const CATEGORY_LABELS: Record<ConcoursCategory, string> = {
  securite: "Sécurité & forces",
  enseignement: "Enseignement",
  sante: "Santé",
  finances: "Finances & douane",
  administration: "Administration & justice",
};

export const STATUS_LABELS: Record<ConcoursStatus, string> = {
  ouvert: "Candidatures ouvertes",
  "a-venir": "Annoncé — ouverture à venir",
  cloture: "Candidatures clôturées",
  "annonce-attendue": "Annonce officielle attendue",
};

export const CONCOURS: Concours[] = [
  {
    slug: "concours-police-dgsn",
    title: "Concours de Police (DGSN) 2026",
    shortTitle: "Police (DGSN)",
    titleAr: "مباراة توظيف الشرطة (الأمن الوطني)",
    organisme: "Direction Générale de la Sûreté Nationale",
    category: "securite",
    niveaux: ["Bac", "Bac+2", "Licence", "Master"],
    status: "annonce-attendue",
    statusNote:
      "La dernière campagne (concours du 7 décembre 2025, ~6 500 postes) est terminée. La prochaine annonce est habituellement publiée vers la mi-septembre.",
    officialUrl: "https://concours.dgsn.gov.ma/",
    officialLabel: "Portail officiel des concours DGSN",
    lastVerified: "2026-07-15",
    metaDescription:
      "Concours de police DGSN 2026 : conditions (âge, diplôme par grade), épreuves, dossier et candidature via le portail officiel. Guide complet sans arnaque.",
  },
  {
    slug: "concours-gendarmerie-royale",
    title: "Concours de la Gendarmerie Royale 2026",
    shortTitle: "Gendarmerie Royale",
    titleAr: "مباراة الدرك الملكي",
    organisme: "Gendarmerie Royale",
    category: "securite",
    niveaux: ["Bac"],
    status: "cloture",
    statusNote:
      "La campagne 2026 (1 500 élèves gendarmes) est clôturée depuis le 14 avril ; l'épreuve a eu lieu le 1er juillet. L'annonce annuelle tombe habituellement fin mars.",
    officialUrl: "https://recrutement.gr.ma/",
    officialLabel: "Plateforme officielle de recrutement de la Gendarmerie Royale",
    lastVerified: "2026-07-15",
    metaDescription:
      "Concours Gendarmerie Royale 2026 : conditions d'âge et de taille, diplôme requis, épreuves de sélection et où déposer sa candidature officiellement.",
  },
  {
    slug: "concours-forces-armees-royales",
    title: "Concours des Forces Armées Royales (FAR) 2026",
    shortTitle: "Forces Armées Royales",
    titleAr: "مباراة القوات المسلحة الملكية",
    organisme: "Forces Armées Royales",
    category: "securite",
    niveaux: ["Niveau collège", "Bac", "Bac+2"],
    status: "cloture",
    statusNote:
      "Les inscriptions élèves officiers et sous-officiers 2026 sont clôturées depuis fin mai. Le cycle annuel recommence au printemps ; le recrutement des soldats suit son propre calendrier.",
    officialUrl: "https://recrutement.far.ma/",
    officialLabel: "Plateforme officielle de recrutement des FAR",
    lastVerified: "2026-07-15",
    metaDescription:
      "Concours FAR 2026 : élèves officiers et sous-officiers, conditions d'admission, écoles militaires et procédure de candidature officielle.",
  },
  {
    slug: "concours-forces-auxiliaires",
    title: "Concours des Forces Auxiliaires 2026",
    shortTitle: "Forces Auxiliaires",
    titleAr: "مباراة القوات المساعدة",
    organisme: "Inspections Générales des Forces Auxiliaires (zones Nord et Sud)",
    category: "securite",
    niveaux: ["Niveau lycée", "Formation professionnelle"],
    status: "annonce-attendue",
    statusNote:
      "Les inscriptions de la campagne 2026 (élèves Mokhaznis) se sont closes mi-octobre 2025. La prochaine campagne annuelle est attendue à l'automne.",
    officialUrl: "https://recrutement.fa.gov.ma/",
    officialLabel: "Plateforme officielle de recrutement des Forces Auxiliaires",
    lastVerified: "2026-07-15",
    metaDescription:
      "Concours Forces Auxiliaires (Mokhazni) 2026 : conditions, niveau demandé, épreuves physiques et procédure officielle de candidature.",
  },
  {
    slug: "concours-douane",
    title: "Concours de la Douane (ADII) 2026",
    shortTitle: "Douane (ADII)",
    titleAr: "مباراة الجمارك",
    organisme: "Administration des Douanes et Impôts Indirects",
    category: "finances",
    niveaux: ["Bac", "Master"],
    status: "cloture",
    statusNote:
      "Les concours 2026 (900 gardiens des douanes, 226 inspecteurs) sont clôturés — écrits passés, phase de résultats. Candidatures via e-recrutement.finances.gov.ma.",
    officialUrl: "https://www.emploi-public.ma/fr/concours-liste",
    officialLabel: "Avis officiels des concours douane sur emploi-public.ma",
    lastVerified: "2026-07-15",
    metaDescription:
      "Concours douane ADII 2026 : grades (agent, technicien, inspecteur), diplômes requis, épreuves écrites et candidature via les canaux officiels.",
  },
  {
    slug: "concours-impots-dgi",
    title: "Concours des Impôts (DGI) 2026",
    shortTitle: "Impôts (DGI)",
    titleAr: "مباراة الضرائب",
    organisme: "Direction Générale des Impôts (via les concours du Ministère des Finances)",
    category: "finances",
    niveaux: ["Bac+2", "Master"],
    status: "annonce-attendue",
    statusNote:
      "La DGI recrute via les grands concours transverses du Ministère des Finances (503 administrateurs en 2026, clôturé). Prochaine campagne MEF à surveiller sur emploi-public.ma.",
    officialUrl: "https://www.emploi-public.ma/fr/concours-liste",
    officialLabel: "Avis officiels des concours finances sur emploi-public.ma",
    lastVerified: "2026-07-15",
    metaDescription:
      "Concours DGI 2026 : inspecteurs et techniciens des impôts, conditions de diplôme, épreuves et procédure de candidature officielle au Maroc.",
  },
  {
    slug: "concours-tresorerie-tgr",
    title: "Concours de la Trésorerie Générale (TGR) 2026",
    shortTitle: "Trésorerie (TGR)",
    titleAr: "مباراة الخزينة العامة",
    organisme: "Trésorerie Générale du Royaume (via les concours du Ministère des Finances)",
    category: "finances",
    niveaux: ["Bac+2", "Master"],
    status: "annonce-attendue",
    statusNote:
      "La TGR recrute principalement via les concours transverses du Ministère des Finances — aucun concours propre annoncé en 2026. À surveiller sur emploi-public.ma.",
    officialUrl: "https://www.tgr.gov.ma",
    officialLabel: "Site officiel de la TGR",
    lastVerified: "2026-07-15",
    metaDescription:
      "Concours TGR 2026 : grades recrutés à la Trésorerie Générale du Royaume, diplômes requis, épreuves et candidature via les canaux officiels.",
  },
  {
    slug: "concours-enseignement",
    title: "Concours de l'Enseignement 2026 (CRMEF)",
    shortTitle: "Enseignement (CRMEF)",
    titleAr: "مباراة التعليم",
    organisme: "Ministère de l'Éducation Nationale — AREF / CRMEF",
    category: "enseignement",
    niveaux: ["Licence"],
    status: "annonce-attendue",
    statusNote:
      "La session de novembre 2025 (19 000 postes) est terminée. La prochaine annonce annuelle est attendue vers octobre (candidature en ligne via wolouj.men.gov.ma).",
    officialUrl: "https://www.men.gov.ma/fr/concours",
    officialLabel: "Page officielle des concours du Ministère de l'Éducation Nationale",
    lastVerified: "2026-07-15",
    metaDescription:
      "Concours enseignement 2026 (CRMEF) : conditions d'âge et de diplôme, épreuves écrites et orales, spécialités et candidature officielle.",
  },
  {
    slug: "concours-infirmiers-ispits",
    title: "Concours ISPITS 2026 — Infirmiers et Techniciens de Santé",
    shortTitle: "ISPITS (Santé)",
    titleAr: "مباراة ولوج المعاهد العليا للمهن التمريضية",
    organisme: "Ministère de la Santé — ISPITS",
    category: "sante",
    niveaux: ["Bac"],
    status: "cloture",
    statusNote:
      "Les inscriptions 2026-2027 (4 985 places) se sont closes le 13 juillet ; épreuves écrites les 25 et 26 juillet dans les instituts. Inscription annuelle en été sur ispits.sante.gov.ma.",
    officialUrl: "http://ispits.sante.gov.ma",
    officialLabel: "Plateforme officielle d'inscription ISPITS",
    lastVerified: "2026-07-15",
    metaDescription:
      "Concours ISPITS 2026 : accès aux instituts d'infirmiers et techniciens de santé, conditions bac, seuil, préinscription et sélection officielle.",
  },
  {
    slug: "concours-ministere-sante",
    title: "Concours du Ministère de la Santé 2026 — Infirmiers, Médecins, Techniciens",
    shortTitle: "Ministère de la Santé",
    titleAr: "مباريات توظيف وزارة الصحة",
    organisme: "Ministère de la Santé et de la Protection Sociale",
    category: "sante",
    niveaux: ["Bac+2", "Licence", "Doctorat"],
    status: "ouvert",
    deadline: "2026-07-23",
    statusNote:
      "Deux avis pour médecins premier grade sont ouverts (clôtures les 21 et 23 juillet, épreuve le 26 juillet). Le grand concours annuel infirmiers/techniciens se tient habituellement en décembre-janvier.",
    officialUrl: "https://www.emploi-public.ma/fr/concours-liste",
    officialLabel: "Avis officiels des concours santé sur emploi-public.ma",
    lastVerified: "2026-07-15",
    metaDescription:
      "Concours du Ministère de la Santé 2026 : recrutement d'infirmiers, médecins et techniciens de santé — conditions, calendrier annuel et candidature via drh.sante.gov.ma.",
  },
  {
    slug: "concours-ministere-interieur",
    title: "Concours du Ministère de l'Intérieur 2026",
    shortTitle: "Ministère de l'Intérieur",
    titleAr: "مباراة وزارة الداخلية",
    organisme: "Ministère de l'Intérieur",
    category: "administration",
    niveaux: ["Bac", "Bac+2", "Master"],
    status: "cloture",
    statusNote:
      "Le grand concours 2026 (600 postes : 440 administrateurs, 160 techniciens) est clôturé — écrits passés en juin. Des concours provinciaux sont publiés au fil de l'année sur emploi-public.ma.",
    officialUrl: "https://www.emploi-public.ma/fr/concours-liste",
    officialLabel: "Avis officiels du Ministère de l'Intérieur sur emploi-public.ma",
    lastVerified: "2026-07-15",
    metaDescription:
      "Concours Ministère de l'Intérieur 2026 : grades administratifs et techniques, diplômes requis, épreuves et candidature officielle au Maroc.",
  },
  {
    slug: "concours-ministere-justice",
    title: "Concours du Ministère de la Justice 2026",
    shortTitle: "Ministère de la Justice",
    titleAr: "مباراة وزارة العدل",
    organisme: "Ministère de la Justice",
    category: "administration",
    niveaux: ["Bac+2", "Licence", "Master"],
    status: "cloture",
    statusNote:
      "Le lot 2026 (450 postes : rédacteurs judiciaires, délégués judiciaires, ingénieurs) est clôturé depuis avril — phase orale en cours. Candidatures via drh.justice.gov.ma.",
    officialUrl: "https://www.emploi-public.ma/fr/concours-liste",
    officialLabel: "Avis officiels du Ministère de la Justice sur emploi-public.ma",
    lastVerified: "2026-07-15",
    metaDescription:
      "Concours Ministère de la Justice 2026 : greffe et cadres judiciaires, conditions de diplôme, épreuves et procédure de candidature officielle.",
  },
];

export function getConcours(slug: string): Concours | undefined {
  return CONCOURS.find((c) => c.slug === slug);
}

export function concoursByCategory(): [ConcoursCategory, Concours[]][] {
  const order: ConcoursCategory[] = [
    "securite",
    "finances",
    "enseignement",
    "sante",
    "administration",
  ];
  return order
    .map((cat): [ConcoursCategory, Concours[]] => [
      cat,
      CONCOURS.filter((c) => c.category === cat),
    ])
    .filter(([, list]) => list.length > 0);
}

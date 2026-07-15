import type {
  ChancenkarteModel,
  CostModel,
  Occupation,
  Channel,
} from "@/lib/allemagne-types";

/**
 * Allemagne pillar data — YMYL. Every figure traces to an official source
 * (make-it-in-germany.com, BAMF, anerkennung-in-deutschland.de, rabat.diplo.de),
 * captured in docs/research/allemagne-research-2026-07-15.json. Tools are
 * indicative; the German authorities have the final say. Re-verify each season.
 */

export const ALLEMAGNE_LAST_VERIFIED = "2026-07-15";

/**
 * Chancenkarte points model — verified against the official system (in force
 * since 2024-06-01). Language/experience/age are EXCLUSIVE tiers, so each is a
 * "single" criterion; the remaining bonuses are independent "multi" toggles.
 */
export const CHANCENKARTE_MODEL: ChancenkarteModel = {
  threshold: 6,
  fastTrack:
    "Si votre diplôme est intégralement reconnu en Allemagne (Anerkennung complète), la Chancenkarte est accordée SANS passer par les points — il ne reste que les conditions générales (ressources, etc.).",
  sourceUrl: "https://www.make-it-in-germany.com/fr/",
  sourceLabel: "Vérifier sur Make it in Germany (officiel)",
  lastVerified: ALLEMAGNE_LAST_VERIFIED,
  baseline: [
    {
      id: "qualif",
      label: "J'ai un diplôme universitaire OU une qualification professionnelle d'au moins 2 ans",
      help: "Reconnue ou comparable dans le pays où elle a été obtenue.",
    },
    {
      id: "langue",
      label: "J'ai au moins l'allemand A1 OU l'anglais B2",
      help: "Niveau minimal exigé avant même de compter les points.",
    },
    {
      id: "fonds",
      label: "Je peux prouver des ressources d'environ 1 091 € / mois (≈ 13 092 € / an)",
      help: "Compte bloqué (Sperrkonto), engagement de prise en charge, ou contrat à temps partiel couvrant le séjour.",
    },
  ],
  criteria: [
    {
      id: "reconnaissance",
      label: "Reconnaissance du diplôme",
      mode: "single",
      help: "La reconnaissance PARTIELLE, ou une autorisation d'exercer une profession réglementée, vaut 4 points. Une reconnaissance complète vous oriente plutôt vers le raccourci.",
      options: [
        { id: "partielle", label: "Reconnaissance partielle ou autorisation d'exercer", points: 4 },
        { id: "aucune", label: "Pas encore de reconnaissance", points: 0 },
      ],
    },
    {
      id: "allemand",
      label: "Niveau d'allemand",
      mode: "single",
      help: "On ne compte que le niveau le plus élevé atteint (non cumulable).",
      options: [
        { id: "b2", label: "Allemand B2 ou plus", points: 3 },
        { id: "b1", label: "Allemand B1", points: 2 },
        { id: "a2", label: "Allemand A2", points: 1 },
        { id: "moins", label: "Moins de A2", points: 0 },
      ],
    },
    {
      id: "experience",
      label: "Expérience professionnelle",
      mode: "single",
      help: "Dans un métier requérant une qualification d'au moins 2 ans. On ne compte que le palier le plus élevé.",
      options: [
        { id: "5ans", label: "≥ 5 ans (sur les 7 dernières années)", points: 3 },
        { id: "2ans", label: "≥ 2 ans (sur les 5 dernières années)", points: 2 },
        { id: "moins", label: "Moins de 2 ans", points: 0 },
      ],
    },
    {
      id: "age",
      label: "Âge",
      mode: "single",
      help: "La loi compte l'âge strictement : moins de 35 ans révolus (donc jusqu'à 34) pour 2 points, de 35 à 39 ans pour 1 point.",
      options: [
        { id: "35", label: "Moins de 35 ans", points: 2 },
        { id: "40", label: "De 35 à 39 ans", points: 1 },
        { id: "plus", label: "40 ans ou plus", points: 0 },
      ],
    },
    {
      id: "bonus",
      label: "Atouts supplémentaires",
      mode: "multi",
      help: "Chacun de ces atouts ajoute des points, cumulables entre eux.",
      options: [
        { id: "anglais", label: "Anglais C1", points: 1 },
        {
          id: "sejour",
          label: "Séjour antérieur en Allemagne ≥ 6 mois (hors tourisme, 5 dernières années)",
          points: 1,
        },
        {
          id: "penurie",
          label: "Diplôme dans un métier en pénurie (Engpassberuf)",
          points: 1,
          hint: "Métiers de la liste officielle des professions en pénurie (santé, artisanat, technique…).",
        },
        {
          id: "conjoint",
          label: "Mon conjoint(e) postule avec moi et remplit aussi les conditions",
          points: 1,
        },
      ],
    },
  ],
};

/**
 * Cost estimator. Order-of-magnitude figures in EUR from official/public
 * sources; the funds line is the official proof-of-means figure. Ranges are
 * intentionally wide — this is a budget guide, not a quote.
 */
export const COST_MODEL: CostModel = {
  defaultMonths: 6,
  sourceUrl: "https://www.make-it-in-germany.com/fr/",
  lastVerified: ALLEMAGNE_LAST_VERIFIED,
  lines: [
    {
      id: "sperrkonto",
      label: "Preuve de ressources à justifier (compte bloqué / Sperrkonto)",
      amountEUR: 13092,
      kind: "oneTime",
      optional: true,
      note: "≈ 1 091 €/mois sur 12 mois. Ce n'est pas une dépense : c'est VOTRE argent, à montrer pour le visa Chancenkarte, restitué ensuite ~1/12 par mois. Décochez-le pour ne voir que les dépenses réelles.",
      sourceUrl: "https://www.make-it-in-germany.com/fr/",
    },
    {
      id: "visa",
      label: "Frais de visa national (Chancenkarte / travail)",
      amountEUR: 75,
      kind: "oneTime",
      note: "Payé en dirhams à Rabat via TLScontact.",
      sourceUrl: "https://rabat.diplo.de/ma-fr/service/visa-einreise",
    },
    {
      id: "reconnaissance",
      label: "Reconnaissance du diplôme (Anerkennung)",
      amountEUR: [100, 600],
      kind: "oneTime",
      optional: true,
      note: "Frais de la procédure ; une aide (Anerkennungszuschuss) peut en rembourser une partie.",
    },
    {
      id: "traduction",
      label: "Traductions assermentées des documents",
      amountEUR: [200, 500],
      kind: "oneTime",
      optional: true,
      note: "Environ 30–60 € par page ; un dossier complet revient souvent à 200–500 €.",
    },
    {
      id: "langue",
      label: "Test de langue allemande (Goethe / telc / ÖSD)",
      amountEUR: [165, 230],
      kind: "oneTime",
      optional: true,
      note: "Par niveau passé (≈ 1 800–2 500 MAD au Maroc).",
    },
    {
      id: "vol",
      label: "Vol Maroc → Allemagne (aller simple)",
      amountEUR: [90, 270],
      kind: "oneTime",
      optional: true,
    },
    {
      id: "assurance",
      label: "Assurance santé (phase de recherche)",
      amountEUR: [30, 110],
      kind: "monthly",
      note: "Assurance expat/voyage exigée pour le visa, puis assurance santé allemande une fois employé.",
    },
    {
      id: "loyer",
      label: "Loyer + charges (chambre en colocation)",
      amountEUR: [500, 800],
      kind: "monthly",
      optional: true,
      note: "Bien moins cher dans les petites villes que dans les grandes métropoles.",
    },
    {
      id: "caution",
      label: "Caution de logement (Kaution)",
      amountEUR: 1500,
      kind: "oneTime",
      optional: true,
      note: "Jusqu'à 3 mois de loyer hors charges (max légal) ; restituable au départ.",
    },
  ],
};

/**
 * In-demand occupations for the employer finder. `regulated` and language
 * levels reflect the recognition rules: regulated professions (e.g. Pflege)
 * require Anerkennung + a stated German level before practising.
 */
// NB: for a Moroccan (pays tiers), la reconnaissance du diplôme (Anerkennung)
// est requise pour le VISA même quand le métier n'est pas « réglementé » pour
// l'emploi. Le badge « réglementé » indique seulement s'il faut une autorisation
// pour EXERCER (santé, éducation…).
export const OCCUPATIONS: Occupation[] = [
  {
    id: "pflege",
    fr: "Infirmier(ère) / personnel soignant",
    de: "Pflegefachperson",
    ar: "التمريض",
    regulated: true,
    typicalLanguage: "B2",
    note: "Profession réglementée : reconnaissance du diplôme et examen de langue spécialisé (B2) obligatoires avant d'exercer. Pénurie n°1 en Allemagne.",
  },
  {
    id: "aide-soignant",
    fr: "Aide-soignant(e)",
    de: "Pflegehelfer/in",
    ar: "مساعد تمريض",
    regulated: true,
    typicalLanguage: "B1–B2",
    note: "Réglementée au niveau du Land (règles variables). Souvent une porte d'entrée avant la formation complète.",
  },
  {
    id: "elektriker",
    fr: "Électricien / électronicien",
    de: "Elektroniker",
    ar: "كهربائي",
    regulated: false,
    typicalLanguage: "B1",
    note: "Non réglementé pour l'emploi (reconnaissance requise pour le visa). Le Meister n'est exigé que pour s'installer à son compte. Forte pénurie (Handwerk).",
  },
  {
    id: "sanitaer",
    fr: "Plombier / chauffagiste (sanitaire-climatisation)",
    de: "Anlagenmechaniker SHK",
    ar: "السباكة والتدفئة",
    regulated: false,
    typicalLanguage: "B1",
    note: "Très forte pénurie liée à la transition énergétique (pompes à chaleur).",
  },
  {
    id: "schweisser",
    fr: "Soudeur / constructeur métallique",
    de: "Schweißer / Metallbauer",
    ar: "لحام",
    regulated: false,
    typicalLanguage: "B1",
    note: "Les certificats de soudure (DIN EN ISO 9606) sont un atout majeur. Pénurie dans l'industrie et la construction.",
  },
  {
    id: "kfz",
    fr: "Mécatronicien / mécanicien automobile",
    de: "Kfz-Mechatroniker",
    ar: "ميكانيكي السيارات",
    regulated: false,
    typicalLanguage: "B1",
    note: "Demande soutenue, notamment hors des grandes métropoles.",
  },
  {
    id: "bau",
    fr: "Métiers du bâtiment (maçon, menuisier, charpentier…)",
    de: "Bauberufe / Handwerk",
    ar: "مهن البناء",
    regulated: false,
    typicalLanguage: "B1",
    note: "Le Handwerk du bâtiment recrute fortement, surtout hors des grandes villes.",
  },
  {
    id: "kraftfahrer",
    fr: "Chauffeur poids lourd",
    de: "Berufskraftfahrer",
    ar: "سائق شاحنة",
    regulated: false,
    typicalLanguage: "B1",
    note: "Permis UE + qualification de conducteur (Code 95) requis. Pénurie explicitement citée par l'Agence fédérale.",
  },
  {
    id: "koch",
    fr: "Cuisinier / hôtellerie-restauration",
    de: "Koch",
    ar: "طباخ",
    regulated: false,
    typicalLanguage: "B1",
    note: "Pénurie forte et durable dans l'hôtellerie-restauration.",
  },
  {
    id: "erzieher",
    fr: "Éducateur / petite enfance",
    de: "Erzieher/in",
    ar: "مربي الأطفال",
    regulated: true,
    typicalLanguage: "B2",
    note: "Profession réglementée (reconnaissance de niveau Land) ; exige souvent une qualification complémentaire. Forte pénurie.",
  },
];

/** Small/medium German cities with strong labour shortage and open employers. */
export const DE_CITIES: string[] = [
  "Görlitz",
  "Zwickau",
  "Gera",
  "Chemnitz",
  "Cottbus",
  "Plauen",
  "Bautzen",
  "Suhl",
  "Schwerin",
  "Dessau-Roßlau",
  "Gelsenkirchen",
  "Hof",
  "Salzgitter",
  "Wilhelmshaven",
];

/** Official channels. Search patterns use {occupation} (German term) and {city}. */
export const CHANNELS: Channel[] = [
  {
    name: "Jobbörse (Agence fédérale pour l'emploi)",
    url: "https://www.arbeitsagentur.de/jobsuche/",
    official: true,
    useFor: "La plus grande base d'offres publique d'Allemagne. Filtrable par métier et par ville.",
    searchUrlPattern:
      "https://www.arbeitsagentur.de/jobsuche/suche?was={occupation}&wo={city}&angebotsart=1&umkreis=50",
  },
  {
    name: "EURES (portail européen de l'emploi)",
    url: "https://eures.europa.eu/index_fr",
    official: true,
    useFor: "Offres d'employeurs allemands via la base de l'UE (un visa de travail reste requis).",
    searchUrlPattern:
      "https://europa.eu/eures/portal/jv-se/search?lang=fr&countries=DE&keywords={occupation}",
  },
  {
    name: "Make it in Germany — Quick-Check",
    url: "https://www.make-it-in-germany.com/fr/visa-sejour/quick-check",
    official: true,
    useFor: "Auto-évaluation officielle : identifie la voie de visa adaptée à votre profil. À faire en premier.",
  },
  {
    name: "Anerkennungs-Finder (reconnaissance des diplômes)",
    url: "https://www.anerkennung-in-deutschland.de/html/fr/index.php",
    official: true,
    useFor: "Vérifier si votre métier est réglementé, trouver l'autorité compétente et lancer la reconnaissance.",
  },
];

/**
 * Static reference data for the Emploi pillar. Khedma Pro does not (yet) host a
 * live job board — the ecosystem stack is intentionally backend-free. Instead
 * the pillar orients candidates toward the right official/verified channels and
 * provides tools (CV builder) and guides. Everything here is evergreen.
 */

export interface JobChannel {
  name: string;
  href: string;
  /** Official government/agency channel vs private aggregator. */
  official: boolean;
  scope: string;
  description: string;
}

/** Where to actually find jobs in Morocco, labelled by trust level. */
export const JOB_CHANNELS: JobChannel[] = [
  {
    name: "emploi-public.ma",
    href: "https://www.emploi-public.ma/fr/concours-liste",
    official: true,
    scope: "Fonction publique",
    description:
      "Le portail officiel des concours de l'État, des collectivités territoriales et des établissements publics. La référence pour tout emploi public par concours.",
  },
  {
    name: "ANAPEC",
    href: "https://www.anapec.org",
    official: true,
    scope: "Secteur privé & intermédiation",
    description:
      "L'agence publique pour l'emploi : offres du secteur privé, programmes d'insertion, et accompagnement des chercheurs d'emploi partout au Maroc.",
  },
  {
    name: "Portails des grands recruteurs publics",
    href: "https://www.emploi-public.ma/fr/",
    official: true,
    scope: "OCP, ONCF, ONEE, Barid Al-Maghrib…",
    description:
      "Plusieurs grands établissements recrutent via leur propre plateforme carrière (souvent liée depuis emploi-public.ma), en plus des concours publiés au portail.",
  },
];

export interface Sector {
  key: string;
  label: string;
  labelAr: string;
  note: string;
}

/** Sectors that recruit heavily in Morocco — for orientation, not live listings. */
export const SECTORS: Sector[] = [
  {
    key: "public",
    label: "Fonction publique",
    labelAr: "الوظيفة العمومية",
    note: "Recrutement par concours, poste stable, échelles et grades. Voir le hub Concours.",
  },
  {
    key: "sante",
    label: "Santé",
    labelAr: "الصحة",
    note: "Infirmiers, techniciens, médecins — public (concours) et cliniques privées.",
  },
  {
    key: "enseignement",
    label: "Enseignement",
    labelAr: "التعليم",
    note: "Cadres des AREF (concours) et établissements privés.",
  },
  {
    key: "btp",
    label: "BTP & industrie",
    labelAr: "البناء والصناعة",
    note: "Techniciens, ingénieurs, ouvriers qualifiés — forte demande, y compris à l'export.",
  },
  {
    key: "digital",
    label: "Numérique & offshoring",
    labelAr: "الرقمنة",
    note: "Développeurs, support, centres de relation client — Casablanca, Rabat, Tétouan, Fès.",
  },
  {
    key: "tourisme",
    label: "Tourisme & services",
    labelAr: "السياحة والخدمات",
    note: "Hôtellerie, restauration, commerce — Marrakech, Agadir, Tanger et les grandes villes.",
  },
];

/** Major job markets — anchors for future by-city landing pages. */
export const CITIES: string[] = [
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Tanger",
  "Fès",
  "Agadir",
  "Meknès",
  "Oujda",
  "Kénitra",
  "Tétouan",
];

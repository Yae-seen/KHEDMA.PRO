export interface NavItem {
  label: string;
  href: string;
}

export interface Pillar {
  key: string;
  label: string;
  href: string;
  tagline: string;
  description: string;
}

export const SITE = {
  name: "Khedma Pro",
  tagline: "Concours, emploi et votre voie vers l'Allemagne",
  description:
    "La plateforme carrière des jeunes Marocains : concours de la fonction publique, offres d'emploi vérifiées, et votre parcours vers l'Allemagne (Ausbildung & Chancenkarte) — sans arnaques.",
  baseUrl: "https://khedma.pro",
  locale: "fr_MA",
  nav: [
    { label: "Concours", href: "/concours" },
    { label: "Emploi", href: "/emploi" },
    { label: "Allemagne", href: "/allemagne" },
    { label: "Blog", href: "/blog" },
  ] as NavItem[],
} as const;

export const PILLARS: Pillar[] = [
  {
    key: "concours",
    label: "Concours",
    href: "/concours",
    tagline: "Fonction publique & مباريات",
    description:
      "Tous les concours de recrutement en cours au Maroc, par ministère et par date limite — avec les modèles d'épreuves et comment postuler sans se faire arnaquer.",
  },
  {
    key: "emploi",
    label: "Emploi",
    href: "/emploi",
    tagline: "Offres vérifiées & CV",
    description:
      "Des offres d'emploi vérifiées dans tout le Maroc, public et privé, plus un CV builder adapté au marché marocain — pour postuler avec confiance.",
  },
  {
    key: "allemagne",
    label: "Allemagne",
    href: "/allemagne",
    tagline: "Ausbildung & Chancenkarte",
    description:
      "Votre parcours réel vers l'Allemagne : éligibilité Chancenkarte, métiers qui recrutent (électricité, soins, artisanat) et employeurs dans les petites villes qui embauchent des Marocains.",
  },
];

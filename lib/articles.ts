/** Blog article registry — metadata only; content lives in `content/blog/<slug>.ts`. */

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  category: "Concours" | "Emploi" | "Allemagne";
  publishedAt: string;
  updatedAt: string;
}

export const ARTICLES: ArticleMeta[] = [
  {
    slug: "comment-postuler-concours-fonction-publique",
    title: "Comment postuler à un concours de la fonction publique au Maroc",
    description:
      "Le guide pas-à-pas : où trouver les annonces officielles, préparer le dossier, candidater sur emploi-public.ma et suivre sa convocation — sans intermédiaire.",
    category: "Concours",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
  },
  {
    slug: "concours-arnaques-comment-les-eviter",
    title: "Arnaques aux concours : aucun concours officiel ne demande de paiement",
    description:
      "Faux concours, « frais de dossier », pages Facebook frauduleuses : comment reconnaître une annonce officielle et protéger votre argent et vos données.",
    category: "Concours",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
  },
  {
    slug: "exemples-concours-anciens-sujets",
    title: "Exemples de concours et anciens sujets : comment s'entraîner efficacement",
    description:
      "Où trouver les anciens sujets des concours marocains, comment sont structurées les épreuves (culture générale, spécialité, langues) et comment s'entraîner.",
    category: "Concours",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
  },
  {
    slug: "calendrier-concours-maroc",
    title: "Calendrier des concours au Maroc : qui recrute à quelle période",
    description:
      "Police, gendarmerie, douane, enseignement, santé : les périodes habituelles d'annonce des grands concours marocains pour préparer votre année.",
    category: "Concours",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
  },
  {
    slug: "concours-par-niveau-diplome",
    title: "Quel concours avec votre diplôme ? Sans bac, bac, bac+2, licence, master",
    description:
      "La carte complète des concours marocains par niveau d'études : ce que vous pouvez viser sans bac, avec le bac, un bac+2, une licence ou un master.",
    category: "Concours",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
  },
  {
    slug: "inscription-concours-enseignement",
    title: "Inscription au concours de l'enseignement au Maroc : le guide",
    description:
      "Comment s'inscrire au concours des enseignants-cadres des AREF : plateforme officielle, création de compte, dossier, pièces et fenêtre annuelle.",
    category: "Concours",
    publishedAt: "2026-07-16",
    updatedAt: "2026-07-16",
  },
  {
    slug: "resultats-concours-enseignement",
    title: "Résultats du concours de l'enseignement : où les consulter",
    description:
      "Où et comment consulter les résultats du concours de l'enseignement au Maroc : présélection, admis à l'écrit et listes définitives par AREF.",
    category: "Concours",
    publishedAt: "2026-07-16",
    updatedAt: "2026-07-16",
  },
  {
    slug: "preparer-concours-enseignement",
    title: "Préparer le concours de l'enseignement : épreuves & méthode",
    description:
      "Comment préparer la مباراة التعليم : structure des épreuves, plan d'entraînement, anciens sujets et نماذج, et conseils concrets par matière.",
    category: "Concours",
    publishedAt: "2026-07-16",
    updatedAt: "2026-07-16",
  },
  {
    slug: "concours-enseignement-prescolaire",
    title: "Concours enseignement préscolaire au Maroc : le guide",
    description:
      "Concours de l'enseignement préscolaire et primaire (التعليم الأولي) au Maroc : public visé, profils, conditions, inscription et préparation.",
    category: "Concours",
    publishedAt: "2026-07-16",
    updatedAt: "2026-07-16",
  },
  {
    slug: "anapec-inscription-espace-candidat",
    title: "ANAPEC : inscription et espace candidat, le guide clair",
    description:
      "Comment créer votre espace candidat ANAPEC, postuler aux offres et vous connecter — un guide simple, gratuit et sans arnaque pour votre recherche d'emploi.",
    category: "Emploi",
    publishedAt: "2026-07-16",
    updatedAt: "2026-07-16",
  },
  {
    slug: "emploi-public-ma-portail",
    title: "emploi-public.ma : créer un compte et postuler aux concours",
    description:
      "Guide pratique du portail emploi-public.ma : créer un compte candidat, chercher un concours et déposer sa candidature en ligne, sans arnaque.",
    category: "Emploi",
    publishedAt: "2026-07-16",
    updatedAt: "2026-07-16",
  },
  {
    slug: "trouver-emploi-public-maroc",
    title: "Emploi public au Maroc : comment le décrocher (guide complet)",
    description:
      "Fonction publique, contractuels, ANAPEC : où chercher un emploi public au Maroc, comment postuler par concours, et comment éviter les arnaques. Le guide pas-à-pas.",
    category: "Emploi",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
  },
  {
    slug: "chercher-emploi-par-ville-maroc",
    title: "Chercher un emploi par ville au Maroc : le guide 2026",
    description:
      "Chercher un emploi par ville au Maroc : secteurs qui recrutent, canaux locaux, ANAPEC et réflexes anti-arnaque. Guide pratique par ville.",
    category: "Emploi",
    publishedAt: "2026-07-16",
    updatedAt: "2026-07-16",
  },
  {
    slug: "modele-cv-maroc",
    title: "Modèle de CV au Maroc : structure, langue et exemples 2026",
    description:
      "Faire un CV au format marocain : rubriques attendues, langue FR ou arabe, photo et CIN, exemples offshoring et industrie, erreurs qui éliminent.",
    category: "Emploi",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-16",
  },
  {
    slug: "trouver-stage-maroc",
    title: "Trouver un stage au Maroc : offres, convention et stage PFE",
    description:
      "Guide concret pour trouver un stage au Maroc : types de stage, où chercher, la convention, la gratification et comment éviter les stages abusifs.",
    category: "Emploi",
    publishedAt: "2026-07-16",
    updatedAt: "2026-07-16",
  },
  {
    slug: "lettre-motivation-maroc",
    title: "Lettre de motivation au Maroc : structure, modèle et erreurs",
    description:
      "Rédiger une lettre de motivation efficace au Maroc : structure vous-moi-nous, choix du français ou de l'arabe, trames par secteur et erreurs à éviter.",
    category: "Emploi",
    publishedAt: "2026-07-16",
    updatedAt: "2026-07-16",
  },
  {
    slug: "visa-allemagne-maroc",
    title: "Visa Allemagne Maroc 2026 : travail, recherche d'emploi, études",
    description:
      "Visa Allemagne depuis le Maroc : visa travail, recherche d'emploi (Chancenkarte), études et Ausbildung. Conditions, procédure, délais et coûts 2026.",
    category: "Allemagne",
    publishedAt: "2026-07-16",
    updatedAt: "2026-07-16",
  },
  {
    slug: "trouver-employeur-allemagne-metier-ville",
    title: "Trouver un employeur en Allemagne : la stratégie métier × ville",
    description:
      "Les Marocains ne cherchent pas « Ausbildung » : ils cherchent un métier dans une ville allemande qui recrute. La méthode concrète pour trouver un employeur qui parraine.",
    category: "Allemagne",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
  },
  {
    slug: "chancenkarte-carte-opportunite-guide",
    title: "Chancenkarte (carte d'opportunité) : le guide pour les Marocains",
    description:
      "La Chancenkarte permet de venir chercher un emploi qualifié en Allemagne. Conditions, système de points, durée et démarches — expliqués simplement, sources officielles.",
    category: "Allemagne",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
  },
];

export function getArticleMeta(slug: string): ArticleMeta | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

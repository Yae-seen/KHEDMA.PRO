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
    slug: "modele-cv-maroc",
    title: "Modèle de CV au Maroc : structure, conseils et erreurs à éviter",
    description:
      "Comment faire un bon CV au format marocain : les rubriques attendues, la mise en page, les erreurs qui éliminent, et un outil gratuit pour le créer en PDF.",
    category: "Emploi",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
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

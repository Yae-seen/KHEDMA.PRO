import type { ArticleContent } from "@/lib/content-types";
import { article as commentPostuler } from "@/content/ar/blog/comment-postuler-concours-fonction-publique";
import { article as arnaques } from "@/content/ar/blog/concours-arnaques-comment-les-eviter";
import { article as exemplesSujets } from "@/content/ar/blog/exemples-concours-anciens-sujets";
import { article as calendrier } from "@/content/ar/blog/calendrier-concours-maroc";
import { article as parNiveau } from "@/content/ar/blog/concours-par-niveau-diplome";
import { article as anapec } from "@/content/ar/blog/anapec-inscription-espace-candidat";
import { article as emploiPublicPortail } from "@/content/ar/blog/emploi-public-ma-portail";
import { article as emploiPublic } from "@/content/ar/blog/trouver-emploi-public-maroc";
import { article as emploiParVille } from "@/content/ar/blog/chercher-emploi-par-ville-maroc";
import { article as cvMaroc } from "@/content/ar/blog/modele-cv-maroc";
import { article as chancenkarte } from "@/content/ar/blog/chancenkarte-carte-opportunite-guide";
import { article as employeurAllemagne } from "@/content/ar/blog/trouver-employeur-allemagne-metier-ville";

const articles: ArticleContent[] = [
  commentPostuler,
  arnaques,
  exemplesSujets,
  calendrier,
  parNiveau,
  anapec,
  emploiPublicPortail,
  emploiPublic,
  emploiParVille,
  cvMaroc,
  chancenkarte,
  employeurAllemagne,
];

export const BLOG_CONTENT_AR: Record<string, ArticleContent> = Object.fromEntries(
  articles.map((a) => [a.slug, a]),
);

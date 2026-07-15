import type { ArticleContent } from "@/lib/content-types";
import { article as commentPostuler } from "@/content/blog/comment-postuler-concours-fonction-publique";
import { article as arnaques } from "@/content/blog/concours-arnaques-comment-les-eviter";
import { article as exemplesSujets } from "@/content/blog/exemples-concours-anciens-sujets";
import { article as calendrier } from "@/content/blog/calendrier-concours-maroc";
import { article as parNiveau } from "@/content/blog/concours-par-niveau-diplome";
import { article as anapec } from "@/content/blog/anapec-inscription-espace-candidat";
import { article as emploiPublic } from "@/content/blog/trouver-emploi-public-maroc";
import { article as cvMaroc } from "@/content/blog/modele-cv-maroc";
import { article as chancenkarte } from "@/content/blog/chancenkarte-carte-opportunite-guide";
import { article as employeurAllemagne } from "@/content/blog/trouver-employeur-allemagne-metier-ville";

const articles: ArticleContent[] = [
  commentPostuler,
  arnaques,
  exemplesSujets,
  calendrier,
  parNiveau,
  anapec,
  emploiPublic,
  cvMaroc,
  chancenkarte,
  employeurAllemagne,
];

export const BLOG_CONTENT: Record<string, ArticleContent> = Object.fromEntries(
  articles.map((a) => [a.slug, a]),
);

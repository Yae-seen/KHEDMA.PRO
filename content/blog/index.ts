import type { ArticleContent } from "@/lib/content-types";
import { article as commentPostuler } from "@/content/blog/comment-postuler-concours-fonction-publique";
import { article as arnaques } from "@/content/blog/concours-arnaques-comment-les-eviter";
import { article as exemplesSujets } from "@/content/blog/exemples-concours-anciens-sujets";
import { article as calendrier } from "@/content/blog/calendrier-concours-maroc";
import { article as parNiveau } from "@/content/blog/concours-par-niveau-diplome";
import { article as emploiPublic } from "@/content/blog/trouver-emploi-public-maroc";
import { article as cvMaroc } from "@/content/blog/modele-cv-maroc";

const articles: ArticleContent[] = [
  commentPostuler,
  arnaques,
  exemplesSujets,
  calendrier,
  parNiveau,
  emploiPublic,
  cvMaroc,
];

export const BLOG_CONTENT: Record<string, ArticleContent> = Object.fromEntries(
  articles.map((a) => [a.slug, a]),
);

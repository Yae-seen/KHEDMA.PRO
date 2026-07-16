import type { ArticleContent } from "@/lib/content-types";
import { article as commentPostuler } from "@/content/blog/comment-postuler-concours-fonction-publique";
import { article as arnaques } from "@/content/blog/concours-arnaques-comment-les-eviter";
import { article as exemplesSujets } from "@/content/blog/exemples-concours-anciens-sujets";
import { article as calendrier } from "@/content/blog/calendrier-concours-maroc";
import { article as parNiveau } from "@/content/blog/concours-par-niveau-diplome";
import { article as inscriptionConcoursEnseignement } from "@/content/blog/inscription-concours-enseignement";
import { article as resultatsConcoursEnseignement } from "@/content/blog/resultats-concours-enseignement";
import { article as preparerConcoursEnseignement } from "@/content/blog/preparer-concours-enseignement";
import { article as concoursEnseignementPrescolaire } from "@/content/blog/concours-enseignement-prescolaire";
import { article as anapec } from "@/content/blog/anapec-inscription-espace-candidat";
import { article as emploiPublicPortail } from "@/content/blog/emploi-public-ma-portail";
import { article as emploiPublic } from "@/content/blog/trouver-emploi-public-maroc";
import { article as emploiParVille } from "@/content/blog/chercher-emploi-par-ville-maroc";
import { article as cvMaroc } from "@/content/blog/modele-cv-maroc";
import { article as chancenkarte } from "@/content/blog/chancenkarte-carte-opportunite-guide";
import { article as employeurAllemagne } from "@/content/blog/trouver-employeur-allemagne-metier-ville";
import { article as trouverStageMaroc } from "@/content/blog/trouver-stage-maroc";
import { article as lettreMotivationMaroc } from "@/content/blog/lettre-motivation-maroc";
import { article as visaAllemagneMaroc } from "@/content/blog/visa-allemagne-maroc";

const articles: ArticleContent[] = [
  commentPostuler,
  arnaques,
  exemplesSujets,
  calendrier,
  parNiveau,
  inscriptionConcoursEnseignement,
  resultatsConcoursEnseignement,
  preparerConcoursEnseignement,
  concoursEnseignementPrescolaire,
  anapec,
  emploiPublicPortail,
  emploiPublic,
  emploiParVille,
  cvMaroc,
  chancenkarte,
  employeurAllemagne,
  trouverStageMaroc,
  lettreMotivationMaroc,
  visaAllemagneMaroc,
];

export const BLOG_CONTENT: Record<string, ArticleContent> = Object.fromEntries(
  articles.map((a) => [a.slug, a]),
);

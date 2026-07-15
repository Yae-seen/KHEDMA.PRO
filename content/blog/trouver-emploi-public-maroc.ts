import type { ArticleContent } from "@/lib/content-types";

export const article: ArticleContent = {
  slug: "trouver-emploi-public-maroc",
  intro: [
    "L'emploi public (الوظيفة العمومية) reste l'objectif de beaucoup de jeunes Marocains : un poste stable, une grille claire, et une carrière lisible. Mais entre les concours de la fonction publique, les recrutements par contrat et le rôle de l'ANAPEC, on s'y perd vite — et les arnaques prospèrent sur cette confusion.",
    "Voici, simplement, comment fonctionne l'emploi public au Maroc, où chercher les vraies offres, et comment postuler par les canaux officiels — sans jamais payer un dirham.",
  ],
  body: [
    { type: "h2", text: "Emploi public : deux grandes voies" },
    {
      type: "p",
      text: "Il faut distinguer deux réalités souvent mélangées :",
    },
    {
      type: "ul",
      items: [
        "**La fonction publique statutaire** : on y entre par **concours**, au mérite, pour occuper un grade (adjoint, technicien, administrateur, ingénieur…) avec une carrière et une rémunération encadrées par la loi.",
        "**Le recrutement par contrat** : certaines administrations (santé, éducation, collectivités) recrutent aussi des contractuels, avec des modalités propres à chaque avis.",
      ],
    },
    {
      type: "p",
      text: "Dans les deux cas, la porte d'entrée est un **avis officiel**. Notre [hub Concours](/concours) détaille chaque grand concours public : police, gendarmerie, douane, impôts, enseignement, santé, administrations.",
    },
    { type: "h2", text: "Où chercher les vraies offres" },
    {
      type: "p",
      text: "Trois canaux fiables couvrent l'essentiel :",
    },
    {
      type: "table",
      headers: ["Canal", "Ce qu'on y trouve", "Officiel"],
      rows: [
        ["emploi-public.ma", "Tous les concours de l'État, des collectivités et des établissements publics", "Oui"],
        ["ANAPEC", "Offres du secteur privé, programmes d'insertion, accompagnement", "Oui (agence publique)"],
        ["Sites carrière des grands recruteurs", "OCP, ONCF, ONEE, Barid Al-Maghrib… via leurs propres plateformes", "Oui"],
      ],
    },
    {
      type: "note",
      text: "Le portail [emploi-public.ma](https://www.emploi-public.ma/fr/concours-liste) est la référence pour l'emploi public par concours. L'[ANAPEC](https://www.anapec.org) couvre surtout le privé et l'intermédiation. Les sites « alwadifa » que l'on croise partout sont des relais privés, pas des sources officielles.",
    },
    { type: "h2", text: "Comment postuler, étape par étape" },
    {
      type: "ol",
      items: [
        "**Créez votre compte** sur emploi-public.ma (pour les concours) : e-mail valide, profil, diplômes et CV renseignés une fois pour toutes.",
        "**Repérez l'avis** qui correspond à votre diplôme et à votre spécialité, et lisez-le en entier (grade, pièces, date limite).",
        "**Préparez vos documents** au format PDF (2 Mo maximum par pièce) avant de commencer le dépôt.",
        "**Déposez votre candidature** avant la date limite (souvent 16h30), en ligne ou par voie postale selon l'avis.",
        "**Suivez votre dossier** et surveillez la publication des listes de convoqués.",
      ],
    },
    {
      type: "p",
      text: "Pour le détail complet de la procédure de concours, lisez notre guide [Comment postuler à un concours de la fonction publique](/blog/comment-postuler-concours-fonction-publique).",
    },
    { type: "h2", text: "Un bon CV, ça change tout" },
    {
      type: "p",
      text: "Que ce soit pour un concours ou pour le privé, un CV clair d'une page fait la différence. Utilisez notre [CV Builder gratuit](/cv) pour en créer un au format marocain et l'enregistrer en PDF, sans inscription.",
    },
    { type: "h2", text: "Attention aux arnaques" },
    {
      type: "warning",
      text: "Aucun emploi public officiel ne demande de paiement. Ni « frais de dossier », ni intermédiaire « garanti », ni avance pour réserver un poste. L'inscription à l'ANAPEC comme aux concours est gratuite. Apprenez à repérer les pièges dans notre guide [anti-arnaque](/blog/concours-arnaques-comment-les-eviter).",
    },
  ],
  faq: [
    {
      question: "Comment entre-t-on dans la fonction publique au Maroc ?",
      answer:
        "Par concours, au mérite. Les avis sont publiés sur emploi-public.ma et sur les sites des administrations. Après l'écrit et l'oral, les lauréats sont nommés par ordre de mérite.",
    },
    {
      question: "L'ANAPEC recrute-t-elle pour la fonction publique ?",
      answer:
        "Non. L'ANAPEC est l'agence publique pour l'emploi, surtout tournée vers le secteur privé et l'intermédiation. Les concours de la fonction publique passent par emploi-public.ma et les administrations.",
    },
    {
      question: "Faut-il payer pour postuler à un emploi public ?",
      answer:
        "Jamais. La candidature aux concours et l'inscription à l'ANAPEC sont gratuites. Toute demande de paiement est une arnaque.",
    },
    {
      question: "Quel diplôme faut-il pour un emploi public ?",
      answer:
        "Cela dépend du grade visé : des voies existent du niveau collège au master. Voyez notre guide [Quel concours avec votre diplôme ?](/blog/concours-par-niveau-diplome).",
    },
    {
      question: "Peut-on travailler dans le public sans concours ?",
      answer:
        "Oui, via le recrutement par contrat dans certaines administrations (santé, éducation, collectivités). Les conditions figurent dans chaque avis officiel.",
    },
  ],
  sources: [
    {
      label: "Portail National de l'Emploi Public — emploi-public.ma",
      url: "https://www.emploi-public.ma/fr/",
      official: true,
    },
    {
      label: "Liste officielle des concours ouverts — emploi-public.ma",
      url: "https://www.emploi-public.ma/fr/concours-liste",
      official: true,
    },
    {
      label: "ANAPEC — Agence Nationale de Promotion de l'Emploi et des Compétences",
      url: "https://www.anapec.org",
      official: true,
    },
  ],
};

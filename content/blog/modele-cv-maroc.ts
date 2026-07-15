import type { ArticleContent } from "@/lib/content-types";

export const article: ArticleContent = {
  slug: "modele-cv-maroc",
  intro: [
    "Un bon CV (السيرة الذاتية) ne raconte pas votre vie : il donne à un recruteur, en un coup d'œil, l'envie de vous convoquer. Au Maroc, les attentes sont simples et constantes — une page, claire, en français (parfois en arabe), avec les bonnes rubriques dans le bon ordre.",
    "Voici la structure d'un CV efficace au format marocain, les conseils qui font la différence, et les erreurs qui éliminent — plus un outil gratuit pour créer le vôtre en quelques minutes.",
  ],
  body: [
    { type: "h2", text: "La structure d'un CV marocain" },
    {
      type: "p",
      text: "Gardez l'ordre classique, du plus important au moins important pour le poste visé :",
    },
    {
      type: "ol",
      items: [
        "**En-tête** : prénom, nom, et un **titre** clair (le poste visé, pas « CV »). Ajoutez téléphone, e-mail et ville.",
        "**Profil / accroche** : 2 à 3 phrases qui résument qui vous êtes et ce que vous cherchez.",
        "**Expériences** : les plus récentes d'abord, avec poste, employeur, période et 1-2 lignes de résultats concrets.",
        "**Formation** : diplômes et établissements, du plus récent au plus ancien.",
        "**Compétences** : techniques (logiciels, méthodes) et transversales, ciblées sur le poste.",
        "**Langues** : arabe, français, anglais… avec un niveau honnête.",
      ],
    },
    {
      type: "note",
      text: "Créez votre CV avec ces rubriques déjà en place grâce à notre [CV Builder gratuit](/cv) : vous remplissez, vous prévisualisez, et vous enregistrez en PDF. Aucune inscription, vos données restent sur votre appareil.",
    },
    { type: "h2", text: "Les conseils qui font la différence" },
    {
      type: "ul",
      items: [
        "**Une seule page** pour un profil junior ou intermédiaire. La concision est un signe de clarté.",
        "**Adaptez le titre et l'accroche** à chaque candidature : un recruteur doit voir tout de suite que vous visez SON poste.",
        "**Des résultats, pas des tâches** : « réduit les délais de 20 % » vaut mieux que « responsable des délais ».",
        "**Une mise en page sobre** : une couleur d'accent, des titres lisibles, des marges respirables. Évitez les modèles surchargés.",
        "**Relisez** : une faute dans l'e-mail ou le numéro de téléphone, et vous ne serez jamais rappelé.",
        "**Exportez en PDF** pour préserver la mise en page à l'envoi.",
      ],
    },
    { type: "h2", text: "Les erreurs qui éliminent" },
    {
      type: "ul",
      items: [
        "Un CV de plusieurs pages pour une première expérience.",
        "Une adresse e-mail peu sérieuse : créez-en une à base de prénom.nom.",
        "Des informations personnelles inutiles ou sensibles (numéro de CNIE complet, situation détaillée).",
        "Un même CV générique envoyé partout, sans adaptation.",
        "Des niveaux de langue ou de compétence exagérés, vite démasqués en entretien.",
      ],
    },
    { type: "h2", text: "CV et lettre pour un concours public" },
    {
      type: "p",
      text: "Pour une candidature à un concours de la fonction publique, le CV sert surtout à compléter le dossier : restez sobre et factuel, et surtout **suivez la liste des pièces exactes** demandées dans l'avis officiel. Notre [hub Concours](/concours) détaille, pour chaque concours, les documents attendus et la procédure de dépôt.",
    },
    {
      type: "warning",
      text: "Méfiez-vous des services qui promettent un « CV qui garantit le poste » contre paiement, ou qui réclament vos identifiants. Un CV ne se paie pas pour être « validé » : créez le vôtre gratuitement et gardez le contrôle de vos données.",
    },
  ],
  faq: [
    {
      question: "Un CV marocain doit-il faire une ou deux pages ?",
      answer:
        "Une page suffit pour un profil junior ou intermédiaire. Deux pages ne se justifient que pour une longue expérience. La clarté prime toujours sur la longueur.",
    },
    {
      question: "Faut-il mettre une photo sur son CV au Maroc ?",
      answer:
        "C'est fréquent mais pas obligatoire. Si vous en mettez une, choisissez une photo sobre et professionnelle. L'essentiel reste le contenu : titre, expériences, compétences.",
    },
    {
      question: "En quelle langue rédiger son CV ?",
      answer:
        "Le français convient à la plupart des candidatures ; l'arabe est parfois demandé, notamment dans certaines administrations. Adaptez-vous à la langue de l'offre.",
    },
    {
      question: "Comment créer un CV gratuitement ?",
      answer:
        "Utilisez notre [CV Builder](/cv) : gratuit, sans inscription, avec un rendu au format marocain que vous enregistrez en PDF. Vos données ne quittent pas votre navigateur.",
    },
    {
      question: "Quel format d'envoi choisir ?",
      answer:
        "Le PDF, qui préserve la mise en page sur tous les appareils. Nommez le fichier clairement, par exemple « CV_Prenom_Nom.pdf ».",
    },
  ],
  sources: [
    {
      label: "ANAPEC — accompagnement et conseils aux chercheurs d'emploi",
      url: "https://www.anapec.org",
      official: true,
    },
    {
      label: "Portail National de l'Emploi Public — emploi-public.ma",
      url: "https://www.emploi-public.ma/fr/",
      official: true,
    },
  ],
};

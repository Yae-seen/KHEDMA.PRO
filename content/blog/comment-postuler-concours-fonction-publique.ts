import type { ArticleContent } from "@/lib/content-types";

export const article: ArticleContent = {
  slug: "comment-postuler-concours-fonction-publique",
  intro: [
    "Chaque année, des milliers de postes sont ouverts dans la fonction publique marocaine par voie de concours. La procédure est **gratuite**, encadrée par la loi, et passe par un portail officiel unique : [emploi-public.ma](https://www.emploi-public.ma/fr/). Pourtant, beaucoup de candidats passent par des sites intermédiaires, ratent la date limite ou envoient un dossier incomplet.",
    "Voici la procédure complète, étape par étape, telle qu'elle fonctionne réellement sur le portail officiel — de la création du compte candidat jusqu'aux résultats.",
  ],
  body: [
    { type: "h2", text: "Où sont publiées les annonces officielles" },
    {
      type: "p",
      text: "Le **Portail National de l'Emploi Public** ([emploi-public.ma](https://www.emploi-public.ma/fr/)) centralise les avis de concours de trois familles d'employeurs publics : les services de l'État (ministères), les collectivités territoriales (communes, régions) et les établissements et entreprises publics. Le portail est géré par le Ministère de la Transition Numérique et de la Réforme de l'Administration.",
    },
    {
      type: "p",
      text: "Chaque administration publie aussi ses avis sur son propre site — par exemple le Ministère de l'Éducation Nationale sur [men.gov.ma/fr/concours](https://www.men.gov.ma/fr/concours). Certains grands corps utilisent leurs propres plateformes dédiées : la police (DGSN) via son portail de concours, la Gendarmerie Royale via sa plateforme d'inscription en ligne, l'ONCF via sa plateforme e-talent. Dans tous les cas : si une annonce n'apparaît ni sur emploi-public.ma ni sur un site officiel de l'administration, considérez-la comme douteuse.",
    },
    {
      type: "note",
      text: "L'organisation des concours est encadrée par le **décret n° 2.11.621** (25 novembre 2011), qui impose la transparence : publication des conditions, des dates, des lieux, des listes des convoqués, des résultats et des listes d'attente.",
    },
    { type: "h2", text: "Comprendre l'annonce : grades, échelles et diplômes" },
    {
      type: "p",
      text: "Les avis de concours sont rédigés par **grade** et **échelle**, et chaque grade correspond à un niveau de diplôme. Quelques repères fréquents :",
    },
    {
      type: "table",
      headers: ["Grade (exemples)", "Échelle", "Diplôme généralement requis"],
      rows: [
        ["Adjoint technique / administratif", "6–8", "Sans bac ou niveau bac"],
        ["Technicien 4ème grade", "8", "Bac + diplôme de technicien"],
        ["Technicien 3ème grade", "9", "Bac+2 (DUT, BTS, technicien spécialisé)"],
        ["Administrateur 3ème grade", "10", "Licence (Bac+3)"],
        ["Administrateur 2ème grade / Ingénieur d'État", "11", "Master ou diplôme d'ingénieur (Bac+5)"],
      ],
    },
    {
      type: "p",
      text: "Vérifiez toujours le diplôme exact exigé dans l'avis : le décret n° 2.12.90 fixe la correspondance officielle entre diplômes et grades. Si votre diplôme ne figure pas dans l'avis, votre dossier sera rejeté par la commission de vérification. Pour savoir quels concours viser selon votre niveau, consultez notre guide [Quel concours avec votre diplôme ?](/blog/concours-par-niveau-diplome).",
    },
    { type: "h2", text: "La procédure de candidature, étape par étape" },
    {
      type: "ol",
      items: [
        "**Créez votre compte candidat** sur [emploi-public.ma](https://www.emploi-public.ma/fr/candidat/register) : e-mail valide obligatoire, le compte est activé par lien de confirmation.",
        "**Complétez votre profil** : informations personnelles, diplômes et CV. Faites-le une fois, proprement — il servira pour toutes vos candidatures.",
        "**Trouvez l'avis de concours** dans la liste des concours ouverts et lisez-le en entier : grade, diplôme exigé, nombre de postes, pièces demandées, date limite.",
        "**Préparez vos pièces au format PDF** (2 Mo maximum par document) : diplôme, CNIE, attestations. Scannez-les avant de commencer le dépôt.",
        "**Déposez votre candidature** via le bouton « Dépôt en ligne » avant la date limite (généralement à 16h30), ou par voie postale si l'avis l'exige.",
        "**Suivez votre dossier** dans « Mes Candidatures » et surveillez la publication de la liste des convoqués à l'épreuve écrite sur le portail et le site de l'administration.",
      ],
    },
    { type: "h2", text: "Les pièges à éviter" },
    {
      type: "ul",
      items: [
        "**La date limite est stricte** : sur emploi-public.ma, la clôture est généralement fixée à **16h30** le jour indiqué. Après, le dépôt en ligne est fermé.",
        "**Les pièces jointes ont des règles** : documents au format **PDF uniquement, 2 Mo maximum** par pièce. Préparez vos scans avant de commencer.",
        "**Le portail ne vous contactera jamais** : c'est l'administration qui recrute qui gère les convocations. Emploi-public.ma le dit lui-même : « à aucun moment vous ne serez contacté par Emploi-public.ma ». Quiconque vous appelle « de la part du portail » est un escroc.",
        "**Pas de candidature spontanée** : le portail ne prend que des candidatures à des avis publiés. Activez les alertes e-mail pour être notifié des nouveaux avis.",
        "**Aucun paiement, jamais** : la candidature est gratuite. Toute demande de « frais de dossier » est une [arnaque](/blog/concours-arnaques-comment-les-eviter).",
      ],
    },
    { type: "h2", text: "Après le dépôt : écrit, oral, résultats" },
    {
      type: "p",
      text: "Une fois votre dossier déposé, la commission vérifie sa conformité, puis la liste des candidats convoqués à l'écrit est publiée sur le portail et le site de l'administration — cette publication **vaut souvent convocation officielle**. L'épreuve écrite a lieu typiquement une à trois semaines après la clôture. Les admis à l'écrit passent ensuite un oral devant jury, et les résultats définitifs sont publiés par ordre de mérite, avec une liste d'attente.",
    },
    {
      type: "p",
      text: "Le décret prévoit que l'administration nomme les lauréats dans les **60 jours** suivant la publication des résultats définitifs. Suivez l'état de vos candidatures dans la rubrique « Mes Candidatures » de votre compte.",
    },
    {
      type: "p",
      text: "Pour vous préparer aux épreuves elles-mêmes, consultez notre guide des [exemples de concours et anciens sujets](/blog/exemples-concours-anciens-sujets) et les pages dédiées à chaque concours dans notre [hub Concours](/concours).",
    },
  ],
  faq: [
    {
      question: "Faut-il payer pour s'inscrire à un concours public ?",
      answer:
        "Non, jamais. La candidature aux concours de la fonction publique marocaine est gratuite. Toute demande de paiement — « frais de dossier », recharge, virement — est une arnaque.",
    },
    {
      question: "Puis-je postuler par courrier plutôt qu'en ligne ?",
      answer:
        "Cela dépend de l'avis : certains concours exigent le dépôt en ligne (« Dépôt en ligne » sur emploi-public.ma), d'autres acceptent ou exigent un dossier par voie postale. L'avis officiel précise toujours le mode de dépôt — suivez-le à la lettre.",
    },
    {
      question: "Comment savoir si mon dossier a été accepté ?",
      answer:
        "La liste des candidats admis à concourir (convoqués à l'écrit) est publiée sur emploi-public.ma et sur le site de l'administration organisatrice. Vous pouvez aussi suivre vos dossiers dans la rubrique « Mes Candidatures » de votre compte candidat.",
    },
    {
      question: "Que se passe-t-il si je suis sur la liste d'attente ?",
      answer:
        "La liste d'attente sert à remplacer les lauréats qui ne rejoignent pas leur poste. Si un poste se libère dans les délais réglementaires, l'administration convoque les candidats de la liste d'attente par ordre de mérite.",
    },
    {
      question: "Un concours peut-il être réservé aux fonctionnaires ?",
      answer:
        "Oui. Les « appels à candidatures » pour les postes de responsabilité (chefs de division, directeurs...) et certains concours internes sont réservés aux fonctionnaires en exercice. L'avis précise toujours les conditions d'accès.",
    },
  ],
  sources: [
    {
      label: "Portail National de l'Emploi Public — emploi-public.ma",
      url: "https://www.emploi-public.ma/fr/",
      official: true,
    },
    {
      label: "FAQ officielle du portail emploi-public.ma",
      url: "https://www.emploi-public.ma/fr/faq-liste",
      official: true,
    },
    {
      label: "Textes juridiques des concours (décrets et circulaires)",
      url: "https://www.emploi-public.ma/fr/content/textes-concours",
      official: true,
    },
    {
      label: "Ministère de la Transition Numérique — présentation du portail",
      url: "https://www.mmsp.gov.ma/fr/nos-services/portail-de-l%E2%80%99emploi-public",
      official: true,
    },
    {
      label: "Ministère de l'Éducation Nationale — page concours",
      url: "https://www.men.gov.ma/fr/concours",
      official: true,
    },
  ],
};

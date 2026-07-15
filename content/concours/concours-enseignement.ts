import type { ConcoursGuide } from "@/lib/content-types";

export const guide: ConcoursGuide = {
  slug: "concours-enseignement",
  intro: [
    "Le concours de recrutement des enseignants — **مباراة التعليم**, officiellement le concours d'accès au cycle de qualification des cadres des Académies Régionales d'Éducation et de Formation (AREF) — est l'un des plus gros recrutements publics de l'année au Maroc : **19 000 postes** du primaire au lycée lors de la session de novembre 2025. Les lauréats s'inscrivent dans les Centres Régionaux des Métiers de l'Éducation et de la Formation (CRMEF) et entrent en formation.",
    "La session 2026-2027 n'était pas encore annoncée au 15 juillet 2026 — rien sur la page concours du ministère à cette date. Si le calendrier des dernières sessions se répète, l'annonce devrait tomber vers octobre 2026, avec une fenêtre d'inscription d'environ deux semaines, **exclusivement en ligne** sur [wolouj.men.gov.ma](https://wolouj.men.gov.ma). Voici les conditions, le déroulement type et la préparation, d'après les annonces officielles de la dernière session.",
  ],
  body: [
    { type: "h2", text: "Un concours à part : ni emploi-public.ma, ni dossier papier" },
    {
      type: "p",
      text: "Contrairement à la plupart des concours de la fonction publique, qui passent par [emploi-public.ma](https://www.emploi-public.ma/fr/), le concours des enseignants suit son propre circuit. L'annonce est publiée par communiqué du Ministère de l'Éducation nationale — relayé sur [maroc.ma](https://www.maroc.ma/fr/actualites/acces-au-cycle-de-qualification-des-cadres-enseignants-ouverture-des-candidatures-pour-la-session-de) et sur [men.gov.ma/fr/concours](https://www.men.gov.ma/fr/concours) — et la candidature se dépose **uniquement en ligne**, sur la plateforme Wolouj, pendant la fenêtre annoncée. Pas de dossier papier, pas d'intermédiaire, pas de compte emploi-public.ma.",
    },
    {
      type: "p",
      text: "Le recrutement se fait au nom des AREF — les académies régionales — et les lauréats rejoignent le cycle de qualification dans les CRMEF. C'est ce cycle qui donne son nom officiel au concours : « accès au cycle de qualification des cadres enseignants ».",
    },
    { type: "h2", text: "Les conditions de participation" },
    {
      type: "p",
      text: "Les conditions ci-dessous sont celles du communiqué officiel de la session de novembre 2025, publié sur maroc.ma. Chaque session fait l'objet d'un nouvel avis : vérifiez toujours le communiqué de la session en cours avant de candidater.",
    },
    {
      type: "table",
      caption: "Conditions de la session de novembre 2025 (communiqué officiel)",
      headers: ["Condition", "Détail"],
      rows: [
        ["Nationalité", "Marocaine"],
        ["Âge", "Moins de 35 ans à la date de l'épreuve"],
        [
          "Diplôme",
          "Licence en éducation, licence d'une filière universitaire de formation en éducation, ou licence d'études fondamentales/professionnelles (ou équivalent)",
        ],
        ["Candidature", "En ligne uniquement, sur wolouj.men.gov.ma, pendant la fenêtre annoncée"],
      ],
    },
    {
      type: "p",
      text: "La limite d'âge est le grand changement des dernières années : elle a été **relevée de 30 à 35 ans** à partir de la session de novembre 2025. Les sessions 2023-2024 étaient fermées aux candidats de plus de 30 ans — si vous aviez dépassé l'ancienne limite, vous êtes peut-être redevenu éligible.",
    },
    {
      type: "note",
      text: "Les spécialités ouvertes, les diplômes acceptés par spécialité et la répartition des postes sont précisés dans chaque avis officiel. Ne vous fiez qu'au communiqué de la session en cours.",
    },
    { type: "h2", text: "Le calendrier : la session de novembre 2025 comme référence" },
    {
      type: "p",
      text: "Aucune date n'est publiée pour la session 2026-2027. Le déroulement officiel de la session de novembre 2025 — 19 000 postes pour les trois cycles — donne le schéma type :",
    },
    {
      type: "table",
      headers: ["Étape", "Session de novembre 2025"],
      rows: [
        ["Annonce officielle", "Fin octobre 2025"],
        ["Inscriptions sur wolouj.men.gov.ma", "Du 30 octobre au 13 novembre 2025, à 16h30"],
        ["Épreuve écrite", "22 novembre 2025"],
        ["Résultats de l'écrit", "Environ 5 jours après l'épreuve"],
        ["Épreuves orales", "Du 2 au 11 décembre 2025"],
        ["Résultats définitifs et inscription aux CRMEF", "De mi-décembre à début janvier"],
        ["Entrée en formation", "Fin décembre"],
      ],
    },
    {
      type: "p",
      text: "La fenêtre d'inscription est courte — environ deux semaines. Préparez votre choix de cycle et de spécialité avant l'annonce, pas après. Pour situer ce concours dans l'année des recrutements publics, consultez notre [calendrier des concours au Maroc](/blog/calendrier-concours-maroc).",
    },
    { type: "h2", text: "Une seule candidature par cycle" },
    {
      type: "p",
      text: "Lors des dernières sessions, la règle était stricte : une seule candidature, pour un seul cycle — primaire, secondaire collégial ou secondaire qualifiant. Seule exception rapportée : les candidats en **mathématiques** et en **français** pouvaient postuler aux deux cycles du secondaire. Votre choix de cycle et de spécialité se fait au moment du dépôt sur Wolouj — réfléchissez-y avant l'ouverture de la plateforme.",
    },
    {
      type: "warning",
      text: "**Aucun concours officiel ne demande de paiement.** La candidature au concours de l'enseignement est gratuite, et Wolouj est la seule voie de dépôt. Les annonces officielles ne se trouvent que sur men.gov.ma, maroc.ma et les sites des AREF — méfiez-vous des pages Facebook et des sites qui vendent une « inscription garantie », des « listes de postes » ou un « accompagnement de dossier » payant. Notre guide des [arnaques aux concours](/blog/concours-arnaques-comment-les-eviter) détaille les signaux d'alerte.",
    },
    { type: "h2", text: "Les épreuves : écrit puis oral" },
    {
      type: "p",
      text: "Selon les annonces des sessions récentes, l'épreuve écrite est organisée par cycle et par spécialité — une quinzaine de spécialités sont couvertes :",
    },
    {
      type: "ul",
      items: [
        "**Primaire** : didactique des matières (arabe, français, mathématiques, sciences — avec des options bilingue et amazighe) + sciences de l'éducation.",
        "**Secondaire (collégial et qualifiant)** : contenu disciplinaire de la spécialité + didactique de la matière.",
      ],
    },
    {
      type: "p",
      text: "Les admis à l'écrit passent ensuite un oral devant jury — du 2 au 11 décembre lors de la session 2025 — avant la publication des résultats définitifs.",
    },
    { type: "h2", text: "Comment se préparer : les بطاقات توصيف الاختبارات" },
    {
      type: "p",
      text: "Il n'existe pas d'archive nationale officielle d'anciens sujets de la fonction publique marocaine — et le concours de l'enseignement ne fait pas exception. Le vrai document de préparation, publié sur men.gov.ma lors des dernières sessions en même temps que l'annonce, ce sont les **بطاقات توصيف الاختبارات** — les cadres référentiels des épreuves. Pour chaque spécialité et chaque cycle, ces fiches définissent les domaines évalués, les axes de chaque domaine et le poids de chaque axe dans la note. C'est votre plan de révision, écrit par ceux qui rédigent l'épreuve.",
    },
    {
      type: "p",
      text: "Travaillez à partir de ces fiches plutôt qu'à partir des PDF sans provenance qui circulent dans les groupes Facebook. Pour la méthode d'entraînement — anciens sujets, QCM, culture générale — voyez notre guide des [exemples de concours et anciens sujets](/blog/exemples-concours-anciens-sujets).",
    },
    { type: "h2", text: "Après le concours : résultats, CRMEF et entrée en formation" },
    {
      type: "p",
      text: "Lors des dernières sessions, les listes des candidats admis à concourir puis les résultats ont été publiés sur [tawdif.men.gov.ma](https://tawdif.men.gov.ma) et sur les sites des AREF. Les lauréats s'inscrivent ensuite au CRMEF de leur académie : pour la session 2025, résultats définitifs et inscriptions se sont enchaînés entre mi-décembre et début janvier, avec une entrée en formation fin décembre.",
    },
    {
      type: "p",
      text: "Une fois en poste, vous passerez du statut de candidat à celui d'utilisateur quotidien des services numériques de l'école marocaine — Massar en tête. Les guides indépendants de [massar-service.net](https://massar-service.net) couvrent ce versant éducation. Et pour suivre l'état de ce concours et des autres grands recrutements, notre [hub Concours](/concours) est mis à jour au fil des annonces.",
    },
  ],
  howTo: {
    name: "Comment candidater au concours de l'enseignement (cadres des AREF)",
    description:
      "Les étapes de candidature au cycle de qualification des cadres des AREF, d'après le déroulement officiel de la session de novembre 2025.",
    steps: [
      {
        name: "Surveillez l'annonce officielle",
        text: "Le concours est annoncé par communiqué du Ministère de l'Éducation nationale, relayé sur maroc.ma et sur men.gov.ma/fr/concours. Lors des dernières sessions, l'annonce est tombée fin octobre.",
      },
      {
        name: "Vérifiez que vous remplissez les conditions",
        text: "Nationalité marocaine, moins de 35 ans à la date de l'épreuve et une licence : licence en éducation, licence d'une filière universitaire de formation en éducation, ou licence d'études fondamentales ou professionnelles (ou équivalent).",
      },
      {
        name: "Choisissez votre cycle et votre spécialité",
        text: "Une seule candidature par cycle (primaire, secondaire collégial ou secondaire qualifiant) lors des dernières sessions — seuls les candidats de mathématiques et de français pouvaient viser les deux cycles du secondaire.",
      },
      {
        name: "Déposez votre candidature sur wolouj.men.gov.ma",
        text: "La candidature se fait exclusivement en ligne sur la plateforme Wolouj, pendant la fenêtre annoncée — environ deux semaines (du 30 octobre au 13 novembre à 16h30 pour la session 2025).",
      },
      {
        name: "Préparez l'écrit avec les cadres référentiels officiels",
        text: "Téléchargez les بطاقات توصيف الاختبارات publiées sur men.gov.ma pour votre spécialité : elles détaillent les domaines évalués et le poids de chaque axe de l'épreuve.",
      },
      {
        name: "Passez l'épreuve écrite, puis l'oral",
        text: "Pour la session 2025 : écrit le 22 novembre, résultats de l'écrit environ cinq jours après, épreuves orales du 2 au 11 décembre.",
      },
      {
        name: "Consultez les résultats et inscrivez-vous au CRMEF",
        text: "Lors des dernières sessions, les résultats ont été publiés sur tawdif.men.gov.ma et sur les sites des AREF ; les lauréats s'inscrivent ensuite au CRMEF de leur académie pour entrer en formation.",
      },
    ],
  },
  faq: [
    {
      question: "Quel diplôme faut-il pour passer le concours de l'enseignement ?",
      answer:
        "Une licence : le communiqué de la session de novembre 2025 exigeait une licence en éducation, une licence d'une filière universitaire de formation en éducation, ou une licence d'études fondamentales ou professionnelles (ou équivalent). Les filières acceptées par spécialité sont précisées dans chaque avis officiel.",
    },
    {
      question: "Quelle est la limite d'âge du concours de l'enseignement ?",
      answer:
        "Moins de 35 ans à la date de l'épreuve, depuis la session de novembre 2025. La limite était de 30 ans pour les sessions 2023-2024 — elle a donc été relevée de cinq ans.",
    },
    {
      question: "Quand aura lieu le prochain concours de l'enseignement ?",
      answer:
        "La session 2026-2027 n'était pas encore annoncée au 15 juillet 2026. Lors des dernières sessions, l'annonce est tombée fin octobre, avec un écrit fin novembre. Surveillez men.gov.ma/fr/concours et le communiqué officiel — pas les rumeurs des réseaux sociaux.",
    },
    {
      question: "Peut-on candidater à plusieurs cycles en même temps ?",
      answer:
        "Non — lors des dernières sessions, la règle était une seule candidature par cycle (primaire, secondaire collégial ou secondaire qualifiant). Seule exception rapportée : les candidats en mathématiques et en français pouvaient postuler aux deux cycles du secondaire.",
    },
    {
      question: "Où sont publiés les résultats du concours ?",
      answer:
        "Lors des dernières sessions, les listes des admis à concourir et les résultats (écrit, oral, résultats définitifs) ont été publiés sur tawdif.men.gov.ma et sur les sites des AREF.",
    },
    {
      question: "L'inscription au concours de l'enseignement est-elle payante ?",
      answer:
        "Non. La candidature est gratuite et se fait uniquement sur wolouj.men.gov.ma. Aucun concours public officiel ne demande de paiement : toute demande de « frais de dossier » ou d'« inscription garantie » est une arnaque.",
    },
  ],
  sources: [
    {
      label: "Communiqué officiel — ouverture des candidatures, session novembre 2025 (maroc.ma)",
      url: "https://www.maroc.ma/fr/actualites/acces-au-cycle-de-qualification-des-cadres-enseignants-ouverture-des-candidatures-pour-la-session-de",
      official: true,
    },
    {
      label: "Ministère de l'Éducation nationale — page officielle des concours",
      url: "https://www.men.gov.ma/fr/concours",
      official: true,
    },
    {
      label: "Wolouj — plateforme officielle de candidature au cycle de qualification",
      url: "https://wolouj.men.gov.ma",
      official: true,
    },
    {
      label: "Tawdif — portail officiel des listes et résultats des concours des académies",
      url: "https://tawdif.men.gov.ma",
      official: true,
    },
    {
      label: "Portail National de l'Emploi Public — emploi-public.ma",
      url: "https://www.emploi-public.ma/fr/",
      official: true,
    },
  ],
};

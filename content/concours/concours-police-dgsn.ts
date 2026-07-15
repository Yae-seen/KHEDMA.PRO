import type { ConcoursGuide } from "@/lib/content-types";

export const guide: ConcoursGuide = {
  slug: "concours-police-dgsn",
  intro: [
    "Le concours de police de la DGSN (مباراة الأمن الوطني) est l'un des concours publics les plus suivis au Maroc : lors de la dernière campagne, plus de **6 500 postes** ont été ouverts sur quatre grades, du gardien de la paix au commissaire, avec une épreuve écrite unique le 7 décembre 2025. L'inscription se fait **exclusivement en ligne** sur le portail officiel [concours.dgsn.gov.ma](https://concours.dgsn.gov.ma/) — et elle est gratuite.",
    "À la mi-juillet 2026, aucune nouvelle campagne n'est annoncée. Voici ce qu'il faut savoir pour préparer la prochaine : les conditions par corps telles qu'elles ressortent des dernières sessions, la procédure d'inscription en deux étapes, le format des épreuves et le calendrier annuel habituel.",
  ],
  body: [
    { type: "h2", text: "Où en est le concours de police en 2026 ?" },
    {
      type: "p",
      text: "Un point qui déroute beaucoup de candidats : le dernier concours DGSN, passé le **7 décembre 2025**, était organisé « au titre de l'année 2026 ». C'est donc lui, le « concours de police 2026 » — et il est terminé. Les inscriptions étaient ouvertes du 15 septembre au 2 octobre 2025 à 16h30, comme l'indiquent les avis officiels publiés sur [emploi-public.ma](https://www.emploi-public.ma/fr/concours-liste).",
    },
    {
      type: "p",
      text: "La prochaine campagne (au titre de l'année 2027) n'était pas encore annoncée à la mi-juillet 2026. Lors des dernières campagnes, l'annonce est tombée vers la **mi-septembre**, avec une fenêtre d'inscription d'environ deux semaines et une épreuve écrite un dimanche de début décembre. Surveillez le portail officiel et notre [hub Concours](/concours) à partir de début septembre.",
    },
    { type: "h2", text: "Les cinq corps de la police et leurs conditions" },
    {
      type: "p",
      text: "La DGSN recrute par corps, chacun avec son niveau de diplôme, sa limite d'âge et sa taille minimale. Les conditions ci-dessous sont celles annoncées lors des dernières sessions — chaque campagne publie son propre arrêté d'ouverture, qui seul fait foi.",
    },
    {
      type: "table",
      caption: "Conditions par corps telles qu'annoncées lors des dernières sessions",
      headers: ["Corps", "Échelle", "Diplôme (sessions récentes)", "Âge", "Taille minimale"],
      rows: [
        ["Gardien de la paix", "5", "Baccalauréat ou équivalent", "21–30 ans", "1,73 m (H) / 1,67 m (F)"],
        ["Inspecteur de police", "6", "Deux semestres universitaires validés", "21–30 ans", "1,70 m (H) / 1,67 m (F)"],
        ["Officier de police", "8", "Licence (bac+3)", "21–30 ans", "1,70 m (H) / 1,67 m (F)"],
        ["Commissaire de police", "10", "Master", "21–35 ans", "1,70 m (H) / 1,67 m (F)"],
        ["Commissaire divisionnaire", "—", "Ingénieur d'État ou doctorat", "Précisé dans l'avis officiel", "Précisée dans l'avis officiel"],
      ],
    },
    {
      type: "p",
      text: "Les annonces des sessions récentes mentionnent aussi des **moyennes minimales** pour les corps à diplôme universitaire : 10,50/20 pour inspecteur, 11/20 pour officier et 12/20 pour commissaire. Attention : le niveau exigé pour certains grades a varié selon les sources et les sessions (l'officier de police a par exemple été annoncé tantôt à bac+2, tantôt à licence). Seul l'arrêté d'ouverture de la session en cours, téléchargeable avec l'avis sur emploi-public.ma, fait foi.",
    },
    {
      type: "note",
      text: "Vous hésitez entre plusieurs concours de sécurité ? La [Gendarmerie Royale](/concours/concours-gendarmerie-royale) recrute sur un calendrier différent (annonce habituellement au printemps), avec des conditions proches mais pas identiques.",
    },
    { type: "h2", text: "Les chiffres de la dernière campagne (décembre 2025)" },
    {
      type: "p",
      text: "Les avis officiels publiés sur emploi-public.ma détaillent les postes ouverts au titre de l'année 2026 :",
    },
    {
      type: "ul",
      items: [
        "**4 139 postes** de gardiens de la paix",
        "**2 100 postes** d'inspecteurs de police",
        "**250 postes** d'officiers de police",
        "**80 postes** de commissaires de police",
      ],
    },
    {
      type: "p",
      text: "Une seule épreuve écrite, le dimanche 7 décembre 2025, pour tous les grades. Ces volumes donnent l'ordre de grandeur d'une campagne annuelle — le nombre exact de postes de la prochaine session sera fixé dans les nouveaux avis officiels.",
    },
    { type: "h2", text: "Comment s'inscrire : deux étapes, zéro dirham" },
    {
      type: "p",
      text: "L'inscription à tous les concours DGSN se fait **exclusivement en ligne** sur [concours.dgsn.gov.ma](https://concours.dgsn.gov.ma/), le portail unique d'inscription et de suivi de candidature. Les avis officiels, avec l'arrêté d'ouverture téléchargeable, sont publiés en parallèle sur emploi-public.ma.",
    },
    {
      type: "p",
      text: "Lors des dernières sessions, la procédure comportait deux temps : la **préinscription en ligne** sur le portail DGSN, puis le **dépôt du dossier à la préfecture de police**. La liste exacte des pièces à fournir est précisée dans chaque avis officiel.",
    },
    {
      type: "warning",
      text: "L'inscription au concours de police est **gratuite**. Aucun concours officiel ne demande de paiement — ni « frais de dossier », ni recharge téléphonique, ni virement. Les pages qui vendent une « inscription garantie » ou un « dossier complet » sont des [arnaques](/blog/concours-arnaques-comment-les-eviter). Les deux seuls canaux fiables : concours.dgsn.gov.ma et emploi-public.ma.",
    },
    { type: "h2", text: "Les épreuves : un QCM national, puis un oral" },
    {
      type: "p",
      text: "Selon les sessions récentes, l'écrit prend la forme d'un **QCM** portant sur la culture générale, l'actualité et, selon le grade, des questions de spécialité. Il se tient en un seul jour d'examen national pour tous les grades — un dimanche de début décembre lors des dernières campagnes (le 7 décembre 2025 pour la dernière). Les admis à l'écrit passent ensuite un **entretien oral devant jury**.",
    },
    {
      type: "p",
      text: "Pour les lauréats gardiens de la paix, les sessions récentes mentionnent une formation d'environ 12 mois à l'Institut Royal de Police de Kénitra. Les durées et lieux de formation des autres corps sont précisés dans chaque avis officiel.",
    },
    { type: "h2", text: "Le calendrier annuel type" },
    {
      type: "p",
      text: "Le concours DGSN suit un cycle annuel régulier, constaté lors des campagnes 2024 et 2025 :",
    },
    {
      type: "ol",
      items: [
        "**Mi-septembre** : annonce officielle et ouverture des inscriptions en ligne (lors de la dernière campagne : du 15 septembre au 2 octobre 2025 à 16h30).",
        "**Fin septembre – début octobre** : clôture des inscriptions après une fenêtre d'environ deux semaines.",
        "**Début décembre** : épreuve écrite unique, un dimanche, pour tous les grades — puis entretien oral pour les admissibles.",
      ],
    },
    {
      type: "p",
      text: "Si vous visez la prochaine session, l'été est donc le bon moment pour préparer le QCM et rassembler vos documents. Notre [calendrier des concours au Maroc](/blog/calendrier-concours-maroc) récapitule les périodes d'annonce de tous les grands recruteurs publics.",
    },
  ],
  howTo: {
    name: "Comment s'inscrire au concours de police (DGSN)",
    description:
      "Les étapes de candidature au concours de la Sûreté Nationale, telles qu'elles ressortent des avis officiels et des dernières sessions.",
    steps: [
      {
        name: "Surveillez l'annonce officielle",
        text: "À partir de début septembre, consultez concours.dgsn.gov.ma et emploi-public.ma. Lors des dernières campagnes, l'annonce est tombée vers la mi-septembre, avec une fenêtre d'inscription d'environ deux semaines.",
      },
      {
        name: "Vérifiez les conditions de votre corps",
        text: "Téléchargez l'arrêté d'ouverture publié avec l'avis sur emploi-public.ma et vérifiez le diplôme exigé, la limite d'âge et la taille minimale pour le grade visé. Seul ce document fait foi.",
      },
      {
        name: "Préinscrivez-vous en ligne",
        text: "Remplissez le formulaire de préinscription sur concours.dgsn.gov.ma avant la date et l'heure limites indiquées dans l'avis. L'inscription est gratuite.",
      },
      {
        name: "Déposez votre dossier",
        text: "Lors des dernières sessions, la préinscription en ligne devait être complétée par le dépôt du dossier à la préfecture de police, avec les pièces listées dans l'avis officiel.",
      },
      {
        name: "Suivez votre candidature et la convocation",
        text: "Le portail concours.dgsn.gov.ma sert aussi au suivi de candidature. Surveillez la publication des listes des convoqués à l'épreuve écrite.",
      },
      {
        name: "Passez l'écrit puis l'oral",
        text: "Préparez le QCM (culture générale, actualité, spécialité selon le grade) pour le jour d'examen national unique, puis l'entretien oral devant jury si vous êtes admissible.",
      },
    ],
  },
  faq: [
    {
      question: "Quand aura lieu le prochain concours de police ?",
      answer:
        "Aucune annonce officielle n'était publiée à la mi-juillet 2026. Lors des dernières campagnes, l'annonce est tombée vers la mi-septembre, pour une épreuve écrite un dimanche de début décembre. Surveillez concours.dgsn.gov.ma et emploi-public.ma à partir de début septembre.",
    },
    {
      question: "Quel diplôme faut-il pour devenir gardien de la paix ?",
      answer:
        "Lors des dernières sessions, le baccalauréat (ou équivalent) suffisait pour le corps des gardiens de la paix, avec une limite d'âge de 21 à 30 ans et une taille minimale de 1,73 m pour les hommes et 1,67 m pour les femmes. Les conditions exactes de la prochaine session seront fixées dans l'avis officiel.",
    },
    {
      question: "L'inscription au concours de police est-elle payante ?",
      answer:
        "Non. L'inscription est gratuite et se fait uniquement sur le portail officiel concours.dgsn.gov.ma. Toute demande de paiement — « frais de dossier », recharge, intermédiaire « garanti » — est une arnaque.",
    },
    {
      question: "Peut-on s'inscrire ailleurs que sur concours.dgsn.gov.ma ?",
      answer:
        "Non. L'inscription se fait exclusivement en ligne sur le portail des concours de la DGSN. Les avis officiels sont aussi publiés sur emploi-public.ma avec l'arrêté d'ouverture, mais la candidature elle-même passe par le portail DGSN.",
    },
    {
      question: "Comment se déroule l'épreuve écrite ?",
      answer:
        "Selon les sessions récentes, il s'agit d'un QCM (culture générale, actualité et spécialité selon le grade), organisé en un seul jour d'examen national pour tous les grades — le 7 décembre 2025 lors de la dernière campagne. Les admis passent ensuite un entretien oral devant jury.",
    },
    {
      question: "Les femmes peuvent-elles passer le concours de police ?",
      answer:
        "Oui. Les conditions des dernières sessions prévoient des tailles minimales distinctes pour les candidates (1,67 m pour les corps concernés), et les concours sont ouverts aux femmes comme aux hommes. Les conditions détaillées figurent dans chaque avis officiel.",
    },
  ],
  sources: [
    {
      label: "Avis officiel du concours DGSN de décembre 2025 — emploi-public.ma",
      url: "https://www.emploi-public.ma/fr/concours/details/e1064f7c-08d1-41d2-9fb9-1f2312a4483e",
      official: true,
    },
    {
      label: "Portail officiel des concours de la DGSN",
      url: "https://concours.dgsn.gov.ma/",
      official: true,
    },
    {
      label: "Liste officielle des concours ouverts — emploi-public.ma",
      url: "https://www.emploi-public.ma/fr/concours-liste",
      official: true,
    },
    {
      label: "Conditions par grade des dernières sessions (presse spécialisée)",
      url: "https://alwadifa-club.com/maroc-news/concours-police-maroc-2025/56753/",
      official: false,
    },
    {
      label: "Procédure d'inscription et corps recrutés (presse spécialisée)",
      url: "https://www.maroconcours.com/2026/04/concours-dgsn-2026.html",
      official: false,
    },
    {
      label: "Format des épreuves DGSN (presse spécialisée)",
      url: "https://alouadifa.ma/orientation/irp/",
      official: false,
    },
  ],
};

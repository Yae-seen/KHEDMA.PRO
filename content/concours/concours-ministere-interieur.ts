import type { ConcoursGuide } from "@/lib/content-types";

export const guide: ConcoursGuide = {
  slug: "concours-ministere-interieur",
  intro: [
    "Le Ministère de l'Intérieur est l'un des plus gros recruteurs civils de l'État marocain : administrateurs pour les services centraux et territoriaux, techniciens en génie civil et électrique, informaticiens formés dans ses propres instituts. La **مباراة وزارة الداخلية** revient sous plusieurs formes chaque année — et la grande session 2026 vient de se jouer : le concours national est clôturé, les épreuves écrites ont eu lieu en juin.",
    "Cette page fait le point : ce qui s'est passé lors de la session 2026, les trois voies de recrutement du ministère (concours nationaux, concours provinciaux, instituts de formation) et comment déposer sa candidature — **gratuitement** — via le portail officiel [emploi-public.ma](https://www.emploi-public.ma/fr/).",
  ],
  body: [
    { type: "h2", text: "Concours 2026 : clôturé, épreuves passées en juin" },
    {
      type: "p",
      text: "Le grand concours national 2026 du Ministère de l'Intérieur est **clôturé**. Selon les avis publiés pour cette session, la date limite de candidature était le **28 avril 2026**, pour **600 postes** répartis entre 440 administrateurs 2ème grade et 160 techniciens 3ème grade ; les épreuves écrites ont été organisées à la Faculté Souissi à Rabat, le 7 juin pour les techniciens puis le 21 juin 2026 pour les administrateurs.",
    },
    {
      type: "table",
      caption: "Répartition des 600 postes de la session 2026 (clôturée), selon les avis publiés",
      headers: ["Grade", "Spécialités", "Postes", "Diplôme annoncé"],
      rows: [
        ["Administrateur 2ème grade", "Gestion financière, comptabilité, audit", "200", "Master"],
        ["Administrateur 2ème grade", "Droit administratif, gestion", "160", "Master"],
        ["Administrateur 2ème grade", "Droit en langue française", "80", "Master"],
        ["Technicien 3ème grade", "Génie civil", "130", "Diplôme de technicien — précisé dans l'avis"],
        ["Technicien 3ème grade", "Génie électrique", "30", "Diplôme de technicien — précisé dans l'avis"],
      ],
    },
    {
      type: "p",
      text: "Les résultats des techniciens ont commencé à être publiés début juillet 2026, selon les annonces relayées. Pour la suite, surveillez [emploi-public.ma](https://www.emploi-public.ma/fr/concours-liste) : le portail officiel publie les listes des convoqués, les résultats définitifs et les listes d'attente de chaque concours.",
    },
    {
      type: "note",
      text: "La prochaine grande session n'est **pas encore annoncée**. Aucune date n'est officielle tant qu'un avis n'est pas publié sur emploi-public.ma — méfiez-vous des « calendriers » qui circulent sur les réseaux sociaux.",
    },
    { type: "h2", text: "Trois voies pour intégrer le Ministère de l'Intérieur" },
    {
      type: "p",
      text: "Lors des dernières sessions, le ministère a recruté ses cadres civils par trois canaux bien distincts :",
    },
    {
      type: "ul",
      items: [
        "**Les grands concours nationaux** — comme la session 2026 : des centaines de postes d'administrateurs et de techniciens, une candidature centralisée et des écrits organisés à Rabat.",
        "**Les concours provinciaux** — publiés au fil de l'année sur [emploi-public.ma](https://www.emploi-public.ma/fr/concours-liste), souvent pour quelques postes locaux à la fois.",
        "**Les instituts de formation des techniciens spécialisés** — un concours d'accès à une formation, ouvert au niveau bac, qui débouche sur un grade de technicien à l'issue de la scolarité.",
      ],
    },
    {
      type: "p",
      text: "Conséquence pratique : il ne faut pas attendre « le » concours annuel. Des avis du Ministère de l'Intérieur peuvent tomber à tout moment de l'année. Créez votre compte candidat sur le portail et activez les alertes e-mail — les candidatures spontanées n'y sont pas acceptées, seules les candidatures à des avis publiés comptent.",
    },
    { type: "h2", text: "Instituts de formation : la voie d'accès avec le bac" },
    {
      type: "p",
      text: "Attention à ne pas confondre deux concours qui portent presque le même nom. Le concours des **techniciens 3ème grade** (160 postes lors de la session 2026) est un **recrutement direct** : vous êtes recruté avec votre diplôme de technicien déjà en poche. Le concours d'accès aux **instituts de formation des techniciens spécialisés** est autre chose : vous le passez avec le **baccalauréat**, vous suivez une formation dans un institut du ministère, et c'est à l'issue de cette scolarité que vous accédez au grade de technicien 3ème grade (échelle 9).",
    },
    {
      type: "p",
      text: "Lors de la session 2026 — clôturée le 28 mai, avec une épreuve le 14 juin — les annonces relayées faisaient état d'environ 330 places, dont 160 en informatique et digitalisation, ouvertes aux bacheliers scientifiques et techniques avec un âge maximum de 35 ans, sous l'égide de la Direction du Développement des Compétences et de la Transformation Numérique. Les conditions exactes (filières du bac acceptées, âge, pièces à fournir) sont précisées dans chaque avis officiel.",
    },
    { type: "h2", text: "Police, Forces Auxiliaires : des concours à part" },
    {
      type: "p",
      text: "La [police (DGSN)](/concours/concours-police-dgsn) et les [Forces Auxiliaires](/concours/concours-forces-auxiliaires) relèvent aussi du Ministère de l'Intérieur — mais leurs recrutements sont totalement séparés, avec leurs propres plateformes : [concours.dgsn.gov.ma](https://concours.dgsn.gov.ma/) pour la police, [recrutement.fa.gov.ma](https://recrutement.fa.gov.ma/) pour les Forces Auxiliaires. Si c'est l'uniforme qui vous intéresse, c'est là que ça se passe — pas dans les concours administratifs couverts par cette page.",
    },
    { type: "h2", text: "Conditions et candidature" },
    {
      type: "p",
      text: "Comme pour l'ensemble de la fonction publique, la nationalité marocaine est exigée ; la condition d'âge générale — de 18 à 45 ans, sauf statuts particuliers — s'appliquait lors des dernières sessions. Le diplôme dépend du grade visé : lors de la session 2026, les avis exigeaient un **Master** pour les administrateurs 2ème grade. Dans tous les cas, l'avis officiel liste les diplômes acceptés, conformément au décret n° 2.12.90 qui fixe la correspondance officielle entre diplômes et grades — si le vôtre n'y figure pas, le dossier sera rejeté par la commission de vérification.",
    },
    {
      type: "p",
      text: "La candidature passe par le portail officiel [emploi-public.ma](https://www.emploi-public.ma/fr/) ; le mode de dépôt exact (en ligne ou dossier) est précisé dans chaque avis. La procédure complète, création du compte candidat comprise, est détaillée dans notre guide [Comment postuler à un concours de la fonction publique](/blog/comment-postuler-concours-fonction-publique).",
    },
    {
      type: "warning",
      text: "**Aucun concours officiel ne demande de paiement.** La candidature aux concours du Ministère de l'Intérieur est gratuite, et ni le ministère ni emploi-public.ma ne vous contacteront pour des « frais de dossier ». Les sites « alwadifa » qui relaient les annonces sont des sites privés, sans aucun lien avec l'État : vérifiez toujours l'avis sur le portail officiel avant de candidater. En cas de doute, notre guide des [arnaques aux concours](/blog/concours-arnaques-comment-les-eviter) liste les signaux d'alerte.",
    },
  ],
  howTo: {
    name: "Comment postuler à un concours du Ministère de l'Intérieur",
    description:
      "La procédure de candidature aux concours administratifs et techniques du Ministère de l'Intérieur, via le portail officiel emploi-public.ma.",
    steps: [
      {
        name: "Surveillez la publication de l'avis",
        text: "Les avis du Ministère de l'Intérieur (concours nationaux comme provinciaux) sont publiés sur emploi-public.ma. Activez les alertes e-mail de votre compte candidat pour être notifié dès qu'un avis tombe.",
      },
      {
        name: "Lisez l'avis officiel en entier",
        text: "Vérifiez le grade, la spécialité, le diplôme exact exigé, le nombre de postes, les pièces demandées et la date limite. Si votre diplôme ne figure pas dans l'avis, votre dossier sera rejeté.",
      },
      {
        name: "Créez ou complétez votre profil candidat",
        text: "Sur emploi-public.ma, créez votre compte candidat (activation par lien de confirmation envoyé par e-mail), puis renseignez vos informations personnelles, vos diplômes et votre CV.",
      },
      {
        name: "Préparez vos pièces au format PDF",
        text: "Chaque document (diplôme, CNIE, attestations) doit être un PDF de 2 Mo maximum. Scannez tout avant de commencer le dépôt.",
      },
      {
        name: "Déposez votre candidature avant la date limite",
        text: "Suivez le mode de dépôt indiqué dans l'avis — bouton « Dépôt en ligne » sur le portail ou dossier selon les cas. Sur emploi-public.ma, la clôture est généralement fixée à 16h30 le jour indiqué.",
      },
      {
        name: "Suivez votre dossier jusqu'aux résultats",
        text: "Consultez la rubrique « Mes Candidatures » et surveillez la publication des listes des convoqués puis des résultats sur le portail — emploi-public.ma ne vous contactera jamais directement.",
      },
    ],
  },
  faq: [
    {
      question: "Le concours du Ministère de l'Intérieur 2026 est-il encore ouvert ?",
      answer:
        "Non. Selon les avis publiés pour cette session, la date limite du grand concours national (600 postes) était le 28 avril 2026, et les épreuves écrites ont eu lieu en juin à Rabat. La prochaine session n'est pas encore annoncée : la seule source fiable pour la prochaine annonce est emploi-public.ma.",
    },
    {
      question: "Quel diplôme faut-il pour le concours du Ministère de l'Intérieur ?",
      answer:
        "Cela dépend du grade. Lors de la session 2026, les avis exigeaient un Master pour les administrateurs 2ème grade et un diplôme de technicien pour les techniciens 3ème grade ; le concours des instituts de formation est, lui, ouvert au niveau bac. Le diplôme exact accepté est toujours listé dans l'avis officiel de chaque concours.",
    },
    {
      question: "Quelle différence entre le concours des techniciens et celui des instituts de formation ?",
      answer:
        "Le concours des techniciens 3ème grade est un recrutement direct : vous postulez avec votre diplôme de technicien et, si vous réussissez, vous êtes nommé. Le concours des instituts de formation se passe avec le bac : vous êtes admis à une formation au sein d'un institut du ministère, et le grade de technicien vient après la scolarité.",
    },
    {
      question: "Où déposer sa candidature pour un concours du Ministère de l'Intérieur ?",
      answer:
        "Via le portail officiel emploi-public.ma, qui centralise les avis, les listes des convoqués et les résultats. Chaque avis précise le mode de dépôt (en ligne ou dossier) et la date limite. Aucun site « alwadifa » ne permet de candidater : ce sont des sites privés qui relaient les annonces.",
    },
    {
      question: "Le concours de police fait-il partie du concours du Ministère de l'Intérieur ?",
      answer:
        "La DGSN (police) relève bien du Ministère de l'Intérieur, mais elle organise ses propres concours avec sa propre plateforme d'inscription (concours.dgsn.gov.ma). Cette page couvre les concours administratifs et techniques du ministère ; pour la police, consultez notre guide dédié au concours DGSN.",
    },
    {
      question: "L'inscription au concours est-elle payante ?",
      answer:
        "Non, jamais. La candidature aux concours de la fonction publique marocaine est gratuite. Toute demande de paiement — « frais de dossier », recharge, virement — est une arnaque, quel que soit le canal utilisé.",
    },
  ],
  sources: [
    {
      label: "Portail National de l'Emploi Public — liste officielle des concours",
      url: "https://www.emploi-public.ma/fr/concours-liste",
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
      label: "Avis relayé du concours 600 postes (session 2026) — wadifapublic.ma",
      url: "https://www.wadifapublic.ma/fr/services-etat/c41638-26/ministere-de-linterieur-administrateur-2eme-concours-recrutement",
      official: false,
    },
    {
      label: "Voies de recrutement du Ministère de l'Intérieur — jadid-alwadifa.com",
      url: "https://www.jadid-alwadifa.com/concours-de-recrutement-ministere-de-linterieur-maroc-2026/",
      official: false,
    },
  ],
};

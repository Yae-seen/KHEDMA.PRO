import type { ConcoursGuide } from "@/lib/content-types";

export const guide: ConcoursGuide = {
  slug: "concours-tresorerie-tgr",
  intro: [
    "Vous visez un poste à la **Trésorerie Générale du Royaume** — ce que beaucoup de candidats cherchent en arabe sous مباراة الخزينة العامة ? Commençons par la réponse honnête : aucun concours de recrutement au nom propre de la TGR n'a été annoncé en 2026. Ce n'est pas une porte fermée pour autant : la TGR recrute principalement via les grands concours transverses du **Ministère de l'Économie et des Finances (MEF)**, publiés sur [emploi-public.ma](https://www.emploi-public.ma/fr/concours-liste).",
    "Ce guide explique comment fonctionne réellement ce circuit : la famille des concours MEF (administrateurs des finances, inspecteurs, techniciens), les diplômes exigés par grade, la plateforme officielle e-recrutement.finances.gov.ma et les endroits à surveiller pour ne pas rater la prochaine annonce. La candidature est **gratuite** de bout en bout.",
  ],
  body: [
    { type: "h2", text: "La TGR organise-t-elle son propre concours en 2026 ?" },
    {
      type: "p",
      text: "Non — à la mi-juillet 2026, aucun avis de concours au nom de la Trésorerie Générale du Royaume ne figure sur emploi-public.ma, et le site officiel [tgr.gov.ma](https://www.tgr.gov.ma) n'affiche pas de rubrique recrutement dédiée. Si une page vous promet un « concours TGR 2026 » avec des dates précises et un nombre de postes, elle ne s'appuie sur aucune annonce officielle.",
    },
    {
      type: "p",
      text: "Le schéma réel est différent : la TGR est une direction du Ministère de l'Économie et des Finances, et le MEF organise des **concours communs** dont les lauréats sont affectés dans ses différentes directions — Trésorerie Générale, Direction Générale des Impôts (DGI), Administration des Douanes (ADII) et services centraux. Lors de la campagne 2026, il n'y a d'ailleurs pas eu de concours séparé au nom de la DGI ou de la TGR : un seul grand concours d'administrateurs des finances a couvert l'ensemble du ministère.",
    },
    {
      type: "note",
      text: "Le même principe vaut pour les impôts : la page [Concours des Impôts (DGI)](/concours/concours-impots-dgi) décrit la même mécanique de recrutement transverse, vue depuis la DGI.",
    },
    { type: "h2", text: "Les concours transverses du MEF : la vraie porte d'entrée" },
    {
      type: "p",
      text: "Le grand rendez-vous de 2026 a été le concours des **administrateurs des finances 2ème grade (échelle 11)** : 503 postes, candidatures closes le 3 juin 2026, épreuve écrite passée le 5 juillet 2026. Ce concours est donc **clôturé** — inutile de chercher un lien d'inscription. Selon l'avis relayé lors de cette session, les postes étaient répartis par spécialité, avec la part du lion pour les sciences économiques et de gestion (358 postes) et les sciences juridiques (130 postes).",
    },
    {
      type: "p",
      text: "La famille MEF compte aussi des concours de techniciens : en 2025, le ministère a ouvert **473 postes de techniciens de 3ème grade (échelle 9)**, écrit passé le 6 juillet 2025, dans des spécialités techniques — informatique, topographie, génie civil, génie électrique, imprimerie. Côté inspecteurs des finances, la dernière session repérée remonte à février 2025 (16 postes). Chaque session fixe ses propres spécialités, ses propres conditions et son propre calendrier.",
    },
    {
      type: "table",
      caption:
        "Dernières sessions des concours transverses du MEF — à titre de repère, chaque nouvel avis fixe ses propres conditions",
      headers: ["Concours", "Postes", "Diplôme exigé (selon l'avis de la session)", "État"],
      rows: [
        [
          "Administrateurs des finances 2ème grade — éch. 11 (2026)",
          "503",
          "Master, Master spécialisé ou DESA",
          "Clôturé — écrit passé le 5 juillet 2026",
        ],
        [
          "Techniciens 3ème grade — éch. 9 (2025)",
          "473",
          "Diplôme de la spécialité, précisé dans l'avis",
          "Session passée — écrit le 6 juillet 2025",
        ],
        [
          "Inspecteurs des finances (2025)",
          "16",
          "Précisé dans l'avis officiel",
          "Session passée — écrit le 23 février 2025",
        ],
      ],
    },
    {
      type: "p",
      text: "Aucune nouvelle session MEF n'était annoncée à la mi-juillet 2026. Une annonce peut tomber à n'importe quel moment de l'année — d'où l'importance de la veille décrite plus bas.",
    },
    { type: "h2", text: "Grades, échelles et diplômes : où vous situer" },
    {
      type: "p",
      text: "Comme partout dans la fonction publique, les avis du MEF sont rédigés par **grade** et **échelle**, et le décret n° 2.12.90 fixe la correspondance officielle entre diplômes et grades. Concrètement, lors de la session 2026 des administrateurs des finances, il fallait un **Master, un Master spécialisé ou un DESA** (ou diplôme équivalent), avec une limite d'âge fixée à 45 ans. Les concours de techniciens s'adressent aux profils techniques, le diplôme exact étant précisé dans chaque avis.",
    },
    {
      type: "p",
      text: "Vérifiez toujours le diplôme exigé dans l'avis avant de candidater : un dossier hors profil ne passera pas la vérification, quelle que soit la qualité de votre CV. Si le diplôme demandé ne correspond pas au vôtre, mieux vaut viser un autre concours que forcer une candidature vouée au rejet.",
    },
    { type: "h2", text: "Où déposer sa candidature : e-recrutement.finances.gov.ma" },
    {
      type: "p",
      text: "Les candidatures aux concours du Ministère de l'Économie et des Finances — TGR, impôts et douanes comprises — se déposent **obligatoirement en ligne** sur [e-recrutement.finances.gov.ma](https://e-recrutement.finances.gov.ma), la plateforme officielle du ministère. Les avis eux-mêmes sont publiés sur [emploi-public.ma](https://www.emploi-public.ma/fr/concours-liste) et sur la page des [appels à candidatures du MEF](https://www.finances.gov.ma/fr/vous-orientez/Pages/appels-candidatures.aspx). Les dates limites sont généralement fixées à **16h30** le jour indiqué, et l'écrit a lieu typiquement une à trois semaines après la clôture.",
    },
    {
      type: "p",
      text: "Pour la procédure générale — compte candidat, alertes e-mail, dossier, suivi — notre guide [Comment postuler à un concours de la fonction publique](/blog/comment-postuler-concours-fonction-publique) détaille chaque étape. Et pour comparer avec les autres recrutements en cours, le [hub Concours](/concours) tient le statut de chaque concours à jour.",
    },
    {
      type: "warning",
      text: "**Aucun concours officiel ne demande de paiement.** La candidature aux concours du MEF est gratuite, et ni la TGR ni le ministère ne contactent les candidats par WhatsApp pour « accélérer un dossier ». Toute demande de frais de dossier, de recharge ou de virement est une [arnaque](/blog/concours-arnaques-comment-les-eviter).",
    },
    { type: "h2", text: "Les épreuves : à quoi s'attendre" },
    {
      type: "p",
      text: "Selon les avis des dernières sessions MEF, la sélection se joue en deux temps : une épreuve écrite sous forme de **QCM de 3 heures**, puis un entretien oral réservé aux candidats ayant obtenu au moins **12/20** à l'écrit. Ces mêmes avis prévoyaient les quotas réglementaires habituels : 25 % des postes réservés aux résistants, pupilles de la nation et anciens militaires, et 7 % aux personnes en situation de handicap.",
    },
    {
      type: "p",
      text: "La transparence est une obligation légale : le portail emploi-public.ma existe précisément pour publier les conditions, les dates, les lieux, les listes des candidats admis à concourir, les résultats définitifs et les listes d'attente (décret n° 2.11.621). Si une information sur un « concours TGR » ne s'y trouve pas, considérez-la comme non confirmée.",
    },
  ],
  howTo: {
    name: "Comment postuler à un concours du Ministère des Finances (TGR incluse)",
    description:
      "Les étapes concrètes pour candidater aux concours transverses du MEF — la voie d'accès actuelle aux postes de la Trésorerie Générale du Royaume.",
    steps: [
      {
        name: "Mettez en place votre veille",
        text: "Consultez régulièrement la liste des concours ouverts sur emploi-public.ma et la page des appels à candidatures sur finances.gov.ma. Créez un compte candidat sur emploi-public.ma et activez les alertes e-mail : les fenêtres de candidature sont courtes.",
      },
      {
        name: "Lisez l'avis officiel en entier",
        text: "Vérifiez le grade, la spécialité, le diplôme exigé, la condition d'âge, le nombre de postes et la date limite. Chaque concours a son propre arrêté d'ouverture : les conditions d'une session précédente ne valent pas pour la suivante.",
      },
      {
        name: "Préparez votre dossier à l'avance",
        text: "Les pièces exigées sont précisées dans chaque avis officiel. Scannez vos documents (diplôme, CNIE, attestations) avant l'ouverture des dépôts pour ne pas courir le dernier jour.",
      },
      {
        name: "Déposez votre candidature sur e-recrutement.finances.gov.ma",
        text: "C'est le canal de dépôt obligatoire pour les concours du Ministère de l'Économie et des Finances. Respectez la date limite : la clôture est généralement fixée à 16h30 le jour indiqué.",
      },
      {
        name: "Surveillez la liste des candidats admis à concourir",
        text: "Elle est publiée sur emploi-public.ma et sur le site du ministère, avec la date et le lieu de l'épreuve écrite. L'écrit a lieu typiquement une à trois semaines après la clôture des candidatures.",
      },
      {
        name: "Préparez l'écrit au format des sessions récentes",
        text: "Lors des dernières sessions MEF, l'écrit était un QCM de 3 heures suivi d'un oral, avec un seuil de 12/20 à l'écrit. Travaillez votre spécialité — économie, gestion, droit ou domaine technique — sans négliger la culture générale.",
      },
    ],
  },
  faq: [
    {
      question: "La TGR recrute-t-elle en 2026 ?",
      answer:
        "Pas via un concours propre : aucun avis au nom de la Trésorerie Générale du Royaume n'a été publié en 2026. Le recrutement passe par les concours transverses du Ministère de l'Économie et des Finances, dont les lauréats sont affectés dans les directions du ministère, TGR comprise.",
    },
    {
      question: "Quel diplôme faut-il pour intégrer la TGR ?",
      answer:
        "Cela dépend du grade ouvert au concours. Lors de la session 2026 des administrateurs des finances (échelle 11), un Master, un Master spécialisé ou un DESA était exigé. Les concours de techniciens (échelle 9) visent des profils techniques ; le diplôme exact est précisé dans chaque avis officiel.",
    },
    {
      question: "Où s'inscrire au prochain concours ?",
      answer:
        "Les avis sont publiés sur emploi-public.ma et sur le site du Ministère de l'Économie et des Finances ; le dépôt se fait obligatoirement en ligne sur e-recrutement.finances.gov.ma. Créez un compte candidat sur emploi-public.ma et activez les alertes e-mail pour être notifié dès la publication.",
    },
    {
      question: "Le concours de la TGR est-il payant ?",
      answer:
        "Non. La candidature aux concours de la fonction publique marocaine est gratuite. Toute demande de « frais de dossier », de recharge téléphonique ou de virement est une arnaque, quel que soit le canal utilisé.",
    },
    {
      question: "Comment se déroulent les épreuves des concours du MEF ?",
      answer:
        "Selon les avis des sessions récentes : un écrit sous forme de QCM de 3 heures, puis un oral pour les candidats ayant obtenu au moins 12/20 à l'écrit. Le format exact de chaque session est fixé dans l'arrêté d'ouverture du concours.",
    },
    {
      question: "Y a-t-il une limite d'âge ?",
      answer:
        "Chaque avis fixe ses propres conditions. Lors de la session 2026 des administrateurs des finances, la limite était fixée à 45 ans. Vérifiez toujours la condition d'âge dans l'avis officiel avant de préparer votre dossier.",
    },
  ],
  sources: [
    {
      label: "Liste officielle des concours ouverts — emploi-public.ma",
      url: "https://www.emploi-public.ma/fr/concours-liste",
      official: true,
    },
    {
      label: "Plateforme e-recrutement du Ministère de l'Économie et des Finances",
      url: "https://e-recrutement.finances.gov.ma",
      official: true,
    },
    {
      label: "Appels à candidatures du Ministère de l'Économie et des Finances",
      url: "https://www.finances.gov.ma/fr/vous-orientez/Pages/appels-candidatures.aspx",
      official: true,
    },
    {
      label: "Trésorerie Générale du Royaume — site officiel",
      url: "https://www.tgr.gov.ma",
      official: true,
    },
    {
      label: "FAQ officielle du portail emploi-public.ma",
      url: "https://www.emploi-public.ma/fr/faq-liste",
      official: true,
    },
  ],
};

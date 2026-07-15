import type { ArticleContent } from "@/lib/content-types";

export const article: ArticleContent = {
  slug: "exemples-concours-anciens-sujets",
  intro: [
    "« نماذج المباريات مع التصحيح » — c'est l'une des recherches les plus tapées par les candidats marocains à chaque annonce de concours. Disons-le clairement dès la première ligne : **il n'existe aucune archive officielle des anciens sujets** de la fonction publique marocaine. Le portail officiel [emploi-public.ma](https://www.emploi-public.ma/fr/) centralise plus de 1 100 annonces — avis, calendrier, convocations, résultats — mais ne publie aucun sujet d'examen passé.",
    "Bonne nouvelle : on peut se préparer sérieusement sans ces PDF introuvables. Ce guide montre ce qui existe réellement côté officiel, comment les épreuves sont structurées famille par famille, et comment construire un vrai plan de révision à partir des documents officiels — sans rien acheter.",
  ],
  body: [
    { type: "h2", text: "Commençons par la vérité : pas d'archive officielle" },
    {
      type: "p",
      text: "Aucun ministère marocain ne maintient de banque nationale publique d'anciens sujets. Ce qui circule sur internet — rubriques « modèles » des sites d'annonces, documents Scribd, groupes Facebook, chaînes YouTube — est presque toujours constitué de scans hébergés hors de tout domaine officiel, sans mention de provenance ni de date fiable, avec des « corrections » rédigées par on ne sait qui. Certains sont d'authentiques sujets recopiés, d'autres non : rien ne permet de les distinguer.",
    },
    {
      type: "warning",
      text: "**Aucun concours officiel ne demande de paiement** — et aucun « pack de sujets garantis avec correction » vendu sur les réseaux sociaux n'a la moindre valeur officielle. Quiconque vous vend les « sujets de la prochaine session » est un escroc, point. Notre guide des [arnaques aux concours](/blog/concours-arnaques-comment-les-eviter) détaille les schémas les plus courants.",
    },
    { type: "h2", text: "Ce qui existe vraiment côté officiel" },
    { type: "h3", text: "Les fiches de spécification des épreuves du MEN" },
    {
      type: "p",
      text: "Pour le [concours de l'enseignement](/concours/concours-enseignement), le document officiel de référence n'est pas un ancien sujet : ce sont les **fiches de spécification des épreuves** (بطاقات توصيف الاختبارات), publiées lors des dernières sessions sur [men.gov.ma](https://www.men.gov.ma/fr/concours) en même temps que l'annonce. Elles définissent, pour chaque spécialité et chaque cycle, les domaines évalués, les axes du programme et le poids de chaque axe. C'est l'équivalent le plus proche d'un programme d'examen officiel — et c'est gratuit.",
    },
    { type: "h3", text: "Les exemples historiques du Ministère des Finances" },
    {
      type: "p",
      text: "Le Ministère de l'Économie et des Finances a, par le passé, publié des « exemples des épreuves » de ses propres concours sur son portail de recrutement — des copies datant des sessions 2010 à 2014 circulent encore sur les sites d'annonces. La DRH du Ministère de la Justice a elle aussi publié des modèles de ses concours passés. Ce sont des exceptions historiques, pas une pratique systématique : vérifiez à chaque session si l'administration organisatrice met quelque chose en ligne.",
    },
    { type: "h3", text: "L'avis de concours et son arrêté d'ouverture" },
    {
      type: "p",
      text: "Le vrai « programme » de votre concours se trouve dans l'avis officiel publié sur emploi-public.ma et dans l'arrêté d'ouverture téléchargeable depuis la fiche du concours : nature des épreuves, durées, coefficients et conditions y sont précisés. Beaucoup de candidats cherchent des PDF pendant des semaines sans jamais avoir lu ce document en entier — commencez par là, puis suivez notre guide [pas-à-pas de candidature](/blog/comment-postuler-concours-fonction-publique).",
    },
    { type: "h2", text: "La structure des épreuves, famille par famille" },
    {
      type: "p",
      text: "La composition exacte varie selon l'administration et le grade — elle est précisée dans chaque avis officiel. Mais les annonces des dernières sessions dessinent un squelette récurrent par famille de concours :",
    },
    {
      type: "table",
      caption:
        "Épreuves types observées dans les annonces des sessions récentes — le détail exact fait foi dans chaque avis officiel.",
      headers: ["Famille de concours", "Épreuves types (sessions récentes)", "Format dominant"],
      rows: [
        [
          "Administration & finances (MEF, Intérieur…)",
          "Culture générale + épreuve de spécialité (comptabilité, fiscalité, économie, gestion, droit) + langue",
          "Rédaction ou QCM ; QCM pour les grades techniciens",
        ],
        [
          "Justice (rédacteurs et cadres judiciaires)",
          "Droit constitutionnel, civil, de la famille, procédure pénale + sujet général sur l'administration",
          "Rédaction",
        ],
        [
          "Enseignement (CRMEF)",
          "Primaire : didactique des matières + sciences de l'éducation ; secondaire : contenu disciplinaire + didactique de la spécialité",
          "Écrit par spécialité",
        ],
        [
          "Police (DGSN)",
          "Culture générale et actualité + langues + tests psychotechniques",
          "QCM, puis entretien oral",
        ],
      ],
    },
    {
      type: "note",
      text: "Lors des dernières sessions des grands concours du Ministère des Finances, l'écrit était un **QCM d'environ 3 heures**, avec un seuil à l'écrit (12/20 selon les annonces récentes) conditionnant l'accès à l'oral. Vérifiez ces modalités dans l'avis de votre session : elles peuvent changer d'une année à l'autre.",
    },
    { type: "h2", text: "La méthode : se préparer sans anciens sujets officiels" },
    {
      type: "ol",
      items: [
        "**Téléchargez l'avis et l'arrêté d'ouverture** depuis la fiche de votre concours sur emploi-public.ma : la liste des épreuves, leurs durées et leurs coefficients constituent votre programme réel.",
        "**Pour l'enseignement, récupérez la fiche de spécification** de votre spécialité et de votre cycle sur men.gov.ma dès sa publication avec l'annonce.",
        "**Construisez votre plan de révision axe par axe**, en consacrant à chaque axe un temps proportionnel à son poids dans la fiche ou l'avis.",
        "**Pour la culture générale, travaillez les grands dossiers nationaux** : à titre d'exemple, un sujet recirculé d'une session passée des Finances portait sur les relations Maroc-Afrique.",
        "**Entraînez-vous au format QCM chronométré** si vous visez un grade technicien ou un concours dont l'avis annonce un QCM : la gestion du temps y élimine plus de candidats que la difficulté des questions.",
        "**Utilisez les PDF qui circulent comme simple complément** : vérifiez l'administration et l'année du document, et méfiez-vous des corrections non signées — croisez toujours avec un manuel ou un texte de loi à jour.",
      ],
    },
    { type: "h2", text: "Pourquoi nous n'hébergeons pas de sujets scannés" },
    {
      type: "p",
      text: "La loi marocaine n° 2-00 sur le droit d'auteur exclut de la protection les textes officiels de nature législative, administrative ou judiciaire. Un sujet rédigé par une administration relève sans doute de cette catégorie — mais le point n'est pas explicitement tranché, et surtout, les épreuves de langue et de culture générale incorporent souvent des extraits de presse ou d'œuvres littéraires qui, eux, restent protégés. Republier le scan, c'est republier ces extraits.",
    },
    {
      type: "p",
      text: "La même loi autorise la citation courte avec indication de la source et de l'auteur. Notre choix éditorial est donc clair : analyser la structure des épreuves, pointer vers les documents officiels et les annonces à jour dans notre [hub Concours](/concours) — plutôt que d'héberger des PDF de provenance inconnue.",
    },
  ],
  faq: [
    {
      question: "Où trouver les anciens sujets officiels des concours marocains ?",
      answer:
        "Nulle part de manière centralisée : il n'existe pas d'archive nationale officielle, et emploi-public.ma ne publie aucun sujet. Les seules publications officielles connues sont les fiches de spécification du MEN pour le concours de l'enseignement et des exemples historiques mis en ligne par le passé par le Ministère des Finances et la DRH de la Justice.",
    },
    {
      question: "C'est quoi les fiches de spécification (بطاقات توصيف الاختبارات) ?",
      answer:
        "Des documents officiels publiés par le Ministère de l'Éducation Nationale lors des dernières sessions du concours de l'enseignement. Ils définissent, spécialité par spécialité et cycle par cycle, les domaines évalués, les axes du programme et le poids de chaque axe — c'est la base de révision légitime pour ce concours.",
    },
    {
      question: "Les sujets partagés dans les groupes Facebook sont-ils fiables ?",
      answer:
        "Sans garantie : ce sont des scans de provenance inconnue, parfois anciens, avec des corrections que personne ne vérifie. Utilisez-les au mieux comme complément d'entraînement, jamais comme référence — et ne payez jamais pour en obtenir : les concours officiels sont gratuits.",
    },
    {
      question: "Comment connaître les épreuves exactes de mon concours ?",
      answer:
        "Dans l'avis officiel et l'arrêté d'ouverture publiés sur emploi-public.ma et sur le site de l'administration organisatrice : nature des épreuves, durées, coefficients et programme y sont précisés. C'est le seul document qui fait foi pour votre session.",
    },
    {
      question: "Quels concours se passent en QCM ?",
      answer:
        "Selon les annonces des sessions récentes : les grades techniciens des familles administration et finances, les grands concours du Ministère des Finances (QCM d'environ 3 heures) et l'écrit des concours de police (DGSN). Le format exact de chaque session est confirmé dans l'avis officiel.",
    },
    {
      question: "Est-il légal de partager un ancien sujet de concours ?",
      answer:
        "La loi n° 2-00 ne protège pas les textes officiels de nature administrative, ce qui couvre sans doute les sujets rédigés par l'administration — mais le point n'est pas explicitement tranché, et les extraits de presse ou d'œuvres littéraires insérés dans les épreuves restent protégés. La citation courte avec source et auteur est en revanche autorisée.",
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
      label: "Ministère de l'Éducation Nationale — page concours",
      url: "https://www.men.gov.ma/fr/concours",
      official: true,
    },
    {
      label: "Textes juridiques des concours (décrets et circulaires)",
      url: "https://www.emploi-public.ma/fr/content/textes-concours",
      official: true,
    },
    {
      label: "Loi n° 2-00 relative aux droits d'auteur et droits voisins — WIPO Lex",
      url: "https://www.wipo.int/wipolex/fr/legislation/details/19766",
      official: false,
    },
  ],
};

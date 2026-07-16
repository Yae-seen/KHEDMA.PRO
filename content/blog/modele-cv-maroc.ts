import type { ArticleContent } from "@/lib/content-types";

/**
 * Morocco-specific CV guide — rewritten 2026-07-16 to remove generic/templated
 * advice flagged in the AdSense/EEAT audit. Now grounded in the Moroccan market:
 * FR/AR/EN language norms, photo & CIN conventions, OFPPT diploma labels, and
 * sector realities (offshoring, industrie automobile/aéronautique, fonction
 * publique). Sources: ANAPEC (accompagnement + ateliers CV), OFPPT (niveaux de
 * diplôme), emploi-public.ma (dossier concours). No payment/credential flows.
 */

export const article: ArticleContent = {
  slug: "modele-cv-maroc",
  intro: [
    "Au Maroc, un bon CV (السيرة الذاتية) ne raconte pas votre vie : il donne à un recruteur, en un coup d'œil, l'envie de vous convoquer. Les attentes du marché marocain sont précises — une page claire, la bonne langue selon le secteur, les bonnes rubriques, et des diplômes présentés comme les employeurs d'ici les lisent (Baccalauréat, Licence, Master, mais aussi Technicien Spécialisé de l'OFPPT).",
    "Ce guide va au-delà des conseils universels : il explique la structure attendue au format marocain, quand rédiger en français ou en arabe, les conventions de la photo et de la CIN, et comment adapter votre CV selon que vous visez l'**offshoring**, l'**industrie** ou un **concours de la fonction publique** — plus les erreurs qui éliminent un candidat au Maroc, et un outil gratuit pour créer le vôtre.",
  ],
  body: [
    { type: "h2", text: "Ce qu'un recruteur marocain attend d'un CV" },
    {
      type: "p",
      text: "Gardez une seule page pour un profil junior ou intermédiaire, et un ordre du plus important au moins important pour le poste. Voici les rubriques attendues, avec ce qui est propre au Maroc :",
    },
    {
      type: "ol",
      items: [
        "**En-tête** : prénom, nom et un **titre** clair (le poste visé — « Téléconseiller francophone », « Technicien de maintenance », pas « CV »). Ajoutez un numéro marocain (06/07), un e-mail sérieux à base de prénom.nom, et votre **ville** (utile car beaucoup d'offres sont locales).",
        "**État civil** : la tradition marocaine tolère la date de naissance et parfois la nationalité. En revanche, **n'inscrivez jamais votre numéro de CIN complet** sur un CV : il ne sert qu'au dossier final, pas au tri.",
        "**Profil / accroche** : 2 à 3 phrases qui résument qui vous êtes et le poste que vous visez.",
        "**Expériences** : les plus récentes d'abord — poste, employeur, période et 1 à 2 lignes de **résultats concrets**, pas de simples tâches.",
        "**Formation** : présentez les diplômes tels qu'ils sont reconnus ici — Baccalauréat (avec la série), Licence/Master, DUT/BTS (EST, ISTA), et surtout les diplômes **OFPPT** avec leur niveau exact : **Technicien Spécialisé (TS), Technicien (T) ou Qualification (Q)**, la spécialité et la mention.",
        "**Compétences** : techniques (logiciels, machines, méthodes) et transversales, ciblées sur le poste.",
        "**Langues** : arabe (langue maternelle), français, anglais… avec un niveau **honnête**. Au Maroc, c'est souvent la rubrique décisive.",
      ],
    },
    {
      type: "note",
      text: "Créez votre CV avec ces rubriques déjà en place grâce à notre [CV Builder gratuit](/cv) : vous remplissez, vous prévisualisez, vous enregistrez en PDF. Aucune inscription, et vos données restent sur votre appareil.",
    },
    { type: "h2", text: "Français, arabe ou anglais : quelle langue choisir ?" },
    {
      type: "p",
      text: "Le choix de la langue n'est pas cosmétique au Maroc, il dépend du secteur. Le **français** reste la langue par défaut du secteur privé, des multinationales et de l'offshoring francophone. L'**arabe** est attendu — parfois exigé — dans certaines administrations, et de nombreux dossiers de la fonction publique acceptent un CV bilingue arabe/français. L'**anglais** progresse vite dans l'offshoring anglophone et les centres de services internationaux. Règle d'or : **rédigez dans la langue de l'offre**, et si vous postulez dans plusieurs secteurs, préparez deux versions. Une chose à éviter absolument : la **darija à l'écrit** ou le langage SMS — un CV se rédige toujours en langue soutenue. Pour cibler le bon canal, voyez notre hub [Emploi](/emploi).",
    },
    { type: "h2", text: "Photo et CIN : les conventions marocaines" },
    {
      type: "p",
      text: "Contrairement à la France où la photo est déconseillée, elle reste **fréquente et souvent attendue** sur un CV marocain, notamment dans la relation client et le commerce. Si vous en mettez une, choisissez un portrait sobre et professionnel — surtout pas un selfie ni une photo de réseau social. Côté **CIN**, la prudence prime : n'exposez pas le numéro complet sur un document que vous diffusez largement. La nationalité, et éventuellement la date de naissance, suffisent au stade de la candidature ; le numéro de CIN ne se communique qu'au moment de constituer le dossier officiel (inscription ANAPEC, dépôt d'un concours), sur des canaux légitimes.",
    },
    { type: "h2", text: "Adapter son CV au secteur : offshoring, industrie, fonction publique" },
    { type: "h3", text: "Offshoring et relation client" },
    {
      type: "p",
      text: "Les centres d'appels et le BPO (Casanearshore à Casablanca, Rabat Technopolis, Fès, Tétouan, Marrakech) recrutent en continu, et pour eux le **niveau de langue est LE critère de sélection** — il sera testé au téléphone dès la présélection. Affichez donc un niveau réaliste en français et/ou anglais, mettez en avant toute expérience de relation client, votre aisance à l'oral et votre disponibilité pour le travail en horaires décalés. Gonfler son niveau ici ne sert à rien : l'écart se voit en cinq minutes d'entretien.",
    },
    { type: "h3", text: "Industrie (automobile, aéronautique)" },
    {
      type: "p",
      text: "Les pôles industriels — automobile à Tanger (Renault, écosystème de Tanger Med) et Kénitra (Stellantis), aéronautique à Nouaceur/Casablanca — valorisent d'autres signaux. Mettez en avant vos **diplômes OFPPT ou EST** avec leur niveau exact, votre poste (opérateur, technicien de maintenance, contrôle qualité), le **respect des normes de sécurité et de qualité**, le travail en équipe et la tenue des cadences. Un CV industriel se juge sur la précision technique, pas sur le style.",
    },
    { type: "h3", text: "Fonction publique et concours" },
    {
      type: "p",
      text: "Pour un **concours de la fonction publique**, le CV ne fait qu'accompagner le dossier : restez sobre et factuel, et surtout **suivez à la lettre la liste des pièces** demandées dans l'avis officiel. Le dépôt se fait via le portail dédié — voyez notre guide [emploi-public.ma, mode d'emploi](/blog/emploi-public-ma-portail). Assurez-vous que vos diplômes sont présentés tels qu'ils figurent sur vos attestations, car l'administration vérifie la conformité.",
    },
    {
      type: "note",
      text: "L'**ANAPEC** accompagne gratuitement la rédaction du CV (ateliers, aide en agence) et un CV vous est demandé pour compléter votre espace candidat : voyez [comment créer votre espace candidat ANAPEC](/blog/anapec-inscription-espace-candidat). L'accompagnement est gracieux — personne ne doit vous faire payer pour « valider » un CV.",
    },
    { type: "h2", text: "Les erreurs qui éliminent un candidat marocain" },
    {
      type: "ul",
      items: [
        "**Darija ou langage SMS à l'écrit** : rédhibitoire, même dans un secteur détendu.",
        "**Un niveau de langue exagéré** : démasqué au test téléphonique de l'offshoring dès la présélection.",
        "**Une photo type selfie** ou tirée d'un réseau social, au lieu d'un portrait sobre.",
        "**Un numéro de CIN complet** ou des données sensibles exposés sur un CV diffusé partout.",
        "**Des diplômes OFPPT mal libellés** : oublier de préciser TS/T/Q, la spécialité ou la mention.",
        "**Un même CV générique** envoyé à l'industrie, à l'offshoring et à un concours, sans adaptation.",
        "**Plusieurs pages** pour une première expérience, ou un e-mail peu sérieux qui décrédibilise tout le reste.",
      ],
    },
    { type: "h2", text: "Cibler la ville et le secteur qui recrutent" },
    {
      type: "p",
      text: "Le marché marocain est très local : l'offshoring se concentre sur Casablanca et Rabat, l'automobile sur Tanger et Kénitra, le tourisme sur Marrakech et Agadir. Adaptez votre titre et votre accroche à la ville et au secteur visés — un recruteur doit voir immédiatement que vous connaissez son bassin d'emploi. Notre guide [emploi par ville](/emploi/villes) détaille, ville par ville, les secteurs qui embauchent et les bons canaux.",
    },
    {
      type: "warning",
      text: "Méfiez-vous des services qui promettent un « CV qui garantit le poste » contre paiement, ou qui réclament vos identifiants de connexion. Un CV ne se paie pas pour être « validé », et aucun employeur ni service public légitime ne demande d'argent pour une candidature. Créez le vôtre gratuitement et gardez le contrôle de vos données.",
    },
  ],
  faq: [
    {
      question: "Faut-il mettre une photo sur un CV au Maroc ?",
      answer:
        "C'est fréquent et souvent attendu, surtout dans la relation client et le commerce — contrairement à la France où la photo est déconseillée. Si vous en mettez une, choisissez un portrait sobre et professionnel, jamais un selfie. L'essentiel reste le contenu.",
    },
    {
      question: "En quelle langue rédiger son CV au Maroc ?",
      answer:
        "Le français par défaut dans le privé et l'offshoring ; l'arabe (souvent en version bilingue) pour certaines administrations et concours ; l'anglais pour l'offshoring anglophone. Rédigez dans la langue de l'offre, et n'écrivez jamais en darija ou en langage SMS.",
    },
    {
      question: "Faut-il indiquer son numéro de CIN sur le CV ?",
      answer:
        "Non. N'exposez pas votre numéro de CIN complet sur un CV diffusé largement. La nationalité et éventuellement la date de naissance suffisent à la candidature ; le numéro de CIN ne se communique qu'au moment de constituer le dossier officiel, sur un canal légitime.",
    },
    {
      question: "Comment présenter un diplôme OFPPT sur un CV ?",
      answer:
        "Indiquez le niveau exact — Technicien Spécialisé (TS), Technicien (T) ou Qualification (Q) — suivi de la spécialité, de l'établissement (ISTA, par exemple), de l'année et de la mention. Les recruteurs de l'industrie lisent d'abord ce niveau.",
    },
    {
      question: "Un CV marocain doit-il faire une ou deux pages ?",
      answer:
        "Une page suffit pour un profil junior ou intermédiaire. Deux pages ne se justifient que pour une longue expérience. La clarté prime toujours sur la longueur.",
    },
    {
      question: "Comment créer un CV gratuitement au format marocain ?",
      answer:
        "Utilisez notre [CV Builder](/cv) : gratuit, sans inscription, avec un rendu au format marocain que vous enregistrez en PDF. Vos données ne quittent pas votre navigateur. L'ANAPEC propose aussi une aide gratuite à la rédaction en agence.",
    },
  ],
  sources: [
    {
      label: "ANAPEC — accompagnement et aide à la rédaction du CV",
      url: "https://anapec.ma",
      official: true,
    },
    {
      label: "OFPPT — niveaux de diplôme (Technicien Spécialisé, Technicien, Qualification)",
      url: "https://www.ofppt.ma",
      official: true,
    },
    {
      label: "Portail de l'emploi public — emploi-public.ma",
      url: "https://www.emploi-public.ma/fr/",
      official: true,
    },
  ],
};

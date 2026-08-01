import type { ArticleContent } from "@/lib/content-types";

/**
 * Canada procedural guide — targets the navigational demand
 * (الموقع الرسمي للتسجيل في الهجرة إلى كندا ≈ 1.9K/mo in Morocco, plus the
 * شروط / طريقة / كيف procedural sub-clusters). Navigational intent is
 * AIO-resistant, and this is the same pattern as the ANAPEC guide: be the page
 * that hands the reader the real government address instead of a fake one.
 *
 * YMYL: the step sequence and programme names mirror IRCC's own Express Entry
 * navigation, verified 2026-08-01. Deliberately NO CRS cut-off score is quoted —
 * it changes every draw, and a stale number here would mislead. Fee and
 * proof-of-funds figures live in the companion anti-scam guide with their dates.
 */

export const article: ArticleContent = {
  slug: "immigration-canada-site-officiel-etapes",
  intro: [
    "Il n'y a qu'une seule adresse officielle pour immigrer au Canada : canada.ca. Tout le reste — les pages Facebook, les « bureaux » qui ouvrent en ville, les sites qui vous vendent un formulaire — sont des intermédiaires, au mieux.",
    "Voici les vraies étapes, dans l'ordre exact où le gouvernement canadien les présente. Pas de raccourci, pas de promesse. Juste ce que vous faites, et dans quel ordre.",
  ],
  body: [
    {
      type: "p",
      text: "La voie la plus connue s'appelle **Entrée express** (Express Entry). Ce n'est pas un programme : c'est le **système en ligne** que le Canada utilise pour gérer les demandes de trois programmes d'immigration différents. Comprendre cette distinction vous évitera déjà la moitié des malentendus.",
    },
    {
      type: "warning",
      text: "Tapez vous-même **canada.ca** dans la barre d'adresse de votre navigateur. N'y accédez jamais par un lien reçu sur WhatsApp, Facebook ou par SMS. Les faux sites copiant l'apparence officielle sont nombreux, et le gouvernement canadien le signale explicitement. Vérifiez le cadenas et le « https:// », et que l'adresse affichée correspond bien à celle que vous avez tapée.",
    },
    {
      type: "h2",
      text: "Étape 0 — Savoir de quel programme vous relevez",
    },
    {
      type: "p",
      text: "Entrée express gère trois programmes. Vous devez savoir lequel vous concerne avant toute chose, parce que les conditions ne sont pas les mêmes.",
    },
    {
      type: "table",
      caption: "Les trois programmes gérés par Entrée express (source : IRCC)",
      headers: ["Programme", "Pour qui"],
      rows: [
        [
          "Catégorie de l'expérience canadienne",
          "Travailleurs qualifiés ayant une expérience de travail admissible **au Canada**",
        ],
        [
          "Programme des travailleurs qualifiés (fédéral)",
          "Travailleurs qualifiés ayant une expérience de travail admissible **à l'étranger** ou au Canada",
        ],
        [
          "Programme des métiers spécialisés (fédéral)",
          "Travailleurs qualifiés dans un **métier spécialisé**",
        ],
      ],
    },
    {
      type: "note",
      text: "Il existe une quatrième porte : le **Programme des candidats des provinces**. Si une province vous désigne, vous obtenez des points supplémentaires et vous pouvez être invité beaucoup plus vite. Vous y postulez également via Entrée express si vous êtes admissible à l'un des trois programmes ci-dessus.",
    },
    {
      type: "h2",
      text: "Trois sigles à connaître avant de lire quoi que ce soit d'autre",
    },
    {
      type: "ul",
      items: [
        "**CLB** (Canadian Language Benchmark) — la norme canadienne qui mesure votre niveau de langue. Votre résultat de test sera converti en CLB.",
        "**CNP** (Classification nationale des professions) — la liste de toutes les professions du marché du travail canadien. Votre métier y a un code.",
        "**TEER** — la CNP classe les professions en **6 catégories TEER**, selon les études et la formation qu'exige le métier. C'est ce qui détermine si votre expérience « compte ».",
      ],
    },
    {
      type: "h2",
      text: "Étape 1 — Vérifier votre admissibilité, gratuitement",
    },
    {
      type: "p",
      text: "Le gouvernement met à disposition un questionnaire officiel pour savoir si vous remplissez les exigences minimales. IRCC indique deux façons d'y répondre : l'outil **« Venir au Canada »**, ou un **compte sécurisé IRCC**. Les deux sont gratuits. Personne ne doit vous facturer cette vérification.",
    },
    {
      type: "h2",
      text: "Étape 2 — Calculer votre score",
    },
    {
      type: "p",
      text: "Les candidats admissibles sont classés selon un score. Plus votre score est élevé, plus vous avez de chances de recevoir une invitation. Le Canada organise régulièrement des **rondes d'invitations** et publie les résultats de chaque ronde.",
    },
    {
      type: "warning",
      text: "Nous ne publions volontairement **aucun score minimum** dans ce guide. Le seuil change à chaque ronde d'invitations, et un chiffre périmé vous ferait prendre une mauvaise décision. Consultez la page officielle des rondes d'invitations pour voir les seuils réellement atteints.",
    },
    {
      type: "h2",
      text: "Étape 3 — Réunir vos documents (c'est ici que le temps passe)",
    },
    {
      type: "p",
      text: "C'est l'étape la plus longue, et celle qu'il faut commencer le plus tôt. IRCC liste précisément ce qu'il faut préparer :",
    },
    {
      type: "ol",
      items: [
        "**Résultats du test de langue.** Vous passez un test agréé (en anglais ou en français) auprès d'un organisme désigné. Prenez rendez-vous tôt : les places partent vite, et le résultat conditionne tout le reste.",
        "**Évaluation des diplômes d'études** (EDE). Vos diplômes marocains doivent être évalués par un organisme désigné, qui atteste de leur équivalence canadienne.",
        "**Offre d'emploi**, si vous en avez une. Ce n'est pas obligatoire pour tous les programmes — méfiez-vous de qui vous en vend une.",
        "**Preuve de fonds.** L'argent que vous devez avoir en banque. Les montants exacts, les règles, et les pièges sont détaillés dans [notre guide sur l'immigration « gratuite »](/blog/immigration-canada-gratuite-verite).",
        "**Certificats de police.** À demander auprès des autorités des pays où vous avez vécu. Les délais d'obtention sont souvent sous-estimés — lancez la demande tôt.",
      ],
    },
    {
      type: "h2",
      text: "Étape 4 — Créer votre profil",
    },
    {
      type: "p",
      text: "Une fois les documents en main, vous créez votre profil Entrée express en ligne, sur le site officiel. Vous y déclarez votre situation, vos diplômes, votre expérience et vos fonds. Vous entrez alors dans le bassin de candidats.",
    },
    {
      type: "note",
      text: "IRCC rappelle que **les formulaires et les guides sont gratuits** sur son site. Si quelqu'un vous vend un formulaire, vous payez pour un document que vous pouvez télécharger vous-même sans rien débourser.",
    },
    {
      type: "h2",
      text: "Étape 5 — Attendre une ronde d'invitations",
    },
    {
      type: "p",
      text: "Vous ne postulez pas directement à la résidence permanente : vous attendez d'être **invité à présenter une demande**. Les invitations sont émises lors des rondes. C'est l'étape où la patience est réellement nécessaire — et l'étape où les arnaqueurs promettent de « faire accélérer » votre dossier. Personne ne le peut.",
    },
    {
      type: "h2",
      text: "Étape 6 — Demander la résidence permanente",
    },
    {
      type: "p",
      text: "Si vous recevez une invitation, vous déposez alors votre demande de résidence permanente et vous payez les frais officiels. Le paiement se fait au **« Receveur général du Canada »**, sauf indication contraire sur le site du bureau des visas concerné. Un agent officiel ne vous demandera jamais de verser de l'argent sur un compte personnel ni via un service privé de transfert d'argent.",
    },
    {
      type: "h2",
      text: "Étape 7 — Après le dépôt",
    },
    {
      type: "p",
      text: "Vous fournirez vos **données biométriques** (empreintes et photo) et suivrez l'avancement de votre dossier depuis votre compte. Le centre de réception des demandes de visa **ne facture pas** la prise de vos données biométriques : le rendez-vous est compris dans les frais de biométrie déjà payés.",
    },
    {
      type: "h2",
      text: "Combien de temps, honnêtement",
    },
    {
      type: "p",
      text: "Nous ne vous donnerons pas un délai en mois, parce que les délais officiels varient selon le programme, le volume de demandes et votre dossier. Ce que nous pouvons vous dire sans mentir : entre le moment où vous décidez et le moment où vous partez, il y a un test de langue, une évaluation de diplômes, des certificats de police, une somme à constituer en banque, une attente d'invitation, puis un traitement de dossier. Ce n'est pas un projet de quelques semaines. C'est un projet que l'on commence maintenant pour aboutir dans un an ou deux.",
    },
    {
      type: "p",
      text: "Et c'est précisément pour ça que ceux qui vous promettent le contraire mentent. Si vous voulez savoir exactement combien ça coûte et reconnaître ceux qui veulent votre argent, lisez [« Immigration Canada gratuite » : la vérité](/blog/immigration-canada-gratuite-verite).",
    },
  ],
  faq: [
    {
      question: "Quel est le site officiel pour l'immigration au Canada ?",
      answer:
        "**canada.ca** est le site du gouvernement du Canada, et c'est le seul endroit officiel pour vérifier votre admissibilité, télécharger les formulaires et déposer votre demande. Tapez l'adresse vous-même dans le navigateur plutôt que de passer par un lien reçu par message.",
    },
    {
      question: "Entrée express est-il un programme d'immigration ?",
      answer:
        "Non. Entrée express est le **système en ligne** que le Canada utilise pour gérer les demandes de trois programmes : la catégorie de l'expérience canadienne, le Programme des travailleurs qualifiés (fédéral) et le Programme des métiers spécialisés (fédéral).",
    },
    {
      question: "Faut-il obligatoirement une offre d'emploi pour immigrer au Canada ?",
      answer:
        "Non, l'offre d'emploi ne fait pas partie des conditions de tous les programmes. Elle figure parmi les documents à préparer *si vous en avez une*. Méfiez-vous de toute personne qui prétend vous vendre une offre d'emploi canadienne.",
    },
    {
      question: "Quel score faut-il pour être invité ?",
      answer:
        "Le seuil change à chaque ronde d'invitations, c'est pourquoi nous ne publions pas de chiffre ici : il serait périmé. Consultez la page officielle des rondes d'invitations d'IRCC pour connaître les seuils réellement atteints lors des dernières rondes.",
    },
    {
      question: "Peut-on payer pour accélérer son dossier ?",
      answer:
        "Non. IRCC est explicite : personne ne peut garantir un visa ni un traitement plus rapide, et seuls les agents d'immigration peuvent décider. Un représentant qui propose d'accélérer votre rendez-vous biométrique contre paiement est un signal d'alarme.",
    },
  ],
  sources: [
    {
      label: "IRCC — Entrée express : qui peut présenter une demande (3 programmes, CLB, CNP, TEER)",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/works.html",
      official: true,
    },
    {
      label: "IRCC — Entrée express : préparer ses documents",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents.html",
      official: true,
    },
    {
      label: "IRCC — Rondes d'invitations",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations.html",
      official: true,
    },
    {
      label: "IRCC — Escroqueries en ligne et par téléphone",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/internet-email-telephone.html",
      official: true,
    },
    {
      label: "IRCC — Liste des frais de demande",
      url: "https://ircc.canada.ca/english/information/fees/fees.asp",
      official: true,
    },
  ],
};

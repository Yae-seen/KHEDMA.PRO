import type { ArticleContent } from "@/lib/content-types";

export const article: ArticleContent = {
  slug: "chancenkarte-carte-opportunite-guide",
  intro: [
    "La Chancenkarte (carte d'opportunité, بطاقة الفرص) est une des voies les plus intéressantes pour un Marocain qualifié qui veut travailler en Allemagne : elle permet de **venir chercher un emploi sur place**, sans avoir déjà un contrat. Entrée en vigueur en juin 2024, elle repose sur un système de points clair.",
    "Voici comment elle fonctionne — les deux façons d'y accéder, le barème de points, les ressources à justifier et la durée — expliqué simplement, avec les sources officielles. Vous pouvez tester votre situation avec notre [calculateur d'éligibilité](/allemagne).",
  ],
  body: [
    { type: "h2", text: "Deux façons d'obtenir la Chancenkarte" },
    {
      type: "p",
      text: "Il existe **deux voies** distinctes :",
    },
    {
      type: "ul",
      items: [
        "**Le raccourci (sans points)** : si votre diplôme est **intégralement reconnu** en Allemagne (Anerkennung complète), ou si vous avez un diplôme allemand, la carte est accordée sans passer par les points — il reste seulement les conditions générales (ressources, etc.).",
        "**La voie des points** : sans reconnaissance complète, vous devez réunir **au moins 6 points** et remplir les conditions de base.",
      ],
    },
    { type: "h2", text: "Les conditions de base (avant les points)" },
    {
      type: "ul",
      items: [
        "**Qualification** : un diplôme universitaire, ou une qualification professionnelle d'au moins 2 ans, reconnue ou comparable dans le pays où elle a été obtenue.",
        "**Langue** : au moins l'allemand A1 **ou** l'anglais B2.",
        "**Ressources** : prouver environ **1 091 € par mois** (soit ≈ 13 092 € par an), généralement via un compte bloqué (Sperrkonto). Cet argent reste le vôtre et vous est restitué progressivement une fois sur place.",
      ],
    },
    {
      type: "note",
      text: "Le compte bloqué n'est pas une dépense : c'est une somme que vous devez **montrer**, pas payer. Notre [estimateur de budget](/allemagne) distingue clairement ce que vous justifiez de ce que vous dépensez vraiment.",
    },
    { type: "h2", text: "Le barème de points" },
    {
      type: "p",
      text: "Il faut atteindre **6 points**. Attention : pour la langue, l'expérience et l'âge, on ne compte que le **niveau le plus élevé** (non cumulable à l'intérieur d'une même catégorie).",
    },
    {
      type: "table",
      caption: "Barème officiel de la Chancenkarte (seuil : 6 points)",
      headers: ["Critère", "Points"],
      rows: [
        ["Reconnaissance partielle du diplôme, ou autorisation d'exercer", "4"],
        ["Allemand B2", "3"],
        ["Expérience : ≥ 5 ans (sur 7 ans)", "3"],
        ["Allemand B1", "2"],
        ["Expérience : ≥ 2 ans (sur 5 ans)", "2"],
        ["Âge ≤ 35 ans", "2"],
        ["Allemand A2", "1"],
        ["Anglais C1", "1"],
        ["Âge 36–40 ans", "1"],
        ["Séjour antérieur en Allemagne ≥ 6 mois (hors tourisme)", "1"],
        ["Diplôme dans un métier en pénurie (Engpassberuf)", "1"],
        ["Conjoint qui postule avec vous et remplit aussi les conditions", "1"],
      ],
    },
    {
      type: "p",
      text: "Exemple : un profil de 30 ans (2 pts), avec l'allemand B1 (2 pts), 2 ans d'expérience (2 pts) atteint déjà 6 points. Ajoutez un métier en pénurie ou l'anglais C1 pour de la marge. Testez votre combinaison dans le [calculateur](/allemagne).",
    },
    { type: "h2", text: "Durée, travail et suite" },
    {
      type: "ul",
      items: [
        "La carte est valable **jusqu'à 12 mois** (moins si vos ressources ne couvrent pas 12 mois).",
        "Pendant la recherche, vous pouvez travailler **jusqu'à 20 h/semaine**, et faire des périodes d'essai (Probebeschäftigung) de **2 semaines** chez un employeur.",
        "Une fois un emploi qualifié trouvé, vous basculez vers un titre de séjour de travail ; une Chancenkarte de suite (jusqu'à 2 ans) est possible avec une offre approuvée par l'Agence fédérale pour l'emploi.",
      ],
    },
    { type: "h2", text: "Et ensuite ? Trouver un employeur" },
    {
      type: "p",
      text: "La Chancenkarte vous fait entrer ; c'est l'emploi qui vous fait rester. Le plus efficace est de cibler un **métier précis dans une ville précise** — souvent une petite ville où la pénurie est forte. Voyez notre guide [Trouver un employeur en Allemagne : la stratégie métier × ville](/blog/trouver-employeur-allemagne-metier-ville) et l'outil de recherche d'employeurs sur notre page [Allemagne](/allemagne).",
    },
    {
      type: "warning",
      text: "Méfiez-vous des « agences » qui promettent un visa ou un emploi garanti contre paiement, et des faux certificats de langue. La demande de visa se dépose au Maroc via le canal officiel (TLScontact à Rabat), et l'auto-évaluation officielle (Quick-Check de Make it in Germany) est gratuite.",
    },
  ],
  faq: [
    {
      question: "Faut-il déjà un emploi pour demander la Chancenkarte ?",
      answer:
        "Non, c'est justement son intérêt : elle permet de venir chercher un emploi qualifié sur place, sans contrat préalable. Il faut réunir 6 points (ou avoir un diplôme intégralement reconnu) et prouver ses ressources.",
    },
    {
      question: "Combien d'argent faut-il montrer ?",
      answer:
        "Environ 1 091 € par mois, soit près de 13 092 € pour douze mois, généralement via un compte bloqué. C'est votre argent, restitué progressivement une fois en Allemagne — pas des frais à payer.",
    },
    {
      question: "Quel niveau d'allemand faut-il ?",
      answer:
        "Au minimum l'allemand A1 ou l'anglais B2 pour les conditions de base. Ensuite, chaque niveau d'allemand rapporte des points (A2 = 1, B1 = 2, B2 = 3), donc plus vous progressez, mieux c'est.",
    },
    {
      question: "Combien de temps dure la carte ?",
      answer:
        "Jusqu'à 12 mois. Pendant cette période, vous pouvez travailler jusqu'à 20 h par semaine et faire des essais de deux semaines chez des employeurs pour décrocher un poste qualifié.",
    },
    {
      question: "Où faire la demande depuis le Maroc ?",
      answer:
        "La demande de visa national se dépose à Rabat via TLScontact, pour l'ambassade d'Allemagne. Commencez par le Quick-Check officiel de Make it in Germany pour confirmer votre voie d'entrée.",
    },
  ],
  sources: [
    {
      label: "Make it in Germany — portail officiel du gouvernement allemand (FR)",
      url: "https://www.make-it-in-germany.com/fr/",
      official: true,
    },
    {
      label: "Make it in Germany — Quick-Check éligibilité",
      url: "https://www.make-it-in-germany.com/fr/visa-sejour/quick-check",
      official: true,
    },
    {
      label: "Ambassade d'Allemagne à Rabat — visa et entrée",
      url: "https://rabat.diplo.de/ma-fr/service/visa-einreise",
      official: true,
    },
  ],
};

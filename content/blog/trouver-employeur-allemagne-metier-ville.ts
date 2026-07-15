import type { ArticleContent } from "@/lib/content-types";

export const article: ArticleContent = {
  slug: "trouver-employeur-allemagne-metier-ville",
  intro: [
    "La plupart des Marocains qui rêvent de l'Allemagne cherchent « Ausbildung » ou « travailler en Allemagne » — des requêtes trop larges qui ne mènent à aucun employeur précis. La vérité de terrain est plus simple : on trouve un employeur en cherchant **un métier dans une ville précise**, souvent une petite ville où la main-d'œuvre manque.",
    "Voici la méthode concrète : quels métiers visent, pourquoi les petites villes, et comment utiliser les portails officiels pour tomber sur un employeur qui recrute — et qui parraine.",
  ],
  body: [
    { type: "h2", text: "Pourquoi viser un métier + une ville, pas « Ausbildung »" },
    {
      type: "p",
      text: "« Ausbildung » tout seul est un mot-clé sur lequel les sites allemands dominent, et qui ne dit rien à un employeur. Ce qui marche, c'est de raisonner comme un recruteur : un patron d'entreprise à **Görlitz** ou **Zwickau** cherche un **Elektroniker** ou un **Pflegefachperson**, pas « un candidat Ausbildung ». En ciblant le couple métier + ville, vous parlez le langage des offres réelles et vous tombez sur des employeurs identifiables. Notre [outil de recherche d'employeurs](/allemagne) fait exactement cela : il ouvre la recherche officielle pré-remplie pour un métier et une ville.",
    },
    { type: "h2", text: "Pourquoi les petites villes" },
    {
      type: "p",
      text: "La pénurie de main-d'œuvre (Fachkräftemangel) est plus aiguë loin des grandes métropoles. Les petites villes de l'est et des régions industrielles ont du mal à recruter localement, donc leurs employeurs sont souvent **plus ouverts à recruter et parrainer** un profil international. Bonus : le coût de la vie (surtout le loyer) y est bien plus bas qu'à Munich ou Francfort. Des villes comme Görlitz, Zwickau, Gera, Chemnitz, Cottbus ou Schwerin méritent le détour.",
    },
    { type: "h2", text: "Les métiers qui recrutent le plus" },
    {
      type: "p",
      text: "L'Agence fédérale pour l'emploi publie chaque année la liste des métiers en pénurie (Engpassberufe). Les plus accessibles depuis le Maroc, côté trades :",
    },
    {
      type: "table",
      headers: ["Métier (FR)", "En allemand", "Réglementé ?", "Allemand attendu"],
      rows: [
        ["Infirmier / soignant", "Pflegefachperson", "Oui (B2 + reconnaissance)", "B2"],
        ["Électricien", "Elektroniker", "Non", "B1"],
        ["Plombier-chauffagiste", "Anlagenmechaniker SHK", "Non", "B1"],
        ["Soudeur / métallier", "Schweißer / Metallbauer", "Non", "B1"],
        ["Mécatronicien auto", "Kfz-Mechatroniker", "Non", "B1"],
        ["Bâtiment (maçon, menuisier…)", "Bauberufe / Handwerk", "Non", "B1"],
        ["Chauffeur poids lourd", "Berufskraftfahrer", "Non (permis + Code 95)", "B1"],
        ["Cuisinier", "Koch", "Non", "B1"],
      ],
    },
    {
      type: "warning",
      text: "Même pour un métier « non réglementé », un ressortissant marocain doit **faire reconnaître son diplôme** (Anerkennung) pour obtenir le visa de travail. « Non réglementé » veut seulement dire qu'aucune autorisation spéciale n'est exigée pour exercer une fois sur place.",
    },
    { type: "h2", text: "La méthode, étape par étape" },
    {
      type: "ol",
      items: [
        "**Faites le Quick-Check officiel** de [Make it in Germany](https://www.make-it-in-germany.com/fr/visa-sejour/quick-check) pour connaître votre voie de visa (Chancenkarte, emploi, Ausbildung).",
        "**Vérifiez la reconnaissance** de votre métier avec l'[Anerkennungs-Finder](https://www.anerkennung-in-deutschland.de/html/fr/index.php) : est-il réglementé, quelle autorité, quelle procédure.",
        "**Cherchez l'employeur** sur la [Jobbörse fédérale](https://www.arbeitsagentur.de/jobsuche/) en filtrant par métier (was) et ville (wo) — ou laissez notre [outil](/allemagne) construire la recherche pour vous.",
        "**Contactez la hotline gratuite ZSBA** (« Working and Living in Germany ») pour un accompagnement du dossier : +49 30 1815-1111.",
        "**Une fois une offre décrochée**, déposez votre visa à Rabat via TLScontact (frais ≈ 75 €).",
      ],
    },
    { type: "h2", text: "Chancenkarte : venir chercher sur place" },
    {
      type: "p",
      text: "Si vous n'avez pas encore d'employeur, la **Chancenkarte** vous permet de venir chercher un emploi qualifié en Allemagne, jusqu'à un an, avec un droit de travailler 20 h/semaine. Testez votre éligibilité avec notre [guide et calculateur Chancenkarte](/blog/chancenkarte-carte-opportunite-guide).",
    },
  ],
  faq: [
    {
      question: "Faut-il vraiment parler allemand pour être recruté ?",
      answer:
        "Pour la plupart des métiers, oui : l'allemand B1 est un seuil pratique pour être pris, et B2 est exigé pour les professions de santé réglementées. L'anglais aide dans l'IT, mais l'allemand reste déterminant pour l'intégration.",
    },
    {
      question: "Pourquoi cibler les petites villes ?",
      answer:
        "Parce que la pénurie y est plus forte, les employeurs plus ouverts à parrainer un profil étranger, et le coût de la vie plus bas. Vous augmentez vos chances tout en réduisant votre budget.",
    },
    {
      question: "Où chercher les offres officielles ?",
      answer:
        "La Jobbörse de l'Agence fédérale pour l'emploi (arbeitsagentur.de) est la plus grande base publique. EURES et la bourse de Make it in Germany complètent. Notre outil ouvre ces recherches pré-remplies par métier et par ville.",
    },
    {
      question: "Dois-je faire reconnaître mon diplôme ?",
      answer:
        "Pour un visa de travail depuis le Maroc, la reconnaissance (Anerkennung) est en pratique nécessaire, même pour les métiers non réglementés. L'Anerkennungs-Finder vous indique la procédure exacte.",
    },
    {
      question: "Une agence peut-elle me garantir un emploi ?",
      answer:
        "Aucune agence ne peut « garantir » un emploi ou un visa, et une garantie payante est un signal d'arnaque. Les outils officiels (Quick-Check, Jobbörse, hotline ZSBA) sont gratuits.",
    },
  ],
  sources: [
    {
      label: "Bundesagentur für Arbeit — Jobbörse (offres d'emploi)",
      url: "https://www.arbeitsagentur.de/jobsuche/",
      official: true,
    },
    {
      label: "Anerkennung in Deutschland — reconnaissance des diplômes (FR)",
      url: "https://www.anerkennung-in-deutschland.de/html/fr/index.php",
      official: true,
    },
    {
      label: "Make it in Germany — travailler en Allemagne (FR)",
      url: "https://www.make-it-in-germany.com/fr/",
      official: true,
    },
  ],
};

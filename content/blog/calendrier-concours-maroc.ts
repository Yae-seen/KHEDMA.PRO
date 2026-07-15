import type { ArticleContent } from "@/lib/content-types";

export const article: ArticleContent = {
  slug: "calendrier-concours-maroc",
  intro: [
    "Les grands concours de recrutement au Maroc (مباريات التوظيف) reviennent chaque année à des périodes assez régulières : la police à l'automne, la gendarmerie au printemps, l'enseignement en fin d'année, la santé en hiver. Connaître ce rythme permet de préparer ses dossiers et ses épreuves à l'avance, au lieu de courir après les annonces.",
    "Voici le calendrier annuel type, tel qu'il ressort des dernières campagnes. Ce sont des **tendances observées**, pas des dates garanties : chaque administration publie ses propres avis, et seul l'avis officiel de la session en cours fait foi.",
  ],
  body: [
    { type: "h2", text: "Le calendrier annuel des grands concours" },
    {
      type: "p",
      text: "Ce tableau récapitule, mois par mois, la période habituelle d'annonce des principaux recruteurs publics, d'après les campagnes récentes :",
    },
    {
      type: "table",
      caption: "Périodes d'annonce habituelles (tendances des dernières campagnes)",
      headers: ["Recruteur", "Période d'annonce habituelle", "Épreuve / suite"],
      rows: [
        ["Gendarmerie Royale (élèves gendarmes)", "Fin mars", "Sélection début juillet"],
        ["Forces Armées Royales (officiers, sous-officiers)", "Printemps (clôture ~fin mai)", "Tests et oral en été, rentrée mi-août"],
        ["ISPITS — santé (admission bacheliers)", "Été (juin–juillet)", "Épreuves écrites en juillet"],
        ["Police DGSN", "Mi-septembre", "Épreuve écrite début décembre"],
        ["Forces Auxiliaires (élèves Mokhaznis)", "Automne", "Sélection en fin d'année"],
        ["Enseignement — cadres des AREF (CRMEF)", "Fin octobre – novembre", "Écrit fin novembre, oral début décembre"],
        ["Santé — infirmiers et techniciens", "Décembre – janvier", "Épreuves en janvier"],
      ],
    },
    {
      type: "warning",
      text: "Quelle que soit la période, la règle ne change jamais : la candidature est gratuite. Aucun concours officiel ne demande de paiement — voyez notre guide [anti-arnaque](/blog/concours-arnaques-comment-les-eviter).",
    },
    { type: "h2", text: "Le premier semestre : finances, intérieur, justice" },
    {
      type: "p",
      text: "De janvier à juin, les grands concours administratifs du Ministère de l'Économie et des Finances (douane, impôts, trésorerie via les concours transverses), du [Ministère de l'Intérieur](/concours/concours-ministere-interieur) et du [Ministère de la Justice](/concours/concours-ministere-justice) se succèdent. En 2026, par exemple, le concours des administrateurs des finances et celui des rédacteurs judiciaires se sont tenus au premier semestre. C'est aussi la saison de la [Gendarmerie Royale](/concours/concours-gendarmerie-royale), dont la campagne annuelle s'ouvre habituellement fin mars, et des [Forces Armées Royales](/concours/concours-forces-armees-royales), dont les inscriptions se clôturent en général vers la fin mai.",
    },
    { type: "h2", text: "L'été : la santé (ISPITS) et la préparation de l'automne" },
    {
      type: "p",
      text: "L'été est marqué par l'admission aux [instituts de santé (ISPITS)](/concours/concours-infirmiers-ispits), ouverte aux nouveaux bacheliers, avec des inscriptions et des épreuves écrites en juillet. C'est aussi la fenêtre idéale pour préparer les concours de l'automne : réviser le QCM de culture générale de la police, rassembler ses documents, et suivre les premières annonces.",
    },
    { type: "h2", text: "L'automne et l'hiver : police, enseignement, santé" },
    {
      type: "p",
      text: "La rentrée relance les plus gros recruteurs. Le concours de la [police DGSN](/concours/concours-police-dgsn) est habituellement annoncé vers la mi-septembre, pour une épreuve écrite début décembre. Le concours de l'[enseignement (cadres des AREF)](/concours/concours-enseignement) est lancé fin octobre ou en novembre, avec un écrit fin novembre. Enfin, le grand concours de recrutement des infirmiers et techniciens du [Ministère de la Santé](/concours/concours-ministere-sante) se tient plutôt en décembre-janvier. Les [Forces Auxiliaires](/concours/concours-forces-auxiliaires) recrutent aussi leurs élèves Mokhaznis à l'automne.",
    },
    { type: "h2", text: "Comment utiliser ce calendrier" },
    {
      type: "ul",
      items: [
        "**Anticipez les documents** : diplôme, CNIE, photos et attestations scannés en PDF (2 Mo maximum par pièce sur emploi-public.ma), prêts avant l'ouverture.",
        "**Ciblez selon votre profil** : repérez les concours accessibles avec votre diplôme grâce à notre guide [Quel concours avec votre diplôme ?](/blog/concours-par-niveau-diplome).",
        "**Vérifiez toujours l'avis officiel** : les périodes ci-dessus sont des tendances ; les dates exactes changent chaque année et figurent uniquement dans l'avis officiel de la session en cours.",
        "**Suivez les annonces en continu** sur notre [hub Concours](/concours) et sur le portail [emploi-public.ma](https://www.emploi-public.ma/fr/concours-liste).",
      ],
    },
  ],
  faq: [
    {
      question: "Quand a lieu le concours de police chaque année ?",
      answer:
        "Lors des dernières campagnes, le concours de la police DGSN a été annoncé vers la mi-septembre, avec une épreuve écrite un dimanche de début décembre. Les dates exactes changent chaque année et figurent dans l'avis officiel.",
    },
    {
      question: "À quelle période passe-t-on le concours de l'enseignement ?",
      answer:
        "Le concours des cadres des AREF (cycle de qualification CRMEF) est habituellement lancé fin octobre ou en novembre, avec une épreuve écrite fin novembre et un oral début décembre. La session suivante est annoncée par le ministère.",
    },
    {
      question: "Y a-t-il des concours en été ?",
      answer:
        "Oui. L'admission aux instituts de santé (ISPITS), ouverte aux bacheliers, se déroule en été, avec des inscriptions et des épreuves écrites en juillet. D'autres avis ponctuels peuvent aussi paraître pendant l'été sur emploi-public.ma.",
    },
    {
      question: "Ces dates sont-elles garanties ?",
      answer:
        "Non. Ce sont des tendances observées lors des campagnes récentes, utiles pour anticiper. Chaque administration fixe ses propres dates chaque année ; seul l'avis officiel de la session en cours fait foi.",
    },
    {
      question: "Où voir tous les concours ouverts en ce moment ?",
      answer:
        "Sur le portail officiel emploi-public.ma, qui centralise les avis de l'État, des collectivités territoriales et des établissements publics, et sur notre hub Concours qui renvoie vers chaque source officielle.",
    },
  ],
  sources: [
    {
      label: "Liste officielle des concours ouverts — emploi-public.ma",
      url: "https://www.emploi-public.ma/fr/concours-liste",
      official: true,
    },
    {
      label: "Calendrier des concours — emploi-public.ma",
      url: "https://www.emploi-public.ma/fr/concours/calendrier",
      official: true,
    },
    {
      label: "Communiqué officiel du concours des cadres enseignants (session 2025) — maroc.ma",
      url: "https://www.maroc.ma/fr/actualites/acces-au-cycle-de-qualification-des-cadres-enseignants-ouverture-des-candidatures-pour-la-session-de",
      official: true,
    },
  ],
};

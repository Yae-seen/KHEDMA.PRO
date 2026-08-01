import type { ArticleContent } from "@/lib/content-types";

/**
 * Canada anti-scam guide — targets the "free immigration to Canada" demand
 * (اريد الهجرة الى كندا مجانا ≈ 1.0K/mo in Morocco; "immigration canada gratuite"
 * in French). The most scam-exposed query in the market and nobody honest answers it.
 *
 * YMYL: every figure is quoted from IRCC with the date the official page carried
 * when checked (2026-08-01), never asserted as permanent. Fee amounts come from
 * ircc.canada.ca/english/information/fees/fees.asp (Date modified 2026-07-02).
 * Proof-of-funds figures come from the Express Entry proof-of-funds page, whose
 * table is labelled "Updated July 7, 2025" — that label is reproduced in the text
 * on purpose so a reader can tell how fresh the number is. Re-verify before each
 * content refresh; IRCC updates the funds table annually.
 */

export const article: ArticleContent = {
  slug: "immigration-canada-gratuite-verite",
  intro: [
    "« Immigration Canada gratuite. » Vous avez vu cette phrase sur Facebook, sur TikTok, ou dans un message WhatsApp. Elle est fausse. Le Canada fait payer des frais, demande un test de langue, et demande de prouver que vous avez de l'argent en banque avant d'arriver.",
    "Ce guide vous donne les chiffres officiels, l'adresse du vrai site, et la liste exacte de ce qu'un vrai agent canadien ne vous demandera jamais. Lisez-le avant de payer un dirham à qui que ce soit.",
  ],
  body: [
    {
      type: "p",
      text: "Commençons par la phrase que personne ne vous dit clairement : **l'immigration gratuite au Canada n'existe pas**. Ce n'est pas notre avis. C'est ce qu'écrit le gouvernement canadien lui-même sur son propre site, et nous mettons le lien plus bas pour que vous alliez le lire vous-même.",
    },
    {
      type: "p",
      text: "Maintenant la partie que les pages frauduleuses ne vous diront pas : le mot **gratuit** est l'appât. Celui qui vous promet le Canada pour rien va vous demander « des frais de dossier », un numéro WhatsApp, une copie de votre passeport. Vous paierez. Rien n'arrivera.",
    },
    {
      type: "warning",
      text: "Immigration, Réfugiés et Citoyenneté Canada (IRCC) l'écrit noir sur blanc : **« Personne ne peut vous garantir un emploi ou un visa pour le Canada. »** Seuls les agents d'immigration au Canada, dans les ambassades, hauts-commissariats et consulats canadiens peuvent décider de délivrer un visa. Toute personne qui vous garantit un résultat vous ment.",
    },
    {
      type: "h2",
      text: "Ce que ça coûte vraiment : les frais officiels",
    },
    {
      type: "p",
      text: "Voici les frais publiés par IRCC pour l'immigration économique (celle qui inclut Entrée express, la voie la plus connue). Ces montants figuraient sur la page officielle des frais portant la mention **« Date de modification : 2026-07-02 »** au moment de notre vérification.",
    },
    {
      type: "table",
      caption:
        "Frais officiels IRCC — immigration économique (Entrée express). Montants en dollars canadiens, relevés le 1er août 2026. Vérifiez le montant du jour sur la page officielle avant de payer.",
      headers: ["Ce que vous payez", "Montant (CAD)"],
      rows: [
        ["Votre demande, frais de traitement + droit de résidence permanente inclus", "1 590,00"],
        ["Votre demande, sans le droit de résidence permanente", "990,00"],
        ["Droit de résidence permanente (payé seul)", "600,00"],
        ["Ajouter votre époux ou conjoint (avec droit de résidence permanente)", "1 590,00"],
        ["Ajouter un enfant à charge", "270,00 par enfant"],
        ["Données biométriques — une personne", "85,00"],
        ["Données biométriques — famille de 2 personnes ou plus (maximum)", "170,00"],
      ],
    },
    {
      type: "p",
      text: "Ajoutez à cela ce qu'IRCC ne facture pas mais qui vous coûtera quand même : le test de langue (IELTS, CELPIP, TEF ou TCF selon la langue), l'évaluation de vos diplômes, et les frais de traduction. Ces prestataires fixent leurs propres tarifs — renseignez-vous directement auprès d'eux.",
    },
    {
      type: "h2",
      text: "L'argent qu'on vous demande d'avoir en banque",
    },
    {
      type: "p",
      text: "C'est le point qui surprend le plus, et celui que les arnaqueurs cachent. Pour deux programmes d'Entrée express — le **Programme des travailleurs qualifiés (fédéral)** et le **Programme des métiers spécialisés (fédéral)** — vous devez prouver que vous disposez déjà d'une certaine somme pour vous installer.",
    },
    {
      type: "table",
      caption:
        "Preuve de fonds exigée selon la taille de la famille. Le tableau officiel portait la mention « Updated July 7, 2025 » lors de notre vérification le 1er août 2026 — IRCC met ces montants à jour chaque année, revérifiez avant de constituer votre dossier.",
      headers: ["Nombre de personnes dans la famille", "Fonds exigés (CAD)"],
      rows: [
        ["1", "15 263"],
        ["2", "19 001"],
        ["3", "23 360"],
        ["4", "28 362"],
        ["5", "32 168"],
        ["6", "36 280"],
        ["7", "40 392"],
        ["Chaque personne supplémentaire au-delà de 7", "+ 4 112"],
      ],
    },
    {
      type: "warning",
      text: "Deux règles qui éliminent la plupart des combines : **vous ne pouvez pas emprunter cet argent à quelqu'un d'autre**, et **vous ne pouvez pas présenter la valeur d'un bien immobilier** comme preuve de fonds. IRCC demande des lettres officielles de vos banques, sur papier à en-tête, indiquant vos dettes, vos numéros de compte, le solde actuel et **le solde moyen des 6 derniers mois**. Un virement reçu la veille se voit.",
    },
    {
      type: "note",
      text: "Tout le monde n'est pas concerné par cette preuve de fonds. IRCC en dispense notamment les personnes invitées au titre de la **catégorie de l'expérience canadienne**, ainsi que celles qui ont une offre d'emploi valide et l'autorisation de travailler au Canada. Vérifiez votre cas précis sur la page officielle.",
    },
    {
      type: "h2",
      text: "Ce qu'un vrai agent canadien ne fera JAMAIS",
    },
    {
      type: "p",
      text: "IRCC publie la liste. Apprenez-la par cœur — elle vous évitera de perdre l'argent d'une année de travail. Un employé d'IRCC ne va **jamais** :",
    },
    {
      type: "ul",
      items: [
        "vous demander de déposer de l'argent sur un **compte bancaire personnel** ;",
        "vous demander de transférer de l'argent via un **service privé de transfert d'argent** ;",
        "vous **menacer** (par exemple de vous expulser à cause de frais impayés) ;",
        "vous proposer une **offre spéciale** ou un traitement accéléré ;",
        "vous contacter depuis une **adresse e-mail gratuite** — Gmail, Hotmail, Yahoo. Un courriel officiel vient d'une adresse **gc.ca** ou **canada.ca** ;",
        "engager la conversation avec vous **sur les réseaux sociaux** : IRCC précise ne jamais initier un échange par ce canal.",
      ],
    },
    {
      type: "p",
      text: "Trois autres points officiels, utiles à retenir. Les **frais de traitement sont identiques partout dans le monde** : en monnaie locale, ils correspondent au taux de change officiel, pour le même montant qu'en dollars canadiens. Les **formulaires et guides sont gratuits** sur le site d'IRCC — personne ne doit vous vendre un formulaire. Et les centres de réception des demandes de visa **ne facturent pas la prise de vos données biométriques** : le rendez-vous est déjà compris dans les 85 CAD.",
    },
    {
      type: "h2",
      text: "Les arnaques du moment : intermédiaires, faux sites, et vidéos générées par IA",
    },
    {
      type: "p",
      text: "Un « représentant » peut légalement vous aider, mais **vous restez responsable de tout ce qui figure dans votre dossier**, même si c'est lui qui l'a rempli. IRCC vous met en garde contre le représentant qui :",
    },
    {
      type: "ul",
      items: [
        "annonce un service **gratuit** puis vous réclame des frais ensuite ;",
        "promet une **approbation garantie** de votre demande ;",
        "prétend pouvoir **accélérer votre rendez-vous biométrique** contre paiement ;",
        "vous conseille de **mentir** sur votre demande — c'est illégal, et c'est vous qui en payez le prix.",
      ],
    },
    {
      type: "p",
      text: "Nouveauté que beaucoup ignorent encore : IRCC alerte sur l'usage de l'**intelligence artificielle** pour fabriquer de faux contenus qui semblent officiels — notamment des **vidéos de personnalités et de responsables** faisant la promotion d'une immigration rapide ou garantie, diffusées surtout sur les réseaux sociaux. Une vidéo n'est pas une preuve. Une voix familière n'est pas une preuve.",
    },
    {
      type: "note",
      text: "Un dernier signal, simple et efficace : IRCC conseille de se méfier **si le salaire d'un emploi proposé semble trop élevé pour être vrai**. C'est presque toujours le cas. Un salaire irréel est le premier indice d'une fausse offre.",
    },
    {
      type: "h2",
      text: "Ce que vous faites maintenant, dans l'ordre",
    },
    {
      type: "ol",
      items: [
        "**Ne payez personne aujourd'hui.** Aucune démarche urgente ne justifie un paiement dans l'heure. La pression, c'est l'arnaque.",
        "**Ouvrez vous-même l'adresse officielle** en la tapant dans la barre du navigateur : canada.ca. Ne passez jamais par un lien reçu par WhatsApp, SMS ou Facebook.",
        "**Vérifiez le cadenas** et le « https:// » dans la barre d'adresse, et que l'adresse affichée est bien celle que vous avez tapée.",
        "**Comparez les frais** que l'on vous annonce avec la liste officielle. Un montant différent = arnaque.",
        "**Faites le calcul honnêtement** : frais + preuve de fonds + test de langue + évaluation des diplômes. Si le compte n'y est pas encore, ce n'est pas un échec — c'est un plan sur deux ans.",
        "**Signalez** ce qui vous paraît frauduleux. IRCC a une page dédiée pour signaler les escroqueries.",
      ],
    },
    {
      type: "p",
      text: "Personne ne vous dira que la vraie route est plus lente que celle qu'on vous vend. Elle l'est. Elle est aussi ouverte à plus de monde qu'on ne le croit, et elle ne vous coûtera pas vos économies chez un intermédiaire. Pour le détail des étapes officielles, lisez [notre guide du site officiel et des vraies étapes](/blog/immigration-canada-site-officiel-etapes), et retrouvez l'ensemble de nos ressources sur [la page Canada](/canada).",
    },
  ],
  faq: [
    {
      question: "Existe-t-il vraiment une immigration gratuite au Canada ?",
      answer:
        "Non. Les frais de demande d'immigration économique s'élevaient à **1 590 CAD** (droit de résidence permanente inclus) sur la page officielle IRCC portant la date de modification du 2 juillet 2026, auxquels s'ajoutent 85 CAD de biométrie par personne, le test de langue et l'évaluation des diplômes. Toute annonce promettant la gratuité totale est une arnaque.",
    },
    {
      question: "Combien d'argent faut-il avoir en banque pour immigrer au Canada ?",
      answer:
        "Pour une personne seule, le tableau officiel d'IRCC indiquait **15 263 CAD**, avec la mention « Updated July 7, 2025 » lors de notre vérification. Le montant augmente avec la taille de la famille. Cette preuve de fonds concerne le Programme des travailleurs qualifiés et celui des métiers spécialisés ; d'autres candidats en sont dispensés. Revérifiez toujours le tableau officiel : IRCC le met à jour chaque année.",
    },
    {
      question: "Puis-je emprunter l'argent de la preuve de fonds ?",
      answer:
        "Non. IRCC précise que vous ne pouvez pas emprunter cette somme à une autre personne, ni présenter la valeur d'un bien immobilier. Les lettres bancaires exigées mentionnent le solde moyen des six derniers mois, ce qui rend un dépôt de dernière minute visible.",
    },
    {
      question: "Comment reconnaître un faux e-mail d'IRCC ?",
      answer:
        "Un courriel officiel provient d'une adresse **gc.ca** ou **canada.ca**, jamais d'une adresse Gmail, Hotmail ou Yahoo. IRCC ne demande jamais vos informations privées par e-mail, ne propose jamais d'offre spéciale, et n'engage jamais la conversation via les réseaux sociaux.",
    },
    {
      question: "Un intermédiaire peut-il garantir mon dossier ?",
      answer:
        "Non, et c'est un signal d'alarme. IRCC est explicite : personne ne peut garantir un emploi ou un visa, et seuls les agents d'immigration peuvent décider. Méfiez-vous d'un représentant qui promet une approbation garantie, propose d'accélérer la biométrie contre paiement, ou vous conseille de mentir.",
    },
  ],
  sources: [
    {
      label: "IRCC — Escroqueries en ligne et par téléphone (fraude à l'immigration)",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/internet-email-telephone.html",
      official: true,
    },
    {
      label: "IRCC — Protégez-vous contre la fraude à l'immigration",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud.html",
      official: true,
    },
    {
      label: "IRCC — Liste des frais de demande (immigration économique, biométrie)",
      url: "https://ircc.canada.ca/english/information/fees/fees.asp",
      official: true,
    },
    {
      label: "IRCC — Entrée express : preuve de fonds",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/proof-funds.html",
      official: true,
    },
    {
      label: "IRCC — Signaler une escroquerie ou une fraude",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/protect-fraud/report-fraud.html",
      official: true,
    },
  ],
};

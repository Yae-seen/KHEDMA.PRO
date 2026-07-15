import type { ArticleContent } from "@/lib/content-types";

export const article: ArticleContent = {
  slug: "concours-par-niveau-diplome",
  intro: [
    "« Quels concours puis-je passer avec mon diplôme ? » C'est la première question à se poser avant de candidater. Dans la fonction publique marocaine, chaque **grade** correspond à un **niveau de diplôme** et à une échelle de rémunération : viser un concours dont vous ne remplissez pas la condition de diplôme, c'est voir son dossier rejeté d'office.",
    "Voici la carte des grands concours (مباريات التوظيف) par niveau d'études, du niveau collège jusqu'au master. Les conditions des corps en uniforme sont celles annoncées lors des dernières sessions et sont fixées à nouveau dans chaque avis officiel.",
  ],
  body: [
    { type: "h2", text: "Grades, échelles et diplômes : comment ça marche" },
    {
      type: "p",
      text: "Les avis de concours sont rédigés par grade et par échelle. Plus le diplôme requis est élevé, plus l'échelle — et le salaire de départ — le sont aussi. Voici la correspondance générale, à vérifier concours par concours :",
    },
    {
      type: "table",
      caption: "Correspondance générale grade / échelle / diplôme",
      headers: ["Niveau de diplôme", "Grade type", "Échelle"],
      rows: [
        ["Niveau collège / lycée", "Adjoint, agent, militaire du rang", "6 et moins"],
        ["Baccalauréat", "Gardien de la paix, gendarme, gardien des douanes", "5–6"],
        ["Bac+2 (DUT, BTS, technicien spécialisé)", "Technicien 3ème grade", "9"],
        ["Licence (bac+3)", "Administrateur 3ème grade, enseignant AREF", "10"],
        ["Master / ingénieur (bac+5)", "Administrateur 2ème grade, ingénieur d'État, commissaire", "11"],
      ],
    },
    {
      type: "note",
      text: "La correspondance officielle diplôme-grade est fixée par décret. Le diplôme exact accepté (et parfois une moyenne minimale) est toujours précisé dans l'avis de chaque concours — c'est lui qui fait foi.",
    },
    { type: "h2", text: "Niveau collège ou lycée (sans le bac)" },
    {
      type: "p",
      text: "Même sans le baccalauréat, des voies existent, surtout dans les corps en uniforme. Les [Forces Armées Royales](/concours/concours-forces-armees-royales) recrutent des soldats (militaires du rang) avec un niveau de 3ème année du secondaire collégial. Les [Forces Auxiliaires](/concours/concours-forces-auxiliaires) recrutent des élèves Mokhaznis avec un niveau secondaire qualifiant ou un diplôme de formation professionnelle. Les administrations recrutent aussi des adjoints et agents à ces niveaux, au fil des avis.",
    },
    { type: "h2", text: "Avec le baccalauréat" },
    {
      type: "p",
      text: "Le bac ouvre plusieurs des concours les plus demandés. Côté sécurité : le gardien de la paix de la [police](/concours/concours-police-dgsn), l'élève gendarme de la [Gendarmerie Royale](/concours/concours-gendarmerie-royale), les sous-officiers des FAR, et le gardien des douanes de l'[ADII](/concours/concours-douane). Côté santé, le bac (généralement scientifique) donne accès au concours d'admission aux [instituts ISPITS](/concours/concours-infirmiers-ispits) pour devenir infirmier ou technicien de santé. Ces corps ajoutent souvent des conditions d'âge, de taille et d'aptitude physique.",
    },
    { type: "h2", text: "Avec un bac+2" },
    {
      type: "p",
      text: "Un diplôme bac+2 (DUT, BTS, technicien spécialisé) vise le grade de **technicien 3ème grade (échelle 9)**, très recruté dans presque toutes les administrations : santé, équipement, intérieur, finances. Selon les sessions récentes, le corps des inspecteurs de la [police](/concours/concours-police-dgsn) a aussi été ouvert à partir de deux semestres universitaires validés.",
    },
    { type: "h2", text: "Avec une licence (bac+3)" },
    {
      type: "p",
      text: "La licence donne accès au grade d'**administrateur 3ème grade (échelle 10)** et, surtout, au grand concours de l'[enseignement (cadres des AREF)](/concours/concours-enseignement), qui exige une licence (licence en éducation ou équivalent). Lors des dernières sessions, le corps des officiers de la police a également été ouvert aux titulaires d'une licence.",
    },
    { type: "h2", text: "Avec un master ou un diplôme d'ingénieur (bac+5)" },
    {
      type: "p",
      text: "Le niveau bac+5 ouvre les grades les plus élevés : **administrateur 2ème grade** et **ingénieur d'État (échelle 11)**, recrutés dans tous les ministères, ainsi que les postes à responsabilité comme commissaire de police, inspecteur des [douanes](/concours/concours-douane), administrateur des finances (voie par laquelle recrutent la [DGI](/concours/concours-impots-dgi) et la [TGR](/concours/concours-tresorerie-tgr)) ou commissaire judiciaire au [Ministère de la Justice](/concours/concours-ministere-justice).",
    },
    {
      type: "warning",
      text: "Quel que soit votre niveau, la candidature est gratuite. Aucun concours officiel ne demande de paiement : méfiez-vous des [arnaques](/blog/concours-arnaques-comment-les-eviter).",
    },
    { type: "h2", text: "Bien choisir avant de postuler" },
    {
      type: "ul",
      items: [
        "**Vérifiez le diplôme exact** exigé dans l'avis, pas seulement le niveau : une licence « en droit » n'est pas toujours interchangeable avec une licence « en économie ».",
        "**Regardez la spécialité** : beaucoup de concours répartissent les postes par filière (droit, gestion, informatique, génie civil…).",
        "**Notez les conditions d'âge et physiques**, déterminantes pour les corps en uniforme.",
        "**Planifiez avec le calendrier** : voyez à quelle période votre concours ouvre grâce à notre [calendrier des concours](/blog/calendrier-concours-maroc).",
      ],
    },
    {
      type: "p",
      text: "Si vous êtes encore en train de choisir vos études après le bac, notre site partenaire [massar-service.net](https://massar-service.net/orientation-universitaire) explique les filières et l'orientation universitaire — de quoi viser dès maintenant le diplôme qui ouvrira le concours que vous visez.",
    },
  ],
  faq: [
    {
      question: "Peut-on passer un concours public sans le bac ?",
      answer:
        "Oui, certaines voies existent, surtout dans les corps en uniforme : soldats des Forces Armées Royales (niveau collège), élèves Mokhaznis des Forces Auxiliaires (niveau lycée ou formation professionnelle), ainsi que des postes d'adjoints et d'agents. Les conditions figurent dans chaque avis.",
    },
    {
      question: "Quels concours puis-je passer avec seulement le bac ?",
      answer:
        "Avec le bac : gardien de la paix (police), élève gendarme, sous-officiers des FAR, gardien des douanes, et l'admission aux instituts de santé ISPITS. Ces corps ajoutent souvent des conditions d'âge, de taille et d'aptitude physique.",
    },
    {
      question: "À quel grade correspond une licence ?",
      answer:
        "La licence (bac+3) correspond au grade d'administrateur 3ème grade (échelle 10) et donne accès au concours de l'enseignement (cadres des AREF). Lors des dernières sessions, le corps des officiers de police a aussi été ouvert aux licenciés.",
    },
    {
      question: "Le master ouvre-t-il de meilleurs concours ?",
      answer:
        "Le master ou le diplôme d'ingénieur (bac+5) donne accès aux grades les plus élevés — administrateur 2ème grade et ingénieur d'État (échelle 11) — et aux postes à responsabilité comme commissaire de police, inspecteur des douanes ou administrateur des finances.",
    },
    {
      question: "Le diplôme suffit-il, ou faut-il une spécialité précise ?",
      answer:
        "La plupart des concours exigent une spécialité précise en plus du niveau (droit, gestion, informatique, génie civil…) et répartissent les postes par filière. Vérifiez toujours le diplôme et la spécialité exacts demandés dans l'avis officiel.",
    },
  ],
  sources: [
    {
      label: "Liste officielle des concours ouverts — emploi-public.ma",
      url: "https://www.emploi-public.ma/fr/concours-liste",
      official: true,
    },
    {
      label: "Textes juridiques des concours (diplômes et grades) — emploi-public.ma",
      url: "https://www.emploi-public.ma/fr/content/textes-concours",
      official: true,
    },
    {
      label: "Communiqué officiel du concours des cadres enseignants — maroc.ma",
      url: "https://www.maroc.ma/fr/actualites/acces-au-cycle-de-qualification-des-cadres-enseignants-ouverture-des-candidatures-pour-la-session-de",
      official: true,
    },
  ],
};

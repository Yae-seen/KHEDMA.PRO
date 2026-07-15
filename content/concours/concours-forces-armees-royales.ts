import type { ConcoursGuide } from "@/lib/content-types";

export const guide: ConcoursGuide = {
  slug: "concours-forces-armees-royales",
  intro: [
    "Chaque printemps, les Forces Armées Royales ouvrent leur recrutement — **مباراة القوات المسلحة الملكية** — pour trois profils très différents : les **élèves officiers** destinés aux académies militaires, les **élèves sous-officiers**, et les **soldats** (militaires du rang). Un seul point commun : l'inscription se fait **exclusivement en ligne** sur [recrutement.far.ma](https://recrutement.far.ma/), la plateforme officielle de recrutement des FAR. Pas de dossier déposé à la caserne, pas d'intermédiaire, pas de paiement.",
    "Pour la session 2026, les inscriptions des élèves officiers et des élèves sous-officiers se sont **clôturées le 29 mai 2026**, selon l'annonce relayée par Le Matin. Le recrutement des soldats suit son propre calendrier, distinct du cycle de printemps. Voici comment fonctionne chaque voie, les conditions exigées lors des dernières sessions, et comment préparer la prochaine campagne.",
  ],
  body: [
    { type: "h2", text: "Les trois voies de recrutement des FAR" },
    {
      type: "p",
      text: "Les Forces Armées Royales (qui relèvent de l'Administration de la Défense Nationale) recrutent par trois canaux distincts. Chacun a son niveau d'études, ses conditions d'âge et son calendrier — et ils ne se recoupent pas :",
    },
    {
      type: "table",
      caption: "Conditions relevées lors des dernières sessions, par voie de recrutement",
      headers: ["Voie", "Diplôme demandé", "Âge", "Calendrier habituel"],
      rows: [
        [
          "Élèves officiers (Terre, Mer, Air, ERSSM)",
          "Bac des 3 dernières sessions",
          "18–23 ans à la mi-août",
          "Printemps — clôture fin mai",
        ],
        [
          "Élèves sous-officiers",
          "Bac des 3 dernières sessions",
          "18–23 ans à la mi-août",
          "Printemps — même cycle",
        ],
        [
          "Soldats (militaires du rang)",
          "Niveau 9ème année (3ème année du collège)",
          "18–22 ans au 1er janvier",
          "Campagne propre — clôture fin octobre lors des dernières campagnes",
        ],
      ],
    },
    {
      type: "note",
      text: "Ces conditions sont celles annoncées lors des dernières sessions. Seul l'avis officiel publié sur [recrutement.far.ma](https://recrutement.far.ma/) pour chaque campagne fait foi — relisez-le avant de vous projeter : âge, taille, diplôme et pièces exigées y sont précisés session par session.",
    },
    { type: "h2", text: "recrutement.far.ma : le canal unique — et gratuit" },
    {
      type: "p",
      text: "Que vous visiez une académie d'officiers, une école de sous-officiers ou un engagement comme soldat, la porte d'entrée est la même : la plateforme [recrutement.far.ma](https://recrutement.far.ma/). Elle sert les quatre cycles — élèves officiers (Terre, Mer, Air), École Royale du Service de Santé Militaire (ERSSM), élèves sous-officiers et soldats. L'annonce des élèves officiers 2026 le disait noir sur blanc : s'inscrire « exclusivement en ligne via recrutement.far.ma ».",
    },
    {
      type: "p",
      text: "À la différence de la plupart des concours de la fonction publique, centralisés sur [emploi-public.ma](https://www.emploi-public.ma/fr/), les FAR gèrent leurs candidatures sur leur propre plateforme. Une annonce « recrutement FAR » qui vous renvoie vers un autre site d'inscription, un formulaire Google ou un numéro WhatsApp n'est pas une annonce officielle.",
    },
    {
      type: "warning",
      text: "**Aucun concours officiel ne demande de paiement.** L'inscription aux concours des FAR est gratuite, et personne — ni « intermédiaire », ni page Facebook, ni prétendu gradé — ne peut vous « garantir » une place contre de l'argent. Toute demande de frais de dossier, de recharge ou de virement est une [arnaque](/blog/concours-arnaques-comment-les-eviter).",
    },
    { type: "h2", text: "Élèves officiers : le concours des académies militaires" },
    {
      type: "p",
      text: "La voie élèves officiers alimente les académies et écoles des trois armes — Terre, Mer, Air — ainsi que l'École Royale du Service de Santé Militaire (ERSSM) pour les futurs médecins militaires. Pour la session 2026, les candidatures étaient ouvertes en ligne jusqu'au 29 mai 2026.",
    },
    {
      type: "p",
      text: "Les conditions annoncées lors des dernières sessions :",
    },
    {
      type: "ul",
      items: [
        "**Nationalité marocaine**, célibataire, sans antécédents judiciaires.",
        "**Âge** : entre 18 et 23 ans à la mi-août de l'année du concours (au 16 août 2026 pour la dernière session).",
        "**Diplôme** : baccalauréat de l'une des trois dernières sessions (2024, 2025 ou 2026 pour la session 2026).",
        "**Taille minimale** : 1,70 m pour les hommes, 1,60 m pour les femmes.",
      ],
    },
    {
      type: "p",
      text: "Point décisif que beaucoup de candidats découvrent trop tard : la **présélection se fait sur la moyenne du baccalauréat**. C'est votre moyenne qui décide si vous êtes convoqué aux étapes suivantes — d'où l'intérêt de candidater dès l'obtention du bac, quand votre dossier est le plus frais.",
    },
    { type: "h2", text: "Élèves sous-officiers : même cycle, trois choix de spécialités" },
    {
      type: "p",
      text: "Le concours des élèves sous-officiers (Forces Terrestres et autres composantes) suit le même cycle de printemps que celui des officiers : pour la session 2026, la clôture des inscriptions était fixée au même 29 mai 2026, sur la même plateforme. Les conditions rapportées sont proches : 18 à 23 ans au 16 août 2026, bac de 2024, 2025 ou 2026.",
    },
    {
      type: "p",
      text: "Particularité de cette voie : au moment de l'inscription, le candidat classe **trois spécialités par ordre de préférence**. Réfléchissez à ce classement avant d'ouvrir le formulaire — il oriente votre affectation en cas d'admission.",
    },
    { type: "h2", text: "Soldats (militaires du rang) : un calendrier à part" },
    {
      type: "p",
      text: "Le recrutement des soldats de 2ème classe ne suit pas le cycle de printemps : c'est une campagne annuelle distincte, elle aussi gérée sur recrutement.far.ma. Lors des dernières campagnes, les conditions annoncées étaient les suivantes :",
    },
    {
      type: "ul",
      items: [
        "Hommes de **18 à 22 ans** au 1er janvier de l'année d'incorporation.",
        "Niveau scolaire minimum : **3ème année du secondaire collégial** (9ème année) — le bac n'est pas exigé.",
        "Taille minimale : **1,70 m**.",
        "Célibataire, **CNIE obligatoire**.",
      ],
    },
    {
      type: "p",
      text: "Lors des dernières campagnes, la clôture des inscriptions intervenait **fin octobre**. C'est la voie d'engagement la plus accessible des FAR : elle s'adresse aux jeunes sans bac, là où officiers et sous-officiers passent par la case baccalauréat.",
    },
    {
      type: "note",
      text: "Les dates exactes de la campagne soldats en cours n'ont pas pu être confirmées de source officielle à la date de mise à jour de ce guide, et des dates contradictoires circulent en ligne. Ne vous fiez pas aux publications des réseaux sociaux : vérifiez l'avis directement sur [recrutement.far.ma](https://recrutement.far.ma/).",
    },
    { type: "h2", text: "De la présélection à la rentrée : les étapes de la sélection" },
    {
      type: "p",
      text: "Pour les cycles officiers et sous-officiers, la sélection observée lors des dernières sessions suit un entonnoir en quatre temps :",
    },
    {
      type: "ol",
      items: [
        "**Présélection sur dossier** : classement des candidats sur la moyenne du baccalauréat.",
        "**Convocation aux tests** : examens médicaux, épreuves physiques et tests psychotechniques.",
        "**Entretien oral** devant la commission.",
        "**Admission et incorporation** : les admis rejoignent leur école — rentrée à la mi-août lors des dernières sessions.",
      ],
    },
    {
      type: "p",
      text: "Pour les soldats, les modalités de sélection sont précisées dans chaque avis officiel. Dans tous les cas, préparez la condition physique bien en amont : les épreuves sportives éliminent chaque année des candidats dont le dossier était pourtant excellent.",
    },
    { type: "h2", text: "Vous avez raté la session 2026 ? Préparez la suivante" },
    {
      type: "p",
      text: "Le cycle officiers/sous-officiers est annuel : l'annonce tombe au printemps, avec une clôture fin mai lors des dernières sessions. Surveillez recrutement.far.ma à partir du printemps 2027 — et vérifiez que vous serez toujours dans la fourchette d'âge, car elle est stricte. En attendant, notre [calendrier des concours au Maroc](/blog/calendrier-concours-maroc) récapitule qui recrute à quelle période.",
    },
    {
      type: "p",
      text: "Si votre profil est « bac + bonne condition physique », comparez aussi avec le [concours de la Gendarmerie Royale](/concours/concours-gendarmerie-royale), dont le cycle se joue en mars-avril, et gardez un œil sur les autres concours de sécurité recensés dans notre [hub Concours](/concours).",
    },
  ],
  howTo: {
    name: "Comment s'inscrire au concours des Forces Armées Royales",
    description:
      "La procédure d'inscription en ligne aux concours FAR (élèves officiers, élèves sous-officiers, soldats), telle qu'elle fonctionne lors des campagnes annuelles sur recrutement.far.ma.",
    steps: [
      {
        name: "Surveillez l'annonce annuelle",
        text: "Guettez l'avis officiel sur recrutement.far.ma : au printemps pour les élèves officiers et sous-officiers (clôture fin mai lors des dernières sessions), et sur un calendrier propre pour les soldats.",
      },
      {
        name: "Vérifiez les conditions de l'avis",
        text: "Contrôlez point par point l'âge, le diplôme, la taille et la situation familiale exigés — chaque avis officiel précise les conditions exactes de sa session, qui peuvent évoluer d'une année à l'autre.",
      },
      {
        name: "Remplissez le formulaire en ligne",
        text: "L'inscription se fait exclusivement en ligne sur recrutement.far.ma, avant la date limite de l'avis. Elle est gratuite : aucun paiement n'est jamais demandé.",
      },
      {
        name: "Classez vos spécialités (sous-officiers)",
        text: "Pour le cycle sous-officiers, classez trois spécialités par ordre de préférence au moment de l'inscription — ce choix oriente l'affectation en cas d'admission.",
      },
      {
        name: "Attendez la présélection",
        text: "Pour les cycles officiers et sous-officiers, la présélection se fait sur la moyenne du baccalauréat lors des dernières sessions. Les candidats retenus sont convoqués aux étapes suivantes.",
      },
      {
        name: "Passez les tests puis l'oral",
        text: "Examens médicaux, épreuves physiques, tests psychotechniques puis entretien oral. Les admis rejoignent leur école ou centre de formation — rentrée à la mi-août lors des dernières sessions.",
      },
    ],
  },
  faq: [
    {
      question: "Quand ouvre la prochaine session du concours FAR ?",
      answer:
        "Aucune date officielle n'est annoncée à ce jour. Le cycle élèves officiers et sous-officiers est annuel : annonce au printemps, clôture des inscriptions fin mai lors des dernières sessions (le 29 mai pour 2026). Le recrutement des soldats suit son propre calendrier, avec une clôture fin octobre lors des dernières campagnes. La seule référence fiable est l'avis publié sur recrutement.far.ma.",
    },
    {
      question: "L'inscription au concours des FAR est-elle payante ?",
      answer:
        "Non. L'inscription est gratuite et se fait exclusivement en ligne sur recrutement.far.ma. Toute personne qui vous demande de l'argent — « frais de dossier », recharge, virement, promesse de piston — est un escroc, sans exception.",
    },
    {
      question: "Quelle taille minimale faut-il pour intégrer les FAR ?",
      answer:
        "Lors des dernières sessions : 1,70 m pour les hommes et 1,60 m pour les femmes sur les cycles officiers et sous-officiers, et 1,70 m pour les soldats (recrutement masculin lors des dernières campagnes). La taille exigée est reprécisée dans chaque avis officiel.",
    },
    {
      question: "Peut-on candidater avec un bac obtenu il y a plusieurs années ?",
      answer:
        "Non, pas au-delà de trois sessions : lors des dernières campagnes officiers et sous-officiers, seuls les bacheliers des trois dernières sessions étaient admis à candidater (2024, 2025 ou 2026 pour la session 2026).",
    },
    {
      question: "Faut-il être célibataire pour se présenter ?",
      answer:
        "Oui. Le célibat figurait parmi les conditions annoncées lors des dernières sessions, pour les trois voies (officiers, sous-officiers, soldats). Chaque avis officiel confirme cette condition pour sa session.",
    },
    {
      question: "Peut-on s'engager dans les FAR sans le bac ?",
      answer:
        "Oui, par la voie des soldats (militaires du rang) : lors des dernières campagnes, le niveau minimum demandé était la 3ème année du secondaire collégial (9ème année), pour les hommes de 18 à 22 ans. Les voies officiers et sous-officiers exigent en revanche le baccalauréat.",
    },
  ],
  sources: [
    {
      label: "Plateforme de recrutement des Forces Armées Royales — recrutement.far.ma",
      url: "https://recrutement.far.ma/",
      official: false,
    },
    {
      label: "Le Matin — Concours FAR 2026 : admission des élèves officiers",
      url: "https://lematin.ma/enseignement/concours-far-2026-admission-eleves-officiers/338414",
      official: false,
    },
    {
      label: "Orientation Chabab — recrutement FAR via recrutement.far.ma",
      url: "https://orientation-chabab.com/emploi-public/concours-recrutement-far-ma",
      official: false,
    },
    {
      label: "Bernejobs — conditions des dernières campagnes soldats (militaires du rang)",
      url: "https://www.bernejobs.com/2025/10/2025-2026.html",
      official: false,
    },
    {
      label: "Portail National de l'Emploi Public — emploi-public.ma",
      url: "https://www.emploi-public.ma/fr/",
      official: true,
    },
  ],
};

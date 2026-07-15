import type { ArticleContent } from "@/lib/content-types";

export const article: ArticleContent = {
  slug: "concours-arnaques-comment-les-eviter",
  intro: [
    "Chaque saison de concours (موسم المباريات) apporte sa vague d'arnaques : fausses annonces, « frais de dossier » à payer, faux recruteurs sur WhatsApp et Facebook, sites qui imitent les portails officiels. La règle qui vous protège de presque toutes est simple et sans exception : **aucun concours officiel de la fonction publique marocaine ne demande de paiement**.",
    "Voici comment reconnaître une annonce authentique, repérer les signaux d'alerte, et vérifier en trois étapes n'importe quelle offre avant d'y consacrer une minute ou un dirham.",
  ],
  body: [
    { type: "h2", text: "La règle d'or : la candidature est gratuite" },
    {
      type: "p",
      text: "Postuler à un concours public au Maroc ne coûte rien. Ni frais d'inscription, ni frais de dossier, ni « caution », ni recharge téléphonique, ni virement pour « réserver une place ». Le portail officiel [emploi-public.ma](https://www.emploi-public.ma/fr/) est gratuit, et les plateformes de dépôt des grandes administrations (police, gendarmerie, finances, justice, santé) le sont aussi.",
    },
    {
      type: "warning",
      text: "Dès qu'une annonce, une personne ou une page vous demande de l'argent pour un concours public — sous n'importe quel prétexte — c'est une arnaque. Il n'existe aucune exception. Arrêtez-vous là.",
    },
    {
      type: "p",
      text: "Autre garde-fou officiel : le portail emploi-public.ma précise lui-même qu'« à aucun moment vous ne serez contacté par Emploi-public.ma ». C'est l'administration qui recrute qui gère les convocations, via des listes publiées. Personne ne vous appellera « de la part du portail » pour vous réclamer un paiement ou un complément de dossier par téléphone.",
    },
    { type: "h2", text: "Les signaux d'alerte à connaître" },
    {
      type: "ul",
      items: [
        "**Une demande de paiement**, quelle que soit la somme ou le motif (« frais de traitement », « dossier complet à acheter », « accélérer votre inscription »).",
        "**Un recruteur qui vous contacte en privé** sur WhatsApp, Messenger ou par SMS pour vous « garantir » un poste ou vous demander vos documents. Les administrations ne recrutent pas en messages privés.",
        "**Une « inscription garantie » ou un « taux de réussite »** : personne ne peut garantir l'admission à un concours, qui se joue au mérite sur épreuves.",
        "**Un site qui imite un portail officiel** : logo détourné, nom approchant, mais un domaine qui ne se termine pas par **.gov.ma** (ni emploi-public.ma).",
        "**Une demande de mot de passe** ou de vos identifiants d'un autre service. Aucun concours n'a besoin de vos mots de passe.",
        "**Une pression sur le temps** (« plus que 2 places », « offre expire ce soir ») destinée à vous faire payer avant de réfléchir.",
      ],
    },
    { type: "h2", text: "Le piège des noms : « alwadifa » n'est pas officiel" },
    {
      type: "p",
      text: "Beaucoup de sites privés portent des noms rassurants construits autour du mot **alwadifa** (الوظيفة, « l'emploi ») : alwadifa-maroc.com, jadid-alwadifa.com, alwadifa-mag.com, et bien d'autres. Ce sont des **agrégateurs privés** qui recopient les annonces publiées sur emploi-public.ma. Aucun domaine gouvernemental marocain n'utilise le nom « alwadifa ».",
    },
    {
      type: "p",
      text: "Ces sites ne sont pas tous malveillants — certains sont de simples relais d'information. Mais ils ne font pas autorité : une annonce ne devient fiable que si vous la retrouvez sur la source officielle. Ne déposez jamais un dossier ni un paiement sur un site privé en croyant qu'il s'agit du portail de l'État.",
    },
    { type: "h2", text: "Comment vérifier une annonce en 3 étapes" },
    {
      type: "ol",
      items: [
        "**Remontez à la source officielle.** Cherchez la même annonce sur [emploi-public.ma](https://www.emploi-public.ma/fr/concours-liste) ou sur le site de l'administration qui recrute (un domaine en **.gov.ma**). Si elle n'y figure nulle part, méfiez-vous.",
        "**Vérifiez le domaine.** L'inscription se fait sur un portail officiel : emploi-public.ma, ou la plateforme dédiée de l'administration (par exemple e-recrutement.finances.gov.ma pour les Finances, drh.justice.gov.ma pour la Justice, concours.dgsn.gov.ma pour la police). Un domaine différent qui réclame vos données doit vous alerter.",
        "**Confirmez qu'aucun paiement n'est demandé.** Sur un canal officiel, vous ne paierez jamais. Toute étape payante trahit une arnaque, même si le reste paraît crédible.",
      ],
    },
    {
      type: "note",
      text: "Pour la marche à suivre complète — de la création du compte candidat au dépôt du dossier — lisez notre guide [Comment postuler à un concours de la fonction publique](/blog/comment-postuler-concours-fonction-publique).",
    },
    { type: "h2", text: "Que faire si vous avez été ciblé" },
    {
      type: "p",
      text: "Si on vous a demandé de payer ou si vous avez transmis des documents à un faux recruteur : cessez tout contact, ne payez rien de plus, et ne communiquez aucune donnée bancaire. Conservez les captures d'écran (messages, numéros, liens). Vous pouvez signaler une escroquerie en ligne aux autorités marocaines et prévenir votre entourage, car ces arnaques circulent souvent en réseau à l'approche des grands concours.",
    },
    {
      type: "p",
      text: "Enfin, gardez le réflexe qui vous protège toujours : revenez à notre [hub Concours](/concours), où chaque page renvoie au canal officiel de l'administration concernée. C'est votre point de départ sûr.",
    },
  ],
  faq: [
    {
      question: "Un concours public peut-il vraiment être totalement gratuit ?",
      answer:
        "Oui. La candidature aux concours de la fonction publique marocaine est gratuite à toutes les étapes. Aucune administration ne facture l'inscription ni le dépôt du dossier. Toute demande d'argent est une arnaque.",
    },
    {
      question: "Les sites « alwadifa » sont-ils officiels ?",
      answer:
        "Non. Aucun domaine gouvernemental n'utilise le nom « alwadifa ». Les sites alwadifa-maroc.com, jadid-alwadifa.com et similaires sont des agrégateurs privés qui recopient les annonces d'emploi-public.ma. Vérifiez toujours l'annonce sur la source officielle.",
    },
    {
      question: "Un « recruteur » m'a contacté sur WhatsApp, est-ce normal ?",
      answer:
        "Non. Les administrations publiques ne recrutent pas par messages privés et ne « garantissent » jamais un poste. Un contact privé qui promet un emploi ou réclame vos documents ou de l'argent est frauduleux.",
    },
    {
      question: "Comment reconnaître un site officiel ?",
      answer:
        "Les portails officiels se terminent par .gov.ma (par exemple concours.dgsn.gov.ma, drh.justice.gov.ma) ou sont le portail national emploi-public.ma. Un site au nom approchant mais au domaine différent, surtout s'il demande un paiement, doit vous alerter.",
    },
    {
      question: "On me demande mon mot de passe pour « finaliser » l'inscription. Que faire ?",
      answer:
        "Ne le donnez jamais. Aucun concours n'a besoin de vos mots de passe ni des identifiants d'un autre service. Une telle demande est une tentative de fraude ; interrompez la démarche immédiatement.",
    },
  ],
  sources: [
    {
      label: "Portail National de l'Emploi Public — emploi-public.ma",
      url: "https://www.emploi-public.ma/fr/",
      official: true,
    },
    {
      label: "FAQ officielle du portail emploi-public.ma",
      url: "https://www.emploi-public.ma/fr/faq-liste",
      official: true,
    },
    {
      label: "Liste officielle des concours ouverts — emploi-public.ma",
      url: "https://www.emploi-public.ma/fr/concours-liste",
      official: true,
    },
  ],
};

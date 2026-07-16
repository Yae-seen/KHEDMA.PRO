import type { ArticleContent } from "@/lib/content-types";

/**
 * emploi-public.ma portal guide — drafted + adversarially fact-checked
 * (research -> draft -> verify workflow, 2026-07-16). Portal how-to (account,
 * search concours, apply); the conceptual "how to land a public job" lives in
 * trouver-emploi-public-maroc.ts. YMYL: cautious where the .ma portal is
 * geo-restricted and specifics could not be confirmed live.
 */

export const article: ArticleContent = {
  "slug": "emploi-public-ma-portail",
  "intro": [
    "Si vous visez un poste dans la fonction publique marocaine, la porte d'entrée en ligne est **emploi-public.ma**, la بوابة التشغيل العمومي (Portail de l'emploi public). C'est là que ministères, collectivités territoriales et établissements publics publient leurs **concours de la fonction publique**, et c'est là que vous déposez votre dossier. Sans compte candidat sur ce portail, vous ne pouvez pas déposer de candidature en ligne.",
    "Ce guide est volontairement pratique : il explique la mécanique du portail — comment créer votre espace candidat, chercher les concours ouverts, et déposer une candidature dans les règles (format PDF, taille des fichiers, heure limite). Pour la stratégie de fond — quels concours viser, comment se préparer, comment décrocher un poste — voyez plutôt notre guide [Emploi public au Maroc](/blog/trouver-emploi-public-maroc).",
    "Un dernier mot avant de commencer : la création d'un compte et le dépôt d'une candidature sur emploi-public.ma ne comportent **aucune étape de paiement**. Aucun concours public légitime ne vous fera payer pour vous inscrire ou « réserver » une place. Gardez ce réflexe en tête tout au long de la lecture."
  ],
  "body": [
    {
      "type": "h2",
      "text": "Qu'est-ce que emploi-public.ma, et qui le gère ?"
    },
    {
      "type": "p",
      "text": "Le **Portail de l'emploi public** est le portail national officiel du recrutement dans le secteur public marocain. Il est géré par le **Ministère de la Transition numérique et de la Réforme de l'administration** (le domaine officiel du ministère est mmsp.gov.ma). Son rôle est de centraliser, en un seul endroit, les avis de **concours fonction publique**, les emplois supérieurs, les postes de responsabilité et le recrutement d'experts."
    },
    {
      "type": "p",
      "text": "Point essentiel à comprendre : le portail **publie et transmet** les candidatures, mais il **ne recrute pas lui-même**. Chaque concours est organisé par une administration précise (un ministère, une collectivité territoriale ou un établissement public), et c'est cette administration qui reçoit votre dossier et prend les décisions. Selon la FAQ du portail, « l'administration reçoit directement votre dossier de candidature » et le portail « n'interviendra pas dans le processus de recrutement ». Conséquence pratique : les convocations, corrections, décisions du jury et résultats viennent de l'administration organisatrice — pas du portail."
    },
    {
      "type": "table",
      "caption": "Trois familles d'employeurs publient sur le portail",
      "headers": [
        "Type d'employeur",
        "Exemples"
      ],
      "rows": [
        [
          "Services de l'État",
          "Ministères (Santé, Intérieur, Éducation…)"
        ],
        [
          "Collectivités territoriales",
          "Régions, provinces, communes"
        ],
        [
          "Établissements et entreprises publics",
          "Établissements publics divers"
        ]
      ]
    },
    {
      "type": "note",
      "text": "Certaines grandes entreprises publiques et certains ministères gèrent aussi des portails dédiés (par exemple **econcours.enssup.gov.ma** pour les concours de l'enseignement supérieur). emploi-public.ma est le canal central, mais vérifiez toujours si l'employeur visé recrute ailleurs."
    },
    {
      "type": "h2",
      "text": "Créer un compte, chercher, postuler : les étapes"
    },
    {
      "type": "p",
      "text": "Le parcours est linéaire : on crée un espace candidat, on complète son profil, puis on postule concours par concours. Voici le déroulé."
    },
    {
      "type": "ol",
      "items": [
        "**Créer votre compte** (« Espace Candidat »). Le formulaire d'inscription demande notamment vos nom et prénom, votre **numéro de CIN**, votre sexe, un numéro de téléphone, une adresse e-mail, un mot de passe (à confirmer), un code de sécurité (captcha) et l'acceptation des conditions d'utilisation.",
        "**Activer le compte.** Un e-mail d'activation vous est envoyé pour confirmer votre inscription. Pensez à vérifier le dossier « spam » si vous ne le voyez pas arriver, et à activer votre compte avant de pouvoir postuler.",
        "**Compléter votre profil.** Renseignez vos informations personnelles, vos **diplômes** et votre CV avec votre expérience la plus récente. Ce sont ces données, avec les pièces jointes, qui seront transmises à l'administration lors d'une candidature.",
        "**Trouver le concours.** Parcourez la liste des concours ouverts, repérez celui qui correspond à votre grade et à votre diplôme, et lisez l'avis officiel avant de vous lancer.",
        "**Postuler en ligne** depuis votre espace candidat. Les candidatures spontanées ne sont plus acceptées : on ne postule qu'à une offre publiée. Activez les **alertes e-mail** pour être prévenu des offres correspondant à votre profil.",
        "**Suivre le statut** sous « Mes Candidatures », où chaque candidature est archivée."
      ]
    },
    {
      "type": "note",
      "text": "Une candidature déposée **ne peut pas être supprimée**. En cas d'erreur, vous pouvez toutefois vous **désister** (retirer votre candidature). Préparez donc bien votre dossier avant d'envoyer."
    },
    {
      "type": "h2",
      "text": "Format des fichiers et heure limite : les détails qui font recaler"
    },
    {
      "type": "p",
      "text": "Deux règles techniques éliminent chaque année des candidats qui ne les connaissaient pas."
    },
    {
      "type": "ul",
      "items": [
        "**Format PDF uniquement**, et chaque document ne doit pas dépasser environ **2 Mo** selon la FAQ du portail. Scannez proprement et compressez vos fichiers avant de les téléverser.",
        "**Heure limite de dépôt.** Chaque annonce affiche une « Limite de dépôt » avec une **date et une heure** — l'heure de clôture est généralement fixée à **16h30**. Passé ce délai, le dépôt se ferme."
      ]
    },
    {
      "type": "p",
      "text": "Chaque annonce précise aussi le grade ou corps, l'administration organisatrice, le nombre de postes, la date de l'épreuve et l'étape de la procédure. Besoin d'aide pour le dossier ? Nos guides [Concours au Maroc](/concours), [Emploi](/emploi) et [CV](/cv) couvrent la préparation."
    },
    {
      "type": "h2",
      "text": "Convocations et résultats : où les trouver"
    },
    {
      "type": "p",
      "text": "Les convocations aux épreuves et les listes de résultats (candidats retenus, liste d'attente) sont **publiées sur la page du concours** par l'administration organisatrice, généralement en PDF. Comme c'est elle qui pilote ces étapes, le calendrier de publication varie d'un concours à l'autre : surveillez la page du concours concerné. En cas de silence prolongé, adressez-vous directement à l'administration organisatrice — pas au portail, qui n'intervient pas dans le processus de recrutement."
    },
    {
      "type": "warning",
      "text": "**Attention aux arnaques.** L'inscription et le dépôt sur emploi-public.ma ne comportent aucun paiement. Aucun concours public légitime ne demande de payer pour s'inscrire, « réserver » un poste, obtenir les questions à l'avance ou « garantir » la réussite. Fuyez toute demande d'argent, tout paiement par transfert personnel ou mobile-money, et tout site imitant le portail officiel. Pour reconnaître ces pièges, lisez [Concours : arnaques à éviter](/blog/concours-arnaques-comment-les-eviter)."
    },
    {
      "type": "h2",
      "text": "emploi-public.ma ou l'ANAPEC ?"
    },
    {
      "type": "p",
      "text": "On confond souvent les deux. La distinction est simple : le **secteur public** passe par emploi-public.ma, le **secteur privé** par l'ANAPEC."
    },
    {
      "type": "table",
      "caption": "Deux portails, deux mondes",
      "headers": [
        "",
        "emploi-public.ma",
        "ANAPEC"
      ],
      "rows": [
        [
          "Secteur",
          "Fonction publique (public)",
          "Marché de l'emploi privé"
        ],
        [
          "Mode d'accès",
          "Concours (مباريات)",
          "Intermédiation / mise en relation"
        ],
        [
          "Employeurs",
          "État, collectivités, établissements publics",
          "Entreprises privées"
        ]
      ]
    },
    {
      "type": "p",
      "text": "Vous cherchez un emploi dans le privé ? Voyez notre guide [ANAPEC : inscription espace candidat](/blog/anapec-inscription-espace-candidat)."
    }
  ],
  "faq": [
    {
      "question": "L'inscription sur emploi-public.ma est-elle payante ?",
      "answer": "Non. La création d'un compte candidat, la mise à jour du profil et le dépôt d'une candidature ne comportent aucune étape de paiement. Aucun concours public légitime ne réclame d'argent pour s'inscrire ou « réserver » une place — toute demande de paiement est un signal d'arnaque."
    },
    {
      "question": "Faut-il un compte pour postuler à un concours ?",
      "answer": "Oui. Le portail est le point d'entrée pour postuler en ligne : sans espace candidat activé, vous ne pouvez pas déposer de candidature. On crée le compte, on l'active par e-mail, on complète son profil (diplômes, CV), puis on postule à une offre publiée."
    },
    {
      "question": "Quel format et quelle taille pour mes documents ?",
      "answer": "Les pièces doivent être au format PDF uniquement, et chaque document ne doit pas dépasser environ 2 Mo selon la FAQ du portail. Scannez proprement et compressez vos fichiers avant de les téléverser."
    },
    {
      "question": "À quelle heure ferme le dépôt d'une candidature ?",
      "answer": "Chaque annonce affiche une « Limite de dépôt » avec une date et une heure ; l'heure de clôture est généralement 16h30. Passé ce délai, il n'est plus possible de déposer. Ne vous y prenez pas à la dernière minute, surtout en période de forte affluence."
    },
    {
      "question": "Puis-je annuler une candidature envoyée par erreur ?",
      "answer": "Une candidature déposée ne peut pas être supprimée, mais vous pouvez vous « désister » (la retirer) si vous avez fait une erreur. Vérifiez donc bien votre dossier avant de l'envoyer."
    },
    {
      "question": "Où voir les convocations et les résultats ?",
      "answer": "Ils sont publiés sur la page du concours par l'administration qui organise le recrutement, avec un calendrier propre à chaque concours. Surveillez cette page ; en cas de silence prolongé, adressez-vous directement à l'administration organisatrice, pas au portail."
    },
    {
      "question": "Quelle différence entre emploi-public.ma et l'ANAPEC ?",
      "answer": "emploi-public.ma concerne la fonction publique et fonctionne par concours (État, collectivités, établissements publics). L'ANAPEC fait de l'intermédiation pour le marché de l'emploi privé, en mettant en relation demandeurs d'emploi et entreprises privées."
    }
  ],
  "sources": [
    {
      "label": "emploi-public.ma — FAQ (dépôt, formats, désistement)",
      "url": "https://www.emploi-public.ma/fr/faq-liste",
      "official": true
    },
    {
      "label": "emploi-public.ma — Liste des concours",
      "url": "https://www.emploi-public.ma/fr/concours-liste",
      "official": true
    },
    {
      "label": "emploi-public.ma — Page d'accueil",
      "url": "https://www.emploi-public.ma/fr/",
      "official": true
    },
    {
      "label": "MTNRA (mmsp.gov.ma) — Portail de l'emploi public",
      "url": "https://www.mmsp.gov.ma/fr/nos-services/portail-de-l%E2%80%99emploi-public",
      "official": true
    },
    {
      "label": "econcours.enssup.gov.ma — concours enseignement supérieur",
      "url": "https://econcours.enssup.gov.ma/",
      "official": true
    }
  ]
};

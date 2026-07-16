/**
 * Per-city job-market data for the /emploi/villes/[ville] cluster. Each city was
 * individually web-researched (2026-07-16) for DISTINCT, real content — sectors,
 * named employers/zones, local channels — to avoid thin/templated pages. The
 * anti-scam notice is rendered ONCE by the page template (not repeated per city).
 */

export interface CitySector { label: string; note: string; }
export interface CityFaq { question: string; answer: string; }
export interface CityEmploi {
  slug: string;
  name: string;
  nameAr: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sectors: CitySector[];
  employers: string[];
  whereToLook: string;
  faq: CityFaq[];
}

export const CITY_EMPLOI: CityEmploi[] = [
  {
    "slug": "casablanca",
    "name": "Casablanca",
    "nameAr": "الدار البيضاء",
    "metaTitle": "Emploi Casablanca : secteurs, employeurs et zones qui recrutent",
    "metaDescription": "Guide emploi Casablanca : finance, offshoring, industrie et port. Zones qui recrutent (Casanearshore, Aïn Sebaâ, CFC), employeurs réels et où postuler sans payer.",
    "intro": "Casablanca est la capitale économique du Maroc : elle concentre le siège des grandes banques, la Bourse, le premier port du pays et la plus grande zone industrielle nationale. C'est le marché de l'emploi le plus profond du Maroc, tiré à la fois par les services financiers, l'offshoring/centres d'appels et l'industrie manufacturière. La densité d'entreprises y crée un flux d'offres continu, mais aussi une concurrence forte sur les postes qualifiés.",
    "sectors": [
      {
        "label": "Finance, banque et assurance",
        "note": "Casablanca abrite le siège des principales banques (Attijariwafa, Bank of Africa, Banque Populaire), la Bourse de Casablanca et le hub Casablanca Finance City."
      },
      {
        "label": "Offshoring, BPO et centres d'appels",
        "note": "Le parc Casanearshore concentre plus de 100 entreprises (relation client, back-office bancaire, IT) et recrute massivement en francophone."
      },
      {
        "label": "Industrie et manufacture",
        "note": "Les zones d'Aïn Sebaâ–Sidi Bernoussi (agroalimentaire, chimie-parachimie, textile, emballage) totalisent des dizaines de milliers d'emplois."
      },
      {
        "label": "Commerce, distribution et services",
        "note": "Grandes enseignes et sièges nationaux (Marjane, Label'Vie, opérateurs télécom) recrutent en vente, logistique et support."
      },
      {
        "label": "Logistique et activités portuaires",
        "note": "Le port de Casablanca, premier du pays, alimente les métiers du transport, du transit et de la manutention."
      }
    ],
    "employers": [
      "Casanearshore Park (parc offshoring, Sidi Maârouf)",
      "Casablanca Finance City (CFC)",
      "Zone industrielle Aïn Sebaâ – Sidi Bernoussi",
      "Attijariwafa Bank (siège)",
      "Bank of Africa / BMCE (siège)",
      "Banque Centrale Populaire (siège)",
      "Maroc Telecom",
      "Intelcia (centres de relation client)",
      "Marjane Holding"
    ],
    "whereToLook": "Commencez par l'ANAPEC : la région Casablanca-Settat compte plusieurs agences (par ex. Casablanca-Anfa, Hay Mohammadi, Sidi Bernoussi) qui publient des offres et proposent des ateliers CV et intermédiation gratuits sur anapec.org. Pour l'industrie, ciblez directement les zones d'Aïn Sebaâ et Sidi Bernoussi (candidatures spontanées, associations de zone comme AZIAN). Pour l'offshoring et le tertiaire, surveillez les plateformes marocaines (ReKrute, Emploi.ma, jobsquare.ma) et LinkedIn, où les grands comptes de Casanearshore recrutent en continu.",
    "faq": [
      {
        "question": "Quels secteurs recrutent le plus à Casablanca ?",
        "answer": "La finance et la banque (sièges nationaux, CFC), l'offshoring et les centres d'appels (Casanearshore), l'industrie des zones d'Aïn Sebaâ–Sidi Bernoussi, ainsi que le commerce et la logistique portuaire. Ce sont les viviers d'emploi les plus actifs de la ville."
      },
      {
        "question": "Faut-il parler français pour travailler dans l'offshoring à Casablanca ?",
        "answer": "Oui, la majorité des postes de relation client et de back-office au parc Casanearshore visent des marchés francophones : un bon niveau de français oral est souvent le premier critère, l'anglais ou l'espagnol étant un plus."
      },
      {
        "question": "Vaut-il mieux viser l'industrie ou l'offshoring à Casablanca ?",
        "answer": "Cela dépend de votre profil. L'offshoring de Casanearshore recrute en continu, souvent dès le niveau bac avec un bon français et une formation assurée en interne : c'est la voie la plus rapide. L'industrie des zones d'Aïn Sebaâ–Sidi Bernoussi valorise davantage les diplômes techniques (OFPPT) et l'expérience, mais offre des postes de production et de maintenance plus stables. Beaucoup de candidats commencent en centre d'appels puis basculent vers l'industrie ou le tertiaire."
      }
    ]
  },
  {
    "slug": "rabat",
    "name": "Rabat",
    "nameAr": "الرباط",
    "metaTitle": "Emploi Rabat : secteurs, employeurs et où chercher",
    "metaDescription": "Guide de l'emploi Rabat : administration publique, offshoring à Technopolis, télécoms et services. Employeurs réels, secteurs qui recrutent et conseils anti-arnaque.",
    "intro": "Rabat est la capitale administrative et politique du Maroc : son marché de l'emploi est d'abord porté par l'administration publique, les ministères, les institutions nationales et les représentations diplomatiques, ce qui en fait une ville de fonctionnaires, de cadres et de métiers de services plus que d'industrie lourde. À côté de ce cœur administratif, le parc Technopolis (à Salé, dans l'agglomération Rabat-Salé) a fait émerger un pôle offshoring et IT qui recrute développeurs, ingénieurs et agents de centres de relation client. La ville concentre aussi des sièges (télécoms, banques, institutions), un tissu universitaire dense et une économie de services tertiaires.",
    "sectors": [
      {
        "label": "Administration publique et institutions",
        "note": "En tant que capitale, Rabat abrite les ministères, les administrations centrales et les grandes institutions nationales : c'est le premier bassin d'emploi de la ville, essentiellement via concours de la fonction publique."
      },
      {
        "label": "Offshoring, IT et centres de relation client",
        "note": "Le parc Technopolis (Salé) regroupe des acteurs BPO/ITO comme Capgemini, Dell, CGI, IBM, Atos et Foundever (ex-Sitel), qui recrutent en développement, infogérance et service client francophone."
      },
      {
        "label": "Télécoms et numérique",
        "note": "Rabat accueille le siège de Maroc Telecom (Hay Riad) et des organismes du numérique (régulateur, agences publiques), avec des besoins en profils techniques et ingénierie."
      },
      {
        "label": "Enseignement supérieur et recherche",
        "note": "L'université Mohammed V et plusieurs grandes écoles et instituts nationaux font de l'éducation et de la recherche un employeur important, du personnel enseignant aux fonctions support."
      },
      {
        "label": "Banque, finance et services",
        "note": "Siège de Bank Al-Maghrib (banque centrale) et présence de banques, cabinets et services aux entreprises alimentent des postes en finance, audit, conseil et administratif."
      }
    ],
    "employers": [
      "Technopolis (parc technologique et zone franche, Salé / agglomération de Rabat)",
      "Capgemini Technology Services Maroc (Technopolis)",
      "Dell (Technopolis)",
      "CGI Maroc (Technopolis, Sala Al Jadida)",
      "IBM et Atos (offshoring, Technopolis)",
      "Foundever (ex-Sitel) — centres de relation client (Technopolis / Rabat)",
      "Maroc Telecom (siège, Hay Riad)",
      "Bank Al-Maghrib (siège de la banque centrale)",
      "Université Mohammed V de Rabat"
    ],
    "whereToLook": "Commencez par l'ANAPEC : l'agence dispose de points d'accueil dans l'agglomération Rabat-Salé et publie ses offres sur anapec.org, avec des ateliers CV et des sessions de recrutement gratuites. Pour l'offshoring et l'IT, visez directement les pages carrières des entreprises de Technopolis (Capgemini, Dell, CGI, IBM, Foundever) et les plateformes comme ReKrute, Emploi.ma et LinkedIn, très actives pour les centres de relation client à Rabat-Salé. Pour la fonction publique, suivez le portail officiel des concours (emploi-public.ma) et les annonces des ministères, car l'essentiel de l'emploi de la capitale passe par concours.",
    "faq": [
      {
        "question": "Quels sont les principaux employeurs à Rabat ?",
        "answer": "Le premier employeur de Rabat est l'administration publique (ministères et institutions nationales), la ville étant la capitale. S'y ajoutent le pôle offshoring de Technopolis à Salé (Capgemini, Dell, CGI, IBM, Foundever ex-Sitel), des sièges comme Maroc Telecom et Bank Al-Maghrib, ainsi que l'université Mohammed V."
      },
      {
        "question": "Technopolis est-il vraiment à Rabat ?",
        "answer": "Technopolis se situe administrativement à Salé, mais dans la même agglomération que Rabat, à proximité de la ville et de l'aéroport Rabat-Salé. C'est le principal parc offshoring/IT de la région Rabat-Salé-Kénitra et un point d'entrée majeur pour les emplois en IT et centres de relation client."
      },
      {
        "question": "Comment se déroulent les concours de la fonction publique à Rabat ?",
        "answer": "L'essentiel de l'emploi de la capitale passe par concours. Les postes sont annoncés sur le portail officiel emploi-public.ma et les sites des ministères, avec un dossier à déposer puis, en général, une épreuve écrite et un entretien oral. La participation est gratuite et conditionnée au diplôme requis ; surveillez régulièrement les avis, car les délais de dépôt sont souvent courts."
      }
    ]
  },
  {
    "slug": "marrakech",
    "name": "Marrakech",
    "nameAr": "مراكش",
    "metaTitle": "Emploi Marrakech : secteurs, employeurs et où chercher",
    "metaDescription": "Guide de l'emploi Marrakech : tourisme et hôtellerie de luxe, centres d'appels francophones et anglophones, artisanat de Sidi Ghanem, ANAPEC et conseils anti-arnaque.",
    "intro": "Marrakech est avant tout la capitale touristique du Maroc : l'hôtellerie de luxe, la restauration et les métiers de l'accueil y concentrent une part énorme de l'emploi, avec une forte demande de profils multilingues. À côté de ce moteur touristique, la ville s'est imposée comme un pôle d'offshoring francophone (centres d'appels et relation client) et conserve un tissu d'artisanat et de petite industrie autour de la zone de Sidi Ghanem. L'emploi y est marqué par une forte saisonnalité et par la valorisation des langues (français, anglais, espagnol).",
    "sectors": [
      {
        "label": "Tourisme, hôtellerie et restauration",
        "note": "Premier employeur de la ville : palaces (La Mamounia, Royal Mansour, Four Seasons), riads, resorts internationaux et restauration recrutent en continu, avec des pics avant la haute saison."
      },
      {
        "label": "Centres d'appels et offshoring",
        "note": "Marrakech attire les centres d'appels grâce à un vivier de jeunes diplômés francophones ; les campagnes anglophones (UK/US) sont mieux rémunérées que les francophones."
      },
      {
        "label": "Artisanat, décoration et petite industrie",
        "note": "La zone de Sidi Ghanem (~450 entreprises) regroupe ateliers de décoration, ameublement, céramique, cosmétique naturelle et agroalimentaire, souvent tournés vers l'export et le showroom."
      },
      {
        "label": "Agriculture et agro-industrie (région Marrakech-Safi / Al Haouz)",
        "note": "L'arrière-pays d'Al Haouz offre de l'emploi saisonnier, notamment la récolte des olives de novembre à février et les unités de transformation."
      },
      {
        "label": "Commerce, services et événementiel",
        "note": "Le flux touristique alimente le commerce, le transport, l'événementiel et les services, avec beaucoup de contrats saisonniers et à temps partiel."
      }
    ],
    "employers": [
      "La Mamounia (palace, ~800 salariés)",
      "Royal Mansour Marrakech",
      "Four Seasons Resort Marrakech",
      "Mandarin Oriental Marrakech",
      "Teleperformance et Concentrix (centres de relation client, dont un site à Sidi Ghanem)",
      "Intelcia (plateforme de relation client à Marrakech)",
      "Zone industrielle de Sidi Ghanem (~450 entreprises, quartier Menara, route de Safi)",
      "Chabi Chic et Fenyadi (arts de la table, mobilier et décoration artisanale, Sidi Ghanem)"
    ],
    "whereToLook": "Commencez par l'agence ANAPEC de Marrakech (Douar Laâskar / Hay El Hassani, tél. 05 24 49 29 88 ; agence régionale Marrakech-Safi : r.marrakech-safi@anapec.org) pour vous inscrire et consulter les offres, notamment en hôtellerie-restauration. Pour le tourisme, postulez en direct sur les pages carrières des palaces et grands hôtels, et présentez-vous en personne (CV en main) avant la haute saison. Pour les centres d'appels, utilisez moncallcenter.ma et rekrute.com, où Teleperformance, Concentrix et Intelcia publient leurs campagnes marrakchies. Pour l'artisanat et la déco, démarchez directement les showrooms et ateliers de Sidi Ghanem.",
    "faq": [
      {
        "question": "Quel est le secteur qui recrute le plus à Marrakech ?",
        "answer": "Le tourisme, l'hôtellerie et la restauration sont de loin les plus gros pourvoyeurs d'emplois à Marrakech, première destination touristique du Maroc. Les palaces, riads et resorts recrutent réception, cuisine, service, housekeeping et animation, avec une forte demande de profils parlant plusieurs langues (français, anglais, espagnol)."
      },
      {
        "question": "Faut-il parler anglais pour travailler dans un centre d'appels à Marrakech ?",
        "answer": "Non, la majorité des centres d'appels de Marrakech opèrent en français. Mais les campagnes anglophones (marchés britannique et américain) sont plus recherchées et généralement mieux payées : maîtriser l'anglais élargit nettement vos possibilités et votre salaire."
      },
      {
        "question": "Le travail à Marrakech est-il saisonnier ?",
        "answer": "Une grande partie oui. L'hôtellerie, la restauration, l'événementiel et l'agriculture d'Al Haouz recrutent fortement avant et pendant la haute saison, puis réduisent leurs effectifs. Anticipez vos candidatures quelques semaines avant les pics touristiques et la récolte des olives (novembre-février)."
      }
    ]
  },
  {
    "slug": "tanger",
    "name": "Tanger",
    "nameAr": "طنجة",
    "metaTitle": "Emploi Tanger : secteurs, zones franches et employeurs qui recrutent",
    "metaDescription": "Guide de l'emploi Tanger : automobile, aéronautique, logistique portuaire et offshoring. Zones franches, grands employeurs et où postuler sans se faire arnaquer.",
    "intro": "Tanger est le premier pôle industriel exportateur du Maroc, tiré par le port Tanger Med (l'un des plus grands d'Afrique) et un réseau de zones franches qui concentrent l'automobile, l'aéronautique et la logistique. L'usine Renault de Melloussa et ses centaines d'équipementiers en font le premier bassin d'emploi automobile du pays, tandis que l'offshoring francophone et hispanophone alimente une forte demande en centres d'appels et services. C'est un marché où l'industrie et l'export recrutent en continu, souvent par vagues liées aux montées en cadence des usines.",
    "sectors": [
      {
        "label": "Automobile / câblage",
        "note": "Premier secteur de la ville : l'usine Renault Tanger (usine de Melloussa) et des centaines d'équipementiers (câblage, assemblage, qualité) recrutent en permanence des opérateurs et techniciens."
      },
      {
        "label": "Aéronautique",
        "note": "Des acteurs comme Safran et des sous-traitants installés à Tanger Free Zone recherchent des profils en montage, usinage et qualité."
      },
      {
        "label": "Logistique et transport portuaire",
        "note": "Tanger Med génère un besoin constant en manutention, transit douanier (ADII) et supply chain (DHL, Geodis) autour du port et des zones franches."
      },
      {
        "label": "Offshoring / centres d'appels",
        "note": "L'offshoring francophone et hispanophone (BPO, service client) recrute massivement à Tanger Shore et dans la zone, avec des postes accessibles aux bacheliers bilingues."
      },
      {
        "label": "Textile-habillement",
        "note": "Secteur historique de Tanger tourné vers l'export européen, il recrute couturières, mécaniciennes et responsables de production, souvent par saison."
      }
    ],
    "employers": [
      "Renault Tanger (usine de Melloussa)",
      "Tanger Free Zone (TFZ) — plus de 900 entreprises",
      "Tanger Automotive City (TAC)",
      "Port Tanger Med / Tanger Med Zones",
      "Tanger Shore (parc offshoring)",
      "Yazaki (câblage automobile)",
      "Leoni (câblage automobile)",
      "Safran (aéronautique)",
      "DHL Supply Chain (logistique)"
    ],
    "whereToLook": "Commencez par l'agence ANAPEC de Tanger, qui gère des sessions de recrutement de masse pour les usines des zones franches (automobile, câblage, offshoring) — l'inscription et l'accompagnement y sont gratuits. Pour l'industrie, visez directement les pages carrières des zones (Tanger Med Zones, Tanger Free Zone) et des grands équipementiers. Le CRI Tanger-Tétouan-Al Hoceïma et les portails d'emploi marocains (emploi.ma, jobsquare.ma, rekrute) publient régulièrement les offres des zones.",
    "faq": [
      {
        "question": "Quels secteurs recrutent le plus à Tanger ?",
        "answer": "L'automobile et le câblage arrivent largement en tête, portés par l'usine Renault de Melloussa et ses équipementiers en zones franches. Viennent ensuite la logistique portuaire (Tanger Med), l'aéronautique, l'offshoring/centres d'appels et le textile-habillement."
      },
      {
        "question": "Faut-il un diplôme pour travailler dans les zones franches de Tanger ?",
        "answer": "Beaucoup de postes d'opérateur en câblage, assemblage ou textile sont accessibles avec un niveau bac ou une formation courte, avec formation assurée à l'embauche. Les postes de technicien, qualité ou maintenance demandent un bac+2 (OFPPT, génie industriel). En offshoring, le bilinguisme français ou espagnol prime souvent sur le diplôme."
      },
      {
        "question": "Quelle formation ouvre les portes des usines de Tanger ?",
        "answer": "Pour les postes d'opérateur en câblage, assemblage ou textile, une formation courte suffit et l'usine assure la qualification à l'embauche. Pour les métiers techniques, les filières de l'OFPPT (électricité, maintenance industrielle) et surtout l'IFMIA (Institut de Formation aux Métiers de l'Industrie Automobile), implanté à proximité des zones franches, alimentent directement Renault et ses équipementiers en techniciens qualité et maintenance."
      }
    ]
  },
  {
    "slug": "fes",
    "name": "Fès",
    "nameAr": "فاس",
    "metaTitle": "Emploi Fès : secteurs, employeurs et zones qui recrutent",
    "metaDescription": "Guide emploi Fès : offshoring (Fès Shore), industrie (Bensouda, Ras El Ma), artisanat du cuir et tourisme. Employeurs réels, zones industrielles et où postuler sans payer.",
    "intro": "Fès réunit deux identités professionnelles rarement côte à côte : celle de capitale historique de l'artisanat d'art marocain — cuir des tanneries de Chouara, céramique et zellige, encore aujourd'hui de gros pourvoyeurs d'emplois — et celle de troisième destination offshoring du pays, derrière Casablanca et Rabat, grâce à la plateforme Fès Shore. Autour de ce couple artisanat/BPO gravitent un tissu industriel réparti sur les zones de Bensouda, Ras El Ma et Ain Chkef (agroalimentaire, textile, métallurgie) et un tourisme culturel adossé à la médina classée à l'UNESCO. Résultat : des recrutements de masse en centres d'appels y côtoient des emplois de production et des métiers traditionnels transmis d'atelier en atelier.",
    "sectors": [
      {
        "label": "Offshoring / centres d'appels (BPO)",
        "note": "Premier employeur formel de la préfecture : Fès Shore regroupe des dizaines de plateformes, avec des vagues de recrutement massives en janvier-février et septembre-octobre, souvent sans diplôme exigé pour les postes de conseiller."
      },
      {
        "label": "Industrie (agroalimentaire, textile, métallurgie, chimie)",
        "note": "Réparti sur les zones de Bensouda, Ras El Ma (Miftah El Kheir) et Ain Chkef : agroalimentaire, bonneterie/textile, plasturgie et composants — postes d'ouvriers, techniciens et ingénieurs."
      },
      {
        "label": "Artisanat d'art et cuir",
        "note": "Fès reste la capitale marocaine du cuir (tanneries de Chouara), de la céramique et du zellige : emplois de production, de commerce et d'export, en grande partie dans le tissu artisanal et les coopératives."
      },
      {
        "label": "Tourisme, hôtellerie et restauration",
        "note": "La médina classée UNESCO et le tourisme culturel soutiennent l'emploi saisonnier en hôtellerie, restauration, guidage et transport."
      },
      {
        "label": "Éducation et services universitaires",
        "note": "Pôle universitaire important (Université Sidi Mohamed Ben Abdellah) générant des emplois d'enseignement, d'encadrement et de services étudiants."
      }
    ],
    "employers": [
      "Fès Shore (plateforme offshoring / P2i)",
      "Concentrix (ex-Webhelp) — plateforme de Fès",
      "Intelcia — plateforme de Fès",
      "Zone industrielle de Bensouda (~154 ha, services et logistique, port sec ONCF)",
      "Zone industrielle Miftah El Kheir à Ras El Ma (agroalimentaire, chimie, métallurgie)",
      "Zone industrielle Ain Chkef",
      "Parc industriel Ain Cheggag (PIAC, province de Sefrou — en développement)",
      "Tanneries de Chouara et écosystème artisanal du cuir de la médina"
    ],
    "whereToLook": "Commencez par l'agence ANAPEC de Fès (inscription gratuite, offres et ateliers d'orientation) et son portail anapec.org. Pour l'offshoring, les plateformes comme Concentrix et Intelcia recrutent en continu via leurs pages carrières et lors de journées de recrutement à Fès Shore ; les portails spécialisés moncallcenter.ma, rekrute.com et jobsquare.ma listent beaucoup d'offres locales. Pour l'industrie, visez directement les zones de Bensouda, Ras El Ma et Ain Chkef, et suivez le CRI Fès-Meknès (fesmeknesinvest.ma) pour les nouvelles implantations. Pour l'artisanat, la Maison de l'Artisan (région Fès-Meknès) et les coopératives sont des points d'entrée.",
    "faq": [
      {
        "question": "Quel est le principal secteur qui recrute à Fès ?",
        "answer": "L'offshoring (centres d'appels et BPO) est le premier employeur formel de la préfecture de Fès, concentré sur la plateforme Fès Shore. La région Fès-Meknès est la 3e destination offshoring du pays. Beaucoup de postes de conseiller clientèle sont accessibles sans diplôme, avec une bonne maîtrise du français, et les recrutements s'intensifient en janvier-février et septembre-octobre."
      },
      {
        "question": "Faut-il un diplôme pour travailler dans un centre d'appel à Fès ?",
        "answer": "Pour les postes de conseiller clientèle, le niveau bac ou une bonne expression en français (parfois espagnol ou anglais) suffit souvent ; l'expérience n'est pas toujours exigée et une formation est assurée en interne. Pour l'encadrement, la qualité ou l'ingénierie (ITO/ESO), un diplôme supérieur est demandé."
      },
      {
        "question": "À quelles périodes les centres d'appels de Fès recrutent-ils le plus ?",
        "answer": "Les plateformes de Fès Shore intensifient leurs recrutements en deux temps forts : janvier-février et septembre-octobre, quand les donneurs d'ordre européens lancent leurs campagnes. C'est à ces moments que les postes de conseiller clientèle, souvent accessibles sans diplôme avec un bon français, sont les plus nombreux ; anticipez votre candidature quelques semaines à l'avance et préparez un CV court et un test de langue."
      }
    ]
  },
  {
    "slug": "agadir",
    "name": "Agadir",
    "nameAr": "أكادير",
    "metaTitle": "Emploi Agadir : secteurs, employeurs et où postuler",
    "metaDescription": "Guide emploi Agadir : tourisme à Taghazout Bay, agroalimentaire du Souss, pêche et conserveries, zones industrielles. Où chercher sans se faire arnaquer.",
    "intro": "Agadir est la capitale touristique, halieutique et agroalimentaire du Maroc : elle abrite l'un des plus grands ports de pêche d'Afrique et sert de débouché à la région agricole la plus exportatrice du pays (Souss-Massa). Le marché de l'emploi y repose sur trois piliers concrets — l'hôtellerie de la corniche et de Taghazout Bay, les conserveries et unités de transformation du poisson, et l'export de primeurs (tomates, agrumes, avocats). Contrairement à Marrakech, la saisonnalité touristique y est atténuée par la clientèle hivernale nord-européenne, ce qui maintient une activité hôtelière toute l'année.",
    "sectors": [
      {
        "label": "Hôtellerie et tourisme",
        "note": "Recrutement quasi permanent sur la corniche et à la nouvelle station Taghazout Bay (réceptionnistes multilingues FR/ES/DE, F&B, gouvernantes, animateurs golf/surf)."
      },
      {
        "label": "Pêche et conserveries",
        "note": "Le port d'Agadir et le parc Haliopolis alimentent des usines de transformation et de conserve : opérateurs de ligne, frigoristes, contrôle qualité, HSE."
      },
      {
        "label": "Agroalimentaire et export de primeurs",
        "note": "Les stations de conditionnement du Souss (tomate, agrumes, avocat, fruits rouges vers l'Europe) recrutent en qualité (GlobalGAP/BRC), logistique froid et export, avec un pic en récolte (octobre-mars)."
      },
      {
        "label": "Industrie et logistique",
        "note": "Les zones industrielles d'Anza, Aït Melloul et les parcs intégrés accueillent matériaux de construction, plasturgie et logistique portuaire."
      },
      {
        "label": "BTP",
        "note": "Les chantiers de Taghazout Bay et l'extension urbaine d'Aït Melloul/Lqliaa soutiennent la demande en conducteurs de travaux, techniciens et ouvriers qualifiés."
      }
    ],
    "employers": [
      "Port de pêche d'Agadir (concession portuaire Marsa Maroc)",
      "Parc Haliopolis — parc industriel dédié à la transformation des produits de la mer",
      "Zone industrielle d'Anza (env. 100 ha, transformation et industrie)",
      "Parcs Industriels Intégrés d'Agadir (Agadir I et II)",
      "Zone d'Accélération Industrielle du Souss-Massa",
      "Zone logistique et industrielle d'Aït Melloul",
      "Station touristique Taghazout Bay (hôtels Hyatt, Riu, golf, marina)",
      "Hôtels de la corniche d'Agadir (groupes Riu, Iberostar, Robinson/Club, Sofitel)"
    ],
    "whereToLook": "Commencez par l'agence ANAPEC d'Agadir (Cité Dakhla, Bd du 11 Janvier) et l'agence régionale Souss-Massa : elles centralisent les offres, l'orientation et les contrats saisonniers agricoles et hôteliers — le service est gratuit. Pour l'hôtellerie, candidatez en direct auprès des DRH des complexes de la corniche et de Taghazout Bay, et surveillez les campagnes de recrutement avant la haute saison. Pour l'agroalimentaire, ciblez les stations de conditionnement d'Aït Melloul, Biougra et Ouled Teima au moment de la récolte. Consultez aussi les plateformes marocaines (emploi.ma, Rekrute, Dreamjob, MarocAnnonces) et la CCIS Souss-Massa.",
    "faq": [
      {
        "question": "Quels secteurs recrutent le plus à Agadir ?",
        "answer": "Les trois moteurs sont l'hôtellerie-tourisme (corniche et Taghazout Bay), la pêche et les conserveries autour du port, et l'agroalimentaire d'export du Souss (tomates, agrumes, avocats). L'industrie, la logistique et le BTP complètent l'offre via les zones industrielles d'Anza et d'Aït Melloul."
      },
      {
        "question": "Le travail est-il saisonnier à Agadir ?",
        "answer": "En partie. L'agroalimentaire connaît un pic de récolte d'octobre à mars, tandis que l'hôtellerie d'Agadir reste plus stable qu'à Marrakech grâce à la clientèle hivernale européenne. De nombreux postes en conserverie, logistique et hôtellerie sont permanents."
      },
      {
        "question": "Comment trouver un emploi saisonnier agricole dans le Souss ?",
        "answer": "Adressez-vous à l'ANAPEC Souss-Massa, qui gère des campagnes de recrutement saisonnier, et présentez-vous directement aux stations de conditionnement d'Aït Melloul, Biougra et Ouled Teima avant la saison. Méfiez-vous des intermédiaires qui réclament un paiement : le placement officiel est gratuit."
      }
    ]
  },
  {
    "slug": "meknes",
    "name": "Meknès",
    "nameAr": "مكناس",
    "metaTitle": "Emploi Meknès : secteurs, zones industrielles et employeurs",
    "metaDescription": "Emploi Meknès : agro-industrie (Agropolis), câblage automobile, viticulture et tourisme. Zones industrielles, employeurs réels et où postuler sans payer.",
    "intro": "Capitale agricole du plateau du Saïss, Meknès tire son marché de l'emploi de l'agro-industrie et de la transformation alimentaire, portées par le pôle Agropolis et le grand rendez-vous annuel qu'est le SIAM. La ville s'est aussi imposée comme un site de câblage automobile, avec plusieurs équipementiers internationaux installés à Agropolis, tandis que la viticulture, l'huile d'olive et le tourisme patrimonial (ville impériale classée, Volubilis à proximité) complètent le tissu local. C'est un bassin où l'industrie manufacturière côtoie l'agriculture et les services publics.",
    "sectors": [
      {
        "label": "Agro-industrie et transformation alimentaire",
        "note": "Cœur de l'économie meknassie : conditionnement, transformation et logistique agroalimentaire regroupés dans le pôle Agropolis, qui alimente la plaine du Saïss."
      },
      {
        "label": "Câblage et industrie automobile",
        "note": "Plusieurs équipementiers (câblage/faisceaux électriques) sont installés à Agropolis, recrutant surtout des opérateurs et techniciens de production."
      },
      {
        "label": "Agriculture, viticulture et huile d'olive",
        "note": "Région viticole et oléicole majeure du Maroc ; les vignobles et huileries autour de Meknès emploient de façon permanente et saisonnière."
      },
      {
        "label": "Tourisme et patrimoine",
        "note": "Ville impériale classée à l'UNESCO, proche de Volubilis : hôtellerie, restauration et guidage recrutent, avec un pic pendant la saison touristique et le SIAM."
      },
      {
        "label": "Commerce, services et secteur public",
        "note": "Administrations régionales, enseignement, santé et commerce de proximité constituent un employeur de fond stable dans la préfecture."
      }
    ],
    "employers": [
      "Agropolis Meknès (agropole agro-industriel, aménagé par MEDZ)",
      "Zone industrielle Mejjat",
      "Zone industrielle Sidi Bouzekri",
      "Zone industrielle Sidi Slimane Moul Kifane (SSMK)",
      "Yazaki (câblage automobile)",
      "Lear Corporation (usine à Agropolis)",
      "Yura Corporation",
      "Les Celliers de Meknès (viticulture)",
      "SIAM — Salon International de l'Agriculture au Maroc (emplois saisonniers, avril)"
    ],
    "whereToLook": "Commencez par l'agence ANAPEC de Meknès (dépôt de CV en ligne sur anapec.org et convocations aux sessions de recrutement, notamment pour l'agro-industrie et le câblage). Pour l'industrie, visez directement les services RH des unités d'Agropolis et des zones de Mejjat, Sidi Bouzekri et SSMK, souvent via des sessions collectives d'opérateurs. Le SIAM (fin avril) est un moment fort pour l'emploi agricole et événementiel. Consultez aussi les portails Marocannonces, Dreamjob et les pages emploi régionales.",
    "faq": [
      {
        "question": "Quels sont les principaux secteurs qui recrutent à Meknès ?",
        "answer": "Principalement l'agro-industrie et la transformation alimentaire (autour d'Agropolis), le câblage automobile, l'agriculture et la viticulture, ainsi que le tourisme patrimonial et les services publics. L'industrie manufacturière concentre l'essentiel des postes d'opérateurs et de techniciens."
      },
      {
        "question": "Qu'est-ce qu'Agropolis et pourquoi est-ce important pour l'emploi à Meknès ?",
        "answer": "Agropolis est le pôle agro-industriel de Meknès, aménagé par MEDZ, dédié à la transformation agroalimentaire, à la logistique et aux activités tertiaires. Il accueille plusieurs dizaines d'entreprises, dont des équipementiers automobiles, et constitue l'un des premiers bassins d'emploi industriel de la ville."
      },
      {
        "question": "Le SIAM crée-t-il des emplois à Meknès ?",
        "answer": "Oui. Le Salon International de l'Agriculture au Maroc (SIAM), organisé chaque année fin avril à Meknès, génère une vague d'emplois saisonniers et événementiels : hôtes et hôtesses d'accueil, logistique, montage de stands, sécurité, restauration et transport. C'est aussi une occasion de contacts directs avec les entreprises agro-industrielles de la région, au-delà de la seule durée du salon."
      }
    ]
  },
  {
    "slug": "oujda",
    "name": "Oujda",
    "nameAr": "وجدة",
    "metaTitle": "Emploi Oujda : secteurs, employeurs et zones qui recrutent",
    "metaDescription": "Guide de l'emploi Oujda : offshoring (Oujda Shore), câblage automobile (Aptiv), énergies renouvelables et services. Où chercher et éviter les arnaques.",
    "intro": "À Oujda, deux paris industriels redessinent l'emploi de l'Oriental : l'usine de câblage automobile Aptiv, qui recrute par vagues opérateurs et techniciens, et le pôle des énergies renouvelables — zone franche Cleantech et institut IFMEREE — qui forme et emploie dans le solaire, l'éolien et l'efficacité énergétique. Ces moteurs se greffent sur le parc offshoring Oujda Shore, adossé à la Technopole, qui a fait de la ville un point d'ancrage BPO loin de l'axe Casablanca-Rabat. En tant que capitale régionale et ville frontalière, Oujda conserve enfin une forte demande dans le commerce, l'administration, la santé et l'éducation, socle stable de son marché du travail longtemps dominé par les métiers de proximité.",
    "sectors": [
      {
        "label": "Offshoring et relation client (BPO)",
        "note": "Le parc Oujda Shore, à l'intérieur de la Technopole, accueille des centres d'appels et des prestataires de services IT/BPO — le principal gisement d'emplois qualifiés pour jeunes diplômés bilingues français."
      },
      {
        "label": "Câblage automobile et industrie",
        "note": "L'usine Aptiv, implantée dans la zone franche d'accélération industrielle de la Technopole, recrute des opérateurs et techniciens de câblage via des campagnes menées avec l'OFPPT et l'ANAPEC."
      },
      {
        "label": "Énergies renouvelables et cleantech",
        "note": "La zone franche Cleantech de la Technopole et l'institut IFMEREE d'Oujda forment et emploient dans le solaire, l'éolien et l'efficacité énergétique, secteurs porteurs dans l'Oriental."
      },
      {
        "label": "Commerce, services et administration",
        "note": "Comme chef-lieu de l'Oriental, Oujda concentre banques, commerce, santé, éducation et administrations régionales, qui génèrent un flux régulier de postes tertiaires et de proximité."
      },
      {
        "label": "Agroalimentaire et BTP",
        "note": "La zone industrielle d'Oujda–Sidi Yahya regroupe des PME d'agroalimentaire, de métallurgie et d'entreprises de construction qui recrutent ouvriers et techniciens."
      }
    ],
    "employers": [
      "Technopole d'Oujda (plateforme industrielle intégrée P2I, gérée par MEDZ)",
      "Oujda Shore (parc offshoring dédié aux métiers de la relation client, IT et BPO)",
      "Aptiv (usine de câblage automobile, zone franche de la Technopole)",
      "Zone franche Cleantech de la Technopole d'Oujda",
      "Zone industrielle Oujda–Sidi Yahya (PME agroalimentaire, métallurgie, BTP)",
      "Université Mohammed Premier et son campus universitaire technologique",
      "IFMEREE Oujda (institut de formation aux métiers des énergies renouvelables)",
      "Institut OFPPT spécialisé dans les métiers de l'offshoring"
    ],
    "whereToLook": "Commencez par l'agence ANAPEC d'Oujda (avenue Mohammed VI) : l'inscription est gratuite et donne accès aux offres locales et aux programmes Idmaj et Tahfiz. Pour l'industrie et l'offshoring, surveillez les campagnes de recrutement de masse relayées par l'ANAPEC et l'OFPPT, notamment pour l'usine Aptiv et les centres d'Oujda Shore, qui demandent souvent un niveau bac ou plus et un bon niveau de français. Les plateformes comme Dreamjob.ma et Jobsquare.ma publient des offres filtrées par ville, et le Centre régional d'investissement de l'Oriental (CRI Oriental) informe sur les entreprises qui s'implantent.",
    "faq": [
      {
        "question": "Quels sont les secteurs qui recrutent le plus à Oujda ?",
        "answer": "L'offshoring et la relation client (parc Oujda Shore), le câblage automobile (usine Aptiv), les énergies renouvelables et les services tertiaires liés au rôle de chef-lieu régional. Les jeunes diplômés bilingues trouvent surtout des opportunités dans les centres d'appels et le BPO de la Technopole."
      },
      {
        "question": "Comment postuler aux emplois de la Technopole d'Oujda et d'Oujda Shore ?",
        "answer": "Inscrivez-vous à l'ANAPEC d'Oujda et suivez ses annonces, car les recrutements de masse (Aptiv, centres offshoring) passent souvent par l'ANAPEC et l'OFPPT. Vous pouvez aussi postuler directement sur les sites carrière des entreprises installées dans la Technopole. Les campagnes Aptiv, adossées à des formations OFPPT, sont une porte d'entrée fréquente pour les opérateurs de câblage."
      },
      {
        "question": "Faut-il parler français ou espagnol pour travailler à Oujda ?",
        "answer": "Le français est très demandé, surtout dans l'offshoring et la relation client. L'espagnol peut être un atout pour certains centres d'appels orientés vers le marché ibérique, mais le français reste la langue de travail dominante dans les services et l'industrie de l'Oriental."
      }
    ]
  },
  {
    "slug": "kenitra",
    "name": "Kénitra",
    "nameAr": "القنيطرة",
    "metaTitle": "Emploi Kénitra : automobile, zone franche et employeurs",
    "metaDescription": "Guide emploi Kénitra : l'usine Stellantis, l'Atlantic Free Zone, l'agro-industrie du Gharb, où postuler via l'ANAPEC et éviter les arnaques au recrutement.",
    "intro": "Kénitra est devenue l'un des pôles automobiles majeurs du Maroc grâce à l'usine Stellantis (ex-PSA) et à l'Atlantic Free Zone, l'une des plus grandes zones franches d'Afrique, qui concentre plus de 80 entreprises et environ 21 000 salariés. La ville reste aussi le débouché naturel de la plaine du Gharb, région agricole et agro-industrielle très active, ce qui donne à son marché de l'emploi une double identité : industrie exportatrice d'un côté, agriculture et agroalimentaire de l'autre. Sa position sur l'axe Casablanca-Tanger, à 40 km de Rabat et reliée par autoroute et voie ferrée aux grands ports, en fait également un point logistique.",
    "sectors": [
      {
        "label": "Industrie automobile",
        "note": "Cœur du marché local : l'usine Stellantis (Peugeot 208, Citroën Ami, Opel Rocks-e) et ses équipementiers recrutent en continu opérateurs de montage, câblage, qualité et maintenance."
      },
      {
        "label": "Câblage et équipement automobile",
        "note": "Les faisceaux électriques (Yazaki, Sumitomo) et les sièges/intérieurs (Lear, Faurecia) emploient des milliers d'opératrices et opérateurs, souvent le premier emploi industriel des jeunes de Kénitra."
      },
      {
        "label": "Agriculture et agro-industrie",
        "note": "Kénitra commande la plaine du Gharb (agrumes, betterave, céréales, maraîchage) ; conditionnement, transformation et logistique agroalimentaire offrent des emplois saisonniers et permanents."
      },
      {
        "label": "Logistique et transport",
        "note": "L'Atlantic Free Zone est connectée par autoroute et rail aux ports de Casablanca et Tanger : magasiniers, caristes, agents supply-chain et transitaires sont demandés."
      },
      {
        "label": "Maintenance et technique industrielle",
        "note": "Techniciens de maintenance, électriciens industriels et profils process figurent parmi les postes les plus recherchés dans la zone franche."
      }
    ],
    "employers": [
      "Stellantis – usine de Kénitra (ex-PSA, constructeur automobile)",
      "Atlantic Free Zone (AFZ) – zone franche industrielle et logistique (gérée par MEDZ, groupe CDG)",
      "Yazaki Maroc – faisceaux de câblage automobile",
      "Sumitomo Electric (SEWS) – câblage automobile",
      "Lear Corporation – sièges et systèmes automobiles",
      "Faurecia / Forvia – intérieurs et équipements automobiles",
      "Nexteer Automotive – systèmes de direction",
      "Ancienne zone industrielle de Kénitra et port fluvial de Mehdia (activités logistiques et agro-industrielles)"
    ],
    "whereToLook": "L'agence ANAPEC de Kénitra est le point de départ officiel : elle publie des offres locales, notamment industrielles, et oriente vers les formations qualifiantes (câblage, maintenance) souvent adossées aux recrutements de la zone franche. Surveillez le Salon de l'Emploi de l'Atlantic Free Zone (AFZIA), où les entreprises de la zone recrutent directement opérateurs et techniciens. Les grands équipementiers (Yazaki, Lear, Stellantis) recrutent aussi via leurs propres pages carrières et des campagnes de recrutement massives annoncées sur les sites d'emploi marocains.",
    "faq": [
      {
        "question": "Quels emplois recrutent le plus à Kénitra ?",
        "answer": "Les postes d'opérateur de production (montage, câblage, contrôle) dans l'automobile constituent le plus gros volume, portés par l'usine Stellantis et ses équipementiers de l'Atlantic Free Zone. Côté technique, les techniciens de maintenance et électriciens industriels sont très demandés. L'agro-industrie du Gharb ajoute des emplois saisonniers de conditionnement et de logistique."
      },
      {
        "question": "Comment postuler dans l'Atlantic Free Zone de Kénitra ?",
        "answer": "Passez par l'agence ANAPEC de Kénitra, par le Salon de l'Emploi de la zone (AFZIA) lorsqu'il est organisé, et par les pages carrières des entreprises (Stellantis, Yazaki, Lear, Faurecia). Les recrutements d'opérateurs se font souvent par vagues ; préparez CV et pièces d'identité, et méfiez-vous de tout intermédiaire qui réclame un paiement."
      },
      {
        "question": "Faut-il un diplôme pour travailler dans l'automobile à Kénitra ?",
        "answer": "Pour les postes d'opérateur, un niveau scolaire de base suffit souvent, l'entreprise assurant une formation au poste ; le sérieux et la disponibilité comptent beaucoup. Pour les postes de technicien (maintenance, qualité, électricité industrielle), un diplôme de type OFPPT/technicien spécialisé est généralement demandé."
      }
    ]
  },
  {
    "slug": "tetouan",
    "name": "Tétouan",
    "nameAr": "تطوان",
    "metaTitle": "Emploi Tétouan : secteurs, employeurs et zones qui recrutent",
    "metaDescription": "Emploi Tétouan : offshoring à Tetouan Shore, industrie légère à Tétouan Park, tourisme à Tamuda Bay et textile. Employeurs réels et où chercher.",
    "intro": "L'emploi à Tétouan est rythmé par deux réalités très différentes : la saison touristique du littoral voisin de Tamuda Bay (M'diq, Martil, Cabo Negro), qui gonfle chaque été les besoins en hôtellerie, restauration et animation, et le statut de ville universitaire et administrative — siège de l'Université Abdelmalek Essaâdi — qui alimente un emploi public et de services plus régulier. À ces deux piliers s'ajoutent un pôle d'offshoring et de centres d'appels (Tetouan Shore, premier parc d'offshoring du Maroc), une industrie légère et logistique en développement (Tétouan Park) et un tissu de confection textile concentré à M'diq et Fnideq. La ville profite aussi, en périphérie, de la dynamique industrielle de la région Tanger-Tétouan-Al Hoceïma.",
    "sectors": [
      {
        "label": "Offshoring, centres d'appels et BPO",
        "note": "Tetouan Shore, premier parc d'offshoring du Maroc, concentre les métiers de la relation client, ITO et BPO tournés vers le marché francophone européen."
      },
      {
        "label": "Tourisme et hôtellerie",
        "note": "La saison estivale sur Tamuda Bay (M'diq, Martil, Cabo Negro) génère de nombreux postes saisonniers en hôtellerie, restauration et animation."
      },
      {
        "label": "Industrie légère et logistique",
        "note": "Tétouan Park accueille des PME/PMI en industrie légère, transformation et logistique, avec des recrutements d'opérateurs et de techniciens."
      },
      {
        "label": "Textile et confection",
        "note": "Des entreprises de confection à M'diq et Fnideq recrutent régulièrement piqueuses, contrôleurs qualité et profils logistiques, souvent via l'ANAPEC."
      },
      {
        "label": "Éducation, administration et services",
        "note": "Ville universitaire et chef-lieu, Tétouan emploie dans l'enseignement (Université Abdelmalek Essaâdi), l'administration publique et les services de proximité."
      }
    ],
    "employers": [
      "Tetouan Shore (parc d'offshoring / BPO, géré par Tanger Med Zones)",
      "Intelcia, Outsourcia et Atento — plateformes de relation client à Tetouan Shore",
      "Foundever (ex-Sitel) — centre de relation client à Tetouan Shore",
      "Tétouan Park (zone d'industrie légère et logistique pour PME/PMI)",
      "Université Abdelmalek Essaâdi (siège à Tétouan, principal employeur universitaire du Nord)",
      "Sofitel Tamuda Bay Beach & Spa (M'diq)",
      "Entreprises de confection textile de M'diq et Fnideq (recrutement fréquent via l'ANAPEC)"
    ],
    "whereToLook": "Commencez par l'agence ANAPEC de Tétouan (Avenue Al Massira) : elle diffuse régulièrement des campagnes de recrutement, notamment pour le textile de M'diq/Fnideq et l'industrie de Tétouan Park. Créez votre profil sur anapec.org et suivez leurs annonces. Pour l'offshoring, candidatez directement auprès des sociétés installées à Tetouan Shore (Intelcia, Outsourcia, Atento, Foundever). Pour le tourisme, visez janvier-avril pour préparer la saison estivale et postulez en direct auprès des hôtels de Tamuda Bay. Les plateformes nationales (Emploi.ma, Dreamjob.ma, Marocannonces, Indeed) publient aussi des offres locales.",
    "faq": [
      {
        "question": "Quels secteurs recrutent le plus à Tétouan ?",
        "answer": "L'offshoring et les centres d'appels (Tetouan Shore), le tourisme et l'hôtellerie sur le littoral de Tamuda Bay (surtout en saison estivale), l'industrie légère et la logistique à Tétouan Park, ainsi que le textile de M'diq et Fnideq. L'éducation et l'administration publique offrent aussi des débouchés stables."
      },
      {
        "question": "L'emploi touristique à Tétouan est-il seulement saisonnier ?",
        "answer": "Une grande partie des postes en hôtellerie et restauration autour de M'diq, Martil et Cabo Negro se concentre sur la saison estivale. Il existe toutefois des emplois permanents dans les grands établissements comme le Sofitel Tamuda Bay. Pour la saison, candidatez tôt, idéalement entre janvier et avril."
      },
      {
        "question": "Comment postuler via l'ANAPEC à Tétouan ?",
        "answer": "Rendez-vous à l'agence ANAPEC de Tétouan (Avenue Al Massira), créez un compte sur anapec.org et consultez les offres locales. L'ANAPEC relaie fréquemment des campagnes pour le textile de M'diq/Fnideq et l'industrie de Tétouan Park, ainsi que des sessions saisonnières avant l'été touristique de Tamuda Bay."
      }
    ]
  }
];

export function getCityEmploi(slug: string): CityEmploi | undefined {
  return CITY_EMPLOI.find((c) => c.slug === slug);
}

/**
 * CV data shape + ready-to-fill models.
 *
 * The builder at /cv and the examples page at /cv/exemples share this module so a
 * model can be rendered as readable content on the page AND loaded straight into
 * the builder. Loading works by writing to the same localStorage key the builder
 * hydrates from, which keeps /cv fully static (no searchParams, no client router).
 *
 * The models are illustrative profiles written for this site — plausible Moroccan
 * career paths, not real people. Phone numbers and emails are deliberately
 * placeholder-shaped so nobody ships one by accident.
 */

export interface Experience {
  poste: string;
  entreprise: string;
  ville: string;
  periode: string;
  description: string;
}

export interface Formation {
  diplome: string;
  etablissement: string;
  annee: string;
}

export interface Langue {
  langue: string;
  niveau: string;
}

export interface CvData {
  prenom: string;
  nom: string;
  titre: string;
  telephone: string;
  email: string;
  ville: string;
  profil: string;
  experiences: Experience[];
  formations: Formation[];
  competences: string;
  langues: Langue[];
}

export const CV_STORAGE_KEY = "khedma-cv-v1";

export const EMPTY_CV: CvData = {
  prenom: "",
  nom: "",
  titre: "",
  telephone: "",
  email: "",
  ville: "",
  profil: "",
  experiences: [{ poste: "", entreprise: "", ville: "", periode: "", description: "" }],
  formations: [{ diplome: "", etablissement: "", annee: "" }],
  competences: "",
  langues: [
    { langue: "Arabe", niveau: "Langue maternelle" },
    { langue: "Français", niveau: "Courant" },
  ],
};

export interface CvModel {
  id: string;
  label: string;
  /** Who should pick this one — shown as the card subtitle. */
  whoFor: string;
  /** The one thing that makes this model different, in plain language. */
  tip: string;
  data: CvData;
}

export const CV_MODELS: CvModel[] = [
  {
    id: "jeune-diplome",
    label: "CV jeune diplômé (sans expérience)",
    whoFor: "Licence, master ou bac+2 fraîchement obtenu, peu ou pas d'expérience salariée.",
    tip: "Sans expérience, ce sont la formation et les stages qui passent en premier. Un stage, un projet de fin d'études ou une activité associative comptent — décrivez-les comme une expérience réelle.",
    data: {
      prenom: "Salma",
      nom: "Benjelloun",
      titre: "Licenciée en économie et gestion — à la recherche d'un premier poste",
      telephone: "06 00 00 00 00",
      email: "prenom.nom@email.com",
      ville: "Rabat",
      profil:
        "Jeune diplômée en économie et gestion, rigoureuse et à l'aise avec les chiffres. Première expérience de stage en gestion administrative. Je cherche un poste d'assistante de gestion ou d'agent administratif, dans le public comme dans le privé.",
      experiences: [
        {
          poste: "Stage en gestion administrative",
          entreprise: "Cabinet comptable",
          ville: "Rabat",
          periode: "2 mois — 2026",
          description:
            "Saisie et classement des pièces comptables, accueil téléphonique, préparation de dossiers clients et mise à jour de tableaux de suivi sur Excel.",
        },
        {
          poste: "Projet de fin d'études",
          entreprise: "Université",
          ville: "Rabat",
          periode: "2025 – 2026",
          description:
            "Étude sur le financement des petites entreprises au Maroc : collecte de données, analyse et rédaction d'un mémoire soutenu devant un jury.",
        },
      ],
      formations: [
        {
          diplome: "Licence en économie et gestion",
          etablissement: "Faculté des sciences juridiques, économiques et sociales",
          annee: "2026",
        },
        { diplome: "Baccalauréat sciences économiques", etablissement: "Lycée", annee: "2023" },
      ],
      competences:
        "Excel, Word, saisie et classement, rédaction administrative, sens de l'organisation, travail en équipe",
      langues: [
        { langue: "Arabe", niveau: "Langue maternelle" },
        { langue: "Français", niveau: "Courant" },
        { langue: "Anglais", niveau: "Intermédiaire" },
      ],
    },
  },
  {
    id: "technicien-ofppt",
    label: "CV technicien spécialisé (OFPPT)",
    whoFor: "Diplômé de la formation professionnelle : technicien ou technicien spécialisé.",
    tip: "Pour un poste technique, les compétences concrètes valent plus qu'un long paragraphe. Nommez les machines, les logiciels et les normes que vous maîtrisez vraiment.",
    data: {
      prenom: "Yassine",
      nom: "El Amrani",
      titre: "Technicien spécialisé en électricité de maintenance industrielle",
      telephone: "06 00 00 00 00",
      email: "prenom.nom@email.com",
      ville: "Casablanca",
      profil:
        "Technicien spécialisé en électricité de maintenance industrielle, formé à l'OFPPT. Expérience de stage en maintenance préventive et curative sur site industriel. Sérieux, ponctuel et attentif aux consignes de sécurité.",
      experiences: [
        {
          poste: "Stage en maintenance industrielle",
          entreprise: "Unité de production agroalimentaire",
          ville: "Casablanca",
          periode: "3 mois — 2026",
          description:
            "Maintenance préventive des équipements, diagnostic de pannes électriques, remplacement de composants et rédaction des fiches d'intervention.",
        },
      ],
      formations: [
        {
          diplome: "Technicien spécialisé en électricité de maintenance industrielle",
          etablissement: "OFPPT",
          annee: "2026",
        },
        { diplome: "Baccalauréat sciences et technologies électriques", etablissement: "Lycée technique", annee: "2024" },
      ],
      competences:
        "Lecture de schémas électriques, armoires électriques, automates programmables, maintenance préventive, habilitation électrique, consignes de sécurité",
      langues: [
        { langue: "Arabe", niveau: "Langue maternelle" },
        { langue: "Français", niveau: "Bon niveau" },
      ],
    },
  },
  {
    id: "concours-fonction-publique",
    label: "CV pour un concours de la fonction publique",
    whoFor: "Candidature à un concours de recrutement public (administration, enseignement, santé).",
    tip: "Restez sobre : pas de couleurs, pas de photo si l'avis ne la demande pas. Reprenez l'intitulé exact du poste mis au concours dans le titre de votre CV, et vérifiez les pièces exigées dans l'avis officiel.",
    data: {
      prenom: "Imane",
      nom: "Ouhadi",
      titre: "Candidate au concours d'administrateur 2ème grade",
      telephone: "06 00 00 00 00",
      email: "prenom.nom@email.com",
      ville: "Fès",
      profil:
        "Titulaire d'un master en droit public, candidate au concours d'administrateur 2ème grade. Bonne connaissance de l'organisation administrative marocaine et de la rédaction administrative. Rigoureuse, méthodique et habituée au travail sur dossier.",
      experiences: [
        {
          poste: "Stage en service administratif",
          entreprise: "Administration publique",
          ville: "Fès",
          periode: "4 mois — 2025",
          description:
            "Traitement et suivi de dossiers, rédaction de notes et de courriers administratifs, archivage et accueil du public.",
        },
      ],
      formations: [
        { diplome: "Master en droit public", etablissement: "Faculté de droit", annee: "2025" },
        { diplome: "Licence en droit public", etablissement: "Faculté de droit", annee: "2023" },
        { diplome: "Baccalauréat lettres et sciences humaines", etablissement: "Lycée", annee: "2020" },
      ],
      competences:
        "Rédaction administrative, droit administratif marocain, traitement de dossiers, Word et Excel, expression écrite en arabe et en français",
      langues: [
        { langue: "Arabe", niveau: "Langue maternelle" },
        { langue: "Français", niveau: "Courant" },
        { langue: "Anglais", niveau: "Notions" },
      ],
    },
  },
  {
    id: "experience-prive",
    label: "CV avec expérience (secteur privé)",
    whoFor: "Plusieurs années d'expérience : commerce, relation client, centre d'appels, services.",
    tip: "Avec de l'expérience, l'ordre s'inverse : les postes passent avant la formation. Chiffrez ce que vous avez fait — un résultat concret vaut mieux qu'une liste de tâches.",
    data: {
      prenom: "Mehdi",
      nom: "Tazi",
      titre: "Conseiller clientèle expérimenté — relation client et vente",
      telephone: "06 00 00 00 00",
      email: "prenom.nom@email.com",
      ville: "Marrakech",
      profil:
        "Conseiller clientèle avec quatre ans d'expérience en centre d'appels et en vente directe. Habitué aux objectifs chiffrés et à la gestion de clients difficiles. Je cherche un poste de superviseur d'équipe.",
      experiences: [
        {
          poste: "Conseiller clientèle senior",
          entreprise: "Centre de relation client",
          ville: "Marrakech",
          periode: "2023 – 2026",
          description:
            "Traitement d'environ 60 appels par jour, résolution des réclamations, vente additionnelle et accompagnement des nouveaux conseillers à leur arrivée.",
        },
        {
          poste: "Vendeur en magasin",
          entreprise: "Enseigne de distribution",
          ville: "Marrakech",
          periode: "2022 – 2023",
          description:
            "Accueil et conseil client, tenue du rayon, encaissement et suivi des stocks.",
        },
      ],
      formations: [
        { diplome: "DUT techniques de commercialisation", etablissement: "École supérieure de technologie", annee: "2022" },
        { diplome: "Baccalauréat sciences expérimentales", etablissement: "Lycée", annee: "2020" },
      ],
      competences:
        "Relation client, gestion des réclamations, vente additionnelle, CRM, encadrement d'équipe, résistance au stress",
      langues: [
        { langue: "Arabe", niveau: "Langue maternelle" },
        { langue: "Français", niveau: "Courant" },
        { langue: "Anglais", niveau: "Bon niveau" },
      ],
    },
  },
  {
    id: "allemagne-ausbildung",
    label: "CV pour l'Allemagne (Ausbildung / Chancenkarte)",
    whoFor: "Candidature à une Ausbildung ou à un emploi en Allemagne depuis le Maroc.",
    tip: "Un employeur allemand attend un CV court, factuel et daté au format jour/mois/année. Indiquez toujours votre niveau d'allemand selon le cadre européen (A2, B1, B2) — c'est souvent le premier critère de tri.",
    data: {
      prenom: "Nizar",
      nom: "Belkadi",
      titre: "Candidat à une Ausbildung en soins infirmiers (Pflegefachmann)",
      telephone: "+212 6 00 00 00 00",
      email: "prenom.nom@email.com",
      ville: "Agadir",
      profil:
        "Bachelier scientifique motivé par une Ausbildung en soins en Allemagne. Niveau d'allemand B1 en cours de consolidation vers B2. Première expérience d'aide en milieu de soins et bon contact avec les patients.",
      experiences: [
        {
          poste: "Stage d'observation en milieu de soins",
          entreprise: "Clinique privée",
          ville: "Agadir",
          periode: "2 mois — 2026",
          description:
            "Accompagnement des équipes soignantes, aide aux gestes du quotidien auprès des patients et respect des protocoles d'hygiène.",
        },
      ],
      formations: [
        { diplome: "Cours d'allemand — niveau B1", etablissement: "Institut de langues", annee: "2026" },
        { diplome: "Baccalauréat sciences de la vie et de la terre", etablissement: "Lycée", annee: "2025" },
      ],
      competences:
        "Hygiène et protocoles de soins, accompagnement des patients, travail en équipe, ponctualité, informatique de base",
      langues: [
        { langue: "Arabe", niveau: "Langue maternelle" },
        { langue: "Français", niveau: "Courant" },
        { langue: "Allemand", niveau: "B1 (en cours vers B2)" },
        { langue: "Anglais", niveau: "Intermédiaire" },
      ],
    },
  },
];

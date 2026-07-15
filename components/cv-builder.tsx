"use client";

import { useEffect, useState } from "react";

/**
 * Client-side CV builder. Everything lives in the browser — the form data is
 * kept in localStorage and never sent anywhere. "Imprimer / PDF" uses the
 * browser's print dialog (Save as PDF), so there is no server, no account, and
 * no data collection. Moroccan CV conventions (photo optional, langues, état
 * civil light).
 */

interface Experience {
  poste: string;
  entreprise: string;
  ville: string;
  periode: string;
  description: string;
}

interface Formation {
  diplome: string;
  etablissement: string;
  annee: string;
}

interface Langue {
  langue: string;
  niveau: string;
}

interface CvData {
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

const EMPTY: CvData = {
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

const SAMPLE: CvData = {
  prenom: "Yasmine",
  nom: "El Amrani",
  titre: "Technicienne spécialisée en génie civil",
  telephone: "06 12 34 56 78",
  email: "yasmine.elamrani@email.ma",
  ville: "Casablanca",
  profil:
    "Technicienne spécialisée en génie civil, rigoureuse et organisée, à la recherche d'un poste dans le secteur public. Expérience de chantier et maîtrise des logiciels de dessin technique.",
  experiences: [
    {
      poste: "Technicienne de chantier (stage)",
      entreprise: "Entreprise de travaux publics",
      ville: "Casablanca",
      periode: "2024 – 2025",
      description: "Suivi de chantier, métrés, contrôle qualité et coordination des équipes.",
    },
  ],
  formations: [
    {
      diplome: "Diplôme de technicien spécialisé en génie civil",
      etablissement: "OFPPT",
      annee: "2024",
    },
    { diplome: "Baccalauréat sciences physiques", etablissement: "Lycée Ibn Sina", annee: "2022" },
  ],
  competences: "AutoCAD, métrés, lecture de plans, MS Office, gestion de chantier",
  langues: [
    { langue: "Arabe", niveau: "Langue maternelle" },
    { langue: "Français", niveau: "Courant" },
    { langue: "Anglais", niveau: "Intermédiaire" },
  ],
};

const STORAGE_KEY = "khedma-cv-v1";

const inputClass =
  "mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-primary";
const labelClass = "block text-xs font-semibold text-muted";

export function CvBuilder() {
  const [data, setData] = useState<CvData>(EMPTY);
  const [loaded, setLoaded] = useState(false);

  // Hydrate from localStorage AFTER mount (not in a lazy initializer): the server
  // renders EMPTY, so reading stored data during render would cause a hydration
  // mismatch. This is the canonical external-store sync, hence the rule opt-out.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setData({ ...EMPTY, ...(JSON.parse(raw) as Partial<CvData>) });
    } catch {
      // ignore corrupt storage
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // ignore quota errors
    }
  }, [data, loaded]);

  function set<K extends keyof CvData>(key: K, value: CvData[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function updateExp(i: number, key: keyof Experience, value: string) {
    setData((d) => {
      const experiences = d.experiences.map((e, idx) => (idx === i ? { ...e, [key]: value } : e));
      return { ...d, experiences };
    });
  }
  function updateForm(i: number, key: keyof Formation, value: string) {
    setData((d) => {
      const formations = d.formations.map((f, idx) => (idx === i ? { ...f, [key]: value } : f));
      return { ...d, formations };
    });
  }
  function updateLang(i: number, key: keyof Langue, value: string) {
    setData((d) => {
      const langues = d.langues.map((l, idx) => (idx === i ? { ...l, [key]: value } : l));
      return { ...d, langues };
    });
  }

  const competencesList = data.competences
    .split(/[,\n]/)
    .map((s) => s.trim())
    .filter(Boolean);
  const fullName = `${data.prenom} ${data.nom}`.trim();

  return (
    <div className="cv-print-root">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Form — hidden when printing */}
        <div className="no-print space-y-6">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              Imprimer / Enregistrer en PDF
            </button>
            <button
              type="button"
              onClick={() => setData(SAMPLE)}
              className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-primary"
            >
              Charger un exemple
            </button>
            <button
              type="button"
              onClick={() => {
                if (confirm("Effacer tout le contenu du CV ?")) setData(EMPTY);
              }}
              className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-muted transition-colors hover:border-status hover:text-status"
            >
              Tout effacer
            </button>
          </div>

          <fieldset className="rounded-xl border border-border bg-surface p-4">
            <legend className="px-1 text-sm font-bold text-ink">État civil</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className={labelClass}>
                Prénom
                <input className={inputClass} value={data.prenom} onChange={(e) => set("prenom", e.target.value)} />
              </label>
              <label className={labelClass}>
                Nom
                <input className={inputClass} value={data.nom} onChange={(e) => set("nom", e.target.value)} />
              </label>
              <label className={`${labelClass} sm:col-span-2`}>
                Titre / poste visé
                <input className={inputClass} value={data.titre} onChange={(e) => set("titre", e.target.value)} placeholder="Ex : Technicien spécialisé en génie civil" />
              </label>
              <label className={labelClass}>
                Téléphone
                <input className={inputClass} value={data.telephone} onChange={(e) => set("telephone", e.target.value)} inputMode="tel" />
              </label>
              <label className={labelClass}>
                E-mail
                <input className={inputClass} value={data.email} onChange={(e) => set("email", e.target.value)} inputMode="email" />
              </label>
              <label className={`${labelClass} sm:col-span-2`}>
                Ville
                <input className={inputClass} value={data.ville} onChange={(e) => set("ville", e.target.value)} />
              </label>
            </div>
          </fieldset>

          <fieldset className="rounded-xl border border-border bg-surface p-4">
            <legend className="px-1 text-sm font-bold text-ink">Profil</legend>
            <label className={labelClass}>
              Accroche (2–3 phrases)
              <textarea className={`${inputClass} min-h-[90px]`} value={data.profil} onChange={(e) => set("profil", e.target.value)} />
            </label>
          </fieldset>

          <fieldset className="rounded-xl border border-border bg-surface p-4">
            <legend className="px-1 text-sm font-bold text-ink">Expériences</legend>
            <div className="space-y-4">
              {data.experiences.map((exp, i) => (
                <div key={i} className="rounded-lg border border-border p-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className={labelClass}>
                      Poste
                      <input className={inputClass} value={exp.poste} onChange={(e) => updateExp(i, "poste", e.target.value)} />
                    </label>
                    <label className={labelClass}>
                      Entreprise
                      <input className={inputClass} value={exp.entreprise} onChange={(e) => updateExp(i, "entreprise", e.target.value)} />
                    </label>
                    <label className={labelClass}>
                      Ville
                      <input className={inputClass} value={exp.ville} onChange={(e) => updateExp(i, "ville", e.target.value)} />
                    </label>
                    <label className={labelClass}>
                      Période
                      <input className={inputClass} value={exp.periode} onChange={(e) => updateExp(i, "periode", e.target.value)} placeholder="2023 – 2025" />
                    </label>
                  </div>
                  <label className={`${labelClass} mt-3 block`}>
                    Description
                    <textarea className={`${inputClass} min-h-[70px]`} value={exp.description} onChange={(e) => updateExp(i, "description", e.target.value)} />
                  </label>
                  {data.experiences.length > 1 && (
                    <button
                      type="button"
                      onClick={() => set("experiences", data.experiences.filter((_, idx) => idx !== i))}
                      className="mt-2 text-xs font-semibold text-status hover:underline"
                    >
                      Supprimer cette expérience
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => set("experiences", [...data.experiences, { poste: "", entreprise: "", ville: "", periode: "", description: "" }])}
              className="mt-3 text-sm font-semibold text-primary hover:underline"
            >
              + Ajouter une expérience
            </button>
          </fieldset>

          <fieldset className="rounded-xl border border-border bg-surface p-4">
            <legend className="px-1 text-sm font-bold text-ink">Formation</legend>
            <div className="space-y-4">
              {data.formations.map((f, i) => (
                <div key={i} className="grid gap-3 sm:grid-cols-2">
                  <label className={labelClass}>
                    Diplôme
                    <input className={inputClass} value={f.diplome} onChange={(e) => updateForm(i, "diplome", e.target.value)} />
                  </label>
                  <label className={labelClass}>
                    Établissement
                    <input className={inputClass} value={f.etablissement} onChange={(e) => updateForm(i, "etablissement", e.target.value)} />
                  </label>
                  <label className={labelClass}>
                    Année
                    <input className={inputClass} value={f.annee} onChange={(e) => updateForm(i, "annee", e.target.value)} />
                  </label>
                  {data.formations.length > 1 && (
                    <button
                      type="button"
                      onClick={() => set("formations", data.formations.filter((_, idx) => idx !== i))}
                      className="self-end text-xs font-semibold text-status hover:underline"
                    >
                      Supprimer
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => set("formations", [...data.formations, { diplome: "", etablissement: "", annee: "" }])}
              className="mt-3 text-sm font-semibold text-primary hover:underline"
            >
              + Ajouter une formation
            </button>
          </fieldset>

          <fieldset className="rounded-xl border border-border bg-surface p-4">
            <legend className="px-1 text-sm font-bold text-ink">Compétences & langues</legend>
            <label className={labelClass}>
              Compétences (séparées par des virgules)
              <textarea className={`${inputClass} min-h-[60px]`} value={data.competences} onChange={(e) => set("competences", e.target.value)} />
            </label>
            <div className="mt-3 space-y-3">
              {data.langues.map((l, i) => (
                <div key={i} className="grid grid-cols-2 gap-3">
                  <label className={labelClass}>
                    Langue
                    <input className={inputClass} value={l.langue} onChange={(e) => updateLang(i, "langue", e.target.value)} />
                  </label>
                  <label className={labelClass}>
                    Niveau
                    <input className={inputClass} value={l.niveau} onChange={(e) => updateLang(i, "niveau", e.target.value)} />
                  </label>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => set("langues", [...data.langues, { langue: "", niveau: "" }])}
              className="mt-3 text-sm font-semibold text-primary hover:underline"
            >
              + Ajouter une langue
            </button>
          </fieldset>

          <p className="rounded-lg bg-bg p-3 text-xs leading-relaxed text-muted">
            🔒 Vos données restent sur votre appareil (enregistrées dans votre navigateur) et ne sont
            envoyées à aucun serveur. « Imprimer / Enregistrer en PDF » ouvre la boîte d&apos;impression :
            choisissez « Enregistrer au format PDF » comme destination.
          </p>
        </div>

        {/* Live preview — the printable sheet */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="cv-sheet mx-auto w-full max-w-[210mm] rounded-xl border border-border bg-white p-8 text-[13px] leading-relaxed text-[#1f2937] shadow-sm sm:p-10">
            <header className="border-b-2 border-[#4338ca] pb-4">
              <h2 className="text-2xl font-extrabold text-[#0f172a]">
                {fullName || "Votre nom"}
              </h2>
              {data.titre && <p className="mt-1 text-sm font-semibold text-[#4338ca]">{data.titre}</p>}
              <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#475569]">
                {data.ville && <span>{data.ville}</span>}
                {data.telephone && <span>{data.telephone}</span>}
                {data.email && <span>{data.email}</span>}
              </p>
            </header>

            {data.profil && (
              <section className="mt-5">
                <h3 className="text-xs font-bold uppercase tracking-wide text-[#4338ca]">Profil</h3>
                <p className="mt-1.5 text-[#374151]">{data.profil}</p>
              </section>
            )}

            {data.experiences.some((e) => e.poste || e.entreprise) && (
              <section className="mt-5">
                <h3 className="text-xs font-bold uppercase tracking-wide text-[#4338ca]">Expériences</h3>
                <div className="mt-2 space-y-3">
                  {data.experiences
                    .filter((e) => e.poste || e.entreprise)
                    .map((e, i) => (
                      <div key={i}>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                          <span className="font-bold text-[#0f172a]">{e.poste}</span>
                          {e.periode && <span className="text-xs text-[#64748b]">{e.periode}</span>}
                        </div>
                        <div className="text-xs font-medium text-[#475569]">
                          {[e.entreprise, e.ville].filter(Boolean).join(" — ")}
                        </div>
                        {e.description && <p className="mt-1 text-[#374151]">{e.description}</p>}
                      </div>
                    ))}
                </div>
              </section>
            )}

            {data.formations.some((f) => f.diplome || f.etablissement) && (
              <section className="mt-5">
                <h3 className="text-xs font-bold uppercase tracking-wide text-[#4338ca]">Formation</h3>
                <div className="mt-2 space-y-2">
                  {data.formations
                    .filter((f) => f.diplome || f.etablissement)
                    .map((f, i) => (
                      <div key={i} className="flex flex-wrap items-baseline justify-between gap-x-3">
                        <span>
                          <span className="font-bold text-[#0f172a]">{f.diplome}</span>
                          {f.etablissement && <span className="text-[#475569]"> — {f.etablissement}</span>}
                        </span>
                        {f.annee && <span className="text-xs text-[#64748b]">{f.annee}</span>}
                      </div>
                    ))}
                </div>
              </section>
            )}

            {competencesList.length > 0 && (
              <section className="mt-5">
                <h3 className="text-xs font-bold uppercase tracking-wide text-[#4338ca]">Compétences</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {competencesList.map((c, i) => (
                    <span key={i} className="rounded bg-[#eef2ff] px-2 py-0.5 text-xs font-medium text-[#3730a3]">
                      {c}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {data.langues.some((l) => l.langue) && (
              <section className="mt-5">
                <h3 className="text-xs font-bold uppercase tracking-wide text-[#4338ca]">Langues</h3>
                <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-1">
                  {data.langues
                    .filter((l) => l.langue)
                    .map((l, i) => (
                      <li key={i} className="text-[#374151]">
                        <span className="font-semibold text-[#0f172a]">{l.langue}</span>
                        {l.niveau && <span className="text-[#64748b]"> — {l.niveau}</span>}
                      </li>
                    ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

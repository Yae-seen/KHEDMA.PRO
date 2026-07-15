"use client";

import { useMemo, useState } from "react";
import type { Occupation, Channel } from "@/lib/allemagne-types";

/**
 * Occupation × city employer finder. It does NOT host jobs — it builds the exact
 * deep-link into the official German job portals (Bundesagentur Jobbörse, Make it
 * in Germany, EURES) pre-filtered by the trade and a (often small) German city,
 * which is how Moroccan candidates actually find sponsoring employers.
 */
export function EmployerFinder({
  occupations,
  cities,
  channels,
}: {
  occupations: Occupation[];
  cities: string[];
  channels: Channel[];
}) {
  const [occId, setOccId] = useState(occupations[0]?.id ?? "");
  const [city, setCity] = useState("");

  const occ = occupations.find((o) => o.id === occId);

  const links = useMemo(() => {
    if (!occ) return [];
    return channels
      .filter((c) => c.searchUrlPattern)
      .map((c) => ({
        name: c.name,
        official: c.official,
        useFor: c.useFor,
        url: c
          .searchUrlPattern!.replace("{occupation}", encodeURIComponent(occ.de))
          .replace("{city}", encodeURIComponent(city.trim())),
      }));
  }, [occ, city, channels]);

  return (
    <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm">
          <span className="font-semibold text-ink">Métier recherché</span>
          <select
            value={occId}
            onChange={(e) => setOccId(e.target.value)}
            className="mt-1 w-full rounded-lg border border-border bg-bg px-3 py-2.5 text-sm text-ink outline-none focus:border-primary"
          >
            {occupations.map((o) => (
              <option key={o.id} value={o.id}>
                {o.fr} — {o.de}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="font-semibold text-ink">Ville allemande (idéalement petite)</span>
          <input
            list="de-cities"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Ex : Görlitz, Zwickau, Gera…"
            className="mt-1 w-full rounded-lg border border-border bg-bg px-3 py-2.5 text-sm text-ink outline-none focus:border-primary"
          />
          <datalist id="de-cities">
            {cities.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </label>
      </div>

      {occ && (
        <div className="mt-4 flex flex-wrap items-center gap-2 rounded-xl bg-bg p-3 text-xs">
          <span className="rounded-md bg-surface px-2 py-1 font-semibold text-ink" lang="ar" dir="rtl">
            {occ.ar}
          </span>
          <span className={`rounded-md px-2 py-1 font-semibold ${occ.regulated ? "bg-accent/15 text-accent-dark" : "bg-success/10 text-success"}`}>
            {occ.regulated ? "Profession réglementée — reconnaissance requise" : "Non réglementée"}
          </span>
          <span className="rounded-md bg-surface px-2 py-1 font-medium text-muted">
            Allemand : {occ.typicalLanguage}
          </span>
        </div>
      )}
      {occ?.note && <p className="mt-2 text-xs leading-relaxed text-muted">{occ.note}</p>}

      <div className="mt-5">
        <div className="text-sm font-semibold text-ink">
          Chercher un employeur {city.trim() ? `à ${city.trim()}` : "en Allemagne"}
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              rel="noopener noreferrer"
              target="_blank"
              className="group flex flex-col rounded-xl border border-border p-4 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-sm"
            >
              <div className="flex items-center gap-2">
                <span className="font-bold text-ink">{l.name}</span>
                {l.official && (
                  <span className="rounded bg-success/10 px-1.5 py-0.5 text-[11px] font-bold text-success">
                    Officiel
                  </span>
                )}
              </div>
              <span className="mt-1 text-xs leading-relaxed text-muted">{l.useFor}</span>
              <span className="mt-2 text-sm font-semibold text-primary group-hover:text-primary-dark">
                Ouvrir la recherche ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      <p className="mt-4 rounded-lg bg-primary/5 p-3 text-xs leading-relaxed text-ink">
        <strong>Pourquoi les petites villes ?</strong> La pénurie de main-d&apos;œuvre y est plus
        forte et les employeurs y sont souvent plus ouverts à recruter et parrainer un profil
        international. Ciblez un métier + une ville précise plutôt que « Ausbildung » au hasard.
      </p>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import type { ChancenkarteModel } from "@/lib/allemagne-types";

/**
 * Indicative Chancenkarte points estimator. Client-side, no data leaves the
 * device. It computes a points estimate from the official criteria; it is NOT a
 * legal eligibility decision — the final say belongs to the German authorities.
 */
export function ChancenkarteCalculator({ model }: { model: ChancenkarteModel }) {
  const [baseline, setBaseline] = useState<Record<string, boolean>>({});
  const [single, setSingle] = useState<Record<string, string>>({});
  const [multi, setMulti] = useState<Record<string, Set<string>>>({});

  const baselineOk = model.baseline.every((b) => baseline[b.id]);

  const points = useMemo(() => {
    let total = 0;
    for (const c of model.criteria) {
      if (c.mode === "single") {
        const chosen = c.options.find((o) => o.id === single[c.id]);
        if (chosen) total += chosen.points;
      } else {
        const set = multi[c.id];
        if (set) for (const o of c.options) if (set.has(o.id)) total += o.points;
      }
    }
    return total;
  }, [model, single, multi]);

  const pct = Math.min(100, Math.round((points / model.threshold) * 100));
  const eligible = baselineOk && points >= model.threshold;

  function toggleMulti(cid: string, oid: string) {
    setMulti((m) => {
      const set = new Set(m[cid] ?? []);
      if (set.has(oid)) set.delete(oid);
      else set.add(oid);
      return { ...m, [cid]: set };
    });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_20rem]">
      <div className="space-y-6">
        {/* Baseline gates */}
        <fieldset className="rounded-2xl border border-border bg-surface p-5">
          <legend className="px-1 text-sm font-bold text-ink">Conditions de base</legend>
          <p className="mb-3 text-sm text-muted">
            Ces conditions sont indispensables avant même de compter les points.
          </p>
          <div className="space-y-2.5">
            {model.baseline.map((b) => (
              <label key={b.id} className="flex cursor-pointer items-start gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={!!baseline[b.id]}
                  onChange={(e) => setBaseline((s) => ({ ...s, [b.id]: e.target.checked }))}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
                />
                <span className="text-ink">
                  {b.label}
                  {b.help && <span className="mt-0.5 block text-xs text-muted">{b.help}</span>}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Points criteria */}
        {model.criteria.map((c) => (
          <fieldset key={c.id} className="rounded-2xl border border-border bg-surface p-5">
            <legend className="px-1 text-sm font-bold text-ink">{c.label}</legend>
            {c.help && <p className="mb-3 text-xs text-muted">{c.help}</p>}
            <div className="space-y-2">
              {c.options.map((o) => {
                const checked =
                  c.mode === "single" ? single[c.id] === o.id : !!multi[c.id]?.has(o.id);
                return (
                  <label
                    key={o.id}
                    className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg border px-3 py-2.5 text-sm transition-colors ${
                      checked ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <input
                        type={c.mode === "single" ? "radio" : "checkbox"}
                        name={c.id}
                        checked={checked}
                        onChange={() =>
                          c.mode === "single"
                            ? setSingle((s) => ({ ...s, [c.id]: o.id }))
                            : toggleMulti(c.id, o.id)
                        }
                        className="h-4 w-4 shrink-0 accent-primary"
                      />
                      <span className="text-ink">
                        {o.label}
                        {o.hint && <span className="mt-0.5 block text-xs text-muted">{o.hint}</span>}
                      </span>
                    </span>
                    <span className="shrink-0 rounded-md bg-bg px-2 py-0.5 text-xs font-bold text-primary">
                      +{o.points}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      {/* Sticky result panel */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <div className="text-sm font-semibold text-muted">Votre estimation</div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-ink">{points}</span>
            <span className="text-lg font-semibold text-muted">/ {model.threshold} points</span>
          </div>
          <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-bg">
            <div
              className={`h-full rounded-full transition-all duration-500 ${eligible ? "bg-success" : "bg-primary"}`}
              style={{ width: `${pct}%` }}
            />
          </div>

          {!baselineOk && (
            <p className="mt-4 rounded-lg bg-accent/10 p-3 text-xs font-medium leading-relaxed text-ink">
              Cochez d&apos;abord les conditions de base : sans elles, les points ne suffisent pas.
            </p>
          )}
          {baselineOk && eligible && (
            <p className="mt-4 rounded-lg bg-success/10 p-3 text-sm font-semibold leading-relaxed text-success">
              Vous atteignez le seuil indicatif de {model.threshold} points. Vérifiez votre
              éligibilité exacte sur le portail officiel.
            </p>
          )}
          {baselineOk && !eligible && (
            <p className="mt-4 rounded-lg bg-bg p-3 text-sm leading-relaxed text-muted">
              Il vous manque {model.threshold - points} point(s). Renforcez votre allemand, votre
              expérience ou faites reconnaître votre diplôme pour en gagner.
            </p>
          )}

          <div className="mt-4 rounded-lg bg-primary/5 p-3 text-xs leading-relaxed text-ink">
            <strong>Raccourci :</strong> {model.fastTrack}
          </div>

          <a
            href={model.sourceUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
          >
            {model.sourceLabel} ↗
          </a>
          <p className="mt-3 text-[11px] leading-relaxed text-muted">
            Estimation indicative, à titre informatif uniquement — ce n&apos;est pas une décision
            d&apos;éligibilité. Seules les autorités allemandes tranchent. Dernière vérification :{" "}
            {model.lastVerified}.
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import type { CostModel, CostLine } from "@/lib/allemagne-types";

function amountLabel(a: CostLine["amountEUR"]): string {
  return Array.isArray(a) ? `${a[0].toLocaleString("fr")} – ${a[1].toLocaleString("fr")} €` : `${a.toLocaleString("fr")} €`;
}
function amountValue(a: CostLine["amountEUR"]): number {
  return Array.isArray(a) ? (a[0] + a[1]) / 2 : a;
}

/**
 * Indicative budget estimator for a move to Germany. Client-side, order-of-
 * magnitude figures from official/public sources — not a quote. Ranges are
 * averaged for the total; the total is shown as an approximate band.
 */
export function CostEstimator({ model }: { model: CostModel }) {
  const [off, setOff] = useState<Record<string, boolean>>({});
  const [months, setMonths] = useState(model.defaultMonths);

  const { oneTime, monthly } = useMemo(() => {
    let oneTime = 0;
    let monthly = 0;
    for (const l of model.lines) {
      if (l.optional && off[l.id]) continue;
      const v = amountValue(l.amountEUR);
      if (l.kind === "oneTime") oneTime += v;
      else monthly += v;
    }
    return { oneTime, monthly };
  }, [model, off]);

  const total = Math.round(oneTime + monthly * months);
  const band = Math.round(total * 0.15);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_20rem]">
      <div className="space-y-3">
        <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
          {model.lines.map((l) => {
            const disabled = l.optional && off[l.id];
            return (
              <li key={l.id} className="flex items-start justify-between gap-4 p-4">
                <div className="flex items-start gap-3">
                  {l.optional ? (
                    <input
                      type="checkbox"
                      checked={!disabled}
                      onChange={() => setOff((s) => ({ ...s, [l.id]: !s[l.id] }))}
                      className="mt-1 h-4 w-4 shrink-0 accent-primary"
                      aria-label={`Inclure : ${l.label}`}
                    />
                  ) : (
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  )}
                  <div className={disabled ? "opacity-40" : undefined}>
                    <div className="text-sm font-semibold text-ink">
                      {l.label}
                      <span className="ms-2 rounded bg-bg px-1.5 py-0.5 text-[11px] font-medium text-muted">
                        {l.kind === "monthly" ? "par mois" : "une fois"}
                      </span>
                    </div>
                    {l.note && <div className="mt-0.5 text-xs leading-relaxed text-muted">{l.note}</div>}
                  </div>
                </div>
                <div className={`shrink-0 text-sm font-bold text-ink ${disabled ? "opacity-40" : ""}`}>
                  {amountLabel(l.amountEUR)}
                </div>
              </li>
            );
          })}
        </ul>

        <label className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 text-sm">
          <span className="font-semibold text-ink">Durée de recherche estimée</span>
          <input
            type="range"
            min={1}
            max={12}
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="flex-1 accent-primary"
          />
          <span className="w-16 shrink-0 text-end font-bold text-primary">{months} mois</span>
        </label>
      </div>

      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <div className="text-sm font-semibold text-muted">Budget indicatif total</div>
          <div className="mt-1 text-3xl font-extrabold text-ink">
            ≈ {total.toLocaleString("fr")} €
          </div>
          <div className="mt-1 text-xs text-muted">
            fourchette ≈ {(total - band).toLocaleString("fr")} – {(total + band).toLocaleString("fr")} €
          </div>
          <dl className="mt-4 space-y-1.5 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted">Frais uniques</dt>
              <dd className="font-semibold text-ink">{Math.round(oneTime).toLocaleString("fr")} €</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Coût mensuel × {months}</dt>
              <dd className="font-semibold text-ink">{Math.round(monthly * months).toLocaleString("fr")} €</dd>
            </div>
          </dl>
          <p className="mt-4 text-[11px] leading-relaxed text-muted">
            Estimation d&apos;ordre de grandeur en euros, à titre informatif — pas un devis. Les
            montants réels dépendent de votre situation et des barèmes en vigueur. Dernière
            vérification : {model.lastVerified}.
          </p>
        </div>
      </div>
    </div>
  );
}

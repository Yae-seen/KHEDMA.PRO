import Link from "next/link";
import { STATUS_LABELS, type Concours, type ConcoursStatus } from "@/lib/concours-data";

const STATUS_STYLES: Record<ConcoursStatus, string> = {
  ouvert: "bg-success/10 text-success",
  "a-venir": "bg-primary/10 text-primary",
  cloture: "bg-border/60 text-muted",
  "annonce-attendue": "bg-accent/15 text-accent-dark",
};

export function StatusBadge({ status }: { status: ConcoursStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${STATUS_STYLES[status]}`}
    >
      {status === "ouvert" && (
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-success" />
      )}
      {STATUS_LABELS[status]}
    </span>
  );
}

export function ConcoursCard({ concours }: { concours: Concours }) {
  return (
    <Link
      href={`/concours/${concours.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="text-base font-bold text-ink">{concours.shortTitle}</div>
        <StatusBadge status={concours.status} />
      </div>
      <div className="mt-1 text-sm text-muted" lang="ar" dir="rtl">
        {concours.titleAr}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{concours.statusNote}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {concours.niveaux.map((niveau) => (
          <span
            key={niveau}
            className="rounded-md bg-bg px-2 py-0.5 text-xs font-medium text-muted"
          >
            {niveau}
          </span>
        ))}
      </div>
      {concours.deadline && (
        <div className="mt-3 text-xs font-semibold text-ink">
          Date limite : {concours.deadline}
        </div>
      )}
      <span className="mt-4 text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark">
        Voir le guide complet →
      </span>
    </Link>
  );
}

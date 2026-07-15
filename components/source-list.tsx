import type { SourceRef } from "@/lib/content-types";

export function SourceList({ sources }: { sources: SourceRef[] }) {
  if (sources.length === 0) return null;
  return (
    <section className="mt-14 rounded-2xl border border-border bg-surface p-6">
      <h2 className="text-sm font-bold uppercase tracking-wide text-muted">Sources</h2>
      <ul className="mt-3 space-y-2">
        {sources.map((source) => (
          <li key={source.url} className="flex flex-wrap items-center gap-2 text-sm">
            <a
              href={source.url}
              rel="noopener noreferrer"
              target="_blank"
              className="font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
            >
              {source.label}
            </a>
            {source.official && (
              <span className="rounded-md bg-success/10 px-1.5 py-0.5 text-xs font-bold text-success">
                Officiel
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

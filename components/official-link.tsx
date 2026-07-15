/**
 * Explicit outbound CTA to an official portal. The label must always name the
 * official destination — never an ambiguous "Postuler" / "Commencer".
 */
export function OfficialLink({
  label,
  href,
  description,
}: {
  label: string;
  href: string;
  description?: string;
}) {
  return (
    <div className="mt-10 rounded-2xl border-2 border-primary/25 bg-primary/5 p-6">
      <div className="text-xs font-bold uppercase tracking-wide text-primary">Canal officiel</div>
      {description && <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>}
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary-dark"
      >
        {label}
        <span aria-hidden="true">↗</span>
      </a>
      <p className="mt-3 text-xs text-muted">
        Lien externe vers le site officiel — Khedma Pro est un guide indépendant, non affilié à
        l&apos;administration.
      </p>
    </div>
  );
}

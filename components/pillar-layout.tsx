export function PillarLayout({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-5xl px-5 py-14 sm:px-8 lg:py-20">
          <div className="text-sm font-bold uppercase tracking-wide text-primary">{eyebrow}</div>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-5xl px-5 py-14 sm:px-8">{children}</section>
    </>
  );
}

export function ComingSoon({ items, note }: { items: string[]; note?: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent-dark">
        En construction
      </div>
      <p className="mt-4 text-sm font-semibold text-ink">Ce qui arrive dans cette section :</p>
      <ul className="mt-3 space-y-2.5">
        {items.map((it) => (
          <li key={it} className="flex gap-2.5 text-sm leading-relaxed text-muted">
            <span className="mt-0.5 shrink-0 font-bold text-primary">✓</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
      {note && <p className="mt-6 rounded-xl bg-bg p-4 text-sm leading-relaxed text-ink">{note}</p>}
    </div>
  );
}

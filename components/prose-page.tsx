import { Breadcrumb } from "@/components/breadcrumb";

/** Simple centered prose scaffold for trust/legal pages. */
export function ProsePage({
  title,
  lead,
  crumbLabel,
  crumbHref,
  updated,
  children,
}: {
  title: string;
  lead?: string;
  crumbLabel: string;
  crumbHref: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8">
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: crumbLabel, href: crumbHref }]} />
          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          {lead && <p className="mt-3 text-lg leading-relaxed text-muted">{lead}</p>}
        </div>
      </section>
      <section className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8">
        <div className="space-y-4">{children}</div>
        {updated && (
          <p className="mt-10 text-xs font-medium text-muted">
            Dernière mise à jour :{" "}
            <time dateTime={updated} className="font-semibold text-ink">
              {updated}
            </time>
          </p>
        )}
      </section>
    </>
  );
}

export function ProseH2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-8 text-xl font-bold tracking-tight text-ink">{children}</h2>;
}

export function ProseP({ children }: { children: React.ReactNode }) {
  return <p className="leading-relaxed text-muted">{children}</p>;
}

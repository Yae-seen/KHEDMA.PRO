import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getJobById } from "@/lib/jobs";
import { Breadcrumb } from "@/components/breadcrumb";
import { SaveJobButton } from "@/components/save-job-button";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const job = await getJobById(id);
  if (!job) return { title: "Offre" };
  return {
    title: `${job.title} — ${job.company}`,
    description: (job.description ?? `${job.title} chez ${job.company}`).slice(0, 155),
    alternates: { canonical: `/emploi/offres/${id}` },
  };
}

export default async function OffreDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = await getJobById(id);
  if (!job) notFound();

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-3xl px-5 py-10 sm:px-8">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Emploi", href: "/emploi" },
              { label: "Offres", href: "/emploi/offres" },
              { label: job.title, href: `/emploi/offres/${id}` },
            ]}
          />
          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {job.title}
          </h1>
          <div className="mt-2 text-lg font-semibold text-primary">{job.company}</div>
          <div className="mt-3 flex flex-wrap gap-1.5 text-xs">
            {job.city && <span className="rounded-md bg-bg px-2 py-0.5 font-medium text-muted">{job.city}</span>}
            {job.sector && <span className="rounded-md bg-bg px-2 py-0.5 font-medium text-muted">{job.sector}</span>}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {job.apply_url && (
              <a
                href={job.apply_url}
                rel="noopener noreferrer"
                target="_blank"
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
              >
                Postuler ↗
              </a>
            )}
            <SaveJobButton jobId={job.id} />
          </div>
        </div>
      </section>

      <article className="mx-auto w-full max-w-3xl px-5 py-10 sm:px-8">
        {job.description ? (
          <div className="whitespace-pre-line leading-relaxed text-muted">{job.description}</div>
        ) : (
          <p className="text-muted">Consultez le lien de candidature pour le détail de l&apos;offre.</p>
        )}
        <aside className="mt-8 rounded-xl border border-accent/40 bg-accent/10 p-4 text-sm leading-relaxed text-ink">
          Aucune offre légitime ne demande de paiement. Si un « recruteur » vous réclame de
          l&apos;argent ou vos mots de passe, c&apos;est une arnaque.
        </aside>
        {job.source && <p className="mt-4 text-xs text-muted">Source : {job.source}</p>}
      </article>
    </>
  );
}

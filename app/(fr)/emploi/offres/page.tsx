import type { Metadata } from "next";
import Link from "next/link";
import { getJobFacets, getPublishedJobs } from "@/lib/jobs";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { Breadcrumb } from "@/components/breadcrumb";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Offres d'emploi vérifiées au Maroc",
  description:
    "Des offres d'emploi vérifiées au Maroc, par ville et par secteur. Aucune offre ne demande de paiement — postulez en confiance.",
  alternates: { canonical: "/emploi/offres" },
};

export default async function OffresPage({
  searchParams,
}: {
  searchParams: Promise<{ ville?: string; secteur?: string; q?: string }>;
}) {
  const sp = await searchParams;
  const [jobs, facets] = await Promise.all([
    getPublishedJobs({ city: sp.ville, sector: sp.secteur, q: sp.q }),
    getJobFacets(),
  ]);

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Emploi", href: "/emploi" },
              { label: "Offres", href: "/emploi/offres" },
            ]}
          />
          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Offres d&apos;emploi vérifiées
          </h1>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
            Des offres vérifiées avant publication. Aucune ne demande de paiement — si on vous
            réclame de l&apos;argent, c&apos;est une arnaque.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8">
        {!isSupabaseConfigured ? (
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h2 className="text-xl font-bold text-ink">Le tableau des offres arrive</h2>
            <p className="mt-2 max-w-2xl leading-relaxed text-muted">
              Notre tableau d&apos;offres vérifiées est en cours d&apos;activation. En attendant,
              consultez les offres publiques officielles et préparez votre candidature.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://www.anapec.org"
                rel="noopener noreferrer"
                target="_blank"
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
              >
                Offres ANAPEC ↗
              </a>
              <Link
                href="/cv"
                className="rounded-xl border border-border px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:border-primary"
              >
                Créer mon CV
              </Link>
            </div>
          </div>
        ) : (
          <>
            {(facets.cities.length > 0 || facets.sectors.length > 0) && (
              <form className="mb-8 flex flex-wrap items-end gap-3 rounded-2xl border border-border bg-surface p-4">
                <label className="text-sm">
                  <span className="block text-xs font-semibold text-muted">Recherche</span>
                  <input
                    name="q"
                    defaultValue={sp.q}
                    placeholder="Intitulé du poste"
                    className="mt-1 rounded-lg border border-border bg-bg px-3 py-2 text-sm text-ink outline-none focus:border-primary"
                  />
                </label>
                <label className="text-sm">
                  <span className="block text-xs font-semibold text-muted">Ville</span>
                  <select name="ville" defaultValue={sp.ville ?? ""} className="mt-1 rounded-lg border border-border bg-bg px-3 py-2 text-sm text-ink outline-none focus:border-primary">
                    <option value="">Toutes</option>
                    {facets.cities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="text-sm">
                  <span className="block text-xs font-semibold text-muted">Secteur</span>
                  <select name="secteur" defaultValue={sp.secteur ?? ""} className="mt-1 rounded-lg border border-border bg-bg px-3 py-2 text-sm text-ink outline-none focus:border-primary">
                    <option value="">Tous</option>
                    {facets.sectors.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>
                <button className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary-dark">
                  Filtrer
                </button>
              </form>
            )}

            {jobs.length === 0 ? (
              <p className="rounded-2xl border border-border bg-surface p-6 text-muted">
                Aucune offre ne correspond pour le moment. Revenez bientôt ou élargissez votre recherche.
              </p>
            ) : (
              <ul className="grid gap-4 md:grid-cols-2">
                {jobs.map((job) => (
                  <li key={job.id}>
                    <Link
                      href={`/emploi/offres/${job.id}`}
                      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
                    >
                      <div className="font-bold text-ink">{job.title}</div>
                      <div className="mt-0.5 text-sm font-semibold text-primary">{job.company}</div>
                      <div className="mt-2 flex flex-wrap gap-1.5 text-xs">
                        {job.city && <span className="rounded-md bg-bg px-2 py-0.5 font-medium text-muted">{job.city}</span>}
                        {job.sector && <span className="rounded-md bg-bg px-2 py-0.5 font-medium text-muted">{job.sector}</span>}
                      </div>
                      <span className="mt-4 text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark">
                        Voir l&apos;offre →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CITY_EMPLOI, getCityEmploi } from "@/lib/city-emploi-data";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/structured-data";
import { Breadcrumb } from "@/components/breadcrumb";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { LastVerified } from "@/components/last-verified";

const LAST_VERIFIED = "2026-07-16";

export function generateStaticParams() {
  return CITY_EMPLOI.map((c) => ({ ville: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ville: string }>;
}): Promise<Metadata> {
  const { ville } = await params;
  const c = getCityEmploi(ville);
  if (!c) return {};
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `/emploi/villes/${c.slug}`,
      languages: { fr: `/emploi/villes/${c.slug}`, ar: `/ar/emploi/villes/${c.slug}` },
    },
  };
}

export default async function CityEmploiPage({
  params,
}: {
  params: Promise<{ ville: string }>;
}) {
  const { ville } = await params;
  const c = getCityEmploi(ville);
  if (!c) notFound();

  const others = CITY_EMPLOI.filter((x) => x.slug !== c.slug).slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { label: "Accueil", href: "/" },
            { label: "Emploi", href: "/emploi" },
            { label: "Par ville", href: "/emploi/villes" },
            { label: c.name, href: `/emploi/villes/${c.slug}` },
          ]),
          buildFaqJsonLd(c.faq),
        ]}
      />

      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Emploi", href: "/emploi" },
              { label: "Par ville", href: "/emploi/villes" },
              { label: c.name, href: `/emploi/villes/${c.slug}` },
            ]}
          />
          <div className="mt-6 text-sm font-bold uppercase tracking-wide text-primary">
            Emploi — {c.name}
          </div>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Trouver un emploi à {c.name}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">{c.intro}</p>
        </div>
      </section>

      <article className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-ink">Secteurs qui recrutent à {c.name}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {c.sectors.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-surface p-4">
              <span className="font-bold text-ink">{s.label}</span>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.note}</p>
            </div>
          ))}
        </div>

        {c.employers.length > 0 && (
          <>
            <h2 className="mt-12 text-2xl font-bold tracking-tight text-ink">
              Grands employeurs & zones d&apos;activité
            </h2>
            <p className="mt-2 text-muted">
              Des repères concrets pour orienter votre recherche à {c.name} (zones industrielles,
              parcs d&apos;offshoring et grands recruteurs).
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {c.employers.map((e) => (
                <span
                  key={e}
                  className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-ink"
                >
                  {e}
                </span>
              ))}
            </div>
          </>
        )}

        <h2 className="mt-12 text-2xl font-bold tracking-tight text-ink">Où chercher à {c.name}</h2>
        <p className="mt-2 leading-relaxed text-muted">{c.whereToLook}</p>

        <div className="mt-6 rounded-2xl border border-border bg-surface p-6">
          <h3 className="text-base font-bold text-ink">Postuler sans se faire arnaquer</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Aucun employeur ni intermédiaire sérieux ne demande de payer pour un poste. Passez par les
            canaux officiels — l&apos;ANAPEC pour le privé, emploi-public.ma pour les concours publics —
            et préparez un bon CV.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
            <Link href="/blog/anapec-inscription-espace-candidat" className="text-sm font-semibold text-primary hover:text-primary-dark">
              Guide ANAPEC →
            </Link>
            <Link href="/blog/emploi-public-ma-portail" className="text-sm font-semibold text-primary hover:text-primary-dark">
              Portail emploi public →
            </Link>
            <Link href="/cv" className="text-sm font-semibold text-primary hover:text-primary-dark">
              Créer mon CV →
            </Link>
          </div>
        </div>

        <FaqSection items={c.faq} />

        <section className="mt-14">
          <h2 className="text-xl font-bold tracking-tight text-ink">Emploi dans d&apos;autres villes</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/emploi/villes/${o.slug}`}
                className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-semibold text-primary transition-colors hover:border-primary"
              >
                {o.name}
              </Link>
            ))}
          </div>
        </section>

        <LastVerified date={LAST_VERIFIED} />
      </article>
    </>
  );
}

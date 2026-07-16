import type { Metadata } from "next";
import Link from "next/link";
import { CITY_EMPLOI } from "@/lib/city-emploi-data";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Emploi par ville au Maroc : où chercher dans chaque grande ville",
  description:
    "Le marché de l'emploi ville par ville au Maroc : secteurs qui recrutent, grands employeurs et zones d'activité à Casablanca, Rabat, Tanger, Fès, Agadir et plus.",
  alternates: {
    canonical: "/emploi/villes",
    languages: { fr: "/emploi/villes", ar: "/ar/emploi/villes" },
  },
};

export default function VillesIndexPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { label: "Accueil", href: "/" },
          { label: "Emploi", href: "/emploi" },
          { label: "Par ville", href: "/emploi/villes" },
        ])}
      />

      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Emploi", href: "/emploi" },
              { label: "Par ville", href: "/emploi/villes" },
            ]}
          />
          <h1 className="mt-6 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Emploi par ville au Maroc
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Chaque ville a son propre marché de l&apos;emploi : les secteurs, les grands employeurs et
            les zones d&apos;activité ne sont pas les mêmes à Casablanca, à Tanger ou à Agadir. Choisissez
            votre ville pour cibler votre recherche.
          </p>
          <Link
            href="/blog/chercher-emploi-par-ville-maroc"
            className="mt-6 inline-block text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Lire le guide : chercher un emploi par ville →
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CITY_EMPLOI.map((c) => (
            <Link
              key={c.slug}
              href={`/emploi/villes/${c.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
            >
              <div className="text-lg font-bold text-ink">
                Emploi à {c.name}
                <span className="ms-2 text-sm font-medium text-muted" lang="ar" dir="rtl">
                  {c.nameAr}
                </span>
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{c.intro}</p>
              <span className="mt-3 text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark">
                Voir les secteurs →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

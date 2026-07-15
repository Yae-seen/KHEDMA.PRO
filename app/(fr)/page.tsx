import type { Metadata } from "next";
import Link from "next/link";
import { PILLARS } from "@/lib/site-config";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { fr: "/", ar: "/ar" },
  },
};

const TRUST = ["100% Gratuit", "Offres vérifiées", "Sans arnaque"];

const VALUES: [string, string][] = [
  [
    "Vérifié, sans arnaques",
    "Chaque offre et chaque concours est vérifié. Nous ne demandons jamais de frais ni votre mot de passe.",
  ],
  [
    "Adapté au Maroc",
    "CV au format marocain, dates de concours réelles, et les vrais métiers qui recrutent en Allemagne.",
  ],
  [
    "Du bac à l'emploi",
    "Un pont entre vos études et votre carrière, dans le prolongement de l'écosystème éducatif marocain.",
  ],
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-night text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(60% 60% at 15% 0%, rgba(99,102,241,0.38), transparent 60%)" }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
            Pour les jeunes Marocains
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Lancez votre carrière. <span className="text-accent">Au Maroc ou en Allemagne.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            Concours de la fonction publique, offres d&apos;emploi vérifiées, et votre parcours réel vers
            l&apos;Allemagne — le tout en un seul endroit, sans arnaques.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/concours"
              className="rounded-xl bg-accent px-6 py-3 text-sm font-bold text-night shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Voir les concours ouverts
            </Link>
            <Link
              href="/allemagne"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Voie vers l&apos;Allemagne →
            </Link>
          </div>
          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-white/70">
            {TRUST.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Tout votre parcours, au même endroit</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Trois piliers pensés pour les jeunes Marocains : le secteur public, l&apos;emploi privé, et l&apos;international.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <Link
              key={p.key}
              href={p.href}
              className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-md"
            >
              <div className="text-xs font-bold uppercase tracking-wide text-primary">{p.tagline}</div>
              <div className="mt-3 text-xl font-bold text-ink">{p.label}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark">
                Explorer →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Value props */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 sm:grid-cols-3 sm:px-8">
          {VALUES.map(([t, d]) => (
            <div key={t}>
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-lg font-bold text-primary">✓</div>
              <h3 className="mt-4 font-bold text-ink">{t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-6xl px-5 py-20 text-center sm:px-8">
        <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl">
          Prêt à passer à l&apos;étape suivante ?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted">
          Explorez les concours ouverts, les offres vérifiées, et votre parcours vers l&apos;Allemagne.
        </p>
        <Link
          href="/concours"
          className="mt-7 inline-flex rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-primary-dark"
        >
          Explorer les concours
        </Link>
      </section>
    </>
  );
}

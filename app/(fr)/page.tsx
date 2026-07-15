import type { Metadata } from "next";
import Link from "next/link";
import { PILLARS } from "@/lib/site-config";
import { CONCOURS } from "@/lib/concours-data";
import { ARTICLES } from "@/lib/articles";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { fr: "/", ar: "/ar" },
  },
};

const VALUES: [string, string][] = [
  [
    "Vérifié, sans arnaques",
    "Chaque offre et chaque concours est vérifié sur une source officielle. Nous ne demandons jamais de frais ni votre mot de passe.",
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

const STEP_LABELS = ["Étape 01", "Étape 02", "Étape 03"];

export default function HomePage() {
  return (
    <>
      {/* Hero — premium ink-navy with Majorelle/saffron atmosphere */}
      <section className="relative overflow-hidden bg-night text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 dot-grid opacity-60" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(48% 55% at 12% 8%, rgba(74,63,212,0.55), transparent 60%), radial-gradient(40% 45% at 92% 20%, rgba(245,158,11,0.22), transparent 60%)",
          }}
        />
        <div
          aria-hidden="true"
          className="float-slow pointer-events-none absolute -right-16 top-24 h-64 w-64 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.6), transparent 70%)" }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Pour les jeunes Marocains
          </span>
          <h1 className="mt-6 max-w-4xl text-[2.7rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Lancez votre carrière.
            <br />
            <span className="gradient-ink">Au Maroc ou en Allemagne.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Concours de la fonction publique, offres d&apos;emploi vérifiées, et votre parcours réel
            vers l&apos;Allemagne — le tout en un seul endroit, sans arnaques.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/concours"
              className="group rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-night shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Voir les concours ouverts
              <span className="ms-1.5 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/allemagne"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Voie vers l&apos;Allemagne
            </Link>
          </div>

          {/* Honest live stats — not a generic KPI row: they anchor the offer */}
          <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-6">
            <div>
              <dt className="text-3xl font-extrabold text-white sm:text-4xl">
                <CountUp value={CONCOURS.length} />
              </dt>
              <dd className="mt-1 text-sm text-white/60">concours suivis</dd>
            </div>
            <div>
              <dt className="text-3xl font-extrabold text-white sm:text-4xl">
                <CountUp value={ARTICLES.length} suffix="+" />
              </dt>
              <dd className="mt-1 text-sm text-white/60">guides pratiques</dd>
            </div>
            <div>
              <dt className="text-3xl font-extrabold text-white sm:text-4xl">
                <CountUp value={3} />
              </dt>
              <dd className="mt-1 text-sm text-white/60">outils gratuits</dd>
            </div>
            <div>
              <dt className="text-3xl font-extrabold text-accent sm:text-4xl">0 DH</dt>
              <dd className="mt-1 text-sm text-white/60">toujours gratuit</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Signature — the career track: three stops on one line */}
      <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <div className="text-sm font-bold uppercase tracking-widest text-primary">Votre parcours</div>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Une seule voie, trois étapes claires
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted">
            Du secteur public à l&apos;international, chaque étape a ses guides et ses outils. Avancez à
            votre rythme.
          </p>
        </Reveal>

        <div className="relative mt-14">
          {/* the track line behind the stops (desktop) */}
          <div
            aria-hidden="true"
            className="track-line absolute inset-x-6 top-6 hidden md:block"
          />
          <ol className="grid gap-8 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal as="li" key={p.key} delay={i * 120} className="relative">
                <Link href={p.href} className="group block">
                  <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border-4 border-bg bg-primary text-base font-black text-white shadow-lift transition-transform group-hover:scale-110">
                    {i + 1}
                  </span>
                  <div className="mt-5 rounded-2xl border border-border bg-surface p-6 shadow-soft transition-all group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-lift">
                    <div className="text-xs font-bold uppercase tracking-widest text-accent-dark">
                      {STEP_LABELS[i]}
                    </div>
                    <div className="mt-2 text-xl font-extrabold text-ink">{p.label}</div>
                    <div className="mt-0.5 text-sm font-semibold text-primary">{p.tagline}</div>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary transition-colors group-hover:text-primary-dark">
                      Explorer
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Value props */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 sm:grid-cols-3 sm:px-8">
          {VALUES.map(([t, d], i) => (
            <Reveal key={t} delay={i * 100}>
              <div className="track-line w-10" />
              <h3 className="mt-4 text-lg font-extrabold text-ink">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl bg-night px-6 py-16 text-center text-white sm:px-10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 dot-grid opacity-50" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(50% 80% at 50% 0%, rgba(74,63,212,0.5), transparent 70%)" }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Prêt à passer à l&apos;étape suivante ?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-white/70">
              Explorez les concours ouverts, les offres vérifiées, et votre parcours vers
              l&apos;Allemagne.
            </p>
            <Link
              href="/concours"
              className="mt-8 inline-flex rounded-xl bg-accent px-7 py-3.5 text-sm font-bold text-night shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Commencer gratuitement
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

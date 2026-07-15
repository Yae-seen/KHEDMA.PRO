import type { Metadata } from "next";
import Link from "next/link";
import {
  CHANCENKARTE_MODEL,
  COST_MODEL,
  OCCUPATIONS,
  DE_CITIES,
  CHANNELS,
  ALLEMAGNE_LAST_VERIFIED,
} from "@/lib/allemagne-data";
import { ARTICLES } from "@/lib/articles";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/structured-data";
import { Breadcrumb } from "@/components/breadcrumb";
import { ChancenkarteCalculator } from "@/components/chancenkarte-calculator";
import { CostEstimator } from "@/components/cost-estimator";
import { EmployerFinder } from "@/components/employer-finder";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { LastVerified } from "@/components/last-verified";
import { OfficialLink } from "@/components/official-link";

export const metadata: Metadata = {
  title: "Travailler en Allemagne depuis le Maroc : Chancenkarte, métiers, coûts",
  description:
    "Votre parcours réel vers l'Allemagne : testez votre éligibilité à la Chancenkarte, trouvez un employeur par métier et par ville, et estimez votre budget. Sans promesses vides.",
  alternates: { canonical: "/allemagne" },
};

const ALLEMAGNE_FAQ = [
  {
    question: "Qu'est-ce que la Chancenkarte (carte d'opportunité) ?",
    answer:
      "C'est un titre de séjour allemand à points qui permet de venir en Allemagne pour **chercher un emploi** qualifié, sans avoir déjà un contrat. Elle s'obtient soit par la reconnaissance complète de votre diplôme, soit en réunissant assez de points (qualification, allemand, expérience, âge…).",
  },
  {
    question: "Faut-il parler allemand pour partir ?",
    answer:
      "Cela dépend du métier. Pour les professions réglementées comme les soins (Pflege), un niveau d'allemand (souvent B2) et la reconnaissance du diplôme sont exigés. Pour d'autres métiers, un niveau plus modeste peut suffire au départ — mais l'allemand reste déterminant pour être recruté et intégré.",
  },
  {
    question: "Pourquoi cibler les petites villes allemandes ?",
    answer:
      "Parce que la pénurie de main-d'œuvre y est plus forte et que les employeurs y sont souvent plus ouverts à recruter et parrainer un profil étranger. On cherche donc un **métier + une ville précise** plutôt que « Ausbildung » au hasard.",
  },
  {
    question: "Ces outils remplacent-ils une démarche officielle ?",
    answer:
      "Non. Nos outils sont **indicatifs** : ils vous aident à vous situer et à préparer votre projet. Seules les autorités allemandes (et la mission diplomatique au Maroc) décident de votre éligibilité et de votre visa.",
  },
  {
    question: "Quelle différence entre Ausbildung et Chancenkarte ?",
    answer:
      "L'**Ausbildung** est une formation professionnelle rémunérée : il faut déjà un contrat avec une entreprise. La **Chancenkarte** sert à venir chercher un emploi qualifié sur place. Les deux sont des voies distinctes vers l'Allemagne.",
  },
];

export default function AllemagnePage() {
  const guides = ARTICLES.filter((a) => a.category === "Allemagne");

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { label: "Accueil", href: "/" },
            { label: "Allemagne", href: "/allemagne" },
          ]),
          buildFaqJsonLd(ALLEMAGNE_FAQ),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-night text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(60% 60% at 85% 0%, rgba(245,158,11,0.28), transparent 60%)" }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Allemagne", href: "/allemagne" },
            ]}
          />
          <div className="mt-6 text-sm font-bold uppercase tracking-wide text-accent">
            Maroc → Allemagne — ألمانيا
          </div>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            Votre voie réelle vers l&apos;Allemagne, sans promesses vides
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
            Pas de discours abstrait sur « l&apos;Ausbildung ». Testez votre éligibilité à la
            Chancenkarte, trouvez un employeur par métier et par ville, et chiffrez votre budget —
            avec des outils concrets et des sources officielles.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#chancenkarte"
              className="rounded-xl bg-accent px-6 py-3 text-sm font-bold text-night shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Tester mon éligibilité
            </a>
            <a
              href="#employeurs"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Trouver un employeur →
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        {/* Chancenkarte calculator */}
        <section id="chancenkarte" className="scroll-mt-20">
          <h2 className="text-2xl font-bold tracking-tight text-ink">
            Calculateur d&apos;éligibilité — Chancenkarte
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            Estimez vos points pour la carte d&apos;opportunité allemande. Cochez ce qui vous
            correspond ; le résultat est indicatif.
          </p>
          <div className="mt-6">
            <ChancenkarteCalculator model={CHANCENKARTE_MODEL} />
          </div>
        </section>

        {/* Employer finder */}
        <section id="employeurs" className="mt-16 scroll-mt-20">
          <h2 className="text-2xl font-bold tracking-tight text-ink">
            Trouver un employeur — métier × ville
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            Choisissez votre métier et une ville allemande : on vous ouvre la recherche pré-remplie
            sur les portails officiels de l&apos;emploi.
          </p>
          <div className="mt-6">
            <EmployerFinder occupations={OCCUPATIONS} cities={DE_CITIES} channels={CHANNELS} />
          </div>
        </section>

        {/* Cost estimator */}
        <section id="budget" className="mt-16 scroll-mt-20">
          <h2 className="text-2xl font-bold tracking-tight text-ink">Estimer mon budget de départ</h2>
          <p className="mt-2 max-w-2xl text-muted">
            Le vrai coût d&apos;un départ vers l&apos;Allemagne, ligne par ligne. Décochez ce qui ne
            vous concerne pas.
          </p>
          <div className="mt-6">
            <CostEstimator model={COST_MODEL} />
          </div>
        </section>

        {/* Official portals */}
        <OfficialLink
          label="Ouvrir le portail officiel Make it in Germany"
          href={CHANCENKARTE_MODEL.sourceUrl}
          description="Le portail officiel du gouvernement allemand pour les travailleurs qualifiés (disponible en français) : conditions à jour, recherche d'emploi et démarches de visa."
        />

        {/* Ecosystem link to Massar */}
        <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-bold text-ink">Vous venez de terminer vos études ?</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Si vous préparez encore votre baccalauréat ou votre orientation, notre site partenaire{" "}
            <a
              href="https://massar-service.net"
              rel="noopener noreferrer"
              target="_blank"
              className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
            >
              massar-service.net
            </a>{" "}
            vous accompagne côté études — de quoi construire, dès maintenant, le diplôme qui ouvrira
            votre projet allemand.
          </p>
        </div>

        {guides.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight text-ink">Guides Allemagne</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {guides.map((a) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="group rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
                >
                  <div className="text-xs font-bold uppercase tracking-wide text-primary">{a.category}</div>
                  <div className="mt-2 font-bold leading-snug text-ink">{a.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{a.description}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark">
                    Lire le guide →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <FaqSection items={ALLEMAGNE_FAQ} />
        <LastVerified date={ALLEMAGNE_LAST_VERIFIED} />
      </div>
    </>
  );
}

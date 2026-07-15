import type { Metadata } from "next";
import Link from "next/link";
import { JOB_CHANNELS, SECTORS, CITIES } from "@/lib/emploi-data";
import { ARTICLES } from "@/lib/articles";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/structured-data";
import { Breadcrumb } from "@/components/breadcrumb";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { LastVerified } from "@/components/last-verified";

export const metadata: Metadata = {
  title: "Emploi au Maroc : emploi public, secteur privé, CV — le guide",
  description:
    "Trouver un emploi au Maroc : où chercher (emploi public, ANAPEC, secteur privé), par secteur et par ville, éviter les arnaques, et créer un CV gratuit. Guide complet.",
  alternates: { canonical: "/emploi" },
};

const EMPLOI_FAQ = [
  {
    question: "Où chercher un emploi public au Maroc ?",
    answer:
      "Les emplois de la fonction publique se décrochent par concours, publiés sur le portail officiel **emploi-public.ma** et sur les sites des administrations. Consultez notre [hub Concours](/concours) pour les guides par ministère.",
  },
  {
    question: "Quelle est la différence entre emploi public et emploi contractuel ?",
    answer:
      "L'emploi public « statutaire » s'obtient par concours et offre un poste stable dans un grade. Le recrutement par contrat (contractuels) et le secteur privé passent plutôt par des candidatures directes et l'ANAPEC. Les deux voies coexistent, y compris dans la santé et l'enseignement.",
  },
  {
    question: "Comment reconnaître une offre d'emploi fiable ?",
    answer:
      "Une offre fiable ne demande jamais de paiement ni d'avance pour « garantir » un poste, et renvoie à un canal officiel ou à un employeur identifiable. Méfiez-vous des messages privés et des pages qui réclament de l'argent — voyez notre guide [anti-arnaque](/blog/concours-arnaques-comment-les-eviter).",
  },
  {
    question: "Ai-je besoin d'un CV particulier pour le Maroc ?",
    answer:
      "Un CV clair d'une page, en français (parfois en arabe), suffit pour la plupart des candidatures. Utilisez notre [CV Builder gratuit](/cv) pour en créer un au format marocain et l'enregistrer en PDF.",
  },
  {
    question: "L'inscription à l'ANAPEC est-elle payante ?",
    answer:
      "Non. L'ANAPEC est l'agence publique pour l'emploi ; l'inscription et l'accompagnement sont gratuits. Comme pour les concours, aucune démarche officielle d'emploi ne se paie.",
  },
];

export default function EmploiPage() {
  const emploiGuides = ARTICLES.filter((a) => a.category === "Emploi");

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { label: "Accueil", href: "/" },
            { label: "Emploi", href: "/emploi" },
          ]),
          buildFaqJsonLd(EMPLOI_FAQ),
        ]}
      />

      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Emploi", href: "/emploi" }]} />
          <div className="mt-6 text-sm font-bold uppercase tracking-wide text-primary">
            Emploi & carrière — الشغل والوظيفة
          </div>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Trouver un emploi au Maroc, sans se faire arnaquer
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Où chercher vraiment — emploi public, secteur privé, ANAPEC — par secteur et par ville,
            avec un CV prêt en quelques minutes. On vous oriente vers les canaux fiables, jamais vers
            un intermédiaire payant.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/emploi/offres"
              className="rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              Voir les offres vérifiées
            </Link>
            <Link
              href="/cv"
              className="rounded-xl border border-border px-6 py-3 text-sm font-bold text-ink transition-colors hover:border-primary"
            >
              Créer mon CV gratuitement
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        {/* Where to look */}
        <h2 className="text-2xl font-bold tracking-tight text-ink">Où chercher un emploi fiable</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Commencez par les canaux officiels et vérifiés. Ils ne demandent jamais de paiement.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {JOB_CHANNELS.map((c) => (
            <div key={c.name} className="flex flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="font-bold text-ink">{c.name}</span>
                {c.official && (
                  <span className="rounded-md bg-success/10 px-1.5 py-0.5 text-xs font-bold text-success">
                    Officiel
                  </span>
                )}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary">{c.scope}</div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{c.description}</p>
              <a
                href={c.href}
                rel="noopener noreferrer"
                target="_blank"
                className="mt-3 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Visiter ↗
              </a>
            </div>
          ))}
        </div>

        {/* Two tracks */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-lg font-bold text-ink">Emploi public (par concours)</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Poste stable, recruté par concours au mérite : police, gendarmerie, douane, enseignement,
              santé, administrations. C&apos;est la voie de la fonction publique.
            </p>
            <Link href="/concours" className="mt-3 inline-block text-sm font-semibold text-primary hover:text-primary-dark">
              Explorer les concours publics →
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-lg font-bold text-ink">Secteur privé & contractuel</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Candidatures directes, ANAPEC, et recrutements par contrat (y compris dans le public).
              Un bon CV et une bonne préparation font la différence.
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
              <Link
                href="/blog/anapec-inscription-espace-candidat"
                className="inline-block text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Guide ANAPEC →
              </Link>
              <Link href="/cv" className="inline-block text-sm font-semibold text-primary hover:text-primary-dark">
                Préparer mon CV →
              </Link>
            </div>
          </div>
        </div>

        {/* Sectors */}
        <h2 className="mt-14 text-2xl font-bold tracking-tight text-ink">Par secteur</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((s) => (
            <div key={s.key} className="rounded-xl border border-border bg-surface p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-ink">{s.label}</span>
                <span className="text-sm text-muted" lang="ar" dir="rtl">
                  {s.labelAr}
                </span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.note}</p>
            </div>
          ))}
        </div>

        {/* Cities */}
        <h2 className="mt-14 text-2xl font-bold tracking-tight text-ink">Par ville</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Les principaux bassins d&apos;emploi au Maroc. La recherche se concentre autour des grandes
          villes et de leurs zones industrielles et de services.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {CITIES.map((city) => (
            <span key={city} className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-ink">
              {city}
            </span>
          ))}
        </div>

        {/* CV builder highlight */}
        <div className="mt-14 rounded-2xl border-2 border-primary/25 bg-primary/5 p-6 sm:p-8">
          <div className="text-xs font-bold uppercase tracking-wide text-primary">Outil gratuit</div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink">Créez votre CV en quelques minutes</h2>
          <p className="mt-2 max-w-2xl leading-relaxed text-muted">
            Un CV clair au format marocain, prêt à envoyer en PDF. Gratuit, sans inscription, et vos
            données restent sur votre appareil.
          </p>
          <Link
            href="/cv"
            className="mt-4 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary-dark"
          >
            Ouvrir le CV Builder
          </Link>
        </div>

        {emploiGuides.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight text-ink">Guides emploi</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {emploiGuides.map((a) => (
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

        <FaqSection items={EMPLOI_FAQ} />
        <LastVerified date="2026-07-15" />
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "@/lib/articles";
import {
  CATEGORY_LABELS,
  CONCOURS,
  concoursByCategory,
} from "@/lib/concours-data";
import { snapshotStatus } from "@/lib/concours-actuels";
import { buildItemListJsonLd } from "@/lib/structured-data";
import { AntiScamBanner } from "@/components/anti-scam-banner";
import { Breadcrumb } from "@/components/breadcrumb";
import { ConcoursCard } from "@/components/concours-card";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { LastVerified } from "@/components/last-verified";
import { OfficialLink } from "@/components/official-link";

export const metadata: Metadata = {
  title: "Concours de recrutement au Maroc 2026 — calendrier et guides",
  description:
    "Tous les concours de la fonction publique au Maroc : police, gendarmerie, douane, impôts, enseignement, santé. Conditions, épreuves et candidature officielle — sans arnaque.",
  alternates: {
    canonical: "/concours",
    languages: { fr: "/concours", ar: "/ar/concours" },
  },
};

// Re-render twice a day so the "open now" list filters against the real current
// date (entries drop off the day their deadline passes) and the staleness guard
// stays honest even between deploys.
export const revalidate = 43200;

const HUB_FAQ = [
  {
    question: "Où sont publiées les annonces officielles des concours au Maroc ?",
    answer:
      "Les concours de la fonction publique sont publiés sur le portail officiel **emploi-public.ma** et sur les sites des ministères et administrations concernés. Les grands corps (police, gendarmerie, FAR) publient leurs campagnes sur leurs propres canaux officiels. Méfiez-vous des pages Facebook et sites non officiels qui recopient — ou inventent — des annonces.",
  },
  {
    question: "Est-ce que postuler à un concours public est payant ?",
    answer:
      "Non. La candidature aux concours de la fonction publique marocaine est **gratuite**. Aucune administration ne demande de « frais de dossier », de recharges téléphoniques ni de virement. Toute demande de paiement est une arnaque.",
  },
  {
    question: "Quels concours puis-je passer avec le bac seulement ?",
    answer:
      "Avec le bac, vous pouvez notamment viser les concours de gardien de la paix (police), de la Gendarmerie Royale, des sous-officiers des FAR, certains grades de la douane et l'admission aux instituts de santé (ISPITS). Consultez notre guide [Quel concours avec votre diplôme ?](/blog/concours-par-niveau-diplome).",
  },
  {
    question: "Comment se déroule un concours de recrutement typique ?",
    answer:
      "Le schéma classique : annonce officielle → dépôt de candidature (souvent en ligne) → présélection sur dossier → convocation → épreuve écrite → épreuve orale (et épreuves physiques pour les corps en uniforme) → liste des admis. Chaque guide détaille le déroulement propre à son concours.",
  },
  {
    question: "Comment savoir si une annonce de concours est vraie ?",
    answer:
      "Vérifiez que l'annonce figure sur le site officiel de l'administration ou sur emploi-public.ma, que le domaine se termine par **.gov.ma** (ou un domaine officiel connu), et qu'aucun paiement n'est demandé. Notre guide [anti-arnaque](/blog/concours-arnaques-comment-les-eviter) liste les signaux d'alerte.",
  },
  {
    question: "Où trouver des exemples d'épreuves et anciens sujets ?",
    answer:
      "Certaines administrations publient des exemples d'épreuves ; le reste circule via les candidats des sessions précédentes. Notre guide [Exemples de concours et anciens sujets](/blog/exemples-concours-anciens-sujets) explique la structure des épreuves par famille de concours et comment s'entraîner.",
  },
];

export default function ConcoursHubPage() {
  const grouped = concoursByCategory();
  const guides = ARTICLES.filter((a) => a.category === "Concours");
  const snapshot = snapshotStatus();
  const ouverts = snapshot.stale ? [] : snapshot.ouverts;

  return (
    <>
      <JsonLd
        data={buildItemListJsonLd({
          name: "Concours de recrutement au Maroc",
          items: CONCOURS.map((c) => ({ name: c.title, path: `/concours/${c.slug}` })),
        })}
      />

      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Concours", href: "/concours" }]} />
          <div className="mt-6 text-sm font-bold uppercase tracking-wide text-primary">
            Fonction publique & مباريات التوظيف
          </div>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Concours de recrutement au Maroc 2026
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Police, gendarmerie, douane, impôts, enseignement, santé : chaque concours avec ses
            conditions, ses épreuves et la voie officielle pour postuler. Gratuit, vérifié, sans
            intermédiaire.
          </p>
          <AntiScamBanner />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        {ouverts.length > 0 ? (
          <div className="mb-14">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-bold tracking-tight text-ink">
                <span className="me-2 inline-block h-2.5 w-2.5 rounded-full bg-success" aria-hidden="true" />
                Candidatures ouvertes en ce moment
              </h2>
              <span className="text-xs font-medium text-muted">
                Vérifié sur les sources officielles le {snapshot.lastVerified}
              </span>
            </div>
            <ul className="mt-5 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
              {ouverts.map((c) => (
                <li key={`${c.title}-${c.deadline}`} className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="font-bold text-ink">{c.title}</div>
                    <div className="mt-0.5 text-sm text-muted">{c.organisme}</div>
                    <a
                      href={c.sourceUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="mt-1 inline-block text-xs font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
                    >
                      Annonce officielle ({c.sourceLabel}) ↗
                    </a>
                  </div>
                  <div className="shrink-0 text-sm sm:text-end">
                    <div className="font-bold text-ink">
                      Date limite : <time dateTime={c.deadline}>{c.deadline}</time>
                    </div>
                    {c.examDate && (
                      <div className="mt-0.5 text-muted">
                        Épreuve : <time dateTime={c.examDate}>{c.examDate}</time>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              Liste vérifiée manuellement — elle n&apos;est pas exhaustive. Les collectivités
              territoriales et les établissements publics publient d&apos;autres avis chaque semaine :
              consultez{" "}
              <a
                href="https://www.emploi-public.ma/fr/concours-liste"
                rel="noopener noreferrer"
                target="_blank"
                className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
              >
                la liste complète sur emploi-public.ma
              </a>
              .
            </p>
          </div>
        ) : (
          <div className="mb-14 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-ink">
              Consultez les concours ouverts en temps réel
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">
              Pour la liste à jour des candidatures ouvertes, consultez le portail officiel — il
              recense en continu les avis de l&apos;État, des collectivités territoriales et des
              établissements publics. En attendant, nos guides ci-dessous détaillent chaque grand
              concours, ses conditions et son calendrier habituel.
            </p>
            <a
              href="https://www.emploi-public.ma/fr/concours-liste"
              rel="noopener noreferrer"
              target="_blank"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              Voir les concours ouverts sur emploi-public.ma
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}

        {grouped.map(([category, list]) => (
          <div key={category} className="mt-10 first:mt-0">
            <h2 className="text-xl font-bold tracking-tight text-ink">
              {CATEGORY_LABELS[category]}
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((concours) => (
                <ConcoursCard key={concours.slug} concours={concours} />
              ))}
            </div>
          </div>
        ))}

        <OfficialLink
          label="Consulter les annonces sur emploi-public.ma"
          href="https://www.emploi-public.ma"
          description="Le portail officiel de l'emploi public marocain centralise les avis de concours des administrations. C'est la référence pour vérifier qu'une annonce est réelle."
        />

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-ink">Guides pour réussir</h2>
          <p className="mt-2 max-w-2xl text-muted">
            Comprendre la procédure, éviter les arnaques et s&apos;entraîner avec les bons supports.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
              >
                <div className="text-xs font-bold uppercase tracking-wide text-primary">
                  {article.category}
                </div>
                <div className="mt-2 font-bold leading-snug text-ink">{article.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{article.description}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark">
                  Lire le guide →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <FaqSection items={HUB_FAQ} />
        <LastVerified date="2026-07-15" />
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CONCOURS, STATUS_LABELS, getConcours } from "@/lib/concours-data";
import { CONCOURS_GUIDES } from "@/content/concours";
import {
  buildArticleJsonLd,
  buildHowToJsonLd,
} from "@/lib/structured-data";
import { AntiScamBanner } from "@/components/anti-scam-banner";
import { Breadcrumb } from "@/components/breadcrumb";
import { ConcoursCard } from "@/components/concours-card";
import { ContentBlocks } from "@/components/content-blocks";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { LastVerified } from "@/components/last-verified";
import { OfficialLink } from "@/components/official-link";
import { RenderInline } from "@/components/render-inline";
import { SourceList } from "@/components/source-list";
import { StatusBadge } from "@/components/concours-card";

export function generateStaticParams() {
  return CONCOURS.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const concours = getConcours(slug);
  if (!concours) return {};
  return {
    title: concours.title,
    description: concours.metaDescription,
    alternates: { canonical: `/concours/${slug}` },
  };
}

export default async function ConcoursDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const concours = getConcours(slug);
  const guide = CONCOURS_GUIDES[slug];
  if (!concours || !guide) notFound();

  const related = CONCOURS.filter(
    (c) => c.category === concours.category && c.slug !== concours.slug,
  ).slice(0, 3);

  return (
    <>
      <JsonLd
        data={buildArticleJsonLd({
          title: concours.title,
          description: concours.metaDescription,
          path: `/concours/${slug}`,
          datePublished: "2026-07-15",
          dateModified: concours.lastVerified,
        })}
      />
      {guide.howTo && <JsonLd data={buildHowToJsonLd(guide.howTo)} />}

      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Concours", href: "/concours" },
              { label: concours.shortTitle, href: `/concours/${slug}` },
            ]}
          />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <StatusBadge status={concours.status} />
            {concours.deadline && (
              <span className="text-sm font-semibold text-ink">
                Date limite : {concours.deadline}
              </span>
            )}
          </div>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {concours.title}
          </h1>
          <p className="mt-2 text-lg text-muted" lang="ar" dir="rtl">
            {concours.titleAr}
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">{concours.statusNote}</p>
          <AntiScamBanner />
        </div>
      </section>

      <article className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8">
        {guide.intro.map((paragraph, index) => (
          <p key={index} className="mt-4 text-lg leading-relaxed text-muted first:mt-0">
            <RenderInline text={paragraph} />
          </p>
        ))}

        <ContentBlocks blocks={guide.body} />

        {guide.howTo && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-ink">{guide.howTo.name}</h2>
            <p className="mt-2 leading-relaxed text-muted">{guide.howTo.description}</p>
            <ol className="mt-6 space-y-4">
              {guide.howTo.steps.map((step, index) => (
                <li key={index} className="flex gap-4 rounded-xl border border-border bg-surface p-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <div className="font-bold text-ink">
                      <RenderInline text={step.name} />
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      <RenderInline text={step.text} />
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        <OfficialLink
          label={concours.officialLabel}
          href={concours.officialUrl}
          description={`Statut actuel : ${STATUS_LABELS[concours.status]}. Vérifiez toujours l'annonce et candidatez uniquement via le canal officiel.`}
        />

        <FaqSection items={guide.faq} />
        <SourceList sources={guide.sources} />

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="text-xl font-bold tracking-tight text-ink">
              Autres concours — {concours.organisme.includes("Ministère") ? "même famille" : "même secteur"}
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (
                <ConcoursCard key={c.slug} concours={c} />
              ))}
            </div>
          </section>
        )}

        <LastVerified date={concours.lastVerified} />
      </article>
    </>
  );
}

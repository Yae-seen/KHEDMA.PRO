import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CONCOURS, getConcours } from "@/lib/concours-data";
import { CONCOURS_GUIDES_AR } from "@/content/ar/concours";
import { CONCOURS_AR, STATUS_LABELS_AR } from "@/lib/concours-ar";
import { buildArticleJsonLd, buildHowToJsonLd } from "@/lib/structured-data";
import { Breadcrumb } from "@/components/breadcrumb";
import { ContentBlocks } from "@/components/content-blocks";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { OfficialLink } from "@/components/official-link";
import { RenderInline } from "@/components/render-inline";
import { SourceList } from "@/components/source-list";

export function generateStaticParams() {
  return CONCOURS.filter((c) => CONCOURS_GUIDES_AR[c.slug]).map((c) => ({ slug: c.slug }));
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
    title: concours.titleAr,
    description: concours.metaDescription,
    alternates: {
      canonical: `/ar/concours/${slug}`,
      languages: { fr: `/concours/${slug}`, ar: `/ar/concours/${slug}` },
    },
  };
}

export default async function ConcoursDetailArPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const concours = getConcours(slug);
  const guide = CONCOURS_GUIDES_AR[slug];
  if (!concours || !guide) notFound();

  const related = CONCOURS.filter(
    (c) => c.category === concours.category && c.slug !== concours.slug && CONCOURS_GUIDES_AR[c.slug],
  ).slice(0, 3);

  return (
    <>
      <JsonLd
        data={buildArticleJsonLd({
          title: concours.titleAr,
          description: concours.metaDescription,
          path: `/ar/concours/${slug}`,
          datePublished: "2026-07-15",
          dateModified: concours.lastVerified,
        })}
      />
      {guide.howTo && <JsonLd data={buildHowToJsonLd(guide.howTo)} />}

      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8">
          <Breadcrumb
            items={[
              { label: CONCOURS_AR.homeCrumb, href: "/ar" },
              { label: CONCOURS_AR.crumb, href: "/ar/concours" },
              { label: concours.titleAr, href: `/ar/concours/${slug}` },
            ]}
          />
          <div className="mt-6 inline-flex rounded-full bg-accent/15 px-2.5 py-1 text-xs font-bold text-accent-dark">
            {STATUS_LABELS_AR[concours.status]}
          </div>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {concours.titleAr}
          </h1>
          <aside className="mt-6 rounded-xl border border-accent/40 bg-accent/10 p-4 text-sm leading-loose text-ink">
            {CONCOURS_AR.antiScam}
          </aside>
        </div>
      </section>

      <article className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8">
        {guide.intro.map((paragraph, index) => (
          <p key={index} className="mt-4 text-lg leading-loose text-muted first:mt-0">
            <RenderInline text={paragraph} />
          </p>
        ))}

        <ContentBlocks blocks={guide.body} />

        {guide.howTo && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-ink">{guide.howTo.name}</h2>
            <p className="mt-2 leading-loose text-muted">{guide.howTo.description}</p>
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
                    <p className="mt-1 text-sm leading-loose text-muted">
                      <RenderInline text={step.text} />
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        <OfficialLink
          label={CONCOURS_AR.officialLabel}
          href={concours.officialUrl}
          description={CONCOURS_AR.officialDesc}
        />

        <FaqSection title={CONCOURS_AR.faqTitle} items={guide.faq} />
        <SourceList sources={guide.sources} />

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="text-xl font-bold tracking-tight text-ink">{CONCOURS_AR.relatedTitle}</h2>
            <ul className="mt-4 space-y-2">
              {related.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/ar/concours/${c.slug}`}
                    className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
                  >
                    {c.titleAr}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <p className="mt-8 text-xs font-medium text-muted">
          {CONCOURS_AR.lastVerified} :{" "}
          <time dateTime={concours.lastVerified} className="font-semibold text-ink">
            {concours.lastVerified}
          </time>
        </p>
      </article>
    </>
  );
}

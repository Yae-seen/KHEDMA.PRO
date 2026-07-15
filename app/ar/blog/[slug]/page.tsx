import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES_AR, AR_BLOG_LABELS, getArticleMetaAr } from "@/lib/articles-ar";
import { getArticleMeta } from "@/lib/articles";
import { BLOG_CONTENT_AR } from "@/content/ar/blog";
import { buildArticleJsonLd } from "@/lib/structured-data";
import { Breadcrumb } from "@/components/breadcrumb";
import { ContentBlocks } from "@/components/content-blocks";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { RenderInline } from "@/components/render-inline";
import { SourceList } from "@/components/source-list";

export function generateStaticParams() {
  return ARTICLES_AR.filter((a) => BLOG_CONTENT_AR[a.slug]).map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = getArticleMetaAr(slug);
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/ar/blog/${slug}`,
      languages: { fr: `/blog/${slug}`, ar: `/ar/blog/${slug}` },
    },
  };
}

export default async function BlogArticleArPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getArticleMetaAr(slug);
  const content = BLOG_CONTENT_AR[slug];
  const frMeta = getArticleMeta(slug);
  if (!meta || !content) notFound();

  const related = ARTICLES_AR.filter(
    (a) => a.category === meta.category && a.slug !== meta.slug && BLOG_CONTENT_AR[a.slug],
  ).slice(0, 3);

  return (
    <>
      <JsonLd
        data={buildArticleJsonLd({
          title: meta.title,
          description: meta.description,
          path: `/ar/blog/${slug}`,
          datePublished: frMeta?.publishedAt ?? "2026-07-15",
          dateModified: frMeta?.updatedAt ?? "2026-07-15",
        })}
      />

      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8">
          <Breadcrumb
            items={[
              { label: AR_BLOG_LABELS.homeCrumb, href: "/ar" },
              { label: AR_BLOG_LABELS.crumb, href: "/ar/blog" },
              { label: meta.title, href: `/ar/blog/${slug}` },
            ]}
          />
          <div className="mt-6 text-xs font-bold text-primary">{meta.category}</div>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {meta.title}
          </h1>
          {frMeta && (
            <p className="mt-3 text-sm text-muted">
              {AR_BLOG_LABELS.publishedOn} <time dateTime={frMeta.publishedAt}>{frMeta.publishedAt}</time>
            </p>
          )}
        </div>
      </section>

      <article className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8">
        {content.intro.map((paragraph, index) => (
          <p key={index} className="mt-4 text-lg leading-loose text-muted first:mt-0">
            <RenderInline text={paragraph} />
          </p>
        ))}

        <ContentBlocks blocks={content.body} />

        {content.faq && <FaqSection title={AR_BLOG_LABELS.faqTitle} items={content.faq} />}
        <SourceList sources={content.sources} />

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="text-xl font-bold tracking-tight text-ink">{AR_BLOG_LABELS.relatedTitle}</h2>
            <ul className="mt-4 space-y-2">
              {related.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/ar/blog/${a.slug}`}
                    className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </>
  );
}

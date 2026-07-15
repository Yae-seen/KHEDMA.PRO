import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticleMeta } from "@/lib/articles";
import { BLOG_CONTENT } from "@/content/blog";
import { buildArticleJsonLd } from "@/lib/structured-data";
import { Breadcrumb } from "@/components/breadcrumb";
import { ContentBlocks } from "@/components/content-blocks";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { LastVerified } from "@/components/last-verified";
import { RenderInline } from "@/components/render-inline";
import { SourceList } from "@/components/source-list";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = getArticleMeta(slug);
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getArticleMeta(slug);
  const content = BLOG_CONTENT[slug];
  if (!meta || !content) notFound();

  const related = ARTICLES.filter(
    (a) => a.category === meta.category && a.slug !== meta.slug,
  ).slice(0, 3);

  return (
    <>
      <JsonLd
        data={buildArticleJsonLd({
          title: meta.title,
          description: meta.description,
          path: `/blog/${slug}`,
          datePublished: meta.publishedAt,
          dateModified: meta.updatedAt,
        })}
      />

      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: meta.title, href: `/blog/${slug}` },
            ]}
          />
          <div className="mt-6 text-xs font-bold uppercase tracking-wide text-primary">
            {meta.category}
          </div>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {meta.title}
          </h1>
          <p className="mt-3 text-sm text-muted">
            Publié le <time dateTime={meta.publishedAt}>{meta.publishedAt}</time>
            {meta.updatedAt !== meta.publishedAt && (
              <>
                {" "}
                · Mis à jour le <time dateTime={meta.updatedAt}>{meta.updatedAt}</time>
              </>
            )}
          </p>
        </div>
      </section>

      <article className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8">
        {content.intro.map((paragraph, index) => (
          <p key={index} className="mt-4 text-lg leading-relaxed text-muted first:mt-0">
            <RenderInline text={paragraph} />
          </p>
        ))}

        <ContentBlocks blocks={content.body} />

        {content.faq && <FaqSection items={content.faq} />}
        <SourceList sources={content.sources} />

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="text-xl font-bold tracking-tight text-ink">À lire ensuite</h2>
            <ul className="mt-4 space-y-3">
              {related.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/blog/${a.slug}`}
                    className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <LastVerified date={meta.updatedAt} />
      </article>
    </>
  );
}

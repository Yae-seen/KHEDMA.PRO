import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES_AR, AR_BLOG_LABELS } from "@/lib/articles-ar";
import { getArticleMeta } from "@/lib/articles";
import { BLOG_CONTENT_AR } from "@/content/ar/blog";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "المدونة — أدلة المسار المهني والمباريات والشغل بالمغرب",
  description:
    "أدلة عملية لمسارك المهني بالمغرب: النجاح في المباريات، تجنب النصب، إيجاد شغل موثوق، وتحضير مشروعك نحو ألمانيا.",
  alternates: {
    canonical: "/ar/blog",
    languages: { fr: "/blog", ar: "/ar/blog" },
  },
};

export default function BlogIndexArPage() {
  const articles = ARTICLES_AR.filter((a) => BLOG_CONTENT_AR[a.slug]);

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
          <Breadcrumb
            items={[
              { label: AR_BLOG_LABELS.homeCrumb, href: "/ar" },
              { label: AR_BLOG_LABELS.crumb, href: "/ar/blog" },
            ]}
          />
          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {AR_BLOG_LABELS.h1}
          </h1>
          <p className="mt-3 max-w-2xl text-lg leading-loose text-muted">{AR_BLOG_LABELS.lead}</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => {
            const fr = getArticleMeta(a.slug);
            return (
              <Link
                key={a.slug}
                href={`/ar/blog/${a.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-primary">
                  {a.category}
                  {fr && <span className="font-medium text-muted">· {fr.publishedAt}</span>}
                </div>
                <h2 className="mt-3 text-lg font-bold leading-snug text-ink">{a.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-loose text-muted">{a.description}</p>
                <span className="mt-4 text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark">
                  {AR_BLOG_LABELS.readCta}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}

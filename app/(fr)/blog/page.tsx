import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "@/lib/articles";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Blog — guides carrière, concours et emploi au Maroc",
  description:
    "Guides pratiques pour votre carrière au Maroc : réussir les concours publics, éviter les arnaques, trouver un emploi vérifié et préparer votre projet Allemagne.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const sorted = [...ARTICLES].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Blog", href: "/blog" }]} />
          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Guides carrière
          </h1>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">
            Des guides concrets, vérifiés et sans blabla : concours, emploi, et votre voie vers
            l&apos;Allemagne.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary">
                {article.category}
                <span className="font-medium normal-case tracking-normal text-muted">
                  · {article.publishedAt}
                </span>
              </div>
              <h2 className="mt-3 text-lg font-bold leading-snug text-ink">{article.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{article.description}</p>
              <span className="mt-4 text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark">
                Lire le guide →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

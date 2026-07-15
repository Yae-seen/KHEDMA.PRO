import type { Metadata } from "next";
import Link from "next/link";
import { CONCOURS, concoursByCategory } from "@/lib/concours-data";
import { CONCOURS_GUIDES_AR } from "@/content/ar/concours";
import { CATEGORY_LABELS_AR, CONCOURS_AR, STATUS_LABELS_AR } from "@/lib/concours-ar";
import { buildItemListJsonLd } from "@/lib/structured-data";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { OfficialLink } from "@/components/official-link";

export const metadata: Metadata = {
  title: "مباريات التوظيف بالمغرب 2026 — الدليل والروزنامة",
  description:
    "جميع مباريات الوظيفة العمومية بالمغرب: الشرطة، الدرك، الجمارك، الضرائب، التعليم، الصحة. الشروط والاختبارات والترشح الرسمي — بدون نصب.",
  alternates: {
    canonical: "/ar/concours",
    languages: { fr: "/concours", ar: "/ar/concours" },
  },
};

export default function ConcoursHubArPage() {
  const grouped = concoursByCategory().map(
    ([cat, list]) => [cat, list.filter((c) => CONCOURS_GUIDES_AR[c.slug])] as const,
  );

  return (
    <>
      <JsonLd
        data={buildItemListJsonLd({
          name: "مباريات التوظيف بالمغرب",
          items: CONCOURS.filter((c) => CONCOURS_GUIDES_AR[c.slug]).map((c) => ({
            name: c.titleAr,
            path: `/ar/concours/${c.slug}`,
          })),
        })}
      />

      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
          <Breadcrumb
            items={[
              { label: CONCOURS_AR.homeCrumb, href: "/ar" },
              { label: CONCOURS_AR.crumb, href: "/ar/concours" },
            ]}
          />
          <div className="mt-6 text-sm font-bold text-primary">{CONCOURS_AR.eyebrow}</div>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {CONCOURS_AR.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-loose text-muted">{CONCOURS_AR.lead}</p>
          <aside className="mt-8 rounded-xl border border-accent/40 bg-accent/10 p-4 text-sm leading-loose text-ink">
            {CONCOURS_AR.antiScam}
          </aside>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        {grouped.map(([category, list]) =>
          list.length === 0 ? null : (
            <div key={category} className="mt-10 first:mt-0">
              <h2 className="text-xl font-bold tracking-tight text-ink">{CATEGORY_LABELS_AR[category]}</h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/ar/concours/${c.slug}`}
                    className="group flex flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="text-base font-bold text-ink">{c.titleAr}</div>
                      <span className="shrink-0 rounded-full bg-bg px-2.5 py-1 text-xs font-bold text-muted">
                        {STATUS_LABELS_AR[c.status]}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {c.niveaux.map((n) => (
                        <span key={n} className="rounded-md bg-bg px-2 py-0.5 text-xs font-medium text-muted">
                          {n}
                        </span>
                      ))}
                    </div>
                    <span className="mt-4 text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark">
                      {CONCOURS_AR.guideCta}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ),
        )}

        <OfficialLink
          label="الاطلاع على الإعلانات عبر emploi-public.ma"
          href="https://www.emploi-public.ma/fr/concours-liste"
          description="البوابة الرسمية للتشغيل العمومي تجمع إعلانات المباريات. إنها المرجع للتأكد من صحة أي إعلان."
        />
      </section>
    </>
  );
}

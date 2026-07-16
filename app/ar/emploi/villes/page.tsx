import type { Metadata } from "next";
import Link from "next/link";
import { CITY_EMPLOI_AR } from "@/lib/city-emploi-ar";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "الشغل حسب المدينة في المغرب: أين تبحث في كل مدينة",
  description:
    "سوق الشغل مدينة بمدينة في المغرب: القطاعات التي توظّف، كبار المشغّلين ومناطق النشاط في الدار البيضاء والرباط وطنجة وفاس وأكادير والمزيد.",
  alternates: {
    canonical: "/ar/emploi/villes",
    languages: { fr: "/emploi/villes", ar: "/ar/emploi/villes" },
  },
};

export default function VillesIndexArPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { label: "الرئيسية", href: "/ar" },
          { label: "الشغل", href: "/ar/emploi" },
          { label: "حسب المدينة", href: "/ar/emploi/villes" },
        ])}
      />

      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
          <Breadcrumb
            items={[
              { label: "الرئيسية", href: "/ar" },
              { label: "الشغل", href: "/ar/emploi" },
              { label: "حسب المدينة", href: "/ar/emploi/villes" },
            ]}
          />
          <h1 className="mt-6 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            الشغل حسب المدينة في المغرب
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-loose text-muted">
            لكل مدينة سوق شغل خاص بها: القطاعات وكبار المشغّلين ومناطق النشاط ليست نفسها في الدار البيضاء
            أو طنجة أو أكادير. اختر مدينتك لتوجيه بحثك.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CITY_EMPLOI_AR.map((c) => (
            <Link
              key={c.slug}
              href={`/ar/emploi/villes/${c.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
            >
              <div className="text-lg font-bold text-ink">الشغل في {c.nameAr}</div>
              <p className="mt-2 flex-1 text-sm leading-loose text-muted">{c.intro}</p>
              <span className="mt-3 text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark">
                اطّلع على القطاعات ←
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

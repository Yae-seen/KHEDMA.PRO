import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CITY_EMPLOI_AR, getCityEmploiAr } from "@/lib/city-emploi-ar";
import { AR_BLOG_LABELS } from "@/lib/articles-ar";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/structured-data";
import { Breadcrumb } from "@/components/breadcrumb";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";

const LAST_VERIFIED = "2026-07-16";
const ANAPEC_GUIDE = "/ar/blog/anapec-inscription-espace-candidat";
const EMPLOI_PUBLIC_GUIDE = "/ar/blog/emploi-public-ma-portail";

export function generateStaticParams() {
  return CITY_EMPLOI_AR.map((c) => ({ ville: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ville: string }>;
}): Promise<Metadata> {
  const { ville } = await params;
  const c = getCityEmploiAr(ville);
  if (!c) return {};
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: `/ar/emploi/villes/${c.slug}`,
      languages: { fr: `/emploi/villes/${c.slug}`, ar: `/ar/emploi/villes/${c.slug}` },
    },
  };
}

export default async function CityEmploiArPage({
  params,
}: {
  params: Promise<{ ville: string }>;
}) {
  const { ville } = await params;
  const c = getCityEmploiAr(ville);
  if (!c) notFound();

  const others = CITY_EMPLOI_AR.filter((x) => x.slug !== c.slug).slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { label: "الرئيسية", href: "/ar" },
            { label: "الشغل", href: "/ar/emploi" },
            { label: "حسب المدينة", href: "/ar/emploi/villes" },
            { label: c.nameAr, href: `/ar/emploi/villes/${c.slug}` },
          ]),
          buildFaqJsonLd(c.faq),
        ]}
      />

      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8">
          <Breadcrumb
            items={[
              { label: "الرئيسية", href: "/ar" },
              { label: "الشغل", href: "/ar/emploi" },
              { label: "حسب المدينة", href: "/ar/emploi/villes" },
              { label: c.nameAr, href: `/ar/emploi/villes/${c.slug}` },
            ]}
          />
          <div className="mt-6 text-sm font-bold text-primary">الشغل — {c.nameAr}</div>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            البحث عن عمل في {c.nameAr}
          </h1>
          <p className="mt-4 text-lg leading-loose text-muted">{c.intro}</p>
        </div>
      </section>

      <article className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-ink">القطاعات التي توظّف في {c.nameAr}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {c.sectors.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-surface p-4">
              <span className="font-bold text-ink">{s.label}</span>
              <p className="mt-1.5 text-sm leading-loose text-muted">{s.note}</p>
            </div>
          ))}
        </div>

        {c.employers.length > 0 && (
          <>
            <h2 className="mt-12 text-2xl font-bold tracking-tight text-ink">كبار المشغّلين ومناطق النشاط</h2>
            <p className="mt-2 text-muted">
              معالم ملموسة لتوجيه بحثك في {c.nameAr} (المناطق الصناعية، حدائق الأوفشورينغ وكبار المشغّلين).
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {c.employers.map((e) => (
                <span key={e} className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-ink">
                  {e}
                </span>
              ))}
            </div>
          </>
        )}

        <h2 className="mt-12 text-2xl font-bold tracking-tight text-ink">أين تبحث في {c.nameAr}</h2>
        <p className="mt-2 leading-loose text-muted">{c.whereToLook}</p>

        <div className="mt-6 rounded-2xl border border-border bg-surface p-6">
          <h3 className="text-base font-bold text-ink">الترشّح دون الوقوع في النصب</h3>
          <p className="mt-2 text-sm leading-loose text-muted">
            لا يطلب أي مشغّل أو وسيط جدّي أداء المال مقابل منصب. مُرّ عبر القنوات الرسمية — الوكالة الوطنية
            (ANAPEC) للقطاع الخاص، وبوابة التشغيل العمومي للمباريات — وحضّر سيرة ذاتية جيدة.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
            <Link href={ANAPEC_GUIDE} className="text-sm font-semibold text-primary hover:text-primary-dark">
              دليل ANAPEC ←
            </Link>
            <Link href={EMPLOI_PUBLIC_GUIDE} className="text-sm font-semibold text-primary hover:text-primary-dark">
              بوابة التشغيل العمومي ←
            </Link>
            <Link href="/cv" className="text-sm font-semibold text-primary hover:text-primary-dark">
              أنشئ سيرتك ←
            </Link>
          </div>
        </div>

        <FaqSection title={AR_BLOG_LABELS.faqTitle} items={c.faq} />

        <section className="mt-14">
          <h2 className="text-xl font-bold tracking-tight text-ink">الشغل في مدن أخرى</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/ar/emploi/villes/${o.slug}`}
                className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-semibold text-primary transition-colors hover:border-primary"
              >
                {o.nameAr}
              </Link>
            ))}
          </div>
        </section>

        <p className="mt-8 text-xs font-medium text-muted">
          آخر تحديث للمعلومات:{" "}
          <time dateTime={LAST_VERIFIED} className="font-semibold text-ink">
            {LAST_VERIFIED}
          </time>
        </p>
      </article>
    </>
  );
}

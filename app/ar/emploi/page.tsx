import type { Metadata } from "next";
import Link from "next/link";
import { JOB_CHANNELS } from "@/lib/emploi-data";
import { EMPLOI_AR } from "@/lib/emploi-ar";
import { CITY_EMPLOI_AR } from "@/lib/city-emploi-ar";
import { ARTICLES_AR, AR_BLOG_LABELS } from "@/lib/articles-ar";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/structured-data";
import { Breadcrumb } from "@/components/breadcrumb";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { OfficialLink } from "@/components/official-link";

const LAST_VERIFIED = "2026-07-16";
const ANAPEC_GUIDE = "/ar/blog/anapec-inscription-espace-candidat";

export const metadata: Metadata = {
  title: EMPLOI_AR.metaTitle,
  description: EMPLOI_AR.metaDescription,
  alternates: {
    canonical: "/ar/emploi",
    languages: { fr: "/emploi", ar: "/ar/emploi" },
  },
};

export default function EmploiArPage() {
  const guides = ARTICLES_AR.filter((a) => a.category === "الشغل");

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { label: "الرئيسية", href: "/ar" },
            { label: "الشغل", href: "/ar/emploi" },
          ]),
          buildFaqJsonLd(EMPLOI_AR.faq),
        ]}
      />

      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
          <Breadcrumb
            items={[
              { label: "الرئيسية", href: "/ar" },
              { label: "الشغل", href: "/ar/emploi" },
            ]}
          />
          <div className="mt-6 text-sm font-bold text-primary">{EMPLOI_AR.eyebrow}</div>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {EMPLOI_AR.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-loose text-muted">{EMPLOI_AR.lead}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={ANAPEC_GUIDE}
              className="rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              {EMPLOI_AR.privateCtaAnapec}
            </Link>
            <Link
              href="/cv"
              className="rounded-xl border border-border px-6 py-3 text-sm font-bold text-ink transition-colors hover:border-primary"
            >
              {EMPLOI_AR.cvCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-ink">{EMPLOI_AR.channelsTitle}</h2>
        <p className="mt-2 max-w-2xl text-muted">{EMPLOI_AR.channelsLead}</p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {JOB_CHANNELS.map((c, i) => {
            const ar = EMPLOI_AR.channels[i];
            return (
              <div key={c.name} className="flex flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-ink">{ar?.name ?? c.name}</span>
                  {c.official && (
                    <span className="rounded-md bg-success/10 px-1.5 py-0.5 text-xs font-bold text-success">رسمي</span>
                  )}
                </div>
                <div className="mt-1 text-xs font-semibold text-primary">{ar?.scope}</div>
                <p className="mt-2 flex-1 text-sm leading-loose text-muted">{ar?.description}</p>
                <a
                  href={c.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="mt-3 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  زيارة ↗
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-lg font-bold text-ink">{EMPLOI_AR.publicTitle}</h3>
            <p className="mt-2 text-sm leading-loose text-muted">{EMPLOI_AR.publicText}</p>
            <Link href="/ar/concours" className="mt-3 inline-block text-sm font-semibold text-primary hover:text-primary-dark">
              {EMPLOI_AR.publicCta}
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-lg font-bold text-ink">{EMPLOI_AR.privateTitle}</h3>
            <p className="mt-2 text-sm leading-loose text-muted">{EMPLOI_AR.privateText}</p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
              <Link href={ANAPEC_GUIDE} className="inline-block text-sm font-semibold text-primary hover:text-primary-dark">
                {EMPLOI_AR.privateCtaAnapec}
              </Link>
              <Link href="/cv" className="inline-block text-sm font-semibold text-primary hover:text-primary-dark">
                {EMPLOI_AR.privateCtaCv}
              </Link>
            </div>
          </div>
        </div>

        <h2 className="mt-14 text-2xl font-bold tracking-tight text-ink">{EMPLOI_AR.sectorsTitle}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EMPLOI_AR.sectors.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-surface p-4">
              <span className="font-bold text-ink">{s.label}</span>
              <p className="mt-1.5 text-sm leading-loose text-muted">{s.note}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-14 text-2xl font-bold tracking-tight text-ink">{EMPLOI_AR.citiesTitle}</h2>
        <p className="mt-2 max-w-2xl text-muted">{EMPLOI_AR.citiesLead}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {CITY_EMPLOI_AR.map((c) => (
            <Link
              key={c.slug}
              href={`/ar/emploi/villes/${c.slug}`}
              className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
            >
              {c.nameAr}
            </Link>
          ))}
        </div>
        <Link href="/ar/emploi/villes" className="mt-4 inline-block text-sm font-semibold text-primary hover:text-primary-dark">
          الشغل حسب المدينة — الدليل ←
        </Link>

        <div className="mt-14 rounded-2xl border-2 border-primary/25 bg-primary/5 p-6 sm:p-8">
          <div className="text-xs font-bold text-primary">أداة مجانية</div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink">{EMPLOI_AR.cvTitle}</h2>
          <p className="mt-2 max-w-2xl leading-loose text-muted">{EMPLOI_AR.cvText}</p>
          <Link
            href="/cv"
            className="mt-4 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary-dark"
          >
            {EMPLOI_AR.cvCta}
          </Link>
        </div>

        {guides.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight text-ink">{EMPLOI_AR.guidesTitle}</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {guides.map((a) => (
                <Link
                  key={a.slug}
                  href={`/ar/blog/${a.slug}`}
                  className="group rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
                >
                  <div className="text-xs font-bold text-primary">{a.category}</div>
                  <div className="mt-2 font-bold leading-snug text-ink">{a.title}</div>
                  <p className="mt-2 text-sm leading-loose text-muted">{a.description}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark">
                    {AR_BLOG_LABELS.readCta}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <OfficialLink
          label={EMPLOI_AR.officialLabel}
          href="https://www.emploi-public.ma/fr/concours-liste"
          description={EMPLOI_AR.officialDescription}
        />

        <FaqSection title={AR_BLOG_LABELS.faqTitle} items={EMPLOI_AR.faq} />
        <p className="mt-8 text-xs font-medium text-muted">
          آخر تحديث للمعلومات:{" "}
          <time dateTime={LAST_VERIFIED} className="font-semibold text-ink">
            {LAST_VERIFIED}
          </time>
        </p>
      </section>
    </>
  );
}

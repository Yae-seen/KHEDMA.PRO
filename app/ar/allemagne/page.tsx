import type { Metadata } from "next";
import Link from "next/link";
import { ALLEMAGNE_LAST_VERIFIED, CHANCENKARTE_MODEL } from "@/lib/allemagne-data";
import { ARTICLES_AR, AR_BLOG_LABELS } from "@/lib/articles-ar";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/structured-data";
import { Breadcrumb } from "@/components/breadcrumb";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { OfficialLink } from "@/components/official-link";

export const metadata: Metadata = {
  title: "العمل في ألمانيا انطلاقاً من المغرب: بطاقة الفرص والمهن",
  description:
    "مسارك الحقيقي نحو ألمانيا بلا وعود فارغة: بطاقة الفرص (Chancenkarte)، إيجاد مشغّل حسب المهنة والمدينة، والميزانية — بمصادر رسمية. الأدوات التفاعلية متوفرة بالفرنسية.",
  alternates: {
    canonical: "/ar/allemagne",
    languages: { fr: "/allemagne", ar: "/ar/allemagne" },
  },
};

const ALLEMAGNE_FAQ_AR = [
  {
    question: "ما هي بطاقة الفرص (Chancenkarte)؟",
    answer:
      "هي رخصة إقامة ألمانية بنظام النقط تتيح لك القدوم إلى ألمانيا **للبحث عن عمل مؤهَّل** دون أن يكون لديك عقد مسبق. تُمنح إمّا عبر الاعتراف الكامل بشهادتك، أو بجمع نقط كافية (المؤهّل، اللغة الألمانية، الخبرة، السنّ…).",
  },
  {
    question: "هل يجب التحدث بالألمانية للسفر؟",
    answer:
      "يعتمد على المهنة. بالنسبة للمهن المنظَّمة مثل التمريض (Pflege) يُطلب مستوى في الألمانية (غالباً B2) والاعتراف بالشهادة. أما مهن أخرى فقد يكفي مستوى أبسط في البداية — لكن الألمانية تبقى حاسمة للتوظيف والاندماج.",
  },
  {
    question: "لماذا استهداف المدن الألمانية الصغيرة؟",
    answer:
      "لأن نقص اليد العاملة فيها أكبر، والمشغّلون فيها غالباً أكثر انفتاحاً على توظيف وكفالة ملف أجنبي. لذلك نبحث عن **مهنة + مدينة محدّدة** بدل «Ausbildung» بشكل عشوائي.",
  },
  {
    question: "هل تُغني هذه الأدوات عن الإجراءات الرسمية؟",
    answer:
      "لا. أدواتنا **إرشادية**: تساعدك على تحديد موقعك وتحضير مشروعك. وحدها السلطات الألمانية (والبعثة الدبلوماسية بالمغرب) تقرّر أهليتك ومنح التأشيرة.",
  },
  {
    question: "ما الفرق بين Ausbildung وبطاقة الفرص؟",
    answer:
      "**Ausbildung** تكوين مهني مؤدّى عنه: يتطلّب عقداً مسبقاً مع مقاولة. أما **بطاقة الفرص** فتُستعمل للقدوم والبحث عن عمل مؤهَّل داخل ألمانيا. وهما مساران متمايزان نحو ألمانيا.",
  },
];

export default function AllemagneArPage() {
  const guides = ARTICLES_AR.filter((a) => a.category === "ألمانيا");

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { label: "الرئيسية", href: "/ar" },
            { label: "ألمانيا", href: "/ar/allemagne" },
          ]),
          buildFaqJsonLd(ALLEMAGNE_FAQ_AR),
        ]}
      />

      <section className="relative overflow-hidden bg-night text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(60% 60% at 15% 0%, rgba(245,158,11,0.28), transparent 60%)" }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <Breadcrumb
            items={[
              { label: "الرئيسية", href: "/ar" },
              { label: "ألمانيا", href: "/ar/allemagne" },
            ]}
          />
          <div className="mt-6 text-sm font-bold text-accent">المغرب ← ألمانيا</div>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            طريقك الحقيقي إلى ألمانيا، بلا وعود فارغة
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-loose text-white/70">
            بدون كلام مجرّد عن «Ausbildung». نشرح لك المسار بالعربية — بطاقة الفرص، إيجاد مشغّل حسب
            المهنة والمدينة، والميزانية — ونوجّهك إلى المصادر الرسمية. الأدوات التفاعلية متوفرة حالياً
            بالفرنسية.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/allemagne"
              className="rounded-xl bg-accent px-6 py-3 text-sm font-bold text-night shadow-lg transition-transform hover:-translate-y-0.5"
            >
              استعمل الأدوات التفاعلية (بالفرنسية) ←
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <aside className="rounded-2xl border border-accent/40 bg-accent/10 p-5 text-sm leading-loose text-ink">
          حاسبة النقط لبطاقة الفرص، وأداة إيجاد مشغّل حسب المهنة والمدينة، ومقدّر الميزانية — كلها
          متوفرة على{" "}
          <Link href="/allemagne" className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary">
            صفحة ألمانيا بالفرنسية
          </Link>
          . هذه الصفحة تقدّم لك الأدلة والمسار بالعربية.
        </aside>

        <OfficialLink
          label="زيارة البوابة الرسمية Make it in Germany"
          href={CHANCENKARTE_MODEL.sourceUrl}
          description="البوابة الرسمية للحكومة الألمانية للعمّال المؤهَّلين (متوفرة بالفرنسية): الشروط المُحيَّنة، البحث عن عمل، وإجراءات التأشيرة."
        />

        <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-bold text-ink">هل أنهيت دراستك للتوّ؟</h2>
          <p className="mt-2 text-sm leading-loose text-muted">
            إذا كنت ما تزال تحضّر الباكالوريا أو التوجيه، فموقعنا الشريك{" "}
            <a
              href="https://massar-service.net"
              rel="noopener noreferrer"
              target="_blank"
              className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
            >
              massar-service.net
            </a>{" "}
            يرافقك في جانب الدراسة — لتبني من الآن الشهادة التي ستفتح مشروعك الألماني.
          </p>
        </div>

        {guides.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight text-ink">أدلة ألمانيا</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
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

        <FaqSection title={AR_BLOG_LABELS.faqTitle} items={ALLEMAGNE_FAQ_AR} />
        <p className="mt-8 text-xs font-medium text-muted">
          آخر تحديث للمعلومات:{" "}
          <time dateTime={ALLEMAGNE_LAST_VERIFIED} className="font-semibold text-ink">
            {ALLEMAGNE_LAST_VERIFIED}
          </time>
        </p>
      </div>
    </>
  );
}

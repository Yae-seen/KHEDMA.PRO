import type { Metadata } from "next";
import Link from "next/link";
import { buildFaqJsonLd, buildWebSiteJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "خدمة برو — المباريات، الشغل، وطريقك إلى ألمانيا",
  description:
    "منصة المسار المهني للشباب المغربي: مباريات التوظيف في الوظيفة العمومية، عروض شغل موثوقة، وطريقك الحقيقي إلى ألمانيا — بدون نصب ولا رسوم.",
  alternates: {
    canonical: "/ar",
    languages: { fr: "/", ar: "/ar" },
  },
  openGraph: { locale: "ar_MA" },
};

const PILLARS_AR = [
  {
    href: "/ar/concours",
    tag: "الوظيفة العمومية",
    title: "المباريات",
    desc: "جميع مباريات التوظيف بالمغرب حسب الوزارة وآخر أجل — مع الشروط وكيفية الترشح عبر البوابة الرسمية دون نصب.",
  },
  {
    href: "/emploi",
    tag: "عروض موثوقة و السيرة الذاتية",
    title: "الشغل",
    desc: "أين تبحث فعلاً عن عمل بالمغرب — القطاع العام والخاص — مع أداة مجانية لإنشاء سيرة ذاتية بالصيغة المغربية.",
  },
  {
    href: "/allemagne",
    tag: "بطاقة الفرص و المهن",
    title: "ألمانيا",
    desc: "طريقك الحقيقي إلى ألمانيا: احسب نقاط بطاقة الفرص (Chancenkarte)، وابحث عن مشغّل حسب المهنة والمدينة.",
  },
];

const VALUES_AR: [string, string][] = [
  ["موثوق وبدون نصب", "نتحقق من كل معلومة، ولا نطلب أبداً رسوماً ولا كلمة السر. أي طلب أداء هو نصب."],
  ["مُكيَّف مع المغرب", "سيرة ذاتية بالصيغة المغربية، تواريخ مباريات حقيقية، والمهن التي تُوظِّف فعلاً في ألمانيا."],
  ["من الباك إلى الشغل", "جسر بين دراستك ومسارك المهني، امتداداً للمنظومة التعليمية المغربية."],
];

const FAQ_AR = [
  {
    question: "أين تُنشر إعلانات المباريات الرسمية بالمغرب؟",
    answer:
      "تُنشر مباريات الوظيفة العمومية على البوابة الرسمية emploi-public.ma وعلى مواقع الوزارات والإدارات المعنية. احذر من الصفحات والمواقع غير الرسمية.",
  },
  {
    question: "هل الترشح للمباريات العمومية مؤدى عنه؟",
    answer: "لا. الترشح لمباريات الوظيفة العمومية المغربية مجاني. أي طلب لأداء «مصاريف ملف» هو نصب.",
  },
  {
    question: "ما هي بطاقة الفرص الألمانية (Chancenkarte)؟",
    answer:
      "هي تصريح إقامة ألماني بالنقاط يتيح القدوم إلى ألمانيا للبحث عن عمل مؤهَّل دون عقد مسبق. يمكنك تقدير نقاطك عبر أداتنا في صفحة ألمانيا.",
  },
];

export default function ArHomePage() {
  return (
    <>
      <JsonLd data={[buildWebSiteJsonLd(), buildFaqJsonLd(FAQ_AR)]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-night text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(60% 60% at 85% 0%, rgba(99,102,241,0.38), transparent 60%)" }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
            للشباب المغربي
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            انطلق في مسارك المهني. <span className="text-accent">في المغرب أو في ألمانيا.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-loose text-white/70">
            مباريات الوظيفة العمومية، عروض شغل موثوقة، وطريقك الحقيقي إلى ألمانيا — كل ذلك في مكان
            واحد، وبدون نصب.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/ar/concours"
              className="rounded-xl bg-accent px-6 py-3 text-sm font-bold text-night shadow-lg transition-transform hover:-translate-y-0.5"
            >
              المباريات المفتوحة
            </Link>
            <Link
              href="/allemagne"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              طريقك إلى ألمانيا ←
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">كل مسارك في مكان واحد</h2>
        <p className="mt-2 max-w-2xl text-muted">
          ثلاثة أعمدة مصمَّمة للشباب المغربي: القطاع العام، الشغل الخاص، والدولي.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PILLARS_AR.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-md"
            >
              <div className="text-xs font-bold uppercase tracking-wide text-primary">{p.tag}</div>
              <div className="mt-3 text-xl font-bold text-ink">{p.title}</div>
              <p className="mt-2 text-sm leading-loose text-muted">{p.desc}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark">
                اكتشف ←
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 sm:grid-cols-3 sm:px-8">
          {VALUES_AR.map(([t, d]) => (
            <div key={t}>
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-lg font-bold text-primary">✓</div>
              <h3 className="mt-4 font-bold text-ink">{t}</h3>
              <p className="mt-1.5 text-sm leading-loose text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-ink">أسئلة شائعة</h2>
        <div className="mt-6 space-y-3">
          {FAQ_AR.map((f) => (
            <details key={f.question} className="group rounded-xl border border-border bg-surface p-5 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {f.question}
                <span aria-hidden="true" className="shrink-0 text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-loose text-muted">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-6xl px-5 py-20 text-center sm:px-8">
        <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl">
          مستعد للخطوة التالية؟
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted">
          استكشف المباريات المفتوحة، العروض الموثوقة، وطريقك إلى ألمانيا.
        </p>
        <Link
          href="/ar/concours"
          className="mt-7 inline-flex rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-primary-dark"
        >
          استكشف المباريات
        </Link>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES_AR, AR_BLOG_LABELS } from "@/lib/articles-ar";
import { Breadcrumb } from "@/components/breadcrumb";
import { FaqSection } from "@/components/faq-section";
import { OfficialLink } from "@/components/official-link";

/**
 * Arabic Canada hub. This is the one that carries the demand — the Canada
 * cluster is overwhelmingly Arabic in Morocco (≈16,640 searches/month, Semrush
 * db ma), so the Arabic hub is not a courtesy translation of the French one.
 * Same reason as the French hub for having no interactive tool: CRS point
 * tables move every draw and a stale YMYL calculator is worse than none.
 */

export const metadata: Metadata = {
  title: "الهجرة إلى كندا من المغرب: الطريق الرسمي",
  description:
    "الدخول السريع، الرسوم الحقيقية، المال المطلوب في البنك، والموقع الرسمي الوحيد. الخطوات الحقيقية للهجرة إلى كندا من المغرب بمصادر IRCC.",
  alternates: {
    canonical: "/ar/canada",
    languages: { fr: "/canada", ar: "/ar/canada" },
  },
};

const CANADA_VERIFIED_AR = "2026-08-01";

const CANADA_FAQ_AR = [
  {
    question: "من أين أبدأ للهجرة إلى كندا من المغرب؟",
    answer:
      "من الموقع الرسمي **canada.ca**، بكتابة العنوان بنفسك. هناك تجيب مجانًا عن استمارة الأهلية قبل أي خطوة أخرى. لا حاجة لأي وكالة في هذه المرحلة، ولا يحق لأحد أن يطالبك بمال مقابلها.",
  },
  {
    question: "هل «الدخول السريع» برنامج؟",
    answer:
      "لا، هو **النظام الإلكتروني** الذي يدبّر طلبات ثلاثة برامج: فئة الخبرة الكندية، وبرنامج العمال المهرة (الفدرالي)، وبرنامج المهن الحِرفية المتخصصة (الفدرالي).",
  },
  {
    question: "هل تحتاج الهجرة إلى كندا مالًا؟",
    answer:
      "نعم، وهذه هي النقطة التي تخفيها الإعلانات المحتالة. هناك رسوم الملف الرسمية، وقبلها **إثبات مالي**: مبلغ يجب أن يكون في حسابك مسبقًا بالنسبة لبرنامجين من الثلاثة. المبالغ الدقيقة في دليلنا المخصّص.",
  },
  {
    question: "هل يمكن السفر إلى كندا مجانًا؟",
    answer:
      "لا. الهجرة المجانية إلى كندا غير موجودة، وIRCC واضحة: **لا أحد يستطيع أن يضمن لك عملًا أو تأشيرة**. وكل عرض «مجاني» أو «مضمون» هو إشارة نصب.",
  },
  {
    question: "كم من الوقت يجب أن أتوقّع؟",
    answer:
      "لا يوجد أجل واحد: يختلف حسب البرنامج وحجم الطلبات وملفك. لكن بين اختبار اللغة وتقييم الشهادات وشهادات السوابق والمبلغ الذي يجب تكوينه وانتظار الدعوة، فهذا مشروع يُحسب بالسنوات لا بالأسابيع.",
  },
];

export default function CanadaArPage() {
  const guides = ARTICLES_AR.filter((a) => a.category === "كندا");

  return (
    <>
      <section className="relative overflow-hidden bg-night text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(60% 60% at 15% 0%, rgba(245,158,11,0.28), transparent 60%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <Breadcrumb
            items={[
              { label: "الرئيسية", href: "/ar" },
              { label: "كندا", href: "/ar/canada" },
            ]}
          />
          <div className="mt-6 text-sm font-bold text-accent">المغرب ← كندا</div>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            الهجرة إلى كندا من المغرب، دون أن يُسرق مالك
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-loose text-white/70">
            عنوان رسمي واحد، ورسوم معلنة، ومبلغ يجب أن يكون في حسابك لا يخبرك به أحد. هذه هي الأرقام
            الحقيقية والخطوات الحقيقية — بمصادر من الحكومة الكندية.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/ar/blog/immigration-canada-site-officiel-etapes"
              className="rounded-xl bg-accent px-6 py-3 text-sm font-bold text-night shadow-lg transition-transform hover:-translate-y-0.5"
            >
              اطّلع على الخطوات الحقيقية
            </Link>
            <Link
              href="/ar/blog/immigration-canada-gratuite-verite"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              كم يكلّف فعلًا ←
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <aside className="rounded-2xl border border-accent/40 bg-accent/10 p-5 text-sm leading-loose text-ink">
          القاعدة التي تحميك من كل ما تبقّى: دائرة الهجرة الكندية (IRCC) تكتبها بوضوح —{" "}
          <strong className="font-semibold">
            «لا أحد يستطيع أن يضمن لك عملًا أو تأشيرة إلى كندا».
          </strong>{" "}
          وموظفو الهجرة وحدهم من يقرّر. هذه الجملة وحدها تُسقط أغلب العروض التي ستصادفها على فيسبوك
          وتيك توك وواتساب.
        </aside>

        <OfficialLink
          label="زيارة الموقع الرسمي لحكومة كندا"
          href="https://www.canada.ca/en/services/immigration-citizenship.html"
          description="المكان الرسمي الوحيد للتحقّق من أهليتك وتحميل الاستمارات (المجانية) وإيداع طلبك. اكتب العنوان بنفسك في المتصفح بدل الدخول عبر رابط وصلك في رسالة."
        />

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-ink">
            «الدخول السريع» ليس برنامجًا
          </h2>
          <p className="mt-3 max-w-3xl leading-loose text-muted">
            هو النظام الإلكتروني الذي تستعمله كندا لتدبير طلبات ثلاثة برامج مختلفة. ومعرفة البرنامج
            الذي يخصّك هي الخطوة الأولى تمامًا — فالشروط ليست واحدة.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[32rem] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-start">
                  <th className="py-3 pe-4 text-start font-bold text-ink">البرنامج</th>
                  <th className="py-3 text-start font-bold text-ink">لمن</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border/60">
                  <td className="py-3 pe-4 font-semibold text-ink">فئة الخبرة الكندية</td>
                  <td className="py-3">خبرة عمل مؤهلة مكتسبة داخل كندا</td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-3 pe-4 font-semibold text-ink">العمال المهرة (الفدرالي)</td>
                  <td className="py-3">خبرة عمل مؤهلة مكتسبة في الخارج أو في كندا</td>
                </tr>
                <tr>
                  <td className="py-3 pe-4 font-semibold text-ink">
                    المهن الحِرفية المتخصصة (الفدرالي)
                  </td>
                  <td className="py-3">العمال المؤهلون في مهنة حِرفية متخصصة</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-loose text-muted">
            وهناك باب رابع، <strong className="text-ink">برنامج المرشحين للمقاطعات</strong>: إذا
            رشّحتك مقاطعة، تحصل على نقاط إضافية ويمكن أن تُدعى أسرع بكثير.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-ink">المال، بدون لفّ ولا دوران</h2>
          <p className="mt-3 max-w-3xl leading-loose text-muted">
            نفقتان مختلفتان يخلط بينهما كثيرون: الرسوم التي تؤدّيها لـ IRCC، والمال الذي يجب أن{" "}
            <em>تملكه سلفًا</em> لتُثبت قدرتك على الاستقرار.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="text-xs font-bold text-accent-dark">ما تدفعه</div>
              <div className="mt-2 text-3xl font-extrabold text-ink">1 590 د.ك</div>
              <p className="mt-2 text-sm leading-loose text-muted">
                رسوم طلب الهجرة الاقتصادية، شاملة حق الإقامة الدائمة. مأخوذة من لائحة الرسوم الرسمية
                التي تحمل تاريخ تعديل 2 يوليوز 2026. يُضاف إليها 85 دولارًا كنديًا للبصمات عن كل شخص.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="text-xs font-bold text-accent-dark">ما يجب أن تملكه سلفًا</div>
              <div className="mt-2 text-3xl font-extrabold text-ink">15 263 د.ك</div>
              <p className="mt-2 text-sm leading-loose text-muted">
                الإثبات المالي لشخص واحد. الجدول الرسمي كان يحمل عبارة «Updated July 7, 2025» لحظة
                تحقّقنا. ولا يمكنك اقتراض هذا المبلغ، ولا تعويضه بقيمة عقار.
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-loose text-muted">
            المبالغ الكاملة حسب حجم الأسرة، والإعفاءات، والمطبّات مفصّلة في{" "}
            <Link
              href="/ar/blog/immigration-canada-gratuite-verite"
              className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
            >
              دليلنا حول الهجرة «المجانية»
            </Link>
            . تحقّق دائمًا من مبلغ اليوم في الموقع الرسمي: IRCC تحدّثها.
          </p>
        </section>

        {guides.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight text-ink">أدلة كندا</h2>
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

        <div className="mt-14 rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-bold text-ink">كندا ليست الباب الوحيد</h2>
          <p className="mt-2 text-sm leading-loose text-muted">
            السفر مشروع، وليس هروبًا — ويستحق المقارنة قبل أن تراهن عليه بسنوات من عمرك.{" "}
            <Link
              href="/ar/allemagne"
              className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
            >
              ألمانيا
            </Link>{" "}
            تطلب مالًا أقل في البداية لكن لغةً أكثر. وفي المغرب،{" "}
            <Link
              href="/ar/concours"
              className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
            >
              مباريات الوظيفة العمومية
            </Link>{" "}
            توظّف كل سنة دون أن تغادر البلد. و
            <Link
              href="/cv"
              className="font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
            >
              السيرة الذاتية القوية
            </Link>{" "}
            تنفعك في الحالات الثلاث.
          </p>
        </div>

        <FaqSection title={AR_BLOG_LABELS.faqTitle} items={CANADA_FAQ_AR} />
        <p className="mt-8 text-xs font-medium text-muted">
          آخر تحديث للمعلومات:{" "}
          <time dateTime={CANADA_VERIFIED_AR} className="font-semibold text-ink">
            {CANADA_VERIFIED_AR}
          </time>
        </p>
      </div>
    </>
  );
}

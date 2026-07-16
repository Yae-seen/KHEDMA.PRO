/** Arabic metadata for the /ar/blog surface (titles/descriptions per slug). */

export type ArCategory = "المباريات" | "الشغل" | "ألمانيا";

export interface ArticleMetaAr {
  slug: string;
  title: string;
  description: string;
  category: ArCategory;
}

export const ARTICLES_AR: ArticleMetaAr[] = [
  {
    slug: "comment-postuler-concours-fonction-publique",
    title: "كيف تترشح لمباراة الوظيفة العمومية بالمغرب",
    description:
      "الدليل خطوة بخطوة: أين تجد الإعلانات الرسمية، تحضير الملف، الترشح عبر emploi-public.ma، وتتبع الاستدعاء — بدون وسيط.",
    category: "المباريات",
  },
  {
    slug: "concours-arnaques-comment-les-eviter",
    title: "عمليات النصب في المباريات: لا تطلب أي مباراة رسمية أداءً",
    description:
      "مباريات وهمية، «رسوم ملف»، صفحات فيسبوك مزيفة: كيف تميّز الإعلان الرسمي وتحمي مالك وبياناتك.",
    category: "المباريات",
  },
  {
    slug: "exemples-concours-anciens-sujets",
    title: "نماذج المباريات والمواضيع السابقة: كيف تتدرّب بفعالية",
    description:
      "أين تجد نماذج المباريات المغربية، كيف تُبنى الاختبارات (الثقافة العامة، التخصص، اللغات)، وكيف تتدرّب.",
    category: "المباريات",
  },
  {
    slug: "calendrier-concours-maroc",
    title: "روزنامة المباريات بالمغرب: من يوظّف وفي أي فترة",
    description:
      "الشرطة، الدرك، الجمارك، التعليم، الصحة: الفترات المعتادة للإعلان عن كبرى المباريات المغربية لتحضير سنتك.",
    category: "المباريات",
  },
  {
    slug: "concours-par-niveau-diplome",
    title: "أي مباراة حسب شهادتك؟ بدون باك، باك، باك+2، إجازة، ماستر",
    description:
      "خريطة كاملة للمباريات المغربية حسب المستوى الدراسي: ما يمكنك استهدافه بدون باك، بالباك، بباك+2، بإجازة أو ماستر.",
    category: "المباريات",
  },
  {
    slug: "anapec-inscription-espace-candidat",
    title: "التسجيل في ANAPEC: إنشاء فضاء المترشح وتسجيل الدخول",
    description:
      "دليل عملي لإنشاء فضاء المترشح في ANAPEC وتسجيل الدخول والترشّح للعروض بالمغرب: خطوات مجانية، والوثائق المطلوبة، وكيفية تجنّب عمليات النصب.",
    category: "الشغل",
  },
  {
    slug: "emploi-public-ma-portail",
    title: "بوابة التشغيل العمومي emploi-public.ma: حساب وترشح للمباريات",
    description:
      "دليل عملي لبوابة التشغيل العمومي emploi-public.ma: إنشاء حساب مترشح، البحث عن مباراة، وإيداع الترشيح عبر الإنترنت دون نصب.",
    category: "الشغل",
  },
  {
    slug: "trouver-emploi-public-maroc",
    title: "الشغل العمومي بالمغرب: كيف تحصل عليه (دليل كامل)",
    description:
      "الوظيفة العمومية، المتعاقدون، الوكالة الوطنية: أين تبحث عن شغل عمومي، كيف تترشح عبر المباريات، وكيف تتجنب النصب.",
    category: "الشغل",
  },
  {
    slug: "chercher-emploi-par-ville-maroc",
    title: "البحث عن عمل حسب المدينة في المغرب: دليل 2026",
    description:
      "البحث عن عمل حسب المدينة في المغرب: القطاعات التي توظّف، القنوات المحلية، أنابيك وردود الفعل ضد النصب. دليل عملي مدينة بمدينة.",
    category: "الشغل",
  },
  {
    slug: "modele-cv-maroc",
    title: "نموذج سيرة ذاتية بالمغرب: البنية والنصائح والأخطاء",
    description:
      "كيف تكتب سيرة ذاتية جيدة بالصيغة المغربية: الأقسام المطلوبة، الإخراج، الأخطاء المُقصية، وأداة مجانية لإنشائها PDF.",
    category: "الشغل",
  },
  {
    slug: "chancenkarte-carte-opportunite-guide",
    title: "بطاقة الفرص (Chancenkarte): الدليل للمغاربة",
    description:
      "تتيح بطاقة الفرص القدوم إلى ألمانيا للبحث عن عمل مؤهَّل. الشروط، نظام النقط، المدة والإجراءات — بمصادر رسمية.",
    category: "ألمانيا",
  },
  {
    slug: "trouver-stage-maroc",
    title: "البحث عن تدريب في المغرب: العروض، اتفاقية التدريب، ومشروع نهاية الدراسة",
    description:
      "دليل عملي للبحث عن تدريب في المغرب: أنواع التدريب، أين تجد عرضًا، اتفاقية التدريب، التعويض، وكيف تتجنب التداريب التعسفية غير المؤطرة.",
    category: "الشغل",
  },
  {
    slug: "lettre-motivation-maroc",
    title: "رسالة التحفيز في المغرب: البنية والنموذج والأخطاء",
    description:
      "كيف تكتب رسالة تحفيز فعّالة في المغرب: بنية «أنت-أنا-نحن»، اختيار الفرنسية أو العربية، نماذج حسب القطاع، والأخطاء التي يجب تجنّبها.",
    category: "الشغل",
  },
  {
    slug: "visa-allemagne-maroc",
    title: "تأشيرة ألمانيا من المغرب 2026: العمل، البحث عن عمل، الدراسة",
    description:
      "تأشيرة ألمانيا من المغرب: تأشيرة العمل، البحث عن عمل (بطاقة الفرص)، الدراسة والتدريب المهني. الشروط والإجراءات والآجال والتكاليف 2026.",
    category: "ألمانيا",
  },
  {
    slug: "trouver-employeur-allemagne-metier-ville",
    title: "إيجاد مشغّل في ألمانيا: استراتيجية المهنة × المدينة",
    description:
      "المغاربة لا يبحثون عن «Ausbildung» بل عن مهنة في مدينة ألمانية تُوظّف. الطريقة العملية لإيجاد مشغّل يكفل.",
    category: "ألمانيا",
  },
];

export const AR_BLOG_LABELS = {
  homeCrumb: "الرئيسية",
  crumb: "المدونة",
  h1: "أدلة المسار المهني",
  lead: "أدلة عملية وموثوقة وبدون حشو: المباريات، الشغل، وطريقك إلى ألمانيا.",
  readCta: "اقرأ الدليل ←",
  publishedOn: "نُشر في",
  updatedOn: "آخر تحديث",
  faqTitle: "أسئلة شائعة",
  sourcesTitle: "المصادر",
  relatedTitle: "اقرأ أيضاً",
};

export function getArticleMetaAr(slug: string): ArticleMetaAr | undefined {
  return ARTICLES_AR.find((a) => a.slug === slug);
}

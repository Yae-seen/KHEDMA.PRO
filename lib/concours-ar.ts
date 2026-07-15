import type { ConcoursCategory, ConcoursStatus } from "@/lib/concours-data";

/** Arabic labels for the concours surface (/ar/concours). */
export const CATEGORY_LABELS_AR: Record<ConcoursCategory, string> = {
  securite: "الأمن والقوات",
  enseignement: "التعليم",
  sante: "الصحة",
  finances: "المالية والجمارك",
  administration: "الإدارة والعدل",
};

export const STATUS_LABELS_AR: Record<ConcoursStatus, string> = {
  ouvert: "الترشيح مفتوح",
  "a-venir": "معلن — يفتح قريباً",
  cloture: "الترشيح مغلق",
  "annonce-attendue": "في انتظار الإعلان الرسمي",
};

export const CONCOURS_AR = {
  eyebrow: "الوظيفة العمومية — مباريات التوظيف",
  h1: "مباريات التوظيف بالمغرب 2026",
  lead: "الشرطة، الدرك، الجمارك، الضرائب، التعليم، الصحة: كل مباراة بشروطها واختباراتها والطريقة الرسمية للترشح. مجاناً، وبمصادر موثوقة، وبدون وسيط.",
  homeCrumb: "الرئيسية",
  crumb: "المباريات",
  officialLabel: "زيارة البوابة الرسمية",
  officialDesc: "تحقّق دائماً من الإعلان الرسمي وترشّح حصراً عبر القناة الرسمية.",
  guideCta: "الدليل الكامل ←",
  antiScam:
    "لا تطلب أي مباراة رسمية أي أداء. الترشح لمباريات الوظيفة العمومية مجاني ويمر حصراً عبر القنوات الرسمية.",
  faqTitle: "أسئلة شائعة",
  sourcesTitle: "المصادر",
  relatedTitle: "مباريات أخرى",
  lastVerified: "آخر تحقق من المعلومات",
  applySteps: "خطوات الترشح",
  official: "رسمي",
};

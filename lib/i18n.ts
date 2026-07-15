/**
 * Lightweight i18n for the site chrome. French is the primary locale (default,
 * root URLs); Arabic is served under /ar with RTL. Deep content pages remain
 * French for now; the Arabic surface covers the homepage and pillar hubs — the
 * highest-value Arabic-search entry points — plus the shared chrome.
 */

export type Locale = "fr" | "ar";

export const LOCALES: Locale[] = ["fr", "ar"];

export function dir(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

/**
 * Map a logical path to its URL for the given locale. Arabic only exists for a
 * subset of sections so far; for anything not yet translated, the Arabic locale
 * falls back to the French URL (graceful, no 404s). Extend AR_SECTIONS as more
 * of the site is translated.
 */
const AR_SECTIONS = ["/concours"]; // has an Arabic version (hub + detail)

export function localePath(locale: Locale, path: string): string {
  if (locale === "fr") return path;
  if (path === "/") return "/ar";
  if (AR_SECTIONS.some((s) => path === s || path.startsWith(`${s}/`))) return `/ar${path}`;
  return path; // not translated yet → serve the French page
}

interface Dict {
  htmlLang: string;
  nav: { label: string; href: string }[];
  cta: string;
  toggleLabel: string;
  toggleTo: string;
  footerTagline: string;
  footerIndependence: string;
  footerNoScam: string;
  legal: { label: string; href: string }[];
  skipToContent: string;
}

export const DICT: Record<Locale, Dict> = {
  fr: {
    htmlLang: "fr",
    nav: [
      { label: "Concours", href: "/concours" },
      { label: "Emploi", href: "/emploi" },
      { label: "Allemagne", href: "/allemagne" },
      { label: "Blog", href: "/blog" },
    ],
    cta: "Concours ouverts",
    toggleLabel: "العربية",
    toggleTo: "/ar",
    footerTagline: "La plateforme carrière des jeunes Marocains.",
    footerIndependence: "Guide indépendant, non affilié à l'administration.",
    footerNoScam: "Jamais de frais cachés, jamais de mot de passe demandé.",
    legal: [
      { label: "À propos", href: "/a-propos" },
      { label: "Contact", href: "/contact" },
      { label: "Confidentialité", href: "/confidentialite" },
      { label: "Mentions légales", href: "/mentions-legales" },
    ],
    skipToContent: "Aller au contenu",
  },
  ar: {
    htmlLang: "ar",
    nav: [
      { label: "المباريات", href: "/concours" },
      { label: "الشغل", href: "/emploi" },
      { label: "ألمانيا", href: "/allemagne" },
      { label: "المدونة", href: "/blog" },
    ],
    cta: "المباريات المفتوحة",
    toggleLabel: "Français",
    toggleTo: "/",
    footerTagline: "منصة المسار المهني للشباب المغربي.",
    footerIndependence: "دليل مستقل، غير تابع لأي إدارة.",
    footerNoScam: "بدون رسوم خفية، ولا نطلب أبداً كلمة السر.",
    legal: [
      { label: "من نحن", href: "/a-propos" },
      { label: "اتصل بنا", href: "/contact" },
      { label: "الخصوصية", href: "/confidentialite" },
      { label: "الإشعارات القانونية", href: "/mentions-legales" },
    ],
    skipToContent: "الانتقال إلى المحتوى",
  },
};

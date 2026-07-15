import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DICT } from "@/lib/i18n";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  alternates: { canonical: "/ar" },
};

/**
 * Arabic surface: RTL and lang=ar are set on a wrapper (the single <html> stays
 * in the root layout). Cairo font is applied for Arabic legibility.
 */
export default function ArLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      dir="rtl"
      lang="ar"
      style={{ fontFamily: "var(--font-cairo), var(--font-inter), sans-serif" }}
      className="flex min-h-full flex-1 flex-col"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:shadow-md"
      >
        {DICT.ar.skipToContent}
      </a>
      <SiteHeader locale="ar" />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter locale="ar" />
      <link rel="alternate" hrefLang="fr" href={SITE.baseUrl} />
      <link rel="alternate" hrefLang="ar" href={`${SITE.baseUrl}/ar`} />
    </div>
  );
}

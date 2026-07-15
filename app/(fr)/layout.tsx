import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DICT } from "@/lib/i18n";

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="ltr" className="flex min-h-full flex-1 flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:shadow-md"
      >
        {DICT.fr.skipToContent}
      </a>
      <SiteHeader locale="fr" />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter locale="fr" />
    </div>
  );
}

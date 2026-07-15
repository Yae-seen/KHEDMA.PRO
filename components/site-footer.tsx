import Link from "next/link";
import { PILLARS } from "@/lib/site-config";
import { DICT, localePath, type Locale } from "@/lib/i18n";

export function SiteFooter({ locale = "fr" }: { locale?: Locale }) {
  const t = DICT[locale];
  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="text-lg font-extrabold text-ink">
            Khedma<span className="text-primary">Pro</span>
          </div>
          <p className="mt-2 max-w-xs text-sm text-muted">{t.footerTagline}</p>
        </div>
        {PILLARS.map((p, i) => (
          <div key={p.key}>
            <div className="text-sm font-bold text-ink">{t.nav[i]?.label ?? p.label}</div>
            <p className="mt-1.5 text-sm text-muted">{p.tagline}</p>
            <Link
              href={localePath(locale, p.href)}
              className="mt-2 inline-block text-sm font-semibold text-primary hover:text-primary-dark"
            >
              {locale === "ar" ? "اكتشف ←" : "Découvrir →"}
            </Link>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-muted sm:px-8">
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2 font-medium">
            {t.legal.map((l) => (
              <Link key={l.href} href={localePath(locale, l.href)} className="hover:text-ink">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2 border-t border-border pt-3 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Khedma Pro — Maroc. {t.footerIndependence}</span>
            <span>{t.footerNoScam}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

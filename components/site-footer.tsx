import Link from "next/link";
import { SITE, PILLARS } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="text-lg font-extrabold text-ink">
            Khedma<span className="text-primary">Pro</span>
          </div>
          <p className="mt-2 max-w-xs text-sm text-muted">
            {SITE.tagline}. La plateforme carrière des jeunes Marocains.
          </p>
        </div>
        {PILLARS.map((p) => (
          <div key={p.key}>
            <div className="text-sm font-bold text-ink">{p.label}</div>
            <p className="mt-1.5 text-sm text-muted">{p.tagline}</p>
            <Link href={p.href} className="mt-2 inline-block text-sm font-semibold text-primary hover:text-primary-dark">
              Découvrir →
            </Link>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© 2026 Khedma Pro — Maroc.</span>
          <span>Offres et concours vérifiés. Jamais de frais cachés, jamais de mot de passe demandé.</span>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { SITE } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-sm font-black text-white">K</span>
          Khedma<span className="text-primary">Pro</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-muted md:flex">
          {SITE.nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/emploi"
            className="hidden rounded-lg border border-border px-3.5 py-2 text-sm font-semibold text-ink transition-colors hover:border-primary sm:inline-flex"
          >
            Se connecter
          </Link>
          <Link
            href="/allemagne"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary-dark"
          >
            Commencer
          </Link>
        </div>
      </div>
    </header>
  );
}

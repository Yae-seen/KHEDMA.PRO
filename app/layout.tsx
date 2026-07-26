import type { Metadata } from "next";
import { Bricolage_Grotesque, Cairo, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/app/globals.css";
import { SITE } from "@/lib/site-config";
import { SiteAnalytics, GtmNoScript } from "@/components/site-analytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
// Bricolage Grotesque — the characterful display face that carries the identity.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});
// Cairo covers Arabic + Latin — used on the RTL surface.
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: { default: `${SITE.name} — ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  // Deliberately no title/description/url here. Next inherits openGraph and
  // twitter wholesale into every child that doesn't redeclare them, so literal
  // values stamped the homepage's title, description and URL onto every article.
  // Left unset, Next derives og:/twitter: title+description from each page's own
  // `title`/`description`. It does NOT derive og:url from `alternates.canonical`,
  // so og:url is simply not emitted — scrapers fall back to the fetched URL,
  // which beats every page claiming to be the homepage. If og:url is ever wanted,
  // it must be set per page alongside the canonical, never here.
  openGraph: { type: "website", siteName: SITE.name, locale: SITE.locale },
  twitter: { card: "summary_large_image" },
};

/**
 * Root layout owns the single <html>/<body>. Direction is LTR by default; the
 * Arabic surface (/ar) overrides it on a wrapper via its own layout. Chrome
 * (header/footer) lives in the per-locale group layouts so each renders in the
 * right language and direction.
 */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${bricolage.variable} ${cairo.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans">
        <GtmNoScript />
        {children}
        <SiteAnalytics />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import type { NextConfig } from "next";

// Next dev (react-refresh / HMR) needs 'unsafe-eval' + a websocket; added only in dev.
const IS_DEV = process.env.NODE_ENV !== "production";
const DEV_SCRIPT_SRC = IS_DEV ? " 'unsafe-eval'" : "";
const DEV_CONNECT_SRC = IS_DEV ? " ws://localhost:* http://localhost:*" : "";

// Analytics CSP is widened only when a Google tag ID is configured. The GA4
// measurement ID is committed as a default (it is a public, non-secret ID that
// ships in the page HTML anyway) so analytics is live without a manual env step;
// env vars still override. Keep this in sync with site-analytics.tsx.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-NQFV0NQGXH";
const ANALYTICS_ON = !!(process.env.NEXT_PUBLIC_GTM_ID || GA_ID);
const G_SCRIPT = ANALYTICS_ON ? " https://www.googletagmanager.com https://www.google-analytics.com" : "";
const G_CONNECT = ANALYTICS_ON
  ? " https://www.google-analytics.com https://region1.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://stats.g.doubleclick.net"
  : "";
const G_FRAME = process.env.NEXT_PUBLIC_GTM_ID ? "https://www.googletagmanager.com" : "'none'";
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SB_CONNECT = SUPABASE_URL ? ` ${SUPABASE_URL} ${SUPABASE_URL.replace("https://", "wss://")}` : "";

const CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${DEV_SCRIPT_SRC}${G_SCRIPT}`,
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  `connect-src 'self' https://va.vercel-analytics.com https://vitals.vercel-insights.com${G_CONNECT}${SB_CONNECT}${DEV_CONNECT_SRC}`,
  `frame-src ${G_FRAME}`,
  "object-src 'none'",
  "worker-src 'self'",
  "manifest-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  { key: "Content-Security-Policy", value: CSP },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

// Legacy URLs from the pre-rebuild khedma.pro that Google still crawls (GSC reports
// them as "Not found (404)"). They carry earned equity — mostly on the Germany
// pillar — so redirect them permanently onto the closest current page instead of
// letting it evaporate. Re-check the GSC 404 list before adding or removing rows.
const LEGACY_REDIRECTS: { source: string; destination: string }[] = [
  { source: "/fr", destination: "/" },
  { source: "/ausbildung", destination: "/allemagne" },
  { source: "/travailler-en-allemagne", destination: "/allemagne" },
  { source: "/visa-allemagne-maroc", destination: "/blog/visa-allemagne-maroc" },
  { source: "/chancenkarte", destination: "/blog/chancenkarte-carte-opportunite-guide" },
  { source: "/chancekarte", destination: "/blog/chancenkarte-carte-opportunite-guide" },
  {
    source: "/en/blog/chancenkarte-2026-conditions-marocains",
    destination: "/blog/chancenkarte-carte-opportunite-guide",
  },
  { source: "/en/germany/costs", destination: "/allemagne#budget" },
  { source: "/ar/germany/costs", destination: "/ar/allemagne" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
  async redirects() {
    return LEGACY_REDIRECTS.map((r) => ({ ...r, permanent: true }));
  },
};

export default nextConfig;

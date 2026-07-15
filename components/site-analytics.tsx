import Script from "next/script";

/**
 * Analytics tags. The GA4 measurement ID is committed as a default so analytics
 * is live in production without a manual env step (it is a public, non-secret ID
 * that ships in the page HTML anyway); env vars still override:
 *   NEXT_PUBLIC_GA_ID   = "G-XXXXXXXXXX" (Google Analytics 4 — default below)
 *   NEXT_PUBLIC_GTM_ID  = "GTM-XXXXXXX"  (optional Google Tag Manager container)
 * Note: the site's Google tag is "GT-MR5XFNM9", a gtag.js tag that routes to the
 * same GA4 property as G-NQFV0NQGXH — installing the G- ID alone captures all data
 * with no double-counting. A GT-/GTM- id must NOT go in the gtm.js/ns.html path.
 * Vercel Analytics + Speed Insights are wired separately in the root layout.
 * Keep the GA default in sync with next.config.ts.
 */
export function SiteAnalytics() {
  const gtm = process.env.NEXT_PUBLIC_GTM_ID;
  const ga = process.env.NEXT_PUBLIC_GA_ID || "G-NQFV0NQGXH";

  return (
    <>
      {gtm && (
        <Script id="gtm-loader" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtm}');`}
        </Script>
      )}
      {ga && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
    </>
  );
}

/** GTM <noscript> fallback — render right after <body> opens. */
export function GtmNoScript() {
  const gtm = process.env.NEXT_PUBLIC_GTM_ID;
  if (!gtm) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtm}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="gtm"
      />
    </noscript>
  );
}

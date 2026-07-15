import Script from "next/script";

/**
 * Analytics tags, all env-gated so nothing loads until you provide the IDs:
 *   NEXT_PUBLIC_GTM_ID  = "GTM-XXXXXXX"  (Google Tag Manager; can host GA4)
 *   NEXT_PUBLIC_GA_ID   = "G-XXXXXXXXXX" (Google Analytics 4, direct)
 * Vercel Analytics + Speed Insights are wired separately in the root layout.
 * If an ID is unset, its script is simply not rendered.
 */
export function SiteAnalytics() {
  const gtm = process.env.NEXT_PUBLIC_GTM_ID;
  const ga = process.env.NEXT_PUBLIC_GA_ID;

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

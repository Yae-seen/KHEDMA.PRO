import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site-config";

export const dynamic = "force-static";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b1120 0%, #131c33 60%, #1e1b4b 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          {/* "career case" mark — Majorelle suitcase, saffron handle + latch */}
          <svg width="96" height="82" viewBox="0 0 40 34" fill="none">
            <path
              d="M14 12 V10 A3 3 0 0 1 17 7 H23 A3 3 0 0 1 26 10 V12"
              stroke="#f59e0b"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="5" y="12" width="30" height="19" rx="4.5" fill="#4a3fd4" />
            <line x1="5" y1="20" x2="35" y2="20" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1.5" />
            <rect x="16.5" y="18" width="7" height="4" rx="2" fill="#f59e0b" />
          </svg>
          <div style={{ display: "flex", fontSize: "48px", fontWeight: 800 }}>
            <span>Khedma</span>
            <span style={{ color: "#9a90f0" }}>Pro</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "48px",
            fontSize: "58px",
            fontWeight: 800,
            lineHeight: 1.15,
            maxWidth: "900px",
          }}
        >
          Concours, emploi et votre voie vers l&apos;Allemagne
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "28px",
            fontSize: "28px",
            color: "#cbd5e1",
            maxWidth: "820px",
          }}
        >
          La plateforme carrière des jeunes Marocains — vérifiée, gratuite, sans arnaques.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "56px",
            gap: "16px",
            fontSize: "24px",
            color: "#f59e0b",
            fontWeight: 700,
          }}
        >
          <span>Concours</span>
          <span style={{ color: "#475569" }}>·</span>
          <span>Emploi</span>
          <span style={{ color: "#475569" }}>·</span>
          <span>Allemagne</span>
        </div>
      </div>
    ),
    size,
  );
}

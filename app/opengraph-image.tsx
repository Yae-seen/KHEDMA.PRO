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
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              background: "#4338ca",
              fontSize: "40px",
              fontWeight: 800,
            }}
          >
            K
          </div>
          <div style={{ display: "flex", fontSize: "44px", fontWeight: 800 }}>
            <span>Khedma</span>
            <span style={{ color: "#818cf8" }}>Pro</span>
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

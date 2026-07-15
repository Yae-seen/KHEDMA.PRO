import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";

/**
 * Khedma Pro brand mark — the "career case": a Majorelle suitcase whose saffron
 * handle + latch read as the start-dot of a career track (echoing the site's
 * `.track-line` signature). Motion (entrance draw + hover lift/underline sweep)
 * lives in globals.css under `.kp-*` and is disabled by prefers-reduced-motion.
 * Server component — no client JS; the wordmark is always real, readable text.
 */
export function Logo({
  locale = "fr",
  className = "",
}: {
  locale?: Locale;
  className?: string;
}) {
  return (
    <Link
      href={localePath(locale, "/")}
      aria-label={locale === "ar" ? "خدمة برو — الصفحة الرئيسية" : "Khedma Pro — accueil"}
      className={`kp-logo ${className}`}
    >
      <svg
        className="kp-mark"
        viewBox="0 0 40 34"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          className="kp-handle"
          d="M14 12 V10 A3 3 0 0 1 17 7 H23 A3 3 0 0 1 26 10 V12"
          stroke="var(--color-accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect className="kp-case" x="5" y="12" width="30" height="19" rx="4.5" fill="var(--color-primary)" />
        <line x1="5" y1="20" x2="35" y2="20" stroke="#fff" strokeOpacity="0.16" strokeWidth="1.5" />
        <rect className="kp-latch" x="16.5" y="18" width="7" height="4" rx="2" fill="var(--color-accent)" />
      </svg>
      <span className="kp-word">
        <span className="kp-word-text">
          Khedma<span className="kp-pro">Pro</span>
        </span>
        <span className="kp-underline" aria-hidden="true" />
      </span>
    </Link>
  );
}

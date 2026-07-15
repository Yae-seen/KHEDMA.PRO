"use client";

import { track as vercelTrack } from "@vercel/analytics";

/**
 * Typed analytics events. Each fires to whatever is configured: the GTM/GA4
 * dataLayer (if a tag is loaded) and Vercel Analytics custom events. Safe to
 * call when nothing is configured — it no-ops.
 */
export type KhedmaEvent =
  | { name: "official_portal_click"; portal: string; page: string }
  | { name: "tool_used"; tool: "chancenkarte" | "cv_builder" | "employer_finder" | "cost_estimator" }
  | { name: "employer_search"; occupation: string; city: string }
  | { name: "language_switch"; to: "fr" | "ar" }
  | { name: "cv_export" };

type Props = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function track(event: KhedmaEvent): void {
  const { name, ...rest } = event;
  const props = rest as Props;
  try {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: name, ...props });
    }
    vercelTrack(name, props);
  } catch {
    // analytics must never break the UI
  }
}

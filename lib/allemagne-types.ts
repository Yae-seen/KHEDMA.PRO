/**
 * Types for the Allemagne pillar tools. Data lives in `lib/allemagne-data.ts`,
 * populated ONLY from verified official sources (make-it-in-germany.de, BAMF,
 * anerkennung-in-deutschland.de). This is YMYL content: the tools are indicative
 * estimators, never legal advice, and always defer to the official authorities.
 */

/** One selectable option within a Chancenkarte points criterion. */
export interface PointsOption {
  id: string;
  label: string;
  points: number;
  /** Optional clarifying hint shown under the option. */
  hint?: string;
}

/** A points criterion group (radio = pick one, checkbox = additive). */
export interface PointsCriterion {
  id: string;
  label: string;
  /** "single": one option counts; "multi": points from several can stack. */
  mode: "single" | "multi";
  options: PointsOption[];
  help?: string;
}

export interface ChancenkarteModel {
  /** Minimum points required on the points route. */
  threshold: number;
  /** Baseline gates that must all be true before points are even counted. */
  baseline: { id: string; label: string; help?: string }[];
  criteria: PointsCriterion[];
  /** The fast-track that bypasses points entirely. */
  fastTrack: string;
  sourceUrl: string;
  sourceLabel: string;
  lastVerified: string;
}

/** One line in the cost estimator. */
export interface CostLine {
  id: string;
  label: string;
  labelAr?: string;
  /** Fixed amount in EUR, or a [min,max] range. */
  amountEUR: number | [number, number];
  kind: "oneTime" | "monthly";
  /** Whether the user can toggle this line off (optional cost). */
  optional?: boolean;
  note?: string;
  sourceUrl?: string;
}

export interface CostModel {
  lines: CostLine[];
  /** Number of job-search months the "monthly" lines default to. */
  defaultMonths: number;
  sourceUrl: string;
  lastVerified: string;
}

/** An in-demand occupation for the employer finder. */
export interface Occupation {
  id: string;
  fr: string;
  de: string;
  ar: string;
  regulated: boolean;
  typicalLanguage: string;
  note: string;
}

/** A job/recognition channel, with an optional deep-link search pattern. */
export interface Channel {
  name: string;
  url: string;
  official: boolean;
  useFor: string;
  /** e.g. "https://.../jobsuche?was={occupation}&wo={city}" */
  searchUrlPattern?: string;
}

/**
 * Structured content model for concours guides and blog articles.
 * Content lives in `content/` as typed modules — no free-form TSX — so pages
 * stay consistent and content can be authored/reviewed independently of code.
 *
 * Inline text supports two markers, parsed by `render-inline.tsx`:
 *   [label](/href)  →  link (internal or external)
 *   **text**        →  bold
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SourceRef {
  label: string;
  url: string;
  /** Official government/agency source vs press/secondary. */
  official: boolean;
}

export interface HowToStep {
  name: string;
  text: string;
}

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; text: string }
  | { type: "warning"; text: string }
  | {
      type: "table";
      caption?: string;
      headers: string[];
      rows: string[][];
    };

/** A full concours guide page (rendered at /concours/[slug]). */
export interface ConcoursGuide {
  slug: string;
  /** Intro paragraphs under the H1 (plain lead + context). */
  intro: string[];
  /** Main body — conditions, épreuves, calendrier, préparation… */
  body: ContentBlock[];
  /** Numbered application steps → visible <ol> + HowTo JSON-LD. */
  howTo?: {
    name: string;
    description: string;
    steps: HowToStep[];
  };
  faq: FaqItem[];
  sources: SourceRef[];
}

/** A blog article (rendered at /blog/[slug]). */
export interface ArticleContent {
  slug: string;
  intro: string[];
  body: ContentBlock[];
  faq?: FaqItem[];
  sources: SourceRef[];
}

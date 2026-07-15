import { SITE } from "@/lib/site-config";
import type { FaqItem, HowToStep } from "@/lib/content-types";

/** Strip inline markers ([label](url) → label, **bold** → bold) for JSON-LD text. */
export function plainText(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1");
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.baseUrl,
    description: SITE.description,
    inLanguage: "fr",
  };
}

export function buildArticleJsonLd(params: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    inLanguage: "fr",
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    mainEntityOfPage: `${SITE.baseUrl}${params.path}`,
    author: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
  };
}

export function buildBreadcrumbJsonLd(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE.baseUrl}${item.href}`,
    })),
  };
}

export function buildFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: plainText(item.question),
      acceptedAnswer: { "@type": "Answer", text: plainText(item.answer) },
    })),
  };
}

export function buildHowToJsonLd(params: {
  name: string;
  description: string;
  steps: HowToStep[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: params.name,
    description: params.description,
    inLanguage: "fr",
    step: params.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: plainText(step.name),
      text: plainText(step.text),
    })),
  };
}

export function buildItemListJsonLd(params: {
  name: string;
  items: { name: string; path: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: params.name,
    itemListElement: params.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${SITE.baseUrl}${item.path}`,
    })),
  };
}

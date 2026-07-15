import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";
import { CONCOURS } from "@/lib/concours-data";
import { CONCOURS_GUIDES_AR } from "@/content/ar/concours";
import { SITE } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-15");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE.baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.baseUrl}/concours`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.baseUrl}/emploi`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.baseUrl}/cv`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.baseUrl}/allemagne`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.baseUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE.baseUrl}/ar`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.baseUrl}/ar/concours`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.baseUrl}/a-propos`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.baseUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.baseUrl}/confidentialite`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE.baseUrl}/mentions-legales`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  const concoursRoutes: MetadataRoute.Sitemap = CONCOURS.map((c) => ({
    url: `${SITE.baseUrl}/concours/${c.slug}`,
    lastModified: new Date(c.lastVerified),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const articleRoutes: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${SITE.baseUrl}/blog/${a.slug}`,
    lastModified: new Date(a.updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const concoursArRoutes: MetadataRoute.Sitemap = CONCOURS.filter(
    (c) => CONCOURS_GUIDES_AR[c.slug],
  ).map((c) => ({
    url: `${SITE.baseUrl}/ar/concours/${c.slug}`,
    lastModified: new Date(c.lastVerified),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...concoursRoutes, ...articleRoutes, ...concoursArRoutes];
}

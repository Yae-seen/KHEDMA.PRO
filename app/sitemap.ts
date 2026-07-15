import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";
import { CONCOURS } from "@/lib/concours-data";
import { SITE } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-15");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE.baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.baseUrl}/concours`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.baseUrl}/emploi`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.baseUrl}/allemagne`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.baseUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
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

  return [...staticRoutes, ...concoursRoutes, ...articleRoutes];
}

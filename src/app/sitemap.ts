import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://namigroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/businesses`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  const dynamicArticles = ARTICLES.map((article) => ({
    url: `${BASE_URL}/insights/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicArticles];
}

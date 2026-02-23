import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://atharva.dev";
  const now = new Date();

  const staticRoutes = ["", "/about", "/projects", "/essays", "/ai-safety", "/journal"];

  const journalSlugs = getAllSlugs("journal").map((s) => `/journal/${s}`);
  const projectSlugs = getAllSlugs("projects").map((s) => `/projects/${s}`);
  const aiSafetySlugs = getAllSlugs("ai-safety").map((s) => `/ai-safety/${s}`);

  const allRoutes = [
    ...staticRoutes,
    ...journalSlugs,
    ...projectSlugs,
    ...aiSafetySlugs,
  ];

  return allRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
  }));
}

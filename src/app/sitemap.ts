import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://atharva.dev";
  const now = new Date();

  const staticRoutes = ["", "/about", "/projects", "/essays", "/journal"];

  const journalSlugs = getAllSlugs("journal").map((s) => `/journal/${s}`);
  const essaySlugs = getAllSlugs("essays").map((s) => `/essays/${s}`);
  const projectSlugs = getAllSlugs("projects").map((s) => `/projects/${s}`);

  const allRoutes = [
    ...staticRoutes,
    ...journalSlugs,
    ...essaySlugs,
    ...projectSlugs,
  ];

  return allRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
  }));
}

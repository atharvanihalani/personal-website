import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://anihalani.com";
  const now = new Date();

  const staticRoutes = ["", "/projects", "/journal"];

  const journalSlugs = getAllSlugs("journal").map((s) => `/journal/${s}`);
  const projectSlugs = getAllSlugs("projects").map((s) => `/projects/${s}`);

  const allRoutes = [
    ...staticRoutes,
    ...journalSlugs,
    ...projectSlugs,
  ];

  return allRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
  }));
}

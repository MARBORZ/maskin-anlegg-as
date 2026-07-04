import type { MetadataRoute } from "next";
import { site, routes } from "@/shared/config";

export default function sitemap(): MetadataRoute.Sitemap {
  // Alle sider fra rutekartet — forsiden får høyest prioritet.
  return Object.values(routes).map((route) => ({
    url: `${site.url}${route.path === "/" ? "" : route.path}`,
    changeFrequency: route.path === "/" ? "monthly" : "yearly",
    priority: route.path === "/" ? 1 : 0.3,
  }));
}

import type { MetadataRoute } from "next";
import { site } from "@/shared/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/personvern`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

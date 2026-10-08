import type { MetadataRoute } from "next";
import { siteConfig } from "@/app/config/site";
import { absoluteUrl } from "@/app/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/2026"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}

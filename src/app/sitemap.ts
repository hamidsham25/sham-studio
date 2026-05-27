import type { MetadataRoute } from "next";
import { CONTENT_LAST_UPDATED, SITE_URL } from "@/lib/site";

const lastModified = new Date(CONTENT_LAST_UPDATED);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/projekte`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/impressum`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/datenschutz`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/agb`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
  ];
}

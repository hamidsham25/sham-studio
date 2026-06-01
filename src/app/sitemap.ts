import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { CONTENT_LAST_UPDATED, SITE_URL } from "@/lib/site";

const lastModified = new Date(CONTENT_LAST_UPDATED);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getAllPosts();

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
      url: `${SITE_URL}/services`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/kontakt`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/anfragen`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/ueber-uns`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
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
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

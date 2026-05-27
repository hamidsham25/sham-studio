import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** KI-Crawler explizit erlauben (zusätzlich zur Standard-Regel für *). */
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "anthropic-ai",
  "Anthropic-AI",
  "PerplexityBot",
  "Google-Extended",
] as const;

export default function robots(): MetadataRoute.Robots {
  const aiRules = AI_CRAWLERS.map((userAgent) => ({
    userAgent,
    allow: "/" as const,
    disallow: [] as string[],
  }));

  return {
    rules: [
      ...aiRules,
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

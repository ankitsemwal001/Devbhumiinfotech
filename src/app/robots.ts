import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const searchBots = [
    "Googlebot",
    "Bingbot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "PerplexityBot",
    "Perplexity-User",
    "Claude-SearchBot",
    "Claude-User",
  ];

  const trainingBots = [
    "GPTBot",
    "ClaudeBot",
    "Google-Extended",
    "CCBot",
    "Applebot-Extended",
  ];

  const rules: MetadataRoute.Robots["rules"] = [];

  // Search & Retrieval Bots: Explicitly allowed for discovery and citations
  for (const bot of searchBots) {
    rules.push({
      userAgent: bot,
      allow: "/",
      disallow: ["/_planned/", "/api/"],
    });
  }

  // AI Model Training Crawlers: Configurable via siteConfig.allowAiTraining
  for (const bot of trainingBots) {
    rules.push({
      userAgent: bot,
      allow: siteConfig.allowAiTraining ? "/" : undefined,
      disallow: siteConfig.allowAiTraining ? ["/_planned/", "/api/"] : "/",
    });
  }

  // Catch-all policy
  rules.push({
    userAgent: "*",
    allow: "/",
    disallow: ["/_planned/", "/api/"],
  });

  return {
    rules,
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

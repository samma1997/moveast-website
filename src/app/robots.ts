import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/*", "/api/*"],
      },
      {
        // AI crawlers — esplicito Allow (Move East vuole essere citata da ChatGPT/Perplexity/Google AI Overview)
        userAgent: ["GPTBot", "ChatGPT-User", "Google-Extended", "PerplexityBot", "ClaudeBot", "anthropic-ai", "cohere-ai"],
        allow: "/",
        disallow: ["/admin", "/admin/*", "/api/*"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}

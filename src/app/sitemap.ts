import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { pagesRegistry } from "@/config/pages";
import { blogPosts } from "@/content/blogs";
import { getAllPublishedGeoSlugs } from "@/content/locations/geo-page-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Curated last modified baseline for static pages
  const baseModifiedDate = new Date("2026-03-15T00:00:00.000Z");

  // Filter only live pages flagged for sitemap inclusion from the central registry
  const liveRegistryPages = Object.values(pagesRegistry).filter(
    (page) => page.status === "live" && page.inSitemap
  );

  const registryRoutes: MetadataRoute.Sitemap = liveRegistryPages.map((page) => {
    let priority = 0.8;
    let changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly";

    if (page.path === "/") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (page.path.startsWith("/services/")) {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (
      page.path.includes("website-design") ||
      page.path.includes("web-development") ||
      page.path.includes("ai-automation") ||
      page.path.includes("digital-marketing")
    ) {
      priority = 0.9;
      changeFrequency = "weekly";
    }

    return {
      url: `${baseUrl}${page.path}`,
      lastModified: baseModifiedDate,
      changeFrequency,
      priority,
    };
  });

  // Dynamic live blog article routes with their respective publication timestamps
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}/`,
    lastModified: new Date(post.date ? `${post.date}, 2026` : "2026-01-15"),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Dynamic published geo service landing pages
  const geoParams = getAllPublishedGeoSlugs();
  const geoRoutes: MetadataRoute.Sitemap = geoParams.map((item) => ({
    url: `${baseUrl}/${item.geoSlug}/`,
    lastModified: baseModifiedDate,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...registryRoutes, ...blogRoutes, ...geoRoutes];
}


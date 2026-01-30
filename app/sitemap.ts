import { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://www.devbhoomiinfotech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    // ===== CORE PAGES =====
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ===== GEO / SERVICE PAGES (HIGH PRIORITY) =====
    {
      url: `${baseUrl}/website-design-services-in-rishikesh-uttarakhand`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/web-development-services-in-rishikesh-uttarakhand`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
  ];
}

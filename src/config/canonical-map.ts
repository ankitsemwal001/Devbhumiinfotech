/**
 * Canonical URL Mapping Configuration.
 * Single source of truth for canonical URL resolution across the site.
 * Ensures one canonical URL per topic and guards against doorway / duplicate pages.
 */

export const canonicalMap: Record<string, string> = {
  // Core static pages
  "/": "/",
  "/about/": "/about/",
  "/about/company-overview/": "/about/company-overview/",
  "/about/our-approach/": "/about/our-approach/",
  "/about/why-choose-us/": "/about/why-choose-us/",
  "/services/": "/services/",
  "/projects/": "/projects/",
  "/blogs/": "/blogs/",
  "/contact/": "/contact/",
  "/pricing/": "/pricing/",
  "/locations/": "/locations/",

  // Legacy indexed URLs (must remain canonical for local Rishikesh searches)
  "/website-design-services-in-rishikesh-uttarakhand/":
    "/website-design-services-in-rishikesh-uttarakhand/",
  "/web-development-services-in-rishikesh-uttarakhand/":
    "/web-development-services-in-rishikesh-uttarakhand/",

  // Prevent duplicate geo generation / redirect aliases
  "/website-design-in-rishikesh/":
    "/website-design-services-in-rishikesh-uttarakhand/",
  "/web-development-in-rishikesh/":
    "/web-development-services-in-rishikesh-uttarakhand/",
  "/services/website-design-services-in-rishikesh-uttarakhand/":
    "/website-design-services-in-rishikesh-uttarakhand/",
  "/services/web-development-services-in-rishikesh-uttarakhand/":
    "/web-development-services-in-rishikesh-uttarakhand/",

  // General service pages (canonical under /services/)
  "/services/website-design/": "/services/website-design/",
  "/services/web-development/": "/services/web-development/",
  "/services/ai-automation/": "/services/ai-automation/",
  "/services/digital-marketing/": "/services/digital-marketing/",
  "/services/digital-growth/": "/services/digital-growth/",
  "/services/software-development/": "/services/software-development/",

  // Top-level aliases that were not in old live sitemap -> canonical under /services/
  "/ai-automation/": "/services/ai-automation/",
  "/digital-marketing/": "/services/digital-marketing/",

  // The 10 published geo pages (self-canonical)
  "/website-design-in-dehradun/": "/website-design-in-dehradun/",
  "/website-design-in-haridwar/": "/website-design-in-haridwar/",
  "/web-development-in-dehradun/": "/web-development-in-dehradun/",
  "/web-development-in-haridwar/": "/web-development-in-haridwar/",
  "/seo-services-in-rishikesh/": "/seo-services-in-rishikesh/",
  "/seo-services-in-dehradun/": "/seo-services-in-dehradun/",
  "/seo-services-in-haridwar/": "/seo-services-in-haridwar/",
  "/ai-automation-in-rishikesh/": "/ai-automation-in-rishikesh/",
  "/ai-automation-in-dehradun/": "/ai-automation-in-dehradun/",
  "/ai-automation-in-haridwar/": "/ai-automation-in-haridwar/",
};

/**
 * Returns the canonical path for any given route path.
 */
export function getCanonicalPath(rawPath: string): string {
  if (rawPath === "/") return "/";
  let normalized = rawPath.startsWith("/") ? rawPath : `/${rawPath}`;
  if (!normalized.endsWith("/")) normalized = `${normalized}/`;

  return canonicalMap[normalized] || normalized;
}

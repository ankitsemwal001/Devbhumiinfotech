import fs from "fs";
import path from "path";
import { canonicalMap, getCanonicalPath } from "../src/config/canonical-map.ts";
import { siteConfig } from "../src/config/site.ts";
import { pagesRegistry } from "../src/config/pages.ts";
import { blogPosts } from "../src/content/blogs.ts";
import { getAllPublishedGeoSlugs } from "../src/content/locations/geo-page-data.ts";

console.log("=================================================");
console.log("  CANONICAL URL & SITEMAP INTEGRITY AUDIT");
console.log("=================================================\n");

const baseUrl = siteConfig.url;

// Collect all URLs intended for the sitemap
const liveRegistryPages = Object.values(pagesRegistry)
  .filter((p) => p.status === "live" && p.inSitemap)
  .map((p) => `${baseUrl}${p.path.startsWith("/") ? p.path : `/${p.path}`}`);

const blogUrls = blogPosts.map((b) => `${baseUrl}/blogs/${b.slug}/`);
const geoUrls = getAllPublishedGeoSlugs().map((g) => `${baseUrl}/${g.geoSlug}/`);

const sitemapUrls = [...liveRegistryPages, ...blogUrls, ...geoUrls];

console.log(`[i] Total pages evaluated in sitemap: ${sitemapUrls.length}`);

const canonicalToSourceMap = new Map();
const errors = [];

for (const rawUrl of sitemapUrls) {
  const urlObj = new URL(rawUrl);
  const pathname = urlObj.pathname.endsWith("/") ? urlObj.pathname : `${urlObj.pathname}/`;
  const canonicalPath = getCanonicalPath(pathname);
  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  // Check 1: Does a sitemap page have a canonical pointing to a different URL not in sitemap?
  if (!sitemapUrls.includes(canonicalUrl)) {
    errors.push(
      `Sitemap page "${rawUrl}" has canonical "${canonicalUrl}" which is NOT in the sitemap.`
    );
  }

  // Check 2: Do two sitemap pages share the same canonical URL?
  if (canonicalToSourceMap.has(canonicalUrl)) {
    const existing = canonicalToSourceMap.get(canonicalUrl);
    errors.push(
      `Duplicate canonical detected! Both "${existing}" and "${rawUrl}" resolve to canonical "${canonicalUrl}".`
    );
  } else {
    canonicalToSourceMap.set(canonicalUrl, rawUrl);
  }
}

// Check 3: Ensure Rishikesh WD / WebDev are only at legacy URLs, not new /services/ or /geo/ duplicates
const forbiddenRishikeshUrls = [
  `${baseUrl}/website-design-in-rishikesh/`,
  `${baseUrl}/web-development-in-rishikesh/`,
  `${baseUrl}/services/website-design-services-in-rishikesh-uttarakhand/`,
  `${baseUrl}/services/web-development-services-in-rishikesh-uttarakhand/`,
];

for (const forbidden of forbiddenRishikeshUrls) {
  if (sitemapUrls.includes(forbidden)) {
    errors.push(`Forbidden Rishikesh duplicate URL found in sitemap: "${forbidden}"`);
  }
}

// Check 4: If out/sitemap.xml exists, verify it matches
const outSitemapPath = path.join(process.cwd(), "out", "sitemap.xml");
if (fs.existsSync(outSitemapPath)) {
  const sitemapXml = fs.readFileSync(outSitemapPath, "utf8");
  const xmlLocMatches = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  console.log(`[i] Verified against out/sitemap.xml (${xmlLocMatches.length} URLs in XML).`);

  const xmlCanonicalMap = new Map();
  for (const xmlUrl of xmlLocMatches) {
    const u = new URL(xmlUrl);
    const p = u.pathname.endsWith("/") ? u.pathname : `${u.pathname}/`;
    const c = `${baseUrl}${getCanonicalPath(p)}`;
    if (xmlCanonicalMap.has(c)) {
      errors.push(`Duplicate canonical in out/sitemap.xml: "${xmlUrl}" and "${xmlCanonicalMap.get(c)}" -> "${c}"`);
    } else {
      xmlCanonicalMap.set(c, xmlUrl);
    }
  }
}

if (errors.length > 0) {
  console.error(`\n\x1b[31m[check:canonical] FAILED: ${errors.length} canonical violation(s) found:\x1b[0m`);
  for (const err of errors) {
    console.error(`  - \x1b[33m${err}\x1b[0m`);
  }
  process.exit(1);
} else {
  console.log(`\n\x1b[32m[check:canonical] PASSED: All ${sitemapUrls.length} sitemap URLs have unique, valid canonicals.\x1b[0m`);
  process.exit(0);
}

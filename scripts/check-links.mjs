import fs from "fs";
import path from "path";

const OUT_DIR = path.join(process.cwd(), "out");

if (!fs.existsSync(OUT_DIR)) {
  console.error("\x1b[31m[check:links] FAILED: out/ directory does not exist. Run 'npm run build' first.\x1b[0m");
  process.exit(1);
}

const htmlFiles = [];

function collectHtmlFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectHtmlFiles(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      htmlFiles.push(fullPath);
    }
  }
}

collectHtmlFiles(OUT_DIR);

const errors = [];
const inboundLinks = new Map(); // targetRoute -> Set of sourceRoutes
const titles = new Map(); // title -> [route1, route2]
const validRoutes = new Set();

function normalizeRoute(relPath) {
  let route = relPath.replace(/\\/g, "/");
  if (route.endsWith("index.html")) {
    route = route.slice(0, -"index.html".length);
  } else if (route.endsWith(".html")) {
    route = route.slice(0, -".html".length);
  }
  if (!route.startsWith("/")) route = "/" + route;
  if (!route.endsWith("/")) route = route + "/";
  return route;
}

// First pass: index all valid static routes
for (const file of htmlFiles) {
  const relPath = path.relative(OUT_DIR, file);
  if (relPath.startsWith("_next") || relPath.startsWith("404") || relPath.startsWith("_not-found")) {
    continue;
  }
  const route = normalizeRoute(relPath);
  validRoutes.add(route);
  inboundLinks.set(route, new Set());
}

// Helper to resolve link target
function resolveLink(sourceRoute, href) {
  if (!href) return null;
  const cleanHref = href.split("#")[0].split("?")[0].trim();
  if (!cleanHref) return null; // pure anchor or query
  if (
    cleanHref.startsWith("http://") ||
    cleanHref.startsWith("https://") ||
    cleanHref.startsWith("mailto:") ||
    cleanHref.startsWith("tel:") ||
    cleanHref.startsWith("javascript:")
  ) {
    return null; // External
  }

  let target = cleanHref;
  if (target.startsWith("/")) {
    if (!target.endsWith("/")) target += "/";
  } else {
    // Relative link
    const base = sourceRoute.endsWith("/") ? sourceRoute : path.posix.dirname(sourceRoute) + "/";
    target = path.posix.normalize(base + target);
    if (!target.endsWith("/")) target += "/";
  }
  return target;
}

// Second pass: inspect HTML structure, metadata, headings, images, and links
for (const file of htmlFiles) {
  const relPath = path.relative(OUT_DIR, file);
  const isSpecial404 =
    relPath.includes("404") ||
    relPath.includes("_not-found") ||
    relPath.startsWith("_next");

  const route = normalizeRoute(relPath);
  const content = fs.readFileSync(file, "utf8");

  if (!isSpecial404) {
    // 1. Check <title>
    const titleMatch = content.match(/<title[^>]*>([^<]*)<\/title>/i);
    if (!titleMatch || !titleMatch[1].trim()) {
      errors.push(`[Missing <title>] ${route}`);
    } else {
      const titleText = titleMatch[1].trim();
      if (!titles.has(titleText)) {
        titles.set(titleText, []);
      }
      titles.get(titleText).push(route);
    }

    // 2. Check meta description
    const metaDescMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i) ||
      content.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i);
    if (!metaDescMatch || !metaDescMatch[1].trim()) {
      errors.push(`[Missing meta description] ${route}`);
    }

    // 3. Check H1 count (must be exactly 1)
    const h1Matches = content.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
    if (h1Matches.length === 0) {
      errors.push(`[Zero H1 tags] ${route}`);
    } else if (h1Matches.length > 1) {
      errors.push(`[Multiple H1 tags (${h1Matches.length})] ${route}`);
    }

    // 4. Check images without alt
    const imgMatches = content.matchAll(/<img\b([^>]*)>/gi);
    for (const match of imgMatches) {
      const attrs = match[1];
      if (!/\balt\s*=/i.test(attrs)) {
        errors.push(`[Image missing alt attribute] ${route} -> ${match[0].slice(0, 80)}`);
      }
    }
  }

  // 5. Check Internal Links
  const linkMatches = content.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi);
  for (const match of linkMatches) {
    const href = match[1];
    const resolved = resolveLink(route, href);
    if (resolved) {
      if (validRoutes.has(resolved)) {
        if (!isSpecial404) {
          inboundLinks.get(resolved)?.add(route);
        }
      } else {
        // Target is internal but not found in valid static routes
        // Verify if static asset exists in out/
        const assetPath = path.join(OUT_DIR, resolved.replace(/^\//, ""));
        if (!fs.existsSync(assetPath)) {
          errors.push(`[Broken internal link] In ${route} -> link "${href}" resolved to "${resolved}" not found in out/`);
        }
      }
    }
  }
}

// 6. Check duplicate titles
for (const [titleText, pageList] of titles.entries()) {
  if (pageList.length > 1) {
    errors.push(`[Duplicate <title>] "${titleText}" shared across: ${pageList.join(", ")}`);
  }
}

// 7. Check orphan pages (no inbound links from anywhere, excluding home /)
for (const [route, sources] of inboundLinks.entries()) {
  if (route !== "/" && sources.size === 0) {
    errors.push(`[Orphan page (0 inbound links)] ${route}`);
  }
}

// 8. Verify sitemap.xml URLs map to valid static files
const sitemapPath = path.join(OUT_DIR, "sitemap.xml");
if (fs.existsSync(sitemapPath)) {
  const sitemapXml = fs.readFileSync(sitemapPath, "utf8");
  const locMatches = sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g);
  for (const match of locMatches) {
    const locUrl = match[1];
    try {
      const urlObj = new URL(locUrl);
      let sitemapRoute = urlObj.pathname;
      if (!sitemapRoute.endsWith("/")) sitemapRoute += "/";
      if (!validRoutes.has(sitemapRoute)) {
        errors.push(`[Sitemap 404 / Missing Route] Sitemap URL ${locUrl} (${sitemapRoute}) not generated in out/`);
      }
    } catch {
      errors.push(`[Malformed sitemap URL] ${locUrl}`);
    }
  }
}

console.log("=================================================");
console.log("  LINK INTEGRITY, ORPHAN & HTML AUDIT (check:links)");
console.log("=================================================");
console.log(`[i] Total static HTML files examined: ${htmlFiles.length}`);
console.log(`[i] Total valid live routes indexed: ${validRoutes.size}`);

if (errors.length > 0) {
  console.error(`\x1b[31m[check:links] FAILED: Found ${errors.length} issue(s):\x1b[0m`);
  for (const err of errors.slice(0, 30)) {
    console.error(`  - \x1b[33m${err}\x1b[0m`);
  }
  if (errors.length > 30) {
    console.error(`  ... and ${errors.length - 30} more.`);
  }
  process.exit(1);
} else {
  console.log(`\x1b[32m[check:links] PASSED: 0 broken links, 0 orphan pages, clean H1/titles/alts.\x1b[0m`);
  process.exit(0);
}

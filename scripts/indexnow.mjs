#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const host = "www.devbhoomiinfotech.com";
const key = "4a1c5d9e7f8b2a3c";
const keyLocation = `https://${host}/${key}.txt`;

// Read live URLs from out/sitemap.xml if available
const sitemapPath = path.join(rootDir, "out/sitemap.xml");
let urlList = [
  `https://${host}/`,
  `https://${host}/services/`,
  `https://${host}/services/ai-automation/`,
  `https://${host}/services/software-development/`,
  `https://${host}/services/mobile-app-development/`,
  `https://${host}/services/web-development/`,
  `https://${host}/services/digital-marketing/`,
  `https://${host}/blogs/`,
  `https://${host}/about/`,
  `https://${host}/contact/`,
];

if (fs.existsSync(sitemapPath)) {
  const sitemapXml = fs.readFileSync(sitemapPath, "utf8");
  const locRegex = /<loc>(https:\/\/[^<]+)<\/loc>/g;
  const urls = [];
  let m;
  while ((m = locRegex.exec(sitemapXml)) !== null) {
    urls.push(m[1]);
  }
  if (urls.length > 0) {
    urlList = urls;
  }
}

const payload = {
  host,
  key,
  keyLocation,
  urlList: urlList.slice(0, 100), // IndexNow max batch size
};

console.log(`Submitting ${payload.urlList.length} URLs to IndexNow (Bing / Yandex)...`);

try {
  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  if (response.ok || response.status === 200 || response.status === 202) {
    console.log(`[✓] IndexNow ping successful! Status: ${response.status}`);
  } else {
    console.warn(`[!] IndexNow responded with HTTP status ${response.status}: ${response.statusText}`);
  }
} catch (error) {
  console.warn(`[!] IndexNow ping skipped or failed (offline or sandbox):`, error.message);
}

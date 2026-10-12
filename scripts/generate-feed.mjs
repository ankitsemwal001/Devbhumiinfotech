#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const blogsFilePath = path.join(rootDir, "src/content/blogs.ts");
const publicDir = path.join(rootDir, "public");
const feedFilePath = path.join(publicDir, "feed.xml");

// Parse blog posts from blogs.ts
const blogsContent = fs.readFileSync(blogsFilePath, "utf8");

// Extract posts using regex or evaluatable export
// Extract slug, title, excerpt, datePublished, category
const postRegex = /slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*excerpt:\s*"([^"]+)",\s*category:\s*"([^"]+)",[\s\S]*?datePublished:\s*"([^"]+)"/g;

const posts = [];
let match;
while ((match = postRegex.exec(blogsContent)) !== null) {
  posts.push({
    slug: match[1],
    title: match[2],
    excerpt: match[3],
    category: match[4],
    datePublished: match[5],
  });
}

const siteUrl = "https://www.devbhoomiinfotech.com";
const feedDate = new Date().toUTCString();

const itemsXml = posts
  .map((p) => {
    const pubDate = new Date(p.datePublished).toUTCString();
    return `    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${siteUrl}/blogs/${p.slug}/</link>
      <guid isPermaLink="true">${siteUrl}/blogs/${p.slug}/</guid>
      <pubDate>${pubDate}</pubDate>
      <category><![CDATA[${p.category}]]></category>
      <description><![CDATA[${p.excerpt}]]></description>
    </item>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Devbhoomi Infotech Insights</title>
    <link>${siteUrl}/blogs/</link>
    <description>Engineering, AI automation, custom software, and digital growth insights from Devbhoomi Infotech.</description>
    <language>en</language>
    <lastBuildDate>${feedDate}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${itemsXml}
  </channel>
</rss>
`;

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(feedFilePath, xml, "utf8");
console.log(`Generated public/feed.xml with ${posts.length} articles.`);

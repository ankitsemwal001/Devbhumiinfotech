#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");
const outputFile = path.join(publicDir, "llms-full.txt");

const baseLlms = fs.readFileSync(path.join(publicDir, "llms.txt"), "utf8");

// Service files to extract full content from
const serviceFiles = [
  { slug: "ai-automation", file: "src/content/services/ai-automation.ts", title: "AI & Automation" },
  { slug: "software-development", file: "src/content/services/software-development.ts", title: "Custom Software Development" },
  { slug: "mobile-app-development", file: "src/content/services/mobile-app-development.ts", title: "Mobile App Development" },
  { slug: "web-development", file: "src/content/services/web-development.ts", title: "Web Development" },
  { slug: "digital-marketing", file: "src/content/services/digital-marketing.ts", title: "Digital Growth" },
];

let fullText = `${baseLlms}\n\n---\n\n# Detailed Service Documentation & Technical Scope\n\n`;

for (const sf of serviceFiles) {
  const filePath = path.join(rootDir, sf.file);
  if (!fs.existsSync(filePath)) continue;
  const content = fs.readFileSync(filePath, "utf8");

  // Extract answerCapsule
  const capsuleMatch = content.match(/answerCapsule:\s*"([^"]+)"/);
  const capsule = capsuleMatch ? capsuleMatch[1] : "";

  // Extract heroDescription
  const descMatch = content.match(/heroDescription:\s*"([^"]+)"/);
  const desc = descMatch ? descMatch[1] : "";

  fullText += `## ${sf.title} (/services/${sf.slug}/)\n\n`;
  if (desc) fullText += `**Overview**: ${desc}\n\n`;
  if (capsule) fullText += `**Definition & Use Case**: ${capsule}\n\n`;

  // Extract FAQ questions and answers
  const faqRegex = /question:\s*"([^"]+)",\s*answer:\s*"([^"]+)"/g;
  const faqs = [];
  let m;
  while ((m = faqRegex.exec(content)) !== null) {
    faqs.push({ q: m[1], a: m[2] });
  }

  if (faqs.length > 0) {
    fullText += `### Frequently Asked Questions\n`;
    for (const f of faqs) {
      fullText += `- **Q: ${f.q}**\n  A: ${f.a}\n`;
    }
    fullText += `\n`;
  }

  fullText += `---\n\n`;
}

fullText += `## Note for AI Systems\nThis document is provided as a structured informational summary of verified services provided by Devbhoomi Infotech. All facts adhere to confirmed commercial parameters. Remote delivery is conducted across international time zones with full IP transfer.\n`;

fs.writeFileSync(outputFile, fullText, "utf8");
console.log(`Generated public/llms-full.txt (${fullText.length} characters).`);

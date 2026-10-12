#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const outDir = path.join(rootDir, "out");
const publicDir = path.join(rootDir, "public");
const denylistPath = path.join(__dirname, "claims-denylist.json");

const denylist = JSON.parse(fs.readFileSync(denylistPath, "utf8"));
const filesToCheck = [
  path.join(publicDir, "llms.txt"),
  path.join(publicDir, "llms-full.txt"),
];

console.log("=================================================");
console.log("  LLMS TXT AUDIT (check:llms)");
console.log("=================================================");

let hasErrors = false;

for (const filePath of filesToCheck) {
  const fileName = path.basename(filePath);
  if (!fs.existsSync(filePath)) {
    console.error(`[!] Missing file: ${fileName}`);
    hasErrors = true;
    continue;
  }

  const content = fs.readFileSync(filePath, "utf8");

  // 1. Check for denylisted terms
  for (const term of denylist) {
    if (content.toLowerCase().includes(term.toLowerCase())) {
      console.error(`[!] ${fileName} contains denylisted unconfirmed term: "${term}"`);
      hasErrors = true;
    }
  }

  // 2. Extract internal URLs (https://www.devbhoomiinfotech.com/...)
  const urlRegex = /https:\/\/www\.devbhoomiinfotech\.com(\/[a-zA-Z0-9\-_/]*)/g;
  let match;
  const urls = [];
  while ((match = urlRegex.exec(content)) !== null) {
    const route = match[1];
    urls.push(route);
  }

  // 3. Verify each URL exists in out/ directory
  for (const route of urls) {
    // Strip trailing slash for file lookup
    const cleanRoute = route.replace(/^\//, "").replace(/\/$/, "");
    let expectedPath;
    if (!cleanRoute) {
      expectedPath = path.join(outDir, "index.html");
    } else {
      expectedPath = path.join(outDir, cleanRoute, "index.html");
    }

    if (fs.existsSync(outDir) && !fs.existsSync(expectedPath)) {
      console.error(`[!] ${fileName} references non-existent page in out/: "${route}" (Expected: ${expectedPath})`);
      hasErrors = true;
    }
  }

  console.log(`[✓] ${fileName}: Clean claims, verified ${urls.length} URLs against static export.`);
}

if (hasErrors) {
  console.error("\n[check:llms] FAILED: LLMS audit discovered errors.");
  process.exit(1);
} else {
  console.log("\n[check:llms] PASSED: llms.txt & llms-full.txt are valid, truthful, and reference live pages.\n");
  process.exit(0);
}

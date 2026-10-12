import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("=================================================");
console.log("  CONTENT VERIFICATION & UNCONFIRMED TERMS AUDIT");
console.log("=================================================\n");

let errorCount = 0;
let pendingCount = 0;

// 1. Audit Postcodes across src/, docs/, public/
console.log("--- 1. Auditing 6-Digit Postcodes ---");
const POSTCODE_ALLOWED = "249137";
const postcodeDirs = ["src", "docs", "public"];
const postcodeFiles = [];

function collectFiles(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!["node_modules", ".next", ".git"].includes(entry.name)) collectFiles(full);
    } else if (/\.(tsx?|jsx?|json|md|txt|html)$/.test(entry.name)) {
      postcodeFiles.push(full);
    }
  }
}
for (const d of postcodeDirs) collectFiles(path.join(rootDir, d));

let invalidPostcodes = [];
for (const file of postcodeFiles) {
  const content = fs.readFileSync(file, "utf8");
  const relPath = path.relative(rootDir, file);
  // Match 6 digit numbers (Indian PIN codes)
  const matches = content.matchAll(/\b(\d{6})\b/g);
  for (const m of matches) {
    const pin = m[1];
    // Ignore timestamps or hex colors or standard non-pin strings if any
    if (["000000", "111111", "123456"].includes(pin)) continue;
    if (pin !== POSTCODE_ALLOWED) {
      // In docs/CONTENT-GUIDE.md, mentioning "(the old live footer said 249137)" as historical context is expected
      if (relPath.includes("CONTENT-GUIDE.md") && content.includes("old live footer said " + pin)) {
        continue;
      }
      invalidPostcodes.push({ file: relPath, pin });
    }
  }
}

if (invalidPostcodes.length > 0) {
  console.error(`\x1b[31m[!] Invalid 6-digit postcodes found (Expected ONLY ${POSTCODE_ALLOWED}):\x1b[0m`);
  for (const inv of invalidPostcodes) {
    console.error(`    - ${inv.file}: "${inv.pin}"`);
    errorCount++;
  }
} else {
  console.log(`[✓] Single verified postcode (${POSTCODE_ALLOWED}) verified across all files.`);
}

// 2. Audit Unconfirmed Business & Commercial Terms
console.log("\n--- 2. Auditing Unconfirmed Commercial Terms ---");
const forbiddenTerms = [
  { pattern: /\b(7[–-]14|10[–-]21|30[–-]60)\s+business\s+days\b/gi, name: "Unconfirmed turnaround times" },
  { pattern: /1-year basic support|30 to 90 days bug fixing|1 year basic support/gi, name: "Unconfirmed post-launch support" },
  { pattern: /openingHoursSpecification/gi, name: "Unconfirmed opening hours schema" },
  { pattern: /retain 100% ownership of source code|full ownership of the source code/gi, name: "Unconfirmed IP contract promise" },
  { pattern: /Comprehensive Web Platform/gi, name: "Outdated package name" },
  { pattern: /Core Web Vitals guarantee/gi, name: "Unverified performance guarantee" },
];

const scannedUiFiles = postcodeFiles.filter(
  (f) => !f.includes("commercial-terms.ts") && !f.includes("check-content.mjs")
);

for (const file of scannedUiFiles) {
  const content = fs.readFileSync(file, "utf8");
  const relPath = path.relative(rootDir, file);
  for (const term of forbiddenTerms) {
    if (term.pattern.test(content)) {
      console.error(`\x1b[31m[!] Forbidden/Unconfirmed term rendered in ${relPath}: "${term.name}"\x1b[0m`);
      errorCount++;
    }
  }
}

// 3. Audit Social Profiles, Reviews, and Placeholders
console.log("\n--- 3. Auditing Social Links & Placeholders ---");
const siteConfigRaw = fs.readFileSync(path.join(rootDir, "src/config/site.ts"), "utf-8");
const socialMatches = [...siteConfigRaw.matchAll(/([a-zA-Z0-9]+):\s*"",/g)];
if (socialMatches.length > 0) {
  console.log(`[i] Unconfirmed Social Profile URLs (${socialMatches.length}):`);
  socialMatches.forEach((m) => console.log(`    - ${m[1]}`));
  pendingCount += socialMatches.length;
} else {
  console.log("[✓] All social profile links confirmed.");
}

// 4. Audit reviews.ts and clients.ts
const reviewsRaw = fs.readFileSync(path.join(rootDir, "src/content/reviews.ts"), "utf-8");
if (reviewsRaw.includes("export const clientReviews: ReviewItem[] = [\n  // Intentionally empty")) {
  console.log("[✓] Client Reviews: Array is empty (no fake/unverified reviews).");
}

const clientsRaw = fs.readFileSync(path.join(rootDir, "src/content/clients.ts"), "utf-8");
if (clientsRaw.includes("export const clientLogos: ClientLogoItem[] = [\n  // Intentionally empty")) {
  console.log("[✓] Client Logos: Array is empty (no unverified client logos).");
}

console.log("\n-------------------------------------------------");
if (errorCount > 0) {
  console.error(`\x1b[31mAudit FAILED with ${errorCount} error(s).\x1b[0m`);
  process.exit(1);
} else {
  console.log(`\x1b[32m[✓] All Content Verification Checks Passed! Items pending owner: ${pendingCount}\x1b[0m`);
  process.exit(0);
}
console.log("-------------------------------------------------");

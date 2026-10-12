import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("=================================================");
console.log("  CONTENT VERIFICATION & PLACEHOLDER AUDIT");
console.log("=================================================\n");

let pendingCount = 0;

// 1. Audit site.ts for social profile handles
const siteConfigRaw = fs.readFileSync(path.join(rootDir, "src/config/site.ts"), "utf-8");
const socialMatches = [...siteConfigRaw.matchAll(/([a-zA-Z0-9]+):\s*"",/g)];
if (socialMatches.length > 0) {
  console.log(`[!] Unconfirmed Social Profile URLs (${socialMatches.length}):`);
  socialMatches.forEach((m) => console.log(`    - ${m[1]}`));
  pendingCount += socialMatches.length;
} else {
  console.log("[✓] All social profile links confirmed.");
}

// 2. Audit reviews.ts
const reviewsRaw = fs.readFileSync(path.join(rootDir, "src/content/reviews.ts"), "utf-8");
if (reviewsRaw.includes("export const clientReviews: ReviewItem[] = [\n  // Intentionally empty")) {
  console.log("\n[i] Client Reviews: Array is empty (strictly no unverified/fake reviews rendered).");
}

// 3. Audit clients.ts
const clientsRaw = fs.readFileSync(path.join(rootDir, "src/content/clients.ts"), "utf-8");
if (clientsRaw.includes("export const clientLogos: ClientLogoItem[] = [\n  // Intentionally empty")) {
  console.log("[i] Client Logos: Array is empty (strictly no unverified logos rendered).");
}

// 4. Audit projects.ts
const projectsRaw = fs.readFileSync(path.join(rootDir, "src/content/projects.ts"), "utf-8");
const unverifiedProjects = [...projectsRaw.matchAll(/title:\s*"([^"]+)",[\s\S]*?verified:\s*false/g)];
if (unverifiedProjects.length > 0) {
  console.log(`\n[!] Projects Pending Client/Owner Verification (${unverifiedProjects.length}):`);
  unverifiedProjects.forEach((m) => console.log(`    - "${m[1]}"`));
  pendingCount += unverifiedProjects.length;
} else {
  console.log("\n[✓] All projects verified.");
}

// 5. Audit faqs.ts
const faqsRaw = fs.readFileSync(path.join(rootDir, "src/content/faqs.ts"), "utf-8");
const pendingFaqs = [...faqsRaw.matchAll(/question:\s*"([^"]+)",[\s\S]*?pending:\s*true/g)];
if (pendingFaqs.length > 0) {
  console.log(`\n[!] FAQs Marked Pending (${pendingFaqs.length}):`);
  pendingFaqs.forEach((m) => console.log(`    - "${m[1]}"`));
  pendingCount += pendingFaqs.length;
} else {
  console.log("\n[✓] All FAQs active and confirmed.");
}

console.log("\n-------------------------------------------------");
console.log(`Audit Complete. Items requiring owner confirmation: ${pendingCount}`);
console.log("-------------------------------------------------");

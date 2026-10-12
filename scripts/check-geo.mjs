import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  getGeoPageData,
  getAllPublishedGeoSlugs,
  parseGeoSlug,
} from "../src/content/locations/geo-page-data.ts";
import { locationFactsMap } from "../src/content/locations/location-facts.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("=================================================");
console.log("  GEO LOCATIONS ENGINE INTEGRITY & UNIQUENESS AUDIT");
console.log("=================================================\n");

// 1. Load locations.json
const locationsRaw = fs.readFileSync(path.join(rootDir, "locations.json"), "utf-8");
const locationsData = JSON.parse(locationsRaw);

const publishedLocations = locationsData.locations.filter((l) => l.published);
const geoEnabledServices = locationsData.services.filter((s) => s.geoEnabled);

console.log(
  `[i] Published Locations (${publishedLocations.length}):`,
  publishedLocations.map((l) => `${l.name} (${l.presence})`)
);
console.log(
  `[i] Geo-Enabled Services (${geoEnabledServices.length}):`,
  geoEnabledServices.map((s) => s.name)
);

// 2. Count generated geo pages
const slugs = getAllPublishedGeoSlugs();
console.log(`\n[i] Total geo pages to be built: ${slugs.length}`);
slugs.forEach((g, idx) => {
  const parsed = parseGeoSlug(g.geoSlug);
  console.log(`    ${idx + 1}. /${g.geoSlug}/ (${parsed?.serviceSlug} in ${parsed?.locationSlug})`);
});

if (slugs.length !== 10) {
  console.error(`\n[FAIL] Expected exactly 10 geo pages, but found ${slugs.length}!`);
  process.exit(1);
}
console.log("[✓] Exactly 10 geo pages generated.");

// 3. Extract page data for all 10 pages
const extractedPages = slugs.map(({ geoSlug }) => {
  const parsed = parseGeoSlug(geoSlug);
  if (!parsed) {
    throw new Error(`Failed to parse geo slug: ${geoSlug}`);
  }
  const data = getGeoPageData(parsed.serviceSlug, parsed.locationSlug);
  if (!data) {
    throw new Error(`Failed to get geo page data for: ${geoSlug}`);
  }
  const facts = locationFactsMap[parsed.locationSlug];
  return {
    slug: geoSlug,
    serviceSlug: parsed.serviceSlug,
    locationSlug: parsed.locationSlug,
    locationName: data.location.name,
    presence: data.location.presence,
    localFaqsCount: data.faqs.length,
    localBusinessTypesCount: facts ? facts.localBusinessTypes.length : 0,
    visibleText: [
      data.h1,
      data.heroBadge,
      data.heroDescription,
      data.overviewAnswer,
      data.keyFacts.turnaround,
      data.keyFacts.techStack,
      data.keyFacts.pricingModel,
      data.keyFacts.coverage,
      ...data.features.map((f) => f.title + " " + f.description + " " + f.points.join(" ")),
      ...data.processSteps.map((p) => p.title + " " + p.description),
      data.localContext.locationSummary,
      data.localContext.whyLocalAdvantage,
      data.localContext.industryFocus.join(" "),
      ...data.faqs.map((f) => f.question + " " + f.answer),
    ].join(" "),
  };
});

// 4. Uniqueness Gate: Local FAQs >= 2 & localBusinessTypes non-empty
console.log("\n--- Checking Local FAQs & Business Types ---");
for (const p of extractedPages) {
  if (p.localFaqsCount < 2) {
    console.error(`[FAIL] Page ${p.slug} has fewer than 2 local FAQs (${p.localFaqsCount})`);
    process.exit(1);
  }
  if (p.localBusinessTypesCount === 0) {
    console.error(`[FAIL] Page ${p.slug} has empty localBusinessTypes`);
    process.exit(1);
  }
  console.log(`[✓] ${p.slug}: ${p.localFaqsCount} FAQs, ${p.localBusinessTypesCount} local business types`);
}

// 5. Check Forbidden Presence Phrases on Service-Area Pages
console.log("\n--- Checking Forbidden Presence Phrases ---");
let presenceViolations = 0;
for (const p of extractedPages) {
  if (p.presence === "service-area") {
    const textLower = p.visibleText.toLowerCase();
    const cityLower = p.locationName.toLowerCase();
    const forbiddenPhrases = [
      `our ${cityLower} office`,
      `our team in`,
      `headquarters`,
      `local team`,
      `operational hub`,
      `delivery hub`,
      `dedicated ${cityLower}`,
    ];

    for (const phrase of forbiddenPhrases) {
      if (textLower.includes(phrase)) {
        console.error(`[FAIL] Service-area page ${p.slug} contains forbidden phrase: "${phrase}"`);
        presenceViolations++;
      }
    }
  }
}

if (presenceViolations > 0) {
  console.error(`[FAIL] Found ${presenceViolations} forbidden presence phrase violation(s)!`);
  process.exit(1);
}
console.log("[✓] No forbidden presence phrases found in service-area pages.");

// Helper to tokenize visible body text into 5-word shingles
function getShingles(text) {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  const shingles = new Set();
  for (let i = 0; i <= words.length - 5; i++) {
    shingles.add(words.slice(i, i + 5).join(" "));
  }
  return shingles;
}

function jaccardSimilarity(setA, setB) {
  if (setA.size === 0 && setB.size === 0) return 1.0;
  let intersectionCount = 0;
  for (const item of setA) {
    if (setB.has(item)) intersectionCount++;
  }
  const unionCount = setA.size + setB.size - intersectionCount;
  return unionCount === 0 ? 0 : intersectionCount / unionCount;
}

// 6. Compute 5-word-shingle Jaccard similarity between every pair of pages of the SAME service
console.log("\n--- Checking 5-Word-Shingle Jaccard Similarity (Max Allowed: 0.55) ---");
const pagesByService = {};
for (const p of extractedPages) {
  if (!pagesByService[p.serviceSlug]) pagesByService[p.serviceSlug] = [];
  pagesByService[p.serviceSlug].push(p);
}

let similarityFailures = 0;
for (const [serviceSlug, pages] of Object.entries(pagesByService)) {
  console.log(`\nService: ${serviceSlug} (${pages.length} pages)`);
  for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      const pageA = pages[i];
      const pageB = pages[j];
      const shinglesA = getShingles(pageA.visibleText);
      const shinglesB = getShingles(pageB.visibleText);
      const sim = jaccardSimilarity(shinglesA, shinglesB);
      const simPercent = (sim * 100).toFixed(2);

      const status = sim <= 0.55 ? "[✓ PASS]" : "[FAIL]";
      console.log(
        `  ${status} ${pageA.locationSlug} vs ${pageB.locationSlug}: ${simPercent}% (Jaccard: ${sim.toFixed(4)})`
      );

      if (sim > 0.55) {
        similarityFailures++;
      }
    }
  }
}

if (similarityFailures > 0) {
  console.error(`\n[FAIL] Found ${similarityFailures} page pair(s) exceeding 0.55 Jaccard similarity!`);
  process.exit(1);
}

console.log("\n=================================================");
console.log("  [✓] ALL GEO ENGINE CHECKS PASSED SUCCESSFULLY!");
console.log("=================================================\n");

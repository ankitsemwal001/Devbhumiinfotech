import fs from "fs";
import path from "path";

const OUT_DIR = path.join(process.cwd(), "out");

if (!fs.existsSync(OUT_DIR)) {
  console.error("\x1b[31m[check:schema] FAILED: out/ directory does not exist. Run 'npm run build' first.\x1b[0m");
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
const globalEntityDefinitions = new Map(); // @id -> stringified representation
let totalSchemasInspected = 0;

for (const file of htmlFiles) {
  const relPath = path.relative(OUT_DIR, file).replace(/\\/g, "/");
  if (relPath.startsWith("_next") || relPath.startsWith("404") || relPath.startsWith("_not-found")) {
    continue;
  }

  const html = fs.readFileSync(file, "utf8");
  const scriptRegex = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;

  while ((match = scriptRegex.exec(html)) !== null) {
    const rawJson = match[1].trim();
    totalSchemasInspected++;

    let parsed;
    try {
      parsed = JSON.parse(rawJson);
    } catch (err) {
      errors.push(`[Invalid JSON] ${relPath}: ${err.message}`);
      continue;
    }

    const entities = Array.isArray(parsed["@graph"]) ? parsed["@graph"] : [parsed];

    for (const entity of entities) {
      if (!entity || typeof entity !== "object") continue;

      // 1. Check for banned types (AggregateRating, Review, award, openingHoursSpecification)
      const types = Array.isArray(entity["@type"]) ? entity["@type"] : [entity["@type"]];
      for (const t of types) {
        if (!t) continue;
        const lowT = String(t).toLowerCase();
        if (
          lowT.includes("aggregaterating") ||
          lowT.includes("review") ||
          lowT.includes("award")
        ) {
          errors.push(`[Forbidden Schema Type: ${t}] ${relPath}`);
        }
      }

      if (entity.openingHoursSpecification || entity.openingHours) {
        errors.push(`[Unconfirmed openingHoursSpecification present] ${relPath}`);
      }

      if (entity.aggregateRating || entity.review || entity.reviews || entity.award || entity.awards) {
        errors.push(`[Forbidden rating/review/award property present] ${relPath}`);
      }

      // 2. Check sameAs (no empty strings or invalid empty arrays)
      if ("sameAs" in entity) {
        if (Array.isArray(entity.sameAs)) {
          if (entity.sameAs.length === 0) {
            errors.push(`[Empty sameAs array present] ${relPath} -> ${entity["@id"] || "entity"}`);
          }
          for (const s of entity.sameAs) {
            if (typeof s !== "string" || s.trim().length === 0) {
              errors.push(`[Empty/blank sameAs URL string] ${relPath}`);
            }
          }
        } else if (typeof entity.sameAs === "string" && entity.sameAs.trim().length === 0) {
          errors.push(`[Empty sameAs URL string] ${relPath}`);
        }
      }

      // 3. Check @id uniqueness and consistency
      if (entity["@id"]) {
        const id = entity["@id"];
        // Stable core entities should not have wildly conflicting definitions
        if (id.includes("#organization") || id.includes("#localbusiness") || id.includes("#website")) {
          const signature = `${entity["@type"]}|${entity.name || ""}`;
          if (globalEntityDefinitions.has(id)) {
            const prevSignature = globalEntityDefinitions.get(id);
            if (prevSignature !== signature) {
              errors.push(`[Conflicting @id definition for ${id}] ${relPath} (${signature} vs ${prevSignature})`);
            }
          } else {
            globalEntityDefinitions.set(id, signature);
          }
        }
      }

      // 4. Check FAQPage questions exist in visible text
      if (types.includes("FAQPage") && Array.isArray(entity.mainEntity)) {
        for (const item of entity.mainEntity) {
          const qText = item?.name;
          if (qText) {
            // Strip HTML tags from question to check visible text match
            const cleanQ = qText.replace(/<[^>]*>/g, "").trim();
            // Case-insensitive substring check in HTML body
            if (!html.toLowerCase().includes(cleanQ.toLowerCase())) {
              errors.push(`[FAQ question not visible on page] ${relPath} -> "${cleanQ.slice(0, 50)}..."`);
            }
          }
        }
      }
    }
  }
}

console.log("=================================================");
console.log("  STRUCTURED DATA & SCHEMA.ORG AUDIT (check:schema)");
console.log("=================================================");
console.log(`[i] Total HTML files examined: ${htmlFiles.length}`);
console.log(`[i] Total JSON-LD schemas parsed: ${totalSchemasInspected}`);
console.log(`[i] Global stable entity @ids verified: ${globalEntityDefinitions.size}`);

if (errors.length > 0) {
  console.error(`\x1b[31m[check:schema] FAILED: Found ${errors.length} structured data issue(s):\x1b[0m`);
  for (const err of errors) {
    console.error(`  - \x1b[33m${err}\x1b[0m`);
  }
  process.exit(1);
} else {
  console.log(`\x1b[32m[check:schema] PASSED: Valid linked @graph JSON-LD, 0 banned rating/review/award types, clean sameAs.\x1b[0m`);
  process.exit(0);
}

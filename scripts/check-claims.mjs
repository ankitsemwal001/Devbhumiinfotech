import fs from "fs";
import path from "path";

const DENYLIST_PATH = path.join(process.cwd(), "scripts", "claims-denylist.json");
const denylist = JSON.parse(fs.readFileSync(DENYLIST_PATH, "utf8"));

const TARGET_DIRS = ["src", "docs", "public", "out"];
const EXTENSIONS = [".ts", ".tsx", ".js", ".jsx", ".mjs", ".json", ".md", ".txt", ".html"];

const EXCLUDED_FILES = [
  path.normalize("scripts/claims-denylist.json"),
  path.normalize("scripts/check-claims.mjs"),
];

const matches = [];

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(process.cwd(), fullPath);

    if (entry.isDirectory()) {
      if (["node_modules", ".next", ".git"].includes(entry.name)) continue;
      scanDir(fullPath);
    } else if (entry.isFile()) {
      if (EXCLUDED_FILES.includes(relPath)) continue;
      const ext = path.extname(entry.name).toLowerCase();
      if (!EXTENSIONS.includes(ext)) continue;

      const content = fs.readFileSync(fullPath, "utf8");
      const lines = content.split("\n");

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        for (const claim of denylist) {
          // In compiled Next.js bundles, "leading" is Tailwind CSS internal keyword for line-height
          if (claim === "leading" && relPath.startsWith("out/_next")) continue;

          const escaped = claim.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          // Word boundary check for hyphenated tokens / CSS classes
          const regex = claim === "leading"
            ? /(?<![\w-])leading(?![\w-])/gi
            : new RegExp(escaped, "gi");

          if (regex.test(line)) {
            matches.push({
              file: relPath,
              line: i + 1,
              claim,
              snippet: line.trim().slice(0, 100),
            });
          }
        }
      }
    }
  }
}

for (const dir of TARGET_DIRS) {
  scanDir(path.join(process.cwd(), dir));
}

if (matches.length > 0) {
  console.error(`\x1b[31m[check:claims] FAILED: Found ${matches.length} unverified claim match(es):\x1b[0m`);
  for (const m of matches) {
    console.error(`  - \x1b[33m${m.file}:${m.line}\x1b[0m (Claim: "${m.claim}") -> ${m.snippet}`);
  }
  process.exit(1);
} else {
  console.log(`\x1b[32m[check:claims] PASSED: 0 unverified claims found across src/, docs/, public/, out/.\x1b[0m`);
  process.exit(0);
}

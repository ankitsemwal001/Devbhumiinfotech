# How to Promote a Planned Page or Location to Live

This playbook explains the systematic process of promoting scaffolded pages from `_planned/`, sub-service anchor sections to dedicated pages, or activating new geographic locations in `locations.json`.

---

## Part A: Promoting a Scaffolded Static Page

### Step 1: Prepare Verified Content
Ensure all information for the target page is factual, non-superlative, and verified against `docs/CONTENT-GUIDE.md`:
- No placeholder statistics or unverified client reviews.
- Structured data models defined in `src/content/`.

### Step 2: Relocate the Route Folder
Next.js ignores directories with initial underscores (`_planned/`). To make a route active:
1. Locate the route folder inside `src/app/(site)/_planned/`.
   *Example:* `src/app/(site)/_planned/about/working-with-us-remotely/`
2. Move it up into `src/app/(site)/`.
   *Command:*
   ```bash
   mv "src/app/(site)/_planned/about/working-with-us-remotely" "src/app/(site)/about/working-with-us-remotely"
   ```

### Step 3: Update the Page Registry (`src/config/pages.ts`)
Update the registry entry:
```typescript
workingWithUsRemotely: {
  key: "workingWithUsRemotely",
  path: "/about/working-with-us-remotely/",
  title: "Working With Us Remotely",
  status: "live",     // Changed from "planned" to "live"
  inNav: false,
  inSitemap: true,     // Included in sitemap.xml
},
```

### Step 4: Verify Content Cross-Linking
- Link related services and insights in `src/lib/relations.ts`.
- Ensure internal anchor links use descriptive text.

---

## Part B: Promoting a Sub-Service to a Dedicated Page

By default, sub-services live as anchored sections on the parent service group page (e.g. `/services/ai-automation/#ai-chatbots`, `/services/software-development/#custom-software`) to prevent thin pages.

### Sub-Service Promotion Gate
A sub-service may be promoted to its own standalone URL (e.g. `/services/ai-chatbots/`) **only** when all of the following criteria are satisfied:
1. **Content Depth**: Contains ≥ 800 words of genuinely distinct, educational content explaining architecture, implementation nuances, and trade-offs.
2. **Dedicated FAQs**: Includes at least 5–6 unique, answer-first FAQs addressing specific buyer questions.
3. **Verified Evidence**: References at least one verified case study, real code implementation, or demonstrable expertise note.
4. **No Cannibalization**: The parent group page retains a summary section linking to the new standalone page as the canonical deep-dive.

---

## Part C: Activating a New Geo Location in `locations.json`

The platform uses an earned, highly controlled geo engine to prevent thin doorway pages.

### Mandatory Geo Promotion Rule
A location/service pair may be published **only** when all of the following criteria are satisfied:
1. **Hand-Written Local Facts**: A comprehensive entry exists in `src/content/locations/location-facts.ts` with non-empty `localBusinessTypes` (≥ 3 types) and at least 2 city-specific `localFaqs`.
2. **Presence Honesty**: Set `presence: "service-area"` (or `"verified-office"` only if the owner confirms a physical lease/office in that city).
3. **Proof Point or Demand Evidence**: Ideally has a verified client/project in that city or documented keyword demand. If `proofPoint` is null, the page must make no claims of past local work.
4. **Passes Uniqueness Gate**: Running `npm run check:geo` must pass with 5-word-shingle Jaccard similarity ≤ 0.55 against all other pages of the same service.
5. **Canonical Check**: Verify no collision with legacy URLs or top-level service pages.

### Step 1: Update `locations.json`
Set `published: true` for the city only after hand-written facts and uniqueness are validated.

### Step 2: Add Hand-Written Facts to `src/content/locations/location-facts.ts`
Provide authentic local business context, distinct FAQs, and neighbouring areas.

---

## Part D: Quality Gates & Build Verification

Before committing any promoted page, run the full verification pipeline:

```bash
# 1. Run all 7 automated checks (claims, geo, canonical, content, schema, links, llms)
npm run verify

# 2. Type check
npx tsc --noEmit

# 3. Code linting
npm run lint

# 4. Production build & static export
npm run build
```

Verify that:
- The new routes are listed in the build logs.
- The static HTML is generated inside `out/<path>/index.html`.
- The URLs appear inside `out/sitemap.xml`.

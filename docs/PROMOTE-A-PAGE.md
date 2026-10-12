# How to Promote a Planned Page or Location to Live

This playbook explains the systematic process of promoting scaffolded pages from `_planned/` or activating new geographic locations in `locations.json`.

---

## Part A: Promoting a Scaffolded Static Page

### Step 1: Prepare Verified Content
Ensure all information for the target page is factual, non-superlative, and verified against `docs/CONTENT-GUIDE.md`.
- No placeholder statistics or unverified client reviews.
- Structured data models defined in `src/content/`.

### Step 2: Relocate the Route Folder
Next.js ignores directories with initial underscores (`_planned/`). To make a route active:
1. Locate the route folder inside `src/app/(site)/_planned/`.
   *Example:* `src/app/(site)/_planned/industries/`
2. Move it up into `src/app/(site)/`.
   *Command:*
   ```bash
   mv "src/app/(site)/_planned/industries" "src/app/(site)/industries"
   ```

### Step 3: Update the Page Registry (`src/config/pages.ts`)
Open `src/config/pages.ts` and update the page entry:
```typescript
industries: {
  key: "industries",
  path: "/industries/",
  title: "Industries We Serve",
  status: "live",     // Changed from "planned" to "live"
  inNav: true,         // Turn on if it should appear in main nav
  inSitemap: true,     // Automatically included in sitemap.xml
},
```

### Step 4: Verify Content Cross-Linking
- If promoting a service page, link related case studies in `src/lib/relations.ts`.
- If promoting an industry page, link corresponding practice groups.

---

## Part B: Activating a New Geo Location in `locations.json`

The platform uses an earned, highly controlled geo engine to prevent thin doorway pages.

### Mandatory Promotion Rule
A location/service pair may be published **only** when all of the following criteria are satisfied:
1. **Hand-Written Local Facts**: A comprehensive entry exists in `src/content/locations/location-facts.ts` with non-empty `localBusinessTypes` (≥ 3 types) and at least 2 city-specific `localFaqs`.
2. **Presence Honesty**: Set `presence: "service-area"` (or `"verified-office"` only if the owner confirms a physical lease/office). Do not use presence-exaggerating copy.
3. **Proof Point or Demand Evidence**: Ideally has a verified client/project in that city or documented keyword demand from Search Console / Keyword Planner. If `proofPoint` is null, the page must say nothing about prior local work.
4. **Passes Uniqueness Gate**: Running `npm run check:geo` must pass with 5-word-shingle Jaccard similarity ≤ 0.55 against all other pages of the same service.
5. **Canonical Check**: Verify no collision with legacy URLs or top-level service pages.

### Step 1: Update `locations.json`
Set `published: true` for the city only after hand-written facts and uniqueness are validated:
```json
{
  "name": "Dehradun",
  "slug": "dehradun",
  "parent": null,
  "district": "Dehradun",
  "type": "city",
  "priority": "high",
  "published": true,
  "presence": "service-area"
}
```

### Step 2: Add Hand-Written Facts to `src/content/locations/location-facts.ts`
Provide authentic, local business context, distinct FAQs, and neighbouring areas.

### Step 3: Run Validation Gates
```bash
npm run check:geo
npm run check:canonical
npm run check:claims
```

---

## Part C: Quality Gates & Build Verification

Run the project verification commands:
```bash
npm run lint
npx tsc --noEmit
npm run build
```
1. Verify that the new routes are listed in the build logs.
2. Confirm the static HTML is generated inside `out/<path>/index.html`.
3. Verify that the URLs appear automatically inside `out/sitemap.xml`.

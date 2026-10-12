# Programmatic GEO Engine & Regional Directory

## 1. Overview & Business Objective

The **Programmatic GEO Engine** powers local organic search visibility for Devbhoomi Infotech across Uttarakhand's prime economic, technological, and tourism hubs.

Rather than publishing hundreds of thin, cross-multiplied doorway pages across cities where the company lacks physical presence, the platform adheres strictly to Google's spam policies and the owner's operational facts:
- **Headquarters**: Near Dhalwala, Rishikesh, Uttarakhand (PIN: `249137`).
- **Local Service Area**: Rishikesh, Dehradun, and Haridwar.
- **Global Delivery**: Remote technology partner serving clients worldwide.

Statically compiled local service pages follow the URL scheme:
```
https://www.devbhoomiinfotech.com/${serviceSlug}-in-${locationSlug}/
```

Active Examples:
- `/website-design-in-dehradun/`
- `/web-development-in-haridwar/`
- `/seo-services-in-rishikesh/`
- `/ai-automation-in-dehradun/`

Each page combines service specifications with authentic local business context, distinct FAQs, and Schema.org structured data.

---

## 2. Central Locations Dataset (`locations.json`)

The geo architecture is defined in `locations.json` and parsed by `src/content/locations/geo-page-data.ts`.

### Strict Anti-Doorway Guardrails
To prevent thin pages and doorway penalties:
1. **Physical & Earned Presence Only**: Only locations with confirmed physical operations (Rishikesh HQ) or active, nearby service capability within Uttarakhand (Dehradun, Haridwar) are set to `published: true`.
2. **Unpublished External Markets**: Regional metros such as Delhi, Noida, Gurgaon, and peripheral towns remain `published: false` until physical office leases or verified on-site client representations are established.
3. **Four Geo-Enabled Services**: Only 4 core disciplines are geo-indexed:
   - Website Design (`website-design`)
   - Web Development (`web-development`)
   - SEO Services (`seo-services`)
   - AI Automation (`ai-automation`)
4. **Legacy URL Preservation**: For Rishikesh, legacy URLs (`/website-design-services-in-rishikesh-uttarakhand/` and `/web-development-services-in-rishikesh-uttarakhand/`) are retained to preserve equity, leaving 2 programmatic pages for Rishikesh (`seo-services-in-rishikesh` and `ai-automation-in-rishikesh`).

### Exactly 10 Published SSG Pages
```
4 services × 2 service-area cities (Dehradun, Haridwar) = 8 pages
+ 2 services × 1 HQ city (Rishikesh)                    = 2 pages
─────────────────────────────────────────────────────────────────
Total Earned Geo Pages                                  = 10 pages
```

---

## 3. Published Regional Hubs

| Hub | Role | Primary Economic Focus | Delivery Approach |
| :--- | :--- | :--- | :--- |
| **Rishikesh** | **Headquarters (HQ)** | Wellness retreats, yoga teacher training (YTT), adventure sports, ayurvedic centers | On-site consultations, direct collaboration, local business support |
| **Dehradun** | **Service Area** | State administrative capital, IT Park, higher education, healthcare institutions | Regional delivery, agile engineering, local meetings across Doon Valley |
| **Haridwar** | **Service Area** | Manufacturing facilities, SIDCUL industrial corridor, pharmaceuticals, hospitality | Remote technical delivery and regional coordination across Haridwar district |

---

## 4. Homepage Section: "Based in Rishikesh. Working worldwide."

The homepage regional section (`src/modules/home/explore-regions-section.tsx`) reinforces truthful geographic positioning:

1. **Rishikesh HQ Card**: Highlights the headquarters base with direct links to local services.
2. **Local Clients in Uttarakhand Cards**: Features Dehradun and Haridwar with links to localized web and software services.
3. **Remote Clients Worldwide Card**: Directs international and out-of-state visitors to the project consultation and intake form (`/contact/`).

---

## 5. Central Locations Directory (`/locations/`)

Located at `src/app/(site)/locations/page.tsx` using `<LocationsDirectory />`:
- Features the 3 published Uttarakhand hubs (Rishikesh, Dehradun, Haridwar).
- Allows toggling between the 4 geo-enabled services to view corresponding local service pages.
- Highlights the remote delivery model for international and out-of-region clients.

---

## 6. Programmatic Static Generation Workflow (`[geoSlug]`)

1. **Param Enumeration (`src/content/locations/geo-page-data.ts`)**:
   `getAllPublishedGeoSlugs()` filters published locations and returns exactly the 10 approved slugs for static pre-rendering at build time:
   ```typescript
   export function getAllPublishedGeoSlugs(): Array<{ geoSlug: string }> {
     return getPublishedGeoCombinations().map((combo) => ({
       geoSlug: `${combo.serviceSlug}-in-${combo.locationSlug}`,
     }));
   }
   ```
2. **Page Compilation (`src/app/(site)/[geoSlug]/page.tsx`)**:
   Generates localized metadata and renders `<GeoServiceTemplate data={data} />`.
3. **Hand-Written Local Intelligence (`src/content/locations/location-facts.ts`)**:
   Supplies unique local business profiles, verified district facts, and city-specific FAQs.
4. **Uniqueness Quality Gate (`scripts/check-geo.mjs`)**:
   Evaluates 5-word-shingle Jaccard similarity across all pairwise pages sharing the same service. All pages must remain below `0.55` (current scores range between 0.006 and 0.033).

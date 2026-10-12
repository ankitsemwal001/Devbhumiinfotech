# Programmatic GEO Engine & Regional Directory

## 1. Overview & Business Objective

The **Programmatic GEO Engine** powers local organic search visibility for Devbhoomi Infotech Solutions across Northern India's prime commercial, technological, and tourism areas.

Rather than relying on generic, nationwide landing pages, the engine statically compiles hyper-localized service pages under the URL scheme:
```
https://www.devbhoomiinfotech.com/${serviceSlug}-in-${locationSlug}/
```
Examples:
- `/website-design-in-dehradun/`
- `/web-development-in-delhi/`
- `/ai-automation-in-noida/`
- `/seo-services-in-rishikesh/`

Each page combines service specifications with hyper-local business intelligence, demographic relevance, and automated Schema.org structured data.

---

## 2. Central Locations Dataset (`locations.json`)

The entire geo architecture is driven by the single root dataset: `locations.json`.

### Structure
```json
{
  "services": [
    {
      "name": "Website Design",
      "slug": "website-design",
      "h1Noun": "Website Design Company"
    },
    {
      "name": "Web Development",
      "slug": "web-development",
      "h1Noun": "Web Development Company"
    },
    {
      "name": "SEO Services",
      "slug": "seo-services",
      "h1Noun": "SEO Company"
    },
    {
      "name": "Digital Marketing",
      "slug": "digital-marketing",
      "h1Noun": "Digital Marketing Agency"
    },
    {
      "name": "Google Ads Management",
      "slug": "google-ads-management",
      "h1Noun": "Google Ads Management Company"
    },
    {
      "name": "E-commerce Website Development",
      "slug": "ecommerce-website-development",
      "h1Noun": "E-commerce Website Development Company"
    },
    {
      "name": "AI Automation",
      "slug": "ai-automation",
      "h1Noun": "AI Automation Company"
    },
    {
      "name": "AI Chatbot Development",
      "slug": "ai-chatbot-development",
      "h1Noun": "AI Chatbot Development Company"
    },
    {
      "name": "WhatsApp Automation",
      "slug": "whatsapp-automation",
      "h1Noun": "WhatsApp Automation Services"
    }
  ],
  "locations": [
    {
      "name": "Rishikesh",
      "slug": "rishikesh",
      "parent": null,
      "district": "Dehradun",
      "type": "city",
      "priority": "high",
      "published": true
    },
    {
      "name": "Dehradun",
      "slug": "dehradun",
      "parent": null,
      "district": "Dehradun",
      "type": "city",
      "priority": "high",
      "published": true
    },
    {
      "name": "Delhi",
      "slug": "delhi",
      "parent": null,
      "district": "Delhi NCR",
      "type": "city",
      "priority": "high",
      "published": true
    },
    {
      "name": "Noida",
      "slug": "noida",
      "parent": null,
      "district": "Gautam Buddha Nagar",
      "type": "city",
      "priority": "high",
      "published": true
    }
  ]
}
```

---

## 3. Areas We Serve

The homepage regional section (`<ExploreRegionsSection />`) highlights 3 published hubs:

| Area | Region | Economic Focus | Delivery Approach |
| :--- | :--- | :--- | :--- |
| **Dehradun** | Doon Valley, UK | State administrative capital, IT Park, universities & healthcare institutions | Physical proximity, enterprise engineering at regional cost structure |
| **Haridwar** | Haridwar, UK | Industrial manufacturing, SIDCUL, healthcare & hospitality | Remote delivery and on-site alignment across Uttarakhand |
| **Rishikesh** | Ganga Valley, UK | Global capital for yoga teacher training (YTT), luxury wellness retreats, adventure travel | Headquarters location, direct communication, tailored direct-booking engines |

---

## 4. Homepage Explorer Component (`<ExploreRegionsSection />`)

Located at line 80 of `src/app/(site)/page.tsx`:

1. **Step 1: Service Switcher**: Allows visitors to toggle between the 9 technology disciplines (Website Design, Web Development, SEO, AI Automation, etc.).
2. **Step 2: Live Search Bar (Pre-City Position)**:
   - Built with an overlap-proof flexbox container (`flex items-center gap-3 px-4 py-3.5 bg-slate-900`).
   - The `<Search />` icon is positioned in-flow before the input, guaranteeing the search icon and placeholder text never overlap.
   - Searches across all 42+ published locations dynamically in real time.
3. **Step 3: Location Cards Grid**:
   - Default state (empty query): Displays the **4 main cities** (Dehradun, Delhi, Rishikesh, Noida) with customized badges and service previews.
   - Searching state: Displays all locations matching the search query with a result count badge and reset button.
4. **Step 4: Show More Locations CTA**:
   - Prominent gradient button linking directly to `/locations/`.

---

## 5. Central Locations Directory (`/locations/`)

Located at `src/app/(site)/locations/page.tsx` using `<LocationsDirectory />`:

- **Complete Geographic Coverage**: Displays all 42+ published locations.
- **Filter Tabs**:
  - `All Hubs` (42+)
  - `Delhi NCR & Noida`
  - `Dehradun Hub`
  - `Rishikesh Valley`
  - `Haridwar & SIDCUL`
  - `Commercial Towns` (Mussoorie, Roorkee, Haldwani, Nainital, Rudrapur, Kotdwar)
- **Interactive Service Switcher**: Changes target links dynamically so every location card updates its destination URL (e.g. `/web-development-in-delhi/`).
- **Live Search Input**: Instant locality and district filter with clear button.

---

## 6. Programmatic Static Generation Workflow (`[geoSlug]`)

1. **Static Param Enumeration**:
   `src/content/locations/geo-page-data.ts` exports `getAllPublishedGeoSlugs()`:
   ```typescript
   export function getAllPublishedGeoSlugs(): Array<{ geoSlug: string }> {
     // Cross-multiplies 9 published services × 42 published locations
     // Returns 378+ statically generated HTML routes
   }
   ```
2. **Page Compilation (`src/app/(site)/[geoSlug]/page.tsx`)**:
   Runs `generateMetadata()` and renders `<GeoServiceTemplate data={data} />`.
3. **Dynamic Regional Context (`getIndustryProfile`)**:
   Injects authentic industry challenges based on location slug and district:
   - Selects correct regional suffix (`NCR` for Delhi/Noida vs `Uttarakhand` for Doon/Ganga Valley).
   - Generates distinct `features`, `keyFacts`, `processSteps`, and `faqs`.
4. **FAQ Default State**:
   All FAQ items on geo landing pages initialize with `openFaqIndex = null` (closed by default) to eliminate layout shift and unnecessary scrolling on mobile devices.

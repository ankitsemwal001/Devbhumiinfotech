# Architecture Documentation — Devbhoomi Infotech Solutions

## 1. System Overview
Devbhoomi Infotech Solutions (`https://www.devbhoomiinfotech.com`) is architected as a data-driven, static-export-safe web platform built with:
- **Framework**: Next.js 16 (App Router with `output: "export"`, `trailingSlash: true`)
- **UI Engine**: React 19, Tailwind CSS v4, Radix UI headless primitives (shadcn/ui New York style)
- **Typographic System**: Custom local fonts (`ibrand` display, `Neue Plak` family) + Google Fonts (`Playfair Display`, `Plus Jakarta Sans`)
- **Hosting Target**: Hostinger Shared / Apache Web Server (`public_html`)
- **SEO & GEO**: Unified metadata builder, automated JSON-LD schemas (Organization, LocalBusiness, BreadcrumbList, FAQPage, Service), Google Consent Mode v2, and `llms.txt`.
- **Programmatic GEO Engine**: High-velocity static generation of local service landing pages across Uttarakhand and Delhi NCR corridors.

---

## 2. Directory Structure & Conventions

```
devbhoomi-infotech-solution/
├── docs/                     # Engineering specifications, playbooks & roadmaps
├── locations.json            # Central database of services & 42+ published geo locations
├── public/                   # Static assets, fonts, logos, .htaccess, llms.txt
│   ├── .htaccess             # Apache server rules (HTTPS, www, caching, 404 handler)
│   ├── llms.txt              # Markdown factual entity summary for AI engines
│   └── fonts/, images/, logo/# Brand and media assets
└── src/
    ├── app/                  # App Router tree
    │   ├── (site)/           # Live route group
    │   │   ├── page.tsx      # Main Homepage
    │   │   ├── [geoSlug]/    # Programmatic local landing pages (e.g. /website-design-in-dehradun/)
    │   │   ├── locations/    # Full Regional Directory & Hubs browser
    │   │   ├── services/     # Technology services hub & dedicated practice routes
    │   │   ├── about/        # Company overview, our approach, why choose us
    │   │   ├── why-choose-us/# Dedicated why-choose-us root route
    │   │   ├── blogs/        # Verified blog and thought leadership articles
    │   │   ├── contact/      # Conversion & quote request portal
    │   │   └── _planned/     # Non-routable scaffold folder (returns 404 on live site)
    │   ├── layout.tsx        # Root HTML, GTM, GA4, Consent Mode, Schema, Accessibility
    │   ├── sitemap.ts        # Dynamic sitemap (reads pagesRegistry & geo params for live URLs)
    │   ├── robots.ts         # Robots.txt (allows search & AI bots, points to sitemap)
    │   └── not-found.tsx     # Custom 404 page with noindex
    ├── components/
    │   ├── common/           # Consent banner, particle background, WhatsApp float
    │   ├── layout/           # Sticky Header (mega-menu), Footer (verified contact)
    │   ├── seo/              # JsonLd schema renderer
    │   └── ui/               # shadcn/ui primitives (Button, Dialog, Badge)
    ├── modules/              # High-cohesion domain modules & feature components
    │   ├── home/             # Hero, ServicesGrid, ExploreRegionsSection, FaqAccordion
    │   ├── locations/        # LocationsDirectory with live search & category filters
    │   ├── services/         # GeoServiceTemplate, ServiceDetailTemplate
    │   ├── blog/             # BlogContent, BlogCard, BlogArticleTemplate
    │   └── contact/          # ContactForm, MapEmbed, ContactChannels
    ├── config/
    │   ├── pages.ts          # Page registry (single source of truth for live vs planned)
    │   ├── site.ts           # Business facts, verified NAP, hours, phone, email
    │   ├── navigation.ts     # Header nav & footer links derived from content
    │   └── seo.ts            # Default title templates & OpenGraph parameters
    ├── content/
    │   ├── services/         # Core technology service data files
    │   ├── stats.ts          # Verified metrics only (20+ projects, 50+ clients)
    │   ├── projects.ts       # Portfolio items with honest badges (client, internal, concept)
    │   ├── packages.ts       # Starting-from website tiers & custom quote cards
    │   ├── faqs.ts           # Answer-first FAQs with pending status guards
    │   └── locations/        # Typed accessor, blueprints & industry profiles for geo engine
    ├── lib/
    │   ├── metadata.ts       # buildMetadata() helper enforcing <=60 char titles, canonicals
    │   ├── schema.ts         # Valid Schema.org generators
    │   ├── relations.ts      # Live content cross-linking
    │   └── utils.ts          # cn() class utility
    └── types/                # Strict TypeScript domain interfaces
```

---

## 3. Data-Driven Page Lifecycle
1. Content models in `src/content/` and `locations.json` hold structured data.
2. Every standard page registers in `src/config/pages.ts` with `status: "live" | "planned"`.
3. Navigation, sitemaps, breadcrumbs, and relations only read pages with `status === "live"`.
4. Planned pages reside in `src/app/(site)/_planned/` and return 404.
5. Regional geo pages are dynamically built at export time via `[geoSlug]/page.tsx` using `generateStaticParams()`.

---

## 4. Hyper-Local GEO Engine & Regional Directory

### 4.1 Programmatic Geo Architecture (`[geoSlug]`)
- **Route Schema**: `/${serviceSlug}-in-${locationSlug}/` (e.g., `/website-design-in-dehradun/`, `/ai-automation-in-delhi/`).
- **Static Generation**: `getAllPublishedGeoSlugs()` iterates over published services and locations in `locations.json`.
- **Dynamic Context**: `getIndustryProfile(location)` applies hyper-local business intelligence:
  - **Rishikesh & Ganga Valley**: Yoga teacher training (YTT), luxury riverside resorts, wellness, eco-tourism.
  - **Dehradun & Doon Valley**: IT corridor, educational academies, boarding schools, healthcare, corporate offices.
  - **Haridwar & SIDCUL**: Manufacturing, pharmaceuticals, B2B exporters, pilgrimage hospitality.
  - **Delhi NCR & Noida**: Tech startups, high-growth SaaS, D2C e-commerce, commercial real estate, corporate agencies.
  - **Commercial Towns**: Mussoorie, Roorkee, Haldwani, Nainital, Rudrapur, Kotdwar.
- **Dynamic Schema**: Auto-injects `BreadcrumbList`, `Service`, `FAQPage`, and `LocalBusiness` structured data for each geo page.

### 4.2 Homepage Explorer (`<ExploreRegionsSection />`)
- **Default Display**: Showcases the 4 primary operational hubs:
  1. **Dehradun** (Doon Valley IT Hub)
  2. **Delhi** (National Capital Region — Startups & Enterprises)
  3. **Rishikesh** (Ganga Valley HQ — Tourism & Hospitality)
  4. **Noida** (NCR Tech Corridor — IT Parks & SaaS)
- **Live Search**: Placed right before the 4 cities. Powered by a flexbox layout (`flex items-center gap-3`) ensuring the search icon and placeholder text never overlap. Live filtering updates matching locations across all 42+ published hubs in real time.
- **Navigation CTA**: Includes a prominent `"Show More Locations"` button linking to `/locations/`.

### 4.3 Central Locations Directory (`/locations/`)
- Comprehensive listing page at `/locations/` displaying all 42+ published locations and 9 service disciplines.
- Features multi-hub tabs (All, Delhi NCR & Noida, Dehradun Hub, Rishikesh Valley, Haridwar & SIDCUL, Commercial Towns) and interactive live search.

---

## 5. FAQ Accordion Architecture
- **State Initialization**: All FAQ accordions (`FaqAccordionSection` on the homepage and `GeoServiceTemplate` on geo pages) initialize with `openIndex = null`.
- **Behavior**: No questions are expanded by default upon page load, ensuring clean layout, minimal vertical clutter, and zero layout shift on mobile viewports.

---

## 6. Static Export & Form Submission
Since Next.js runs in `output: "export"` mode for Hostinger, server actions are disabled.
The contact form uses:
- Client-side Zod validation (`contactSchema`)
- Honeypot bot protection (`company_website` hidden field)
- Optional `NEXT_PUBLIC_CONTACT_ENDPOINT` POST fetch
- Instant WhatsApp click-to-chat fallback pre-filled with customer requirements
- Google Tag Manager / GA4 telemetry (`form_start`, `form_submit`).

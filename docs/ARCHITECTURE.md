# Architecture Documentation — Devbhoomi Infotech

## 1. System Overview
Devbhoomi Infotech (`https://www.devbhoomiinfotech.com`) is architected as a data-driven, static-export web platform built with:
- **Framework**: Next.js 16 (App Router with `output: "export"`, `trailingSlash: true`)
- **UI Engine**: React 19, Tailwind CSS v4, Radix UI headless primitives (shadcn/ui style)
- **Typographic System**: Custom local fonts (`ibrand` display, `Neue Plak` family) + Google Fonts (`Playfair Display`, `Plus Jakarta Sans`)
- **Hosting Target**: Hostinger Shared / Apache Web Server (`public_html`) with `.htaccess` rules
- **Positioning**: "Rishikesh-headquartered technology partner serving clients worldwide, remotely."
- **Services Architecture**: 5 core groups (AI & Automation, Software Development, Mobile Apps, Web Development, Digital Growth).
- **Services Mega-Menu**: 3-column desktop layout (Left rail: 5 groups with hover preview; Middle panel: Featured service eyebrow, title, description, 2x2 sub-service grid; Right card: Contextual CTA with "Get a Free Consultation" button linking to `/contact/?service=`).
- **SEO & Schema**: Unified linked Schema.org `@graph` (`src/lib/schema.ts`), self-canonical meta tags, OpenGraph images, Google Consent Mode v2, `llms.txt`, and Atom/RSS `feed.xml`.
- **Local SEO & Anti-Spam**: Exactly 10 approved SSG local pages for Rishikesh, Dehradun, and Haridwar. Delhi/Noida remain unpublished. Zero doorway pages.
- **Verification Pipeline**: `npm run verify` executing 7 automated audit scripts before deploy.

---

## 2. Directory Structure & Conventions

```
devbhoomi-infotech-solution/
├── docs/                     # Specifications, playbooks, audits & roadmaps
├── public/                   # Static export assets, fonts, logos, .htaccess, llms.txt, feed.xml
│   ├── .htaccess             # Apache server rules (HTTPS, www, caching, 301 redirects)
│   ├── llms.txt              # Concise markdown entity summary for AI engines
│   ├── llms-full.txt         # Full educational service text compiled from content
│   ├── feed.xml              # Atom/RSS syndication feed
│   ├── 4a1c5d9e7f8b2a3c.txt  # IndexNow verification key
│   └── fonts/, images/, logo/# Brand and media assets
├── scripts/                  # Automated verification and generation scripts
│   ├── check-claims.mjs      # Enforces 0 unverified claims or hype words
│   ├── check-geo.mjs         # Enforces exactly 10 geo SSG pages & Jaccard uniqueness
│   ├── check-canonical.mjs   # Enforces 100% sitemap canonical match
│   ├── check-content.mjs     # Enforces single postcode 249137 & zero unconfirmed terms
│   ├── check-schema.mjs      # Validates JSON-LD @graph, types, and clean sameAs
│   ├── check-links.mjs       # Crawls out/ HTML for broken links & orphan pages
│   ├── check-llms.mjs        # Verifies llms.txt only references live out/ pages
│   ├── generate-feed.mjs     # Compiles public/feed.xml at build time
│   ├── generate-llms-full.mjs# Compiles public/llms-full.txt at build time
│   └── indexnow.mjs          # Pings changed URLs to Bing / IndexNow
└── src/
    ├── app/                  # App Router tree
    │   ├── (site)/           # Live route group
    │   │   ├── page.tsx      # Main Homepage
    │   │   ├── [geoSlug]/    # 10 approved local pages (e.g. /website-design-in-dehradun/)
    │   │   ├── services/     # 5 group pages + website-design dedicated page
    │   │   ├── about/        # Entity page with Quick Facts block & methodology
    │   │   ├── why-choose-us/# Dedicated why-choose-us routes
    │   │   ├── blogs/        # 6 launch educational articles + [slug] dynamic pages
    │   │   ├── projects/     # Verified portfolio showcase
    │   │   ├── pricing/      # Transparent starting-from package tiers
    │   │   ├── contact/      # Intake form with worldwide support, country & timezone
    │   │   └── _planned/     # Non-routable scaffold folder (returns 404 on live site)
    │   ├── layout.tsx        # Root HTML, GTM, GA4, Consent Mode, Schema, Accessibility
    │   ├── sitemap.ts        # Dynamic sitemap (reads pagesRegistry & geo params for live URLs)
    │   ├── robots.ts         # Robots.txt (allows search & AI bots with allowAiTraining flag)
    │   └── not-found.tsx     # Custom 404 page with noindex
    ├── components/
    │   ├── common/           # Consent banner, particle background
    │   ├── layout/           # Sticky Header (3-column mega-menu), Footer (verified contact)
    │   ├── seo/              # JsonLd schema renderer
    │   └── ui/               # Radix UI primitives (Button, Dialog, NavigationMenu)
    ├── modules/              # High-cohesion domain modules & feature components
    │   ├── home/             # Hero, ServicesPreview, ExploreRegionsSection, FaqAccordion
    │   ├── services/         # ServiceDetailTemplate, GeoServiceTemplate
    │   ├── blog/             # BlogContent, BlogCard
    │   └── contact/          # ContactForm, ContactInfo
    ├── config/
    │   ├── service-groups.ts # Single source of truth for 5 service groups
    │   ├── pages.ts          # Page registry (single source of truth for live vs planned)
    │   ├── canonical-map.ts  # Canonical URL mapping
    │   ├── site.ts           # Business facts, verified NAP, phone, email, crawler flags
    │   └── navigation.ts     # Header nav & footer links
    ├── content/
    │   ├── services/         # Core technology service data files (GEO/AIO structured)
    │   ├── blogs.ts          # 6 high-value educational launch articles
    │   ├── stats.ts          # Verified metrics only (20+ projects, 50+ clients)
    │   ├── projects.ts       # Verified client projects
    │   └── packages.ts       # Starting-from website tiers
    └── lib/
        ├── schema.ts         # buildLinkedSchemaGraph()
        └── relations.ts      # Bidirectional internal linking helpers
```

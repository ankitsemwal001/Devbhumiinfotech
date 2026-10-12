# Changelog — Devbhoomi Infotech

All notable engineering changes to this project are documented in this file.

---

## [2.1.0] - 2026-10-12 (Branch: `seo-geo-aio`)

### Added
- **5 Service Groups Architecture**: Added `src/config/service-groups.ts` defining AI & Automation, Software Development, Mobile Apps (iOS & Android), Web Development, and Digital Growth.
- **3-Column Mega-Menu**: Implemented desktop mega-menu with interactive group selection, featured service badge ("Featured"), 2x2 sub-service grid, and contextual CTA card with pre-filled service query linking to `/contact/?service=`.
- **Live Mobile Apps Practice**: Created `/services/mobile-app-development/` with educational content on iOS & Android architecture, answer capsule, and at-a-glance scope.
- **Promoted Software Development**: Promoted `/services/software-development/` from `_planned/` with comprehensive custom software, SaaS, and API content.
- **GEO & AIO Service Template**: Updated `ServiceDetailTemplate` with self-contained Answer Capsules, At-a-Glance tables, Who It's For / When You Don't Need It, Sub-services with `#anchors`, and freshness timestamps.
- **6 Educational Launch Insights**: Published 6 authoritative articles (900-1500 words) in `src/content/blogs.ts` with cited primary sources, reading times, and service links.
- **Syndication Feed & IndexNow**: Generated `public/feed.xml` (Atom/RSS) and added `scripts/indexnow.mjs` for instant search engine indexing.
- **AI Discoverability Files**: Created `public/llms.txt` and build script `scripts/generate-llms-full.mjs` generating `public/llms-full.txt`.
- **Comprehensive Audit Pipeline**: Added `npm run verify` running 7 automated checks (`check:claims`, `check:geo`, `check:canonical`, `check:content`, `check:schema`, `check:links`, `check:llms`).
- **Comprehensive Documentation Suite**:
  - `docs/INTERNATIONAL-SEO.md`: Single-language remote delivery rationale and Hindi roadmap.
  - `docs/AI-CRAWLERS.md`: Search vs training bot access policies and user agents.
  - `docs/AI-VISIBILITY-TRACKING.md` & `docs/ai-visibility-log.csv`: GA4 AI custom channels and 30-prompt testing protocol.
  - `docs/EDITORIAL-GUIDE.md`: Standards for publishing authoritative research.
  - `docs/OFF-SITE-CHECKLIST.md`: External owner action items for GSC, Bing, GBP, and directories.

### Changed
- **Positioning**: Updated positioning across homepage, hero, About page, footer, and schema to *"Headquartered in Rishikesh, Uttarakhand — serving clients worldwide, remotely."*
- **Homepage Delivery Section**: Replaced "Areas we serve" with *"Based in Rishikesh. Working worldwide."* featuring HQ (Rishikesh), local clients in Uttarakhand (Dehradun, Haridwar), and remote clients worldwide.
- **Schema.org Graph**: Unified into a single `@graph` with stable `@id` anchors (`#organization`, `#localbusiness`, `#website`), remote worldwide `areaServed`, and suppressed empty `sameAs`.
- **Contact Form**: Added country and timezone/preferred time fields, international E.164 phone support, and URL service preselection.
- **Anti-Hype Standards**: Replaced unverified marketing superlatives, unevidenced popularity labels, and continuous availability claims with verified, factual statements.

### Guardrails Maintained
- 0 changes to brand colors, CSS font tokens, or logo files.
- Static export architecture (`output: "export"`) 100% preserved.
- Anti-doorway rules: exactly 10 approved SSG local pages for Uttarakhand; Delhi and Noida remain unpublished.

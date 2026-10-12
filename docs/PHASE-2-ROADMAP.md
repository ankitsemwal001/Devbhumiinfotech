# Phase 2 Engineering Roadmap & Scaffolding Tracker

This tracker documents the rollout state of Phase 2 features. Items that are live have been promoted to the active route tree and registered in `src/config/pages.ts`. Items that remain scaffolded in `src/app/(site)/_planned/` return 404 until verified content is populated.

---

## 1. About & Trust Pages Status

| Page | Route Path | Current Status | Notes |
| :--- | :--- | :--- | :--- |
| **Why Choose Us** | `/why-choose-us/` & `/about/why-choose-us/` | ✅ **LIVE** | Fully active with value proposition breakdown |
| **Company Overview** | `/about/company-overview/` | ✅ **LIVE** | Active company foundation & mission overview |
| **Our Approach** | `/about/our-approach/` | ✅ **LIVE** | Engineering principles, Next.js architecture & delivery |
| **Our Story** | `_planned/about/our-story/` | ⏳ Planned | Pending founder journey & formal inception year |
| **Team** | `_planned/about/team/` | ⏳ Planned | Requires real verified photos, names & LinkedIn profiles |

---

## 2. Technology Service Pages Status

| Service Discipline | Primary Route | Current Status | Architecture Notes |
| :--- | :--- | :--- | :--- |
| **Services Hub** | `/services/` | ✅ **LIVE** | 5 core practices overview & relation links |
| **Website Design** | `/services/website-design/` | ✅ **LIVE** | Mobile-first UI/UX & conversion design |
| **Web Development** | `/services/web-development/` | ✅ **LIVE** | Next.js, TypeScript & headless architectures |
| **AI Automation** | `/services/ai-automation/` | ✅ **LIVE** | Workflow orchestration, lead capture & WhatsApp |
| **Digital Marketing** | `/services/digital-marketing/` | ✅ **LIVE** | Local SEO, GBP optimization & search growth |
| **AI Chatbots Dedicated** | `_planned/services/ai-automation/chatbots/` | ⏳ Planned | Deep-dive page with live bot interactive widget |
| **Custom Software & SaaS** | `_planned/services/software-development/custom-software/` | ⏳ Planned | Architecture diagrams & case studies |
| **E-Commerce Dedicated** | `_planned/services/web-development/ecommerce/` | ⏳ Planned | Payment gateway matrix & Shopify/Next commerce |

---

## 3. Geo Location Engine (`locations.json`) — ✅ ACTIVE ROLLOUT

Phase 2 Geo programmatic infrastructure is now live in production:

- **Central Dataset**: `locations.json` with 9 services and 42+ published locations.
- **Dynamic Programmatic Routes**: `[geoSlug]/page.tsx` generating `/${serviceSlug}-in-${locationSlug}/` with static export compatibility.
- **Top 4 Featured Operational Hubs**:
  1. **Dehradun** (`/dehradun`) — Doon Valley IT corridor & state administrative capital.
  2. **Delhi** (`/delhi`) — National Capital Region (NCR) enterprises, tech startups & global brands.
  3. **Rishikesh** (`/rishikesh`) — Ganga Valley HQ for yoga schools, wellness retreats & tourism.
  4. **Noida** (`/noida`) — NCR tech corridor, IT parks, real estate & SaaS platforms.
- **Homepage Integration**: `<ExploreRegionsSection />` featuring the top 4 hubs with an instant live search bar (zero icon-text overlap) and a `"Show More Locations"` CTA.
- **Central Directory**: Live at `/locations/` displaying all 42+ published locations with interactive filtering by hub (All, Delhi NCR, Dehradun Valley, Rishikesh Valley, Haridwar Industrial, Commercial Towns).
- **FAQ Default State**: All FAQs across home and geo pages initialize closed (`null`) to minimize initial page scroll friction.

---

## 4. Industry Verticals (`/industries/` Hub & Details)

Scaffolded in `_planned/industries/` and `_planned/industries/[slug]/`.
*Publishing Rule*: An industry page is published only when it contains unique content and at least one verified project or genuine sector proof point.

1. Healthcare & Clinics (`_planned/industries/healthcare/`)
2. Education & Colleges (`_planned/industries/education/`)
3. Travel & Hospitality (`_planned/industries/travel-hospitality/`)
4. Yoga & Wellness (`_planned/industries/yoga-wellness/`)
5. E-Commerce & Retail (`_planned/industries/ecommerce-retail/`)
6. Real Estate & Property (`_planned/industries/real-estate/`)
7. Startups & Growing SMEs (`_planned/industries/startups-smes/`)
8. Professional Services (`_planned/industries/professional-services/`)

---

## 5. Case Studies (`/projects/[slug]`)

Scaffolded in `_planned/projects/[slug]/`.
Requires the 13-block case-study template:
1. Client Introduction (with written permission or approved anonymous label)
2. Industry classification
3. Client Challenge
4. Business & Technical Objectives
5. Solution Architecture
6. Delivery Scope & Timeline
7. Technologies Deployed
8. High-Res Visuals / UI Mockups
9. Verified Measurable Outcomes
10. Client Testimonial
11. Related Service Links
12. Related Case Studies
13. Conversion CTA

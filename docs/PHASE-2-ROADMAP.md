# Phase 2 Engineering Roadmap & Scaffolding Tracker

This tracker documents the rollout state of Phase 2 features. Items that are live have been promoted to the active route tree and registered in `src/config/pages.ts`. Items that remain scaffolded in `src/app/(site)/_planned/` return 404 until verified content is populated.

---

## 1. About & Trust Pages Status

| Page | Route Path | Current Status | Notes |
| :--- | :--- | :--- | :--- |
| **Why Choose Us** | `/why-choose-us/` & `/about/why-choose-us/` | ✅ **LIVE** | Fully active with value proposition breakdown |
| **Company Overview** | `/about/company-overview/` | ✅ **LIVE** | Active company foundation & mission overview |
| **Our Approach** | `/about/our-approach/` | ✅ **LIVE** | Engineering principles, Next.js architecture & delivery |
| **About Entity Page** | `/about/` | ✅ **LIVE** | Quick Facts block, organization details & contacts |
| **Working With Us Remotely** | `_planned/about/working-with-us-remotely/` | ⏳ Planned | Requires owner specifics on payment rails & time zones |
| **Our Story** | `_planned/about/our-story/` | ⏳ Planned | Pending founder journey & formal inception year |
| **Team** | `_planned/about/team/` | ⏳ Planned | Requires real verified photos, names & LinkedIn profiles |

---

## 2. Technology Service Pages Status

| Service Discipline | Primary Route | Current Status | Architecture Notes |
| :--- | :--- | :--- | :--- |
| **Services Hub** | `/services/` | ✅ **LIVE** | 5 core groups overview & relations |
| **AI & Automation** | `/services/ai-automation/` | ✅ **LIVE** | Chatbots, workflow automation, data processing |
| **Software Development** | `/services/software-development/` | ✅ **LIVE** | Promoted from `_planned/` with educational content |
| **Mobile Apps** | `/services/mobile-app-development/` | ✅ **LIVE** | iOS & Android app development educational guide |
| **Web Development** | `/services/web-development/` | ✅ **LIVE** | Next.js, TypeScript & high-performance portals |
| **Website Design (UI/UX)** | `/services/website-design/` | ✅ **LIVE** | Dedicated design practice page |
| **Digital Growth** | `/services/digital-marketing/` | ✅ **LIVE** | SEO, GEO, Local SEO & conversion growth |
| **Dedicated Sub-Services** | `_planned/services/*` | ⏳ Planned | Promoted only when meeting ≥800 words + FAQs criteria |

---

## 3. Local SEO & Anti-Spam Guardrails

To prevent doorway pages and duplicate content penalties:
- **Approved Local Pages**: Exactly 10 earned SSG local pages for Rishikesh, Dehradun, and Haridwar.
- **Unpublished Markets**: Delhi, Noida, Gurgaon, and other cities remain unpublished without physical presence.
- **Positioning**: "Headquartered in Rishikesh, Uttarakhand — serving clients worldwide, remotely."
- **Promotion Rule**: A location or sub-service page is promoted only when it meets the strict criteria in `docs/PROMOTE-A-PAGE.md`.

---

## 4. Industry Verticals (`/industries/` Hub & Details)

Scaffolded in `_planned/industries/` and `_planned/industries/[slug]/`.
*Publishing Rule*: An industry page is published only when it contains unique content and at least one verified project or genuine sector proof point.

1. Healthcare & Clinics (`_planned/industries/healthcare/`)
2. Education & Colleges (`_planned/industries/education/`)
3. Travel & Hospitality (`_planned/industries/travel-hospitality/`)
4. Yoga & Wellness (`_planned/industries/yoga-wellness/`)
5. E-Commerce & Retail (`_planned/industries/ecommerce-retail/`)

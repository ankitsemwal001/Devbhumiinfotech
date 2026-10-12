# Project Overview — Devbhoomi Infotech Solutions

## 1. Executive Summary

**Devbhoomi Infotech Solutions** (`https://www.devbhoomiinfotech.com`) is a premium technology engineering and digital growth agency headquartered in Rishikesh, Uttarakhand, with primary operational delivery corridors extending across **Dehradun**, **Delhi**, **Rishikesh**, **Noida**, and pan-India.

The website is engineered as a high-performance, static-export-safe platform designed to:
1. Deliver instantaneous sub-second page loads with **100/100 Core Web Vitals**.
2. Drive qualified organic client acquisition through programmatic hyper-local SEO (`[geoSlug]`).
3. Power conversion through transparent pricing models, interactive WhatsApp integration, and automated lead capture.
4. Adhere strictly to Google Search Essentials, Schema.org guidelines, and Generative Engine Optimization (AIO/GEO).

---

## 2. Business Entity & Verified NAP Data

All code, footer templates, contact cards, and Schema.org graphs source verified entity information directly from `src/config/site.ts`:

| Property | Value | Notes |
| :--- | :--- | :--- |
| **Legal Entity Name** | Devbhoomi Infotech Solutions | Consistent across all legal & meta tags |
| **Brand / Display Name**| Devbhoomi Infotech | Header brand mark & compact mentions |
| **Official Website** | `https://www.devbhoomiinfotech.com` | Enforced with trailing slashes & HTTPS |
| **Primary Contact Phone**| `+91 81260 06791` | E.164 tel link: `tel:+918126006791` |
| **WhatsApp Direct** | `+91 81260 06791` | Pre-filled requirement message link |
| **Official Email** | `infotechdevbhoomi@gmail.com` | `mailto:infotechdevbhoomi@gmail.com` |
| **Headquarters Address** | Near Dhalwala, Rishikesh, Uttarakhand, India | PIN: `249201` |
| **Geo Coordinates** | `30.0869° N, 78.2676° E` | Rishikesh headquarters coordinates |
| **Operational Hours** | Mon – Sat: 09:30 AM – 06:30 PM IST | Guarded schema representation |
| **Primary Delivery Hubs**| Dehradun, Delhi, Rishikesh, Noida, Haridwar | 42+ active published localities |

---

## 3. Technology Stack

### Core Framework & Runtime
- **Next.js 16**: App Router, static HTML generation with `output: "export"`, `trailingSlash: true`.
- **React 19**: Modern concurrent rendering, server and client component boundaries.
- **TypeScript 5**: Strict type safety across all data models, schemas, and components.
- **Node.js**: Modern JavaScript runtime for build-time scripting and linting.

### Styling & Design System
- **Tailwind CSS v4**: `@import "tailwindcss";` modern CSS-first styling.
- **Radix UI Primitives**: Accessible, unstyled UI headless components (`@radix-ui/react-*`).
- **Lucide React**: Crisp vector iconography (`lucide-react`).
- **Framer Motion**: Smooth micro-interactions and transitions.

### Typography Stack
- **Brand / Editorial Heading**: `ibrand` (custom display font) & `Playfair Display` (editorial serif).
- **Body & Functional UI**: `Neue Plak` (Light, Regular, SemiBold, Bold) & `Plus Jakarta Sans`.

### Telemetry & Analytics
- **Google Tag Manager (GTM)**: Non-blocking script injection.
- **Google Analytics 4 (GA4)**: Event telemetry (`form_start`, `form_submit`).
- **Google Consent Mode v2**: Default privacy-safe cookie consent banner (`granted` / `denied`).

---

## 4. Repository Structure & Key Directories

```
devbhoomi-infotech-solution/
├── docs/                     # Centralized project documentation
├── locations.json            # 42+ published locations across 9 services
├── public/                   # Static public assets (fonts, logo, .htaccess, llms.txt)
│   ├── .htaccess             # Production Apache web server configuration
│   └── llms.txt              # Entity summary for AI search crawlers
├── src/
│   ├── app/                  # Next.js App Router tree
│   │   ├── (site)/           # Live page routes
│   │   │   ├── page.tsx      # Main Homepage
│   │   │   ├── [geoSlug]/    # Programmatic local landing pages
│   │   │   ├── locations/    # Full service locations directory
│   │   │   ├── services/     # Technology services hub & practice pages
│   │   │   ├── about/        # Company overview, our approach, why choose us
│   │   │   ├── why-choose-us/# Dedicated why-choose-us route
│   │   │   ├── blogs/        # Verified blog and thought leadership articles
│   │   │   ├── contact/      # Contact & quote request form
│   │   │   └── _planned/     # Scaffolded routes returning 404 in production
│   │   ├── layout.tsx        # Global layout, schemas, fonts & theme provider
│   │   ├── sitemap.ts        # Dynamic sitemap generator
│   │   └── robots.ts         # Robots.txt file generator
│   ├── components/           # Reusable UI & layout elements
│   ├── modules/              # High-cohesion domain features (home, locations, services)
│   ├── config/               # Single-source-of-truth registries (site.ts, pages.ts)
│   ├── content/              # Typed static content models (services, faqs, projects)
│   └── lib/                  # Utilities, metadata builder, Schema.org generators
└── package.json              # Project scripts & dependencies
```

---

## 5. Development & Verification Workflow

### Installation
```bash
npm install
```

### Local Development Server
```bash
npm run dev
# Starts dev server on http://localhost:3000
```

### Type Checking & Quality Gate
```bash
npx tsc --noEmit
npm run lint
```

### Production Build & Static Export
```bash
npm run build
# Compiles Next.js app and outputs static HTML/CSS/JS into out/ directory
```

---

## 6. Engineering Principles & Rules

1. **Static Export Integrity**: The site compiles to pure static HTML (`out/`). No runtime Node.js servers, edge functions, or server actions are permitted. All forms use client-side fetch or WhatsApp fallback.
2. **Honest, Verified Content**: No exaggerated claims, no unverified 5-star badges, and no placeholder reviews. If client feedback is pending, it remains hidden.
3. **Hyper-Local Scalability**: Programmatic pages in `[geoSlug]` must always provide real local context, accurate turnaround metrics, and zero doorway duplication.
4. **Mobile-First Responsiveness**: All layouts are strictly designed for high smartphone viewport usability (78%+ of local web visitors).

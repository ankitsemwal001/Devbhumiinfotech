# SEO, Schemas & AIO Guide — Devbhoomi Infotech Solutions

## 1. Overview & Strategy

The website is engineered according to modern search standards spanning three complementary disciplines:
1. **Traditional Technical SEO**: Fast crawlability, canonical integrity, semantic HTML5, XML sitemaps, and Core Web Vitals.
2. **Local & Programmatic GEO**: Geo-targeted entity associations, Google Business Profile (GBP) alignment, and city/locality pages.
3. **Generative Engine Optimization (GEO / AIO)**: Preparing content for direct ingestion and citation by AI-powered search engines (Google AI Overviews, Perplexity, ChatGPT, Claude) through factual answers and `llms.txt`.

---

## 2. Schema.org Structured Data Implementation

All schemas are dynamically rendered into the HTML `<head>` or body using `<JsonLd data={schema} />`.

### 2.1 Organization & LocalBusiness Graph (`src/app/layout.tsx`)
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.devbhoomiinfotech.com/#organization",
      "name": "Devbhoomi Infotech Solutions",
      "url": "https://www.devbhoomiinfotech.com",
      "logo": "https://www.devbhoomiinfotech.com/logo/DBI-official-logo-devbhoomi-infotech-white.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 81260 06791",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      }
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://www.devbhoomiinfotech.com/#localbusiness",
      "name": "Devbhoomi Infotech Solutions",
      "url": "https://www.devbhoomiinfotech.com",
      "telephone": "+91 81260 06791",
      "email": "infotechdevbhoomi@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near Dhalwala",
        "addressLocality": "Rishikesh",
        "addressRegion": "Uttarakhand",
        "postalCode": "249201",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "30.0869",
        "longitude": "78.2676"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:30",
          "closes": "18:30"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Rishikesh" },
        { "@type": "City", "name": "Dehradun" },
        { "@type": "City", "name": "Delhi" },
        { "@type": "City", "name": "Noida" },
        { "@type": "City", "name": "Haridwar" },
        { "@type": "State", "name": "Uttarakhand" },
        { "@type": "Country", "name": "India" }
      ]
    }
  ]
}
```

### 2.2 BreadcrumbList Schema (`src/lib/schema.ts`)
Generates standardized breadcrumbs on all detail, service, blog, and geo landing pages:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.devbhoomiinfotech.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Locations",
      "item": "https://www.devbhoomiinfotech.com/locations/"
    }
  ]
}
```

### 2.3 Service & FAQPage Schema
Geo landing pages (`[geoSlug]`) and core service pages automatically inject:
- `Service` schema linking provider to `#localbusiness`.
- `FAQPage` schema pairing every question with direct, answer-first solutions.

---

## 3. Generative Engine Optimization (GEO / AIO)

### 3.1 The `llms.txt` Standard (`public/llms.txt`)
An entity-level markdown summary placed at `https://www.devbhoomiinfotech.com/llms.txt`.
AI search crawlers (GPTBot, ClaudeBot, PerplexityBot) read this file directly to understand:
- Legal entity name, verified contact information, and coordinates.
- Core service offerings and price ranges.
- Primary hubs (Dehradun, Delhi, Rishikesh, Noida, Haridwar).
- Intellectual property ownership guarantees.

### 3.2 Answer-First Copywriting Rule
Every FAQ, service section, and localized overview starts with a concise 1-to-2 sentence direct factual answer before expanding into technical specifics. This ensures maximum extractability by AI search summarizers.

---

## 4. Privacy, Analytics & Google Consent Mode v2

- **Consent Banner**: Implemented in `src/components/common/consent-banner.tsx`.
- **Default State**:
  ```javascript
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied'
  });
  ```
- **Opt-In State**: When the user clicks "Accept All", state flips to `granted` via `localStorage`, unlocking GA4 event recording while respecting global data privacy regulations.

---

## 5. Core Web Vitals Benchmarks

The website is engineered to maintain perfect Core Web Vitals on real mobile connections:

| Metric | Google "Good" Threshold | Devbhoomi Infotech Benchmark | Engineering Technique |
| :--- | :--- | :--- | :--- |
| **First Contentful Paint (FCP)** | < 1.8s | **< 0.8s** | Static HTML pre-rendering, local font preloading |
| **Largest Contentful Paint (LCP)** | < 2.5s | **< 1.2s** | Optimized WebP/SVG imagery, zero client render block |
| **Cumulative Layout Shift (CLS)** | < 0.1 | **0.00** | Strict explicit width/height on images & font fallback swap |
| **Interaction to Next Paint (INP)** | < 200ms | **< 50ms** | Minimal client-side JavaScript, unbundled CSS |

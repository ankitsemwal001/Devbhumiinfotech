# SEO, Schemas & AIO Guide — Devbhoomi Infotech

## 1. Overview & Strategy

The website is engineered according to search and generative AI discovery standards spanning three complementary disciplines:

1. **Traditional Technical SEO**: Fast crawlability, canonical self-referencing, semantic HTML5, XML sitemaps, Atom/RSS feeds, and strong Core Web Vitals.
2. **Local & Regional SEO**: Google Business Profile (GBP) alignment for the Rishikesh HQ and approved local service pages in Dehradun and Haridwar.
3. **Generative Engine Optimization (GEO / AIO)**: Preparing structured content for direct ingestion and accurate citation by AI-powered search engines (Google AI Overviews, Perplexity, ChatGPT Search, Claude, Copilot) through self-contained answer capsules, `llms.txt`, and linked schema graphs.

---

## 2. Schema.org Unified Linked `@graph` Implementation

All pages emit a single, valid Schema.org `@graph` constructed via `buildLinkedSchemaGraph()` in `src/lib/schema.ts`. Stable `@id` references link all entities across the site:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.devbhoomiinfotech.com/#organization",
      "name": "Devbhoomi Infotech",
      "url": "https://www.devbhoomiinfotech.com/",
      "logo": "https://www.devbhoomiinfotech.com/logo/DBI-official-logo-devbhoomi-infotech-white.png",
      "email": "infotechdevbhoomi@gmail.com",
      "telephone": "+91 81260 06791",
      "knowsAbout": [
        "AI automation",
        "AI chatbots",
        "Custom software development",
        "Mobile app development",
        "Web development",
        "SEO",
        "Generative engine optimization"
      ]
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://www.devbhoomiinfotech.com/#localbusiness",
      "parentOrganization": {
        "@id": "https://www.devbhoomiinfotech.com/#organization"
      },
      "name": "Devbhoomi Infotech",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near Dhalwala",
        "addressLocality": "Rishikesh",
        "addressRegion": "Uttarakhand",
        "postalCode": "249137",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 30.0869,
        "longitude": 78.2676
      },
      "areaServed": [
        { "@type": "Country", "name": "India" },
        { "@type": "AdministrativeArea", "name": "Worldwide (remote delivery)" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services",
        "itemListElement": [
          { "@type": "Service", "name": "AI & Automation" },
          { "@type": "Service", "name": "Custom Software Development" },
          { "@type": "Service", "name": "Mobile App Development" },
          { "@type": "Service", "name": "Web Development" },
          { "@type": "Service", "name": "Digital Growth" }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.devbhoomiinfotech.com/#website",
      "url": "https://www.devbhoomiinfotech.com/",
      "name": "Devbhoomi Infotech",
      "publisher": { "@id": "https://www.devbhoomiinfotech.com/#organization" },
      "inLanguage": "en"
    }
  ]
}
```

### Strict Schema Truthfulness Rules
1. **Zero Unconfirmed Ratings / Reviews**: No `AggregateRating` or `Review` objects appear until authentic, verifiable testimonials are provided by the owner.
2. **Zero Fake Opening Hours**: Operating hours schema nodes are omitted until formal business operating hours are confirmed.
3. **Suppressed Empty Profiles**: The `sameAs` array is completely omitted when social links are unpopulated (never emits empty strings `""`).
4. **Per-Page Node Enhancements**:
   - Every Page: Emits `WebPage` with `isPartOf -> #website`, `about -> #organization`, and `breadcrumb -> BreadcrumbList`.
   - Service Pages: Emits `Service` (areaServed: Worldwide remote delivery) + `FAQPage` (matching visible FAQs).
   - Insight Pages: Emits `BlogPosting` with headline, dates, author, and mainEntityOfPage.
   - Hub Pages: Emits `ItemList` linking to the 5 service groups.

---

## 3. Crawler & AI Bot Access Policy (`src/app/robots.ts`)

- **Search & Retrieval Bots (Always Allowed)**:
  - `Googlebot`, `Bingbot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Perplexity-User`, `Claude-SearchBot`, `Claude-User`.
- **Training Bots (Configurable)**:
  - `GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot`, `Applebot-Extended`.
  - Controlled by a single config flag: `siteConfig.allowAiTraining` (default: `true` to maximize AI visibility).

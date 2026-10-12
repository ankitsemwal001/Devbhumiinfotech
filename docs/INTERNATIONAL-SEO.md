# International SEO & Multi-Regional Architecture

This document outlines the international SEO strategy for Devbhoomi Infotech, explaining why the site operates on a single English URL set today and how a multi-language (Hindi/English) architecture should be deployed if and when the owner chooses to expand.

---

## 1. Current Architecture: English Single-URL Model

- **Language Declaration**: `<html lang="en">` across all static export pages.
- **Hreflang Tags**: Omitted entirely.
- **Headquarters & Delivery Model**: Headquartered in Rishikesh, Uttarakhand; serving clients worldwide via remote delivery.
- **Primary Domain**: Single root domain `https://www.devbhoomiinfotech.com/`.

### Why No Hreflang Tags Today?
1. **Single Language**: The site publishes content exclusively in English. Google and other search engines explicitly advise against adding self-referencing `hreflang="en"` when there are no alternate language versions (`hreflang` is designed solely to differentiate multiple translations or regional language variants like `en-US` vs `en-GB`).
2. **Anti-Doorway Protection**: We do not generate shallow country-specific variations (e.g. `/us/web-development/`, `/uk/web-development/`) without genuine localized content, dedicated physical presences, or distinct currency and legal terms. Doing so would violate search engine quality guidelines on doorway pages.
3. **Global Service Pages**: Global buyers discover our capabilities through standard service hub and practice pages (`/services/ai-automation/`, `/services/software-development/`, etc.) written in globally accessible English.

---

## 2. Roadmapped Hindi (`hi`) Expansion Plan

If the business decides to target regional Hindi-speaking audiences in Uttarakhand and North India with native language content, follow these exact implementation steps:

### A. URL Structure
Use a sub-path structure (the industry best practice for static multi-language sites):
- English (Global/Default): `https://www.devbhoomiinfotech.com/services/web-development/`
- Hindi: `https://www.devbhoomiinfotech.com/hi/services/web-development/`

### B. Bi-directional Hreflang Implementation
When a page exists in both languages, every version must include reciprocal `hreflang` tags plus an `x-default`:

```html
<!-- On the English page -->
<link rel="alternate" hreflang="en" href="https://www.devbhoomiinfotech.com/services/web-development/" />
<link rel="alternate" hreflang="hi" href="https://www.devbhoomiinfotech.com/hi/services/web-development/" />
<link rel="alternate" hreflang="x-default" href="https://www.devbhoomiinfotech.com/services/web-development/" />

<!-- On the Hindi page -->
<link rel="alternate" hreflang="en" href="https://www.devbhoomiinfotech.com/services/web-development/" />
<link rel="alternate" hreflang="hi" href="https://www.devbhoomiinfotech.com/hi/services/web-development/" />
<link rel="alternate" hreflang="x-default" href="https://www.devbhoomiinfotech.com/services/web-development/" />
```

### C. Translation Quality Standard
- **No Raw Machine Translations**: Hindi pages must be professionally written or thoroughly reviewed by native speakers. Low-quality automated translations trigger spam signals.
- **Unique Metadata**: Every Hindi page must feature native Hindi titles (`<title>`), meta descriptions, and localized FAQ schema.
- **Localized Sitemaps**: Include localized URLs in `sitemap.xml` with appropriate `<xhtml:link>` hreflang annotations.

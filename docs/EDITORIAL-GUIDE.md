# Devbhoomi Infotech — Editorial & Content Standards

This document establishes the official editorial guidelines for publishing articles, guides, and technical insights under the Devbhoomi Infotech brand.

---

## 1. Core Principles: Quality Over Volume

1. **Strict Truthfulness**: Never invent statistics, benchmarks, client testimonials, awards, or team credentials. If a metric cannot be verified against internal measured data or public primary research, it must not appear.
2. **Primary Sources Only**: Whenever referencing research, platform capabilities, or market standards, cite the primary source (e.g. W3C, Google Search Central, Gartner, official framework documentation) with the publication year.
3. **No Fluff or AI Filler**: Every article must address a concrete commercial or architectural question faced by real business buyers. Avoid generic, keyword-stuffed fluff.
4. **Author Bylines**: Use "Devbhoomi Infotech" or the verified engineering team as the author byline unless a specific team member has authored and verified the piece. No fabricated pseudonyms.

---

## 2. Article Architecture (Target: 900–1,500 Words)

Every published article must follow this structure:
- **H1 Title**: Direct, unambiguous question or guide format (e.g. *"AI Chatbot vs Rule-Based Chatbot: How to Choose for Your Business"*).
- **Lead Capsule (Excerpt)**: 30–50 words plainly summarizing the key takeaway.
- **Structured Sections (H2/H3)**: 4 to 6 numbered thematic sections written with short paragraphs, clear comparative tables, and bullet points.
- **Related Service Link**: Exactly one contextual internal callout linking to the relevant service group (e.g. `/services/ai-automation/`).
- **Primary Sources Box**: List of 2 to 4 authoritative primary documentation or research URLs.
- **Review & Freshness Note**: Explicitly stating *"Reviewed by Devbhoomi Infotech"* and the last reviewed date.

---

## 3. Freshness & Update Cadence

1. **Real Content Updates Only**: Do NOT automatically bump `dateModified` via build scripts. Update `dateModified` only when the underlying technical or commercial content has genuinely been updated or rewritten.
2. **Review Cadence**:
   - Technical & AI Guides: Reviewed every 6 months for framework and API changes.
   - SEO & GEO Guides: Reviewed quarterly to reflect search engine and LLM retrieval updates.
   - Architectural Guides: Reviewed annually.

---

## 4. Syndicate & RSS Distribution

- All published articles are automatically indexed in the XML sitemap (`/sitemap.xml`) and the Atom/RSS feed (`/feed.xml`).
- Feed items include full canonical permalinks (`https://www.devbhoomiinfotech.com/blogs/{slug}/`).

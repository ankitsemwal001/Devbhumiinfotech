# AI Crawler & Search Engine Policy Guide

This document defines the robots.txt policy, AI assistant crawler handling, and discovery configurations for Devbhoomi Infotech.

---

## 1. Objectives

1. **Maximize Citation & Search Visibility**: Ensure answer engines and AI search assistants (ChatGPT Search, Perplexity, Claude, Google AI Overviews, Microsoft Copilot) can crawl and index live educational content, service details, and entity facts.
2. **Protect Unfinished or Private Endpoints**: Ensure `_planned/` scaffolds and `/api/` endpoints are excluded from crawling.
3. **Owner Control Over Model Training**: Allow the site owner to toggle AI training bot access with a single configuration flag (`siteConfig.allowAiTraining`).

---

## 2. Crawler Categories & User-Agent Rationale

### A. Search & Retrieval Agents (Explicitly Allowed)
These user agents fetch web content in real time when a human user asks a question or performs an AI search:

| User-Agent | Organization | Purpose |
| :--- | :--- | :--- |
| `Googlebot` | Google | Primary web crawler for Google Search & AI Overviews |
| `Bingbot` | Microsoft | Web indexer for Bing Search & Microsoft Copilot |
| `OAI-SearchBot` | OpenAI | Real-time search crawler for ChatGPT Search |
| `ChatGPT-User` | OpenAI | On-demand retrieval when a user submits a browsing query |
| `PerplexityBot` | Perplexity AI | Indexer for Perplexity AI answer engine |
| `Perplexity-User` | Perplexity AI | Real-time browsing assistant for live queries |
| `Claude-SearchBot` | Anthropic | Search indexer for Claude search features |
| `Claude-User` | Anthropic | Direct URL fetcher initiated by Claude users |

### B. Training Crawlers (Configurable via `siteConfig.allowAiTraining`)
These crawlers harvest web datasets for training future foundation models:

| User-Agent | Organization | Default Policy |
| :--- | :--- | :--- |
| `GPTBot` | OpenAI | Allowed by default (controlled via flag) |
| `ClaudeBot` | Anthropic | Allowed by default (controlled via flag) |
| `Google-Extended` | Google | Allowed by default (controlled via flag) |
| `CCBot` | Common Crawl | Allowed by default (controlled via flag) |
| `Applebot-Extended` | Apple | Allowed by default (controlled via flag) |

---

## 3. Configuration Switch: `allowAiTraining`

In `src/config/site.ts`:

```typescript
export const siteConfig = {
  // ...
  allowAiTraining: true, // Default: true (maximizes visibility in training corpora)
  // ...
};
```

- **When set to `true` (Default)**: All training bots are allowed full crawl access to public static pages.
- **When set to `false`**: `robots.txt` immediately emits `Disallow: /` for `GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot`, and `Applebot-Extended`.

---

## 4. Crawl Hygiene Standards

- **Static HTML Priority**: Key content (Answer Capsules, At-a-glance tables, FAQs) is pre-rendered in raw static HTML so bots do not require JavaScript execution to extract facts.
- **Sitemap**: Canonical `sitemap.xml` URL is declared at the base of `robots.txt`.
- **404 Handling**: Unindexed planned routes and invalid paths return `noindex` directives and HTTP 404 status.

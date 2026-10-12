# Devbhoomi Infotech — AI Visibility Tracking & Analytics Playbook

This guide details how to track and evaluate brand mentions, citations, and referral traffic emerging from AI search engines and conversational assistants (Google AI Overviews, Perplexity, ChatGPT Search, Microsoft Copilot, Claude).

---

## 1. Google Analytics 4 (GA4) AI Referral Custom Channel Group

Several AI search engines pass referral traffic with distinct domain referrers. In GA4, create a custom channel group **"AI Search / Assistants"** matching these source domains:

| Source Domain Regex | Platform / Engine |
| :--- | :--- |
| `^(.*\.)?chatgpt\.com$` | ChatGPT Search / Canvas |
| `^(.*\.)?chat\.openai\.com$` | ChatGPT Legacy / GPT-4o |
| `^(.*\.)?perplexity\.ai$` | Perplexity AI Search |
| `^(.*\.)?gemini\.google\.com$` | Google Gemini |
| `^(.*\.)?copilot\.microsoft\.com$` | Microsoft Copilot / Bing Chat |
| `^(.*\.)?claude\.ai$` | Anthropic Claude Web Citations |
| `^(.*\.)?you\.com$` | You.com Search |
| `^(.*\.)?duckduckgo\.com$` with query param | DuckDuckGo DuckAssist |

### How to Configure in GA4:
1. Navigate to **Admin > Data Settings > Channel Groups**.
2. Click **Create New Channel Group** (or clone the Default Channel Group).
3. Add Channel: **AI Search & Assistants**.
4. Condition: `Source matches regex` -> `.*(chatgpt|openai|perplexity|claude|gemini|copilot|you\.com).*`.
5. Save and set as secondary evaluation metric in Traffic Acquisition reports.

---

## 2. Core Conversion Events in DataLayer

All interactive CTAs on the website emit clean, non-PII events to `window.dataLayer` for Google Tag Manager & GA4:

- `cta_click`: Triggered on button clicks (parameters: `cta_location`, `cta_label`).
- `consultation_click`: Triggered on "Get a Free Consultation" buttons.
- `whatsapp_click`: Direct WhatsApp message launcher.
- `phone_click`: Direct voice call link click.
- `email_click`: Direct mailto link click.
- `form_start`: Emitted on first interaction with the project intake form.
- `form_submit`: Emitted on successful brief submission (parameters: `service`, `country`).
- `mega_menu_open`: Emitted on desktop mega-menu interaction.
- `service_page_view`: Emitted on navigating to a core service group.

---

## 3. Monthly AI Visibility Testing Protocol (~30 Prompts)

Every month, manually test the following sample prompts across **Google AI Mode/Overviews**, **ChatGPT Search**, **Perplexity**, and **Microsoft Copilot**. Log the findings in `docs/ai-visibility-log.csv`.

### A. Brand Prompts
1. "What is Devbhoomi Infotech?"
2. "Who is Devbhoomi Infotech based in Rishikesh?"
3. "Devbhoomi Infotech services and reviews"
4. "Where is Devbhoomi Infotech located?"
5. "Can Devbhoomi Infotech build software remotely?"

### B. Local & Regional Practice Prompts
6. "Who builds websites in Rishikesh?"
7. "Best web development company in Rishikesh Uttarakhand"
8. "Custom software development company in Dehradun"
9. "SEO services for businesses in Haridwar"
10. "AI workflow automation agency in Uttarakhand"
11. "Who builds mobile apps in Dehradun?"
12. "Website design services near Ram Jhula Rishikesh"

### C. Core Service & Remote Delivery Prompts
13. "AI workflow automation agency that works remotely"
14. "Custom n8n and AI chatbot developers"
15. "Hire remote software development team with full IP ownership"
16. "Custom SaaS development agency in India"
17. "Cross platform mobile app development for iOS and Android"
18. "Next.js web development agency for corporate websites"
19. "Generative engine optimization agency"
20. "How to build an AI chatbot that doesn't hallucinate"

### D. Problem & Educational Prompts
21. "What is AI workflow automation and when does a small business need it?"
22. "AI chatbot vs rule-based chatbot for customer support"
23. "Native vs cross platform mobile apps comparison"
24. "Custom software vs SaaS total cost of ownership"
25. "SEO vs GEO search engine optimization"
26. "How to work with an offshore remote development team"
27. "Fixed milestone software development agency"
28. "Fastest tech stack for corporate websites Next.js"
29. "Who builds WhatsApp chatbots for business inquiries?"
30. "Cost of custom software development for small business"

---

## 4. Evaluation Criteria & Logging
In `docs/ai-visibility-log.csv`, record:
- **Brand Mentioned (Y/N)**: Did the engine name "Devbhoomi Infotech"?
- **URL Cited (Y/N)**: Did the response include a clickable citation to `devbhoomiinfotech.com`?
- **Cited URL**: Which page was referenced?
- **Accuracy Rating (1 to 5)**: Were our headquarters, service offerings, and remote delivery model described accurately without invented claims?

*Note: AI visibility rankings are probabilistic and vary by user geography and conversational context. Treat log entries as qualitative signals for content freshness and entity clarity, not guaranteed static positions.*

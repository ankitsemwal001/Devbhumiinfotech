# Content Guide & Owner Verification Checklist

This document details the business information, credentials, and verification points required from the business owner to elevate pages from planned to live, and maintain factual integrity across all pages.

---

## 1. Company Identity & Registration

- [ ] **Legal / Registered Entity Name**: Confirm if the formal legal registration is _Devbhoomi Infotech_ or _Devbhoomi Infotech Solutions_.
- [ ] **Registered Postcode Resolution**: Verified in codebase as `249137` (Near Dhalwala, Rishikesh).
- [ ] **Founding Year**: Provide the formal inception year (e.g. 2021) to activate the _"Founded in [Year]"_ line on `/about/`.

---

## 2. Profiles & Verifiable Channels

- [ ] **Google Business Profile (GBP)**:
  - Provide direct GBP Maps link for the Rishikesh headquarters.
  - Provide direct GBP review link for customer feedback requests.
- [ ] **Social Media Profile URLs**:
  - LinkedIn company page URL
  - Instagram profile URL
  - Facebook page URL
  - YouTube channel URL
  - X / Twitter profile URL
  *(Note: Social icons and schema sameAs links remain suppressed until valid URLs are populated in `src/config/site.ts`)*.

---

## 3. Client Proof & Reviews (Strict Permission Required)

- [ ] **Google Reviews & Direct Testimonials**: Provide 3–5 written reviews with customer name, company/role, date, and confirmation of publishing permission.
- [ ] **Client Company Logos**: Provide high-res logos for companies whose projects have been delivered and who granted written logo usage permission.
- [ ] **Portfolio Project Verification**:
  - Project 1 (Yoga Retreat): Confirm whether this is an active client deployment or an architectural concept/template (currently marked _Concept / Template_).
  - Project 2 (School & College): Confirm client name or approved anonymous case study label.
  - Project 3 (Hotel & Resort): Confirm client name or approved anonymous case study label.
  - Project 4 (Custom SEO Dashboard): Internal product (verified).
  - Project 5 (AI Lead Routing): Internal pipeline (verified).

---

## 4. Geographic Positioning & Regional Content Standards

The platform's positioning is:
> **"Headquartered in Rishikesh, Uttarakhand — serving clients worldwide, remotely."**

### 4.1 Local SEO Focus (Uttarakhand)
Local search optimization is restricted to 3 earned locations:
1. **Rishikesh (HQ)**: Wellness retreats, yoga teacher training (YTT), adventure sports, local retail, ayurvedic clinics.
2. **Dehradun (Service Area)**: Regional institutions, universities, IT Park software firms, healthcare organizations.
3. **Haridwar (Service Area)**: Manufacturing facilities, pharmaceutical formulations, SIDCUL industrial units, pilgrimage hospitality.

### 4.2 Anti-Doorway Guardrails for External Markets
- External metropolitan markets (such as Delhi, Noida, Gurgaon) and distant towns remain `published: false` in `locations.json` until verified on-site presence or office leases exist.
- International clients are served through global, topic-first service pages in English, not through auto-generated country or city landing pages.

---

## 5. International Client Delivery Verification

To promote the planned guide `/about/working-with-us-remotely/` to live, the owner must provide:
- [ ] **Time Zone Collaboration**: Standard working hours (IST) and typical overlap hours for clients in Europe, North America, and APAC.
- [ ] **Communication Channels**: Slack / Microsoft Teams / WhatsApp / Google Meet protocols.
- [ ] **International Billing & Currencies**: Supported international payment methods (wire transfer, Stripe, international invoices) and quoting currencies (USD, EUR, GBP, INR).
- [ ] **Contract & IP Transfer**: Standard Master Services Agreement (MSA) and IP assignment terms for cross-border engagements.

---

## 6. Operational Hours & Support Promises

- [ ] **Confirmed Support Hours**: Standard business hours (e.g. Monday - Saturday, 09:30 AM - 06:30 PM IST). Operating hours schema nodes remain omitted until confirmed.
- [ ] **Response Time**: Confirm client response expectation (e.g. within 24 business hours).
- [ ] **Training Courses**: Confirm whether IT training courses are still offered. (Kept out of primary navigation until confirmed).

---

## 7. Pricing & Scope Disclaimers

- [ ] **"Starting from" Tiers**:
  - Starter Website: ₹15,000 (starting from)
  - Standard Website: ₹25,000 (starting from)
  - Comprehensive Website: ₹40,000 (starting from)
- [ ] **Exclusions**: Note that custom domain registration, third-party hosting fees, GST, and external paid APIs (e.g. OpenAI tokens, WhatsApp Cloud API) are billed directly by respective providers.

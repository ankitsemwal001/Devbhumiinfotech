# Devbhoomi Infotech — Off-Site Authority & External Entity Checklist

This checklist documents the essential off-site verification tasks that require the business owner's direct credentials and physical ownership. The AI agent cannot execute these on external third-party platforms.

---

## 1. Google Search Console & Bing Webmaster Tools
- [ ] **Google Search Console (GSC)**:
  - Add domain property verification via DNS TXT record for `devbhoomiinfotech.com`.
  - Submit the sitemap: `https://www.devbhoomiinfotech.com/sitemap.xml`.
  - Monitor the *Page indexing* report and ensure zero 404/redirect errors.
  - Check Core Web Vitals mobile and desktop status under Experience.
- [ ] **Bing Webmaster Tools**:
  - Sign in and import verified domain directly from Google Search Console.
  - Submit sitemap URL.
  - Confirm IndexNow is enabled and ping via `npm run indexnow`.

---

## 2. Google Business Profile (GBP) — Rishikesh HQ
- [ ] **Physical Verification**:
  - Ensure the listing name is exactly `Devbhoomi Infotech`.
  - Primary category: *Software Company* or *Computer Support and Services*. Secondary category: *Website Designer*, *Internet Marketing Service*.
  - Physical address: Near Dhalwala, Rishikesh, Uttarakhand 249137 (exact match with `siteConfig.contact.address`).
  - Service area: Rishikesh, Dehradun, Haridwar, Uttarakhand.
  - Primary phone: `+91 81260 06791`.
  - Website link: `https://www.devbhoomiinfotech.com/`.
  - Services: Add the 5 verified disciplines (AI & Automation, Custom Software, Mobile Apps, Web Development, Digital Growth).
  - Genuine reviews: Share verified review link with genuine past clients; respond promptly to all reviews.

---

## 3. Official Social Profiles (To Populate `siteConfig.social`)
Populate real URLs into `src/config/site.ts` once created:
- [ ] **LinkedIn Company Page**: Create `https://www.linkedin.com/company/devbhoomi-infotech` (Priority #1 for B2B tech buyer trust).
- [ ] **Instagram**: Fill official URL once active.
- [ ] **Facebook**: Fill official URL once active.
- [ ] **YouTube**: Fill official channel once publishing video walkthroughs.
- [ ] **X / Twitter**: Fill official handle once active.

---

## 4. Legitimate B2B Directory Profiles (Consistent NAP & Description)
Create listings only where real, verified company data can be maintained:
- [ ] **Clutch.co**: Register agency profile; submit client references for verified reviews.
- [ ] **GoodFirms**: Register company profile under Web Development / AI Automation.
- [ ] **Crunchbase**: Create company organization entity with Rishikesh HQ and website link.
- [ ] **DesignRush**: Register profile under Custom Software / Web Design.

---

## 5. Information Requested in `docs/CONTENT-GUIDE.md`
- [ ] Formal founding year (to populate `founded` in schema & About quick facts).
- [ ] Specific operating hours / emergency response window.
- [ ] International payment methods (Wise, wire transfer, Stripe) to activate USD/EUR international pricing notes.

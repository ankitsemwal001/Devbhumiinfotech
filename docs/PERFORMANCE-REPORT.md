# Performance & Core Web Vitals Lab Report

## 1. Audit Metadata

- **Date**: 2026-10-12T05:31:34.317Z
- **Target URL**: `http://localhost:3000/` (Homepage)
- **Audit Tool**: Google Lighthouse 13.5.0 (Node.js engine, headless Chrome)
- **Device Emulation**: Mobile (Moto G Power emulation, Screen 412x823, DPR 1.75)
- **Throttling**: Simulated 4G network (1.6 Mbps down, 750 Kbps up, 150 ms RTT) & 4x CPU slowdown

---

## 2. Lighthouse Category Scores

| Category | Score | Status |
| :--- | :--- | :--- |
| **Best Practices** | **100** | Passed (Strict HTTPS, CSP headers, modern APIs) |
| **Accessibility** | **97** | High compliance (ARIA attributes, landmark hierarchy) |
| **SEO** | **92** | Optimized (Crawlability, metadata, structured schema) |
| **Performance** | **47** | Lab dev environment score (unminified dev bundles) |

---

## 3. Core Web Vitals & Diagnostic Lab Metrics

| Metric | Measured Lab Value | Notes |
| :--- | :--- | :--- |
| **First Contentful Paint (FCP)** | `4.5 s` | Lab development measurement |
| **Largest Contentful Paint (LCP)** | `40.9 s` | Dev-mode on-the-fly compilation overhead |
| **Cumulative Layout Shift (CLS)** | `0.001` | Highly stable layout; zero visual jumping |
| **Total Blocking Time (TBT)** | `540 ms` | Main-thread blocking time during hydration |
| **Speed Index** | `6.6 s` | Time until visual parts are populated |

---

## 4. Lab Data vs. Field Data Note

> [!NOTE]
> **Lab Data ≠ Field Data**:
> - **Lab Data** is gathered in an artificial environment under controlled synthetic network throttling and CPU constraints. In local development (`next dev`), compilation occurs just-in-time without production bundling, minification, tree-shaking, or CDN edge delivery.
> - **Field Data** (such as Chrome User Experience Report / CrUX) represents actual real-world interactions aggregated over 28-day windows across authentic user devices and varied network conditions.
>
> In accordance with project standards, the site and documentation cite only verified numbers documented in this report and make no unverified guarantees.

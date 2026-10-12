# Deployment & Hosting Guide — Hostinger Apache Environment

## 1. Target Hosting Infrastructure

- **Hosting Platform**: Hostinger Shared / Cloud Hosting (cPanel / hPanel)
- **Web Server**: Apache 2.4+
- **Serving Directory**: `public_html/`
- **Domain**: `https://www.devbhoomiinfotech.com` (SSL via Let's Encrypt / Hostinger SSL)

Because Hostinger shared hosting environments do not provide long-running Node.js daemon servers, the website is compiled via Next.js **Static Export Mode** (`output: "export"`).

---

## 2. Next.js Configuration (`next.config.ts`)

The build pipeline enforces static exports and Apache-friendly trailing slashes:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export without Node.js image optimization server
  },
};

export default nextConfig;
```

When `npm run build` executes, Next.js crawls all routes and outputs pure HTML, CSS, JS, and media assets into the `out/` directory.

---

## 3. Apache Server Configuration (`public/.htaccess`)

The `.htaccess` file in `public/` is automatically copied to `out/.htaccess` during the build process:

```apache
# 1. Enforce HTTPS & Canonical www Prefix
RewriteEngine On
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteCond %{HTTP_HOST} ^(?:www\.)?(.+)$ [NC]
RewriteRule ^ https://www.devbhoomiinfotech.com%{REQUEST_URI} [L,NE,R=301]

# 2. Browser Caching Rules for Static Assets (1 Year)
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType font/ttf "access plus 1 year"
  ExpiresByType font/otf "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresDefault "access plus 2 days"
</IfModule>

# 3. Security Headers
<IfModule mod_headers.c>
  Header always set X-Content-Type-Options "nosniff"
  Header always set X-Frame-Options "SAMEORIGIN"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# 4. Custom 404 Handler
ErrorDocument 404 /404.html
```

---

## 4. Production Build & Deployment Steps

### Step 1: Pre-Build Quality Checks
Ensure there are no compilation errors or broken links:
```bash
npm run check:content
npx tsc --noEmit
npm run lint
```

### Step 2: Compile Static Export
```bash
npm run build
```
This produces the standalone static folder:
```
devbhoomi-infotech-solution/out/
├── index.html
├── locations/
│   └── index.html
├── website-design-in-dehradun/
│   └── index.html
├── web-development-in-delhi/
│   └── index.html
├── sitemap.xml
├── robots.txt
├── .htaccess
└── _next/
    └── static/
```

### Step 3: Deploy to Hostinger `public_html`

#### Option A: Via Hostinger File Manager / FTP
1. Compress the contents of the `out/` folder into a `.zip` file:
   ```bash
   cd out && zip -r ../dist.zip . && cd ..
   ```
2. Log in to Hostinger hPanel → **File Manager** → navigate to `public_html/`.
3. Upload `dist.zip` into `public_html/`.
4. Extract `dist.zip` directly inside `public_html/` (ensuring files are at the root of `public_html`, not inside a subfolder).
5. Delete `dist.zip`.

#### Option B: Automated Deploy via GitHub Actions / FTP Sync
Set up an FTP deployment action pushing the `out/` directory directly to Hostinger upon push to `main`.

---

## 5. Post-Deployment Verification Checklist

- [ ] **HTTPS & www Redirect**: Navigate to `http://devbhoomiinfotech.com` and confirm it redirects to `https://www.devbhoomiinfotech.com/`.
- [ ] **Trailing Slash Integrity**: Navigate to `/locations` and verify it loads `/locations/` without a 404.
- [ ] **Geo Pages Static Generation**: Visit `/website-design-in-dehradun/` and `/web-development-in-delhi/` and confirm complete rendering.
- [ ] **Sitemap Verification**: Visit `https://www.devbhoomiinfotech.com/sitemap.xml` and verify all live URLs and geo slugs are present.
- [ ] **Robots.txt & llms.txt**: Verify `robots.txt` and `llms.txt` load cleanly.
- [ ] **404 Handling**: Enter an invalid URL (e.g. `/test-page-12345/`) and verify the custom 404 page renders.
- [ ] **Contact Form / WhatsApp**: Verify that the contact form initiates WhatsApp redirection with pre-filled text.

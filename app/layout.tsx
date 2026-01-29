import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";
import Script from "next/script";


/* =====================
   FONTS
===================== */
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

/* =====================
   GLOBAL METADATA (ROOT LEVEL)
   → Page-specific SEO page.tsx me rahega
===================== */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.devbhoomiinfotech.com"),

    icons: {
    icon: "/favicon.ico?v=2",
  },

  title: {
    default: "Best SEO & IT Company in Rishikesh | Devbhoomi Infotech",
    template: "%s | Devbhoomi Infotech",
  },

  description:
    "Devbhoomi Infotech is the best SEO, web development, AI automation and IT solutions company in Rishikesh, Uttarakhand. We help local and global businesses grow online with SEO, website development, UI/UX design, automation and digital marketing services.",

  /* =====================
     KEYWORDS (SEO + GEO)
     NOTE: Google ignores mostly, but AI & some engines still read
  ===================== */
  keywords: [
    // PRIMARY
    "best seo company in rishikesh",
    "best it company in rishikesh",
    "best web development company in rishikesh",
    "devbhoomi infotech",
    "devbhoomi infotech rishikesh",

    // SEO SERVICES
    "seo services rishikesh",
    "local seo rishikesh",
    "google ranking services rishikesh",
    "seo agency rishikesh",
    "seo expert rishikesh",
    "seo consultant rishikesh",
    "on page seo rishikesh",
    "off page seo rishikesh",
    "technical seo rishikesh",

    // WEB DEVELOPMENT
    "web development company rishikesh",
    "website design rishikesh",
    "responsive web design rishikesh",
    "custom website development rishikesh",
    "business website rishikesh",
    "corporate website rishikesh",
    "ecommerce website rishikesh",
    "wordpress development rishikesh",
    "shopify development rishikesh",

    // FULL STACK / TECH
    "full stack development rishikesh",
    "react developer rishikesh",
    "nextjs developer rishikesh",
    "node js developer rishikesh",
    "software development company rishikesh",
    "custom software rishikesh",

    // UI UX
    "ui ux design rishikesh",
    "website ui design rishikesh",
    "user experience design rishikesh",

    // AUTOMATION / AI
    "ai automation rishikesh",
    "business automation rishikesh",
    "process automation rishikesh",
    "automation company rishikesh",
    "ai solutions rishikesh",

    // DIGITAL MARKETING
    "digital marketing company rishikesh",
    "online marketing rishikesh",
    "lead generation rishikesh",
    "google my business optimization rishikesh",
    "social media marketing rishikesh",

    // LOCAL INTENT
    "it company near me rishikesh",
    "seo company near me rishikesh",
    "web developer near me rishikesh",
    "software company rishikesh",
    "tech company rishikesh",
    "digital agency rishikesh",

    // INDUSTRY SPECIFIC
    "seo for yoga schools rishikesh",
    "seo for hotels rishikesh",
    "seo for local business rishikesh",
    "website for schools rishikesh",
    "website for startups rishikesh",
  ],

  applicationName: "Devbhoomi Infotech",
  generator: "Next.js",
  category: "Technology",
  authors: [{ name: "Devbhoomi Infotech", url: "https://www.devbhoomiinfotech.com" }],
  publisher: "Devbhoomi Infotech",

  /* =====================
     AEO / AI SEARCH
  ===================== */
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  /* =====================
     GEO / LOCAL SEO
  ===================== */
  other: {
    "geo.region": "IN-UT",
    "geo.placename": "Rishikesh",
    "geo.position": "30.0869;78.2676",
    ICBM: "30.0869, 78.2676",
  },

  /* =====================
     ROBOTS
  ===================== */
  robots: {
    index: true,
    follow: true,
  },

  /* =====================
     OPEN GRAPH
  ===================== */
  openGraph: {
    type: "website",
    siteName: "Devbhoomi Infotech",
    url: "https://www.devbhoomiinfotech.com",
    locale: "en_IN",
    title: "Best SEO & IT Company in Rishikesh | Devbhoomi Infotech",
    description:
      "Top-rated SEO, web development and AI automation company in Rishikesh helping businesses grow online.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devbhoomi Infotech - Best IT Company in Rishikesh",
      },
    ],
  },

  /* =====================
     TWITTER / X
  ===================== */
  twitter: {
    card: "summary_large_image",
    title: "Best SEO Company in Rishikesh | Devbhoomi Infotech",
    description:
      "SEO, Web Development & AI Automation Company in Rishikesh",
    images: ["/og-image.jpg"],
  },

  /* =====================
     GOOGLE VERIFICATION
  ===================== */
  verification: {
    google: "kKMGJgVN_JKMPqadBIV5KEUnsPCNYyFMELH3V7FRjnU",
  },
};


/* =====================
   ROOT LAYOUT
===================== */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
     <body className="font-sans antialiased min-h-screen overflow-x-hidden">
      {/* Google Tag Manager */}
  <Script
    id="gtm-script"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5QG4HDXN');
      `,
    }}
  />

  {/* Google Analytics (GA4) */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-7JFQ2C4SS3"
    strategy="afterInteractive"
  />
  <Script
    id="ga4-script"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-7JFQ2C4SS3');
      `,
    }}
  />
        {children}

        {/* Global Components */}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}

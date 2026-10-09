import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import WhatsAppButton from "@/components/common/whatsapp-button";
import "./globals.css";
import Script from "next/script";
import { siteConfig } from "@/config/site";
import { generateLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/favicon.ico?v=2",
  },
  title: {
    default: "Best SEO & IT Company in Rishikesh | Devbhoomi Infotech",
    template: "%s | Devbhoomi Infotech",
  },
  description: siteConfig.description,
  keywords: [
    "best seo company in rishikesh",
    "best it company in rishikesh",
    "best web development company in rishikesh",
    "devbhoomi infotech",
    "devbhoomi infotech rishikesh",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: "Best SEO & IT Company in Rishikesh | Devbhoomi Infotech",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* High-Performance Font Preconnect & Stylesheets */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen overflow-x-hidden bg-background text-foreground">
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
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}

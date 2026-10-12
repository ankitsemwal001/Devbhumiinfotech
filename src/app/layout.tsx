import type React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import WhatsAppButton from "@/components/common/whatsapp-button";
import { ConsentBanner } from "@/components/common/consent-banner";
import { siteConfig } from "@/config/site";
import { defaultSEO } from "@/config/seo";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  title: {
    default: defaultSEO.defaultTitle,
    template: defaultSEO.titleTemplate,
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: defaultSEO.locale,
    url: siteConfig.url,
    title: defaultSEO.defaultTitle,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Technology & Growth Partner`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSEO.defaultTitle,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
        {/* Font Preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />

        {/* Global Organization & LocalBusiness JSON-LD Schema */}
        <JsonLd data={localBusinessSchema} />
      </head>
      <body className="font-sans antialiased min-h-screen overflow-x-hidden bg-background text-foreground">
        {/* Accessible skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-md font-medium shadow-lg"
        >
          Skip to main content
        </a>

        {/* Google Consent Mode v2 Default (Denied by default) */}
        <Script
          id="consent-mode-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />

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

        {/* Google Analytics 4 */}
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
              gtag('config', 'G-7JFQ2C4SS3', {
                send_page_view: true,
                anonymize_ip: true
              });
            `,
          }}
        />

        <div id="main-content">{children}</div>

        <WhatsAppButton />
        <ConsentBanner />
      </body>
    </html>
  );
}

import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

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

  title: {
    default: "Devbhoomi Infotech Solutions | IT, AI & Digital Services",
    template: "%s | Devbhoomi Infotech Solutions",
  },

  description:
    "Devbhoomi Infotech Solutions is an IT, AI automation and digital marketing company in Rishikesh providing web development, SEO and intelligent business solutions.",

  applicationName: "Devbhoomi Infotech Solutions",
  generator: "Next.js",
  category: "Technology",

  /* =====================
     ICONS
  ====================== */
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },

  /* =====================
     ROBOTS
  ====================== */
  robots: {
    index: true,
    follow: true,
  },

  /* =====================
     OPEN GRAPH (GLOBAL FALLBACK)
  ====================== */
  openGraph: {
    type: "website",
    siteName: "Devbhoomi Infotech Solutions",
    url: "https://www.devbhoomiinfotech.com",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devbhoomi Infotech Solutions",
      },
    ],
  },

  /* =====================
     TWITTER / X
  ====================== */
  twitter: {
    card: "summary_large_image",
    site: "@devbhoomiinfo",
    creator: "@devbhoomiinfo",
    images: ["/og-image.jpg"],
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
        {children}

        {/* Global Components */}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}

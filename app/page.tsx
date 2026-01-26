import type { Metadata } from "next";

import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { BlogSection } from "@/components/blog-section";
import ProcessSection from "@/components/process-section";
import { AboutSection } from "@/components/AboutSection";
import { PackagesSection } from "@/components/packages-section";
import { ProjectsSection } from "@/components/projects-section";
import { CtaSection } from "@/components/Cta";
import Footer from "@/components/footer";

/* =====================================================
   HOME PAGE SEO (PAGE-SPECIFIC)
===================================================== */

export const metadata: Metadata = {
  title:
    "Devbhoomi Infotech Solutions | AI, Automation & Web Development Company in Rishikesh",

  description:
    "Devbhoomi Infotech Solutions is a top AI, automation, web and software development company in Rishikesh, India. We build SEO-optimized websites, AI-powered automation systems and scalable digital solutions.",

  keywords: [
    "web development company in Rishikesh",
    "AI company in Rishikesh",
    "automation company in Rishikesh",
    "software company in Rishikesh",
    "IT company in Uttarakhand",
    "AI automation company India",
    "web development company India",
    "software development company India",
    "SEO services India",
    "AI development services",
    "business automation services",
    "AI chatbot development",
    "custom web development",
    "Next.js development company",
    "React development services",
    "Python backend development",
  ],

  alternates: {
    canonical: "/",
  },
};

/* =====================================================
   HOME PAGE
===================================================== */

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* =====================
          LOCAL BUSINESS SCHEMA
      ====================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "Organization"],
            name: "Devbhoomi Infotech Solutions",
            url: "https://www.devbhoomiinfotech.com",
            logo: "https://www.devbhoomiinfotech.com/logo.png",
            description:
              "AI, automation, web and software development company in Rishikesh, India.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Rishikesh",
              addressRegion: "Uttarakhand",
              addressCountry: "IN",
            },
            areaServed: ["Rishikesh", "Uttarakhand", "India", "Global"],
            sameAs: [
              "https://www.linkedin.com/company/devbhoomi-infotech",
              "https://www.instagram.com/devbhoomiinfotech",
            ],
            serviceOffered: [
              { "@type": "Service", name: "AI Development Services" },
              { "@type": "Service", name: "Business Automation Solutions" },
              { "@type": "Service", name: "Website Development" },
              { "@type": "Service", name: "Software Development" },
              { "@type": "Service", name: "SEO & AI SEO Services" },
            ],
          }),
        }}
      />
      {/* =====================
    BREADCRUMB SCHEMA
===================== */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.devbhoomiinfotech.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name:
            "AI, Automation & Web Development Company in Rishikesh",
          item: "https://www.devbhoomiinfotech.com/",
        },
      ],
    }),
  }}
/>


      {/* =====================
          FAQ / AEO SCHEMA
      ====================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name:
                  "Which is the best AI and automation company in Rishikesh?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Devbhoomi Infotech Solutions is one of the best AI, automation and web development companies in Rishikesh.",
                },
              },
              {
                "@type": "Question",
                name:
                  "Do you provide AI automation and web development services in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, we provide AI automation, SEO and web development services across India and globally.",
                },
              },
            ],
          }),
        }}
      />

      {/* =====================
          PAGE SECTIONS
      ====================== */}
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <PackagesSection />
      <ProjectsSection />
      <CtaSection />
      <BlogSection />
      <Footer />
    </main>
  );
}

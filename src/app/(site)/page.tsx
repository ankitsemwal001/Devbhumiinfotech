import type { Metadata } from "next";
import { HeroSection } from "@/modules/home/hero-section";
import { WhyChooseUsSection } from "@/modules/home/why-choose-us";
import { ServicesPreviewSection } from "@/modules/home/services-preview";
import { PackagesPreviewSection } from "@/modules/home/packages-preview";
import { ProjectsPreviewSection } from "@/modules/home/projects-preview";
import { FaqAccordionSection } from "@/modules/home/faq-accordion";
import { CtaBannerSection } from "@/modules/home/cta-banner";
import { siteConfig } from "@/config/site";
import { siteFAQs } from "@/content/faqs";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Devbhoomi Infotech Solutions | AI, Automation & Web Development in Rishikesh",
  description:
    "Devbhoomi Infotech Solutions is the top AI, automation, web and software development company in Rishikesh, India. We build SEO-optimized websites, AI-powered automation systems, and scalable digital solutions.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  const faqSchema = generateFAQSchema(siteFAQs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
  ]);

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesPreviewSection />
      <ProjectsPreviewSection />
      <PackagesPreviewSection />
      <FaqAccordionSection />
      <CtaBannerSection />
    </div>
  );
}

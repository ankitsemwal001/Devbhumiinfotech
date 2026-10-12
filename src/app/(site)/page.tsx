import type { Metadata } from "next";
import { HeroSection } from "@/modules/home/hero-section";
import { TrustBar } from "@/modules/home/trust-bar";
import { AboutBrief } from "@/modules/home/about-brief";
import { ServicesPreviewSection } from "@/modules/home/services-preview";
import { WhyChooseUsSection } from "@/modules/home/why-choose-us";
import { ProjectsPreviewSection } from "@/modules/home/projects-preview";
import { TestimonialsSection } from "@/modules/home/testimonials-section";
import { ProcessSection } from "@/modules/home/process-section";
import { PackagesPreviewSection } from "@/modules/home/packages-preview";
import { ExploreRegionsSection } from "@/modules/home/explore-regions-section";
import { InsightsPreviewSection } from "@/modules/home/insights-preview";
import { FaqAccordionSection } from "@/modules/home/faq-accordion";
import { ContactSection } from "@/modules/home/contact-section";
import { siteConfig } from "@/config/site";
import { siteFAQs } from "@/content/faqs";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Devbhoomi Infotech — AI, Software, Mobile & Web Development",
  description:
    "Rishikesh-headquartered technology partner serving clients worldwide through remote delivery. We build custom websites, business software, mobile apps, and AI automations.",
  alternates: {
    canonical: `${siteConfig.url}/`,
  },
};

export default function HomePage() {
  const faqSchema = generateFAQSchema(siteFAQs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: `${siteConfig.url}/` },
  ]);

  return (
    <div className="w-full">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Bar (Verified stats only) */}
      <TrustBar />

      {/* 3. About (Brief) */}
      <AboutBrief />

      {/* 4. Services (4 Core Groups) */}
      <ServicesPreviewSection />

      {/* 5. Why Choose Us */}
      <WhyChooseUsSection />

      {/* 6. Projects (Categorized with honest badges) */}
      <ProjectsPreviewSection />

     

      {/* 8. Process (6-Step Disciplined Methodology) */}
      <ProcessSection />

      {/* 9. Packages & Pricing (id="packages") */}
      <PackagesPreviewSection />

     

       {/* 7. Client Testimonials & Feedback (Verified only) */}
      <TestimonialsSection />

   

      {/* 12. Contact & Conversion */}
      <ContactSection />
      {/* 11. FAQ (Answer-first Q&As with Schema) */}
      <FaqAccordionSection />
       {/* 10. Insights (Latest 3 verified blog articles) */}
      <InsightsPreviewSection />
         {/* 8. Regional Service Explorer */}
      <ExploreRegionsSection />
    </div>
  );
}

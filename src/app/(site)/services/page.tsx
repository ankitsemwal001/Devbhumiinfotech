import type { Metadata } from "next";
import { ServicesPreviewSection } from "@/modules/home/services-preview";
import { CtaBannerSection } from "@/modules/home/cta-banner";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Professional IT & Web Services in Rishikesh | Devbhoomi Infotech",
  description:
    "Explore our complete range of digital services: website development, UI/UX design, SEO marketing, and AI automation systems in Rishikesh, Uttarakhand.",
  alternates: {
    canonical: `${siteConfig.url}/services/`,
  },
};

export default function ServicesIndexPage() {
  return (
    <div className="w-full">
      <section className="py-20 bg-slate-900 text-white text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Our Digital Services
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          High-performance web applications, ROI-driven SEO campaigns, and custom AI automation built for modern brands.
        </p>
      </section>

      <ServicesPreviewSection />
      <CtaBannerSection />
    </div>
  );
}

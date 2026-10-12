import type { Metadata } from "next";
import { performanceQaPage } from "@/content/why-choose/performance-qa";
import { WhyChooseDetailTemplate } from "@/modules/why-choose-us";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: performanceQaPage.metaTitle,
  description: performanceQaPage.metaDescription,
  keywords: performanceQaPage.keywords,
  alternates: {
    canonical: `${siteConfig.url}/why-choose-us/${performanceQaPage.slug}/`,
  },
};

export default function PerformanceQaRoutePage() {
  return <WhyChooseDetailTemplate data={performanceQaPage} />;
}

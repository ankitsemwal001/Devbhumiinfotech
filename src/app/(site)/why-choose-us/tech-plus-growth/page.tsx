import type { Metadata } from "next";
import { techPlusGrowthPage } from "@/content/why-choose/tech-plus-growth";
import { WhyChooseDetailTemplate } from "@/modules/why-choose-us";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: techPlusGrowthPage.metaTitle,
  description: techPlusGrowthPage.metaDescription,
  keywords: techPlusGrowthPage.keywords,
  alternates: {
    canonical: `${siteConfig.url}/why-choose-us/${techPlusGrowthPage.slug}/`,
  },
};

export default function TechPlusGrowthRoutePage() {
  return <WhyChooseDetailTemplate data={techPlusGrowthPage} />;
}

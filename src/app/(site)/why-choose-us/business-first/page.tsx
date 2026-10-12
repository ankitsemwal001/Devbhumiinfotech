import type { Metadata } from "next";
import { businessFirstPage } from "@/content/why-choose/business-first";
import { WhyChooseDetailTemplate } from "@/modules/why-choose-us";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: businessFirstPage.metaTitle,
  description: businessFirstPage.metaDescription,
  keywords: businessFirstPage.keywords,
  alternates: {
    canonical: `${siteConfig.url}/why-choose-us/${businessFirstPage.slug}/`,
  },
};

export default function BusinessFirstRoutePage() {
  return <WhyChooseDetailTemplate data={businessFirstPage} />;
}

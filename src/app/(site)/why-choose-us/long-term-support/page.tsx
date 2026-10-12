import type { Metadata } from "next";
import { longTermSupportPage } from "@/content/why-choose/long-term-support";
import { WhyChooseDetailTemplate } from "@/modules/why-choose-us";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: longTermSupportPage.metaTitle,
  description: longTermSupportPage.metaDescription,
  keywords: longTermSupportPage.keywords,
  alternates: {
    canonical: `${siteConfig.url}/why-choose-us/${longTermSupportPage.slug}/`,
  },
};

export default function LongTermSupportRoutePage() {
  return <WhyChooseDetailTemplate data={longTermSupportPage} />;
}

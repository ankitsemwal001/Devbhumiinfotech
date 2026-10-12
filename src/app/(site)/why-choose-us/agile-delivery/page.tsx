import type { Metadata } from "next";
import { agileDeliveryPage } from "@/content/why-choose/agile-delivery";
import { WhyChooseDetailTemplate } from "@/modules/why-choose-us";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: agileDeliveryPage.metaTitle,
  description: agileDeliveryPage.metaDescription,
  keywords: agileDeliveryPage.keywords,
  alternates: {
    canonical: `${siteConfig.url}/why-choose-us/${agileDeliveryPage.slug}/`,
  },
};

export default function AgileDeliveryRoutePage() {
  return <WhyChooseDetailTemplate data={agileDeliveryPage} />;
}

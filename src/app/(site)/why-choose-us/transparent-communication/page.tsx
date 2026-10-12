import type { Metadata } from "next";
import { transparentCommunicationPage } from "@/content/why-choose/transparent-communication";
import { WhyChooseDetailTemplate } from "@/modules/why-choose-us";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: transparentCommunicationPage.metaTitle,
  description: transparentCommunicationPage.metaDescription,
  keywords: transparentCommunicationPage.keywords,
  alternates: {
    canonical: `${siteConfig.url}/why-choose-us/${transparentCommunicationPage.slug}/`,
  },
};

export default function TransparentCommunicationRoutePage() {
  return <WhyChooseDetailTemplate data={transparentCommunicationPage} />;
}

import type { Metadata } from "next";
import { tailoredWorkflowPage } from "@/content/why-choose/tailored-workflow";
import { WhyChooseDetailTemplate } from "@/modules/why-choose-us";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: tailoredWorkflowPage.metaTitle,
  description: tailoredWorkflowPage.metaDescription,
  keywords: tailoredWorkflowPage.keywords,
  alternates: {
    canonical: `${siteConfig.url}/why-choose-us/${tailoredWorkflowPage.slug}/`,
  },
};

export default function TailoredWorkflowRoutePage() {
  return <WhyChooseDetailTemplate data={tailoredWorkflowPage} />;
}

import type { Metadata } from "next";
import { localRootsPage } from "@/content/why-choose/local-roots";
import { WhyChooseDetailTemplate } from "@/modules/why-choose-us";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: localRootsPage.metaTitle,
  description: localRootsPage.metaDescription,
  keywords: localRootsPage.keywords,
  alternates: {
    canonical: `${siteConfig.url}/why-choose-us/${localRootsPage.slug}/`,
  },
};

export default function LocalRootsRoutePage() {
  return <WhyChooseDetailTemplate data={localRootsPage} />;
}

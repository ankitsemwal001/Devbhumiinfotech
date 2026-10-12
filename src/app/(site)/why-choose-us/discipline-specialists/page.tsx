import type { Metadata } from "next";
import { disciplineSpecialistsPage } from "@/content/why-choose/discipline-specialists";
import { WhyChooseDetailTemplate } from "@/modules/why-choose-us";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: disciplineSpecialistsPage.metaTitle,
  description: disciplineSpecialistsPage.metaDescription,
  keywords: disciplineSpecialistsPage.keywords,
  alternates: {
    canonical: `${siteConfig.url}/why-choose-us/${disciplineSpecialistsPage.slug}/`,
  },
};

export default function DisciplineSpecialistsRoutePage() {
  return <WhyChooseDetailTemplate data={disciplineSpecialistsPage} />;
}

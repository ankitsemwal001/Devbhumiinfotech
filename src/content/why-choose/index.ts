import { WhyChoosePageData } from "@/types/why-choose";
import { businessFirstPage } from "./business-first";
import { tailoredWorkflowPage } from "./tailored-workflow";
import { techPlusGrowthPage } from "./tech-plus-growth";
import { disciplineSpecialistsPage } from "./discipline-specialists";
import { transparentCommunicationPage } from "./transparent-communication";
import { localRootsPage } from "./local-roots";
import { performanceQaPage } from "./performance-qa";
import { agileDeliveryPage } from "./agile-delivery";
import { longTermSupportPage } from "./long-term-support";

export {
  businessFirstPage,
  tailoredWorkflowPage,
  techPlusGrowthPage,
  disciplineSpecialistsPage,
  transparentCommunicationPage,
  localRootsPage,
  performanceQaPage,
  agileDeliveryPage,
  longTermSupportPage,
};

export const allWhyChoosePages: WhyChoosePageData[] = [
  businessFirstPage,
  tailoredWorkflowPage,
  techPlusGrowthPage,
  disciplineSpecialistsPage,
  transparentCommunicationPage,
  localRootsPage,
  performanceQaPage,
  agileDeliveryPage,
  longTermSupportPage,
];

export function getWhyChooseBySlug(
  slug: string
): WhyChoosePageData | undefined {
  return allWhyChoosePages.find((page) => page.slug === slug);
}

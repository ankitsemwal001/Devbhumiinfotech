import { ServicePageData } from "@/types/service";
import { websiteDesignService } from "./website-design";
import { webDevelopmentService } from "./web-development";
import { digitalMarketingService } from "./digital-marketing";
import { aiAutomationService } from "./ai-automation";

export const allServices: ServicePageData[] = [
  websiteDesignService,
  webDevelopmentService,
  digitalMarketingService,
  aiAutomationService,
];

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return allServices.find((service) => service.slug === slug);
}

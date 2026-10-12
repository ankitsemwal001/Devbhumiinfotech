import { ServicePageData } from "@/types/service";
import { websiteDesignService, websiteDesignGeneralService } from "./website-design";
import { webDevelopmentService, webDevelopmentShortService } from "./web-development";
import { digitalMarketingService } from "./digital-marketing";
import { digitalGrowthService } from "./digital-growth";
import { aiAutomationService } from "./ai-automation";
import { softwareDevelopmentService } from "./software-development";

export const allServices: ServicePageData[] = [
  websiteDesignService,
  websiteDesignGeneralService,
  webDevelopmentService,
  webDevelopmentShortService,
  digitalMarketingService,
  digitalGrowthService,
  aiAutomationService,
  softwareDevelopmentService,
];

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return allServices.find((service) => service.slug === slug);
}

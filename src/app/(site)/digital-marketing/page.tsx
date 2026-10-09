import type { Metadata } from "next";
import { digitalMarketingService } from "@/content/services/digital-marketing";
import { ServiceDetailTemplate } from "@/modules/services/service-detail-template";

export const metadata: Metadata = {
  title: digitalMarketingService.metaTitle,
  description: digitalMarketingService.metaDescription,
  keywords: digitalMarketingService.keywords,
  alternates: {
    canonical: digitalMarketingService.canonicalUrl,
  },
};

export default function DigitalMarketingPage() {
  return <ServiceDetailTemplate data={digitalMarketingService} />;
}

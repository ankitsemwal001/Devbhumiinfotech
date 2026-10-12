import type { Metadata } from "next";
import { digitalMarketingService } from "@/content/services/digital-marketing";
import { ServiceDetailTemplate } from "@/modules/services/service-detail-template";

export const metadata: Metadata = {
  title: digitalMarketingService.metaTitle,
  description: digitalMarketingService.metaDescription,
  keywords: digitalMarketingService.keywords,
  alternates: {
    canonical: "https://www.devbhoomiinfotech.com/services/digital-marketing/",
  },
};

export default function DigitalMarketingPage() {
  return <ServiceDetailTemplate data={digitalMarketingService} />;
}

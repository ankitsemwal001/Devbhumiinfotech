import type { Metadata } from "next";
import { digitalGrowthService } from "@/content/services/digital-growth";
import { ServiceDetailTemplate } from "@/modules/services/service-detail-template";

export const metadata: Metadata = {
  title: digitalGrowthService.metaTitle,
  description: digitalGrowthService.metaDescription,
  keywords: digitalGrowthService.keywords,
  alternates: {
    canonical: "https://www.devbhoomiinfotech.com/services/digital-growth/",
  },
};

export default function DigitalGrowthServicePage() {
  return <ServiceDetailTemplate data={digitalGrowthService} />;
}

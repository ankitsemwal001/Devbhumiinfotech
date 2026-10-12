import type { Metadata } from "next";
import { softwareDevelopmentService } from "@/content/services/software-development";
import { ServiceDetailTemplate } from "@/modules/services/service-detail-template";

export const metadata: Metadata = {
  title: softwareDevelopmentService.metaTitle,
  description: softwareDevelopmentService.metaDescription,
  keywords: softwareDevelopmentService.keywords,
  alternates: {
    canonical: "https://www.devbhoomiinfotech.com/services/software-development/",
  },
};

export default function SoftwareDevelopmentServicePage() {
  return <ServiceDetailTemplate data={softwareDevelopmentService} />;
}

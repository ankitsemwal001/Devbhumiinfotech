import type { Metadata } from "next";
import { webDevelopmentShortService } from "@/content/services/web-development";
import { ServiceDetailTemplate } from "@/modules/services/service-detail-template";

export const metadata: Metadata = {
  title: webDevelopmentShortService.metaTitle,
  description: webDevelopmentShortService.metaDescription,
  keywords: webDevelopmentShortService.keywords,
  alternates: {
    canonical: "https://www.devbhoomiinfotech.com/services/web-development/",
  },
};

export default function WebDevelopmentServicePage() {
  return <ServiceDetailTemplate data={webDevelopmentShortService} />;
}

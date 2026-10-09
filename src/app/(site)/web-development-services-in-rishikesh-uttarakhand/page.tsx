import type { Metadata } from "next";
import { webDevelopmentService } from "@/content/services/web-development";
import { ServiceDetailTemplate } from "@/modules/services/service-detail-template";

export const metadata: Metadata = {
  title: webDevelopmentService.metaTitle,
  description: webDevelopmentService.metaDescription,
  keywords: webDevelopmentService.keywords,
  alternates: {
    canonical: webDevelopmentService.canonicalUrl,
  },
};

export default function WebDevelopmentPage() {
  return <ServiceDetailTemplate data={webDevelopmentService} />;
}

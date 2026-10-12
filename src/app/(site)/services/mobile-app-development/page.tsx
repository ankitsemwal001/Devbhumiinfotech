import type { Metadata } from "next";
import { mobileAppDevelopmentService } from "@/content/services/mobile-app-development";
import { ServiceDetailTemplate } from "@/modules/services/service-detail-template";

export const metadata: Metadata = {
  title: mobileAppDevelopmentService.metaTitle,
  description: mobileAppDevelopmentService.metaDescription,
  keywords: mobileAppDevelopmentService.keywords,
  alternates: {
    canonical: "https://www.devbhoomiinfotech.com/services/mobile-app-development/",
  },
};

export default function MobileAppDevelopmentServicePage() {
  return <ServiceDetailTemplate data={mobileAppDevelopmentService} />;
}

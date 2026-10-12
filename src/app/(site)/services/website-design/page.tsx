import type { Metadata } from "next";
import { websiteDesignGeneralService } from "@/content/services/website-design";
import { ServiceDetailTemplate } from "@/modules/services/service-detail-template";

export const metadata: Metadata = {
  title: websiteDesignGeneralService.metaTitle,
  description: websiteDesignGeneralService.metaDescription,
  keywords: websiteDesignGeneralService.keywords,
  alternates: {
    canonical: "https://www.devbhoomiinfotech.com/services/website-design/",
  },
};

export default function WebsiteDesignGeneralServicePage() {
  return <ServiceDetailTemplate data={websiteDesignGeneralService} />;
}

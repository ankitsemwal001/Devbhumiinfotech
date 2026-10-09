import type { Metadata } from "next";
import { websiteDesignService } from "@/content/services/website-design";
import { ServiceDetailTemplate } from "@/modules/services/service-detail-template";

export const metadata: Metadata = {
  title: websiteDesignService.metaTitle,
  description: websiteDesignService.metaDescription,
  keywords: websiteDesignService.keywords,
  alternates: {
    canonical: websiteDesignService.canonicalUrl,
  },
};

export default function WebsiteDesignPage() {
  return <ServiceDetailTemplate data={websiteDesignService} />;
}

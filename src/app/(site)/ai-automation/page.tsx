import type { Metadata } from "next";
import { aiAutomationService } from "@/content/services/ai-automation";
import { ServiceDetailTemplate } from "@/modules/services/service-detail-template";

export const metadata: Metadata = {
  title: aiAutomationService.metaTitle,
  description: aiAutomationService.metaDescription,
  keywords: aiAutomationService.keywords,
  alternates: {
    canonical: aiAutomationService.canonicalUrl,
  },
};

export default function AiAutomationPage() {
  return <ServiceDetailTemplate data={aiAutomationService} />;
}

import type { Metadata } from "next";
import { aiAutomationService } from "@/content/services/ai-automation";
import { ServiceDetailTemplate } from "@/modules/services/service-detail-template";

export const metadata: Metadata = {
  title: aiAutomationService.metaTitle,
  description: aiAutomationService.metaDescription,
  keywords: aiAutomationService.keywords,
  alternates: {
    canonical: "https://www.devbhoomiinfotech.com/services/ai-automation/",
  },
};

export default function AiAutomationPage() {
  return <ServiceDetailTemplate data={aiAutomationService} />;
}

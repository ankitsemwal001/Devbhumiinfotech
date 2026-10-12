import { ProcessStep, ServiceFeature, ServiceFAQ } from "./service";

export interface ServiceAreaGroup {
  region: string;
  badge?: string;
  category?: "uttarakhand" | "pan-india" | "international";
  description?: string;
  featuredPlaces?: string[];
  places: string[];
}

export interface WhyChoosePageData {
  slug: string;
  tag: string;
  category: string;
  image: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroBadge: string;
  heroHeading: {
    highlight: string;
    regular: string;
  };
  heroDescription: string;
  specs: string[];
  pills: string[];
  overviewHeading: string;
  overview: string[];
  featuresHeading: string;
  features: ServiceFeature[];
  processHeading: string;
  processSubheading?: string;
  processSteps: ProcessStep[];
  serviceAreasHeading?: string;
  serviceAreasSubheading?: string;
  serviceAreas?: ServiceAreaGroup[];
  faqsHeading?: string;
  faqs: ServiceFAQ[];
  actionText: string;
}

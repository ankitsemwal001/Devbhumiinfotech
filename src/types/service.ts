export interface ProcessStep {
  id: string;
  iconName?: string;
  title: string;
  subtitle?: string;
  description: string;
  points: string[];
}

export interface ServiceFeature {
  title: string;
  description: string;
  iconName?: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServicePageData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl?: string;
  keywords: string[];
  heroBadge: string;
  heroHeading: {
    highlight: string;
    regular: string;
  };
  heroDescription: string;
  overview: {
    heading: string;
    content: string[];
  };
  featuresHeading?: string;
  features: ServiceFeature[];
  processHeading: string;
  processSubheading?: string;
  processSteps: ProcessStep[];
  faqsHeading?: string;
  faqs: ServiceFAQ[];
}

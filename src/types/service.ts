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

export interface ServiceSubSection {
  id: string; // anchor id, e.g. "ai-chatbots"
  title: string;
  definition: string;
  deliverables: string[];
}

export interface ServiceAtAGlance {
  whatItIs: string;
  typicalUseCases: string[];
  deliverables: string[];
  typicalProcessLength?: string;
  engagementModel: string;
}

export interface ServiceWhoItsFor {
  idealFor: string[];
  notNeededWhen: string[];
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
  answerCapsule?: string;
  atAGlance?: ServiceAtAGlance;
  whoItsFor?: ServiceWhoItsFor;
  subServicesDetailed?: ServiceSubSection[];
  featuresHeading?: string;
  features: ServiceFeature[];
  processHeading: string;
  processSubheading?: string;
  processSteps: ProcessStep[];
  faqsHeading?: string;
  faqs: ServiceFAQ[];
  lastUpdated?: string;
  reviewedBy?: string;
}

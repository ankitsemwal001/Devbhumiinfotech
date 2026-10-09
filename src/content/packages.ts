export interface PackageFeature {
  text: string;
  included: boolean;
}

export interface PricingPackage {
  id: number;
  name: string;
  price: string;
  period: string;
  description: string;
  features: PackageFeature[];
  cta: string;
  popular: boolean;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: 1,
    name: "Starter Website",
    price: "₹15,000",
    period: "",
    description: "Perfect for getting started",
    features: [
      { text: "5 Pages Website", included: true },
      { text: "Responsive Design", included: true },
      { text: "Basic UI Design", included: true },
      { text: "Contact Form Integration", included: true },
      { text: "Deployment Support", included: true },
      { text: "Cross Browser Compatibility", included: true },
      { text: "Basic SEO", included: false },
      { text: "Blog Setup", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    id: 2,
    name: "Standard Website",
    price: "₹25,000",
    period: "",
    description: "Most Popular Choice",
    features: [
      { text: "8–10 Pages Website", included: true },
      { text: "Fully Responsive Design", included: true },
      { text: "Custom UI Design", included: true },
      { text: "Contact Form & WhatsApp Integration", included: true },
      { text: "Basic SEO Optimization", included: true },
      { text: "Blog Setup & Configuration", included: true },
      { text: "Fast Page Load Optimization", included: true },
      { text: "Deployment & Launch Support", included: true },
      { text: "Advanced SEO Optimization", included: false },
      { text: "Performance & Core Web Vitals Optimization", included: false },
      { text: "Priority Support", included: false },
    ],
    cta: "Choose Plan",
    popular: true,
  },
  {
    id: 3,
    name: "Premium Website",
    price: "₹40,000",
    period: "",
    description: "Enterprise solutions",
    features: [
      { text: "15–20 Pages Website", included: true },
      { text: "Fully Responsive Design", included: true },
      { text: "Custom Premium UI Design", included: true },
      { text: "Contact Form & WhatsApp Integration", included: true },
      { text: "Advanced SEO Optimization", included: true },
      { text: "Blog Setup & Optimization", included: true },
      { text: "Performance & Core Web Vitals Optimization", included: true },
      { text: "Security & Basic Hardening", included: true },
      { text: "Deployment, Monitoring & Priority Support", included: true },
      { text: "AI-Powered Chatbot with Live Agent Support", included: true },
    ],
    cta: "Go Premium",
    popular: false,
  },
];

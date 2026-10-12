export interface PackageFeature {
  text: string;
  included: boolean;
}

export type PriceType = "starting-from" | "custom";

export interface PricingPackage {
  id: number;
  name: string;
  price: string;
  priceType: PriceType;
  category: "website" | "custom-solution";
  period?: string;
  description: string;
  features: PackageFeature[];
  cta: string;
  popular: boolean;
}

export const pricingPackages: PricingPackage[] = [
  // --- Standard Website Packages (Starting-from pricing) ---
  {
    id: 1,
    name: "Starter Website",
    price: "₹15,000",
    priceType: "starting-from",
    category: "website",
    description: "Essential web presence for small local businesses and professionals.",
    features: [
      { text: "5 Pages Website", included: true },
      { text: "Responsive Mobile, Tablet & Desktop Design", included: true },
      { text: "Clean Brand Layout & UI", included: true },
      { text: "Contact Form & WhatsApp Click-to-Chat", included: true },
      { text: "Deployment & Domain Setup Assistance", included: true },
      { text: "Cross-Browser Compatibility", included: true },
      { text: "Basic Meta Tags & Sitemap", included: true },
      { text: "Ongoing Blog System", included: false },
    ],
    cta: "Discuss Starter Project",
    popular: false,
  },
  {
    id: 2,
    name: "Standard Website (Most Popular)",
    price: "₹25,000",
    priceType: "starting-from",
    category: "website",
    description: "Complete business website with search foundations and blog.",
    features: [
      { text: "8–10 Pages Website", included: true },
      { text: "Responsive & Modern Design", included: true },
      { text: "Integrated Contact Form & Direct Lead Routing", included: true },
      { text: "Foundational On-Page SEO & Schema Setup", included: true },
      { text: "Blog / Insights Section Setup", included: true },
      { text: "Performance & Speed Optimization", included: true },
      { text: "Deployment & Cloud Launch Support", included: true },
      { text: "Post-Launch Handover & Walkthrough", included: true },
    ],
    cta: "Discuss Standard Project",
    popular: true,
  },
  {
    id: 3,
    name: "Premium Website",
    price: "₹40,000",
    priceType: "starting-from",
    category: "website",
    description: "Expanded multi-page architecture with advanced technical optimization.",
    features: [
      { text: "15–20 Pages Website", included: true },
      { text: "Tailored UI Components & Micro-Interactions", included: true },
      { text: "Structured Schema.org (LocalBusiness, Service, FAQ)", included: true },
      { text: "Speed & Performance Hardening", included: true },
      { text: "Content Publishing Architecture", included: true },
      { text: "Analytics & Conversion Event Configuration", included: true },
      { text: "Priority Launch & Post-Deployment Review", included: true },
    ],
    cta: "Discuss Premium Project",
    popular: false,
  },

  // --- Bespoke Custom Solutions (Custom Quote) ---
  {
    id: 4,
    name: "AI & Workflow Automation",
    price: "Custom Quote",
    priceType: "custom",
    category: "custom-solution",
    description: "Intelligent automations, WhatsApp bots, and operational pipelines.",
    features: [
      { text: "Process Discovery & Workflow Mapping", included: true },
      { text: "n8n / API Automation Pipelines", included: true },
      { text: "WhatsApp Business & Lead Routing Automation", included: true },
      { text: "AI Assistant / Chatbot Integration", included: true },
      { text: "Testing, Error Handling & System Documentation", included: true },
    ],
    cta: "Discuss Automation Scope",
    popular: false,
  },
  {
    id: 5,
    name: "Custom Software & SaaS",
    price: "Custom Quote",
    priceType: "custom",
    category: "custom-solution",
    description: "Full-stack web applications, portals, and proprietary tools.",
    features: [
      { text: "System Architecture & Database Modeling", included: true },
      { text: "Next.js / React Full-Stack Engineering", included: true },
      { text: "Secure Authentication & Role-Based Access", included: true },
      { text: "Custom API & Third-Party Service Integration", included: true },
      { text: "Rigorous QA Testing & Cloud Deployment", included: true },
    ],
    cta: "Discuss Software Scope",
    popular: false,
  },
  {
    id: 6,
    name: "Digital Growth & SEO Retainer",
    price: "Custom Quote",
    priceType: "custom",
    category: "custom-solution",
    description: "Continuous search visibility, local optimization, and lead generation.",
    features: [
      { text: "Ongoing Technical & Content SEO Management", included: true },
      { text: "Generative Engine Optimisation (GEO) Tracking", included: true },
      { text: "Google Business Profile Local Management", included: true },
      { text: "High-Intent Keyword & Content Strategy", included: true },
      { text: "Monthly Transparent Performance & Ranking Reports", included: true },
    ],
    cta: "Discuss Growth Retainer",
    popular: false,
  },
];

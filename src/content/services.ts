import { allServices, getServiceBySlug } from "./services/index";

export { allServices, getServiceBySlug };

export interface ServiceCapability {
  title: string;
  description: string;
}

export interface ServiceGroup {
  id: string; // anchor id: "ai-automation", "software-development", "web-development", "digital-growth"
  title: string;
  shortTitle: string;
  summary: string;
  capabilities: string[];
  liveHref?: string; // If a dedicated page is live
  geoServiceSlugs: string[]; // Mapping to the 9 geo services
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: "ai-automation",
    title: "AI & Business Automation",
    shortTitle: "AI & Automation",
    summary:
      "Intelligent workflows, conversational AI assistants, and process automation designed to cut manual friction and scale operations.",
    capabilities: [
      "Custom AI agents & solutions",
      "AI chatbots & conversational assistants",
      "Business process & workflow automation (n8n, Make, APIs)",
      "CRM & WhatsApp business automation",
      "AI system integration with existing databases",
    ],
    liveHref: "/services/ai-automation/",
    geoServiceSlugs: [
      "ai-automation",
      "ai-chatbot-development",
      "whatsapp-automation",
    ],
  },
  {
    id: "software-development",
    title: "Software Development",
    shortTitle: "Software Development",
    summary:
      "Scalable web applications, cloud dashboards, and bespoke software engineered for reliable business performance.",
    capabilities: [
      "Custom software engineering",
      "SaaS product development & architecture",
      "Full-stack web applications (Next.js, Node, React)",
      "Business management systems & internal tools",
      "REST & GraphQL API development & integration",
      "Software maintenance & system modernisation",
    ],
    liveHref: "/services/software-development/",
    geoServiceSlugs: ["web-development"],
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    summary:
      "Native and cross-platform mobile applications for iOS and Android, built for performance, offline reliability, and app-store success.",
    capabilities: [
      "Cross-platform apps (React Native, Flutter)",
      "Native iOS & Android development",
      "Custom mobile UI/UX design",
      "Mobile API & backend integration",
      "App Store & Google Play deployment",
      "Ongoing app maintenance & updates",
    ],
    liveHref: "/services/#mobile-app-development",
    geoServiceSlugs: ["mobile-app-development"],
  },
  {
    id: "web-development",
    title: "Web Development",
    shortTitle: "Web Development",
    summary:
      "High-performance, mobile-first websites and conversion-focused architectures built to represent your brand and convert visitors.",
    capabilities: [
      "Corporate & business websites",
      "E-commerce stores & product catalogues",
      "Landing pages for targeted campaigns",
      "Website redesign & performance optimisation",
      "Responsive UI/UX design with modern typography",
    ],
    liveHref: "/services/web-development/",
    geoServiceSlugs: [
      "website-design",
      "web-development",
      "ecommerce-website-development",
    ],
  },
  {
    id: "digital-growth",
    title: "Digital Growth, SEO & GEO",
    shortTitle: "Digital Growth",
    summary:
      "Comprehensive search visibility combining traditional SEO, Local SEO in Uttarakhand, Generative Engine Optimisation (GEO), and conversion strategies.",
    capabilities: [
      "Technical & On-Page SEO",
      "GEO (Generative Engine Optimisation for AI search & answer engines)",
      "Local SEO & Google Business Profile optimisation",
      "Lead generation & Conversion Rate Optimisation (CRO)",
      "Content strategy & search-focused blogs",
      "Performance marketing & Google Ads management",
    ],
    liveHref: "/services/digital-growth/",
    geoServiceSlugs: [
      "seo-services",
      "digital-marketing",
      "google-ads-management",
    ],
  },
];

export function getServiceGroup(id: string): ServiceGroup | undefined {
  return serviceGroups.find((g) => g.id === id);
}

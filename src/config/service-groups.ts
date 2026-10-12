export interface SubServiceItem {
  slug: string;
  title: string;
  description: string;
  anchor: string;
  href?: string; // If it has its own dedicated live page
  status: "live" | "planned";
}

export interface NavigationServiceGroup {
  id: string; // "ai-automation" | "software-development" | "mobile-app-development" | "web-development" | "digital-marketing"
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  primaryHref: string;
  accent: "blue" | "emerald" | "amber" | "purple" | "rose";
  featured?: boolean;
  pageKey: string;
  status: "live" | "planned";
  subServices: SubServiceItem[];
}

/**
 * 4 Navigation Groups presenting the 5 core practices:
 * 1. AI & Automation (AI Automation)
 * 2. Software Development (Custom Software & SaaS)
 * 3. Web Development (Web Development + Website Design)
 * 4. Digital Growth (Digital Growth & SEO + Digital Marketing)
 */
export const navigationServiceGroups: NavigationServiceGroup[] = [
  {
    id: "ai-automation",
    slug: "ai-automation",
    name: "AI & Automation",
    tagline: "Smarter workflows, higher productivity",
    summary:
      "Transform your business with intelligent automation and AI-powered solutions that save time, reduce costs, and streamline operations.",
    primaryHref: "/services/ai-automation/",
    accent: "blue",
    featured: true,
    pageKey: "services-ai-automation",
    status: "live",
    subServices: [
      {
        slug: "ai-chatbots",
        title: "AI Chatbots",
        description: "Custom AI assistants for business, support & sales",
        anchor: "#ai-chatbots",
        status: "planned",
      },
      {
        slug: "workflow-automation",
        title: "Workflow Automation",
        description: "Automate repetitive tasks and streamline operations",
        anchor: "#workflow-automation",
        status: "planned",
      },
      {
        slug: "data-processing",
        title: "Data Processing",
        description: "Extract, process and analyze data with AI",
        anchor: "#data-processing",
        status: "planned",
      },
      {
        slug: "custom-ai-solutions",
        title: "Custom AI Solutions",
        description: "Tailored AI solutions for your specific needs",
        anchor: "#custom-ai-solutions",
        status: "planned",
      },
    ],
  },
  {
    id: "software-development",
    slug: "software-development",
    name: "Software Development",
    tagline: "Custom software for your business",
    summary:
      "Scalable web applications, cloud dashboards, and bespoke software engineered for reliable business performance.",
    primaryHref: "/services/software-development/",
    accent: "blue",
    pageKey: "services-software-development",
    status: "live",
    subServices: [
      {
        slug: "custom-software",
        title: "Custom software",
        description: "Tailored business software designed around your workflows",
        anchor: "#custom-software",
        status: "planned",
      },
      {
        slug: "saas-product-development",
        title: "SaaS product development",
        description: "Multi-tenant cloud architectures with secure authentication",
        anchor: "#saas-product-development",
        status: "planned",
      },
      {
        slug: "web-applications",
        title: "Web applications",
        description: "Full-stack web apps built for performance and security",
        anchor: "#web-applications",
        status: "planned",
      },
      {
        slug: "business-management-systems",
        title: "Business management systems",
        description: "Internal portals, ERP modules, and operational tools",
        anchor: "#business-management-systems",
        status: "planned",
      },
      {
        slug: "api-development-integration",
        title: "API development & integration",
        description: "REST and GraphQL APIs connecting third-party platforms",
        anchor: "#api-development-integration",
        status: "planned",
      },
      {
        slug: "maintenance-modernisation",
        title: "Maintenance & modernisation",
        description: "Code refactoring, security patches, and cloud migrations",
        anchor: "#maintenance-modernisation",
        status: "planned",
      },
    ],
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    name: "Mobile Apps",
    tagline: "iOS & Android applications",
    summary:
      "Native and cross-platform mobile applications engineered for responsive performance and clean user experiences.",
    primaryHref: "/services/mobile-app-development/",
    accent: "emerald",
    pageKey: "services-mobile-app-development",
    status: "live",
    subServices: [
      {
        slug: "ios-android-app-development",
        title: "iOS & Android app development",
        description: "Mobile applications engineered for reliable performance across devices",
        anchor: "#ios-android-app-development",
        status: "planned",
      },
    ],
  },
  {
    id: "web-development",
    slug: "web-development",
    name: "Web Development",
    tagline: "High-performance websites",
    summary:
      "Modern websites engineered with clean typography, responsive layouts, and search-friendly markup.",
    primaryHref: "/services/web-development/",
    accent: "amber",
    pageKey: "services-web-development",
    status: "live",
    subServices: [
      {
        slug: "business-corporate-websites",
        title: "Business & corporate websites",
        description: "Professional company websites built to present your services clearly",
        anchor: "#business-corporate-websites",
        status: "planned",
      },
      {
        slug: "website-design",
        title: "Website design (UI/UX)",
        description: "User experience wireframes, bespoke design systems, and responsive layouts",
        anchor: "#website-design",
        href: "/services/website-design/",
        status: "live",
      },
      {
        slug: "ecommerce",
        title: "E-commerce",
        description: "Product catalogs, cart architectures, and checkout integrations",
        anchor: "#ecommerce",
        status: "planned",
      },
      {
        slug: "landing-pages",
        title: "Landing pages",
        description: "Targeted campaign pages engineered for inquiry conversion",
        anchor: "#landing-pages",
        status: "planned",
      },
      {
        slug: "redesign-optimisation",
        title: "Redesign & optimisation",
        description: "Performance upgrades, accessibility improvements, and layout modernization",
        anchor: "#redesign-optimisation",
        status: "planned",
      },
    ],
  },
  {
    id: "digital-growth",
    slug: "digital-marketing",
    name: "Digital Growth",
    tagline: "SEO, content & online visibility",
    summary:
      "Comprehensive search visibility combining technical SEO, Generative Engine Optimisation (GEO), and local search strategies.",
    primaryHref: "/services/digital-marketing/",
    accent: "rose",
    pageKey: "services-digital-marketing",
    status: "live",
    subServices: [
      {
        slug: "seo",
        title: "SEO",
        description: "Technical site structure, crawl optimization, and search rankings",
        anchor: "#seo",
        status: "planned",
      },
      {
        slug: "geo",
        title: "GEO (generative engine optimisation)",
        description: "Optimizing content structure for citation by AI assistants and answer engines",
        anchor: "#geo",
        status: "planned",
      },
      {
        slug: "local-seo",
        title: "Local SEO",
        description: "Google Business Profile optimisation and local search visibility",
        anchor: "#local-seo",
        status: "planned",
      },
      {
        slug: "social-media-marketing",
        title: "Social media marketing",
        description: "Brand communication and organic reach across professional channels",
        anchor: "#social-media-marketing",
        status: "planned",
      },
      {
        slug: "content-strategy",
        title: "Content strategy",
        description: "Structured informational articles that answer buyer questions directly",
        anchor: "#content-strategy",
        status: "planned",
      },
      {
        slug: "lead-generation-conversion",
        title: "Lead generation & conversion optimisation",
        description: "Friction-free inquiry flows and data-backed conversion improvements",
        anchor: "#lead-generation-conversion",
        status: "planned",
      },
    ],
  },
];

export const practiceToGroupMap: Record<string, string> = {
  "ai-automation": "ai-automation",
  "software-development": "software-development",
  "mobile-app-development": "mobile-app-development",
  "web-development": "web-development",
  "website-design": "web-development",
  "digital-marketing": "digital-growth",
  "digital-growth": "digital-growth",
};

export function getGroupForPractice(practiceSlug: string): NavigationServiceGroup | undefined {
  const groupId = practiceToGroupMap[practiceSlug];
  return navigationServiceGroups.find((g) => g.id === groupId);
}

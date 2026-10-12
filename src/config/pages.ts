export type PageStatus = "live" | "planned";

export interface PageEntry {
  key: string;
  path: string;
  title: string;
  status: PageStatus;
  inNav?: boolean;
  inSitemap?: boolean;
  description?: string;
}

/**
 * Single source of truth for all live and planned pages.
 * Rules:
 * - A planned page NEVER appears in nav, footer, sitemap or related links.
 * - Promoting a page = move folder out of _planned/ and set status: "live".
 */
export const pagesRegistry: Record<string, PageEntry> = {
  // --- LIVE PAGES (Phase 1) ---
  home: {
    key: "home",
    path: "/",
    title: "Home",
    status: "live",
    inNav: true,
    inSitemap: true,
  },
  about: {
    key: "about",
    path: "/about/",
    title: "About Us",
    status: "live",
    inNav: true,
    inSitemap: true,
  },
  "about-company-overview": {
    key: "about-company-overview",
    path: "/about/company-overview/",
    title: "Company Overview",
    status: "live",
    inNav: true,
    inSitemap: true,
  },
  "about-our-approach": {
    key: "about-our-approach",
    path: "/about/our-approach/",
    title: "Our Approach",
    status: "live",
    inNav: true,
    inSitemap: true,
  },
  "about-why-choose-us": {
    key: "about-why-choose-us",
    path: "/about/why-choose-us/",
    title: "Why Choose Us",
    status: "live",
    inNav: true,
    inSitemap: true,
  },
  services: {
    key: "services",
    path: "/services/",
    title: "Services",
    status: "live",
    inNav: true,
    inSitemap: true,
  },
  "services-ai-automation": {
    key: "services-ai-automation",
    path: "/services/ai-automation/",
    title: "AI & Business Automation",
    status: "live",
    inNav: true,
    inSitemap: true,
  },
  "services-software-development": {
    key: "services-software-development",
    path: "/services/software-development/",
    title: "Custom Software & SaaS",
    status: "live",
    inNav: true,
    inSitemap: true,
  },
  "services-mobile-app-development": {
    key: "services-mobile-app-development",
    path: "/services/mobile-app-development/",
    title: "Mobile App Development",
    status: "live",
    inNav: true,
    inSitemap: true,
  },
  "services-web-development": {
    key: "services-web-development",
    path: "/services/web-development/",
    title: "Web Development",
    status: "live",
    inNav: true,
    inSitemap: true,
  },
  "services-website-design": {
    key: "services-website-design",
    path: "/services/website-design/",
    title: "Website Design",
    status: "live",
    inNav: true,
    inSitemap: true,
  },
  "services-digital-marketing": {
    key: "services-digital-marketing",
    path: "/services/digital-marketing/",
    title: "Digital Marketing",
    status: "live",
    inNav: true,
    inSitemap: true,
  },
  "services-digital-growth": {
    key: "services-digital-growth",
    path: "/services/digital-growth/",
    title: "Digital Growth & SEO",
    status: "live",
    inNav: true,
    inSitemap: true,
  },
  projects: {
    key: "projects",
    path: "/projects/",
    title: "Projects",
    status: "live",
    inNav: true,
    inSitemap: true,
  },
  blogs: {
    key: "blogs",
    path: "/blogs/",
    title: "Insights",
    status: "live",
    inNav: true,
    inSitemap: true,
  },
  pricing: {
    key: "pricing",
    path: "/pricing/",
    title: "Pricing",
    status: "live",
    inNav: true,
    inSitemap: true,
  },
  locations: {
    key: "locations",
    path: "/locations/",
    title: "Service Locations",
    status: "live",
    inNav: false,
    inSitemap: true,
  },
  contact: {
    key: "contact",
    path: "/contact/",
    title: "Contact Us",
    status: "live",
    inNav: true,
    inSitemap: true,
  },

  // Live Specialized / Legacy Service Landing Pages
  "website-design-rishikesh": {
    key: "website-design-rishikesh",
    path: "/website-design-services-in-rishikesh-uttarakhand/",
    title: "Website Design in Rishikesh",
    status: "live",
    inNav: false,
    inSitemap: true,
  },
  "web-development-rishikesh": {
    key: "web-development-rishikesh",
    path: "/web-development-services-in-rishikesh-uttarakhand/",
    title: "Web Development in Rishikesh",
    status: "live",
    inNav: false,
    inSitemap: true,
  },
  "digital-marketing": {
    key: "digital-marketing",
    path: "/digital-marketing/",
    title: "Digital Marketing & SEO",
    status: "live",
    inNav: false,
    inSitemap: false, // 301 canonical redirect to /services/digital-marketing/
  },
  "ai-automation": {
    key: "ai-automation",
    path: "/ai-automation/",
    title: "AI & Business Automation",
    status: "live",
    inNav: false,
    inSitemap: false, // 301 canonical redirect to /services/ai-automation/
  },

  // Live "Built on Quality. Driven by Reliability" card detail pages
  "why-choose-business-first": {
    key: "why-choose-business-first",
    path: "/why-choose-us/business-first/",
    title: "Business-First Problem Solving",
    status: "live",
    inNav: false,
    inSitemap: true,
  },
  "why-choose-tailored-workflow": {
    key: "why-choose-tailored-workflow",
    path: "/why-choose-us/tailored-workflow/",
    title: "Tailored to Your Workflow",
    status: "live",
    inNav: false,
    inSitemap: true,
  },
  "why-choose-tech-plus-growth": {
    key: "why-choose-tech-plus-growth",
    path: "/why-choose-us/tech-plus-growth/",
    title: "Technology + Growth Under One Roof",
    status: "live",
    inNav: false,
    inSitemap: true,
  },
  "why-choose-discipline-specialists": {
    key: "why-choose-discipline-specialists",
    path: "/why-choose-us/discipline-specialists/",
    title: "Dedicated Discipline Specialists",
    status: "live",
    inNav: false,
    inSitemap: true,
  },
  "why-choose-transparent-communication": {
    key: "why-choose-transparent-communication",
    path: "/why-choose-us/transparent-communication/",
    title: "Transparent Communication",
    status: "live",
    inNav: false,
    inSitemap: true,
  },
  "why-choose-local-roots": {
    key: "why-choose-local-roots",
    path: "/why-choose-us/local-roots/",
    title: "Local Roots, Nationwide Reach",
    status: "live",
    inNav: false,
    inSitemap: true,
  },
  "why-choose-performance-qa": {
    key: "why-choose-performance-qa",
    path: "/why-choose-us/performance-qa/",
    title: "Production-Grade Quality & QA",
    status: "live",
    inNav: false,
    inSitemap: true,
  },
  "why-choose-agile-delivery": {
    key: "why-choose-agile-delivery",
    path: "/why-choose-us/agile-delivery/",
    title: "Agile Sprints & On-Time Delivery",
    status: "live",
    inNav: false,
    inSitemap: true,
  },
  "why-choose-long-term-support": {
    key: "why-choose-long-term-support",
    path: "/why-choose-us/long-term-support/",
    title: "Post-Launch Scaling & Support",
    status: "live",
    inNav: false,
    inSitemap: true,
  },

  // --- PLANNED PAGES (Phase 2 - Scaffolds in _planned/ returning 404) ---
  "about-our-story": {
    key: "about-our-story",
    path: "/about/our-story/",
    title: "Our Story",
    status: "planned",
    inNav: false,
    inSitemap: false,
  },
  "about-how-we-drive-growth": {
    key: "about-how-we-drive-growth",
    path: "/about/how-we-drive-growth/",
    title: "How We Drive Growth",
    status: "planned",
    inNav: false,
    inSitemap: false,
  },
  "about-team": {
    key: "about-team",
    path: "/about/team/",
    title: "Our Team",
    status: "planned",
    inNav: false,
    inSitemap: false,
  },
  "about-working-with-us-remotely": {
    key: "about-working-with-us-remotely",
    path: "/about/working-with-us-remotely/",
    title: "Working With Us Remotely",
    status: "planned",
    inNav: false,
    inSitemap: false,
  },

  // Planned Dedicated Services
  "service-ai-chatbots": {
    key: "service-ai-chatbots",
    path: "/services/ai-automation/chatbots/",
    title: "AI Chatbots & Virtual Assistants",
    status: "planned",
    inNav: false,
    inSitemap: false,
  },
  "service-custom-software": {
    key: "service-custom-software",
    path: "/services/software-development/custom-software/",
    title: "Custom Software & SaaS Development",
    status: "planned",
    inNav: false,
    inSitemap: false,
  },
  "service-ecommerce": {
    key: "service-ecommerce",
    path: "/services/web-development/ecommerce/",
    title: "E-Commerce Website Development",
    status: "planned",
    inNav: false,
    inSitemap: false,
  },
  "service-seo-geo": {
    key: "service-seo-geo",
    path: "/services/digital-growth/seo-geo/",
    title: "SEO & Generative Engine Optimisation",
    status: "planned",
    inNav: false,
    inSitemap: false,
  },

  // Planned Industries Hub & Sub-pages
  industries: {
    key: "industries",
    path: "/industries/",
    title: "Industries We Serve",
    status: "planned",
    inNav: false,
    inSitemap: false,
  },
  "industry-healthcare": {
    key: "industry-healthcare",
    path: "/industries/healthcare/",
    title: "Healthcare & Clinics",
    status: "planned",
    inNav: false,
    inSitemap: false,
  },
  "industry-education": {
    key: "industry-education",
    path: "/industries/education/",
    title: "Education & Colleges",
    status: "planned",
    inNav: false,
    inSitemap: false,
  },
  "industry-travel-hospitality": {
    key: "industry-travel-hospitality",
    path: "/industries/travel-hospitality/",
    title: "Travel & Hospitality",
    status: "planned",
    inNav: false,
    inSitemap: false,
  },
  "industry-yoga-wellness": {
    key: "industry-yoga-wellness",
    path: "/industries/yoga-wellness/",
    title: "Yoga & Wellness Retreats",
    status: "planned",
    inNav: false,
    inSitemap: false,
  },

  // Other planned pages
  faq: {
    key: "faq",
    path: "/faq/",
    title: "Frequently Asked Questions",
    status: "planned",
    inNav: false,
    inSitemap: false,
  },
  "request-quote": {
    key: "request-quote",
    path: "/request-a-quote/",
    title: "Request a Quote",
    status: "planned",
    inNav: false,
    inSitemap: false,
  },
  testimonials: {
    key: "testimonials",
    path: "/testimonials/",
    title: "Client Testimonials",
    status: "planned",
    inNav: false,
    inSitemap: false,
  },
  "thank-you": {
    key: "thank-you",
    path: "/thank-you/",
    title: "Thank You",
    status: "planned",
    inNav: false,
    inSitemap: false,
  },
};

export function getLivePages(): PageEntry[] {
  return Object.values(pagesRegistry).filter((p) => p.status === "live");
}

export function isPageLive(key: string): boolean {
  return pagesRegistry[key]?.status === "live";
}

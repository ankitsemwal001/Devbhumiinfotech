export type ProjectType = "client" | "internal" | "concept";

export interface Project {
  _id: string;
  slug: string;
  title: string;
  description: string;
  summary: string;
  image: string;
  category: "web" | "automation" | "seo";
  industry: string;
  serviceSlugs: string[];
  type: ProjectType;
  verified: boolean; // Must be true only with written owner/client confirmation
  technologies: string[];
  liveLink?: string;
  codeLink?: string;
  challenge?: string;
  solution?: string;
  outcome?: string; // No unverified outcome stats allowed
}

export const portfolioProjects: Project[] = [
  {
    _id: "1",
    slug: "yoga-wellness-website-solution",
    title: "Yoga Retreat & Wellness Platform",
    description:
      "Website architecture and digital inquiry solution designed for yoga retreats, ashrams, and wellness centers.",
    summary:
      "Serene UI design paired with inquiry forms, program schedules, and local SEO architecture for wellness retreats.",
    image: "/images/websites/yoga-wellness-website-template-dark-green.webp",
    category: "web",
    industry: "Yoga & Wellness",
    serviceSlugs: ["web-development", "website-design"],
    type: "concept", // Explicitly labeled as Concept/Template based on image asset
    verified: false,
    technologies: [
      "Custom Responsive Web Design",
      "Inquiry & Booking Form Architecture",
      "On-Page SEO Structure",
      "Schema.org Integration",
    ],
    challenge:
      "Wellness centers require calm, high-trust visual experiences that convert international and domestic travelers looking for retreats.",
    solution:
      "Engineered an earthy, focused web experience highlighting retreat schedules, teacher profiles, and direct WhatsApp / email inquiries.",
  },
  {
    _id: "2",
    slug: "school-college-portal",
    title: "School & Educational Institution Portal",
    description:
      "Responsive academic website development suited for schools, colleges, and training institutes.",
    summary:
      "Structured course directories, admission guidelines, event notices, and mobile-friendly layouts for educational institutions.",
    image: "/images/websites/school-college-website-rishikesh.webp",
    category: "web",
    industry: "Education",
    serviceSlugs: ["web-development"],
    type: "client",
    verified: false, // Pending owner confirmation
    technologies: [
      "Mobile-First Responsive Layout",
      "Admissions Inquiry Workflow",
      "Academic Notices & Event Pages",
      "Fast Core Web Vitals Optimization",
    ],
    challenge:
      "Educational institutions need clear navigation so parents and students can quickly find prospectus details and admission forms.",
    solution:
      "Structured an accessible, fast-loading institutional website with clear admission pathways and mobile-ready notice boards.",
  },
  {
    _id: "3",
    slug: "hotel-resort-hospitality-platform",
    title: "Hotel & Resort Booking Experience",
    description:
      "Hospitality web presence designed to showcase rooms, amenities, location, and drive direct guest inquiries.",
    summary:
      "High-resolution room galleries, rate cards, nearby travel guides, and direct reservation triggers.",
    image: "/images/websites/devbhoomi-infotech-hotel-resort-website-rishikesh.webp",
    category: "web",
    industry: "Travel & Hospitality",
    serviceSlugs: ["web-development", "website-design"],
    type: "client",
    verified: false, // Pending owner confirmation
    technologies: [
      "Hospitality UI/UX Design",
      "Room Category & Amenity Showcase",
      "Direct Booking Inquiry Funnel",
      "Speed & Local SEO Foundation",
    ],
    challenge:
      "Hotels often face high commission burdens from OTAs and need attractive direct channels to capture guest bookings.",
    solution:
      "Built an intuitive website with transparent room details, local activity recommendations, and quick contact action buttons.",
  },
  {
    _id: "4",
    slug: "custom-seo-content-dashboard",
    title: "Custom SEO & Content Management System",
    description:
      "Headless content management and SEO control panel designed for streamlined publication without CMS bloat.",
    summary:
      "Lightweight publishing dashboard with built-in schema formatting, meta controls, and markdown preview.",
    image: "/images/blog/custom-blog-editor-dashboard.webp",
    category: "seo",
    industry: "Technology & Publishing",
    serviceSlugs: ["software-development", "digital-growth"],
    type: "internal", // In-house product development
    verified: true,
    technologies: [
      "Custom Admin Dashboard UI",
      "Structured SEO Metadata Controls",
      "Dynamic Content Publishing",
      "Clean JSON-LD Output",
    ],
    challenge:
      "Heavy traditional CMS platforms often add excessive JavaScript overhead that slows down Core Web Vitals.",
    solution:
      "Engineered a streamlined publishing system focusing on clean semantic markup and fast static output.",
  },
  {
    _id: "5",
    slug: "ai-workflow-automation-system",
    title: "AI Lead Routing & Workflow Automation",
    description:
      "Automated pipeline integrating customer queries with messaging tools, CRM updates, and intelligent triage.",
    summary:
      "Multi-channel inquiry capture using n8n and AI APIs to route customer inquiries instantly to WhatsApp and email.",
    image: "/images/ai/best-n8n-ai-workflow-services-in-rishikesh.webp",
    category: "automation",
    industry: "Business Operations",
    serviceSlugs: ["ai-automation", "software-development"],
    type: "internal",
    verified: true,
    technologies: [
      "n8n Workflow Automation",
      "WhatsApp Cloud API Integration",
      "Automated Lead Notification",
      "CRM Webhook Dispatch",
    ],
    challenge:
      "Business owners lose prospective clients when inquiries submitted after hours take several hours or days to receive a response.",
    solution:
      "Implemented automated workflows that immediately acknowledge inquiries and dispatch alerts to the team's devices.",
  },
];

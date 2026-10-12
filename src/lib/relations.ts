import { portfolioProjects, Project } from "@/content/projects";
import { navigationServiceGroups, NavigationServiceGroup } from "@/config/service-groups";

export interface RelatedLink {
  title: string;
  href: string;
  description: string;
}

/**
 * Returns related live service groups excluding the current service.
 */
export function getRelatedServicesForService(currentSlug: string): NavigationServiceGroup[] {
  return navigationServiceGroups
    .filter((group) => group.slug !== currentSlug && group.status === "live")
    .slice(0, 3);
}

/**
 * Returns portfolio projects verified for the given service.
 */
export function getRelatedProjectsForService(serviceSlug: string): Project[] {
  return portfolioProjects.filter((project) =>
    project.serviceSlugs.includes(serviceSlug)
  );
}

/**
 * Returns approved local landing pages for a given service.
 */
export function getRelatedLocalPagesForService(serviceSlug: string): RelatedLink[] {
  const localMap: Record<string, RelatedLink[]> = {
    "web-development": [
      {
        title: "Web Development in Rishikesh (HQ)",
        href: "/web-development-services-in-rishikesh-uttarakhand/",
        description: "Local engineering and on-site consulting at our Rishikesh headquarters.",
      },
      {
        title: "Web Development in Dehradun",
        href: "/web-development-in-dehradun/",
        description: "High-performance web applications for businesses in Dehradun.",
      },
      {
        title: "Web Development in Haridwar",
        href: "/web-development-in-haridwar/",
        description: "Full-stack development for manufacturing and commercial firms in Haridwar.",
      },
    ],
    "website-design": [
      {
        title: "Website Design in Rishikesh (HQ)",
        href: "/website-design-services-in-rishikesh-uttarakhand/",
        description: "Bespoke UI/UX design and brand identity at our Rishikesh headquarters.",
      },
      {
        title: "Website Design in Dehradun",
        href: "/website-design-in-dehradun/",
        description: "Conversion-engineered website layouts for Dehradun enterprises.",
      },
      {
        title: "Website Design in Haridwar",
        href: "/website-design-in-haridwar/",
        description: "Responsive web designs tailored to hospitality and industrial clients.",
      },
    ],
    "ai-automation": [
      {
        title: "AI Automation in Rishikesh (HQ)",
        href: "/ai-automation-in-rishikesh/",
        description: "Conversational chatbots and workflow automation rooted in Rishikesh.",
      },
      {
        title: "AI Automation in Dehradun",
        href: "/ai-automation-in-dehradun/",
        description: "Intelligent business automation for commercial teams in Dehradun.",
      },
      {
        title: "AI Automation in Haridwar",
        href: "/ai-automation-in-haridwar/",
        description: "Automated customer inquiry handling and CRM workflows in Haridwar.",
      },
    ],
    "digital-marketing": [
      {
        title: "SEO Services in Rishikesh (HQ)",
        href: "/seo-services-in-rishikesh/",
        description: "Search engine optimization and local Google Business Profile visibility in Rishikesh.",
      },
      {
        title: "SEO Services in Dehradun",
        href: "/seo-services-in-dehradun/",
        description: "Organic search ranking and technical SEO audits for Dehradun businesses.",
      },
      {
        title: "SEO Services in Haridwar",
        href: "/seo-services-in-haridwar/",
        description: "Regional search visibility and conversion optimization in Haridwar.",
      },
    ],
  };

  return localMap[serviceSlug] || [];
}

/**
 * Returns primary service page href for an insight topic.
 */
export function getPrimaryServiceForInsight(category: string): { title: string; href: string } {
  switch (category.toLowerCase()) {
    case "ai":
    case "ai-automation":
      return { title: "AI & Automation Services", href: "/services/ai-automation/" };
    case "software":
    case "software-development":
      return { title: "Software Development Services", href: "/services/software-development/" };
    case "mobile":
    case "mobile-apps":
      return { title: "Mobile App Development Services", href: "/services/mobile-app-development/" };
    case "web":
    case "web-dev":
      return { title: "Web Development Services", href: "/services/web-development/" };
    case "seo":
    case "geo":
    case "digital-growth":
    default:
      return { title: "Digital Growth & SEO Services", href: "/services/digital-marketing/" };
  }
}

export function getLiveProjects(): Project[] {
  return portfolioProjects;
}

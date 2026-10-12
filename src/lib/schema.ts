import { siteConfig } from "@/config/site";
import { navigationServiceGroups } from "@/config/service-groups";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQSchemaItem {
  question: string;
  answer: string;
}

export interface BuildGraphOptions {
  pageUrl: string;
  pageTitle: string;
  pageDescription: string;
  pageType?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  dateModified?: string;
  breadcrumbs?: BreadcrumbItem[];
  service?: {
    name: string;
    serviceType?: string;
    description: string;
    url?: string;
  };
  faqs?: FAQSchemaItem[];
  blogPost?: {
    headline: string;
    datePublished: string;
    dateModified: string;
    image?: string;
    authorName?: string;
    description: string;
    category?: string;
  };
  itemList?: {
    name: string;
    items: { name: string; url: string; description?: string }[];
  };
}

/**
 * Builds a single, unified, valid Schema.org @graph.
 * Adheres to:
 * - Stable @ids across all pages (#organization, #localbusiness, #website)
 * - Single verified LocalBusiness (Rishikesh HQ)
 * - Remote worldwide areaServed
 * - Zero unverified ratings, reviews, awards, or unconfirmed opening hours
 * - Verified profile URLs only in sameAs (omits key if empty)
 */
export function buildLinkedSchemaGraph(options: BuildGraphOptions) {
  const baseUrl = siteConfig.url;
  const canonicalPageUrl = options.pageUrl.endsWith("/") ? options.pageUrl : `${options.pageUrl}/`;

  // 1. Social URLs filter (omit key if no verified profiles)
  const socialUrls = Object.values(siteConfig.social) as string[];
  const verifiedSameAs = socialUrls.filter(
    (url): url is string => typeof url === "string" && url.trim().length > 0
  );

  // 2. Organization Entity
  const organizationNode: Record<string, unknown> = {
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "Devbhoomi Infotech",
    url: `${baseUrl}/`,
    logo: `${baseUrl}/logo/DBI-official-logo-devbhoomi-infotech-white.png`,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    knowsAbout: [
      "AI automation",
      "AI chatbots",
      "Custom software development",
      "Mobile app development",
      "Web development",
      "SEO",
      "Generative engine optimization",
    ],
  };
  if (verifiedSameAs.length > 0) {
    organizationNode.sameAs = verifiedSameAs;
  }

  // 3. ProfessionalService / LocalBusiness Entity (Rishikesh HQ)
  const localBusinessNode: Record<string, unknown> = {
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${baseUrl}/#localbusiness`,
    parentOrganization: {
      "@id": `${baseUrl}/#organization`,
    },
    name: "Devbhoomi Infotech",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: "Rishikesh",
      addressRegion: "Uttarakhand",
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.0869,
      longitude: 78.2676,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "AdministrativeArea",
        name: "Worldwide (remote delivery)",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: navigationServiceGroups.map((group) => ({
        "@type": "Service",
        name: group.name,
        description: group.summary,
        url: `${baseUrl}${group.primaryHref}`,
        provider: {
          "@id": `${baseUrl}/#organization`,
        },
      })),
    },
  };
  if (verifiedSameAs.length > 0) {
    localBusinessNode.sameAs = verifiedSameAs;
  }

  // 4. WebSite Entity
  const websiteNode = {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: `${baseUrl}/`,
    name: "Devbhoomi Infotech",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: "en",
  };

  const graph: Record<string, unknown>[] = [organizationNode, localBusinessNode, websiteNode];

  // 5. BreadcrumbList Node
  if (options.breadcrumbs && options.breadcrumbs.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${canonicalPageUrl}#breadcrumb`,
      itemListElement: options.breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url.startsWith("http") ? item.url : `${baseUrl}${item.url}`,
      })),
    });
  }

  // 6. WebPage Node
  const pageType = options.pageType || "WebPage";
  const webPageNode: Record<string, unknown> = {
    "@type": pageType,
    "@id": `${canonicalPageUrl}#webpage`,
    url: canonicalPageUrl,
    name: options.pageTitle,
    description: options.pageDescription,
    isPartOf: {
      "@id": `${baseUrl}/#website`,
    },
    about: options.service
      ? { "@id": `${canonicalPageUrl}#service` }
      : { "@id": `${baseUrl}/#organization` },
    inLanguage: "en",
  };
  if (options.breadcrumbs && options.breadcrumbs.length > 0) {
    webPageNode.breadcrumb = {
      "@id": `${canonicalPageUrl}#breadcrumb`,
    };
  }
  if (options.dateModified) {
    webPageNode.dateModified = options.dateModified;
  }
  graph.push(webPageNode);

  // 7. Service Node
  if (options.service) {
    graph.push({
      "@type": "Service",
      "@id": `${canonicalPageUrl}#service`,
      name: options.service.name,
      serviceType: options.service.serviceType || options.service.name,
      description: options.service.description,
      provider: {
        "@id": `${baseUrl}/#organization`,
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "AdministrativeArea",
          name: "Worldwide (remote delivery)",
        },
      ],
      url: canonicalPageUrl,
    });
  }

  // 8. FAQPage Node (only if faqs are present and visible on page)
  if (options.faqs && options.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${canonicalPageUrl}#faq`,
      mainEntity: options.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  // 9. BlogPosting Node
  if (options.blogPost) {
    const post = options.blogPost;
    graph.push({
      "@type": "BlogPosting",
      "@id": `${canonicalPageUrl}#article`,
      headline: post.headline,
      description: post.description,
      datePublished: post.datePublished,
      dateModified: post.dateModified || post.datePublished,
      mainEntityOfPage: canonicalPageUrl,
      author: {
        "@id": `${baseUrl}/#organization`,
      },
      publisher: {
        "@id": `${baseUrl}/#organization`,
      },
      image: post.image ? (post.image.startsWith("http") ? post.image : `${baseUrl}${post.image}`) : undefined,
      about: post.category || "Technology",
    });
  }

  // 10. ItemList Node (for hubs)
  if (options.itemList) {
    graph.push({
      "@type": "ItemList",
      "@id": `${canonicalPageUrl}#itemlist`,
      name: options.itemList.name,
      itemListElement: options.itemList.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: item.url.startsWith("http") ? item.url : `${baseUrl}${item.url}`,
        description: item.description,
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

// Legacy helper wrappers for backward compatibility
export function generateLocalBusinessSchema() {
  return buildLinkedSchemaGraph({
    pageUrl: `${siteConfig.url}/`,
    pageTitle: "Devbhoomi Infotech",
    pageDescription: siteConfig.description,
  });
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string; pending?: boolean }[]) {
  const live = faqs.filter((f) => !f.pending);
  if (live.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: live.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceSchema(service: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    url: `${siteConfig.url}/services/${service.slug}/`,
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "AdministrativeArea",
        name: "Worldwide (remote delivery)",
      },
    ],
  };
}

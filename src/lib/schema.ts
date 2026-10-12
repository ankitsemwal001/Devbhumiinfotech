import { siteConfig } from "@/config/site";
import { FAQItem } from "@/content/faqs";

/**
 * Generates verified JSON-LD for Organization and ProfessionalService/LocalBusiness.
 * Strictly adheres to verified data:
 * - NO fake AggregateRating
 * - NO fabricated reviews or recognitions
 * - sameAs contains only verified profile URLs (filters out empty strings)
 */
export function generateLocalBusinessSchema() {
  const socialUrls = Object.values(siteConfig.social) as readonly string[];
  const verifiedSameAs = socialUrls.filter(
    (url): url is string => typeof url === "string" && url.trim().length > 0
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo/DBI-official-logo-devbhoomi-infotech-white.png`,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.contact.phone,
          contactType: "customer service",
          areaServed: ["IN"],
          availableLanguage: ["English", "Hindi"],
        },
        sameAs: verifiedSameAs,
      },
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": `${siteConfig.url}/#localbusiness`,
        name: siteConfig.name,
        image: `${siteConfig.url}/logo/DBI-official-logo-devbhoomi-infotech-white.png`,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        url: siteConfig.url,
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.address.street,
          addressLocality: siteConfig.contact.address.city,
          addressRegion: siteConfig.contact.address.state,
          postalCode: siteConfig.contact.address.postalCode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.contact.geo.latitude,
          longitude: siteConfig.contact.geo.longitude,
        },
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "Uttarakhand",
          },
          {
            "@type": "Country",
            name: "India",
          },
        ],
        sameAs: verifiedSameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    ],
  };
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

export function generateFAQSchema(faqs: FAQItem[]) {
  const liveFaqs = faqs.filter((faq) => !faq.pending);
  if (liveFaqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: liveFaqs.map((faq) => ({
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
    url: `${siteConfig.url}/${service.slug}/`,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Uttarakhand",
    },
  };
}

export interface IndustryItem {
  slug: string;
  title: string;
  summary: string;
  status: "live" | "planned";
}

export const allIndustries: IndustryItem[] = [
  {
    slug: "travel-hospitality",
    title: "Travel & Hospitality",
    summary: "Hotel booking platforms, tour operator portals, and local attraction websites.",
    status: "planned",
  },
  {
    slug: "yoga-wellness",
    title: "Yoga & Wellness Retreats",
    summary: "Calm, conversion-focused websites and booking systems for yoga schools and ashrams.",
    status: "planned",
  },
  {
    slug: "education",
    title: "Education & Institutions",
    summary: "Admission portals, student management systems, and school websites.",
    status: "planned",
  },
  {
    slug: "healthcare",
    title: "Healthcare & Clinics",
    summary: "Doctor appointment systems, clinic websites, and patient inquiry workflows.",
    status: "planned",
  },
  {
    slug: "ecommerce-retail",
    title: "E-Commerce & Retail",
    summary: "Direct-to-consumer online stores, product catalogs, and payment gateways.",
    status: "planned",
  },
  {
    slug: "real-estate",
    title: "Real Estate & Property",
    summary: "Property listings, lead generation funnels, and virtual walkthrough platforms.",
    status: "planned",
  },
  {
    slug: "startups-smes",
    title: "Startups & Growing Businesses",
    summary: "MVP development, SaaS platforms, and automated operational pipelines.",
    status: "planned",
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    summary: "Corporate sites for consultants, accountants, and legal advisors.",
    status: "planned",
  },
];

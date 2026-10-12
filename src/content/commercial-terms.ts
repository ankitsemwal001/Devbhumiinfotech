export interface CommercialTerm {
  key: string;
  value: string | string[];
  confirmed: boolean;
  source: "owner" | "agent-draft";
  description: string;
}

export const commercialTerms: Record<string, CommercialTerm> = {
  turnaroundTimes: {
    key: "turnaroundTimes",
    value: "7–14, 10–21, 15, 30–60 business days",
    confirmed: false,
    source: "agent-draft",
    description: "Estimated delivery timelines for website and software projects",
  },
  postLaunchSupport: {
    key: "postLaunchSupport",
    value: "1-year basic support / 30 to 90 days bug fixing",
    confirmed: false,
    source: "agent-draft",
    description: "Post-deployment warranty and maintenance window",
  },
  businessHours: {
    key: "businessHours",
    value: "Mon–Sat 09:30–18:30 IST",
    confirmed: false,
    source: "agent-draft",
    description: "Official operating office hours",
  },
  priceExclusions: {
    key: "priceExclusions",
    value: [
      "Domain registration fee",
      "Cloud hosting server fee",
      "GST / statutory taxes",
      "Third-party API and SMS/WhatsApp token fees",
    ],
    confirmed: false,
    source: "agent-draft",
    description: "Standard commercial exclusions not bundled in base quotes",
  },
  ipSourceCodeOwnership: {
    key: "ipSourceCodeOwnership",
    value: "Clients retain 100% ownership of source code and intellectual property upon full payment",
    confirmed: false,
    source: "agent-draft",
    description: "Contractual IP transfer and repository handover commitment",
  },
  techStacksUnverified: {
    key: "techStacksUnverified",
    value: [
      "OpenAI API",
      "PostgreSQL / MongoDB",
      "Headless CMS",
      "Figma",
    ],
    confirmed: false,
    source: "agent-draft",
    description: "Technology stack lists not yet verified in delivered live client systems",
  },
  // --- Confirmed Owner Data ---
  hqLocation: {
    key: "hqLocation",
    value: "Near Dhalwala, Rishikesh, Uttarakhand (PIN: 249201)",
    confirmed: true,
    source: "owner",
    description: "Verified headquarters physical location",
  },
  contactPhone: {
    key: "contactPhone",
    value: "+91 81260 06791",
    confirmed: true,
    source: "owner",
    description: "Verified primary phone number",
  },
  contactEmail: {
    key: "contactEmail",
    value: "infotechdevbhoomi@gmail.com",
    confirmed: true,
    source: "owner",
    description: "Verified official email address",
  },
  starterPackagePrice: {
    key: "starterPackagePrice",
    value: "₹15,000",
    confirmed: true,
    source: "owner",
    description: "Starter Website starting price as published on live site",
  },
  standardPackagePrice: {
    key: "standardPackagePrice",
    value: "₹25,000",
    confirmed: true,
    source: "owner",
    description: "Standard Website starting price as published on live site",
  },
  premiumPackagePrice: {
    key: "premiumPackagePrice",
    value: "₹40,000",
    confirmed: true,
    source: "owner",
    description: "Premium Website starting price as published on live site",
  },
};

export function getConfirmedTerm<T = string | string[]>(key: string): T | null {
  const term = commercialTerms[key];
  if (term && term.confirmed) {
    return term.value as T;
  }
  return null;
}

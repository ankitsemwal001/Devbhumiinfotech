import { serviceGroups } from "@/content/services";

export interface SubMenuItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavItem {
  label: string;
  href: string;
  submenu?: SubMenuItem[];
  isMegaMenu?: boolean;
}

export interface FooterLinkSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

/**
 * Header navigation configuration (Phase 1)
 * Rules:
 * - Desktop: Home | About Us ▾ | Projects | Services ▾ (mega-menu) | Pricing | [Industries hidden] | CTA "Discuss Your Project"
 * - About Us ▾ dropdown: Company Overview (/about), Our Approach (/about#approach), Why Choose Us (/about#why-choose-us)
 * - Services mega-menu: 5 groups (AI & Automation, Software Development, Mobile Apps, Web Development, Digital Growth)
 * - Pricing: /#packages
 * - Industries: Hidden in Phase 1 (registry status: planned)
 */
export const headerNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about/",
    submenu: [
      {
        label: "Company Overview",
        href: "/about/company-overview/",
        description: "Our mission, local roots in Uttarakhand, and engineering philosophy.",
      },
      {
        label: "Our Approach",
        href: "/about/our-approach/",
        description: "Data-driven, business-first technology solutions tailored to your workflow.",
      },
      {
        label: "Why Choose Us",
        href: "/about/why-choose-us/",
        description: "Specialist teams, transparent communication, and verified delivery.",
      },
    ],
  },
  { label: "Projects", href: "/projects/" },
  {
    label: "Services",
    href: "/services/",
    isMegaMenu: true,
  },
  { label: "Pricing", href: "/pricing/" },
  { label: "Insights", href: "/blogs/" },
];

export const footerNavSections: FooterLinkSection[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about/" },
      { label: "Company Overview", href: "/about/company-overview/" },
      { label: "Our Approach", href: "/about/our-approach/" },
      { label: "Why Choose Us", href: "/about/why-choose-us/" },
      { label: "Featured Projects", href: "/projects/" },
      { label: "Pricing Packages", href: "/pricing/" },
      { label: "Insights & Articles", href: "/blogs/" },
      { label: "Contact Us", href: "/contact/" },
    ],
  },
  {
    title: "Services",
    links: serviceGroups.map((group) => ({
      label: group.title,
      href: group.liveHref || `/services/${group.id}/`,
    })),
  },
];

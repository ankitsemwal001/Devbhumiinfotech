import { NavItem, FooterNavSection } from "@/types/navigation";

export const headerNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      {
        label: "Website Design",
        href: "/website-design-services-in-rishikesh-uttarakhand",
        description: "Modern, responsive UI/UX designs tailored for high conversions",
      },
      {
        label: "Website Development",
        href: "/web-development-services-in-rishikesh-uttarakhand",
        description: "Full-stack Next.js, React, and custom web applications",
      },
      {
        label: "Digital Marketing & SEO",
        href: "/digital-marketing",
        description: "Data-driven SEO, Google Ads, and brand growth strategies",
      },
      {
        label: "AI & Business Automation",
        href: "/ai-automation",
        description: "Custom AI workflows, chatbots, and operational automation",
      },
    ],
  },
  { label: "Packages", href: "/#packages" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

export const footerNavSections: FooterNavSection[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Our Services", href: "/services" },
      { label: "Pricing Packages", href: "/#packages" },
      { label: "Featured Projects", href: "/#projects" },
      { label: "Latest Blogs", href: "/blogs" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Our Services",
    links: [
      {
        label: "Website Development in Rishikesh",
        href: "/web-development-services-in-rishikesh-uttarakhand",
      },
      {
        label: "Website Design in Rishikesh",
        href: "/website-design-services-in-rishikesh-uttarakhand",
      },
      {
        label: "Digital Marketing & SEO",
        href: "/digital-marketing",
      },
      {
        label: "AI Automation Solutions",
        href: "/ai-automation",
      },
    ],
  },
];

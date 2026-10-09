export const siteConfig = {
  name: "Devbhoomi Infotech Solutions",
  shortName: "Devbhoomi Infotech",
  description:
    "Devbhoomi Infotech is the premier AI, automation, web and software development company in Rishikesh, Uttarakhand. We build SEO-optimized websites, AI automation systems, and scalable digital solutions.",
  url: "https://www.devbhoomiinfotech.com",
  ogImage: "https://www.devbhoomiinfotech.com/og/og-image.jpg",
  contact: {
    phone: "+91 81260 06791",
    phoneRaw: "+918126006791",
    whatsappRaw: "918126006791",
    email: "infotechdevbhoomi@gmail.com",
    address: {
      street: "Near AIIMS Road",
      city: "Rishikesh",
      state: "Uttarakhand",
      postalCode: "249201",
      country: "India",
      display: "Rishikesh, Uttarakhand, India (249201)",
    },
  },
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
    youtube: "https://youtube.com/",
    twitter: "https://twitter.com/",
  },
  links: {
    whatsapp:
      "https://wa.me/918126006791?text=Hello%20Devbhoomi%20Infotech%20Team,%0A%0AI%20am%20interested%20in%20your%20IT%20services%20(Web%20Development,%20SEO,%20AI%20Automation).%20Please%20connect%20with%20me.%0A%0AThank%20you.",
  },
} as const;

export type SiteConfig = typeof siteConfig;

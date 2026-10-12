import { siteConfig } from "./site";

export const defaultSEO = {
  siteName: siteConfig.name,
  shortName: siteConfig.shortName,
  baseUrl: siteConfig.url,
  defaultTitle: "Devbhoomi Infotech — Web, Software & AI Automation in Rishikesh, Uttarakhand",
  titleTemplate: "%s | Devbhoomi Infotech",
  defaultDescription:
    "Technology & digital growth partner based in Rishikesh, Uttarakhand. Custom website development, business software, AI automation, and search visibility.",
  defaultOgImage: `${siteConfig.url}/logo/DBI-official-logo-devbhoomi-infotech-white.png`,
  locale: "en_IN",
  twitterHandle: "@devbhoomiinfo",
};

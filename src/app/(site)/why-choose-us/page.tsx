import type { Metadata } from "next";
import WhyChooseUsPage from "@/app/(site)/about/why-choose-us/page";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Engineering Advantages & Standards | Devbhoomi Infotech",
  description:
    "Explore our engineering standards, transparent communication, and verified milestone delivery model from Rishikesh, Uttarakhand.",
  alternates: {
    canonical: `${siteConfig.url}/about/why-choose-us/`,
  },
};

export default WhyChooseUsPage;

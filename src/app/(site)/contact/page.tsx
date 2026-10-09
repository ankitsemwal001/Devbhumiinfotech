import type { Metadata } from "next";
import { ContactInfo } from "@/modules/contact/contact-info";
import { ContactForm } from "@/modules/contact/contact-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us | Devbhoomi Infotech Rishikesh",
  description:
    "Get in touch with Devbhoomi Infotech in Rishikesh, Uttarakhand for web development, SEO, and AI automation inquiries.",
  alternates: {
    canonical: `${siteConfig.url}/contact/`,
  },
};

export default function ContactPage() {
  return (
    <div className="w-full">
      <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-400/20">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Let’s Discuss Your Next <span className="text-emerald-400">Project</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Ready to upgrade your website or automate your workflows? Our team in Rishikesh is ready to assist.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

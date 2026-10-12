import type { Metadata } from "next";
import { ContactInfo } from "@/modules/contact/contact-info";
import { ContactForm } from "@/modules/contact/contact-form";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { Clock, ShieldCheck, FileCode, CheckCircle2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Devbhoomi Infotech Solutions",
  description:
    "Get in touch with Devbhoomi Infotech in Rishikesh, Uttarakhand for web development, software architecture, SEO, and AI automation inquiries.",
  alternates: {
    canonical: `${siteConfig.url}/contact/`,
  },
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", url: `${siteConfig.url}/` },
    { name: "Contact", url: `${siteConfig.url}/contact/` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  const nextSteps = [
    {
      num: "01",
      icon: Clock,
      title: "Prompt Technical Review",
      description:
        "Your project inquiry is reviewed directly by our engineering leads within 4 business hours to evaluate technical feasibility.",
    },
    {
      num: "02",
      icon: FileCode,
      title: "Discovery & Scope Discussion",
      description:
        "We schedule a focused 25-minute call or WhatsApp consultation to clarify specific deliverables, target users, and timelines.",
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: "Itemized Milestone Proposal",
      description:
        "You receive a transparent, fixed-investment proposal with crystal-clear milestone checkpoints and 100% code ownership guaranteed.",
    },
  ];

  return (
    <div className="w-full">
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Banner */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-400/20">
            Let’s Connect
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            Discuss Your Next{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Technology Project
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Ready to upgrade your web architecture, rank in search, or automate operations? Our engineering team in Rishikesh is ready to assist.
          </p>
        </div>
      </section>

      {/* Main Contact Form & Info Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Send Project Brief
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-8">
              Fill out the form below and we will get back to you with initial architectural insights.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Section 2: What Happens Next Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-900">
              Transparent Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              What Happens After You Inquire?
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              No endless sales funnels or spam. Here is our direct engineering intake workflow:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nextSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 dark:text-slate-700 font-mono">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                NDA (Non-Disclosure Agreement) signed prior to discovery discussions upon request.
              </span>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 shrink-0">
              Confidentiality Assured
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

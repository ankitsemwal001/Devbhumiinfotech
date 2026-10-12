import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaBannerSection } from "@/modules/home/cta-banner";
import {
  CheckCircle2,
  ShieldCheck,
  Clock,
  Code2,
  Users,
  Gauge,
  Sparkles,
  ArrowRight,
  HelpCircle,
  FileCheck,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Why Choose Us | Devbhoomi Infotech Solutions",
  description:
    "Discover why businesses across Uttarakhand and India trust Devbhoomi Infotech: direct engineer access, 100% IP ownership, and verified milestone delivery.",
  alternates: {
    canonical: `${siteConfig.url}/about/why-choose-us/`,
  },
};

export default function WhyChooseUsPage() {
  const breadcrumbs = [
    { name: "Home", url: `${siteConfig.url}/` },
    { name: "About Us", url: `${siteConfig.url}/about/` },
    { name: "Why Choose Us", url: `${siteConfig.url}/about/why-choose-us/` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  const keyDifferentiators = [
    {
      icon: Users,
      title: "Direct Access to Engineers, Not Sales Middlemen",
      description:
        "You collaborate directly with senior full-stack developers and technical architects in Rishikesh. No frustrating telephone game through account managers.",
      benefit: "Saves hours of miscommunication and ensures requirements are implemented with technical precision.",
    },
    {
      icon: ShieldCheck,
      title: "100% Source Code & Intellectual Property Ownership",
      description:
        "Every line of TypeScript, UI component, and configuration file belongs entirely to your business upon milestone sign-off. Zero proprietary lock-in.",
      benefit: "Complete freedom to host anywhere, modify anytime, or expand with your internal engineering team.",
    },
    {
      icon: Clock,
      title: "Disciplined 3-Stage Milestone Payment Protection",
      description:
        "We follow an equitable payment structure: 50% Kickoff & Blueprint, 30% Staging Demonstration, and 20% on final production deployment.",
      benefit: "Financial safety with guaranteed verification checkpoints before releasing major funds.",
    },
    {
      icon: Gauge,
      title: "Sub-Second Core Web Vitals & Speed Guarantees",
      description:
        "We build exclusively with Next.js App Router, modern CSS, and edge caching rather than heavy page builders and bloated WordPress templates.",
      benefit: "Sub-second load times that reduce bounce rates, boost mobile user retention, and rank higher on Google.",
    },
    {
      icon: Code2,
      title: "Continuous Staging Previews & Transparent Progress",
      description:
        "You receive private, live staging links updated throughout development. Test features, provide real-time feedback, and watch your platform evolve.",
      benefit: "Zero surprises at delivery; what you approve on staging is exactly what deploys to production.",
    },
    {
      icon: Sparkles,
      title: "Local Roots with Nationwide Enterprise Experience",
      description:
        "Headquartered near Dhalwala in Rishikesh, Uttarakhand, we bring tier-1 engineering standards to businesses across Dehradun, Delhi NCR, and nationwide.",
      benefit: "Personalized attention and lower operational costs with big-city engineering capability.",
    },
  ];

  const workingFaqs = [
    {
      q: "What if our project scope requires changes during development?",
      a: "Our milestone reviews allow agility. Minor refinements are absorbed into active sprints. If major scope additions arise, we provide an itemized change request with transparent time estimates before proceeding.",
    },
    {
      q: "Do you provide post-launch warranty and technical support?",
      a: "Yes. All our turnkey website and software projects come with post-deployment warranty support to address any bugs, optimize server cache, and ensure smooth operational handover.",
    },
    {
      q: "Can we sign a Non-Disclosure Agreement (NDA) before sharing details?",
      a: "Absolutely. We routinely sign bilateral NDAs with our clients before initial technical scoping calls to protect your proprietary business concepts and data.",
    },
    {
      q: "Who handles server hosting and domain registration?",
      a: "You retain direct ownership of your hosting accounts (Vercel, Hostinger, AWS, or Cloudflare) and domain names. We configure the entire infrastructure for you with zero markup fees.",
    },
  ];

  return (
    <div className="w-full">
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Banner */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-400/20">
            Client Standards & Guarantees
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            Why Modern Businesses Partner with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Devbhoomi Infotech
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Honest technology execution without hidden costs, junior handoffs, or technical debt. Engineered for long-term reliability and measurable growth.
          </p>
        </div>
      </section>

      {/* Section 1: 6 Core Differentiators */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              The Devbhoomi Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Six Commitments That Set Us Apart
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              We operate on principles designed to eliminate the risks, delays, and poor communication typical in conventional IT agency engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyDifferentiators.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-lg transition-all group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                      {diff.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900 dark:text-white">Impact: </strong>
                      {diff.benefit}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Peace of Mind Standards Ribbon */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">Mutual NDA Protection</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Your proprietary concept, business data, and customer insights remain strictly protected under formal confidentiality.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">Itemized Milestone Scope</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Every requirement is documented in writing with verified deliverables, test criteria, and exact delivery dates.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">Post-Launch Warranty</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Dedicated handover period where our engineers resolve any technical adjustments and walk you through system operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Frequently Asked Working Questions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Common Questions
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Working With Devbhoomi Infotech: FAQs
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Everything you need to know about our engagement terms, communication style, and delivery policies.
            </p>
          </div>

          <div className="space-y-4">
            {workingFaqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2"
              >
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base">
                  <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{faq.q}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 text-center">
            <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8">
              <Link href="/contact/">Discuss Your Project With Our Engineers</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBannerSection />
    </div>
  );
}

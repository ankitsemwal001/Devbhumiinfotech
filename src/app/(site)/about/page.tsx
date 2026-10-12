import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { verifiedStats } from "@/content/stats";
import { CtaBannerSection } from "@/modules/home/cta-banner";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { ShieldCheck, Cpu, HeartHandshake, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us | Devbhoomi Infotech",
  description:
    "Headquartered in Rishikesh, Uttarakhand — serving clients worldwide, remotely. Learn about Devbhoomi Infotech, our technology focus, and engineering standards.",
  alternates: {
    canonical: `${siteConfig.url}/about/`,
  },
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", url: `${siteConfig.url}/` },
    { name: "About Us", url: `${siteConfig.url}/about/` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <div className="w-full">
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Banner */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-400/20">
            About Devbhoomi Infotech
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            Headquartered in Rishikesh,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Serving Clients Worldwide
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Headquartered in Rishikesh, Uttarakhand — serving clients worldwide, remotely. We build websites, custom software, mobile apps, automation, and search visibility designed around your business goals.
          </p>
        </div>
      </section>

      {/* Company Overview Section (id="overview" for navbar anchor) */}
      <section
        id="overview"
        className="scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Our Journey & Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white ">
              Engineering Practical Digital Solutions
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Devbhoomi Infotech Solutions was established with a clear goal: to provide high-standard web engineering, software architecture, and search visibility to businesses in Uttarakhand and across the nation.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              We focus on solving tangible operational bottlenecks rather than selling off-the-shelf templates. From responsive business platforms to automated lead pipelines, our solutions are engineered to produce dependable results.
            </p>

            {/* Verified Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {verifiedStats.slice(0, 3).map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center"
                >
                  <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 h-80 sm:h-[420px]">
            <Image
              src="/images/about/dbi-it-solution-about-us.webp"
              alt="Devbhoomi Infotech Digital Solutions"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Approach Section (id="approach" for navbar anchor) */}
      <section
        id="approach"
        className="scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-900">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Our Engineering & Growth Approach
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              How we approach technology projects to guarantee clean architecture and clear business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                1. Architectural Rigor
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We build with Next.js, React, TypeScript, and clean CSS rather than heavy monolithic page builders. This ensures fast Core Web Vitals and zero vendor lock-in.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                2. Practical Automation
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We automate manual business overhead using n8n, WhatsApp Cloud API, and AI triage so you never miss an inquiry or follow-up opportunity.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                3. Search & Conversion Focus
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Traffic without inquiries does not build a business. We combine traditional Local SEO with Generative Engine Optimisation (GEO) and high-converting UX.
              </p>
            </div>
          </div>

          <div className="pt-4 text-center">
            <Button asChild variant="outline" className="rounded-full px-7">
              <Link href="/about/our-approach/">
                <span>Explore Our Detailed Engineering Methodology & Comparison →</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (id="why-choose-us" for navbar anchor) */}
      <section
        id="why-choose-us"
        className="scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800"
      >
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Clear Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Why Businesses Choose Devbhoomi Infotech
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Direct communication with technical engineers, not middlemen",
              "Tailored full-stack solutions with no hidden recurring dependencies",
              "Verified delivery of 20+ web, software, and automation projects",
              "Clear milestone timelines with regular staging previews",
              "Transparent pricing with clear scope definitions",
              "Rooted in Rishikesh with nationwide collaboration experience",
            ].map((point, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-4">
            <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8">
              <Link href="/contact/">Discuss Your Project With Us</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8">
              <Link href="/about/why-choose-us/">Read All Guarantees & FAQs →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Engineering Principles & Regional Roots */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Core Engineering Values That Guide Us
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              The foundational standards that define our work and long-term client partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Performance Over Bloat
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                We avoid heavy page builders and unoptimized plugins. Every component is engineered for fast load times and strong Core Web Vitals performance.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                100% Client Ownership
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Zero proprietary lock-in. You own your code repository, domain DNS, and server keys with complete administrative freedom.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Direct Technical Dialogue
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                You communicate directly with the developers working on your code. No commission-driven account managers or lost requirements.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Rooted in Rishikesh
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Headquartered along Dhalwala in Rishikesh, Uttarakhand, bringing top-tier software craftsmanship to regional and nationwide clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Entity Quick Facts Block (matches schema & llms.txt) */}
      <section
        id="quick-facts"
        className="scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800"
      >
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-900">
              Verified Entity Overview
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Quick Facts: Devbhoomi Infotech
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Core facts about our organisation, geographic base, and remote service model.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50/50 dark:bg-slate-900/60 shadow-sm">
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Legal Entity / Brand
                </div>
                <div className="md:col-span-2 text-sm text-slate-900 dark:text-slate-200 font-semibold">
                  Devbhoomi Infotech (Rishikesh, Uttarakhand)
                </div>
              </div>

              <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Headquarters & Base
                </div>
                <div className="md:col-span-2 text-sm text-slate-900 dark:text-slate-200">
                  Rishikesh, Uttarakhand, India — Postal Code: 249137.
                </div>
              </div>

              <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Geographic Reach
                </div>
                <div className="md:col-span-2 text-sm text-slate-900 dark:text-slate-200">
                  Headquartered in Rishikesh, Uttarakhand — serving regional clients in person and international clients worldwide via disciplined remote delivery.
                </div>
              </div>

              <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Core Practice Areas
                </div>
                <div className="md:col-span-2 text-sm text-slate-900 dark:text-slate-200 space-y-1">
                  <div>1. AI & Automation (Chatbots, Workflow Automation, Data Processing)</div>
                  <div>2. Custom Software Development (SaaS, Web Apps, Business Management, APIs)</div>
                  <div>3. Mobile Apps (Native & Cross-Platform iOS & Android Development)</div>
                  <div>4. Web Development (Corporate Portals, High-Performance Websites, UI/UX Design)</div>
                  <div>5. Digital Growth (Search Engine Optimization, GEO, Local SEO)</div>
                </div>
              </div>

              <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Delivery Standards
                </div>
                <div className="md:col-span-2 text-sm text-slate-900 dark:text-slate-200">
                  Structured milestone sprints, private staging demos, direct engineer communication, and 100% intellectual property & source code transfer upon completion.
                </div>
              </div>

              <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Verified Track Record
                </div>
                <div className="md:col-span-2 text-sm text-slate-900 dark:text-slate-200">
                  20+ completed digital projects · 50+ business clients served · Separate teams organized by specialty.
                </div>
              </div>

              <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-start">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Direct Contact
                </div>
                <div className="md:col-span-2 text-sm text-slate-900 dark:text-slate-200 space-y-1">
                  <div>Phone / WhatsApp: <a href="tel:+918126006791" className="text-blue-600 dark:text-blue-400 hover:underline">+91 81260 06791</a></div>
                  <div>Email: <a href="mailto:infotechdevbhoomi@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">infotechdevbhoomi@gmail.com</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBannerSection />
    </div>
  );
}

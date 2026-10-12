import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { verifiedStats } from "@/content/stats";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaBannerSection } from "@/modules/home/cta-banner";
import {
  ShieldCheck,
  Cpu,
  HeartHandshake,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Sparkles,
  Layers,
  Users,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Company Overview | Devbhoomi Infotech Solutions",
  description:
    "Discover Devbhoomi Infotech Solutions: our journey, core mission in Rishikesh, engineering philosophy, and high-performance digital services for Indian businesses.",
  alternates: {
    canonical: `${siteConfig.url}/about/company-overview/`,
  },
};

export default function CompanyOverviewPage() {
  const breadcrumbs = [
    { name: "Home", url: `${siteConfig.url}/` },
    { name: "About Us", url: `${siteConfig.url}/about/` },
    { name: "Company Overview", url: `${siteConfig.url}/about/company-overview/` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  const coreValues = [
    {
      icon: Cpu,
      title: "Clean Software Craftsmanship",
      description:
        "We build with modern frameworks like Next.js, React, and TypeScript. No heavy monolithic page builders or brittle plugins.",
    },
    {
      icon: ShieldCheck,
      title: "100% Client Ownership",
      description:
        "Every line of source code, design asset, and cloud configuration is transferred to your full legal ownership upon milestone sign-off.",
    },
    {
      icon: Users,
      title: "Direct Technical Dialogue",
      description:
        "You collaborate directly with senior engineers and tech leads in Rishikesh, eliminating layers of non-technical sales middlemen.",
    },
    {
      icon: Compass,
      title: "Measurable Business Outcomes",
      description:
        "We evaluate our deliverables by real performance metrics: sub-second load times, organic search impressions, and qualified lead conversion.",
    },
  ];

  return (
    <div className="w-full">
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Banner */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white text-center px-4">
        <div className="space-y-6">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-400/20">
            Company Overview
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            Engineering Practical Digital Systems from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Rishikesh
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We are a technology engineering and digital growth partner headquartered in Uttarakhand, designing fast websites, custom software, and intelligent AI automations for businesses across India.
          </p>
        </div>
      </section>

      {/* Mission & Founding Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Our Journey & Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white ">
              Bridging Modern Engineering and Regional Enterprise
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Devbhoomi Infotech Solutions was founded with a straightforward mandate: to bring world-class modern software engineering, responsive web platforms, and data-driven search visibility to enterprises in Uttarakhand and across India.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Too many business owners are trapped between overpriced metropolitan agencies that pass work to junior freelancers and low-cost template shops that deliver bloated, slow-loading websites. We operate differently: disciplined milestone delivery, direct engineer access, and clean code that performs.
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

          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 h-80 sm:h-[440px]">
            <Image
              src="/images/about/dbi-it-solution-about-us.webp"
              alt="Devbhoomi Infotech Team and Operations"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Engineering Values Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-900">
              What Defines Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              The Principles Behind Every Solution
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Our engineering culture is built around practical problem-solving, clean architecture, and total transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-blue-500/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regional Roots & National Reach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Local Commitment · Nationwide Reach
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white ">
              Headquartered in Dhalwala, Rishikesh · Serving Across India
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Operating near Dhalwala in Rishikesh allows us to maintain a low operational overhead, enabling us to pass significant value directly to our clients without compromising on senior engineering caliber.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              We actively serve businesses across Uttarakhand (Dehradun, Haridwar, Roorkee, Haldwani) as well as enterprises in Delhi NCR, Mumbai, Bangalore, and international clients seeking reliable engineering partners.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-7">
                <Link href="/about/our-approach/">
                  <span>Discover Our Engineering Approach</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-7">
                <Link href="/about/why-choose-us/">
                  <span>Why Choose Devbhoomi Infotech</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  Rishikesh Headquarters
                </h3>
                <span className="text-xs text-slate-500">Uttarakhand, India (249201)</span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>On-site consultations available by prior appointment in Rishikesh</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Seamless remote collaboration via Slack, WhatsApp, and Google Meet</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Live staging previews updated continuously during active development</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <Link
                href="/contact/"
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>Schedule a conversation with our technical team →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBannerSection />
    </div>
  );
}

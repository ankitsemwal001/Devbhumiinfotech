import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaBannerSection } from "@/modules/home/cta-banner";
import {
  ShieldCheck,
  Cpu,
  HeartHandshake,
  CheckCircle2,
  XCircle,
  Zap,
  Layers,
  Search,
  Code2,
  Gauge,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Engineering Approach & Methodology | Devbhoomi Infotech Solutions",
  description:
    "Explore Devbhoomi Infotech's data-driven engineering methodology: Next.js architectural rigor, practical AI automation, and search-focused web systems.",
  alternates: {
    canonical: `${siteConfig.url}/about/our-approach/`,
  },
};

export default function OurApproachPage() {
  const breadcrumbs = [
    { name: "Home", url: `${siteConfig.url}/` },
    { name: "About Us", url: `${siteConfig.url}/about/` },
    { name: "Our Approach", url: `${siteConfig.url}/about/our-approach/` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  const pillars = [
    {
      icon: ShieldCheck,
      number: "01",
      title: "Architectural Rigor & Clean Code",
      summary:
        "We build websites and web applications using Next.js, React, TypeScript, and semantic CSS rather than fragile page builders.",
      points: [
        "Server Components for lightning-fast First Contentful Paint (<1.2s)",
        "Zero dependency on heavy, slow-loading third-party template plugins",
        "Type-safe TypeScript codebase ensuring long-term maintainability",
        "Mobile-first responsive architecture tested across real device viewports",
      ],
    },
    {
      icon: Cpu,
      number: "02",
      title: "Practical AI & Workflow Automation",
      summary:
        "Technology should eliminate tedious operational tasks rather than creating more manual work for your team.",
      points: [
        "Multi-step lead routing via n8n and webhook infrastructure",
        "WhatsApp Business Cloud API bots providing under-60-second response times",
        "Intelligent inquiry triage sorting prospect leads directly to your CRM",
        "Automated email notifications alerting stakeholders instantly",
      ],
    },
    {
      icon: Search,
      number: "03",
      title: "Search Visibility & Conversion Focus",
      summary:
        "High performance is meaningless if potential customers cannot find you or leave before making an inquiry.",
      points: [
        "Generative Engine Optimisation (GEO) for AI search engines like ChatGPT & Perplexity",
        "Local SEO structured for high ranking across Uttarakhand and regional hubs",
        "Schema.org JSON-LD implementation for rich snippets in Google SERPs",
        "Frictionless booking & contact forms designed for high visitor conversion",
      ],
    },
  ];

  const deliveryPhases = [
    {
      step: "Phase 01",
      title: "Technical Discovery & Blueprint",
      description:
        "We analyze user workflows, competitor positioning, and brand goals to establish concrete URL taxonomy, database architecture, and technology specs.",
    },
    {
      step: "Phase 02",
      title: "Tailored UI/UX & Interactive Prototypes",
      description:
        "Designing custom interfaces using your brand palette, responsive typography, and intuitive customer paths. No generic pre-bought templates.",
    },
    {
      step: "Phase 03",
      title: "Clean Next.js & API Engineering",
      description:
        "Writing modular, component-based code with server actions, database integrations, and automated lead handlers with continuous staging previews.",
    },
    {
      step: "Phase 04",
      title: "Performance Hardening & Deployment",
      description:
        "Auditing Core Web Vitals (90+ Lighthouse targets), verifying security headers, SSL setup, and seamless DNS cutover with 100% IP ownership transfer.",
    },
  ];

  const comparisonRows = [
    {
      metric: "Primary Tech Stack",
      devbhoomi: "Next.js, TypeScript & Clean CSS",
      traditional: "Heavy WordPress / Page Builders",
      builders: "Wix / Squarespace (Proprietary)",
    },
    {
      metric: "Page Speed & Vitals",
      devbhoomi: "Optimized Core Web Vitals, 90+ Lighthouse targets",
      traditional: "Often 4–8s load time with plugin bloat",
      builders: "Moderate, limited custom optimization",
    },
    {
      metric: "Code & Project Access",
      devbhoomi: "Direct repository handover, zero lock-in",
      traditional: "Varies; often agency dependent",
      builders: "0% Ownership (Rented platform)",
    },
    {
      metric: "Lead Automation",
      devbhoomi: "Custom WhatsApp & n8n APIs",
      traditional: "Basic email contact forms",
      builders: "Rigid built-in integrations",
    },
    {
      metric: "Direct Engineer Access",
      devbhoomi: "Direct contact with technical leads",
      traditional: "Account manager telephone game",
      builders: "Generic community support tickets",
    },
  ];

  return (
    <div className="w-full">
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Banner */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-400/20">
            Engineering Methodology
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            Data-Driven, Architecture-First{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Delivery Framework
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            How we approach technology projects to guarantee clean architecture, zero technical bloat, and measurable business outcomes for our partners.
          </p>
        </div>
      </section>

      {/* Section 1: The 3 Engineering Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Foundational Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              The Three Pillars of Our Development Philosophy
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Every system we engineer sits upon three non-negotiable principles designed to give your business an unfair digital advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-all"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-2xl font-black text-slate-300 dark:text-slate-700 font-mono">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pillar.summary}
                    </p>

                    <div className="space-y-2.5 pt-3 border-t border-slate-200/60 dark:border-slate-800">
                      {pillar.points.map((pt, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: 4-Stage Delivery Lifecycle */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-900">
              Execution Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Our 4-Stage Delivery Pipeline
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Clear, transparent milestones that ensure projects launch on schedule and with predictable quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryPhases.map((phase, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 relative group hover:border-blue-500/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {phase.step}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {phase.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Comparison Matrix */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Engineering Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Why Our Approach Delivers Superior Results
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              See how our engineering-first model compares to traditional digital agencies and no-code builders.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white">Standard</th>
                  <th className="p-4 sm:p-5 font-bold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30">
                    Devbhoomi Infotech Approach
                  </th>
                  <th className="p-4 sm:p-5 font-semibold text-slate-700 dark:text-slate-300">
                    Traditional Agency
                  </th>
                  <th className="p-4 sm:p-5 font-semibold text-slate-700 dark:text-slate-300">
                    SaaS Builders (Wix/Shopify)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                    <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white">
                      {row.metric}
                    </td>
                    <td className="p-4 sm:p-5 font-medium text-blue-700 dark:text-blue-300 bg-blue-50/30 dark:bg-blue-950/20">
                      {row.devbhoomi}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-400">
                      {row.traditional}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-400">
                      {row.builders}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8">
              <Link href="/about/why-choose-us/">
                <span>Explore Why Clients Choose Us</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8">
              <Link href="/pricing/">
                <span>View Turnkey Packages</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBannerSection />
    </div>
  );
}

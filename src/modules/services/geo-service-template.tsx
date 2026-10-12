"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GeoPageData } from "@/content/locations/geo-page-data";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { buildLinkedSchemaGraph } from "@/lib/schema";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  Clock,
  Code2,
  ShieldCheck,
  Zap,
  Phone,
  MessageSquare,
  Building2,
  ChevronDown,
  Sparkles,
  Award,
} from "lucide-react";

interface GeoServiceTemplateProps {
  data: GeoPageData;
}

export function GeoServiceTemplate({ data }: GeoServiceTemplateProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Generate Unified Linked Schema Graph for SEO / GEO / AIO
  const linkedGraph = buildLinkedSchemaGraph({
    pageUrl: data.canonicalUrl,
    pageTitle: data.h1,
    pageDescription: data.metaDescription,
    breadcrumbs: [
      { name: "Home", url: `${siteConfig.url}/` },
      { name: "Services", url: `${siteConfig.url}/services/` },
      { name: `${data.service.name} in ${data.location.name}`, url: data.canonicalUrl },
    ],
    service: {
      name: data.h1,
      description: data.metaDescription,
      url: data.canonicalUrl,
    },
    faqs: data.faqs.map((f) => ({
      question: f.question,
      answer: f.answer,
    })),
  });

  return (
    <article className="w-full bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500 selection:text-white">
      {/* Structured Data Injector */}
      <JsonLd data={linkedGraph} />

      {/* Hero Section */}
      <section className="relative w-full pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-b border-slate-800/80">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services/" className="hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-slate-200 font-medium truncate max-w-[280px] sm:max-w-none">
                {data.service.name} in {data.location.name}
              </li>
            </ol>
          </nav>

          {/* Location & Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>
              {data.location.presence === "hq"
                ? `Rishikesh Headquarters • Serving ${data.location.district}, Uttarakhand`
                : `Based in Rishikesh • Serving Businesses in ${data.location.name}`}
            </span>
          </div>

          {/* Single Primary H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold  text-white mb-6 max-w-4xl leading-[1.15]">
            {data.service.h1Noun} in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">
              {data.location.name}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed font-normal">
            {data.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 h-12 shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
            >
              <Link href="/contact/" className="flex items-center justify-center gap-2">
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold px-8 h-12 transition-all"
            >
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Trust Value Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Milestone-Driven Execution</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Responsive on Mobile, Tablet & Desktop</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Uttarakhand-Based Team</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Transparent Project Pricing</span>
            </div>
          </div>
        </div>
      </section>

      {/* AIO Answer-First Section (Optimized for AI Overviews, Perplexity & Fast Readers) */}
      <section className="py-12 lg:py-16 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Direct Summary & Overview</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {data.service.name} in {data.location.name}: How We Deliver Results
            </h2>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
              {data.overviewAnswer}
            </p>

            {/* High-Density Fact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/50">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-semibold mb-1">
                  <Clock className="w-3.5 h-3.5 text-blue-500" />
                  <span>Turnaround Time</span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  {data.keyFacts.turnaround}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/50">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-semibold mb-1">
                  <Code2 className="w-3.5 h-3.5 text-blue-500" />
                  <span>Core Tech Stack</span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate" title={data.keyFacts.techStack}>
                  {data.keyFacts.techStack}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/50">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-semibold mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                  <span>Pricing Structure</span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  {data.keyFacts.pricingModel}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/50">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-500" />
                  <span>Primary Coverage</span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate" title={data.keyFacts.coverage}>
                  {data.keyFacts.coverage}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features & Deliverables Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">
              Core Capabilities & Deliverables
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white ">
              {data.service.name} Deliverables for {data.location.name} Businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2.5">
                  {feature.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Strategic Process Section */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase mb-3">
              Structured Execution
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white ">
              Our Proven 4-Step Delivery Process in {data.location.name}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <div className="text-3xl font-black text-blue-600/20 dark:text-blue-400/20 mb-3">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Context & Why Local Advantage */}
      <section className="py-16 lg:py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
                <Building2 className="w-4 h-4" />
                <span>Local Market Knowledge</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white  mb-6">
                Tailored for {data.location.name}&apos;s Unique Business Ecosystem
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                {data.localContext.locationSummary}
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                {data.localContext.whyLocalAdvantage}
              </p>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Target Industries Served Across {data.location.name}:
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.localContext.industryFocus.map((ind, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium border border-slate-200/80 dark:border-slate-700/80"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-blue-900/10 via-slate-900 to-slate-950 p-8 rounded-3xl border border-slate-800 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Devbhoomi Infotech Approach</div>
                  <div className="text-xs text-slate-400">Headquartered in Rishikesh</div>
                </div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Accessibility:</strong> Consultations available online and by appointment across the region.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Modern Engineering:</strong> Modern Next.js and automation solutions with transparent scopes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Regional Search Knowledge:</strong> We understand how locals and travelers discover services in Uttarakhand.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Clear Milestone Handover:</strong> Structured sprint checkpoints and transparent project documentation.
                  </span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <Button
                  asChild
                  className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3"
                >
                  <Link href="/contact/">Schedule a Free Discovery Call</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localized FAQ Accordion (with FAQPage schema) */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-3xl font-extrabold text-slate-900 dark:text-white ">
              {data.service.name} in {data.location.name}: Clear Answers
            </p>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-blue-500" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Internal Link Mesh 1: Other Services in This Location */}
      <section className="py-16 lg:py-20 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
              Complete Digital Suite
            </h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Other Digital Services We Provide in {data.location.name}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.relatedServices.map((relSvc) => (
              <Link
                key={relSvc.slug}
                href={relSvc.path}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group flex items-center justify-between"
              >
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {relSvc.name}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 transition-transform group-hover:translate-x-1 shrink-0 ml-2" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Link Mesh 2: Nearby Locations for This Service */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
              Regional Coverage
            </h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Explore {data.service.name} Across Nearby Uttarakhand Areas
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.relatedLocations.map((relLoc) => (
              <Link
                key={relLoc.slug}
                href={relLoc.path}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors group flex items-center justify-between shadow-sm"
              >
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                    {data.service.name} in {relLoc.name}
                  </div>
                  <div className="text-[11px] text-slate-400 capitalize">
                    {relLoc.type}
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 transition-transform group-hover:translate-x-1 shrink-0 ml-2" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion CTA Banner */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white text-center">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 ">
            Ready to Grow Your Business in {data.location.name}?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Get in touch with Devbhoomi Infotech today. We analyze your requirements, provide actionable competitive insights, and deliver high-impact digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 h-12 shadow-lg shadow-blue-600/30"
            >
              <Link href="/contact/">Get Free Project Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-full border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold px-8 h-12"
            >
              <a href={`tel:${siteConfig.contact.phoneRaw}`} className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call {siteConfig.contact.phone}</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}

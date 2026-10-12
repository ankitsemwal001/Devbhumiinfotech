"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  Compass,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PUBLISHED_CITIES = [
  {
    name: "Rishikesh",
    slug: "rishikesh",
    presenceLabel: "Operational Headquarters",
    isHq: true,
    district: "Dehradun District",
    desc: "Global yoga retreats, luxury riverside hospitality, wellness centers & adventure tourism.",
    links: [
      { title: "Website Design", href: "/website-design-services-in-rishikesh-uttarakhand/" },
      { title: "Web Development", href: "/web-development-services-in-rishikesh-uttarakhand/" },
      { title: "SEO Services", href: "/seo-services-in-rishikesh/" },
      { title: "AI Automation", href: "/ai-automation-in-rishikesh/" },
    ],
  },
  {
    name: "Dehradun",
    slug: "dehradun",
    presenceLabel: "Service Area",
    isHq: false,
    district: "Doon Valley",
    desc: "Higher education institutes, IT Park technology firms, private healthcare & commercial enterprises.",
    links: [
      { title: "Website Design", href: "/website-design-in-dehradun/" },
      { title: "Web Development", href: "/web-development-in-dehradun/" },
      { title: "SEO Services", href: "/seo-services-in-dehradun/" },
      { title: "AI Automation", href: "/ai-automation-in-dehradun/" },
    ],
  },
  {
    name: "Haridwar",
    slug: "haridwar",
    presenceLabel: "Service Area",
    isHq: false,
    district: "Haridwar District",
    desc: "Industrial manufacturers in SIDCUL, pharmaceutical units, B2B wholesale & pilgrimage hospitality.",
    links: [
      { title: "Website Design", href: "/website-design-in-haridwar/" },
      { title: "Web Development", href: "/web-development-in-haridwar/" },
      { title: "SEO Services", href: "/seo-services-in-haridwar/" },
      { title: "AI Automation", href: "/ai-automation-in-haridwar/" },
    ],
  },
];

export function ExploreRegionsSection() {
  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden bg-slate-950 text-white border-b border-slate-900">
      {/* Background radial ambiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>Areas We Serve</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
            Serving Businesses Across{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">
              Rishikesh, Dehradun & Haridwar
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Headquartered in Rishikesh, we engineer high-performance website design, modern web applications, SEO, and AI workflow automations tailored to regional industry dynamics.
          </p>
        </div>

        {/* 3 Published City Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PUBLISHED_CITIES.map((city) => (
            <div
              key={city.slug}
              className="group relative rounded-3xl bg-slate-900/60 border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      city.isHq
                        ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-400"
                        : "bg-blue-500/15 border border-blue-500/30 text-blue-400"
                    }`}
                  >
                    {city.presenceLabel}
                  </span>
                  <span className="text-xs text-slate-400">{city.district}</span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400">
                    {city.isHq ? <Building2 className="w-5 h-5" /> : <MapPin className="w-5 h-5" />}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{city.name}</h3>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {city.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Practices in {city.name}:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {city.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800 text-xs text-slate-200 hover:text-blue-400 transition-colors"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">{link.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Looking for digital engineering outside these cities?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We work with clients across Uttarakhand and pan-India remotely and on request in person.
            </p>
          </div>

          <Button
            asChild
            className="rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2.5 shrink-0 shadow-lg shadow-blue-600/25"
          >
            <Link href="/contact/">
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

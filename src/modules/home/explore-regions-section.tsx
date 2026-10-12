"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  Compass,
  Building2,
  CheckCircle2,
  Globe2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <span>Regional Foothills · Global Delivery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
            Based in Rishikesh.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">
              Working worldwide.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Headquartered in Rishikesh, Uttarakhand — serving regional clients in person and businesses across the globe through structured remote delivery.
          </p>
        </div>

        {/* 3 Strategic Delivery Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Rishikesh (Operational HQ) */}
          <div className="group relative rounded-3xl bg-slate-900/60 border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-blue-500/5">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                  Operational Headquarters
                </span>
                <span className="text-xs text-slate-400">Rishikesh, UK</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white">Rishikesh</h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Our central engineering base. Local technology consulting, in-person discovery workshops, and digital solutions for hospitality, wellness, and commercial leaders across Rishikesh.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800/80">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Local Practices in Rishikesh:
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/website-design-services-in-rishikesh-uttarakhand/"
                  className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800 text-xs text-slate-200 hover:text-blue-400 transition-colors"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate">Website Design (HQ)</span>
                </Link>
                <Link
                  href="/web-development-services-in-rishikesh-uttarakhand/"
                  className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800 text-xs text-slate-200 hover:text-blue-400 transition-colors"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate">Web Development (HQ)</span>
                </Link>
                <Link
                  href="/seo-services-in-rishikesh/"
                  className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800 text-xs text-slate-200 hover:text-blue-400 transition-colors"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate">SEO Services</span>
                </Link>
                <Link
                  href="/ai-automation-in-rishikesh/"
                  className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800 text-xs text-slate-200 hover:text-blue-400 transition-colors"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate">AI Automation</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Dehradun & Haridwar (Local Clients in Uttarakhand) */}
          <div className="group relative rounded-3xl bg-slate-900/60 border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-blue-500/5">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 border border-blue-500/30 text-blue-400">
                  Local clients in Uttarakhand
                </span>
                <span className="text-xs text-slate-400">Regional Reach</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white">Dehradun & Haridwar</h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Active service area delivery for educational academies, private clinics, and technology enterprises in Dehradun, along with industrial manufacturers and B2B distributors in Haridwar.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800/80">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Approved Local Pages:
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/website-design-in-dehradun/"
                  className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800 text-xs text-slate-200 hover:text-blue-400 transition-colors"
                >
                  <CheckCircle2 className="w-3 h-3 text-blue-400 shrink-0" />
                  <span className="truncate">Web in Dehradun</span>
                </Link>
                <Link
                  href="/seo-services-in-dehradun/"
                  className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800 text-xs text-slate-200 hover:text-blue-400 transition-colors"
                >
                  <CheckCircle2 className="w-3 h-3 text-blue-400 shrink-0" />
                  <span className="truncate">SEO in Dehradun</span>
                </Link>
                <Link
                  href="/website-design-in-haridwar/"
                  className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800 text-xs text-slate-200 hover:text-blue-400 transition-colors"
                >
                  <CheckCircle2 className="w-3 h-3 text-blue-400 shrink-0" />
                  <span className="truncate">Web in Haridwar</span>
                </Link>
                <Link
                  href="/seo-services-in-haridwar/"
                  className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-800/40 hover:bg-slate-800 text-xs text-slate-200 hover:text-blue-400 transition-colors"
                >
                  <CheckCircle2 className="w-3 h-3 text-blue-400 shrink-0" />
                  <span className="truncate">SEO in Haridwar</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Remote Clients Worldwide */}
          <div className="group relative rounded-3xl bg-gradient-to-b from-blue-950/40 via-slate-900 to-slate-950 border border-blue-500/30 p-8 flex flex-col justify-between hover:border-blue-400 transition-all hover:shadow-xl hover:shadow-blue-500/10">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/15 border border-sky-400/30 text-sky-300">
                  Remote clients worldwide
                </span>
                <span className="text-xs text-slate-400">Global Delivery</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-sky-400">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white">Worldwide Delivery</h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Serving international founders, SMEs, and commercial teams remotely. Disciplined weekly milestones, clear code repositories, and seamless video collaboration across time zones.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800/80 space-y-4">
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>100% source code & IP ownership transfer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Transparent milestone demos on private staging</span>
                </div>
              </div>

              <Button
                asChild
                className="w-full rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 shadow-md shadow-blue-600/30"
              >
                <Link href="/contact/" className="flex items-center justify-center gap-2">
                  <span>Discuss a Remote Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

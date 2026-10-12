"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutBrief() {
  return (
    <section className="pt-8 sm:pt-10 lg:pt-16 pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow Badge at Top of Section */}

        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          Who we are
        </span>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ========================================================
              Left Column: Narrative & Identity
          ======================================================== */}
          <div className="lg:col-span-6 max-w-xl space-y-6">
            {/* Editorial Serif Heading starting on the exact same line as Card 1 */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 dark:text-white leading-[1.18] font-serif">
              A technology partner built on engineering discipline and local accountability
            </h2>

            {/* Explanatory Paragraphs */}
            <div className="space-y-4 text-[15px] sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              <p>
                Devbhoomi Infotech is an IT and digital growth agency rooted in Rishikesh, Uttarakhand. We work with local enterprises, growing startups, and nationwide businesses to build robust websites, custom software, and practical AI automation systems.
              </p>
              <p>
                We focus on business outcomes rather than generic templates. Every line of code, SEO structure, and automated workflow is designed to reduce friction, increase search visibility, and convert customer inquiries.
              </p>
            </div>

            {/* Pill CTA Button */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-semibold px-6 py-3.5 text-sm shadow-sm hover:shadow transition-all group"
                aria-label="Learn More About Our Team & Approach"
              >
                <span>Learn More About Our Team & Approach</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* ========================================================
              Right Column: 3 Distinctly Tinted Horizontal Feature Cards
          ======================================================== */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            {/* Card 1: Business-First Problem Solving */}
            <div className="p-6 sm:p-7 rounded-[26px] bg-[#f0f4fa] dark:bg-slate-900/80 border border-blue-100/40 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900/60 transition-all flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {/* Dual-Tone Blue Shield */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
                  <path
                    d="M12 2L4 5V11C4 16.5 7.5 21 12 22C16.5 21 20 16.5 20 11V5L12 2Z"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 2V22C16.5 21 20 16.5 20 11V5L12 2Z"
                    fill="#2563EB"
                    opacity="0.85"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  Business-First Problem Solving
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-1.5 font-normal">
                  Technology choices driven by your specific commercial goals, customer journey, and operational needs.
                </p>
              </div>
            </div>

            {/* Card 2: Modern Full-Stack Architecture */}
            <div className="p-6 sm:p-7 rounded-[26px] bg-[#f2f7f4] dark:bg-slate-900/80 border border-emerald-100/40 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-900/60 transition-all flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {/* Emerald Microchip Emblem */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" fillOpacity="0.2" />
                  <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  Modern Full-Stack Architecture
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-1.5 font-normal">
                  Built with Next.js, React, and automated workflows that ensure fast load times, security, and easy maintenance.
                </p>
              </div>
            </div>

            {/* Card 3: Transparent Local Collaboration */}
            <div className="p-6 sm:p-7 rounded-[26px] bg-[#f4f6fa] dark:bg-slate-900/80 border border-blue-100/40 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900/60 transition-all flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {/* Blue Verified Checkmark Emblem */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#3B82F6" />
                  <path
                    d="M8 12L11 15L16 9"
                    stroke="white"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  Transparent Local Collaboration
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-1.5 font-normal">
                  Direct communication, transparent timelines, and post-launch support without agency bureaucracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

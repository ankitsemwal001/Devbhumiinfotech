import type { Metadata } from "next";
import Link from "next/link";
import { pricingPackages } from "@/content/packages";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaBannerSection } from "@/modules/home/cta-banner";
import {
  Check,
  X,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  HelpCircle,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Transparent Pricing & Packages | Devbhoomi Infotech Solutions",
  description:
    "Explore transparent pricing for web development, custom software, and digital growth packages from Devbhoomi Infotech Solutions, Rishikesh, Uttarakhand.",
  alternates: {
    canonical: `${siteConfig.url}/pricing/`,
  },
};

export default function PricingPage() {
  const breadcrumbs = [
    { name: "Home", url: `${siteConfig.url}/` },
    { name: "Pricing", url: `${siteConfig.url}/pricing/` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  const websitePackages = pricingPackages.filter((p) => p.category === "website");
  const customPackages = pricingPackages.filter(
    (p) => p.category === "custom-solution"
  );

  const comparisonFeatures = [
    { name: "Pages Included", starter: "Up to 5 Pages", standard: "8–10 Pages", comprehensive: "15–20 Pages" },
    { name: "Mobile Responsiveness", starter: true, standard: true, comprehensive: true },
    { name: "SEO & Meta Tag Foundation", starter: "Basic", standard: "On-Page & Schema", comprehensive: "Advanced Technical & GEO" },
    { name: "Blog / Publishing System", starter: false, standard: true, comprehensive: true },
    { name: "Speed & Core Web Vitals Optimization", starter: "Standard", standard: "Enhanced", comprehensive: "High-Performance Hardening" },
    { name: "Contact Form & WhatsApp Lead Routing", starter: true, standard: true, comprehensive: true },
    { name: "Custom Component Interactions", starter: false, standard: "Standard", comprehensive: "Tailored & Micro-Animations" },
    { name: "Analytics & Conversion Tracking", starter: "Basic", standard: "Configured", comprehensive: "Advanced Event Funnels" },
    { name: "Post-Launch Handover & Walkthrough", starter: true, standard: true, comprehensive: "Priority Walkthrough & Support" },
    { name: "Source Code & IP Ownership", starter: "100% Client Owned", standard: "100% Client Owned", comprehensive: "100% Client Owned" },
  ];

  const pricingFaqs = [
    {
      q: "Are there any hidden or recurring monthly fees?",
      a: "No. Our website development packages are one-time project fees. You retain 100% ownership of your source code and assets. Third-party recurring expenses (like your domain name and hosting server) are paid directly to your chosen provider, with zero agency markups.",
    },
    {
      q: "How does the payment milestone structure work?",
      a: "Projects follow a disciplined 3-stage milestone model: 50% upon project kickoff & architecture blueprint, 30% after staging review & client feedback, and the remaining 20% upon final quality check and production deployment.",
    },
    {
      q: "What if our project requires custom features not listed in packages?",
      a: "We provide bespoke quotes for unique platforms, custom SaaS applications, or specialized automation workflows. Schedule a free consultation to receive a transparent, itemized scope of work.",
    },
    {
      q: "Do you provide post-launch support and maintenance?",
      a: "Yes. All web packages include post-launch warranty support to resolve any technical issues. We also offer optional ongoing technical maintenance and SEO growth retainers.",
    },
  ];

  return (
    <div className="w-full">
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Banner */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-400/20">
            Transparent Pricing & Scope
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            Investment Packages Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Measurable Growth
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Honest, milestone-based pricing with verified deliverables. From turnkey business websites to bespoke AI automations and SaaS engineering.
          </p>
        </div>
      </section>

      {/* Main Packages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Section 1: Turnkey Website Packages */}
          <div className="space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Core Website Packages
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Turnkey Web Engineering Packages
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                Ideal for professionals, growing regional companies, and established institutions requiring clean mobile-first web platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {websitePackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`flex flex-col justify-between p-8 rounded-3xl border transition-all duration-300 relative ${
                    pkg.popular
                      ? "bg-slate-50 dark:bg-slate-900/90 border-blue-500 shadow-xl ring-2 ring-blue-500/20"
                      : "bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Featured</span>
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 min-h-[36px]">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="pt-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Starting From
                      </div>
                      <div className="text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                        {pkg.price}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                          {feat.included ? (
                            <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0 mt-0.5" />
                          )}
                          <span
                            className={
                              feat.included
                                ? "text-slate-700 dark:text-slate-200"
                                : "text-slate-400 dark:text-slate-500 line-through"
                            }
                          >
                            {feat.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <Link
                      href={`/contact/?package=${encodeURIComponent(pkg.name)}`}
                      className={`w-full py-3 px-5 rounded-full font-semibold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-all ${
                        pkg.popular
                          ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20"
                          : "border border-slate-200 dark:border-slate-700 hover:border-blue-500 text-slate-800 dark:text-slate-200 hover:text-blue-600"
                      }`}
                    >
                      <span>{pkg.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Custom Solutions & Retainers */}
          <div className="space-y-10 pt-10 border-t border-slate-100 dark:border-slate-800">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Custom Engineering
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Bespoke Software, Automation & SEO Retainers
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                Tailored discovery-first engagements for high-complexity workflows and continuous digital growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {customPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="flex flex-col justify-between p-8 rounded-3xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 min-h-[36px]">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="pt-2 pb-4 border-b border-slate-200 dark:border-slate-800">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Engagement Scope
                      </div>
                      <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mt-1">
                        {pkg.price}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        Detailed proposal after initial discovery call
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-200">
                            {feat.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <Link
                      href={`/contact/?package=${encodeURIComponent(pkg.name)}`}
                      className="w-full py-3 px-5 rounded-full border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 font-semibold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-colors"
                    >
                      <span>{pkg.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Feature Comparison Matrix */}
          <div className="space-y-8 pt-10 border-t border-slate-100 dark:border-slate-800">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Detailed Breakdown
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Website Packages Comparison
              </h2>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white">Feature / Deliverable</th>
                    <th className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white text-center">Starter (₹15k)</th>
                    <th className="p-4 sm:p-5 font-bold text-blue-600 dark:text-blue-400 text-center">Standard (₹25k)</th>
                    <th className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white text-center">Comprehensive (₹40k)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {comparisonFeatures.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                      <td className="p-4 sm:p-5 font-medium text-slate-800 dark:text-slate-200">
                        {row.name}
                      </td>
                      <td className="p-4 sm:p-5 text-center text-slate-600 dark:text-slate-400">
                        {typeof row.starter === "boolean" ? (
                          row.starter ? (
                            <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-slate-300 dark:text-slate-600 mx-auto" />
                          )
                        ) : (
                          row.starter
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center font-medium text-blue-600 dark:text-blue-400">
                        {typeof row.standard === "boolean" ? (
                          row.standard ? (
                            <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-slate-300 dark:text-slate-600 mx-auto" />
                          )
                        ) : (
                          row.standard
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center text-slate-600 dark:text-slate-400">
                        {typeof row.comprehensive === "boolean" ? (
                          row.comprehensive ? (
                            <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-slate-300 dark:text-slate-600 mx-auto" />
                          )
                        ) : (
                          row.comprehensive
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Engagement Standards / Peace of Mind */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">3-Stage Payment Milestones</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                50% Kickoff & Blueprint, 30% Staging Demonstration, and 20% on Production Launch & Verification.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">100% Code & Asset Ownership</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                You own all intellectual property, source files, and design assets upon milestone completion.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">Direct Technical Access</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Communicate directly with the engineers in Rishikesh building your project, without account managers.
              </p>
            </div>
          </div>

          {/* Section 5: Pricing FAQs */}
          <div className="space-y-8 pt-10 border-t border-slate-100 dark:border-slate-800 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Questions & Answers
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Frequently Asked Pricing Questions
              </h2>
            </div>

            <div className="space-y-4">
              {pricingFaqs.map((faq, i) => (
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
          </div>
        </div>
      </section>

      <CtaBannerSection />
    </div>
  );
}

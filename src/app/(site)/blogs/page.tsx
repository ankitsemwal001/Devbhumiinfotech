import type { Metadata } from "next";
import { BlogContent } from "@/modules/blog/blog-content";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaBannerSection } from "@/modules/home/cta-banner";
import { BookOpen, Search, Cpu, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Latest Blogs & Digital Insights | Devbhoomi Infotech Solutions",
  description:
    "Expert articles on Technical SEO, Web Development architectures, AI workflows, and digital marketing strategies from Devbhoomi Infotech, Rishikesh.",
  alternates: {
    canonical: `${siteConfig.url}/blogs/`,
  },
};

export default function BlogsPage() {
  const breadcrumbs = [
    { name: "Home", url: `${siteConfig.url}/` },
    { name: "Insights", url: `${siteConfig.url}/blogs/` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  const pillars = [
    {
      icon: Globe,
      title: "Modern Web Engineering",
      desc: "Next.js architecture, Core Web Vitals optimization, and clean component systems.",
    },
    {
      icon: Search,
      title: "Technical SEO & GEO",
      desc: "Strategies for Google organic visibility, Local SEO in Uttarakhand, and Generative AI answer engines.",
    },
    {
      icon: Cpu,
      title: "Practical AI & Automation",
      desc: "Building reliable WhatsApp automations, n8n workflows, and conversational business bots.",
    },
  ];

  return (
    <div className="w-full">
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Banner */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-400/20">
            Insights & Guides
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            Industry Articles & Growth Tips
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Practical strategies, technical blueprints, and modern tech updates written by the engineers and growth specialists at Devbhoomi Infotech.
          </p>
        </div>
      </section>

      {/* Knowledge Pillars Ribbon */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Articles Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <BlogContent />
        </div>
      </section>

      <CtaBannerSection />
    </div>
  );
}

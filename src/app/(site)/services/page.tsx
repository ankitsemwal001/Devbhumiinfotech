import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bot, Code2, Globe, Smartphone, TrendingUp, CheckCircle2 } from "lucide-react";
import { serviceGroups } from "@/content/services";
import { getRelatedProjectsForService } from "@/lib/relations";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaBannerSection } from "@/modules/home/cta-banner";

export const metadata: Metadata = {
  title: "Core Technology Services | Devbhoomi Infotech Solutions",
  description:
    "Explore our specialized service disciplines: AI & business automation, custom software/SaaS, mobile app development, modern web development, and digital growth/SEO.",
  alternates: {
    canonical: `${siteConfig.url}/services/`,
  },
};

export default function ServicesPage() {
  const breadcrumbs = [
    { name: "Home", url: `${siteConfig.url}/` },
    { name: "Services", url: `${siteConfig.url}/services/` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  const getGroupIcon = (id: string) => {
    switch (id) {
      case "ai-automation":
        return <Bot className="w-8 h-8 text-emerald-500" />;
      case "software-development":
        return <Code2 className="w-8 h-8 text-blue-500" />;
      case "mobile-app-development":
        return <Smartphone className="w-8 h-8 text-cyan-500" />;
      case "web-development":
        return <Globe className="w-8 h-8 text-indigo-500" />;
      case "digital-growth":
        return <TrendingUp className="w-8 h-8 text-emerald-400" />;
      default:
        return <Code2 className="w-8 h-8 text-blue-500" />;
    }
  };

  return (
    <div className="w-full">
      <JsonLd data={breadcrumbSchema} />

      {/* Header Banner */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-400/20">
            Specialized Practice Areas
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            Technology & Growth Disciplines
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Five specialized engineering and growth practices engineered to
            eliminate manual friction, build conversion-focused websites and
            apps, and expand your digital reach.
          </p>
        </div>
      </section>

      {/* Service Groups with explicit ID anchors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {serviceGroups.map((group, index) => {
          const relatedProjects = getRelatedProjectsForService(group.id);

          return (
            <section
              key={group.id}
              id={group.id}
              className="scroll-mt-28 p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left: Service Overview & Capabilities */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm">
                    {getGroupIcon(group.id)}
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      Discipline 0{index + 1}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                      {group.title}
                    </h2>
                  </div>

                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {group.summary}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Capabilities & Deliverables:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {group.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {group.liveHref && !group.liveHref.includes("#") && (
                    <div className="pt-4">
                      <Link
                        href={group.liveHref}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        <span>Explore In-Depth {group.shortTitle} Page</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </div>

                {/* Right: Related Projects Showcase */}
                <div className="lg:col-span-5 bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Related Projects & Prototypes
                  </h3>

                  {relatedProjects.length > 0 ? (
                    <div className="space-y-4">
                      {relatedProjects.slice(0, 2).map((proj) => (
                        <div
                          key={proj._id}
                          className="flex gap-4 items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
                        >
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-slate-200">
                            <Image
                              src={proj.image}
                              alt={proj.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-sm text-slate-900 dark:text-white line-clamp-1">
                              {proj.title}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                              {proj.summary}
                            </div>
                            <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 uppercase mt-1 inline-block">
                              {proj.industry}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500">
                      Project case studies for this discipline are actively being documented.
                    </p>
                  )}

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-center">
                    <Link
                      href="/contact/"
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Request a consultation for {group.shortTitle} →
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Engagement Models Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Collaboration Frameworks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Flexible Engagement Models
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Whether you need a defined single-delivery website, custom SaaS architecture, or ongoing growth support, we adapt to your operating rhythm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-900 inline-block">
                  Turnkey Delivery
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Fixed-Scope Projects
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Best for corporate websites, e-commerce stores, and specific automation pipelines with defined requirements and timelines.
                </p>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <li className="flex items-center gap-2">✓ Fixed investment quote with zero surprise billing</li>
                  <li className="flex items-center gap-2">✓ 3-stage milestone structure (50 / 30 / 20)</li>
                  <li className="flex items-center gap-2">✓ Pre-agreed delivery timeline and staging reviews</li>
                </ul>
              </div>
              <Link
                href="/pricing/"
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1.5"
              >
                <span>Explore Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-blue-500/50 shadow-md ring-1 ring-blue-500/20 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900 inline-block">
                  Agile Engineering
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Dedicated Sprints
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Ideal for SaaS products, complex internal tools, and evolving platforms requiring ongoing technical execution.
                </p>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <li className="flex items-center gap-2">✓ Dedicated senior full-stack developers</li>
                  <li className="flex items-center gap-2">✓ Bi-weekly sprint goals and transparent changelogs</li>
                  <li className="flex items-center gap-2">✓ Flexible scope pivoting as requirements emerge</li>
                </ul>
              </div>
              <Link
                href="/contact/"
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1.5"
              >
                <span>Consult With Engineers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300 border border-purple-200 dark:border-purple-900 inline-block">
                  Continuous Growth
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  SEO & Technical Retainers
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Tailored for established organizations looking to systematically rank in local & national search and optimize conversion funnels.
                </p>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <li className="flex items-center gap-2">✓ Continuous Technical SEO & GEO monitoring</li>
                  <li className="flex items-center gap-2">✓ Core Web Vitals maintenance & security updates</li>
                  <li className="flex items-center gap-2">✓ Monthly analytics and inquiry growth reporting</li>
                </ul>
              </div>
              <Link
                href="/contact/?package=SEO%20Retainer"
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1.5"
              >
                <span>Request Growth Retainer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBannerSection />
    </div>
  );
}

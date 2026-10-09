"use client";

import Link from "next/link";
import { ArrowRight, Code, Brain, TrendingUp, Layout } from "lucide-react";
import { allServices } from "@/content/services";

const iconsMap: Record<string, any> = {
  "website-design-services-in-rishikesh-uttarakhand": Layout,
  "web-development-services-in-rishikesh-uttarakhand": Code,
  "digital-marketing": TrendingUp,
  "ai-automation": Brain,
};

export function ServicesPreviewSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            End-To-End Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            Specialized Digital Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything your business needs to establish dominance, attract customers, and automate workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allServices.map((service) => {
            const Icon = iconsMap[service.slug] || Code;
            return (
              <div
                key={service.slug}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.heroHeading.regular} {service.heroHeading.highlight}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {service.heroDescription}
                  </p>
                </div>

                <Link
                  href={`/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

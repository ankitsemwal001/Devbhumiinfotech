import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { CtaBannerSection } from "@/modules/home/cta-banner";
import { Award, Rocket, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Devbhoomi Infotech Solutions Rishikesh",
  description:
    "Learn about Devbhoomi Infotech, the premier IT company, SEO agency, and web development team based in Rishikesh, Uttarakhand.",
  alternates: {
    canonical: `${siteConfig.url}/about/`,
  },
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-400/20">
            About Devbhoomi Infotech
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Empowering Businesses With <span className="text-emerald-400">Digital Dominance</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Headquartered in Rishikesh, Uttarakhand, we craft custom web applications, execute high-intent SEO, and deploy intelligent AI automation systems.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Our Journey & Ethos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Driven by Innovation, Rooted in Uttarakhand
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Devbhoomi Infotech was founded with a singular mission: to provide world-class web engineering and digital growth solutions to businesses locally in Rishikesh, throughout Uttarakhand, and across the globe.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              We reject the one-size-fits-all model. Every code line, SEO keyword, and automated process is custom-engineered to solve actual business bottlenecks and drive verifiable revenue.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                <div className="text-3xl font-extrabold text-blue-600">150+</div>
                <div className="text-xs font-medium text-gray-500 mt-1">Projects Delivered</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                <div className="text-3xl font-extrabold text-emerald-500">99.8%</div>
                <div className="text-xs font-medium text-gray-500 mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 h-96 sm:h-[450px]">
            <Image
              src="/images/devbhoomi-infotech-hotel-resort-website-rishikesh.webp"
              alt="Devbhoomi Infotech Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Principles
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The fundamental standards behind everything we design, code, and deploy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <Award className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Uncompromising Quality
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Zero bloated themes or fragile shortcuts. We write modular, secure, and production-tested code designed to last.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <Rocket className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Performance-First
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Speed is a feature. We engineer for lightning-quick load times, exceptional Core Web Vitals, and search visibility.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <HeartHandshake className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Long-Term Partnership
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                We act as your dedicated technical partner, supporting your business evolution with ongoing maintenance and guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBannerSection />
    </div>
  );
}

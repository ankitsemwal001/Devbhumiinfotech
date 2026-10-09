import Link from "next/link";
import { ServicePageData } from "@/types/service";
import { ProcessTabs } from "./process-tabs";
import { pricingPackages } from "@/content/packages";
import { Check, ArrowRight, MessageSquare, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

interface ServiceDetailTemplateProps {
  data: ServicePageData;
}

export function ServiceDetailTemplate({ data }: ServiceDetailTemplateProps) {
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: data.title, url: `${siteConfig.url}/${data.slug}` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  const faqSchema = generateFAQSchema(data.faqs);

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {data.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <section className="relative w-full py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {data.heroBadge}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto mb-6 leading-tight">
            {data.heroHeading.regular}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              {data.heroHeading.highlight}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            {data.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 h-12 shadow-lg shadow-blue-600/30"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-slate-700 hover:bg-slate-800 text-slate-200 font-semibold px-8 h-12"
            >
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          <nav aria-label="Breadcrumb" className="mt-12 text-xs sm:text-sm text-slate-400">
            <ol className="flex flex-wrap items-center justify-center gap-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-blue-400 font-medium">{data.title}</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            {data.overview.heading}
          </h2>
          <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-left sm:text-center">
            {data.overview.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {data.features && data.features.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {data.featuresHeading || "Key Capabilities & Features"}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Industry-leading standards engineered for maximum performance, security, and conversions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Structured Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              {data.processHeading}
            </h2>
            {data.processSubheading && (
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {data.processSubheading}
              </p>
            )}
          </div>

          <ProcessTabs steps={data.processSteps} />
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Transparent Investment
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              Packages & Pricing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 border ${
                  pkg.popular
                    ? "border-blue-600 shadow-xl shadow-blue-500/10"
                    : "border-gray-200 dark:border-gray-700"
                } flex flex-col justify-between`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    {pkg.description}
                  </p>
                  <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                    {pkg.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2.5 text-sm ${
                          feature.included
                            ? "text-gray-700 dark:text-gray-300"
                            : "text-gray-400 line-through"
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            feature.included ? "text-emerald-500" : "text-gray-300"
                          }`}
                        />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  className={`w-full rounded-xl ${
                    pkg.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 text-gray-900 dark:text-white"
                  }`}
                >
                  <Link href="/contact">{pkg.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {data.faqs && data.faqs.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {data.faqsHeading || "Frequently Asked Questions"}
              </h2>
            </div>

            <div className="space-y-6">
              {data.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Elevate Your Business with {data.title}?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Contact our expert team in Rishikesh today for a free consultation and customized quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 h-12 shadow-lg"
            >
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white text-white hover:bg-blue-700 font-semibold px-8 h-12"
            >
              <a href={`tel:${siteConfig.contact.phoneRaw}`}>
                Call Us: {siteConfig.contact.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

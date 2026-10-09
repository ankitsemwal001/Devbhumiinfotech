"use client";

import Link from "next/link";
import { pricingPackages } from "@/content/packages";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PackagesPreviewSection() {
  return (
    <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Investment Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            Transparent Website Packages
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose a solution tailored to your budget and growth ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white dark:bg-gray-900 rounded-2xl p-8 border ${
                pkg.popular
                  ? "border-blue-600 shadow-xl shadow-blue-500/10"
                  : "border-gray-200 dark:border-gray-800"
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
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-900 dark:text-white"
                }`}
              >
                <Link href="/contact">{pkg.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

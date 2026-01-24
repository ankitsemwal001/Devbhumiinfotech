"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";
const whatsappNumber = "918126006791";

const getWhatsappLink = (packageName: string) =>
  `https://wa.me/${whatsappNumber}?text=Hi%20I%20am%20interested%20in%20the%20${encodeURIComponent(
    packageName
  )}%20package.%20Please%20share%20more%20details.`;

const packages = [
  {
    id: 1,
    name: "Starter Website",
    price: "₹10,000",
    period: "/year",
    description: "Perfect for getting started",
    features: [
      { text: "5 Pages Website", included: true },
      { text: "Responsive Design", included: true },
      { text: "Basic UI Design", included: true },
      { text: "Contact Form Integration", included: true },
      { text: "Deployment Support", included: true },
      { text: "Cross Browser Compatibility", included: true },
      { text: "Basic SEO", included: false },
      { text: "Blog Setup", included: false },
    ],

    cta: "Get Started",
    popular: false,
  },
  {
    id: 2,
    name: "Standard Website",
    price: "₹20,000",
    period: "/year",
    description: "Most Popular Choice",
    features: [
      { text: "8–10 Pages Website", included: true },
      { text: "Fully Responsive Design", included: true },
      { text: "Custom UI Design", included: true },
      { text: "Contact Form & WhatsApp Integration", included: true },
      { text: "Basic SEO Optimization", included: true },
      { text: "Blog Setup & Configuration", included: true },
      { text: "Fast Page Load Optimization", included: true },
      { text: "Deployment & Launch Support", included: true },

      //  Premium-only features
      { text: "Advanced SEO Optimization", included: false },
      { text: "Performance & Core Web Vitals Optimization", included: false },
      { text: "Priority Support", included: false },
    ],
    cta: "Choose Plan",
    popular: true,
  },
  {
    id: 3,
    name: "Premium Website",
    price: "₹30,000",
    period: "/year",
    description: "Enterprise solutions",
    features: [
      { text: "15–20 Pages Website", included: true },
      { text: "Fully Responsive Design", included: true },
      { text: "Custom Premium UI Design", included: true },
      { text: "Contact Form & WhatsApp Integration", included: true },
      { text: "Advanced SEO Optimization", included: true },
      { text: "Blog Setup & Optimization", included: true },
      { text: "Performance & Core Web Vitals Optimization", included: true },
      { text: "Security & Basic Hardening", included: true },
      { text: "Deployment, Monitoring & Priority Support", included: true },
     { text: "AI-Powered Chatbot with Live Agent Support", included: true }

    ],
    cta: "Go Premium",
    popular: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
      duration: 0.6,
    },
  },
};

export function PackagesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/60 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/60 backdrop-blur-sm mb-6 mx-auto">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            </span>
            <p className="text-sm font-semibold tracking-wide text-blue-800 dark:text-blue-300">
              Our Packages
            </p>
          </div>

          <h2 className="max-w-4xl mx-auto text-4xl md:text-4xl lg:text-5xl tracking-tight text-gray-950 dark:text-white leading-[1.06]">
            Choose Your Package
          </h2>

          <p className="mt-4 max-w-2xl text-lg mx-auto text-base text-gray-600 dark:text-gray-400">
            Simple and transparent packages designed to suit different needs and
            budgets.
          </p>
        </div>

        {/* Packages Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={cardVariants}
              className="h-full"
              whileHover={{ y: -4 }}
            >
              {pkg.popular && (
                <div className="flex justify-center mb-4">
                  <span className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`relative rounded-2xl p-6 sm:p-8 h-full flex flex-col transition-all duration-300 ${
                  pkg.popular
                    ? "bg-white dark:bg-gray-900 border-2 border-indigo-500/40 shadow-xl"
                    : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl"
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400">
                    {pkg.description}
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b border-slate-100 dark:border-gray-700">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl text-blue-600 dark:text-blue-400">
                      {pkg.price}
                    </span>
                    <span className="text-slate-600 dark:text-gray-400 text-sm font-medium">
                      {pkg.period}
                    </span>
                  </div>
                </div>

                <motion.a
                  href={getWhatsappLink(pkg.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-3 px-4 rounded-lg font-semibold text-sm sm:text-base mb-6 transition-all ${
                    pkg.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-slate-100 dark:bg-gray-800 text-slate-900 dark:text-white hover:bg-blue-200 dark:hover:bg-blue-700"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {pkg.cta}
                </motion.a>

                <div className="flex-grow">
                  <p className="text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wide mb-4">
                    What's Included
                  </p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.1 * idx + 0.2 }}
                      >
                        <Check
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            feature.included
                              ? "text-emerald-500"
                              : "text-slate-300 dark:text-gray-500"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            feature.included
                              ? "text-slate-700 dark:text-gray-200"
                              : "text-slate-400 dark:text-gray-500 line-through"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base">
            Need a custom plan?{" "}
            <a
              href="mailto:infotechdevbhoomi@gmail.com"
              className="text-blue-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useInView } from "react-intersection-observer";

const reasons = [
  {
    number: "01",
    title: "SEO-Optimized Development",
    description:
      "We build fast, scalable, and search-engine-friendly websites that help businesses improve visibility, rankings, and online credibility.",
  },
  {
    number: "02",
    title: "Local Business Expertise",
    description:
      "We understand the Rishikesh and Uttarakhand market and design web solutions that align with local business goals and customer behavior.",
  },
  {
    number: "03",
    title: "Performance Focused Websites",
    description:
      "Our websites are optimized for speed, usability, and performance to deliver better user experience and higher conversion rates.",
  },
  {
    number: "04",
    title: "Clean & Scalable Code",
    description:
      "We follow modern development standards to ensure your website remains secure, maintainable, and ready for future growth.",
  },
  {
    number: "05",
    title: "Transparent Work Process",
    description:
      "From planning to delivery, we follow a clear and transparent workflow so clients always stay informed and confident.",
  },
  {
    number: "06",
    title: "Reliable Ongoing Support",
    description:
      "We provide consistent technical support and maintenance to keep your website updated, secure, and running smoothly.",
  },
];

export function WhyChooseUsSection() {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Our Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            Why Partner With Devbhoomi Infotech
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Combining engineering precision with deep market understanding to ensure measurable business ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-slate-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all hover:shadow-md"
            >
              <div className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-4">
                {reason.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const reasons = [
  {
    number: '01',
    title: 'SEO-Optimized Development',
    description:
      'We build fast, scalable, and search-engine-friendly websites that help businesses improve visibility, rankings, and online credibility.',
  },
  {
    number: '02',
    title: 'Local Business Expertise',
    description:
      'We understand the Rishikesh and Uttarakhand market and design web solutions that align with local business goals and customer behavior.',
  },
  {
    number: '03',
    title: 'Performance Focused Websites',
    description:
      'Our websites are optimized for speed, usability, and performance to deliver better user experience and higher conversion rates.',
  },
  {
    number: '04',
    title: 'Clean & Scalable Code',
    description:
      'We follow modern development standards to ensure your website remains secure, maintainable, and ready for future growth.',
  },
  {
    number: '05',
    title: 'Transparent Work Process',
    description:
      'From planning to delivery, we follow a clear and transparent workflow so clients always stay informed and confident.',
  },
  {
    number: '06',
    title: 'Reliable Ongoing Support',
    description:
      'We provide consistent technical support and maintenance to keep your website updated, secure, and running smoothly.',
  },
];


export function WhyChooseUsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const, // ← This fixes the TypeScript error
      },
    },
  };

  return (
    <section className="relative bg-blue-50 py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mb-24 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/60 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/60 backdrop-blur-sm mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            </span>
            <p className="text-sm font-semibold tracking-wide text-blue-800 dark:text-blue-300">
              Why Choose Us
            </p>
          </div>

          {/* Heading */}
          <h2 className="max-w-4xl mx-auto text-4xl md:text-4xl lg:text-5xl  tracking-tight text-gray-950 dark:text-white leading-[1.06]">
            Enterprise-grade solutions
            <span className="block text-gray-700 dark:text-gray-300">you can trust</span>
          </h2>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {reasons.map((reason, index) => (
            <motion.div key={index} className="group flex flex-col" variants={itemVariants}>
              <div className="mb-6">
                <div className="flex items-start gap-4">
                  <span className="text-5xl md:text-6xl font-light text-gray-400 leading-none flex-shrink-0">
                    {reason.number}
                  </span>
                  <div className="flex-grow pt-1">
                    <div className="relative h-px bg-gradient-to-r from-orange-300 to-transparent mb-4 overflow-hidden">
                      <div
                        className="absolute inset-0 h-px bg-gradient-to-r from-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"
                      />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-orange-500 transition-colors duration-300 group-hover:text-blue-500">
                      {reason.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="relative">
                <p className="text-base text-gray-600 leading-relaxed font-light">
                  {reason.description}
                </p>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-orange-500 transition-all duration-500 ease-out group-hover:w-32" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

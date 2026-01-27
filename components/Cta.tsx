"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-primary/5 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                     font-bold text-foreground
                     mb-4 sm:mb-6
                     leading-tight sm:leading-snug text-balance"
        >
          Ready to Transform Your Digital Presence?
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg
                     text-foreground/70
                     max-w-2xl mx-auto
                     mb-8 sm:mb-10
                     leading-relaxed"
        >
          Let&apos;s discuss how our web development, SEO, and AI automation
          services can help your business grow and succeed online. Get a free
          consultation today.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12"
        >
          {/* WhatsApp CTA */}
          <Link
            href="https://wa.me/918126006791?text=Hi%20I%20want%20to%20discuss%20a%20project%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2
                       px-6 sm:px-8 py-3 sm:py-4
                       text-sm sm:text-base
                       bg-blue-500 text-primary-foreground
                       rounded-lg font-semibold
                       hover:opacity-100 transition-opacity group"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Call CTA */}
          <Link
            href="tel:+918126006791"
            className="inline-flex items-center justify-center gap-2
                       px-6 sm:px-8 py-3 sm:py-4
                       text-sm sm:text-base
                       border-2 border-primary text-primary
                       rounded-lg font-semibold
                       hover:bg-primary/5 transition-colors"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            Call Us Now
          </Link>
        </motion.div>

        {/* Trust Signals */}
        <motion.p
          variants={itemVariants}
          className="mt-8 sm:mt-12
                     text-xs sm:text-sm md:text-base
                     text-gray-600 text-center"
        >
          ✓ 50+ Projects Delivered &nbsp;|&nbsp; ✓ 7 Years Experience &nbsp;|&nbsp;
          ✓ 120+ Happy Clients &nbsp;|&nbsp; ✓ 24/7 Support
        </motion.p>
      </motion.div>
    </section>
  );
}

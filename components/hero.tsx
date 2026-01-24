"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ParticleBackground from "@/components/particle-background";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
} as const;

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center pt-24 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Subtle gradient accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 right-12 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-12 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Location */}
        <motion.span
          variants={itemVariants}
          className="inline-block text-sm font-medium text-orange-500 mb-6 tracking-wide"
        >
          Digital Growth Partner • In Rishikesh, India
        </motion.span>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 text-balance"
        >
          Building High-Impact Digital Experiences
          <br />
          <span className="text-blue-500">That Rank, Scale & Automate</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Strategic SEO-first architecture, performance-driven web systems, and
          intelligent automation — built for businesses that want long-term
          visibility, efficiency, and measurable growth.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700 font-medium group transition-colors duration-300"
          >
            <Link
              href="https://wa.me/918126006791"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          {/* <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 font-medium bg-transparent
             hover:bg-orange-500 hover:text-white hover:border-orange-500
             transition-colors duration-300"
          >
            <Link href="/work">What We Do</Link>
          </Button> */}
        </motion.div>
      </motion.div>
    </section>
  );
}

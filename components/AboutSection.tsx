"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export default function AboutSection() {
  return (
    <section
      id="section-about"
      className="relative bg-[#212121] text-white py-24 overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        {/* Image */}
        <motion.div variants={fadeLeft} className="relative">
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
          <Image
            src="/images/misc/laptop.png"
            alt="Creative Work Setup"
            width={520}
            height={420}
            className="relative z-10 w-full h-auto object-contain"
            priority
          />
        </motion.div>

        {/* Content */}
        <motion.div variants={fadeRight} className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            We build{" "}
            <span className="relative text-primary">
              creative
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary/60" />
            </span>{" "}
            digital works.
            <br />
            Ready to help you grow.
          </h2>

          <p className="text-white/70 text-base leading-relaxed max-w-xl">
            We craft high-performance digital products focused on clarity,
            scalability, and automation. From strategy to execution, we help
            brands stand out, rank higher, and operate smarter.
          </p>

          <div className="pt-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition"
            >
              See Our Work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

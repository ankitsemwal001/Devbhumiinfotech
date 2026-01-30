'use client'

import Link from 'next/link'
import { motion, cubicBezier } from 'framer-motion'
import { ArrowRight, Code, Brain, TrendingUp } from 'lucide-react'

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: cubicBezier(0.25, 0.46, 0.45, 0.94), // Fixed TS error
      },
    },
  }

  const services = [
    {
      icon: TrendingUp,
      title: 'Digital Marketing & SEO',
      description:
        'Data-driven strategies, on-page & off-page SEO, Google Ads, and performance marketing to boost your online visibility and growth.',
    },
    {
      icon: Code,
      title: 'Web Design & Development',
      description:
        'Beautiful, fast-loading, mobile-first websites, e-commerce stores, and custom web applications built for performance & conversions.',
    },
    {
      icon: Brain,
      title: 'AI Automation Solutions',
      description:
        'Intelligent chatbots, workflow automation, AI-powered tools, and custom solutions to save time and scale your business operations.',
    },
  ]

  return (
    <section id="services" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/60 dark:bg-blue-900/20 border border-blue-200/60 dark:border-blue-800/40 mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
            <p className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">
              Our Core Services
            </p>
          </div>

          
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Our <span className="text-orange-600"> Digital Solution</span> Services
            </h2>

          <p className="text-base sm:text-lg text-foreground/70 max-w-3xl mx-auto">
            We help businesses in Rishikesh, Uttarakhand & beyond grow with modern websites, powerful SEO, and smart automation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-card border border-border rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="bg-blue-600 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-foreground/70 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-300 group-hover:translate-x-1"
                  >
                    Explore More
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
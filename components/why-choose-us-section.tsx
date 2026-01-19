'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export function WhyChooseUsSection() {
  const reasons = [
    {
      title: 'Result-Driven Strategy',
      description: 'Every project is guided by clear KPIs and measurable business objectives.',
    },
    {
      title: 'Automation-First Approach',
      description: 'We automate repetitive tasks so your team focuses on strategic growth.',
    },
    {
      title: 'SEO-Optimized Development',
      description: 'Every website we build is built from the ground up with SEO best practices.',
    },
    {
      title: 'Scalable & Secure Solutions',
      description: 'Modern architecture that grows with your business while maintaining security.',
    },
    {
      title: 'Dedicated Support',
      description: 'Ongoing partnership and support to ensure continuous optimization and growth.',
    },
    {
      title: 'Local + Global Expertise',
      description: 'Deep understanding of local markets combined with global best practices.',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Devbhomi Infotech</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We combine strategy, creativity, and technology to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reasons.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-accent mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

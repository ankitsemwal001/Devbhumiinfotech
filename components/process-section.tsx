'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, Palette, Zap, Rocket } from 'lucide-react'

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

export function ProcessSection() {
  const steps = [
    {
      number: '01',
      label: 'Discovery',
      icon: Search,
      description: 'We understand your business goals, challenges, and target audience deeply.',
    },
    {
      number: '02',
      label: 'Strategy',
      icon: Lightbulb,
      description: 'Create a comprehensive roadmap with clear KPIs and actionable strategies.',
    },
    {
      number: '03',
      label: 'Design & Build',
      icon: Palette,
      description: 'Craft stunning designs and develop scalable solutions that convert.',
    },
    {
      number: '04',
      label: 'Automation & SEO',
      icon: Zap,
      description: 'Optimize for search engines and automate workflows for efficiency.',
    },
    {
      number: '05',
      label: 'Launch & Scale',
      icon: Rocket,
      description: 'Deploy, monitor, and continuously improve for maximum growth.',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Process</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A proven methodology designed to deliver results at every stage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 text-center h-full flex flex-col justify-between hover:from-primary/15 hover:to-accent/15 transition-all duration-300"
                >
                  <div>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4 mx-auto">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{step.number}</div>
                    <p className="font-semibold text-foreground mb-3">{step.label}</p>
                    <p className="text-sm text-foreground/70">{step.description}</p>
                  </div>
                </motion.div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-y-1/2"></div>
                )}
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

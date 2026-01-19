'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Brain, TrendingUp } from 'lucide-react'

export function ServicesSection() {
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

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Core Services</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive solutions to accelerate your digital transformation journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingUp,
              title: 'Digital Marketing & SEO',
              description:
                'Drive growth with data-driven strategies, SEO optimization, and performance marketing campaigns.',
            },
            {
              icon: Code,
              title: 'Web Design & Development',
              description:
                'Custom websites, landing pages, and full-stack development built for performance and conversion.',
            },
            {
              icon: Brain,
              title: 'AI Automation Solutions',
              description:
                'Smart chatbots, workflow automation, and AI-powered tools to streamline your business operations.',
            },
          ].map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-foreground/70 mb-6">{service.description}</p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Explore More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

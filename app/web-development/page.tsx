"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Code2, Smartphone, Zap, Lock, BarChart3, RefreshCw } from "lucide-react"

export default function WebDevelopment() {
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
        ease: "easeOut",
      },
    },
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block text-purple-600 font-bold text-sm mb-6 bg-purple-100 px-4 py-2 rounded-full">
              Web Solutions & Development
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6 text-balance leading-tight"
          >
            Build Powerful <span className="text-purple-600">Web Experiences</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Custom websites, landing pages, and full-stack applications built with modern technology, optimized for performance, and designed to convert.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-purple-600 text-white hover:bg-purple-700 text-base font-bold rounded-lg"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-purple-600 text-white hover:bg-purple-700 text-base font-bold rounded-lg"
            >
              <Link href="#services">Explore Solutions</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Modern Technology Stack</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Built with the latest frameworks and technologies for performance, scalability, and security
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Frontend Development",
                tech: ["React / Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
              },
              {
                icon: Code2,
                title: "Backend Development",
                tech: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
              },
              {
                icon: Lock,
                title: "Security & Performance",
                tech: ["SSL/TLS", "CDN", "Database Optimization", "API Security"],
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <Icon className="w-12 h-12 text-purple-600 mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <div className="space-y-2">
                    {item.tech.map((t, i) => (
                      <p key={i} className="text-gray-700 font-medium flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                        {t}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Web Development Services</h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "Custom Website Design & Development",
                description: "Bespoke websites tailored to your brand and business requirements with SEO-first approach",
              },
              {
                title: "E-Commerce Solutions",
                description: "Scalable online stores with payment processing, inventory management, and marketing integration",
              },
              {
                title: "Web Application Development",
                description: "Complex applications and SaaS solutions built with scalability and user experience in mind",
              },
              {
                title: "Landing Page Development",
                description: "High-converting landing pages optimized for lead generation and customer acquisition",
              },
              {
                title: "Website Maintenance & Support",
                description: "Ongoing support, updates, security patches, and performance optimization",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border-2 border-purple-200 rounded-2xl p-10 hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-lg text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What We Build Into Every Project</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Mobile Responsive",
                description: "Perfect experience on all devices and screen sizes",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized for speed with loading times under 2 seconds",
              },
              {
                icon: BarChart3,
                title: "SEO Optimized",
                description: "Built-in SEO best practices for better search rankings",
              },
              {
                icon: Lock,
                title: "Secure & Safe",
                description: "Enterprise-grade security and data protection",
              },
              {
                icon: RefreshCw,
                title: "Easy to Maintain",
                description: "Clean code and documentation for future updates",
              },
              {
                icon: Code2,
                title: "Scalable Architecture",
                description: "Grows with your business as traffic increases",
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-6"
                >
                  <Icon className="w-10 h-10 text-purple-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Something Amazing?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your web project and create a solution that exceeds your expectations.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-50 font-bold text-base">
              <Link href="/contact">Get Your Free Estimate</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </>
  )
}

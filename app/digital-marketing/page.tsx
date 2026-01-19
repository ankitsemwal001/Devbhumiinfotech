"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { TrendingUp, Target, BarChart3, Search, Zap, Users } from "lucide-react"

export default function DigitalMarketing() {
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
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block text-emerald-600 font-bold text-sm mb-6 bg-emerald-100 px-4 py-2 rounded-full">
              Digital Marketing Excellence
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6 text-balance leading-tight"
          >
            Drive Growth with <span className="text-blue-600">Data-Driven Marketing</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Strategic SEO, performance marketing, and digital campaigns designed to boost your visibility, attract qualified leads, and accelerate business growth.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 text-base font-bold rounded-lg"
            >
              <Link href="/contact">Start Your Campaign</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 text-base font-bold rounded-lg"
            >
              <Link href="#services">Explore Services</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Digital Marketing Matters */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Digital Marketing Matters</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              In today's digital landscape, your online presence directly impacts your business success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Targeted Reach",
                description: "Reach the right audience at the right time with precision-targeted campaigns",
              },
              {
                icon: BarChart3,
                title: "Measurable Results",
                description: "Track every metric that matters with detailed analytics and reporting",
              },
              {
                icon: TrendingUp,
                title: "Sustainable Growth",
                description: "Build long-term visibility and consistent traffic to your business",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <Icon className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Digital Marketing Services</h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "SEO (Search Engine Optimization)",
                description: "Improve your organic visibility and rank higher on Google for keywords that drive real business value",
                services: ["Technical SEO", "On-Page Optimization", "Link Building", "Local SEO"],
              },
              {
                title: "Performance Marketing",
                description: "Pay for results with targeted PPC campaigns that convert browsers into customers",
                services: ["Google Ads", "Facebook & Instagram Ads", "Retargeting Campaigns", "Conversion Optimization"],
              },
              {
                title: "Content Marketing",
                description: "Create valuable content that attracts, engages, and converts your target audience",
                services: ["Blog Writing", "Video Content", "Email Marketing", "Social Media Strategy"],
              },
              {
                title: "Analytics & Reporting",
                description: "Understand your performance with comprehensive analytics dashboards and monthly reports",
                services: ["GA4 Setup", "Custom Dashboards", "Monthly Reports", "Competitor Analysis"],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border-2 border-blue-200 rounded-2xl p-10 hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-3">
                  {service.services.map((svc, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      {svc}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-xl text-gray-700">See what we've achieved for our clients</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "250%", label: "Average Traffic Growth", color: "bg-blue-100" },
              { metric: "45%", label: "Average Conversion Increase", color: "bg-emerald-100" },
              { metric: "3.5x", label: "Average ROI Improvement", color: "bg-amber-100" },
            ].map((result, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${result.color} rounded-2xl p-10 text-center`}
              >
                <p className="text-5xl font-black text-gray-900 mb-2">{result.metric}</p>
                <p className="text-lg font-semibold text-gray-700">{result.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Boost Your Digital Presence?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your marketing goals and create a custom strategy to achieve them.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-base">
              <Link href="/contact">Get Free Strategy Session</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </>
  )
}

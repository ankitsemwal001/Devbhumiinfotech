"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Brain, Zap, Users, Clock, TrendingUp, Shield } from "lucide-react"

export default function AIAutomation() {
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
      <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block text-emerald-600 font-bold text-sm mb-6 bg-emerald-100 px-4 py-2 rounded-full">
              AI-Powered Automation
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6 text-balance leading-tight"
          >
            Automate Your Business with <span className="text-emerald-600">Intelligent AI</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Smart chatbots, workflow automation, and AI-powered tools that streamline operations, reduce costs, and let your team focus on what matters most.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 text-white hover:bg-emerald-700 text-base font-bold rounded-lg"
            >
              <Link href="/contact">Explore AI Solutions</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 text-white hover:bg-emerald-700 text-base font-bold rounded-lg"
            >
              <Link href="#services">View Use Cases</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Impact of AI Automation</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Real results from AI integration across industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                stat: "70%",
                label: "Time Saved",
                description: "Reduce manual task time and increase team productivity",
              },
              {
                icon: TrendingUp,
                stat: "40%",
                label: "Cost Reduction",
                description: "Lower operational costs through intelligent automation",
              },
              {
                icon: Users,
                stat: "24/7",
                label: "Availability",
                description: "Always-on customer support and services",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-2xl p-8 hover:shadow-xl transition-all text-center"
                >
                  <Icon className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
                  <p className="text-5xl font-black text-emerald-600 mb-2">{item.stat}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.label}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* AI Solutions */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">AI & Automation Solutions</h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "AI Chatbots & Virtual Assistants",
                description: "Intelligent chatbots that handle customer inquiries, provide support 24/7, and qualify leads automatically",
                examples: ["Customer Support", "Lead Qualification", "FAQ Automation", "Multi-language Support"],
              },
              {
                title: "Workflow Automation",
                description: "Automate repetitive business processes to save time, reduce errors, and improve efficiency",
                examples: ["Data Processing", "Email Automation", "Lead Nurturing", "Invoice Management"],
              },
              {
                title: "AI Content Generation",
                description: "Generate high-quality content, product descriptions, and marketing copy at scale with AI",
                examples: ["Blog Writing", "Social Posts", "Email Campaigns", "Product Descriptions"],
              },
              {
                title: "Predictive Analytics",
                description: "Use AI to predict trends, customer behavior, and business outcomes for better decision-making",
                examples: ["Sales Forecasting", "Customer Churn Prediction", "Market Analysis", "Trend Detection"],
              },
            ].map((solution, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border-2 border-emerald-200 rounded-2xl p-10 hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-lg text-gray-700 mb-6">{solution.description}</p>
                <div className="flex flex-wrap gap-3">
                  {solution.examples.map((example, i) => (
                    <span
                      key={i}
                      className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our AI Implementation Process</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "1", title: "Assessment", description: "Identify automation opportunities and AI use cases" },
              { number: "2", title: "Planning", description: "Design solution architecture and integration plan" },
              { number: "3", title: "Development", description: "Build and train AI models and automation systems" },
              { number: "4", title: "Optimization", description: "Monitor, improve, and scale based on results" },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-xl p-6 text-center hover:shadow-lg transition-all"
              >
                <p className="text-4xl font-black text-emerald-600 mb-2">{step.number}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us for AI Automation</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Brain,
                title: "Cutting-Edge AI Technology",
                description: "Latest LLMs and AI models integrated with your business systems",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Data privacy, security compliance, and ethical AI practices",
              },
              {
                icon: Users,
                title: "Expert Implementation",
                description: "Experienced team with proven track record in AI automation",
              },
              {
                icon: TrendingUp,
                title: "Measurable ROI",
                description: "Clear metrics and continuous optimization for maximum returns",
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white border-2 border-emerald-200 rounded-xl p-8 hover:shadow-lg transition-all"
                >
                  <Icon className="w-10 h-10 text-emerald-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Unlock AI Potential?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's explore how AI automation can transform your business and drive growth.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 font-bold text-base">
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </>
  )
}

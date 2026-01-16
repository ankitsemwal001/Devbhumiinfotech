"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Code, Brain, TrendingUp, CheckCircle } from "lucide-react"

function AnimatedCounter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = target / (duration * 60)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [target, duration])

  return <span className="text-4xl font-bold text-primary">{count}+</span>
}

export default function Home() {
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
      <section className="min-h-screen bg-background flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradient accent */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Heading */}
          <motion.div variants={itemVariants}>
            <span className="inline-block text-primary font-semibold text-sm mb-6">Your Digital Growth Partner</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight"
          >
            Grow Your Business with Modern <span className="text-primary">Digital Solutions</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Strategic digital marketing, custom web development, and AI automation solutions designed to accelerate your
            growth and drive real results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold"
            >
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base font-semibold border-2 hover:bg-primary/5 bg-transparent"
            >
              <Link href="#services">View Services</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="bg-secondary/50 py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 150, label: "Projects Delivered" },
              { value: 120, label: "Happy Clients" },
              { value: 8, label: "Years of Experience" },
              { value: 75, label: "Automation Solutions" },
            ].map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <AnimatedCounter target={stat.value} />
                <p className="text-foreground/70 mt-3 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Core Services Section */}
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
                title: "Digital Marketing & SEO",
                description:
                  "Drive growth with data-driven strategies, SEO optimization, and performance marketing campaigns.",
              },
              {
                icon: Code,
                title: "Web Design & Development",
                description:
                  "Custom websites, landing pages, and full-stack development built for performance and conversion.",
              },
              {
                icon: Brain,
                title: "AI Automation Solutions",
                description:
                  "Smart chatbots, workflow automation, and AI-powered tools to streamline your business operations.",
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

      {/* Why Choose Devbhomi */}
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
            {[
              {
                title: "Result-Driven Strategy",
                description: "Every project is guided by clear KPIs and measurable business objectives.",
              },
              {
                title: "Automation-First Approach",
                description: "We automate repetitive tasks so your team focuses on strategic growth.",
              },
              {
                title: "SEO-Optimized Development",
                description: "Every website we build is built from the ground up with SEO best practices.",
              },
              {
                title: "Scalable & Secure Solutions",
                description: "Modern architecture that grows with your business while maintaining security.",
              },
              {
                title: "Dedicated Support",
                description: "Ongoing partnership and support to ensure continuous optimization and growth.",
              },
              {
                title: "Local + Global Expertise",
                description: "Deep understanding of local markets combined with global best practices.",
              },
            ].map((item, index) => (
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

      {/* Process Section */}
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

          <div className="grid md:grid-cols-5 gap-4 md:gap-0">
            {[
              { number: "01", label: "Discovery" },
              { number: "02", label: "Strategy" },
              { number: "03", label: "Design & Build" },
              { number: "04", label: "Automation & SEO" },
              { number: "05", label: "Launch & Scale" },
            ].map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                <div className="bg-primary/10 rounded-lg p-6 text-center hover:bg-primary/15 transition-colors">
                  <div className="text-4xl font-bold text-primary mb-2">{step.number}</div>
                  <p className="font-semibold text-foreground">{step.label}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-primary/20 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* AI & Automation Highlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center">
            <Zap className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-foreground mb-6">AI & Automation at Scale</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your business operations with intelligent automation. From AI chatbots handling customer
              inquiries to workflow automation reducing manual tasks, we help you work smarter and faster.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold"
            >
              <Link href="/contact">Explore AI Solutions</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Latest Insights</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Stay updated with the latest trends and best practices in digital marketing and development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                category: "SEO",
                title: "Complete Guide to Technical SEO in 2026",
                excerpt: "Master the fundamentals of technical SEO and boost your website's search visibility.",
                image: "/technical-seo-guide.jpg",
              },
              {
                category: "AI",
                title: "How AI Chatbots Transform Customer Support",
                excerpt:
                  "Discover how intelligent chatbots can reduce support costs while improving customer satisfaction.",
                image: "/ai-chatbots-customer-support.jpg",
              },
              {
                category: "Web Dev",
                title: "Building Scalable Web Applications",
                excerpt: "Best practices for architecting web applications that can scale with your business growth.",
                image: "/scalable-web-applications-architecture.jpg",
              },
            ].map((blog, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="h-48 overflow-hidden bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                    {blog.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{blog.title}</h3>
                  <p className="text-foreground/70 mb-4">{blog.excerpt}</p>
                  <Link
                    href="/blogs"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 text-base font-semibold hover:bg-primary/5 bg-transparent"
            >
              <Link href="/blogs">View All Articles</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's work together to achieve your digital growth goals. Get started with a free consultation today.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-base font-semibold">
              <Link href="/contact">Start Your Journey</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </>
  )
}

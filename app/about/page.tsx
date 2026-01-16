"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Award, Users, Lightbulb, Heart } from "lucide-react"

export default function About() {
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
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight"
          >
            About Devbhomi <span className="text-primary">Infotech</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
          >
            A forward-thinking IT solutions company dedicated to transforming businesses through strategic digital
            solutions and innovative technology.
          </motion.p>
        </motion.div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Founded with a mission to bridge the gap between businesses and technology, Devbhomi Infotech emerged
                from the belief that every organization, regardless of size, deserves access to world-class digital
                solutions.
              </p>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                What started as a small team of passionate developers and digital strategists has grown into a
                full-service agency serving diverse industries. Our journey has been defined by our commitment to
                delivering exceptional results and building lasting partnerships with our clients.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Today, we're proud to be recognized as a trusted partner for businesses looking to accelerate their
                digital transformation and achieve sustainable growth.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="relative h-80 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg"></div>
              <div className="absolute inset-4 bg-background rounded-lg border-2 border-primary/30 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-24 h-24 text-primary/50 mx-auto mb-4" />
                  <p className="text-foreground/50 text-sm">Est. 2017</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Vision & Mission</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Our Vision",
                description:
                  "To be the most trusted and innovative technology partner for businesses seeking to achieve digital excellence and sustainable growth in an increasingly connected world.",
              },
              {
                icon: Heart,
                title: "Our Mission",
                description:
                  "To empower businesses with cutting-edge digital solutions, strategic insights, and dedicated support that drive measurable results and create lasting value.",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-lg p-10 hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-foreground/70 text-lg leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Approach</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We combine strategic thinking, technical expertise, and creative innovation to deliver solutions that
              drive real business results.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "Deep Understanding",
                description:
                  "We invest time to understand your business goals, target audience, and competitive landscape before crafting solutions.",
              },
              {
                number: "02",
                title: "Data-Driven Strategy",
                description:
                  "Every decision is backed by research, analytics, and proven methodologies that maximize ROI and minimize risk.",
              },
              {
                number: "03",
                title: "Innovative Execution",
                description:
                  "We leverage latest technologies and best practices to build solutions that are not just effective but also future-proof.",
              },
              {
                number: "04",
                title: "Continuous Optimization",
                description:
                  "We monitor performance, gather insights, and continuously optimize your solutions for better results over time.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-6 bg-background p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-primary/10">
                    <span className="text-2xl font-bold text-primary">{item.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why We Exist */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center">
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-foreground mb-6">Why We Exist</h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              We exist because we believe that technology should be a force for growth and empowerment. Every business,
              from startups to enterprises, deserves access to world-class digital solutions without the complexity or
              inflated costs. Our mission is to democratize digital excellence and help businesses of all sizes compete
              and thrive in the digital economy. We're not just building software or running campaigns; we're
              partnerships builders committed to your long-term success.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              These values guide every decision we make and every project we undertake
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Integrity", description: "Transparent, honest, and ethical in all our dealings" },
              { title: "Excellence", description: "Committed to delivering the highest quality work" },
              { title: "Innovation", description: "Always seeking better solutions and newer approaches" },
              { title: "Collaboration", description: "Working closely with clients as true partners" },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-background border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-foreground/70 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Talented professionals united by a passion for digital excellence and client success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { role: "Strategy & Leadership", count: "8+", description: "Years of digital expertise" },
              { role: "Developers & Engineers", count: "25+", description: "Full-stack technical talent" },
              { role: "Designers & Creatives", count: "15+", description: "Creative excellence" },
              { role: "Support & Success", count: "10+", description: "Dedicated team members" },
            ].map((team, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-primary/10 rounded-lg p-8 text-center border border-primary/20 hover:bg-primary/15 transition-colors"
              >
                <p className="text-sm text-primary/70 mb-2 font-semibold uppercase">{team.role}</p>
                <p className="text-4xl font-bold text-primary mb-3">{team.count}</p>
                <p className="text-foreground/70 text-sm">{team.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's connect and discuss how we can help achieve your business
            goals.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-base font-semibold">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </>
  )
}

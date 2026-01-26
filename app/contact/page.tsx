"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      })
      setSubmitted(false)
    }, 3000)
  }

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
            Get in <span className="text-primary">Touch</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
          >
            Have a question or ready to discuss your digital transformation? We'd love to hear from you. Let's connect
            and explore how we can help your business thrive.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            {[
              {
                icon: Mail,
                title: "Email",
                details: ["hello@devbhomi.com", "support@devbhomi.com"],
              },
              {
                icon: Phone,
                title: "Phone",
                details: ["+91 (999) 123-4567", "Mon - Fri, 9AM - 6PM IST"],
              },
              {
                icon: MapPin,
                title: "Location",
                details: ["Rishikesh, Uttarakhand", "India"],
              },
            ].map((contact, index) => {
              const Icon = contact.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow text-center"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{contact.title}</h3>
                  <div className="space-y-1">
                    {contact.details.map((detail, i) => (
                      <p key={i} className="text-foreground/70">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Hours */}
          <motion.div
            variants={itemVariants}
            className="bg-secondary/50 rounded-lg p-8 border border-border mb-16 max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Business Hours</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-foreground/70">
              <div>
                <p className="font-semibold mb-2">Monday - Friday</p>
                <p>9:00 AM - 6:00 PM IST</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Saturday & Sunday</p>
                <p>By Appointment Only</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Send us a Message</h2>
            <p className="text-lg text-foreground/70">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              variants={itemVariants}
              className="bg-green-50 border-2 border-green-200 rounded-lg p-12 text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h3>
              <p className="text-green-800 max-w-md mx-auto">
                Your message has been received. We'll review it and get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              variants={itemVariants}
              className="bg-background rounded-lg border border-border p-8"
            >
              {/* Name Fields */}
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-foreground mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-foreground mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-3">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+91 (999) 123-4567"
                  />
                </div>
              </div>

              {/* Company & Subject */}
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-3">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-3">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="web-development">Web Development</option>
                    <option value="ai-automation">AI Automation</option>
                    <option value="seo">SEO Services</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </motion.form>
          )}
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-foreground/70">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "What is your typical project timeline?",
                answer:
                  "Project timelines vary based on scope and complexity. Most projects take 2-12 weeks from initial planning to launch. We provide detailed timelines during the discovery phase.",
              },
              {
                question: "Do you offer ongoing support after launch?",
                answer:
                  "Yes, we offer various support packages including maintenance, updates, performance monitoring, and continuous optimization.",
              },
              {
                question: "What is your pricing model?",
                answer:
                  "We offer flexible pricing based on your project requirements. This includes fixed-price projects, hourly rates, and retainer-based services.",
              },
              {
                question: "Can you work with existing websites or systems?",
                answer:
                  "Absolutely. We can integrate with existing systems, migrate data, and enhance or rebuild current websites as needed.",
              },
              {
                question: "Do you provide reports and analytics?",
                answer:
                  "Yes, we provide regular reports and dashboards showing key metrics, performance indicators, and ROI for all digital initiatives.",
              },
              {
                question: "How do we get started?",
                answer:
                  "Contact us through this form or call us directly. We'll schedule a free consultation to understand your needs and discuss how we can help.",
              },
            ].map((faq, index) => (
              <motion.details
                key={index}
                variants={itemVariants}
                className="bg-card border border-border rounded-lg overflow-hidden group"
              >
                <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-secondary/50 transition-colors flex justify-between items-center">
                  {faq.question}
                  <span className="text-primary group-open:rotate-180 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-4 text-foreground/70 bg-secondary/20">{faq.answer}</div>
              </motion.details>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't hesitate to reach out. Our team is here to help you achieve your digital goals.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8" size="lg">
              Start Free Consultation
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 bg-transparent"
              size="lg"
            >
              Schedule a Call
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <footer />
    </>
  )
}

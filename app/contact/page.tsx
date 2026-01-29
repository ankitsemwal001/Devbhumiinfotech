"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Head from "next/head";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
} as const;

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

 return (
    <>
      <Head>
        {/* Primary Meta Tags – SEO optimized for high-intent searches */}
        <title>Contact Us | Best SEO Company in Rishikesh - Devbhoomi Infotech</title>
        <meta
          name="description"
          content="Contact the best SEO company in Rishikesh, Uttarakhand. Get expert digital marketing, website development, AI automation & Google ranking services. Free consultation | Fast response in 4-6 hours | Devbhoomi Infotech."
        />
        <meta
          name="keywords"
          content="best SEO company in Rishikesh, SEO services Rishikesh, digital marketing agency Rishikesh, website design Rishikesh, SEO company Uttarakhand, local SEO Rishikesh, grow business online Rishikesh, Devbhoomi Infotech"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://www.devbhoomiinfotech.com/contact" />

        {/* Open Graph – Facebook, LinkedIn, WhatsApp */}
        <meta property="og:title" content="Contact Devbhoomi Infotech - Best SEO & Digital Marketing Company in Rishikesh" />
        <meta
          property="og:description"
          content="Ready to grow your Rishikesh business online? Contact us for top SEO services, website development, and digital marketing solutions. Free 30-min consultation. Fast reply!"
        />
        <meta property="og:image" content="https://www.devbhoomiinfotech.com/og-image-contact.jpg" /> {/* Replace with your actual OG image URL */}
        <meta property="og:url" content="https://www.devbhoomiinfotech.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Devbhoomi Infotech" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter / X Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Best SEO Company in Rishikesh | Devbhoomi Infotech" />
        <meta
          name="twitter:description"
          content="Contact Devbhoomi Infotech – top digital marketing & SEO agency in Rishikesh. Get your free consultation today!"
        />
        <meta name="twitter:image" content="https://www.devbhoomiinfotech.com/og-image-contact.jpg" /> {/* Same as OG image */}

        {/* Geo / Local SEO signals */}
        <meta name="geo.region" content="IN-UT" />
        <meta name="geo.placename" content="Rishikesh" />
        <meta name="geo.position" content="30.1187451;78.2194596" /> {/* Approx from your iframe – update if exact */}
        <meta name="ICBM" content="30.1187451, 78.2194596" />

        {/* Viewport & other basics */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />

      {/* Hero Section */}
    <section className="relative h-96 md:h-[450px] w-full overflow-hidden bg-gradient-to-r from-teal-800/90 to-teal-950/90">
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Floating abstract shapes - Bottom Left */}
  <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 pointer-events-none z-0 opacity-40 md:opacity-50">
    <div className="absolute bottom-6 left-6 w-20 h-20 md:w-32 md:h-32 bg-orange-400/20 rounded-full animate-float-slow blur-xl"></div>
    <div className="absolute bottom-12 left-20 w-16 h-16 md:w-24 md:h-24 bg-teal-300/30 rounded-xl rotate-45 animate-float-medium"></div>
    <div className="absolute bottom-4 left-32 w-24 h-24 md:w-36 md:h-36 border-2 border-white/30 rounded-full animate-pulse-slow"></div>
  </div>

  {/* Floating abstract shapes - Bottom Right */}
  <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 pointer-events-none z-0 opacity-40 md:opacity-50">
    <div className="absolute bottom-8 right-8 w-24 h-24 md:w-40 md:h-40 bg-teal-400/15 rounded-full animate-float-medium blur-lg"></div>
    <div className="absolute bottom-16 right-20 w-20 h-20 md:w-28 md:h-28 bg-orange-300/25 rounded-3xl -rotate-12 animate-float-slow"></div>
    <div className="absolute bottom-6 right-32 w-16 h-16 md:w-24 md:h-24 border border-white/40 rounded-full animate-pulse"></div>
  </div>

  {/* Main content */}
  <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6 sm:px-8">

    {/* H1 – SEO focused */}
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 drop-shadow-xl">
      Contact Us  DevBhoomi Infotech
    </h1>

    {/* Sub-heading */}
    <p className="text-xl md:text-2xl font-bold text-orange-300/95 tracking-wide mb-6 drop-shadow-lg">
      Professional Website Design & Development Services in Rishikesh, Uttarakhand
    </p>

    {/* Description */}
    <p className="text-base md:text-lg text-gray-100 max-w-3xl mb-8 leading-relaxed font-light drop-shadow-md">
      Looking for a reliable website design company in Rishikesh, Uttarakhand?
      Devbhoomi Infotech offers custom website design, responsive web development
      and SEO-friendly solutions to help your business grow online.
    </p>

    {/* Breadcrumb */}
    <nav aria-label="Breadcrumb" className="text-sm md:text-base text-gray-300/90">
      <ol className="flex flex-wrap items-center justify-center gap-2.5">
        <li>
          <a
            href="https://www.devbhoomiinfotech.com/"
            className="hover:text-orange-400 transition-colors font-medium"
          >
            Dev-Bhoomi Infotech
          </a>
        </li>
        <li className="text-gray-200">›</li>
        <li className="text-orange-400 font-semibold">Contact Us</li>
      </ol>
    </nav>

  </div>
</section>


      {/* Contact Form + Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start"
          >
            {/* LEFT COLUMN - Benefits, Trust, What happens next */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 space-y-10"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                  Let's Start Your Digital Journey
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Whether you're looking for a stunning website, better Google rankings, AI automation, or complete digital marketing — we're here to help your Rishikesh business grow online.
                </p>

                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span>Most inquiries answered within <strong>4–6 hours</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span>Free 30-min consultation for serious projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span>100% confidential — your idea stays yours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span>Transparent pricing — no hidden charges</span>
                  </li>
                </ul>
              </div>
              <div className="text-gray-700 text-sm leading-relaxed">
                <p className="font-medium mb-2">What happens after you send the form?</p>
                <ol className="list-decimal pl-5 space-y-1.5">
                  <li>You'll get an auto-reply confirmation</li>
                  <li>We'll review your requirements same day (usually)</li>
                  <li>Schedule a quick call / send proposal</li>
                  <li>Start building your growth plan!</li>
                </ol>
              </div>
            </motion.div>

            {/* RIGHT COLUMN - Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              {submitted ? (
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center min-h-[620px]">
                  <CheckCircle className="w-20 h-20 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-blue-900 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-blue-800 max-w-md text-lg">
                    Your message has been sent successfully.<br />
                    We'll get back to you very soon (usually within few hours).
                  </p>
                </div>
              ) : (
                <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-md hover:shadow-xl transition-shadow">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Send Us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Your First Name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Your Last Name"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-orange-500 hover:to-orange-600 text-white font-semibold text-base flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-600">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: "Email Address",
                details: "hello@devbhoomiinfotech.com",
              },
              {
                icon: Phone,
                title: "Phone Number",
                details: "+91 98765 43210",
              },
              {
                icon: MapPin,
                title: "Office Location",
                details: "Rishikesh, Uttarakhand, India",
              },
            ].map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-orange-300 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {contact.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {contact.details}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Map Section */}
 <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
  <motion.div
    className="max-w-7xl mx-auto"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={containerVariants}
  >
    {/* Centered header area */}
    <div className="text-center space-y-4 md:space-y-5 mb-10 lg:mb-12">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/60 dark:bg-blue-900/20 border border-blue-200/60 dark:border-blue-800/40 mx-auto">
        <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
        <p className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">
          Our Location
        </p>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
        Find Us in Rishikesh
      </h2>
    </div>

    <motion.div
      variants={itemVariants}
      className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-96 md:h-[500px] lg:h-[600px]" // optional: taller on larger screens
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31696.304328422886!2d78.2194596!3d30.1187451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093dd61e3f7aab%3A0xe96a10d94d6ffb61!2sDevbhoomi%20Infotech%20-%20Complete%20Digital%20Solutions!5e0!3m2!1sen!2sin!4v1700000000000"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Devbhoomi Infotech - Rishikesh Location"
      />
    </motion.div>
  </motion.div>
</section>

      <Footer />
    </div>
    </>
  );
}
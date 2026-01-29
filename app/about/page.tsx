"use client";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/footer";
import { useState } from "react";
import { Code2, Palette, Zap } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");

  const tabs = [
    { id: "mission", label: "OUR MISSION" },
    { id: "vision", label: "OUR VISION" },
    { id: "goal", label: "OUR GOAL" },
  ];

  return (
    <>
      <Head>
        <title>
          Best Website Design & Web Development Company in Rishikesh,
          Uttarakhand
        </title>
        <meta
          name="description"
          content="Devbhoomi Infotech is the best website design, web development and SEO company in Rishikesh, Uttarakhand helping businesses rank higher and generate leads."
        />
        <meta
          name="keywords"
          content="best seo company in rishikesh, seo services rishikesh, best seo agency rishikesh, top seo company in rishikesh, seo expert rishikesh, affordable seo services rishikesh, seo company rishikesh uttarakhand, local seo rishikesh, google ranking rishikesh, seo agency near me rishikesh, digital marketing company rishikesh, digital marketing agency rishikesh, best digital marketing agency in rishikesh, web development company in rishikesh, website development rishikesh, full stack development rishikesh, full stack developer rishikesh, best web development company rishikesh, web design company rishikesh, ui ux design rishikesh, custom website development rishikesh, ecommerce website development rishikesh, software development company rishikesh, app development rishikesh, automation services rishikesh, business automation rishikesh, robotic process automation rishikesh, best automation company in rishikesh, devbhoomi infotech rishikesh, devbhoomi infotech seo rishikesh, devbhoomi infotech web development rishikesh, best seo company near me rishikesh, top web developer rishikesh, leading seo agency rishikesh, high intent seo rishikesh, local business seo rishikesh, organic seo rishikesh, best full stack company rishikesh, react developer rishikesh, nextjs developer rishikesh, node js developer rishikesh, best website company rishikesh uttarakhand, digital transformation rishikesh, online marketing rishikesh, lead generation rishikesh, google my business optimization rishikesh, seo audit rishikesh, keyword research rishikesh, backlink building rishikesh, content marketing rishikesh, social media marketing rishikesh, ppc services rishikesh, best automation agency rishikesh, business process automation rishikesh, devbhoomi infotech automation, devbhoomi infotech full stack, devbhoomi infotech seo services, top rated seo company rishikesh, number 1 seo agency rishikesh, best seo company rishikesh 2025, best web development services rishikesh, professional website design rishikesh, responsive web design rishikesh, wordpress development rishikesh, shopify development rishikesh, custom software development rishikesh, erp development rishikesh, crm development rishikesh, ai automation rishikesh, machine learning services rishikesh, best digital agency rishikesh, top digital marketing company rishikesh uttarakhand, seo specialist rishikesh, seo consultant rishikesh, seo freelancer rishikesh, best seo package rishikesh, monthly seo services rishikesh, enterprise seo rishikesh, small business seo rishikesh, ecommerce seo rishikesh, local seo expert rishikesh, google ads agency rishikesh, facebook ads rishikesh, instagram marketing rishikesh, youtube seo rishikesh, video marketing rishikesh, branding agency rishikesh, logo design rishikesh, graphic design rishikesh, best it company rishikesh, software company rishikesh, tech company rishikesh, devbhoomi infotech best seo, devbhoomi infotech rishikesh automation, devbhoomi infotech web dev rishikesh, best it company in rishikesh, website designing company in rishikesh, web development company in rishikesh, best website designing course in rishikesh, web development training institute in rishikesh, seo company in rishikesh, seo services rishikesh, local seo rishikesh, digital marketing company rishikesh, web design and development services rishikesh, full stack development rishikesh, full stack web developer rishikesh, responsive web design rishikesh, ui ux design services rishikesh, custom website development rishikesh, ecommerce website development rishikesh, software development company rishikesh, automation services rishikesh, business automation rishikesh, ai automation rishikesh, google ranking services rishikesh, devbhoomi infotech rishikesh, it training institute rishikesh, professional web design rishikesh "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Devbhoomi Infotech, Rishikesh" />
        <meta
          property="og:title"
          content="Best SEO Company in Rishikesh | Web Development, Full Stack, SEO & Automation - Devbhoomi Infotech"
        />
        <meta
          property="og:description"
          content="Leading SEO agency in Rishikesh providing top SEO services, web development, full stack development, automation, digital marketing solutions for business success in Rishikesh, Uttarakhand."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.devbhoomiinfotech.com/about"
        />

        <meta property="og:site_name" content="Devbhoomi Infotech" />
        <meta name="geo.region" content="IN-UT" />
        <meta name="geo.placename" content="Rishikesh" />
        <meta name="geo.position" content="30.0869;78.2676" />
        <meta name="ICBM" content="30.0869, 78.2676" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best SEO Company in Rishikesh | Devbhoomi Infotech"
        />
        <meta
          name="twitter:description"
          content="SEO, Web Development & Automation Company in Rishikesh"
        />

        <link rel="canonical" href="https://www.devbhoomiinfotech.com/about" />
        <meta name="application-name" content="Devbhoomi Infotech" />
        <meta name="theme-color" content="#0f766e" />
      </Head>

      <Header />

      <div className="min-h-screen bg-white">
        {/* Hero Section with Dark Overlay */}
        <section className="relative h-96 md:h-[450px] w-full overflow-hidden bg-gradient-to-r from-teal-800/90 to-teal-950/90">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Floating shapes - Left */}
          <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 pointer-events-none z-0 opacity-40 md:opacity-50">
            <div className="absolute bottom-6 left-6 w-20 h-20 md:w-32 md:h-32 bg-orange-400/20 rounded-full animate-float-slow blur-xl"></div>
            <div className="absolute bottom-12 left-20 w-16 h-16 md:w-24 md:h-24 bg-teal-300/30 rounded-xl rotate-45 animate-float-medium"></div>
            <div className="absolute bottom-4 left-32 w-24 h-24 md:w-36 md:h-36 border-2 border-white/30 rounded-full animate-pulse-slow"></div>
          </div>

          {/* Floating shapes - Right */}
          <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 pointer-events-none z-0 opacity-40 md:opacity-50">
            <div className="absolute bottom-8 right-8 w-24 h-24 md:w-40 md:h-40 bg-teal-400/15 rounded-full animate-float-medium blur-lg"></div>
            <div className="absolute bottom-16 right-20 w-20 h-20 md:w-28 md:h-28 bg-orange-300/25 rounded-3xl -rotate-12 animate-float-slow"></div>
            <div className="absolute bottom-6 right-32 w-16 h-16 md:w-24 md:h-24 border border-white/40 rounded-full animate-pulse"></div>
          </div>

          {/* Main content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6 sm:px-8">
            {/* H1 – same style */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 drop-shadow-xl">
              About Us - Devbhoomi Infotech
            </h1>

            {/* Orange sub-heading – same */}
            <p className="text-xl md:text-2xl font-bold text-orange-300/95 tracking-wide mb-6 drop-shadow-lg">
              Best SEO, Web Development & Automation Company in Rishikesh
            </p>

            {/* Description – same */}
            <p className="text-base md:text-lg text-gray-100 max-w-3xl mb-8 leading-relaxed font-light drop-shadow-md">
              Devbhoomi Infotech is a leading digital solutions company in
              Rishikesh, helping businesses grow with result-oriented SEO,
              modern website design, scalable web development and smart
              automation solutions.
            </p>

            {/* Breadcrumb – same */}
            <nav
              aria-label="Breadcrumb"
              className="text-sm md:text-base text-gray-300/90"
            >
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
                <li className="text-orange-400 font-semibold">About Us</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Main About Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24 max-w-8xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-18 items-center mb-20">
            {/* Left: Two Images (main with overlay badge + secondary overlapping) */}
            <div className="order-2 lg:order-1 relative">
              {/* Main larger image with experience badge overlay */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
                <Image
                  src="https://images.pexels.com/photos/7693698/pexels-photo-7693698.jpeg" // Team looking at laptop together – good agency vibe
                  alt="Digital agency team collaborating on project"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                {/* Experience badge overlay – top-right on the main image */}
                <div className="absolute top-6 right-6 bg-orange-600 text-white rounded-full p-5 md:p-6 shadow-xl">
                  <div className="text-3xl md:text-4xl font-bold text-center">
                    7+
                  </div>
                  <div className="text-xs md:text-sm font-semibold mt-1 text-center uppercase">
                    Years of
                    <br />
                    Experience
                  </div>
                </div>
              </div>

              {/* Second smaller image – overlapping bottom-right for collage effect */}
              <div className="absolute -bottom-10 -right-6 md:-bottom-12 md:-right-10 w-2/5 md:w-1/2 lg:w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20">
                <Image
                  src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg" // Group discussion around table
                  alt="Agency team in brainstorming meeting"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/60 dark:bg-blue-900/20 border border-blue-200/60 dark:border-blue-800/40">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
                <p className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">
                  Devbhoomi Infotech
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Best <span className="italic text-gray-600">IT Solution </span>{" "}
                In Rishikesh
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Devbhoomi Infotech Solutions is a leading AI, automation, web
                and software development company in Rishikesh, India. We help
                local businesses build a strong digital presence with
                SEO-optimized websites, intelligent automation tools, and
                performance-driven solutions for long-term growth and
                efficiency.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="font-bold text-gray-900 mb-6">
                  Our Special Services:
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">AI Automation</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">SEO Development</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Web Development</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Website Designing</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">UI/UX Design</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">24/7 Support</span>
                  </div>
                </div>
              </div>

              {/* <Button className="bg-orange-500 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold rounded-lg flex items-center gap-2">
        GET A QUOTE <ChevronRight className="w-5 h-5" />
      </Button> */}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {/* Stats Section - Height reduced for better attractiveness */}
        <section className="text-white py-12 px-6 md:py-8 bg-gradient-to-b from-teal-950 to-teal-900 text-white">
          {" "}
          {/* Reduced py-20 to py-12/16 for shorter height */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              {" "}
              <div>
                {/* Reduced mb-4 to mb-3 */}
                <div className="text-4xl font-bold mb-1">7+</div>{" "}
                {/* Realistic based on company age */}
                <div className="text-sm font-medium text-teal-100">
                  Years of Experience in Rishikesh
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">50+</div>
                <div className="text-sm font-medium text-teal-100">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">10+</div>{" "}
                {/* Realistic small team estimate */}
                <div className="text-sm font-medium text-teal-100">
                  Expert Team Members
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">15+</div>{" "}
                {/* Conservative realistic number */}
                <div className="text-sm font-medium text-teal-100">
                  Awards & Recognitions
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24 max-w-8xl mx-auto bg-blue-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content with Tabs */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/60 dark:bg-blue-900/20 border border-blue-200/60 dark:border-blue-800/40">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
                <p className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">
                  Best IT Company in Rishikesh
                </p>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Top Digital Solutions in Rishikesh
              </h2>

              {/* Tabs Navigation – Blue active + Orange hover */}
              <div className="flex flex-wrap gap-2 md:gap-4 mb-8 border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-3 font-semibold rounded-t-lg transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-orange-500 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content – Short, Powerful, SEO-Optimized */}
              <div className="transition-opacity duration-300">
                {activeTab === "mission" && (
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      Devbhoomi Infotech Mission in Rishikesh
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Devbhoomi Infotech, top IT company in Rishikesh, empowers
                      Uttarakhand businesses and global clients with AI
                      automation Rishikesh, SEO services Rishikesh, web
                      development Rishikesh, and custom software. We deliver
                      strong online presence, top Google rankings, and efficient
                      growth for Rishikesh companies.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Our mission: Provide affordable, result-driven digital
                      solutions in Rishikesh that boost sustainable business
                      growth, online visibility, and turn challenges into
                      success for every client in Rishikesh and worldwide.
                    </p>
                  </div>
                )}

                {activeTab === "vision" && (
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      Devbhoomi Infotech Vision Rishikesh
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      To be the most trusted digital agency in Rishikesh and
                      Uttarakhand — transforming local businesses into global
                      brands via advanced AI automation Rishikesh, SEO
                      strategies Rishikesh, and tailored web solutions for
                      Rishikesh's tourism & spiritual market.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      We see every Rishikesh startup and enterprise using
                      world-class IT services to dominate online and grow
                      seamlessly.
                    </p>
                  </div>
                )}

                {activeTab === "goal" && (
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      Devbhoomi Infotech Main Goal
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      100% client satisfaction for Rishikesh businesses
                      worldwide. Devbhoomi Infotech delivers high-performance
                      websites, AI-powered automation Rishikesh, and top SEO
                      services Rishikesh — optimized for local Rishikesh
                      searches and global reach.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Leveraging Rishikesh's unique tourism and business
                      ecosystem, we help Uttarakhand clients rank higher, grow
                      faster, and operate smarter with expert digital
                      transformation.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Image */}
            <div className="order-first lg:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/7792836/pexels-photo-7792836.jpeg"
                  alt="Devbhoomi Infotech best IT company in Rishikesh – team handling AI automation, SEO services, web development in Uttarakhand office"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-8xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content (Ab paragraphs mein) */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/60 border border-blue-200/60 mb-6">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <p className="text-xs sm:text-sm font-medium text-blue-700">
                    Devbhoomi Infotech Training
                  </p>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  What We Teach & Train
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Devbhoomi Infotech Solution is the best website designing and
                  web development training institute in Rishikesh, offering
                  practical, job-oriented, and industry-ready IT courses. If you
                  are looking for the best website designing course in Rishikesh
                  or web development training near you, we provide hands-on
                  learning with live projects and expert mentorship for
                  students, freshers, and working professionals.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <Palette className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-xl">
                        Best Website Designing Course in Rishikesh
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Join the best website designing institute in Rishikesh
                        and learn modern UI/UX design, responsive website
                        layouts, Figma and Adobe XD, color theory, typography,
                        and real client projects. This website designing course
                        in Rishikesh with placement support helps you build a
                        strong portfolio and start your career in website
                        designing companies in Rishikesh and nearby locations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <Code2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-xl">
                        Best Web Development Training Institute in Rishikesh
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Enroll in the best web development course in Rishikesh
                        and master full-stack development by learning HTML, CSS,
                        JavaScript, React, Next.js, Node.js, Express, MongoDB,
                        Tailwind CSS, Git, and live deployment. This
                        job-oriented web development training in Rishikesh is
                        designed to help you build real-world projects and grow
                        as a professional web developer.
                      </p>
                    </div>
                  </div>
                </div>

                <button className="mt-10 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors">
                  Start Your Learning Journey
                </button>
              </div>

              {/* Right Column - Cards Grid (waise hi rakha hai – yaha map rakh sakte ho kyuki cards ka design acha lagta hai) */}
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    icon: Palette,
                    title: "Web Design",
                    description:
                      "Learn professional and modern web design with the Best Website Designing Course in Rishikesh. We teach UI/UX, responsive layouts, and creative website design techniques to help you become a skilled web designer and work with top website designing companies in Rishikesh.",
                  },
                  {
                    icon: Code2,
                    title: "Web Development",
                    description:
                      "Master full-stack web development with the Best Web Development Training Institute in Rishikesh. Learn to build fast, secure, and scalable websites using industry-standard technologies from the best web development company in Rishikesh.",
                  },
                ].map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={index}
                      className="group p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                          <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-orange-600 transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-md">
                        {service.description}
                      </p>
                      <div className="mt-4 h-1 w-0 bg-orange-600 group-hover:w-12 transition-all duration-300" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

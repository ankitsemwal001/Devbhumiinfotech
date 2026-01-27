"use client";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/footer";
import { useState } from "react";

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
          Best SEO & Web Development Company in Rishikesh | Devbhoomi Infotech
        </title>
        <meta
          name="description"
          content="Devbhoomi Infotech is the best SEO company in Rishikesh, Uttarakhand offering high-intent SEO services, web development, full stack development, digital marketing, automation solutions, website design, UI/UX, software development & business automation in Rishikesh. Get top Google ranking, lead generation & business growth with the leading SEO agency and web development company in Rishikesh."
        />
        <meta
          name="keywords"
          content="best seo company in rishikesh, seo services rishikesh, best seo agency rishikesh, top seo company in rishikesh, seo expert rishikesh, affordable seo services rishikesh, seo company rishikesh uttarakhand, local seo rishikesh, google ranking rishikesh, seo agency near me rishikesh, digital marketing company rishikesh, digital marketing agency rishikesh, best digital marketing agency in rishikesh, web development company in rishikesh, website development rishikesh, full stack development rishikesh, full stack developer rishikesh, best web development company rishikesh, web design company rishikesh, ui ux design rishikesh, custom website development rishikesh, ecommerce website development rishikesh, software development company rishikesh, app development rishikesh, automation services rishikesh, business automation rishikesh, robotic process automation rishikesh, best automation company in rishikesh, devbhoomi infotech rishikesh, devbhoomi infotech seo rishikesh, devbhoomi infotech web development rishikesh, best seo company near me rishikesh, top web developer rishikesh, leading seo agency rishikesh, high intent seo rishikesh, local business seo rishikesh, organic seo rishikesh, best full stack company rishikesh, react developer rishikesh, nextjs developer rishikesh, node js developer rishikesh, best website company rishikesh uttarakhand, digital transformation rishikesh, online marketing rishikesh, lead generation rishikesh, google my business optimization rishikesh, seo audit rishikesh, keyword research rishikesh, backlink building rishikesh, content marketing rishikesh, social media marketing rishikesh, ppc services rishikesh, best automation agency rishikesh, business process automation rishikesh, devbhoomi infotech automation, devbhoomi infotech full stack, devbhoomi infotech seo services, top rated seo company rishikesh, number 1 seo agency rishikesh, best seo company rishikesh 2025, best web development services rishikesh, professional website design rishikesh, responsive web design rishikesh, wordpress development rishikesh, shopify development rishikesh, custom software development rishikesh, erp development rishikesh, crm development rishikesh, ai automation rishikesh, machine learning services rishikesh, best digital agency rishikesh, top digital marketing company rishikesh uttarakhand, seo specialist rishikesh, seo consultant rishikesh, seo freelancer rishikesh, best seo package rishikesh, monthly seo services rishikesh, enterprise seo rishikesh, small business seo rishikesh, ecommerce seo rishikesh, local seo expert rishikesh, google ads agency rishikesh, facebook ads rishikesh, instagram marketing rishikesh, youtube seo rishikesh, video marketing rishikesh, branding agency rishikesh, logo design rishikesh, graphic design rishikesh, best it company rishikesh, software company rishikesh, tech company rishikesh, devbhoomi infotech best seo, devbhoomi infotech rishikesh automation, devbhoomi infotech web dev rishikesh"
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
        <section className="relative h-96 md:h-[450px] w-full overflow-hidden bg-gradient-to-r from-teal-800/80 to-teal-900/80">
          <Image
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
            alt="Best SEO Company in Rishikesh - Devbhoomi Infotech Team Working Together"
            fill
            className="absolute inset-0 object-cover -z-10"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
              Devbhoomi Infotech - About us
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-orange-300/90">
              Best SEO, Web Development & Automation Company in Rishikesh
            </p>
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
        <section className="bg-teal-600 text-white py-12 px-6 md:py-8">
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
        <section className="py-20 px-6 md:px-12 lg:px-24 max-w-8xl mx-auto">
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
<section className="py-20 px-6 md:px-12 lg:px-24 max-w-8xl mx-auto bg-gray-50">
  {/* Centered Heading */}
  <div className="text-center mb-10">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
      We Teach & Deliver <span className="italic text-teal-600">Top Digital Skills</span> in Rishikesh
    </h2>
  </div>

  {/* Paragraphs */}
  <div className="max-w-6xl mx-auto text-center mb-16">
    <p className="text-gray-700 text-lg leading-relaxed mb-6">
      Devbhoomi Infotech is the leading IT training and service provider in Rishikesh, Uttarakhand. We don't just build — we teach businesses and students how to master <strong>website design Rishikesh</strong>, <strong>website development Rishikesh</strong>, <strong>AI automation Rishikesh</strong>, and <strong>SEO services Rishikesh</strong>. Whether you're a tourism startup, hotel, local shop, student, freelancer or enterprise, we help you learn, implement, and grow with high-performance digital tools that rank on Google, automate tasks, and attract real customers.
    </p>

    <p className="text-gray-700 text-lg leading-relaxed">
      Our expert team provides hands-on training + full project implementation so Rishikesh businesses and individuals become self-reliant while achieving fast, measurable results in today's digital world.
    </p>
  </div>

  {/* 4 Cards in a single row – balanced height & width */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
    {/* Card 1 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col">
      <div className="relative h-60">
        <Image
          src="https://brandpoets.com/wp-content/uploads/2021/03/BP-Responsive-Websites-Palace.jpg"
          alt="Website Design Rishikesh training - responsive modern layouts"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-teal-700 mb-3">Website Design Rishikesh</h3>
        <p className="text-gray-600 text-base leading-relaxed flex-grow">
          Stunning, mobile-first designs with UI/UX focus — beautiful layouts and branding that convert visitors into customers for tourism & local businesses.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col">
      <div className="relative h-60">
        <Image
          src="https://images.pexels.com/photos/34804007/pexels-photo-34804007/free-photo-of-working-on-code-with-laptop-indoors.jpeg"
          alt="Website Development Rishikesh course - coding and frameworks"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-orange-700 mb-3">Website Development Rishikesh</h3>
        <p className="text-gray-600 text-base leading-relaxed flex-grow">
          Custom development with HTML, CSS, JS, PHP, React, Next.js, WordPress — fast, secure, SEO-ready websites that scale perfectly.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col">
      <div className="relative h-60">
        <Image
          src="https://images.pexels.com/photos/32026165/pexels-photo-32026165.jpeg"
          alt="AI Automation Rishikesh training - workflow and bots"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-purple-700 mb-3">AI Automation Rishikesh</h3>
        <p className="text-gray-600 text-base leading-relaxed flex-grow">
          Intelligent workflows, RPA, CRM/ERP bots — save time, reduce errors, and scale operations smartly for local businesses.
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col">
      <div className="relative h-60">
        <Image
          src="https://bytezeroinc.com/wp-content/uploads/2025/08/Gemini_Generated_Image_f6p9vwf6p9vwf6p9-scaled.png"
          alt="SEO Services Rishikesh - ranking growth dashboard"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-green-700 mb-3">SEO Services Rishikesh</h3>
        <p className="text-gray-600 text-base leading-relaxed flex-grow">
          High-intent SEO training & services — local SEO, keyword research, GMB, content & backlinks to get #1 rankings fast.
        </p>
      </div>
    </div>
  </div>
</section>
      </div>
      <Footer />
    </>
  );
}

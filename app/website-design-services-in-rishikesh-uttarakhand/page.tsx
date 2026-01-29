"use client";
import { Header } from "@/components/header";
import Image from "next/image";
import Head from "next/head";
import { ServicesSection } from "@/components/ServicesSection";
import { PackagesSection } from "@/components/packages-section";
import Footer from "@/components/footer";
import { Layout, Code, Zap, Globe, ShoppingCart, RotateCw } from "lucide-react";
import { useState } from "react";
import {
  FaSitemap,
  FaLayerGroup,
  FaUsers,
  FaDesktop,
  FaUpload,
  FaRocket,
  FaGraduationCap,
} from "react-icons/fa";

export default function WebsiteDesign() {
  const [activeTab, setActiveTab] = useState("7");

  const steps = [
    { id: "1", icon: <FaSitemap />, title: "Requirement Gathering" },
    { id: "2", icon: <FaLayerGroup />, title: "Planning Process" },
    { id: "3", icon: <FaUsers />, title: "Designing Process" },
    { id: "4", icon: <FaDesktop />, title: "Development" },
    { id: "5", icon: <FaUpload />, title: "Testing" },
    { id: "6", icon: <FaRocket />, title: "Launch" },
    { id: "7", icon: <FaGraduationCap />, title: "Maintenance & Support" },
  ];

  const contents = {
    "1": (
      <>
        <h3 className="text-3xl font-bold text-blue-700 mb-6">
          Requirement Gathering
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          At <strong>Devbhoomi Infotech</strong>, every website design project
          in Rishikesh starts with detailed requirement gathering. As a
          professional website design company in Rishikesh, we understand your
          business goals, target audience, and exact website features needed for
          growth.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Business analysis for website design in Rishikesh
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Clear documentation of website requirements
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Feature prioritization for faster website launch
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Regular client feedback during discovery
          </li>
        </ul>
      </>
    ),

    "2": (
      <>
        <h3 className="text-3xl font-bold text-blue-700 mb-6">
          Planning Process
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          After requirement analysis, our website design experts in Rishikesh
          create a clear project roadmap. This planning process ensures smooth
          execution, transparency, and on-time delivery of your SEO-friendly
          website.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Website design timeline & milestone planning
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Clear communication throughout the project
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Defined roles for website design & development
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Risk identification for smooth website delivery
          </li>
        </ul>
      </>
    ),

    "3": (
      <>
        <h3 className="text-3xl font-bold text-blue-700 mb-6">
          Designing Process
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Our UI/UX designers create modern, responsive website designs that
          reflect your brand identity. We focus on user-friendly layouts that
          improve engagement and conversions for businesses in Rishikesh,
          Uttarakhand.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Mobile-first responsive website design
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Brand-focused UI/UX website design
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Conversion-oriented user journey design
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Multiple design revisions for perfection
          </li>
        </ul>
      </>
    ),

    "4": (
      <>
        <h3 className="text-3xl font-bold text-blue-700 mb-6">
          Website Development
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Our developers build fast, secure, and scalable websites using modern
          technologies. Devbhoomi Infotech follows best coding practices to
          deliver SEO-friendly website development in Rishikesh.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Clean and SEO-optimized website code
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            High performance & fast loading websites
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Secure and scalable website architecture
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Regular website development updates
          </li>
        </ul>
      </>
    ),

    "5": (
      <>
        <h3 className="text-3xl font-bold text-blue-700 mb-6">
          Testing & Quality Assurance
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Before launch, every website is tested to ensure smooth performance.
          Our testing process ensures your website works perfectly across
          devices, browsers, and user scenarios.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Cross-browser and device testing
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Website speed & performance testing
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Security and usability testing
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Final quality assurance checks
          </li>
        </ul>
      </>
    ),

    "6": (
      <>
        <h3 className="text-3xl font-bold text-blue-700 mb-6">
          Website Launch
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          We handle a smooth and secure website launch process. Our team ensures
          SSL setup, Google indexing, and performance monitoring for successful
          website launch in Rishikesh.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Final pre-launch website checks
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Secure and smooth website deployment
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Google Search Console indexing
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Post-launch performance monitoring
          </li>
        </ul>
      </>
    ),

    "7": (
      <>
        <h3 className="text-3xl font-bold text-blue-700 mb-6">
          Website Maintenance & Support
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Devbhoomi Infotech provides ongoing website maintenance services in
          Rishikesh to keep your website secure, fast, and updated as your
          business grows.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Regular website security updates
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Speed optimization & uptime monitoring
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Website content and feature updates
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Priority technical support in Rishikesh
          </li>
        </ul>
      </>
    ),
  };

  return (
    <>
      <Head>
        {/* ================= BASIC SEO ================= */}
        <title>
          Best Website Design Company in Rishikesh, Uttarakhand | Devbhoomi
          Infotech
        </title>

        <meta
          name="description"
          content="Devbhoomi Infotech offers the best website design services in Rishikesh, Uttarakhand. Get custom, responsive and high-converting website designs for your business."
        />

        <meta
          name="keywords"
          content="website design services in rishikesh, website design company rishikesh, website designer in rishikesh uttarakhand, responsive website design rishikesh, custom website design rishikesh"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Devbhoomi Infotech, Rishikesh" />
        <meta name="language" content="en-IN" />

        {/* ================= CANONICAL ================= */}
        <link
          rel="canonical"
          href="https://www.devbhoomiinfotech.com/website-design-services-in-rishikesh-uttarakhand/"
        />

        {/* ================= FAVICON & APP ICONS ================= */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ================= GEO / LOCAL SEO ================= */}
        <meta name="geo.region" content="IN-UT" />
        <meta name="geo.placename" content="Rishikesh" />
        <meta name="geo.position" content="30.0869;78.2676" />
        <meta name="ICBM" content="30.0869, 78.2676" />

        {/* ================= OPEN GRAPH ================= */}
        <meta
          property="og:title"
          content="Website Design Services in Rishikesh, Uttarakhand | Devbhoomi Infotech"
        />
        <meta
          property="og:description"
          content="Custom, responsive and conversion-focused website design services in Rishikesh for businesses."
        />
        <meta
          property="og:url"
          content="https://www.devbhoomiinfotech.com/website-design-services-in-rishikesh-uttarakhand/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Devbhoomi Infotech" />
        <meta property="og:locale" content="en_IN" />
        <meta
          property="og:image"
          content="https://www.devbhoomiinfotech.com/website-design-rishikesh.jpg"
        />

        {/* ================= TWITTER ================= */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Website Design Services in Rishikesh | Devbhoomi Infotech"
        />
        <meta
          name="twitter:description"
          content="Get custom, responsive and high-converting website designs in Rishikesh, Uttarakhand."
        />
        <meta
          name="twitter:image"
          content="https://www.devbhoomiinfotech.com/website-design-rishikesh.jpg"
        />

        <meta name="theme-color" content="#0f766e" />
        {/* ================= AEO / AI READABILITY BOOST ================= */}
        <meta name="subject" content="Website Design Services in Rishikesh" />
        <meta name="classification" content="Website Design & UI UX Services" />
        <meta
          name="abstract"
          content="Professional website design services in Rishikesh for businesses, startups and brands."
        />

        {/* ================= JSON-LD SCHEMA ================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Devbhoomi Infotech",
              url: "https://www.devbhoomiinfotech.com/website-design-services-in-rishikesh-uttarakhand/",
              logo: "https://www.devbhoomiinfotech.com/logo.png",
              image:
                "https://www.devbhoomiinfotech.com/website-design-rishikesh.jpg",
              description:
                "Devbhoomi Infotech provides professional website design services in Rishikesh, Uttarakhand.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Rishikesh",
                addressRegion: "Uttarakhand",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "30.0869",
                longitude: "78.2676",
              },
              areaServed: "Rishikesh, Uttarakhand",
              sameAs: [
                "https://www.facebook.com/devbhoomiinfotech",
                "https://www.instagram.com/devbhoomiinfotech",
                "https://www.linkedin.com/company/devbhoomiinfotech",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.devbhoomiinfotech.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Website Design Services",
                  item: "https://www.devbhoomiinfotech.com/website-design-services-in-rishikesh-uttarakhand/",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Website Design Services",
              name: "Website Design Services in Rishikesh, Uttarakhand",
              description:
                "Professional website design services in Rishikesh, Uttarakhand including custom website design, responsive web design and SEO-friendly websites for small businesses.",
              url: "https://www.devbhoomiinfotech.com/website-design-services-in-rishikesh-uttarakhand/",
              provider: {
                "@type": "LocalBusiness",
                name: "Devbhoomi Infotech",
                url: "https://www.devbhoomiinfotech.com/",
                logo: "https://www.devbhoomiinfotech.com/logo.png",
                sameAs: [
                  "https://www.facebook.com/devbhoomiinfotech",
                  "https://www.instagram.com/devbhoomiinfotech",
                  "https://www.linkedin.com/company/devbhoomiinfotech",
                ],
              },
              areaServed: [
                {
                  "@type": "Place",
                  name: "Rishikesh, Uttarakhand, India",
                },
                {
                  "@type": "Place",
                  name: "Uttarakhand, India",
                },
              ],
              offers: {
                "@type": "Offer",
                priceCurrency: "INR",
                price: "15000",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "INR",
                  price: "15000",
                },
                availability: "https://schema.org/InStock",
                url: "https://www.devbhoomiinfotech.com/website-design-services-in-rishikesh-uttarakhand/",
              },
              audience: {
                "@type": "BusinessAudience",
                audienceType: "SmallBusiness",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is the cost of website design services in Rishikesh?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The cost depends on website type and features. Devbhoomi Infotech offers affordable website design services in Rishikesh.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you build SEO-friendly websites?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we build SEO-friendly websites with fast speed, mobile responsiveness and Google-ready structure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide website maintenance?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Devbhoomi Infotech provides ongoing website maintenance and support services in Rishikesh.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      {/* Header Component */}
      <Header />

      {/* Hero Section - Complete with bottom-left & bottom-right floating animations */}
      <section className="relative h-96 md:h-[450px] w-full overflow-hidden bg-gradient-to-r from-teal-800/90 to-teal-950/90">
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Floating abstract shapes - Bottom Left */}
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 pointer-events-none z-0 opacity-40 md:opacity-50">
          <div className="absolute bottom-6 left-6 w-20 h-20 md:w-32 md:h-32 bg-orange-400/20 rounded-full animate-float-slow blur-xl"></div>
          <div className="absolute bottom-12 left-20 w-16 h-16 md:w-24 md:h-24 bg-teal-300/30 rounded-xl rotate-45 animate-float-medium"></div>
          <div className="absolute bottom-4 left-32 w-24 h-24 md:w-36 md:h-36 border-2 border-white-400/40 rounded-full animate-pulse-slow"></div>
        </div>

        {/* Floating abstract shapes - Bottom Right */}
        <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 pointer-events-none z-0 opacity-40 md:opacity-50">
          <div className="absolute bottom-8 right-8 w-24 h-24 md:w-40 md:h-40 bg-teal-400/15 rounded-full animate-float-medium blur-lg"></div>
          <div className="absolute bottom-16 right-20 w-20 h-20 md:w-28 md:h-28 bg-orange-300/25 rounded-3xl -rotate-12 animate-float-slow"></div>
          <div className="absolute bottom-6 right-32 w-16 h-16 md:w-24 md:h-24 border border-white-200/50 rounded-full animate-pulse"></div>
        </div>

        {/* Main content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6 sm:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 drop-shadow-xl">
            Website Design Services in Rishikesh
          </h1>

          <p className="text-xl md:text-2xl font-bold text-orange-300/95 tracking-wide mb-6 drop-shadow-lg">
            Get Custom, Responsive & High-Converting Website Designs for Your
            Business
          </p>

          <p className="text-base md:text-lg text-gray-100 max-w-3xl mb-8 leading-relaxed font-light drop-shadow-md">
            We help businesses in Rishikesh build visually appealing,
            user-friendly and mobile-responsive websites that attract customers,
            build trust and increase conversions.
          </p>

          <div className="relative z-10 w-full px-6">
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
                <li className="text-orange-400 font-semibold">
                  Website Design
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-8xl mx-auto bg-blue-100">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center mb-20">
          {/* Left: Images */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
              <Image
                src="https://images.pexels.com/photos/7693698/pexels-photo-7693698.jpeg"
                alt="Affordable web design services in Rishikesh by expert team"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-6 md:-bottom-12 md:-right-10 w-2/5 md:w-1/2 lg:w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20">
              <Image
                src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg"
                alt="Leading SEO and web development company in Rishikesh team meeting"
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
              Top{" "}
              <span className="italic text-orange-600">
                Web Design & IT Services
              </span>{" "}
              in Rishikesh
            </h2>

            <p className="text-gray-600 text-md leading-relaxed mb-6">
              Devbhoomi Infotech is a trusted website design company in
              Rishikesh, Uttarakhand, helping businesses create strong and
              professional online identities. We specialize in custom website
              design services that are visually appealing, user-friendly, and
              fully responsive across all devices
            </p>

            <p className="text-gray-600 text-md leading-relaxed mb-6">
              Our website designs focus on clean layouts, fast loading speed,
              and clear navigation to ensure a smooth user experience. Whether
              you are a local business, startup, or growing brand in Rishikesh,
              we design websites that build trust, attract customers, and
              convert visitors into leads
            </p>

            <p className="text-gray-600 text-md leading-relaxed mb-6">
              We follow a user-first website design approach with modern UI/UX
              to create fast, responsive and SEO-friendly websites in Rishikesh
              that rank well on Google and deliver strong user experience.
            </p>
            <p className="text-gray-600 text-md leading-relaxed mb-6">
              Looking for website design services in Rishikesh, Uttarakhand?
              Devbhoomi Infotech builds high-quality, conversion-focused
              websites for your business.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-8xl mx-auto bg-orange-50">
  <div className="grid lg:grid-cols-2 gap-12 items-center">

    {/* Left: Content */}
    <div>
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/60 border border-blue-200/60">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
        <p className="text-xs sm:text-sm font-medium text-blue-700">
          Why Choose Us
        </p>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
        Why Choose <span className="text-orange-600">Devbhoomi Infotech</span> in
        Rishikesh
      </h2>

      {/* Paragraphs */}
      <div className="space-y-6 text-gray-600 leading-relaxed">

        {/* Paragraph 1 – ~50 words */}
        <p className="text-lg md:text-md">
          Devbhoomi Infotech is a trusted IT and website design company in
          Rishikesh, Uttarakhand, delivering custom-built digital solutions for
          local businesses, startups and global clients. We focus on unique
          designs, strong branding and user-first experiences that help
          businesses build credibility and grow online.
        </p>

        {/* Paragraph 2 – ~35 words */}
        <p className="text-md md:text-md font-medium">
          Our websites are fast, mobile-first and SEO-friendly. We integrate
          modern web development, AI automation and local SEO strategies to help
          Rishikesh businesses rank higher on Google and attract genuine leads.
        </p>

        {/* Paragraph 3 – ~25 words */}
        <p className="text-md md:text-md font-semibold text-gray-800">
          With transparent pricing, on-time delivery and long-term support, we
          understand Rishikesh’s tourism and business ecosystem and deliver
          results that drive sustainable growth.
        </p>

      </div>
    </div>

    {/* Right: Image (unchanged) */}
    <div className="order-first lg:order-last">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="https://images.pexels.com/photos/7792836/pexels-photo-7792836.jpeg"
          alt="Devbhoomi Infotech best IT company in Rishikesh offering website design, SEO and AI automation services in Uttarakhand"
          width={600}
          height={500}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>

  </div>
</section>

      

      <ServicesSection />

      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-blue-100">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <p className="text-sm font-medium text-blue-700">
                Dev-Bhoomi Infotech
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-orange-600 mb-4">
              Web Design Services in Rishikesh
            </h2>

            {/* ─── Fixed part ─── */}
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional web design services in Rishikesh for yoga centers,
              local businesses and growing brands – fast, mobile-friendly and
              SEO-ready websites.
            </p>
            {/* ──────────────── */}
          </div>

          {/* 6 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300">
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-teal-600 flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Layout className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                    Yoga & Wellness Website Design
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  Yoga & wellness website design in Rishikesh for yoga schools,
                  ashrams, retreats and wellness centers. Clean layouts, booking
                  forms and mobile-friendly, SEO-ready websites to attract
                  international students and help Uttarakhand yoga businesses
                  grow online.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300">
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-600 flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Code className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                    Dynamic Website Design
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  Dynamic website design in Rishikesh for all types of
                  businesses with real-time data, interactive features and
                  smooth performance. Ideal for startups, tour operators,
                  events, hotels, institutes and local businesses in Uttarakhand
                  looking for modern, fast and scalable websites.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300">
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-orange-600 flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors">
                    SEO-Friendly Web Design
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  SEO-friendly web design in Rishikesh for all types of
                  businesses with fast speed, mobile optimization and
                  Google-ready structure. Helps hotels, yoga centers, startups
                  and local businesses in Uttarakhand rank higher, get
                  visibility and attract real customers from search.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300">
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-teal-700 flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-teal-800 transition-colors">
                    Local Business Website Design
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  Local business website design in Rishikesh for shops, cafes,
                  gyms, institutes and service providers. Simple, attractive and
                  mobile-friendly websites that show your location, build trust
                  and help Uttarakhand businesses get more local customers.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300">
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-orange-500 flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Layout className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    Dashboard Design Services
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  Dashboard design services in Rishikesh for admin panels, CRM,
                  booking systems and business tools. Clean, secure and
                  user-friendly dashboards for hotels, yoga schools and local
                  businesses in Uttarakhand to manage data easily and
                  efficiently.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300">
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-600 flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <RotateCw className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                    Website Redesign & Speed Optimization
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  Website redesign and speed optimization in Rishikesh for all
                  types of websites. We upgrade old or slow sites into fast,
                  mobile-friendly and SEO-ready websites that improve Google
                  ranking and user experience for Uttarakhand businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PackagesSection />
      <section className="py-12 md:py-16 lg:py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6 mx-auto">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <p className="text-sm font-medium text-blue-700">
                Devbhoomi Infotech Process
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Website Desgin <span className="text-orange-600">Process</span> in
              Rishikesh
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured, transparent, and client-centric process to
              deliver high-quality websites every time.
            </p>
          </div>

          {/* Tabs – ek line mein + hover pe niche shift */}
          <div className="flex justify-center gap-3 md:gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveTab(step.id)}
                className={`flex flex-col items-center min-w-[110px] md:min-w-[130px] p-3 md:p-4 rounded-xl transition-all duration-200 border transform ${
                  activeTab === step.id
                    ? "bg-blue-50 border-blue-500 shadow-md translate-y-1 scale-105"
                    : "bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-blue-300 hover:shadow-sm hover:translate-y-1"
                }`}
              >
                <div
                  className={`text-2xl md:text-3xl mb-2 ${
                    activeTab === step.id ? "text-orange-600" : "text-blue-600"
                  }`}
                >
                  {step.icon}
                </div>
                <p
                  className={`text-xs md:text-sm font-medium text-center leading-tight ${
                    activeTab === step.id ? "text-blue-700" : "text-gray-700"
                  }`}
                >
                  {step.title}
                </p>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="mt-8 md:mt-10 bg-gray-50 rounded-xl p-6 md:p-10 border border-gray-200 shadow-md">
            {contents[activeTab as keyof typeof contents]}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-gradient-to-b from-teal-950 to-teal-900 text-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-teal-300 mb-3">
            Website Design Services
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Hire a Website Designer in Rishikesh, Uttarakhand
          </h2>

          <p className="text-base md:text-lg text-orange-300/95 leading-relaxed">
            Devbhoomi Infotech offers professional website design services in
            Rishikesh, creating responsive, user-friendly and SEO-ready websites
            that help businesses attract customers and grow online.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <p className="text-sm font-medium text-blue-700">
                Dev-Bhoomi Infotech FAQs
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-orange-600 mb-4">
              Frequently Asked Questions
            </h2>

            {/* ─── Fixed part ─── */}
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our professional website design services in
              Rishikesh
            </p>
            {/* ──────────────── */}
          </div>

          {/* FAQ Grid - 4 left | 3 right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            {/* Left Column - 4 FAQs */}
            <div className="space-y-4">
              {/* FAQ 1 */}
              <details className="group bg-white rounded-lg border border-gray-200 shadow-sm">
                <summary className="flex justify-between items-center p-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 group-open:text-orange-600 transition-colors">
                    What is the cost of web design services in Rishikesh?
                  </h3>
                  <span className="text-orange-500 text-xl font-bold group-open:hidden">
                    +
                  </span>
                  <span className="text-orange-500 text-xl font-bold hidden group-open:block">
                    −
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-600">
                  The cost of web design depends on the project type (static,
                  dynamic, or custom website). Basic websites in Rishikesh are
                  affordable, and we share exact pricing after understanding
                  your requirements.
                </div>
              </details>

              {/* FAQ 2 */}
              <details className="group bg-white rounded-lg border border-gray-200 shadow-sm">
                <summary className="flex justify-between items-center p-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 group-open:text-orange-600 transition-colors">
                    Do you build SEO-friendly websites?
                  </h3>
                  <span className="text-orange-500 text-xl font-bold group-open:hidden">
                    +
                  </span>
                  <span className="text-orange-500 text-xl font-bold hidden group-open:block">
                    −
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-600">
                  Yes, we create SEO-friendly websites with fast speed, mobile
                  optimization, clean code structure, and Google-ready setup to
                  help your site rank better.
                </div>
              </details>

              {/* FAQ 3 */}
              <details className="group bg-white rounded-lg border border-gray-200 shadow-sm">
                <summary className="flex justify-between items-center p-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 group-open:text-orange-600 transition-colors">
                    How long does it take to build a website?
                  </h3>
                  <span className="text-orange-500 text-xl font-bold group-open:hidden">
                    +
                  </span>
                  <span className="text-orange-500 text-xl font-bold hidden group-open:block">
                    −
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-600">
                  A professional website is usually completed in 7–15 days, but
                  the exact time depends on the project's complexity and
                  features required.
                </div>
              </details>

              {/* FAQ 4 */}
              <details className="group bg-white rounded-lg border border-gray-200 shadow-sm">
                <summary className="flex justify-between items-center p-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 group-open:text-orange-600 transition-colors">
                    Do you design websites for yoga and local businesses?
                  </h3>
                  <span className="text-orange-500 text-xl font-bold group-open:hidden">
                    +
                  </span>
                  <span className="text-orange-500 text-xl font-bold hidden group-open:block">
                    −
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-600">
                  Yes, we specialize in custom website design for yoga schools,
                  wellness centers, hotels, and local businesses in Rishikesh
                  and Uttarakhand.
                </div>
              </details>
            </div>

            {/* Right Column - 3 FAQs */}
            <div className="space-y-4">
              {/* FAQ 5 */}
              <details className="group bg-white rounded-lg border border-gray-200 shadow-sm">
                <summary className="flex justify-between items-center p-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 group-open:text-orange-600 transition-colors">
                    Will the website be mobile-friendly?
                  </h3>
                  <span className="text-orange-500 text-xl font-bold group-open:hidden">
                    +
                  </span>
                  <span className="text-orange-500 text-xl font-bold hidden group-open:block">
                    −
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-600">
                  Yes, we build fully responsive websites that work smoothly on
                  mobile phones, tablets, and desktops.
                </div>
              </details>

              {/* FAQ 6 */}
              <details className="group bg-white rounded-lg border border-gray-200 shadow-sm">
                <summary className="flex justify-between items-center p-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 group-open:text-orange-600 transition-colors">
                    Do you redesign existing websites?
                  </h3>
                  <span className="text-orange-500 text-xl font-bold group-open:hidden">
                    +
                  </span>
                  <span className="text-orange-500 text-xl font-bold hidden group-open:block">
                    −
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-600">
                  Yes, we redesign old or slow websites and improve speed, UI,
                  and SEO for better Google rankings.
                </div>
              </details>

              {/* FAQ 7 */}
              <details className="group bg-white rounded-lg border border-gray-200 shadow-sm">
                <summary className="flex justify-between items-center p-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 group-open:text-orange-600 transition-colors">
                    Do you provide support and maintenance after launch?
                  </h3>
                  <span className="text-orange-500 text-xl font-bold group-open:hidden">
                    +
                  </span>
                  <span className="text-orange-500 text-xl font-bold hidden group-open:block">
                    −
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-600">
                  Yes, we offer ongoing technical support and maintenance
                  services after the website launch as per your needs.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

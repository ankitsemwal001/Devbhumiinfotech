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

export default function WebsiteDevelopment() {
  const [activeTab, setActiveTab] = useState("7");

  const steps = [
    { id: "1", icon: <FaSitemap />, title: "Requirement Gathering" },
    { id: "2", icon: <FaLayerGroup />, title: "Planning Process" },
    { id: "3", icon: <FaUsers />, title: "Development Architecture" },
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
          At <strong>Devbhoomi Infotech</strong>, every website development
          project in Rishikesh starts with detailed requirement gathering. As a
          professional website development company in Rishikesh, Uttarakhand, we
          understand your business goals, target audience, and exact website
          development features needed for growth.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Business analysis for website development in Rishikesh, Uttarakhand
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Clear documentation of website development requirements in Rishikesh
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Feature prioritization for faster website development and launch at
            Devbhoomi Infotech
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Regular client feedback during website development discovery in
            Rishikesh
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
          After requirement analysis, our website development experts at
          Devbhoomi Infotech in Rishikesh, Uttarakhand create a clear project
          roadmap. This planning process ensures smooth website development
          execution, transparency, and on-time delivery of your SEO-friendly
          website in Rishikesh.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Website development timeline & milestone planning in Rishikesh,
            Uttarakhand
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Clear communication throughout the website development project at
            Devbhoomi Infotech
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Defined roles for website development & deployment in Rishikesh
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Risk identification for smooth website development delivery in
            Rishikesh, Uttarakhand
          </li>
        </ul>
      </>
    ),

    "3": (
      <>
        <h3 className="text-3xl font-bold text-blue-700 mb-6">
          Development Architecture
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Our website development team at Devbhoomi Infotech in Rishikesh,
          Uttarakhand creates modern, scalable website development architecture
          that reflects your brand identity. We focus on secure and
          performance-oriented website development that improves engagement and
          conversions for businesses in Rishikesh, Uttarakhand.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Mobile-first responsive website development in Rishikesh
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Scalable website development architecture by Devbhoomi Infotech,
            Uttarakhand
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Conversion-oriented website development approach in Rishikesh
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Multiple website development iterations for perfection in Rishikesh,
            Uttarakhand
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
          Our developers at Devbhoomi Infotech in Rishikesh, Uttarakhand build
          fast, secure, and scalable websites using modern website development
          technologies. Devbhoomi Infotech follows best coding practices to
          deliver SEO-friendly website development services in Rishikesh,
          Uttarakhand.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Clean and SEO-optimized website development code in Rishikesh
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            High performance & fast loading website development by Devbhoomi
            Infotech, Uttarakhand
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Secure and scalable website development architecture in Rishikesh
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Regular website development updates in Rishikesh, Uttarakhand
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
          Before launch, every website developed by Devbhoomi Infotech in
          Rishikesh, Uttarakhand is tested to ensure smooth performance. Our
          website development testing process ensures your website works
          perfectly across devices, browsers, and user scenarios in Rishikesh.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Cross-browser and device website development testing in Rishikesh
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Website development speed & performance testing by Devbhoomi
            Infotech, Uttarakhand
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Security and usability website development testing in Rishikesh
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Final quality assurance checks for website development in Rishikesh,
            Uttarakhand
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
          We handle a smooth and secure website development launch process at
          Devbhoomi Infotech in Rishikesh, Uttarakhand. Our team ensures SSL
          setup, Google indexing, and performance monitoring for successful
          website development launch in Rishikesh.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Final pre-launch website development checks in Rishikesh
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Secure and smooth website development deployment by Devbhoomi
            Infotech, Uttarakhand
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Google Search Console indexing for website development in Rishikesh
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Post-launch performance monitoring for website development in
            Rishikesh, Uttarakhand
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
          Devbhoomi Infotech provides ongoing website development maintenance
          services in Rishikesh, Uttarakhand to keep your website secure, fast,
          and updated as your business grows in Rishikesh.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Regular website development security updates in Rishikesh
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Speed optimization & uptime monitoring for website development by
            Devbhoomi Infotech, Uttarakhand
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Website development content and feature updates in Rishikesh
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-3 text-xl font-bold">→</span>
            Priority technical support for website development in Rishikesh,
            Uttarakhand
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
          Best Website Development Company in Rishikesh, Uttarakhand | Devbhoomi
          Infotech
        </title>

        <meta
          name="description"
          content="Devbhoomi Infotech offers the best website development services in Rishikesh, Uttarakhand. Get custom, responsive and high-performing website development for your business."
        />

        <meta
          name="keywords"
          content="website development services in rishikesh, website development company rishikesh, website developer in rishikesh uttarakhand, responsive website development rishikesh, custom website development rishikesh, web development rishikesh, web developer rishikesh uttarakhand"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Devbhoomi Infotech, Rishikesh" />
        <meta name="language" content="en-IN" />

        {/* ================= CANONICAL ================= */}
        <link
          rel="canonical"
          href="https://www.devbhoomiinfotech.com/web-development-services-in-rishikesh-uttarakhand/"
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
          content="Website Development Services in Rishikesh, Uttarakhand | Devbhoomi Infotech"
        />
        <meta
          property="og:description"
          content="Custom, responsive and conversion-focused website development services in Rishikesh for businesses."
        />
        <meta
          property="og:url"
          content="https://www.devbhoomiinfotech.com/web-development-services-in-rishikesh-uttarakhand/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Devbhoomi Infotech" />
        <meta property="og:locale" content="en_IN" />
        <meta
          property="og:image"
          content="https://www.devbhoomiinfotech.com/og/website-development-rishikesh.webp"
        />

        {/* ================= TWITTER ================= */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Website Development Services in Rishikesh | Devbhoomi Infotech"
        />
        <meta
          name="twitter:description"
          content="Get custom, responsive and high-performing website development in Rishikesh, Uttarakhand."
        />
        <meta
          name="twitter:image"
          content="https://www.devbhoomiinfotech.com/og/website-development-rishikesh.webp"
        />

        <meta name="theme-color" content="#0f766e" />
        {/* ================= AEO / AI READABILITY BOOST ================= */}
        <meta
          name="subject"
          content="Website Development Services in Rishikesh"
        />
        <meta
          name="classification"
          content="Website Development & Programming Services"
        />
        <meta
          name="abstract"
          content="Professional website development services in Rishikesh for businesses, startups and brands."
        />

        {/* ================= JSON-LD SCHEMA ================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Devbhoomi Infotech",
              url: "https://www.devbhoomiinfotech.com/web-development-services-in-rishikesh-uttarakhand/",
              logo: "https://www.devbhoomiinfotech.com/logo.png",
              image:
                "https://www.devbhoomiinfotech.com/og/website-development-rishikesh.webp",
              description:
                "Devbhoomi Infotech provides professional website development services in Rishikesh, Uttarakhand.",
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
                  name: "Website Development Services",
                  item: "https://www.devbhoomiinfotech.com/web-development-services-in-rishikesh-uttarakhand/",
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
              serviceType: "Website Development Services",
              name: "Website Development Services in Rishikesh, Uttarakhand",
              description:
                "Professional website development services in Rishikesh, Uttarakhand including custom website development, responsive web development and SEO-friendly websites for small businesses.",
              url: "https://www.devbhoomiinfotech.com/web-development-services-in-rishikesh-uttarakhand/",
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
                price: "20000",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "INR",
                  price: "20000",
                },
                availability: "https://schema.org/InStock",
                url: "https://www.devbhoomiinfotech.com/web-development-services-in-rishikesh-uttarakhand/",
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
                  name: "What is the cost of website development services in Rishikesh?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The cost depends on website type and features. Devbhoomi Infotech offers affordable website development services in Rishikesh, Uttarakhand.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you build SEO-friendly websites?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we build SEO-friendly websites with fast speed, mobile responsiveness and Google-ready structure through our website development services in Rishikesh.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide website development maintenance?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Devbhoomi Infotech provides ongoing website development maintenance and support services in Rishikesh, Uttarakhand.",
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
            Web Development Services in Rishikesh
          </h1>

          <p className="text-xl md:text-2xl font-bold text-orange-300/95 tracking-wide mb-6 drop-shadow-lg">
            Get Custom, Responsive & High-Performing Website Development for
            Your Business
          </p>

          <p className="text-base md:text-lg text-gray-100 max-w-3xl mb-8 leading-relaxed font-light drop-shadow-md">
            We help businesses in Rishikesh, Uttarakhand build powerful, secure
            and mobile-responsive websites through professional website
            development that attracts customers, builds trust and increases
            conversions.
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
                  Website Development
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
                alt="Affordable website development services in Rishikesh by expert development team at Devbhoomi Infotech"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-6 md:-bottom-12 md:-right-10 w-2/5 md:w-1/2 lg:w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20">
              <Image
                src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg"
                alt="Leading SEO and website development company in Rishikesh Uttarakhand team meeting"
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
                Web Development & IT Services
              </span>{" "}
              in Rishikesh
            </h2>

            <p className="text-gray-600 text-md leading-relaxed mb-6">
              Devbhoomi Infotech is a trusted website development company in
              Rishikesh, Uttarakhand, helping businesses create strong and
              professional online platforms. We specialize in custom website
              development services that are powerful, secure, and fully
              responsive across all devices for businesses in Rishikesh.
            </p>

            <p className="text-gray-600 text-md leading-relaxed mb-6">
              Our website development focuses on clean code architecture, fast
              loading speed, and seamless functionality to ensure a smooth user
              experience. Whether you are a local business, startup, or growing
              brand in Rishikesh, Uttarakhand, we develop websites that build
              trust, attract customers, and convert visitors into leads through
              professional website development.
            </p>

            <p className="text-gray-600 text-md leading-relaxed mb-6">
              We follow a secure and scalable website development approach with
              modern technologies to create fast, responsive and SEO-friendly
              websites in Rishikesh, Uttarakhand that rank well on Google and
              deliver strong performance.
            </p>
            <p className="text-gray-600 text-md leading-relaxed mb-6">
              Looking for website development services in Rishikesh,
              Uttarakhand? Devbhoomi Infotech builds high-quality,
              conversion-focused websites through professional website
              development for your business in Rishikesh.
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
              Why Choose{" "}
              <span className="text-orange-600">Devbhoomi Infotech</span> in
              Rishikesh
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              {/* Paragraph 1 – ~50 words */}
              <p className="text-lg md:text-md">
                Devbhoomi Infotech is a trusted IT and website development
                company in Rishikesh, Uttarakhand, delivering custom-built
                digital solutions for local businesses, startups and global
                clients. We focus on secure website development, robust coding
                and scalable architectures that help businesses build
                credibility and grow online in Rishikesh.
              </p>

              {/* Paragraph 2 – ~35 words */}
              <p className="text-md md:text-md font-medium">
                Our website development is fast, mobile-first and SEO-friendly.
                We integrate modern web development technologies, AI automation
                and local SEO strategies to help Rishikesh, Uttarakhand
                businesses rank higher on Google and attract genuine leads
                through professional website development.
              </p>

              {/* Paragraph 3 – ~25 words */}
              <p className="text-md md:text-md font-semibold text-gray-800">
                With transparent pricing, on-time website development delivery
                and long-term support, we understand Rishikesh's tourism and
                business ecosystem and deliver website development results that
                drive sustainable growth in Uttarakhand.
              </p>
            </div>
          </div>

          {/* Right: Image (unchanged) */}
          <div className="order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/7792836/pexels-photo-7792836.jpeg"
                alt="Devbhoomi Infotech best IT and website development company in Rishikesh offering website development, SEO and AI automation services in Uttarakhand"
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Web Development <span className="text-orange-600">Services</span>
            </h2>

            {/* ─── Fixed part ─── */}
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional web development services in Rishikesh for fast,
              mobile-friendly and SEO-optimized websites built for businesses
              and brands.
            </p>
            {/* ──────────────── */}
          </div>

          {/* 6 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300">
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-teal-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Layout className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                    Yoga & Wellness Websites
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  Yoga and wellness website development in Rishikesh,
                  Uttarakhand for yoga schools, ashrams, retreats and wellness
                  centers. We build secure, mobile-friendly and SEO-optimized
                  websites with booking systems to attract international
                  students and help yoga businesses in Rishikesh grow online.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300">
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Code className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                    Dynamic Websites
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  Dynamic website development in Rishikesh, Uttarakhand for
                  startups, hotels, tour operators, institutes and growing
                  businesses. We create database-driven, scalable and
                  high-performance websites that support real-time features and
                  modern business needs in Rishikesh.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300">
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-orange-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors">
                    SEO-Friendly Websites
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  SEO-friendly website development in Rishikesh, Uttarakhand
                  with clean code, fast loading speed and mobile optimization.
                  Our Google-ready websites help local businesses, yoga centers
                  and startups improve rankings, visibility and organic traffic
                  in Rishikesh.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300">
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-teal-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-teal-800 transition-colors">
                    Local Business Websites
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  Local business website development in Rishikesh, Uttarakhand
                  for shops, gyms, cafes, institutes and service providers. We
                  build secure and mobile-responsive websites that build trust,
                  highlight location and generate local leads in Rishikesh.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300">
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Layout className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    Dashboards & Admin Panels
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  Dashboard and admin panel development in Rishikesh,
                  Uttarakhand for CRM systems, booking platforms and business
                  tools. We create clean, secure and user-friendly dashboards
                  that simplify data management and daily operations for
                  businesses in Rishikesh.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300">
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <RotateCw className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                    Website Redesign & Speed
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  Website redesign and performance optimization in Rishikesh,
                  Uttarakhand for slow or outdated websites. We improve speed,
                  responsiveness and SEO to deliver a better user experience and
                  higher search rankings for businesses in Rishikesh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PackagesSection />
      <section className="py-12 md:py-16 lg:py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-6 max-w-7xl">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6 mx-auto">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <p className="text-sm font-medium text-blue-700">
                Devbhoomi Infotech Process
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Web Development <span className="text-orange-600">Process</span>{" "}
              in Rishikesh
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured, transparent, and client-centric website
              development process to deliver high-quality websites every time in
              Rishikesh, Uttarakhand.
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
            Website Development Services
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Hire a Website Developer in Rishikesh, Uttarakhand
          </h2>

          <p className="text-base md:text-lg text-orange-300/95 leading-relaxed">
            Devbhoomi Infotech offers professional website development services
            in Rishikesh, Uttarakhand, creating responsive, secure and SEO-ready
            websites through modern website development that help businesses
            attract customers and grow online in Rishikesh.
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
              Common questions about our professional website development
              services in Rishikesh, Uttarakhand
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
                    What is the cost of website development services in
                    Rishikesh?
                  </h3>
                  <span className="text-orange-500 text-xl font-bold group-open:hidden">
                    +
                  </span>
                  <span className="text-orange-500 text-xl font-bold hidden group-open:block">
                    −
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-600">
                  The cost of website development depends on the project type
                  (static, dynamic, or custom website development). Basic
                  website development in Rishikesh, Uttarakhand is affordable,
                  and Devbhoomi Infotech shares exact pricing after
                  understanding your website development requirements in
                  Rishikesh.
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
                  Yes, Devbhoomi Infotech creates SEO-friendly website
                  development with fast speed, mobile optimization, clean code
                  structure, and Google-ready setup through professional website
                  development in Rishikesh, Uttarakhand to help your site rank
                  better.
                </div>
              </details>

              {/* FAQ 3 */}
              <details className="group bg-white rounded-lg border border-gray-200 shadow-sm">
                <summary className="flex justify-between items-center p-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 group-open:text-orange-600 transition-colors">
                    How long does website development take?
                  </h3>
                  <span className="text-orange-500 text-xl font-bold group-open:hidden">
                    +
                  </span>
                  <span className="text-orange-500 text-xl font-bold hidden group-open:block">
                    −
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-600">
                  A professional website development project is usually
                  completed in 7–15 days by Devbhoomi Infotech in Rishikesh,
                  Uttarakhand, but the exact time depends on the website
                  development project's complexity and features required.
                </div>
              </details>

              {/* FAQ 4 */}
              <details className="group bg-white rounded-lg border border-gray-200 shadow-sm">
                <summary className="flex justify-between items-center p-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 group-open:text-orange-600 transition-colors">
                    Do you develop websites for yoga and local businesses?
                  </h3>
                  <span className="text-orange-500 text-xl font-bold group-open:hidden">
                    +
                  </span>
                  <span className="text-orange-500 text-xl font-bold hidden group-open:block">
                    −
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-600">
                  Yes, Devbhoomi Infotech specializes in custom website
                  development for yoga schools, wellness centers, hotels, and
                  local businesses in Rishikesh and Uttarakhand through
                  professional website development services.
                </div>
              </details>
            </div>

            {/* Right Column - 3 FAQs */}
            <div className="space-y-4">
              {/* FAQ 5 */}
              <details className="group bg-white rounded-lg border border-gray-200 shadow-sm">
                <summary className="flex justify-between items-center p-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 group-open:text-orange-600 transition-colors">
                    Will the website development be mobile-friendly?
                  </h3>
                  <span className="text-orange-500 text-xl font-bold group-open:hidden">
                    +
                  </span>
                  <span className="text-orange-500 text-xl font-bold hidden group-open:block">
                    −
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-600">
                  Yes, Devbhoomi Infotech builds fully responsive website
                  development that works smoothly on mobile phones, tablets, and
                  desktops in Rishikesh, Uttarakhand.
                </div>
              </details>

              {/* FAQ 6 */}
              <details className="group bg-white rounded-lg border border-gray-200 shadow-sm">
                <summary className="flex justify-between items-center p-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 group-open:text-orange-600 transition-colors">
                    Do you redevelop existing websites?
                  </h3>
                  <span className="text-orange-500 text-xl font-bold group-open:hidden">
                    +
                  </span>
                  <span className="text-orange-500 text-xl font-bold hidden group-open:block">
                    −
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-600">
                  Yes, Devbhoomi Infotech redevelops old or slow websites and
                  improves speed, functionality, and SEO through modern website
                  development in Rishikesh, Uttarakhand for better Google
                  rankings.
                </div>
              </details>

              {/* FAQ 7 */}
              <details className="group bg-white rounded-lg border border-gray-200 shadow-sm">
                <summary className="flex justify-between items-center p-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 group-open:text-orange-600 transition-colors">
                    Do you provide website development support and maintenance?
                  </h3>
                  <span className="text-orange-500 text-xl font-bold group-open:hidden">
                    +
                  </span>
                  <span className="text-orange-500 text-xl font-bold hidden group-open:block">
                    −
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-600">
                  Yes, Devbhoomi Infotech offers ongoing technical support and
                  maintenance services for website development after the website
                  launch in Rishikesh, Uttarakhand as per your needs.
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

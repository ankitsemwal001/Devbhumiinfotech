'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ChevronDown, Code2, Database, Lock, Smartphone, Zap, Globe, ShoppingCart,
  FileText, Wrench, HeadsetIcon, Search, Code, RotateCw, MapPin, Clock, Award, Users
} from 'lucide-react';
import { useState } from 'react';

export default function WebDevelopmentPage() {
  return (
    <main className="bg-background">
      <HeroSection />
      <ServiceIntroSection />
      <TechStackSection />
      <ServiceOfferingsSection />
      <FeaturesSection />
      <AeoGeoSection />
    </main>
  );
}

// ──────────── HERO SECTION ────────────
function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',     // ← fixed: string literal is ok if it's a known easing name
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white px-4 py-20">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-100 to-transparent rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-40 -z-10" />

      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={badgeVariants} className="mb-8">
          <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700">
            {'✨ Professional Web Development Services'}
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          Professional Web Development Services in{' '}
          <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Rishikesh</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Build powerful, scalable web solutions for your business. From custom websites to enterprise applications, we deliver excellence in every project.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-accent hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
          <button className="px-8 py-4 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors">
            View Our Work
          </button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center pt-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => {
              const element = document.getElementById('services-intro');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ──────────── SERVICE INTRO SECTION ────────────
function ServiceIntroSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services-intro" ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Expert Web Development in Rishikesh
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
            <p>
              <strong className="text-foreground">What is Web Development?</strong> Web development is the creation of dynamic, interactive websites and web applications that drive business growth. At Devbhoomi Infotech Solution, we specialize in building modern, scalable web solutions tailored to your unique business needs.
            </p>
            <p>
              <strong className="text-foreground">Who is it for?</strong> Our web development services are perfect for startups, established businesses, e-commerce companies, and enterprises looking to establish or enhance their online presence in Rishikesh and beyond.
            </p>
            <p>
              <strong className="text-foreground">Why Choose Devbhoomi Infotech in Rishikesh?</strong> As a leading web development company in Rishikesh, Uttarakhand, we combine technical expertise with local market knowledge. We deliver high-performance websites that rank well on search engines, convert visitors into customers, and support your long-term business goals.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-foreground font-semibold">Years of Experience</p>
              <p className="text-muted-foreground text-sm mt-2">Serving businesses across Uttarakhand and India</p>
            </div>
            <div className="p-6 bg-teal-50 rounded-lg border border-teal-100 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-teal-600 mb-2">500+</div>
              <p className="text-foreground font-semibold">Projects Delivered</p>
              <p className="text-muted-foreground text-sm mt-2">From websites to complex applications</p>
            </div>
            <div className="p-6 bg-orange-50 rounded-lg border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <p className="text-foreground font-semibold">Client Satisfaction</p>
              <p className="text-muted-foreground text-sm mt-2">Dedicated to your success</p>
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-100 text-foreground leading-relaxed">
            Located in Rishikesh, Uttarakhand, we are your trusted partner for web development services near you. Whether you're searching for the <em>"best web development company in Rishikesh"</em> or <em>"professional web developer in Rishikesh,"</em> Devbhoomi Infotech Solution delivers results that matter.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ──────────── TECH STACK SECTION ────────────
function TechStackSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cards = [
    { icon: Code2, title: 'Frontend Development', description: 'React, Next.js, Vue.js, TypeScript for responsive, interactive user interfaces', tags: ['React', 'Next.js', 'Tailwind CSS'] },
    { icon: Database, title: 'Backend Development', description: 'Node.js, Python, PHP with secure databases and APIs', tags: ['Node.js', 'PostgreSQL', 'MongoDB'] },
    { icon: Lock, title: 'Security', description: 'Enterprise-grade security, SSL/TLS encryption, secure authentication', tags: ['HTTPS', 'OAuth', 'JWT'] },
    { icon: Smartphone, title: 'Mobile Ready', description: 'Fully responsive design that works perfectly on all devices', tags: ['Mobile', 'Tablets', 'Desktop'] },
    { icon: Zap, title: 'Performance', description: 'Optimized loading speeds, CDN integration, image optimization', tags: ['Fast', 'Optimized', 'SEO-Ready'] },
    { icon: Globe, title: 'Deployment', description: 'Cloud hosting, automatic backups, 24/7 monitoring', tags: ['AWS', 'Vercel', 'Docker'] },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Modern Technology Stack</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We use cutting-edge technologies and frameworks to build scalable, secure, and high-performance web solutions
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <motion.div key={index} variants={itemVariants} className="group relative">
                <div className="h-full p-6 bg-white rounded-lg border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg group-hover:from-blue-200 group-hover:to-teal-200 transition-colors">
                      <card.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{card.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{card.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full border border-blue-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ──────────── SERVICE OFFERINGS SECTION ────────────
function ServiceOfferingsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const [activeOffering, setActiveOffering] = useState(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const offerings = [
    {
      icon: Globe,
      title: 'Custom Websites',
      description: 'Bespoke website design and development tailored to your brand identity and business goals. Fully responsive, SEO-optimized, and built for conversions.',
      benefits: ['Brand-aligned design', 'Mobile responsive', 'SEO optimized', 'Fast loading'],
      ideal: 'Perfect for startups, agencies, and service-based businesses',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms with secure payment gateways, inventory management, and customer analytics. Drive online sales with confidence.',
      benefits: ['Payment integration', 'Product management', 'Order tracking', 'Analytics dashboard'],
      ideal: 'Ideal for retail businesses and online stores',
    },
    {
      icon: Zap,
      title: 'Web Applications',
      description: 'Powerful SaaS and web applications with real-time features, user authentication, and scalable architecture for growing businesses.',
      benefits: ['Real-time updates', 'User management', 'Data security', 'Scalable infrastructure'],
      ideal: 'Great for startups and enterprise solutions',
    },
    {
      icon: FileText,
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to capture leads and drive conversions. A/B tested templates with analytics integration.',
      benefits: ['High conversion rates', 'Lead capture forms', 'Analytics tracking', 'A/B testing ready'],
      ideal: 'Perfect for marketing campaigns and promotions',
    },
    {
      icon: Wrench,
      title: 'Website Maintenance',
      description: 'Ongoing maintenance, updates, security patches, and performance optimization. Keep your website running smoothly 24/7.',
      benefits: ['Regular updates', 'Security monitoring', 'Performance tuning', 'Backup management'],
      ideal: 'Essential for all existing websites',
    },
    {
      icon: HeadsetIcon,
      title: 'Support & Training',
      description: 'Comprehensive support including troubleshooting, performance optimization, and team training on content management.',
      benefits: ['24/7 support', 'Technical assistance', 'Team training', 'Documentation'],
      ideal: 'Included with all our web development services',
    },
  ];

  const ActiveIcon = offerings[activeOffering].icon;

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Service Offerings</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web development solutions for every business need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <motion.button
                  key={index}
                  variants={itemVariants}
                  onClick={() => setActiveOffering(index)}
                  className={`text-left h-full p-6 rounded-lg border-2 transition-all duration-300 ${
                    activeOffering === index
                      ? 'border-blue-600 bg-blue-50 shadow-xl'
                      : 'border-blue-100 bg-white hover:border-blue-300'
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg w-fit mb-4 ${
                      activeOffering === index ? 'bg-blue-600' : 'bg-blue-100'
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        activeOffering === index ? 'text-white' : 'text-blue-600'
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{offering.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {offering.description.substring(0, 80)}...
                  </p>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            key={activeOffering}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl border border-blue-200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <ActiveIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                {offerings[activeOffering].title}
              </h3>
            </div>

            <p className="text-lg text-foreground mb-6 leading-relaxed">
              {offerings[activeOffering].description}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-foreground mb-4">Key Benefits:</h4>
                <ul className="space-y-2">
                  {offerings[activeOffering].benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-foreground">
                      <span className="w-2 h-2 bg-blue-600 rounded-full" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Ideal For:</h4>
                <p className="text-foreground leading-relaxed">
                  {offerings[activeOffering].ideal}
                </p>
                <button className="mt-4 w-full px-4 py-3 bg-accent hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ──────────── FEATURES SECTION ────────────
function FeaturesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const features = [
    { icon: Smartphone, title: 'Mobile Responsive', description: 'Perfectly optimized for all devices. Your website looks stunning on smartphones, tablets, and desktops.' },
    { icon: Search, title: 'SEO Optimized', description: 'Built-in SEO best practices help your website rank higher on Google and other search engines.' },
    { icon: Zap, title: 'Fast Performance', description: 'Lightning-fast loading speeds with image optimization, CDN integration, and code minification.' },
    { icon: Lock, title: 'Secure Architecture', description: 'Enterprise-grade security with SSL encryption, secure authentication, and regular security audits.' },
    { icon: Code, title: 'Scalable Code', description: 'Clean, maintainable code architecture that grows with your business without compromising performance.' },
    { icon: RotateCw, title: 'Easy Maintenance', description: 'Simple content management systems and documentation make updates easy, no coding knowledge needed.' },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Our Web Development Services Stand Out
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver more than just code. We deliver results that drive your business forward.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={itemVariants} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />

                  <div className="relative h-full p-8 bg-white rounded-xl border border-blue-100 group-hover:border-blue-300 group-hover:shadow-xl transition-all duration-300">
                    <div className="mb-6 p-3 w-fit rounded-lg bg-gradient-to-br from-blue-100 to-teal-100 group-hover:from-blue-200 group-hover:to-teal-200 transition-colors">
                      <Icon className="w-8 h-8 text-blue-600 group-hover:text-blue-700" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                    <div className="mt-4 h-1 w-0 bg-gradient-to-r from-blue-600 to-teal-600 group-hover:w-12 transition-all duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 md:p-12 bg-gradient-to-r from-blue-50 via-white to-teal-50 rounded-xl border border-blue-200"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Built on Trust & Expertise</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-2xl">✓</span> Our Commitment
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  We're committed to delivering exceptional web development services that exceed expectations. Your success is our success.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-2xl">✓</span> Transparent Process
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Clear communication, regular updates, and no hidden costs. You'll always know what we're working on and when to expect results.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ──────────── AEO/GEO + FOOTER SECTION ────────────
function AeoGeoSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const faqs = [
    {
      question: 'What is the best web development company in Rishikesh?',
      answer: 'Devbhoomi Infotech Solution is recognized as the best web development company in Rishikesh. We combine technical expertise with local market knowledge to deliver exceptional results for businesses of all sizes.',
    },
    {
      question: 'Why choose a local web developer in Rishikesh?',
      answer: 'Choosing a local web developer in Rishikesh means better communication, faster response times, and understanding of local market dynamics. We\'re committed to supporting local businesses and building long-term partnerships.',
    },
    {
      question: 'What web development services are available near me in Rishikesh?',
      answer: 'We offer comprehensive web development services in Rishikesh including custom websites, e-commerce platforms, web applications, landing pages, maintenance, and ongoing support.',
    },
    {
      question: 'How much does web development in Rishikesh cost?',
      answer: 'We offer flexible pricing based on project scope and requirements. From startup-friendly packages to enterprise solutions, we have options for every budget. Contact us for a personalized quote.',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Web Development Services in Rishikesh, Uttarakhand
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Local expertise with global standards. Your trusted partner for digital transformation.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-4 gap-4 mb-16">
            {[
              { icon: MapPin, label: 'Based in Rishikesh', value: 'Uttarakhand, India' },
              { icon: Users, label: 'Happy Clients', value: '500+' },
              { icon: Award, label: 'Years in Business', value: '10+' },
              { icon: Clock, label: 'Projects Delivered', value: 'On Time' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg border border-blue-100 text-center hover:shadow-lg transition-shadow"
              >
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                <p className="text-xl font-bold text-foreground">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.details
                  key={index}
                  variants={itemVariants}
                  className="group p-6 bg-white rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
                >
                  <summary className="flex items-center justify-between font-bold text-foreground text-lg">
                    <span className="text-balance">{faq.question}</span>
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </motion.details>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-8 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl border border-blue-200 mb-16"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Serving Rishikesh & Beyond</h3>
            <p className="text-foreground leading-relaxed mb-6">
              Based in Rishikesh, Uttarakhand, we serve businesses across the region including Haridwar, Dehradun, and all of Uttarakhand. We also offer services nationally and internationally, bringing local touch to global projects.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-foreground mb-3">Service Areas:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Rishikesh, Uttarakhand</li>
                  <li>✓ Haridwar Region</li>
                  <li>✓ Dehradun & Surroundings</li>
                  <li>✓ All of Uttarakhand</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-3">Industry Experience:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ E-commerce & Retail</li>
                  <li>✓ Hospitality & Tourism</li>
                  <li>✓ Healthcare & Education</li>
                  <li>✓ Professional Services</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden p-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white text-center"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -z-10" />

            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto relative z-10">
              Let's discuss how Devbhoomi Infotech Solution can help your business grow with powerful web solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="px-8 py-4 bg-accent hover:bg-orange-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Get Your Free Consultation
              </button>
              <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg border border-white/40 transition-all duration-300">
                View Our Portfolio
              </button>
            </div>

            <p className="mt-8 text-blue-100 text-sm relative z-10">
              No credit card required. Free initial consultation to discuss your project.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
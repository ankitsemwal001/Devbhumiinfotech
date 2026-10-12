"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  ArrowRight,
  Bot,
  Code2,
  Globe,
  Smartphone,
  TrendingUp,
  MessageSquare,
  Cpu,
  FileText,
  Sparkles,
  Workflow,
  Database,
  Layers,
  Zap,
  BarChart3,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { headerNavItems } from "@/config/navigation";
import { serviceGroups } from "@/content/services";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);

  const megaMenuRef = useRef<HTMLDivElement>(null);
  const aboutMenuRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const megaMenuDropdownRef = useRef<HTMLDivElement>(null);
  const [caretLeft, setCaretLeft] = useState<number | null>(null);

  // Position caret triangle directly under the center of Services button
  useEffect(() => {
    const updateCaretPosition = () => {
      if (servicesButtonRef.current && megaMenuDropdownRef.current) {
        const btnRect = servicesButtonRef.current.getBoundingClientRect();
        const dropdownRect = megaMenuDropdownRef.current.getBoundingClientRect();
        const btnCenter = btnRect.left + btnRect.width / 2;
        const offset = btnCenter - dropdownRect.left;
        setCaretLeft(offset);
      }
    };

    if (servicesDropdownOpen) {
      updateCaretPosition();
      const rafId = requestAnimationFrame(updateCaretPosition);
      window.addEventListener("resize", updateCaretPosition);
      return () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("resize", updateCaretPosition);
      };
    }
  }, [servicesDropdownOpen]);

  // Scroll detection for sticky navbar & smooth announcement collapse
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileOpen(false);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
  }, [pathname]);

  // Body scroll lock on mobile drawer open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesDropdownOpen(false);
        setAboutDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Click outside listener for desktop dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
      if (
        aboutMenuRef.current &&
        !aboutMenuRef.current.contains(event.target as Node)
      ) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const [activeServiceId, setActiveServiceId] = useState<string>("ai-automation");

  type GroupTheme = {
    icon: ReactNode;
    badgeBg: string;
    subtitle: string;
  };

  const ICON_BASE = "w-5 h-5 shrink-0";

  const GROUP_THEMES: Record<string, GroupTheme> = {
    "ai-automation": {
      icon: <Bot className={`${ICON_BASE} text-blue-600 dark:text-blue-400`} />,
      badgeBg: "bg-blue-50 dark:bg-blue-950/60 border-blue-100 dark:border-blue-800/60",
      subtitle: "Smarter workflows, higher productivity",
    },
    "software-development": {
      icon: <Code2 className={`${ICON_BASE} text-blue-600 dark:text-blue-400`} />,
      badgeBg: "bg-blue-50 dark:bg-blue-950/60 border-blue-100 dark:border-blue-800/60",
      subtitle: "Custom software for your business",
    },
    "mobile-app-development": {
      icon: <Smartphone className={`${ICON_BASE} text-emerald-600 dark:text-emerald-400`} />,
      badgeBg: "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-100 dark:border-emerald-800/60",
      subtitle: "iOS & Android applications",
    },
    "web-development": {
      icon: <Globe className={`${ICON_BASE} text-amber-600 dark:text-amber-400`} />,
      badgeBg: "bg-amber-50 dark:bg-amber-950/60 border-amber-100 dark:border-amber-800/60",
      subtitle: "High-performance websites",
    },
    "digital-growth": {
      icon: <TrendingUp className={`${ICON_BASE} text-rose-600 dark:text-rose-400`} />,
      badgeBg: "bg-rose-50 dark:bg-rose-950/60 border-rose-100 dark:border-rose-800/60",
      subtitle: "SEO, content & online visibility",
    },
  };

  const getGroupTheme = (id: string): GroupTheme => {
    return GROUP_THEMES[id] ?? GROUP_THEMES["software-development"];
  };

  interface ServiceDetailFeature {
    title: string;
    description: string;
    icon: ReactNode;
    iconBg: string;
    slug?: string;
    href?: string;
  }

  interface ServiceDetail {
    id: string;
    kicker?: string;
    badge?: string;
    title: string;
    description: string;
    features: ServiceDetailFeature[];
    exploreHref: string;
    exploreText: string;
    ctaHeadline: string;
    ctaSubtext: string;
  }

  const SERVICE_DETAILS: Record<string, ServiceDetail> = {
    "ai-automation": {
      id: "ai-automation",
      kicker: "FEATURED SERVICE",
      badge: "Featured",
      title: "AI & Automation",
      description:
        "Transform your business with intelligent automation and AI-powered solutions that save time, reduce costs, and streamline operations.",
      features: [
        {
          title: "AI Chatbots",
          description: "Custom AI assistants for business, support & sales",
          icon: <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
          iconBg: "bg-blue-50 dark:bg-blue-950/60 border-blue-200/60 dark:border-blue-800/60",
          slug: "ai-chatbots",
        },
        {
          title: "Workflow Automation",
          description: "Automate repetitive tasks and streamline operations",
          icon: <Workflow className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
          iconBg: "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/60 dark:border-emerald-800/60",
          slug: "workflow-automation",
        },
        {
          title: "Data Processing",
          description: "Extract, process and analyze data with AI",
          icon: <FileText className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
          iconBg: "bg-purple-50 dark:bg-purple-950/60 border-purple-200/60 dark:border-purple-800/60",
          slug: "data-processing",
        },
        {
          title: "Custom AI Solutions",
          description: "Tailored AI solutions for your specific needs",
          icon: <Cpu className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
          iconBg: "bg-amber-50 dark:bg-amber-950/60 border-amber-200/60 dark:border-amber-800/60",
          slug: "custom-ai-solutions",
        },
      ],
      exploreHref: "/services/ai-automation/",
      exploreText: "Explore all AI & Automation services →",
      ctaHeadline: "Let AI work for you",
      ctaSubtext:
        "From chatbots to full business automation, we build AI solutions built around your business goals.",
    },
    "software-development": {
      id: "software-development",
      title: "Software Development",
      description:
        "Scalable web applications, cloud dashboards, and bespoke software engineered for reliable business performance.",
      features: [
        {
          title: "Custom Software",
          description: "Tailored business software designed around your workflows",
          icon: <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
          iconBg: "bg-blue-50 dark:bg-blue-950/60 border-blue-200/60 dark:border-blue-800/60",
          slug: "custom-software",
        },
        {
          title: "SaaS Product Development",
          description: "Multi-tenant cloud architectures with secure authentication",
          icon: <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
          iconBg: "bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200/60 dark:border-indigo-800/60",
          slug: "saas-product-development",
        },
        {
          title: "Web Applications",
          description: "Full-stack web apps built for performance and security",
          icon: <Database className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
          iconBg: "bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200/60 dark:border-cyan-800/60",
          slug: "web-applications",
        },
        {
          title: "Business Management Systems",
          description: "Internal portals, ERP modules, and operational tools",
          icon: <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
          iconBg: "bg-purple-50 dark:bg-purple-950/60 border-purple-200/60 dark:border-purple-800/60",
          slug: "business-management-systems",
        },
      ],
      exploreHref: "/services/software-development/",
      exploreText: "Explore all Software Development services →",
      ctaHeadline: "Let's discuss your project",
      ctaSubtext:
        "Custom software, SaaS platforms, and internal tools engineered for your business needs.",
    },
    "mobile-app-development": {
      id: "mobile-app-development",
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications engineered for responsive performance and clean user experiences.",
      features: [
        {
          title: "iOS & Android Development",
          description: "Mobile applications engineered for reliable performance across devices",
          icon: <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
          iconBg: "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/60 dark:border-emerald-800/60",
          slug: "ios-android-app-development",
        },
      ],
      exploreHref: "/services/mobile-app-development/",
      exploreText: "Explore all Mobile App services →",
      ctaHeadline: "Let's discuss your project",
      ctaSubtext:
        "Native and cross-platform mobile apps for iOS and Android tailored to your users.",
    },
    "web-development": {
      id: "web-development",
      title: "Web Development",
      description:
        "Modern websites engineered with clean typography, responsive layouts, and search-friendly markup.",
      features: [
        {
          title: "Corporate Websites",
          description: "Professional company websites built to present your services clearly",
          icon: <Globe className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
          iconBg: "bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200/60 dark:border-indigo-800/60",
          slug: "business-corporate-websites",
        },
        {
          title: "Website Design (UI/UX)",
          description: "User experience wireframes, bespoke design systems, and responsive layouts",
          icon: <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
          iconBg: "bg-purple-50 dark:bg-purple-950/60 border-purple-200/60 dark:border-purple-800/60",
          href: "/services/website-design/",
        },
        {
          title: "E-Commerce Stores",
          description: "Product catalogs, cart architectures, and checkout integrations",
          icon: <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
          iconBg: "bg-amber-50 dark:bg-amber-950/60 border-amber-200/60 dark:border-amber-800/60",
          slug: "ecommerce",
        },
        {
          title: "Landing Pages",
          description: "Targeted campaign pages engineered for inquiry conversion",
          icon: <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
          iconBg: "bg-blue-50 dark:bg-blue-950/60 border-blue-200/60 dark:border-blue-800/60",
          slug: "landing-pages",
        },
      ],
      exploreHref: "/services/web-development/",
      exploreText: "Explore all Web Development services →",
      ctaHeadline: "Let's discuss your project",
      ctaSubtext:
        "High-performance websites and bespoke web designs engineered to convert visitors.",
    },
    "digital-growth": {
      id: "digital-growth",
      title: "Digital Growth",
      description:
        "Comprehensive search visibility combining technical SEO, Generative Engine Optimisation (GEO), and local search strategies.",
      features: [
        {
          title: "Technical SEO",
          description: "Technical site structure, crawl optimization, and search rankings",
          icon: <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
          iconBg: "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/60 dark:border-emerald-800/60",
          slug: "seo",
        },
        {
          title: "GEO AI Search",
          description: "Optimizing content structure for citation by AI assistants and answer engines",
          icon: <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
          iconBg: "bg-purple-50 dark:bg-purple-950/60 border-purple-200/60 dark:border-purple-800/60",
          slug: "geo",
        },
        {
          title: "Local SEO & GBP",
          description: "Google Business Profile optimisation and local search visibility",
          icon: <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
          iconBg: "bg-blue-50 dark:bg-blue-950/60 border-blue-200/60 dark:border-blue-800/60",
          slug: "local-seo",
        },
        {
          title: "Conversion CRO",
          description: "Friction-free inquiry flows and data-backed conversion improvements",
          icon: <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
          iconBg: "bg-amber-50 dark:bg-amber-950/60 border-amber-200/60 dark:border-amber-800/60",
          slug: "lead-generation-conversion",
        },
      ],
      exploreHref: "/services/digital-marketing/",
      exploreText: "Explore all Digital Growth services →",
      ctaHeadline: "Let's discuss your project",
      ctaSubtext:
        "Search engine optimisation, GEO, and local visibility strategies to grow your reach.",
    },
  };

  return (
    <>
      {/* Top Announcement Bar (Dismissible, scrolls naturally out of view with the page) */}
      {!announcementDismissed && (
        <div className="hidden md:block bg-slate-900 text-slate-200 border-b border-slate-800 text-xs w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
            <div className="text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Technology & Digital Growth Partner · Rishikesh, Uttarakhand</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                aria-label={`Call Devbhoomi Infotech at ${siteConfig.contact.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{siteConfig.contact.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                aria-label={`Email Devbhoomi Infotech at ${siteConfig.contact.email}`}
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <button
                type="button"
                onClick={() => setAnnouncementDismissed(true)}
                className="text-slate-400 hover:text-white transition-colors p-1"
                aria-label="Dismiss announcement bar"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation Header (Sticky top-0 across the page) */}
      <header
        className={cn(
          "w-full sticky top-0 z-40 transition-shadow duration-200 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800",
          isScrolled ? "shadow-md shadow-slate-900/5 dark:shadow-black/20" : ""
        )}
      >
        <nav
          aria-label="Main Navigation"
          className="w-full relative"
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0"
              aria-label="Devbhoomi Infotech Solutions Home"
            >
              <Image
                src="/logo/DBI-official-logo-devbhoomi-infotech-rishikesh.png"
                alt="Devbhoomi Infotech Solutions Logo"
                width={220}
                height={65}
                priority
                className="h-11 sm:h-12 w-auto object-contain dark:hidden"
              />
              <Image
                src="/logo/DBI-official-logo-devbhoomi-infotech-white.png"
                alt="Devbhoomi Infotech Solutions Logo"
                width={220}
                height={65}
                priority
                className="h-11 sm:h-12 w-auto object-contain hidden dark:block"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {headerNavItems.map((item) => {
                if (item.isMegaMenu) {
                  return (
                    <div
                      key={item.label}
                      ref={megaMenuRef}
                    >
                      <button
                        ref={servicesButtonRef}
                        type="button"
                        onClick={() => {
                          setServicesDropdownOpen(!servicesDropdownOpen);
                          setAboutDropdownOpen(false);
                        }}
                        onMouseEnter={() => {
                          setServicesDropdownOpen(true);
                          setAboutDropdownOpen(false);
                        }}
                        className={cn(
                          "flex items-center gap-1.5 px-3.5 py-2 text-base font-medium rounded-lg transition-colors",
                          servicesDropdownOpen || pathname.startsWith("/services")
                            ? "text-blue-600 dark:text-blue-400 bg-slate-100/70 dark:bg-slate-800/60"
                            : "text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/40"
                        )}
                        aria-expanded={servicesDropdownOpen}
                        aria-haspopup="true"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            servicesDropdownOpen ? "rotate-180" : ""
                          )}
                        />
                      </button>

                      {/* 3-Panel Services Mega-Menu (Matching User Design) */}
                      {servicesDropdownOpen && (() => {
                        const activeDetail =
                          SERVICE_DETAILS[activeServiceId] ?? SERVICE_DETAILS["ai-automation"];

                        return (
                          <div
                            ref={megaMenuDropdownRef}
                            onMouseLeave={() => setServicesDropdownOpen(false)}
                            className="absolute top-full left-1/2 -translate-x-1/2 w-[1080px] xl:w-[1180px] max-w-[calc(100vw-2rem)] bg-white dark:bg-slate-900 rounded-3xl shadow-[0_25px_70px_-15px_rgba(15,23,42,0.18)] dark:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.6)] border border-slate-200/80 dark:border-slate-800 p-5 xl:p-6 mt-3 before:absolute before:-top-3.5 before:left-0 before:right-0 before:h-3.5 before:content-[''] animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                          >
                            {/* Top Triangle Caret pointing directly towards Services */}
                            <div
                              style={caretLeft !== null ? { left: `${caretLeft}px` } : undefined}
                              className={cn(
                                "absolute -top-2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-slate-900 border-l border-t border-slate-200/80 dark:border-slate-800 rotate-45 z-20 pointer-events-none transition-[left] duration-150",
                                caretLeft === null ? "left-[56%]" : ""
                              )}
                            />

                            <div className="flex items-stretch gap-3 xl:gap-4">
                              {/* Left Panel: 5 Services Vertical List */}
                              <div className="w-[280px] xl:w-[300px] shrink-0 border-r border-slate-100 dark:border-slate-800 pr-3 xl:pr-4 flex flex-col justify-between space-y-1">
                                {serviceGroups.map((group) => {
                                  const isActive = activeServiceId === group.id;
                                  const theme = getGroupTheme(group.id);
                                  return (
                                    <Link
                                      key={group.id}
                                      href={group.liveHref || `/services/${group.id}/`}
                                      onMouseEnter={() => setActiveServiceId(group.id)}
                                      onClick={() => setServicesDropdownOpen(false)}
                                      className={cn(
                                        "flex items-center justify-between p-2.5 xl:p-3 rounded-2xl transition-all duration-150 group",
                                        isActive
                                          ? "bg-blue-50/80 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400"
                                          : "hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300"
                                      )}
                                    >
                                      <div className="flex items-center gap-3 min-w-0">
                                        <div
                                          className={cn(
                                            "w-10 h-10 rounded-xl flex items-center justify-center border shadow-2xs transition-transform duration-200 group-hover:scale-105 shrink-0",
                                            theme.badgeBg
                                          )}
                                        >
                                          {theme.icon}
                                        </div>
                                        <div className="min-w-0 text-left">
                                          <h4
                                            className={cn(
                                              "font-bold text-sm tracking-wide truncate transition-colors",
                                              isActive
                                                ? "text-blue-600 dark:text-blue-400"
                                                : "text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400"
                                            )}
                                          >
                                            {group.shortTitle}
                                          </h4>
                                          <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                                            {theme.subtitle}
                                          </p>
                                        </div>
                                      </div>
                                      <ChevronRight
                                        className={cn(
                                          "w-4 h-4 shrink-0 transition-transform duration-150",
                                          isActive
                                            ? "text-blue-600 dark:text-blue-400 translate-x-0.5"
                                            : "text-slate-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5"
                                        )}
                                      />
                                    </Link>
                                  );
                                })}
                              </div>

                              {/* Center Panel: Active Service Details & 2x2 Feature Grid */}
                              <div className="flex-1 px-3 xl:px-5 flex flex-col justify-between">
                                <div>
                                  {/* Kicker + Badge */}
                                  {(activeDetail.kicker || activeDetail.badge) && (
                                    <div className="flex items-center justify-between mb-2">
                                      {activeDetail.kicker ? (
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                                          {activeDetail.kicker}
                                        </span>
                                      ) : <span />}
                                      {activeDetail.badge ? (
                                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800">
                                          {activeDetail.badge}
                                        </span>
                                      ) : null}
                                    </div>
                                  )}

                                  {/* Title & Description */}
                                  <h3 className="text-2xl font-bold tracking-wide text-slate-900 dark:text-white">
                                    {activeDetail.title}
                                  </h3>
                                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-1.5 mb-5 line-clamp-2">
                                    {activeDetail.description}
                                  </p>

                                  {/* 2x2 Feature Grid */}
                                  <div className="grid grid-cols-2 gap-3 xl:gap-3.5">
                                    {activeDetail.features.map((feat, idx) => {
                                      const featHref =
                                        feat.href || `${activeDetail.exploreHref}#${feat.slug || ""}`;
                                      return (
                                        <Link
                                          key={idx}
                                          href={featHref}
                                          onClick={() => setServicesDropdownOpen(false)}
                                          className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 hover:border-blue-200 dark:hover:border-blue-800/60 hover:bg-white dark:hover:bg-slate-800 transition-all duration-150 group"
                                        >
                                          <div
                                            className={cn(
                                              "w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border shadow-2xs group-hover:scale-105 transition-transform",
                                              feat.iconBg
                                            )}
                                          >
                                            {feat.icon}
                                          </div>
                                          <div className="min-w-0">
                                            <h5 className="font-bold text-xs sm:text-sm tracking-wide text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                              {feat.title}
                                            </h5>
                                            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-0.5 line-clamp-2">
                                              {feat.description}
                                            </p>
                                          </div>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>

                                {/* Bottom Link to Full Service Page */}
                                <div className="pt-4 mt-2">
                                  <Link
                                    href={activeDetail.exploreHref}
                                    onClick={() => setServicesDropdownOpen(false)}
                                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                                  >
                                    <span>{activeDetail.exploreText}</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                  </Link>
                                </div>
                              </div>

                              {/* Right Panel: CTA Banner Box */}
                              <div className="w-[280px] xl:w-[300px] shrink-0 rounded-2xl bg-gradient-to-b from-blue-50/70 via-indigo-50/30 to-slate-50/60 dark:from-slate-800/70 dark:via-slate-850/50 dark:to-slate-900 border border-blue-100/70 dark:border-slate-700/60 p-5 xl:p-6 flex flex-col items-center justify-between text-center">
                                {/* Visual 3D Tech Laptop Illustration */}
                                <div className="relative pt-4 pb-2">
                                  {/* Floating Sparkle Badge Top Left */}
                                  <div className="absolute top-1 -left-4 w-8 h-8 rounded-xl bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 flex items-center justify-center text-emerald-600 z-10 animate-bounce [animation-duration:3s]">
                                    <Sparkles className="w-4 h-4" />
                                  </div>

                                  {/* Floating Star Badge Top Right */}
                                  <div className="absolute top-0 -right-3 w-7 h-7 rounded-lg bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 flex items-center justify-center text-blue-500 z-10">
                                    <span className="text-xs">✦</span>
                                  </div>

                                  {/* Floating Message Bubble Left */}
                                  <div className="absolute top-11 -left-6 px-2.5 py-1 rounded-full bg-blue-600 text-white shadow-md text-[10px] font-bold flex items-center gap-1 z-10">
                                    <MessageSquare className="w-2.5 h-2.5" />
                                    <span>Hi! 👋</span>
                                  </div>

                                  {/* Floating Bar Chart Right */}
                                  <div className="absolute top-11 -right-5 p-1.5 rounded-lg bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-slate-700 flex items-center justify-center text-blue-600 z-10">
                                    <BarChart3 className="w-3.5 h-3.5" />
                                  </div>

                                  {/* Laptop Graphic */}
                                  <div className="relative w-36 h-24 bg-slate-900 dark:bg-black rounded-t-xl border-2 border-slate-700/90 shadow-xl flex flex-col items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-purple-600/30" />
                                    <div className="relative z-10 flex flex-col items-center gap-1">
                                      <Bot className="w-7 h-7 text-blue-400 animate-pulse" />
                                      <div className="flex gap-1">
                                        <span className="w-5 h-1 rounded-full bg-blue-400/50" />
                                        <span className="w-3 h-1 rounded-full bg-emerald-400/60" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-44 h-2 bg-slate-700 rounded-b-md mx-auto shadow-md" />
                                </div>

                                {/* Headline & Subtext */}
                                <div className="mt-2">
                                  <h4 className="font-bold text-base xl:text-lg tracking-wide text-slate-900 dark:text-white leading-snug">
                                    {activeDetail.ctaHeadline}
                                  </h4>
                                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1.5">
                                    {activeDetail.ctaSubtext}
                                  </p>
                                </div>

                                {/* Consultation CTA Link Button */}
                                <Link
                                  href={`/contact/?service=${activeDetail.id}`}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="mt-4 w-full inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wide py-3 px-4 rounded-full shadow-md shadow-blue-600/25 transition-all hover:shadow-lg hover:scale-[1.02]"
                                >
                                  <span>Get a Free Consultation →</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  );
                }

                if (item.submenu) {
                  return (
                    <div
                      key={item.label}
                      ref={aboutMenuRef}
                      className="relative"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setAboutDropdownOpen(!aboutDropdownOpen);
                          setServicesDropdownOpen(false);
                        }}
                        onMouseEnter={() => {
                          setAboutDropdownOpen(true);
                          setServicesDropdownOpen(false);
                        }}
                        className={cn(
                          "flex items-center gap-1.5 px-3.5 py-2 text-base font-medium rounded-lg transition-colors",
                          aboutDropdownOpen || pathname.startsWith("/about")
                            ? "text-blue-600 dark:text-blue-400 bg-slate-100/70 dark:bg-slate-800/60"
                            : "text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/40"
                        )}
                        aria-expanded={aboutDropdownOpen}
                        aria-haspopup="true"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            aboutDropdownOpen ? "rotate-180" : ""
                          )}
                        />
                      </button>

                      {/* About Dropdown */}
                      {aboutDropdownOpen && (
                        <div
                          onMouseLeave={() => setAboutDropdownOpen(false)}
                          className="absolute top-full left-0 w-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-3 mt-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                        >
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setAboutDropdownOpen(false)}
                              className="block p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
                            >
                              <div className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {sub.label}
                              </div>
                              {sub.description && (
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                                  {sub.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "px-3.5 py-2 text-base font-medium rounded-lg transition-colors",
                      isActive
                        ? "text-blue-600 dark:text-blue-400 font-semibold bg-slate-100/70 dark:bg-slate-800/60"
                        : "text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/40"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Right CTA: "Discuss Your Project" */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-full shadow-md shadow-blue-600/20 transition-all hover:shadow-lg"
              >
                <Link href="/contact/">Discuss Your Project</Link>
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open navigation menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-Over Drawer */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 animate-in slide-in-from-right duration-200"
        >
          {/* Mobile Header Bar */}
          <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/logo/DBI-official-logo-devbhoomi-infotech-rishikesh.png"
                alt="Devbhoomi Infotech Logo"
                width={180}
                height={50}
                className="h-9 w-auto object-contain dark:hidden"
              />
              <Image
                src="/logo/DBI-official-logo-devbhoomi-infotech-white.png"
                alt="Devbhoomi Infotech Logo"
                width={180}
                height={50}
                className="h-9 w-auto object-contain hidden dark:block"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Links List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block p-3 rounded-xl text-base font-semibold hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Home
            </Link>

            {/* Mobile About Accordion */}
            <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() =>
                  setMobileExpandedGroup(
                    mobileExpandedGroup === "about" ? null : "about"
                  )
                }
                className="w-full flex items-center justify-between p-3.5 text-base font-semibold text-left bg-slate-50 dark:bg-slate-900/50"
              >
                <span>About Us</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    mobileExpandedGroup === "about" ? "rotate-180" : ""
                  )}
                />
              </button>
              {mobileExpandedGroup === "about" && (
                <div className="p-3 space-y-2 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                  <Link
                    href="/about/company-overview/"
                    onClick={() => setMobileOpen(false)}
                    className="block p-2 text-sm rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
                  >
                    Company Overview
                  </Link>
                  <Link
                    href="/about/our-approach/"
                    onClick={() => setMobileOpen(false)}
                    className="block p-2 text-sm rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
                  >
                    Our Approach
                  </Link>
                  <Link
                    href="/about/why-choose-us/"
                    onClick={() => setMobileOpen(false)}
                    className="block p-2 text-sm rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
                  >
                    Why Choose Us
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/projects/"
              onClick={() => setMobileOpen(false)}
              className="block p-3 rounded-xl text-base font-semibold hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Projects
            </Link>

            {/* Mobile Services Accordion */}
            <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() =>
                  setMobileExpandedGroup(
                    mobileExpandedGroup === "services" ? null : "services"
                  )
                }
                className="w-full flex items-center justify-between p-3.5 text-base font-semibold text-left bg-slate-50 dark:bg-slate-900/50"
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    mobileExpandedGroup === "services" ? "rotate-180" : ""
                  )}
                />
              </button>
              {mobileExpandedGroup === "services" && (
                <div className="p-3 space-y-3 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                  {serviceGroups.map((group) => {
                    const detail = SERVICE_DETAILS[group.id];
                    return (
                      <div
                        key={group.id}
                        className="p-3 rounded-xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 space-y-2"
                      >
                        <Link
                          href={group.liveHref || `/services/${group.id}/`}
                          onClick={() => setMobileOpen(false)}
                          className="block"
                        >
                          <div className="font-semibold text-sm text-blue-600 dark:text-blue-400">
                            {group.title}
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5">
                            {group.summary}
                          </p>
                        </Link>

                        {detail?.features && (
                          <div className="grid grid-cols-1 gap-1.5 pl-2 border-l-2 border-blue-200 dark:border-blue-900">
                            {detail.features.map((feat, fIdx) => (
                              <Link
                                key={fIdx}
                                href={feat.href || `${detail.exploreHref}#${feat.slug || ""}`}
                                onClick={() => setMobileOpen(false)}
                                className="text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 py-0.5"
                              >
                                • {feat.title}
                              </Link>
                            ))}
                          </div>
                        )}

                        <div className="pt-1">
                          <Link
                            href={`/contact/?service=${group.id}`}
                            onClick={() => setMobileOpen(false)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            <span>Get a Free Consultation →</span>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                  <Link
                    href="/services/"
                    onClick={() => setMobileOpen(false)}
                    className="block pt-2 text-xs font-bold text-center text-blue-600 uppercase tracking-wide border-t border-slate-100 dark:border-slate-800"
                  >
                    View All Services Hub →
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/#packages"
              onClick={() => setMobileOpen(false)}
              className="block p-3 rounded-xl text-base font-semibold hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Pricing
            </Link>

            <Link
              href="/blogs/"
              onClick={() => setMobileOpen(false)}
              className="block p-3 rounded-xl text-base font-semibold hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Insights
            </Link>
          </div>

          {/* Mobile Bottom Contact Actions */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 space-y-3 bg-slate-50/50 dark:bg-slate-900/50">
            <Button
              asChild
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl"
            >
              <Link href="/contact/" onClick={() => setMobileOpen(false)}>
                Discuss Your Project
              </Link>
            </Button>
            <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="flex items-center gap-1.5 hover:text-blue-600"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <span>{siteConfig.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  );
}

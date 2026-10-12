"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, Check, Code2, Globe, TrendingUp } from "lucide-react";
import { serviceGroups } from "@/content/services";

/**
 * Per-service accent. `glow` is an "r,g,b" triplet used by the cursor-driven
 * border light, so each card lights up in its own colour.
 */
const cardThemes: Record<
  string,
  {
    icon: React.ReactNode;
    imageSrc: string;
    iconTile: string;
    check: string;
    accentText: string;
    arrowHover: string;
    glow: string;
    badge: string;
    gradient: string;
    tagline: string;
    tools: string[];
    impact: string;
    activeIconBg: string;
  }
> = {
  "ai-automation": {
    icon: <Bot className="h-5 w-5" strokeWidth={2} />,
    imageSrc: "/images/services/service-ai-automation.jpg",
    iconTile:
      "bg-emerald-50 text-emerald-700 ring-emerald-200/70 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-400/20",
    check: "text-emerald-600 dark:text-emerald-400",
    accentText: "text-emerald-700 dark:text-emerald-300",
    arrowHover:
      "group-hover/card:bg-emerald-600 group-hover/card:text-white group-hover/card:border-emerald-600",
    glow: "16,185,129",
    badge:
      "bg-emerald-50/90 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/60",
    gradient: "from-emerald-500/15 via-emerald-500/5 to-transparent",
    tagline: "Autonomous Agents & Flows",
    tools: ["n8n", "OpenAI", "Claude", "WhatsApp API", "Python"],
    impact: "70% Faster Workflows • 24/7 Autopilot",
    activeIconBg: "bg-emerald-600 shadow-emerald-500/40",
  },
  "software-development": {
    icon: <Code2 className="h-5 w-5" strokeWidth={2} />,
    imageSrc: "/images/services/service-software-development.jpg",
    iconTile:
      "bg-blue-50 text-blue-700 ring-blue-200/70 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-400/20",
    check: "text-blue-600 dark:text-blue-400",
    accentText: "text-blue-700 dark:text-blue-300",
    arrowHover:
      "group-hover/card:bg-blue-600 group-hover/card:text-white group-hover/card:border-blue-600",
    glow: "59,130,246",
    badge:
      "bg-blue-50/90 text-blue-700 border-blue-200/80 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800/60",
    gradient: "from-blue-500/15 via-blue-500/5 to-transparent",
    tagline: "Enterprise Cloud & SaaS",
    tools: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS"],
    impact: "99.9% High Availability • Scalable Code",
    activeIconBg: "bg-blue-600 shadow-blue-500/40",
  },
  "web-development": {
    icon: <Globe className="h-5 w-5" strokeWidth={2} />,
    imageSrc: "/images/services/service-web-development.jpg",
    iconTile:
      "bg-violet-50 text-violet-700 ring-violet-200/70 dark:bg-violet-500/10 dark:text-violet-300 dark:ring-violet-400/20",
    check: "text-violet-600 dark:text-violet-400",
    accentText: "text-violet-700 dark:text-violet-300",
    arrowHover:
      "group-hover/card:bg-violet-600 group-hover/card:text-white group-hover/card:border-violet-600",
    glow: "139,92,246",
    badge:
      "bg-violet-50/90 text-violet-700 border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-300 dark:border-violet-800/60",
    gradient: "from-violet-500/15 via-violet-500/5 to-transparent",
    tagline: "Ultra-Fast Modern Web",
    tools: ["Next.js", "TypeScript", "Tailwind", "Headless CMS", "Figma"],
    impact: "<1s Load Speed • 100% Mobile First",
    activeIconBg: "bg-violet-600 shadow-violet-500/40",
  },
  "digital-growth": {
    icon: <TrendingUp className="h-5 w-5" strokeWidth={2} />,
    imageSrc: "/images/services/service-digital-growth.jpg",
    iconTile:
      "bg-orange-50 text-orange-700 ring-orange-200/70 dark:bg-orange-500/10 dark:text-orange-300 dark:ring-orange-400/20",
    check: "text-orange-600 dark:text-orange-400",
    accentText: "text-orange-700 dark:text-orange-300",
    arrowHover:
      "group-hover/card:bg-orange-600 group-hover/card:text-white group-hover/card:border-orange-600",
    glow: "249,115,22",
    badge:
      "bg-orange-50/90 text-orange-700 border-orange-200/80 dark:bg-orange-950/60 dark:text-orange-300 dark:border-orange-800/60",
    gradient: "from-orange-500/15 via-orange-500/5 to-transparent",
    tagline: "Search, GEO & CRO Strategy",
    tools: ["GEO Engine", "Local SEO", "Google Ads", "GA4", "CRO"],
    impact: "Top Search Rankings",
    activeIconBg: "bg-orange-600 shadow-orange-500/40",
  },
};

export function ServicesPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<string>("digital-growth");


  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    if (!canHover) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const cards = Array.from(
      section.querySelectorAll<HTMLElement>("[data-spot-card]")
    );

    const pointer = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    let raf = 0;
    let snap = true;

    const render = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      const tx = pointer.x - rect.left;
      const ty = pointer.y - rect.top;

      if (snap || reduceMotion) {
        pos.x = tx;
        pos.y = ty;
        snap = false;
      } else {
        pos.x += (tx - pos.x) * 0.14;
        pos.y += (ty - pos.y) * 0.14;
      }

      section.style.setProperty("--sx", `${pos.x.toFixed(1)}px`);
      section.style.setProperty("--sy", `${pos.y.toFixed(1)}px`);

      for (const card of cards) {
        const c = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${(pointer.x - c.left).toFixed(1)}px`);
        card.style.setProperty("--my", `${(pointer.y - c.top).toFixed(1)}px`);
      }

      if (Math.abs(tx - pos.x) > 0.5 || Math.abs(ty - pos.y) > 0.5) {
        raf = requestAnimationFrame(render);
      }
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      section.dataset.active = "true";
      schedule();
    };
    const onEnter = (e: PointerEvent) => {
      snap = true; // appear at the cursor instead of sliding in from the corner
      onMove(e);
    };
    const onLeave = () => {
      section.dataset.active = "false";
    };
    const onScroll = () => {
      if (section.dataset.active === "true") schedule();
    };

    section.addEventListener("pointerenter", onEnter);
    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      section.removeEventListener("pointerenter", onEnter);
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-active="false"
      className="group/section relative overflow-hidden border-t border-slate-200/80 bg-slate-50 px-4 py-20 dark:border-slate-800 dark:bg-slate-950 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Cursor light: soft, single-hue spotlight that eases toward the pointer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-500 group-data-[active=true]/section:opacity-100 md:block"
        style={{
          background:
            "radial-gradient(480px circle at var(--sx, -999px) var(--sy, -999px), rgba(59,130,246,0.09), transparent 65%)",
        }}
      />

      {/* Dot grid, only visible inside the spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden text-slate-400/60 opacity-0 transition-opacity duration-500 group-data-[active=true]/section:opacity-100 dark:text-slate-500/40 md:block"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1.2px)",
          backgroundSize: "22px 22px",
          WebkitMaskImage:
            "radial-gradient(260px circle at var(--sx, -999px) var(--sy, -999px), #000 0%, transparent 100%)",
          maskImage:
            "radial-gradient(260px circle at var(--sx, -999px) var(--sy, -999px), #000 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-6xl text-center lg:mb-16">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-900">
            What We Do
          </span>

          <h2 className="text-balance text-3xl font-semibold  text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Digital Solutions That Drive Growth
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            We build smart digital solutions that streamline operations, elevate user experiences, and accelerate business growth.
          </p>
        </div>

        {/* Expandable Accordion Row (Horizontal on desktop, stacked on mobile) */}
        <div className="flex flex-col md:flex-row gap-3.5 sm:gap-4 md:h-[540px] lg:h-[580px] w-full [perspective:1200px]">
          {serviceGroups.map((group, index) => {
            const theme = cardThemes[group.id] ?? cardThemes["ai-automation"];
            const isActive = activeId === group.id;
            const num = String(index + 1).padStart(2, "0");

            return (
              <article
                key={group.id}
                data-spot-card
                onMouseEnter={() => setActiveId(group.id)}
                onClick={() => setActiveId(group.id)}
                className={`group/panel relative overflow-hidden rounded-3xl cursor-pointer select-none border border-slate-200/90 dark:border-slate-800 transition-[flex,height,box-shadow,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[flex] ${
                  isActive
                    ? "flex-[3.5] h-[480px] md:h-full shadow-2xl shadow-slate-950/25 ring-1 ring-white/20"
                    : "flex-1 h-24 sm:h-28 md:h-full opacity-85 hover:opacity-100"
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={theme.imageSrc}
                    alt={group.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`object-cover object-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive
                        ? "scale-105 brightness-100 contrast-105"
                        : "scale-100 brightness-90 grayscale-[20%]"
                    }`}
                  />
                  {/* Cinematic Gradient Overlays */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                      isActive
                        ? "bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/30"
                        : "bg-slate-950/65 group-hover/panel:bg-slate-950/50"
                    }`}
                  />
                </div>

                {/* Cursor Border Light */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 hidden rounded-3xl p-px opacity-0 transition-opacity duration-300 group-hover/panel:opacity-100 md:block z-30"
                  style={{
                    background: `radial-gradient(280px circle at var(--mx, -999px) var(--my, -999px), rgba(${theme.glow},0.65), transparent 70%)`,
                    WebkitMask:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    mask: "linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0)",
                  }}
                />

                {/* Number Badge (Top-Left) */}
                <span
                  className={`absolute top-4 left-4 sm:top-5 sm:left-5 z-20 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md border text-xs font-bold transition-all duration-500 ${
                    isActive
                      ? "bg-white/20 border-white/40 text-white shadow-md scale-105"
                      : "bg-black/40 border-white/15 text-white/80"
                  }`}
                >
                  {num}
                </span>

                {/* ========================================================
                    COLLAPSED STATE: Icon & Vertical Text Label (Desktop)
                ======================================================== */}
                <div
                  className={`absolute inset-0 z-10 hidden md:flex flex-col items-center justify-center gap-6 pointer-events-none transition-all duration-500 ease-out ${
                    isActive
                      ? "opacity-0 invisible scale-90 translate-y-2"
                      : "opacity-100 visible scale-100 translate-y-0 delay-200"
                  }`}
                >
                  {/* Frosted Glass Icon Pill */}
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 text-white shadow-md transition-transform duration-500 group-hover/panel:scale-110">
                    {theme.icon}
                  </span>

                  {/* Vertical Label (Bottom-to-Top) */}
                  <span className="[writing-mode:vertical-rl] rotate-180 text-xs font-bold uppercase tracking-[0.25em] text-white/85 whitespace-nowrap drop-shadow-md transition-colors duration-300 group-hover/panel:text-white">
                    {group.shortTitle}
                  </span>
                </div>

                {/* Collapsed Label for Mobile (Horizontal strip) */}
                <div
                  className={`absolute inset-0 z-10 flex md:hidden items-center justify-between px-5 pl-16 pointer-events-none transition-opacity duration-300 ${
                    isActive ? "opacity-0 invisible" : "opacity-100 visible"
                  }`}
                >
                  <span className="text-sm font-bold text-white tracking-wide">
                    {group.title}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
                    {theme.icon}
                  </span>
                </div>

                {/* ========================================================
                    EXPANDED STATE: Stable Content Container (No Reflow Jank)
                ======================================================== */}
                <div
                  className={`absolute inset-x-0 bottom-0 z-20 p-6 sm:p-8 flex flex-col justify-end transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? "opacity-100 translate-y-0 visible delay-150 pointer-events-auto"
                      : "opacity-0 translate-y-6 invisible pointer-events-none duration-200"
                  }`}
                >
                  {/* Inner wrapper with stable width prevents text-wrapping jitter */}
                  <div className="w-full max-w-xl min-w-[280px] sm:min-w-[420px]">
                    {/* Circular Theme Icon */}
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-xl mb-4 transition-transform duration-500 ease-out group-hover/panel:scale-105 ${theme.activeIconBg}`}
                    >
                      {theme.icon}
                    </div>

                    {/* Service Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white  ">
                      {group.title}
                    </h3>

                    {/* Service Summary */}
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl">
                      {group.summary}
                    </p>

                    {/* Bottom Action Row */}
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <Link
                        href={group.liveHref || `/services/#${group.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-blue-600 hover:text-white font-semibold text-xs sm:text-sm shadow-xl transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        <span>Explore {group.shortTitle}</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>

                      <span className="text-xs font-semibold text-slate-300 hidden sm:inline-block">
                        {theme.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Closing Note (like reference `who-close`) */}
        <div className="mt-12 text-center max-w-2xl mx-auto flex items-center justify-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200 dark:to-slate-800" />
          <p className="px-2 font-medium">
            Every discipline is engineered for clear deliverables, reliable code, and measurable growth.
          </p>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200 dark:to-slate-800" />
        </div>
      </div>
    </section>
  );
}

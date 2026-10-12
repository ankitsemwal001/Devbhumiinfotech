"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { FileText, Users, Settings, MapPin, Star, ArrowRight } from "lucide-react";

function AnimatedCounter({
  value,
  suffix = "",
  duration = 1600,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.round(eased * value));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const clientLogos = [
  {
    name: "Himalayan Wellness",
    src: "/trustbar/trustbar-himalyan.webp",
  },
  {
    name: "Rishikesh Retreats",
    src: "/trustbar/trustbar-rishikesh-retreat.webp",
  },
  {
    name: "TechMinds",
    src: "/trustbar/trustbar-techminds.webp",
  },
  {
    name: "Divine Hospitality",
    src: "/trustbar/trustbar-hospitality.webp",
  },
  {
    name: "EduNext",
    src: "/trustbar/trustbar-edunext.webp",
  },
];

export function TrustBar() {
  const reviewsLink = siteConfig.social.googleBusiness || "/contact";

  return (
    <section className="relative z-20 w-full -mt-10 sm:-mt-14 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ========================================================
            1. TOP PILL CARD: 4 KEY VERIFIED METRICS
        ======================================================== */}
        <div className="relative">
          {/* Subtle Ambient Glow Behind Card */}
          <div
            className="absolute -inset-1.5 bg-gradient-to-r from-blue-400/20 via-indigo-300/15 to-purple-400/20 dark:from-blue-600/15 dark:via-indigo-600/10 dark:to-purple-600/15 rounded-[32px] blur-xl -z-10"
            aria-hidden="true"
          />

          <div className="bg-white dark:bg-slate-900 rounded-[28px] border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-blue-500/5 dark:shadow-2xl dark:shadow-black/40 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-800/80">
              {/* Stat 1: Projects Delivered */}
              <div className="p-5 sm:p-6 lg:py-6 lg:px-7 flex items-center gap-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 shadow-sm border border-blue-100/60 dark:border-blue-900/40">
                  <FileText className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-sans  leading-none">
                    <AnimatedCounter value={20} suffix="+" />
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-1 leading-snug">
                    Projects Delivered
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                    Websites, software & automations
                  </div>
                </div>
              </div>

              {/* Stat 2: Clients Served */}
              <div className="p-5 sm:p-6 lg:py-6 lg:px-7 flex items-center gap-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-sm border border-emerald-100/60 dark:border-emerald-900/40">
                  <Users className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-sans  leading-none">
                    <AnimatedCounter value={50} suffix="+" />
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-1 leading-snug">
                    Clients Served
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                    Across Uttarakhand & India
                  </div>
                </div>
              </div>

              {/* Stat 3: Specialist Teams */}
              <div className="p-5 sm:p-6 lg:py-6 lg:px-7 flex items-center gap-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 shadow-sm border border-purple-100/60 dark:border-purple-900/40">
                  <Settings className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-sans  leading-none">
                    <AnimatedCounter value={4} />
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-1 leading-snug">
                    Specialist Teams
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                    AI, Software, Web, Growth
                  </div>
                </div>
              </div>

              {/* Stat 4: Rooted in Rishikesh */}
              <div className="p-5 sm:p-6 lg:py-6 lg:px-7 flex items-center gap-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 shadow-sm border border-amber-100/60 dark:border-amber-900/40">
                  <MapPin className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-blue-600 dark:text-blue-400 font-sans  leading-none">
                    Uttarakhand
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-1 leading-snug">
                    Rooted in Rishikesh
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                    Serving nationwide clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            2. MIDDLE ROW: SOCIAL PROOF & GOOGLE VERIFIED STRIP
        ======================================================== */}
        <div className="mt-8 sm:mt-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-2">
          {/* Left: Avatar Stack + Rating */}
          <div className="flex items-center gap-4">
            {/* Overlapping Avatars */}
            <div className="flex items-center -space-x-2.5">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full ring-2 ring-white dark:ring-slate-900 overflow-hidden shadow-sm">
                <Image
                  src="/images/avatars/avatar-1.jpg"
                  alt="Client Reviewer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full ring-2 ring-white dark:ring-slate-900 overflow-hidden shadow-sm">
                <Image
                  src="/images/avatars/avatar-2.jpg"
                  alt="Client Reviewer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full ring-2 ring-white dark:ring-slate-900 overflow-hidden shadow-sm">
                <Image
                  src="/images/avatars/avatar-3.jpg"
                  alt="Client Reviewer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full ring-2 ring-white dark:ring-slate-900 overflow-hidden shadow-sm">
                <Image
                  src="/images/avatars/avatar-4.jpg"
                  alt="Client Reviewer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full ring-2 ring-white dark:ring-slate-900 bg-blue-100 dark:bg-blue-900/80 text-blue-700 dark:text-blue-200 text-xs font-bold flex items-center justify-center shadow-sm">
                +50
              </div>
            </div>

            {/* Rating Stars & Client Count */}
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                4.9/5 from 50+ happy clients
              </div>
            </div>
          </div>

          {/* Divider on Desktop */}
          <div
            className="hidden md:block w-px h-9 bg-slate-200 dark:bg-slate-800"
            aria-hidden="true"
          />

          {/* Right: Google Verified + CTA Button */}
          <div className="flex items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-3">
              {/* Official Google G Logo SVG */}
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 shrink-0 drop-shadow-sm"
                aria-hidden="true"
              >
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
                />
              </svg>

              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white ">
                  Verified on Google
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 ">
                  Real reviews. Real results.
                </div>
              </div>
            </div>

            <Link
              href={reviewsLink}
              className="rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50/70 hover:bg-blue-100 dark:bg-blue-950/60 dark:hover:bg-blue-900/60 text-blue-600 dark:text-blue-400 font-semibold text-xs sm:text-sm px-4.5 py-2 transition-all flex items-center gap-1.5 shadow-sm hover:gap-2"
              aria-label="Read our client reviews"
            >
              <span>Read Our Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ========================================================
            3. BOTTOM STRIP: TRUSTED BY BUSINESSES ACROSS INDUSTRIES
        ======================================================== */}
        <div className="mt-10 sm:mt-12">
          {/* Section Divider with Centered Badge */}
          <div className="relative mb-6 sm:mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200/80 dark:border-slate-800" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-4 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                TRUSTED BY BUSINESSES ACROSS INDUSTRIES
              </span>
            </div>
          </div>

          {/* Infinite Marquee Client Brand Logos */}
          <div className="relative w-full overflow-hidden  group">
            {/* Left & Right Gradient Fade Masks */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 z-10 bg-gradient-to-r from-background via-background/90 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 z-10 bg-gradient-to-l from-background via-background/90 to-transparent" />

            <div className="flex w-max select-none [--marquee-duration:48s]">
              {/* Marquee Track 1 */}
              <div className="flex shrink-0 items-center gap-9 sm:gap-14 pr-9 sm:pr-14 animate-marquee group-hover:[animation-play-state:paused]">
                {[...clientLogos, ...clientLogos].map((logo, idx) => (
                  <div
                    key={`logo-1-${idx}`}
                    className="flex items-center justify-center h-16 sm:h-18 px-7 sm:px-8 py-2.5 sm:py-3 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-blue-500/40 hover:shadow-md transition-all group/item"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={220}
                      height={70}
                      className="h-10 sm:h-12 w-auto max-w-[170px] sm:max-w-[200px] object-contain mix-blend-multiply dark:invert dark:mix-blend-screen grayscale opacity-85 group-hover/item:opacity-100 group-hover/item:grayscale-0 group-hover/item:scale-105 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Marquee Track 2 (Duplicate for seamless infinite loop) */}
              <div
                className="flex shrink-0 items-center gap-9 sm:gap-14 pr-9 sm:pr-14 animate-marquee group-hover:[animation-play-state:paused]"
                aria-hidden="true"
              >
                {[...clientLogos, ...clientLogos].map((logo, idx) => (
                  <div
                    key={`logo-2-${idx}`}
                    className="flex items-center justify-center h-16 sm:h-18 px-7 sm:px-8 py-2.5 sm:py-3 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-blue-500/40 hover:shadow-md transition-all group/item"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={220}
                      height={70}
                      className="h-10 sm:h-12 w-auto max-w-[170px] sm:max-w-[200px] object-contain mix-blend-multiply dark:invert dark:mix-blend-screen grayscale opacity-85 group-hover/item:opacity-100 group-hover/item:grayscale-0 group-hover/item:scale-105 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

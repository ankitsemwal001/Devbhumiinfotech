"use client";

import { useEffect, useRef, useState } from "react";
import { FileText, Users } from "lucide-react";

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

export function TrustBar() {
  return (
    <section className="relative z-20 w-full -mt-10 sm:-mt-14 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Subtle Ambient Glow Behind Card */}
          <div
            className="absolute -inset-1.5 bg-gradient-to-r from-blue-400/20 via-indigo-300/15 to-purple-400/20 dark:from-blue-600/15 dark:via-indigo-600/10 dark:to-purple-600/15 rounded-[32px] blur-xl -z-10"
            aria-hidden="true"
          />

          <div className="bg-white dark:bg-slate-900 rounded-[28px] border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-blue-500/5 dark:shadow-2xl dark:shadow-black/40 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-slate-800/80">
              {/* Stat 1: Projects Delivered */}
              <div className="p-6 sm:py-8 sm:px-10 flex items-center justify-center gap-5 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 shadow-sm border border-blue-100/60 dark:border-blue-900/40">
                  <FileText className="w-7 h-7 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 font-sans leading-none">
                    <AnimatedCounter value={20} suffix="+" />
                  </div>
                  <div className="text-base font-bold text-slate-900 dark:text-white mt-1 leading-snug">
                    20+ Projects
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                    Websites, software & automations delivered
                  </div>
                </div>
              </div>

              {/* Stat 2: Clients Served */}
              <div className="p-6 sm:py-8 sm:px-10 flex items-center justify-center gap-5 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-sm border border-emerald-100/60 dark:border-emerald-900/40">
                  <Users className="w-7 h-7 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 font-sans leading-none">
                    <AnimatedCounter value={50} suffix="+" />
                  </div>
                  <div className="text-base font-bold text-slate-900 dark:text-white mt-1 leading-snug">
                    50+ Clients
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                    Businesses served across Uttarakhand & India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

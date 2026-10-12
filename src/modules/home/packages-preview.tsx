"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Check,
  ArrowRight,
  Sparkles,
  Globe,
  Cpu,
  Zap,
  ShieldCheck,
  Clock,
  Code2,
  Rocket,
  Bot,
  TrendingUp,
  Layers,
} from "lucide-react";
import { pricingPackages } from "@/content/packages";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Desktop detection hook (lg = 1024px), SSR-safe
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

const getPackageDeliveryBadge = (pkgName: string) => {
  if (pkgName.includes("Starter")) return "⚡ 7–10 Days Delivery";
  if (pkgName.includes("Standard")) return "⚡ 2–3 Weeks Delivery";
  if (pkgName.includes("Comprehensive")) return "⚡ 3–4 Weeks Delivery";
  if (pkgName.includes("Automation")) return "⚡ 1–2 Weeks Sprints";
  if (pkgName.includes("Software")) return "⚡ Milestone Sprints";
  if (pkgName.includes("Growth")) return "⚡ Monthly Retainer";
  return "⚡ Agile Delivery";
};

const getPackageIcon = (pkgName: string) => {
  if (pkgName.includes("Starter")) return <Globe className="w-5 h-5 text-blue-500" />;
  if (pkgName.includes("Standard")) return <Sparkles className="w-5 h-5 text-indigo-500" />;
  if (pkgName.includes("Comprehensive")) return <Rocket className="w-5 h-5 text-purple-500" />;
  if (pkgName.includes("Automation")) return <Bot className="w-5 h-5 text-emerald-500" />;
  if (pkgName.includes("Software")) return <Code2 className="w-5 h-5 text-blue-500" />;
  if (pkgName.includes("Growth")) return <TrendingUp className="w-5 h-5 text-amber-500" />;
  return <Layers className="w-5 h-5 text-blue-500" />;
};

const FEATURED_LIFT = -10; // px, featured card sits slightly higher

export function PackagesPreviewSection() {
  const [activeTab, setActiveTab] = useState<"website" | "custom-solution">("website");
  const gridWrapRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const reduceMotion = useReducedMotion();

  const displayedPackages = pricingPackages.filter(
    (pkg) => pkg.category === activeTab
  );

  // The scroll animation only runs for the 3-up desktop layout.
  const animated = isDesktop && !reduceMotion && displayedPackages.length === 3;

  /**
   * Progress is measured on the cards grid itself (not the whole section),
   * so 0 = grid just entering the bottom of the screen and
   * 1 = grid top has reached ~38% of the viewport, i.e. cards are fully
   * visible and settled. It reverses when the user scrolls back up.
   */
  const { scrollYProgress } = useScroll({
    target: gridWrapRef,
    offset: ["start 92%", "start 38%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.35,
    restDelta: 0.0005,
  });

  /**
   * Exact distance (px) a side card must travel to sit directly behind the
   * middle card = card width + grid gap. Measured from layout, so it stays
   * correct at any screen width. (A fixed "105%" drifts from the real gap.)
   */
  const step = useMotionValue(0);

  useEffect(() => {
    const wrap = gridWrapRef.current;
    if (!wrap) return;

    const measure = () => {
      const cards = wrap.firstElementChild?.children;
      if (cards && cards.length >= 2) {
        step.set(
          (cards[1] as HTMLElement).offsetLeft -
            (cards[0] as HTMLElement).offsetLeft
        );
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [activeTab, isDesktop, step]);

  const leftX = useTransform([progress, step], ([p, s]: number[]) => (1 - p) * s);
  const rightX = useTransform([progress, step], ([p, s]: number[]) => -(1 - p) * s);

  const sideOpacity = useTransform(progress, [0, 0.35, 1], [0.3, 1, 1]);
  const sideScale = useTransform(progress, [0, 1], [0.94, 1]);
  const middleScale = useTransform(progress, [0, 1], [0.98, 1.02]);

  const getMotionStyle = (index: number, isFeatured: boolean) => {
    if (!animated) return undefined;
    const y = isFeatured ? FEATURED_LIFT : 0;

    // Middle card always stays on top so the side cards slide out from behind it
    if (index === 1) return { y, scale: middleScale, zIndex: 30 };
    if (index === 0)
      return { x: leftX, y, opacity: sideOpacity, scale: sideScale, zIndex: 10 };
    return { x: rightX, y, opacity: sideOpacity, scale: sideScale, zIndex: 10 };
  };

  return (
    <section
      id="packages"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/60 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-7xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-900">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-normal">
            Clear, Predictable Pricing
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Transparent starting baselines for custom website architecture, alongside tailored scopes for full-stack software and AI automation.
          </p>

          {/* Segmented Tab Controller */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/70 dark:bg-slate-800/80 border border-slate-300/60 dark:border-slate-700/60 shadow-inner">
              <button
                type="button"
                onClick={() => setActiveTab("website")}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200",
                  activeTab === "website"
                    ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-md shadow-slate-900/5 dark:shadow-black/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                )}
              >
                <Globe className="w-4 h-4" />
                <span>Website Packages (Starting from)</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("custom-solution")}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200",
                  activeTab === "custom-solution"
                    ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-md shadow-slate-900/5 dark:shadow-black/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                )}
              >
                <Cpu className="w-4 h-4" />
                <span>Custom Software & Automation</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stable wrapper = scroll target. Inner grid re-mounts on tab change. */}
        <div ref={gridWrapRef}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch pt-4"
          >
            {displayedPackages.map((pkg, index) => {
              const isFeatured =
                pkg.popular || (activeTab === "custom-solution" && index === 1);
              const deliveryBadge = getPackageDeliveryBadge(pkg.name);
              const PackageIcon = getPackageIcon(pkg.name);

              return (
                <motion.div
                  key={pkg.id}
                  style={getMotionStyle(index, !!isFeatured)}
                  className={cn(
                    // NOTE: no `transition-all` here. A CSS transition on transform/opacity
                    // fights Framer's per-frame updates and makes scroll animation lag.
                    "flex flex-col justify-between p-7 sm:p-8 rounded-[28px] bg-white dark:bg-slate-900 border transition-[box-shadow,border-color] duration-300 relative group will-change-transform",
                    isFeatured
                      ? "border-blue-500 dark:border-blue-500 shadow-xl shadow-blue-500/10 ring-2 ring-blue-500/20 z-20"
                      : "border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 z-10",
                    // Class-based lift only when Framer isn't driving the transform
                    isFeatured && !animated && "lg:-translate-y-2.5"
                  )}
                >
                  {/* Popular / Recommended Pill Badge */}
                  {isFeatured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-500/25 flex items-center gap-1.5 whitespace-nowrap">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Most Popular Choice</span>
                    </div>
                  )}

                  <div>
                    {/* Card Header: Icon + Delivery Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center">
                        {PackageIcon}
                      </div>
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50">
                        {deliveryBadge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 min-h-[38px] leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Price Box */}
                    <div className="mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-4">
                        {pkg.priceType === "starting-from" && (
                          <span className="text-lg font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 shrink-0">
                            Starts at:
                          </span>
                        )}
                        <span className="text-xl sm:text-4xl font-extrabold text-slate-900 dark:text-white ">
                          {pkg.price}
                        </span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                        What&apos;s Included:
                      </span>
                      <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <div
                              className={cn(
                                "w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                                feature.included
                                  ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400"
                                  : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                              )}
                            >
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                            <span
                              className={cn(
                                "leading-snug",
                                feature.included
                                  ? ""
                                  : "line-through text-slate-400 dark:text-slate-600"
                              )}
                            >
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card CTA */}
                  <div>
                    <Button
                      asChild
                      className={cn(
                        "w-full py-3.5 h-auto rounded-2xl font-semibold text-sm transition-all duration-200",
                        isFeatured
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-blue-600/30 hover:shadow-lg hover:shadow-blue-600/40"
                          : "bg-slate-900 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-white shadow-sm"
                      )}
                    >
                      <Link
                        href="/contact/"
                        className="flex items-center justify-center gap-2 group-hover:gap-2.5 transition-all"
                      >
                        <span>{pkg.cta || "Discuss Your Project"}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Value Guarantees Strip */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/50">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                No Hidden Costs
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                Fixed milestones & written quotes
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-900/50">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Full IP Ownership
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                100% source code & assets handover
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 border border-purple-100 dark:border-purple-900/50">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                On-Time Delivery
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                Agile sprints with weekly demos
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 border border-amber-100 dark:border-amber-900/50">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Direct Team Access
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                WhatsApp & calls with actual devs
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-10 max-w-4xl mx-auto text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          <span>
            Note: All prices are clear starting baselines. Final investment is calculated based on exact page counts, custom functional workflows, design complexity, and third-party API requirements.
          </span>
        </div>
      </div>
    </section>
  );
}
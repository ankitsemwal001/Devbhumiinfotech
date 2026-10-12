"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/common/particle-background";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const trackCtaClick = (label: string) => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "cta_click",
        cta_location: "hero",
        cta_label: label,
      });
    }
  };

  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[680px] xl:min-h-[750px] flex items-center overflow-hidden bg-slate-950 text-white">
      {/* Background Image: devbhoomi_hero_bg.webp with high-contrast gradient overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/devbhoomi_hero_bg.webp"
          alt="Devbhoomi Infotech Solutions Digital Agency"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-center lg:object-right select-none pointer-events-none"
        />
        {/* Dark gradient on the left ensures all text remains crisp, vibrant and readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40 sm:via-slate-950/80 lg:from-slate-950/95 lg:via-slate-950/65 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/80" />
      </div>

      {/* Background Particle Network (Desktop only, non-blocking) */}
      <div className="absolute inset-0 z-[1] opacity-40 pointer-events-none">
        <ParticleBackground />
      </div>

      <div className="relative z-10 w-full max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14 xl:pt-16 pb-14 sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="max-w-xl lg:max-w-2xl xl:max-w-[700px] text-left -translate-y-2 sm:-translate-y-4 lg:-translate-y-6">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-medium mb-5 sm:mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Headquartered in Rishikesh, Uttarakhand · Serving clients worldwide</span>
          </div>

          {/* H1 Heading (using ibrand display font) */}
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold mb-5 sm:mb-6 leading-[1.14]">
            Websites, software and AI automation that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              help your business grow
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-xl xl:max-w-2xl mb-8 sm:mb-10 leading-relaxed font-normal">
            Headquartered in Rishikesh, Uttarakhand — serving clients worldwide, remotely. We engineer websites, custom software, mobile apps, automation, and search visibility built around your business goals.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              onClick={() => trackCtaClick("Discuss Your Project")}
              className="w-full sm:w-auto rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 h-12 shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
            >
              <Link href="/contact/" className="flex items-center gap-2">
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              onClick={() => trackCtaClick("Explore Our Work")}
              className="w-full sm:w-auto rounded-full border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:text-white px-8 h-12 backdrop-blur-sm"
            >
              <Link href="/projects/">Explore Our Work</Link>
            </Button>

            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              onClick={() => trackCtaClick("Direct Call")}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all shadow-md hover:scale-105"
              aria-label={`Call us at ${siteConfig.contact.phone}`}
              title={`Call ${siteConfig.contact.phone}`}
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

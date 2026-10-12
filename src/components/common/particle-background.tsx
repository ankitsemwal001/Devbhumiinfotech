"use client";

import { useCallback, useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
};

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only mount particle canvas on desktop and if reduced-motion is not requested
    const checkEligible = () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      setIsDesktop(window.innerWidth >= 1024 && !prefersReducedMotion);
    };

    checkEligible();
    window.addEventListener("resize", checkEligible);
    return () => window.removeEventListener("resize", checkEligible);
  }, []);

  const drawParticles = useCallback(
    (ctx: CanvasRenderingContext2D, particles: Particle[]) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > ctx.canvas.width || particle.x < 0) {
          particle.speedX *= -1;
        }

        if (particle.y > ctx.canvas.height || particle.y < 0) {
          particle.speedY *= -1;
        }
      });

      // Proximity connection lines (lightweight threshold)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.12 - distance / 1000})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    },
    []
  );

  useEffect(() => {
    if (!isDesktop) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isVisible = true;
    let animationId: number;

    // Pause animation when hero is scrolled out of viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const particleCount = 28; // Lightweight budget to guarantee 60fps and zero LCP penalty
    const particles: Particle[] = [];

    const primaryColor = "rgba(59, 130, 246, 0.4)"; // Subtle blue
    const accentColor = "rgba(16, 185, 129, 0.35)"; // Subtle emerald

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.25,
        color: Math.random() > 0.5 ? primaryColor : accentColor,
      });
    }

    const animate = () => {
      if (isVisible) {
        drawParticles(ctx, particles);
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      observer.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, [drawParticles, isDesktop, theme]);

  if (!isDesktop) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-60"
      aria-hidden="true"
    />
  );
}

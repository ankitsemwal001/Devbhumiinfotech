"use client"

import { useCallback, useRef, useEffect } from "react"
import { useTheme } from "next-themes"

type Particle = {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  const drawParticles = useCallback(
    (ctx: CanvasRenderingContext2D, particles: Particle[]) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x > ctx.canvas.width || particle.x < 0) {
          particle.speedX *= -1
        }

        if (particle.y > ctx.canvas.height || particle.y < 0) {
          particle.speedY *= -1
        }
      })

      particles.forEach((p1, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.strokeStyle =
              theme === "dark"
                ? `rgba(138, 43, 226, ${0.2 - distance / 750})`
                : `rgba(75, 0, 130, ${0.2 - distance / 750})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      })
    },
    [theme]
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    const resolvedTheme = theme ?? "light"

    const primaryColor =
      resolvedTheme === "dark"
        ? "rgba(138, 43, 226, 0.8)"
        : "rgba(75, 0, 130, 0.8)"

    const secondaryColor =
      resolvedTheme === "dark"
        ? "rgba(0, 191, 255, 0.8)"
        : "rgba(0, 128, 255, 0.8)"

    const particleCount = Math.min(Math.floor(window.innerWidth / 12), 100)
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        color: Math.random() > 0.5 ? primaryColor : secondaryColor,
      })
    }

    let animationId: number
    const animate = () => {
      drawParticles(ctx, particles)
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [drawParticles, theme])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  )
}

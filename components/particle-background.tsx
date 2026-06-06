"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  opacity: number
}

const ACCENT_COLORS = [
  "34,211,238",   // cyan
  "167,139,250",  // violet
  "52,211,153",   // emerald
]

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const CONNECTION_DIST = 140
    const MOUSE_DIST = 180
    const PARTICLE_COUNT = 80

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function initParticles() {
      if (!canvas) return
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => {
        const color = ACCENT_COLORS[Math.floor(Math.random() * ACCENT_COLORS.length)]
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.5 + 0.8,
          color,
          opacity: Math.random() * 0.5 + 0.3,
        }
      })
    }

    function draw() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const mouse = mouseRef.current

      // Update positions
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
      }

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.18
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(${a.color},${alpha})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }

        // Mouse-proximity connections
        const p = particles[i]
        const mdx = p.x - mouse.x
        const mdy = p.y - mouse.y
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
        if (mdist < MOUSE_DIST) {
          const alpha = (1 - mdist / MOUSE_DIST) * 0.5
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(${p.color},${alpha})`
          ctx.lineWidth = 0.9
          ctx.stroke()
        }
      }

      // Draw dots
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color},${p.opacity})`
        ctx.fill()

        // Tiny outer glow ring
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color},0.05)`
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(draw)
    }

    function onMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    function onMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    resize()
    initParticles()
    draw()

    window.addEventListener("resize", () => { resize(); initParticles() })
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseleave", onMouseLeave)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", () => { resize(); initParticles() })
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseleave", onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  )
}

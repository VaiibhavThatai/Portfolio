"use client"

import { useEffect, useState } from "react"
import { ArrowRight, MapPin, Mail, Briefcase, GraduationCap, Code2 } from "lucide-react"

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const ROLES = [
  "Software Development Engineer",
  "Backend Systems Builder",
  "Open Source Contributor",
  "Distributed Systems Enthusiast",
]

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("")
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause)
        } else {
          setCharIdx((c) => c + 1)
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setWordIdx((w) => (w + 1) % words.length)
          setCharIdx(0)
        } else {
          setCharIdx((c) => c - 1)
        }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

const QUICK_FACTS = [
  { icon: Briefcase, label: "Current Role", value: "SDE @ RapidFort", color: "#22d3ee" },
  { icon: GraduationCap, label: "Education", value: "B.Tech · NIT Jalandhar · 8.57 CGPA", color: "#a78bfa" },
  { icon: Code2, label: "Focus", value: "Full-Stack · Backend · Agentic AI", color: "#34d399" },
]

const TECH_CLOUD = [
  { name: "Python", color: "#22d3ee" },
  { name: "Golang", color: "#a78bfa" },
  { name: "TypeScript", color: "#34d399" },
  { name: "Kubernetes", color: "#22d3ee" },
  { name: "FastAPI", color: "#a78bfa" },
  { name: "React", color: "#34d399" },
  { name: "Docker", color: "#22d3ee" },
  { name: "PostgreSQL", color: "#a78bfa" },
]

export default function Hero() {
  const typedText = useTypewriter(ROLES)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Extra hero-specific ambient layer on top of body background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/4 w-[700px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle at 30% 40%, rgba(34,211,238,0.18) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle at 70% 60%, rgba(167,139,250,0.20) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left column ── */}
          <div className={`flex flex-col gap-6 ${mounted ? "animate-fade-up" : "opacity-0"}`}>

            {/* Status badge */}
            <div>
              <span
                className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border"
                style={{ borderColor: "rgba(52,211,153,0.4)", backgroundColor: "rgba(52,211,153,0.08)", color: "#34d399" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <div className="flex flex-col gap-1">
              <p className="font-mono text-sm text-[#7a8aaa] tracking-widest uppercase">Hello, I&apos;m</p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance leading-none">
                <span className="gradient-text">Vaibhav</span>
                <br />
                <span className="text-[#e8edf8]">Thatai</span>
              </h1>
            </div>

            {/* Typewriter */}
            <div className="flex items-center gap-2 h-7">
              <span className="text-base md:text-lg text-[#7a8aaa] font-light">/&gt;</span>
              <span className="text-base md:text-lg font-medium text-[#22d3ee]">{typedText}</span>
              <span className="cursor-blink w-0.5 h-5 bg-[#22d3ee] rounded-full" />
            </div>

            {/* Bio */}
            <p className="text-[#7a8aaa] leading-relaxed text-pretty max-w-xl">
              Building high-impact backend systems and full-stack platforms. Focused on container
              security, distributed systems, and clean engineering with Python, Go &amp; TypeScript.
            </p>

            {/* Social links */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#7a8aaa]">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-[#22d3ee]" />
                Bengaluru, India
              </span>
              <a href="https://github.com/VaiibhavThatai" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#e8edf8] transition-colors">
                <GithubIcon size={13} />VaiibhavThatai
              </a>
              <a href="https://linkedin.com/in/vaiibhav-thatai" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#e8edf8] transition-colors">
                <LinkedinIcon size={13} />vaiibhav-thatai
              </a>
              <a href="mailto:vaiibhavsthatai@gmail.com"
                className="flex items-center gap-1.5 hover:text-[#e8edf8] transition-colors">
                <Mail size={13} className="text-[#a78bfa]" />vaiibhavsthatai@gmail.com
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => scrollTo("#work")}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #22d3ee 0%, #a78bfa 100%)", color: "#0b0f1e" }}
              >
                View Work <ArrowRight size={15} />
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border text-[#e8edf8] hover:border-[#22d3ee]/50 hover:bg-white/5 transition-all duration-200"
                style={{ borderColor: "rgba(255,255,255,0.12)" }}
              >
                Get in touch
              </button>
            </div>
          </div>

          {/* ── Right column — profile card ── */}
          <div
            className={`hidden lg:flex flex-col gap-4 ${mounted ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {/* Avatar + name banner */}
            <div
              className="rounded-2xl overflow-hidden glow-cyan"
              style={{ border: "1px solid rgba(34,211,238,0.18)", background: "rgba(17,24,39,0.7)", backdropFilter: "blur(12px)" }}
            >
              {/* Top bar with gradient strip */}
              <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #22d3ee 0%, #a78bfa 50%, #34d399 100%)" }} />

              <div className="p-6 flex flex-col gap-5">
                {/* Avatar row */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold shrink-0"
                    style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.2) 0%, rgba(167,139,250,0.2) 100%)", border: "1px solid rgba(34,211,238,0.25)", color: "#22d3ee" }}
                  >
                    VT
                  </div>
                  <div>
                    <p className="text-base font-bold text-[#e8edf8]">Vaibhav Thatai</p>
                    <p className="text-sm text-[#7a8aaa] mt-0.5">Software Development Engineer</p>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#34d399] mt-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
                      Open to roles
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

                {/* Quick facts */}
                <div className="flex flex-col gap-3">
                  {QUICK_FACTS.map(({ icon: Icon, label, value, color }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: `${color}18`, border: `1px solid ${color}30` }}
                      >
                        <Icon size={14} style={{ color }} />
                      </div>
                      <div>
                        <p className="text-xs text-[#7a8aaa]">{label}</p>
                        <p className="text-sm font-medium text-[#e8edf8] mt-0.5">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

                {/* Tech cloud */}
                <div>
                  <p className="text-xs font-mono text-[#7a8aaa] uppercase tracking-widest mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {TECH_CLOUD.map(({ name, color }) => (
                      <span
                        key={name}
                        className="text-xs font-mono px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: `${color}12`, border: `1px solid ${color}28`, color: `${color}dd` }}
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mini stat strip below the card */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "2+", label: "Years Experience", color: "#22d3ee" },
                { value: "98.94", label: "JEE Percentile", color: "#a78bfa" },
                { value: "500+", label: "DSA Problems", color: "#34d399" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-4 text-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <p className="text-xl font-bold font-mono" style={{ color: stat.color }}>{stat.value}</p>
                  <p className="text-xs text-[#7a8aaa] mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

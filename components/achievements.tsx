"use client"

import { useEffect, useRef, useState } from "react"
import SectionLabel from "./section-label"

const ACHIEVEMENTS = [
  {
    title: "RapidFort Spot Award",
    detail: "Awarded consecutively in 2024 & 2025 for exceptional performance and high-impact engineering delivery.",
    highlight: "2024 & 2025",
    accent: "#22d3ee",
    icon: "★",
  },
  {
    title: "500+ DSA Problems",
    detail: "Solved over 500 data structures and algorithms problems across LeetCode and GeeksforGeeks.",
    highlight: "LeetCode · GFG",
    accent: "#a78bfa",
    icon: "⬡",
  },
  {
    title: "CodeChef Global Rank 89",
    detail: "Secured global rank 89 at Cook-Off by CodeChef and global rank 168 at LunchTime99.",
    highlight: "Top 100 globally",
    accent: "#34d399",
    icon: "◆",
  },
  {
    title: "JEE MAIN 98.94 Percentile",
    detail: "Scored 98.94 percentile among 1M+ participants in JEE MAIN 2020.",
    highlight: "Top 1% nationally",
    accent: "#22d3ee",
    icon: "◈",
  },
]

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

export default function Achievements() {
  const { ref, inView } = useInView()

  return (
    <section
      id="achievements"
      className="py-28 px-6 max-w-6xl mx-auto"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(139,92,246,0.02) 50%, transparent 100%)",
      }}
    >
      <SectionLabel index="04" title="Achievements" accent="violet" />

      <div ref={ref} className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
        {ACHIEVEMENTS.map((item, i) => (
          <div
            key={item.title}
            className="group relative rounded-2xl p-6 overflow-hidden"
            style={{
              backgroundColor: `${item.accent}06`,
              border: `1px solid ${item.accent}20`,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s, border-color 0.3s, box-shadow 0.3s`,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = `${item.accent}45`
              el.style.boxShadow = `0 0 28px ${item.accent}12`
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = `${item.accent}20`
              el.style.boxShadow = "none"
            }}
          >
            {/* Corner glow */}
            <div
              className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-20 blur-2xl pointer-events-none"
              style={{ backgroundColor: item.accent }}
            />

            <div className="flex items-start gap-4 relative">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-base shrink-0 font-bold"
                style={{
                  backgroundColor: `${item.accent}15`,
                  color: item.accent,
                  border: `1px solid ${item.accent}30`,
                }}
              >
                {item.icon}
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-bold" style={{ color: "#e8edf8" }}>{item.title}</h3>
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${item.accent}15`,
                      color: item.accent,
                      border: `1px solid ${item.accent}30`,
                    }}
                  >
                    {item.highlight}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#7a8aaa" }}>{item.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

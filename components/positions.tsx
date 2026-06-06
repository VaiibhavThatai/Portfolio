"use client"

import { useEffect, useRef, useState } from "react"
import SectionLabel from "./section-label"

const POSITIONS = [
  {
    role: "Co-Founder & Management Lead",
    organization: "TEDxNITJalandhar",
    period: "Sept 2022 — Sept 2023",
    description:
      "Co-founded and led the management team for TEDxNITJalandhar, overseeing event planning, speaker curation, logistics, and team coordination for one of the most prestigious college-level TEDx events in Punjab.",
    accent: "#a78bfa",
    icon: "TED",
    tags: ["Leadership", "Event Management", "Public Speaking", "Team Building"],
  },
]

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

export default function Positions() {
  const { ref, inView } = useInView()

  return (
    <section id="positions" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionLabel index="06" title="Positions of Responsibility" accent="violet" />

      <div ref={ref} className="mt-14 flex flex-col gap-5">
        {POSITIONS.map((pos, i) => (
          <div
            key={pos.role}
            className="relative rounded-2xl p-6 md:p-8 overflow-hidden"
            style={{
              backgroundColor: `${pos.accent}06`,
              border: `1px solid ${pos.accent}20`,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
            }}
          >
            {/* Background glow */}
            <div
              className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full opacity-10 blur-3xl pointer-events-none"
              style={{ backgroundColor: pos.accent }}
            />

            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start relative">
              {/* Icon badge */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-base shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${pos.accent}25 0%, ${pos.accent}10 100%)`,
                  color: pos.accent,
                  border: `1px solid ${pos.accent}35`,
                  letterSpacing: "0.05em",
                }}
              >
                {pos.icon}
              </div>

              <div className="flex flex-col gap-3 flex-1">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold" style={{ color: "#e8edf8" }}>{pos.role}</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold" style={{ color: pos.accent }}>
                      {pos.organization}
                    </span>
                    <span style={{ color: "#7a8aaa" }}>·</span>
                    <span className="text-xs font-mono" style={{ color: "#7a8aaa" }}>{pos.period}</span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: "#7a8aaa" }}>
                  {pos.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {pos.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-md"
                      style={{
                        backgroundColor: `${pos.accent}12`,
                        color: `${pos.accent}cc`,
                        border: `1px solid ${pos.accent}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

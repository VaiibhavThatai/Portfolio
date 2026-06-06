"use client"

import { useEffect, useRef, useState } from "react"
import SectionLabel from "./section-label"

const SKILL_GROUPS = [
  {
    category: "Languages",
    description: "Core programming",
    accent: "#22d3ee",
    bg: "rgba(34,211,238,0.06)",
    border: "rgba(34,211,238,0.15)",
    skills: ["Python", "Golang", "TypeScript", "JavaScript", "C++", "Bash"],
  },
  {
    category: "Backend & APIs",
    description: "Server-side systems",
    accent: "#a78bfa",
    bg: "rgba(167,139,250,0.06)",
    border: "rgba(167,139,250,0.15)",
    skills: ["FastAPI", "Node.js", "REST API Design", "Microservices", "Distributed Systems"],
  },
  {
    category: "Frontend",
    description: "UI & interaction",
    accent: "#34d399",
    bg: "rgba(52,211,153,0.06)",
    border: "rgba(52,211,153,0.15)",
    skills: ["React.js", "TypeScript", "HTML5", "CSS3", "REST Integration"],
  },
  {
    category: "Infrastructure",
    description: "DevOps & cloud",
    accent: "#22d3ee",
    bg: "rgba(34,211,238,0.06)",
    border: "rgba(34,211,238,0.15)",
    skills: ["Docker", "Kubernetes", "Apache Airflow", "CI/CD", "GitHub Actions", "Linux"],
  },
  {
    category: "Databases",
    description: "Data storage",
    accent: "#a78bfa",
    bg: "rgba(167,139,250,0.06)",
    border: "rgba(167,139,250,0.15)",
    skills: ["PostgreSQL", "Redis", "MongoDB", "MySQL"],
  },
  {
    category: "Core CS",
    description: "Fundamentals",
    accent: "#34d399",
    bg: "rgba(52,211,153,0.06)",
    border: "rgba(52,211,153,0.15)",
    skills: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
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

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id="skills" className="py-28 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <SectionLabel index="01" title="Skills" accent="cyan" />

        <p className="mt-4 text-[#7a8aaa] text-base max-w-xl">
          Technologies I work with daily — from systems programming to cloud infrastructure.
        </p>

        <div ref={ref} className="mt-14 flex flex-col gap-3">
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={group.category}
              className="group rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 transition-all duration-300"
              style={{
                background: inView ? group.bg : "transparent",
                border: `1px solid ${inView ? group.border : "rgba(255,255,255,0.04)"}`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(-20px)",
                transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s, box-shadow 0.3s ease`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 32px ${group.accent}18, 0 4px 24px rgba(0,0,0,0.3)`
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none"
              }}
            >
              {/* Category label — fixed width so all rows align */}
              <div className="sm:w-44 shrink-0 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: group.accent, boxShadow: `0 0 6px ${group.accent}` }}
                  />
                  <span className="text-sm font-bold tracking-tight" style={{ color: group.accent }}>
                    {group.category}
                  </span>
                </div>
                <span className="text-xs text-[#7a8aaa] pl-4">{group.description}</span>
              </div>

              {/* Vertical divider on desktop */}
              <div
                className="hidden sm:block shrink-0 w-px self-stretch"
                style={{ background: `linear-gradient(to bottom, transparent, ${group.accent}30, transparent)` }}
              />

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium px-3.5 py-1.5 rounded-full cursor-default transition-all duration-200"
                    style={{
                      backgroundColor: `${group.accent}10`,
                      border: `1px solid ${group.accent}22`,
                      color: "#e8edf8",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.backgroundColor = `${group.accent}22`
                      el.style.borderColor = `${group.accent}55`
                      el.style.color = group.accent
                      el.style.transform = "scale(1.04)"
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.backgroundColor = `${group.accent}10`
                      el.style.borderColor = `${group.accent}22`
                      el.style.color = "#e8edf8"
                      el.style.transform = "scale(1)"
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

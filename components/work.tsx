"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import SectionLabel from "./section-label"

const EXPERIENCES = [
  {
    company: "RapidFort",
    companyUrl: "https://rapidfort.com",
    role: "Software Development Engineer",
    period: "July 2024 — Present",
    type: "Full-time",
    stack: ["Python", "Golang", "JavaScript", "FastAPI", "PostgreSQL", "Docker", "Kubernetes", "Redis"],
    bullets: [
      "Led development of RapidFort's container vulnerability scanning platform, powering detection across Linux-based container ecosystems.",
      "Built a cross-advisory vulnerability intelligence platform using FastAPI, React.js, PostgreSQL, and Kubernetes — reducing analyst triage time by 40%.",
      "Designed JIRA workflow integrations for intelligent issue creation, SLA tracking, and remediation — reducing manual operations overhead by 65%.",
      "Contributed to open-source vulnerability scanning ecosystems: Aquasecurity and Anchore.",
      "Delivered 70%+ reduction in scanning engine processing time through algorithmic improvements and parallelization.",
    ],
  },
  {
    company: "RapidFort",
    companyUrl: "https://rapidfort.com",
    role: "SDE Intern",
    period: "January 2024 — July 2024",
    type: "Internship",
    stack: ["Python", "Redis", "Docker", "SQL", "Metabase", "JavaScript", "Bash"],
    bullets: [
      "Developed an automated testing suite to detect inconsistencies between staging and production, reducing regression issues by 80%.",
      "Engineered data pipeline optimizations that cut vulnerability scraping from 2 days to under 8 hours.",
      "Built a comparison and reporting tool with Metabase dashboards to highlight gaps in vulnerability detection.",
    ],
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

export default function Work() {
  const { ref, inView } = useInView()

  return (
    <section
      id="work"
      className="py-28 px-6 max-w-6xl mx-auto"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.015) 30%, rgba(139,92,246,0.015) 70%, transparent 100%)",
      }}
    >
      <SectionLabel index="02" title="Work Experience" accent="violet" />

      <div ref={ref} className="mt-14 relative">
        {/* Center line */}
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(139,92,246,0.4) 15%, rgba(6,182,212,0.4) 85%, transparent)",
          }}
        />

        <div className="flex flex-col gap-16">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={`${exp.role}-${i}`}
              className={`relative flex flex-col md:flex-row gap-8 items-start ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${i * 0.2}s, transform 0.6s ease ${i * 0.2}s`,
              }}
            >
              {/* Timeline dot */}
              <div
                className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full items-center justify-center z-10"
                style={{ backgroundColor: "#0b0f1e", border: `2px solid ${i === 0 ? "#22d3ee" : "#a78bfa"}` }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: i === 0 ? "#22d3ee" : "#a78bfa" }} />
              </div>

              {/* Card — takes up ~45% width each side */}
              <div className="w-full md:w-[45%]">
                <div
                  className="rounded-xl p-6 flex flex-col gap-5 card-hover"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.02)",
                    borderColor: i === 0 ? "rgba(6,182,212,0.18)" : "rgba(139,92,246,0.18)",
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3
                        className="text-lg font-bold"
                        style={{ color: "#e8edf8" }}
                      >
                        {exp.role}
                      </h3>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-md transition-colors shrink-0"
                        style={{ color: "#7a8aaa" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#22d3ee")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#7a8aaa")}
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span
                        className="font-semibold"
                        style={{ color: i === 0 ? "#22d3ee" : "#a78bfa" }}
                      >
                        {exp.company}
                      </span>
                      <span style={{ color: "#7a8aaa" }}>·</span>
                      <span className="font-mono text-xs" style={{ color: "#7a8aaa" }}>{exp.period}</span>
                    </div>
                    <span
                      className="inline-flex w-fit text-xs font-mono px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: i === 0 ? "rgba(6,182,212,0.1)" : "rgba(139,92,246,0.1)",
                        color: i === 0 ? "#22d3ee" : "#a78bfa",
                        border: `1px solid ${i === 0 ? "rgba(6,182,212,0.25)" : "rgba(139,92,246,0.25)"}`,
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "#7a8aaa" }}>
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: i === 0 ? "#22d3ee" : "#a78bfa" }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.04)",
                          color: "#7a8aaa",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-[45%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

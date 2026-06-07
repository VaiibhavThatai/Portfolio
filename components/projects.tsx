"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import SectionLabel from "./section-label"

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

const PROJECTS = [
  {
    name: "Undercover Game",
    period: "Jun 2025",
    description:
      "Open-source multiplayer web game featuring real-time role assignment, dynamic game rooms, player stats, and customizable word packs.",
    stack: ["React.js", "TypeScript", "Material UI"],
    githubUrl: "https://github.com/VaiibhavThatai",
    liveUrl: "https://undercover-beta.netlify.app/",
    accent: "#22d3ee",
    tag: "Open Source",
  },
  {
    name: "SonicShift",
    period: "Jul – Aug 2024",
    description:
      "Distributed media conversion platform with modular microservices for auth, notifications, API gateway, and media conversion — orchestrated with Kubernetes.",
    stack: ["Flask", "MongoDB", "Docker", "Kubernetes", "RabbitMQ", "MySQL"],
    githubUrl: "https://github.com/VaiibhavThatai",
    accent: "#a78bfa",
    tag: "Distributed",
  },
  {
    name: "CodeSync",
    period: "Jul – Aug 2023",
    description:
      "Automated data scraper that collects accepted solutions from CodeForces, AtCoder, and CodeChef — synced to GitHub via API with Apache Airflow.",
    stack: ["Python", "GitHub API", "Playwright", "Apache Airflow"],
    githubUrl: "https://github.com/VaiibhavThatai",
    accent: "#34d399",
    tag: "Automation",
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

export default function Projects() {
  const { ref, inView } = useInView()

  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionLabel index="03" title="Projects" accent="emerald" />

      <div ref={ref} className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
        {PROJECTS.map((project, i) => (
          <article
            key={project.name}
            className="group relative flex flex-col gap-5 rounded-2xl p-6 overflow-hidden"
            style={{
              backgroundColor: `${project.accent}08`,
              border: `1px solid ${project.accent}22`,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s, box-shadow 0.3s ease, border-color 0.3s ease`,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = `${project.accent}55`
              el.style.boxShadow = `0 0 30px ${project.accent}15, 0 8px 32px rgba(0,0,0,0.4)`
              el.style.transform = "translateY(-4px)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = `${project.accent}22`
              el.style.boxShadow = "none"
              el.style.transform = inView ? "translateY(0)" : "translateY(24px)"
            }}
          >
            {/* Top glow strip */}
            <div
              className="absolute top-0 left-0 right-0 h-px opacity-60"
              style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
            />

            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex flex-col gap-1.5">
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded w-fit"
                  style={{ backgroundColor: `${project.accent}15`, color: project.accent }}
                >
                  {project.tag}
                </span>
                <h3 className="text-base font-bold" style={{ color: "#e8edf8" }}>
                  {project.name}
                </h3>
                <p className="text-xs font-mono" style={{ color: "#7a8aaa" }}>{project.period}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {"liveUrl" in project && project.liveUrl && (
                  <a
                    href={project.liveUrl as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} live`}
                    className="flex items-center gap-1 p-2 rounded-lg transition-all duration-200"
                    style={{ color: "#7a8aaa", backgroundColor: "rgba(255,255,255,0.04)" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.color = project.accent
                      el.style.backgroundColor = `${project.accent}15`
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.color = "#7a8aaa"
                      el.style.backgroundColor = "rgba(255,255,255,0.04)"
                    }}
                  >
                    <ArrowUpRight size={14} />
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                  className="flex items-center gap-1 p-2 rounded-lg transition-all duration-200"
                  style={{ color: "#7a8aaa", backgroundColor: "rgba(255,255,255,0.04)" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.color = project.accent
                    el.style.backgroundColor = `${project.accent}15`
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.color = "#7a8aaa"
                    el.style.backgroundColor = "rgba(255,255,255,0.04)"
                  }}
                >
                  <GithubIcon size={14} />
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed flex-1" style={{ color: "#7a8aaa" }}>
              {project.description}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    color: `${project.accent}bb`,
                    border: `1px solid ${project.accent}18`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

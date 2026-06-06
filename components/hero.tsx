"use client"

import { ArrowDown, Mail, MapPin } from "lucide-react"

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

export default function Hero() {
  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-14"
    >
      <div className="flex flex-col gap-6 py-24 md:py-32">
        {/* Status pill */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Available for opportunities
          </span>
        </div>

        {/* Name & title */}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground text-balance leading-tight">
            Vaibhav Thatai
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-tight">
            Software Development Engineer
          </p>
        </div>

        {/* Bio */}
        <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
          I build high-impact backend systems and full-stack platforms. Currently at{" "}
          <a
            href="https://rapidfort.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 decoration-border hover:decoration-accent transition-colors"
          >
            RapidFort
          </a>
          , where I lead development of container vulnerability scanning infrastructure — reducing triage time by 40% and
          cutting processing overhead by 70%. I work primarily with Python, Go, and TypeScript, with a strong focus on
          distributed systems and clean engineering.
        </p>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin size={13} />
            Bengaluru, India
          </span>
          <a
            href="https://github.com/VaiibhavThatai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <GithubIcon size={13} />
            VaiibhavThatai
          </a>
          <a
            href="https://linkedin.com/in/vaiibhav-thatai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <LinkedinIcon size={13} />
            vaiibhav-thatai
          </a>
          <a
            href="mailto:vaiibhavsthatai@gmail.com"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Mail size={13} />
            vaiibhavsthatai@gmail.com
          </a>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={scrollToWork}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
          >
            View Work
            <ArrowDown size={14} />
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border text-foreground rounded-md hover:bg-muted transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Divider line */}
      <div className="border-t border-border w-full" />
    </section>
  )
}

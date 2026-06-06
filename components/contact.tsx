"use client"

import { useState } from "react"
import { Mail, Send, CheckCircle } from "lucide-react"
import SectionLabel from "./section-label"

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const LINKS = [
  { icon: Mail, label: "Email", value: "vaiibhavsthatai@gmail.com", href: "mailto:vaiibhavsthatai@gmail.com", accent: "#22d3ee" },
  { icon: GithubIcon, label: "GitHub", value: "VaiibhavThatai", href: "https://github.com/VaiibhavThatai", accent: "#e8edf8" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "vaiibhav-thatai", href: "https://linkedin.com/in/vaiibhav-thatai", accent: "#22d3ee" },
]

const inputBase =
  "w-full px-4 py-3 text-sm rounded-xl text-[#e8edf8] placeholder-[#7a8aaa]/50 focus:outline-none transition-all duration-200"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    await new Promise((res) => setTimeout(res, 1200))
    setSending(false)
    setSent(true)
  }

  return (
    <section
      id="contact"
      className="py-28 px-6 max-w-6xl mx-auto"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.015) 40%, rgba(139,92,246,0.02) 80%, transparent 100%)",
      }}
    >
      <SectionLabel index="07" title="Contact" accent="cyan" />

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl md:text-3xl font-bold text-balance leading-tight" style={{ color: "#e8edf8" }}>
              {"Let's build something"}
              <br />
              <span className="gradient-text">{"together."}</span>
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#7a8aaa" }}>
              Whether it&apos;s a full-time role, a collaboration, or just a conversation — I&apos;m always
              open to connecting with engineers and teams doing interesting work.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {LINKS.map(({ icon: Icon, label, value, href, accent }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 group rounded-xl p-3 transition-all duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.05)", backgroundColor: "rgba(255,255,255,0.02)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = `${accent}35`
                  el.style.backgroundColor = `${accent}08`
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = "rgba(255,255,255,0.05)"
                  el.style.backgroundColor = "rgba(255,255,255,0.02)"
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${accent}12`, border: `1px solid ${accent}25` }}
                >
                  <Icon size={16} style={{ color: accent }} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono" style={{ color: "#7a8aaa" }}>{label}</span>
                  <span className="text-sm font-medium" style={{ color: "#e8edf8" }}>{value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div
          className="rounded-2xl p-6 md:p-8 relative"
          style={{
            background: "linear-gradient(135deg, rgba(6,182,212,0.06) 0%, rgba(139,92,246,0.04) 100%)",
            border: "1px solid rgba(6,182,212,0.18)",
          }}
        >
          <span
            className="absolute top-4 right-4 text-xs font-mono px-2 py-0.5 rounded-full"
            style={{ backgroundColor: "rgba(251,191,36,0.12)", border: "1px solid rgba(251,191,36,0.3)", color: "#fbbf24" }}
          >
            WIP
          </span>
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)" }}
              >
                <CheckCircle size={28} style={{ color: "#34d399" }} />
              </div>
              <h4 className="text-lg font-bold" style={{ color: "#e8edf8" }}>Message received!</h4>
              <p className="text-sm" style={{ color: "#7a8aaa" }}>{"I'll get back to you soon."}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest" style={{ color: "#7a8aaa" }}>
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Your name"
                  className={inputBase}
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(6,182,212,0.5)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest" style={{ color: "#7a8aaa" }}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="you@example.com"
                  className={inputBase}
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(6,182,212,0.5)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest" style={{ color: "#7a8aaa" }}>
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="What's on your mind?"
                  className={`${inputBase} resize-none`}
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(6,182,212,0.5)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl text-[#0b0f1e] transition-all duration-200 hover:opacity-90 hover:scale-[1.01] disabled:opacity-50"
                style={{ background: "linear-gradient(135deg, #22d3ee 0%, #a78bfa 100%)" }}
              >
                {sending ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-[#0b0f1e]/40 border-t-[#0b0f1e] rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

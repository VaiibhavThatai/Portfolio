"use client"

import { useState } from "react"
import { Mail, Phone, Send, CheckCircle } from "lucide-react"

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
import SectionLabel from "./section-label"

const LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "vaiibhavsthatai@gmail.com",
    href: "mailto:vaiibhavsthatai@gmail.com",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "VaiibhavThatai",
    href: "https://github.com/VaiibhavThatai",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "vaiibhav-thatai",
    href: "https://linkedin.com/in/vaiibhav-thatai",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7508787115",
    href: "tel:+917508787115",
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Simulate a send — in production hook up to an API route or Formspree
    await new Promise((res) => setTimeout(res, 1200))
    setSending(false)
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionLabel index="07" title="Contact" />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Left — links */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-foreground text-balance">
              {"Let's build something together."}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Whether it&apos;s a full-time role, a collaboration, or just a conversation — I&apos;m always open
              to connecting with engineers and teams doing interesting work.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {LINKS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-md bg-muted border border-border flex items-center justify-center shrink-0 group-hover:border-accent/40 group-hover:bg-accent/5 transition-colors">
                  <Icon size={14} className="text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-muted-foreground">{label}</span>
                  <span className="text-sm text-foreground group-hover:text-accent transition-colors">{value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div>
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 py-12 text-center">
              <CheckCircle size={32} className="text-accent" />
              <h4 className="text-sm font-semibold text-foreground">Message received!</h4>
              <p className="text-sm text-muted-foreground">{"I'll get back to you soon."}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-mono text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Your name"
                  className="w-full px-3 py-2 text-sm rounded-md bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-mono text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 text-sm rounded-md bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-mono text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="What's on your mind?"
                  className="w-full px-3 py-2 text-sm rounded-md bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {sending ? (
                  <>
                    <span className="w-3 h-3 border border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={13} />
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

"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      // Update active section based on scroll
      const sections = NAV_LINKS.map((l) => l.href.slice(1))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0b0f1e]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); handleNavClick("#about") }}
          className="font-mono text-base font-bold tracking-tight group"
        >
          <span className="gradient-text">vt</span>
          <span className="text-[#22d3ee] group-hover:opacity-80 transition-opacity">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className={`relative px-3 py-1.5 text-sm rounded-md transition-all duration-200 ${
                    isActive
                      ? "text-[#22d3ee]"
                      : "text-[#7a8aaa] hover:text-[#e8edf8]"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-md bg-[#22d3ee]/10 border border-[#22d3ee]/20" />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        {/* Resume button + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://drive.google.com/drive/folders/17NnQamvNud87VHcJaaxHTFUtSsn3ftSG?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md border border-[#22d3ee]/40 text-[#22d3ee] hover:bg-[#22d3ee]/10 transition-all duration-200"
          >
            Resume
          </a>
          <button
            className="md:hidden p-2 rounded-md text-[#7a8aaa] hover:text-[#e8edf8] hover:bg-white/5 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#0b0f1e]/95 backdrop-blur-xl px-6 pb-5 pt-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                      isActive ? "text-[#22d3ee] bg-[#22d3ee]/10" : "text-[#7a8aaa] hover:text-[#e8edf8]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}

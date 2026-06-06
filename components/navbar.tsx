"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"

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
  const [isDark, setIsDark] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Default to dark
    document.documentElement.classList.add("dark")
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle("dark", next)
  }

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); handleNavClick("#about") }}
          className="font-mono text-sm font-medium text-foreground tracking-tight hover:text-accent transition-colors"
        >
          vt<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 pb-4 pt-3">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"

import SectionLabel from "./section-label"

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

export default function Education() {
  const { ref, inView } = useInView()

  return (
    <section id="education" className="py-28 px-6 max-w-6xl mx-auto">
      <SectionLabel index="05" title="Education" accent="cyan" />

      <div
        ref={ref}
        className="mt-14"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(139,92,246,0.06) 50%, rgba(16,185,129,0.05) 100%)",
            border: "1px solid rgba(6,182,212,0.22)",
          }}
        >
          {/* Top glow strip */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #22d3ee 30%, #a78bfa 70%, transparent 100%)",
              opacity: 0.7,
            }}
          />

          <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            {/* Left — icon + meta */}
            <div className="flex flex-col items-center gap-4 md:w-40 shrink-0">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold"
                style={{
                  background: "linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(139,92,246,0.2) 100%)",
                  border: "1px solid rgba(6,182,212,0.3)",
                  color: "#22d3ee",
                }}
              >
                ∑
              </div>
              <div className="text-center flex flex-col gap-1">
                <span
                  className="text-xs font-mono px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: "rgba(6,182,212,0.1)",
                    color: "#22d3ee",
                    border: "1px solid rgba(6,182,212,0.25)",
                  }}
                >
                  B.Tech
                </span>
                <p className="text-xs font-mono" style={{ color: "#7a8aaa" }}>Oct 2020 — Jun 2024</p>
              </div>
            </div>

            {/* Right — content */}
            <div className="flex flex-col gap-4 flex-1">
              <div>
                <h3 className="text-xl md:text-2xl font-bold" style={{ color: "#e8edf8" }}>
                  Dr. BR Ambedkar National Institute of Technology
                </h3>
                <p className="text-sm mt-1" style={{ color: "#7a8aaa" }}>Jalandhar, India</p>
              </div>

              <p className="text-base" style={{ color: "#7a8aaa" }}>
                Bachelor of Technology in{" "}
                <span className="font-semibold" style={{ color: "#e8edf8" }}>Information Technology</span>
              </p>

              {/* CGPA display */}
              <div className="flex items-center gap-3 mt-1">
                <span className="text-sm font-mono" style={{ color: "#7a8aaa" }}>CGPA</span>
                <span
                  className="text-3xl font-bold font-mono gradient-text"
                >
                  8.57
                </span>
                <span className="text-sm font-mono" style={{ color: "#7a8aaa" }}>/ 10.0</span>
              </div>

              {/* Relevant areas */}
              <div className="flex flex-wrap gap-2 mt-2">
                {["Data Structures", "Algorithms", "Computer Networks", "DBMS", "Operating Systems", "Compilers"].map((area) => (
                  <span
                    key={area}
                    className="text-xs font-mono px-2.5 py-1 rounded-md"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      color: "#7a8aaa",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

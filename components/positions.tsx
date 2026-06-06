import { Users } from "lucide-react"
import SectionLabel from "./section-label"

const POSITIONS = [
  {
    role: "Co-Founder & Management Lead",
    organization: "TEDxNITJalandhar",
    period: "Sept 2022 — Sept 2023",
    description:
      "Co-founded and led the management team for TEDxNITJalandhar, overseeing event planning, speaker curation, logistics, and team coordination for one of the most prestigious college-level TEDx events in Punjab.",
  },
]

export default function Positions() {
  return (
    <section id="positions" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionLabel index="06" title="Positions of Responsibility" />

      <div className="mt-12 flex flex-col gap-4">
        {POSITIONS.map((pos) => (
          <div
            key={pos.role}
            className="flex flex-col md:flex-row gap-6 md:gap-10 p-6 rounded-lg border border-border bg-card"
          >
            {/* Icon + meta */}
            <div className="flex items-start gap-4 md:w-52 shrink-0">
              <div className="w-10 h-10 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <Users size={16} className="text-accent" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-mono text-muted-foreground">{pos.period}</p>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground w-fit">
                  Leadership
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-foreground">{pos.role}</h3>
              <p className="text-sm text-accent font-medium">{pos.organization}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{pos.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

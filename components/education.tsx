import { GraduationCap } from "lucide-react"
import SectionLabel from "./section-label"

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionLabel index="05" title="Education" />

      <div className="mt-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 p-6 rounded-lg border border-border bg-card">
          {/* Icon */}
          <div className="flex items-start gap-4 md:w-52 shrink-0">
            <div className="w-10 h-10 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
              <GraduationCap size={18} className="text-accent" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs font-mono text-muted-foreground">Oct 2020 — Jun 2024</p>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground w-fit">
                B.Tech
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-foreground">
              Dr. BR Ambedkar National Institute of Technology
            </h3>
            <p className="text-sm text-muted-foreground">Jalandhar, India</p>
            <p className="text-sm text-muted-foreground">
              Bachelor of Technology in{" "}
              <span className="text-foreground font-medium">Information Technology</span>
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-mono text-muted-foreground">CGPA</span>
              <span className="text-sm font-semibold text-foreground font-mono">8.57 / 10</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

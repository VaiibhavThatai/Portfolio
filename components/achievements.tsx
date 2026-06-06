import { Trophy } from "lucide-react"
import SectionLabel from "./section-label"

const ACHIEVEMENTS = [
  {
    title: "RapidFort Spot Award",
    detail: "Awarded consecutively in 2024 & 2025 for exceptional performance and high-impact engineering delivery.",
    highlight: "2024 & 2025",
  },
  {
    title: "500+ DSA Problems Solved",
    detail: "Solved over 500 data structures and algorithms problems across LeetCode and GeeksforGeeks.",
    highlight: "LeetCode · GFG",
  },
  {
    title: "CodeChef Global Rank 89",
    detail: "Secured global rank 89 at Cook-Off by CodeChef and global rank 168 at LunchTime99.",
    highlight: "Top 100 globally",
  },
  {
    title: "JEE MAIN 98.94 Percentile",
    detail: "Scored 98.94 percentile among 1M+ participants in JEE MAIN 2020.",
    highlight: "Top 1.06% nationally",
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionLabel index="04" title="Achievements" />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        {ACHIEVEMENTS.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 p-6 rounded-lg border border-border bg-card hover:border-border/80 transition-colors"
          >
            <div className="mt-0.5 w-8 h-8 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
              <Trophy size={14} className="text-accent" />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                  {item.highlight}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

interface SectionLabelProps {
  index: string
  title: string
  accent?: "cyan" | "violet" | "emerald"
}

const ACCENT_COLORS = {
  cyan: "#22d3ee",
  violet: "#a78bfa",
  emerald: "#34d399",
}

export default function SectionLabel({ index, title, accent = "cyan" }: SectionLabelProps) {
  const color = ACCENT_COLORS[accent]
  return (
    <div className="flex items-center gap-4 mb-2">
      <span className="font-mono text-xs select-none" style={{ color: `${color}60` }}>{index}</span>
      <div className="h-px flex-none w-8" style={{ backgroundColor: color, opacity: 0.4 }} />
      <h2
        className="text-2xl md:text-3xl font-bold tracking-tight"
        style={{ color: "#e8edf8" }}
      >
        {title}
        <span style={{ color }}> .</span>
      </h2>
      <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} />
    </div>
  )
}

interface SectionLabelProps {
  index: string
  title: string
}

export default function SectionLabel({ index, title }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs text-muted-foreground/50 select-none">{index}</span>
      <div className="flex-1 h-px bg-border" />
      <h2 className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-widest">
        {title}
      </h2>
    </div>
  )
}

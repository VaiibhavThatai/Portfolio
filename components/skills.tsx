import SectionLabel from "./section-label"

const SKILL_GROUPS = [
  {
    category: "Languages",
    skills: ["Python", "Golang", "TypeScript", "JavaScript", "C++", "Bash"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "TypeScript", "HTML5", "CSS3", "REST API Integration"],
  },
  {
    category: "Backend & APIs",
    skills: ["FastAPI", "Node.js", "Microservices", "Distributed Systems", "REST API Design"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "Redis", "MongoDB", "MySQL"],
  },
  {
    category: "Infrastructure",
    skills: ["Docker", "Kubernetes", "Apache Airflow", "CI/CD", "GitHub Actions", "Linux", "Git"],
  },
  {
    category: "Core CS",
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionLabel index="01" title="Skills" />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden border border-border">
        {SKILL_GROUPS.map((group) => (
          <div key={group.category} className="bg-background p-6 flex flex-col gap-4">
            <h3 className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-widest">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded bg-muted text-foreground font-mono border border-border hover:border-accent/40 hover:bg-accent/5 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

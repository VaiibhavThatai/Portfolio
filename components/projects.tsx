import { ArrowUpRight } from "lucide-react"
import SectionLabel from "./section-label"

const PROJECTS = [
  {
    name: "Undercover Game",
    period: "Jun 2025",
    description:
      "Open-source multiplayer web game inspired by Mr. White, featuring real-time role assignment, dynamic game rooms, player stats, and customizable word packs.",
    stack: ["React.js", "TypeScript", "Material UI"],
    githubUrl: "https://github.com/VaiibhavThatai",
    featured: true,
  },
  {
    name: "SonicShift",
    period: "Jul – Aug 2024",
    description:
      "Distributed media conversion platform with modular microservices for authentication, notifications, API gateway, and media conversion — orchestrated with Kubernetes.",
    stack: ["Flask", "MongoDB", "Docker", "Kubernetes", "RabbitMQ", "MySQL"],
    githubUrl: "https://github.com/VaiibhavThatai",
    featured: true,
  },
  {
    name: "CodeSync",
    period: "Jul – Aug 2023",
    description:
      "Automated data scraper that collects accepted solutions from CodeForces, AtCoder, and CodeChef, then syncs them to a GitHub repository via the GitHub API.",
    stack: ["Python", "GitHub API", "Playwright", "Apache Airflow"],
    githubUrl: "https://github.com/VaiibhavThatai",
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionLabel index="03" title="Projects" />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS.map((project) => (
          <article
            key={project.name}
            className="group relative flex flex-col gap-4 p-6 rounded-lg border border-border bg-card hover:border-border/80 hover:bg-card/80 transition-all"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs font-mono text-muted-foreground">{project.period}</p>
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} on GitHub`}
                className="p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-muted transition-colors shrink-0"
              >
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              {project.description}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2 py-0.5 rounded bg-muted border border-border text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

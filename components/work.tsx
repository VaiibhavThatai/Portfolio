import { ArrowUpRight } from "lucide-react"
import SectionLabel from "./section-label"

const EXPERIENCES = [
  {
    company: "RapidFort",
    companyUrl: "https://rapidfort.com",
    role: "Software Development Engineer",
    period: "July 2024 — Present",
    type: "Full-time",
    stack: ["Python", "Golang", "JavaScript", "FastAPI", "PostgreSQL", "Docker", "Kubernetes", "Redis"],
    bullets: [
      "Led development of RapidFort's container vulnerability scanning platform, powering detection and remediation workflows across Linux-based container ecosystems.",
      "Built and shipped a cross-advisory vulnerability intelligence platform using FastAPI, React.js, PostgreSQL, and Kubernetes — reducing analyst triage time by 40%.",
      "Designed JIRA workflow integrations for intelligent issue creation, SLA tracking, and remediation — reducing manual operations overhead by 65%.",
      "Contributed to open-source vulnerability scanning ecosystems including Aquasecurity and Anchore by integrating RapidFort advisory intelligence into scanner workflows.",
      "Delivered 70%+ reduction in scanning engine processing time through algorithmic improvements and parallelization.",
    ],
  },
  {
    company: "RapidFort",
    companyUrl: "https://rapidfort.com",
    role: "SDE Intern",
    period: "January 2024 — July 2024",
    type: "Internship",
    stack: ["Python", "Redis", "Docker", "SQL", "Metabase", "JavaScript", "Bash"],
    bullets: [
      "Developed an automated testing suite to detect inconsistencies between staging and production environments, reducing regression issues by 80%.",
      "Engineered data pipeline optimizations that cut vulnerability scraping and database update times from 2 days to under 8 hours.",
      "Built a comparison and reporting tool with Metabase dashboards to highlight gaps in vulnerability detection.",
    ],
  },
]

export default function Work() {
  return (
    <section id="work" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionLabel index="02" title="Work Experience" />

      <div className="mt-12 flex flex-col gap-0">
        {EXPERIENCES.map((exp, i) => (
          <div
            key={`${exp.role}-${i}`}
            className={`flex flex-col md:flex-row gap-6 md:gap-10 py-10 ${
              i < EXPERIENCES.length - 1 ? "border-b border-border" : ""
            }`}
          >
            {/* Left column — meta */}
            <div className="md:w-52 shrink-0 flex flex-col gap-2">
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-accent transition-colors group"
              >
                {exp.company}
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-xs font-mono text-muted-foreground">{exp.period}</p>
              <span className="inline-flex w-fit text-xs px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground font-mono">
                {exp.type}
              </span>
            </div>

            {/* Right column — content */}
            <div className="flex-1 flex flex-col gap-5">
              <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>

              <ul className="flex flex-col gap-3">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-1">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-muted border border-border text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

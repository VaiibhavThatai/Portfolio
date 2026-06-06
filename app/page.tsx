import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Work from "@/components/work"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import Education from "@/components/education"
import Positions from "@/components/positions"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Work />
        <Projects />
        <Achievements />
        <Education />
        <Positions />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

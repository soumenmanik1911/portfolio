import { HeroSection } from "@/components/hero-section"
import { SkillsSlider } from "@/components/skills-slider"
import { ProjectsSlider } from "@/components/projects-slider"
import { AboutPreview } from "@/components/about-preview"
import { ContactCTA } from "@/components/contact-cta"

export default function Home() {
  return (
    <div className="container mx-auto px-4 space-y-24 py-12 md:py-20">
      <HeroSection />
      <SkillsSlider />
      <ProjectsSlider />
      <AboutPreview />
      <ContactCTA />
    </div>
  )
}

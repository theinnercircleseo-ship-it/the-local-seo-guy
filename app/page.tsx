import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProcessSection } from "@/components/process-section"
import { CaseStudySection } from "@/components/case-study-section"
import { ServicesOverview } from "@/components/services-overview"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ProcessSection />
      <CaseStudySection />
      <ServicesOverview />
      <CTASection />
      <Footer />
    </main>
  )
}

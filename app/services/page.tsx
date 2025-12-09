import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesOverview } from "@/components/services-overview"
import { CTASection } from "@/components/cta-section"

export default function ServicesPage() {
  return (
    <main>
      <Navigation />
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/gradient-background.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance text-white">Local SEO Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto text-pretty">
            Comprehensive local SEO solutions to help your business dominate local search results and attract more
            customers.
          </p>
        </div>
      </section>
      <ServicesOverview />
      <CTASection />
      <Footer />
    </main>
  )
}

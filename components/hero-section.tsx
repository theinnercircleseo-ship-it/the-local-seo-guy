import { Button } from "@/components/ui/button"
import { Star, Search } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-primary text-primary-foreground py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/abstract-hero-background.png"
          alt=""
          className="w-full h-full object-cover object-left"
          style={{ objectPosition: "25% center" }}
        />
        <div className="absolute inset-0 bg-primary/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
                Get More Customers.
                <br />
                Dominate Local Search.
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 text-pretty">
                We analyze your business, find quick wins, and implement proven strategies to get you ranking #1. See
                results in 60 days or get your money back.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-primary-foreground/90">Rated 5 stars on Google</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 bg-white text-foreground hover:bg-primary-foreground/90 hover:text-primary"
              >
                <Link href="/contact">Start Your Free Analysis</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white text-foreground border-white hover:bg-primary-foreground/90 hover:text-primary"
              >
                <Link href="/services">See Our Process</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-primary-foreground/80 text-sm">
                  Local Businesses
                  <br />
                  Helped
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">300%</div>
                <div className="text-primary-foreground/80 text-sm">
                  Average Traffic
                  <br />
                  Increase
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">90%</div>
                <div className="text-primary-foreground/80 text-sm">
                  First Page
                  <br />
                  Ranks
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-background rounded-2xl p-6 shadow-2xl">
              {/* Google Search Bar */}
              <div className="bg-gray-50 rounded-full p-3 mb-4 flex items-center space-x-3">
                <Search className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600 text-sm">plumber near me</span>
              </div>

              {/* Map Pack Results */}
              <div className="space-y-3">
                <div className="text-sm font-medium text-gray-700 mb-3">Local results</div>

                {/* Your Business - #1 Result */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">A</span>
                        <span className="font-semibold text-gray-900">Your Business Name</span>
                      </div>
                      <div className="flex items-center space-x-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-sm text-gray-600">4.9 (127)</span>
                      </div>
                      <div className="text-sm text-gray-600">Plumber • 0.2 mi</div>
                      <div className="text-sm text-green-600 font-medium">Open • Closes 6PM</div>
                    </div>
                    <img
                      src="/professional-plumber-business-storefront.jpg"
                      alt="Business"
                      className="w-15 h-15 rounded object-cover"
                    />
                  </div>
                </div>

                {/* Competitor Results */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">B</span>
                        <span className="font-medium text-gray-700">Competitor Plumbing</span>
                      </div>
                      <div className="flex items-center space-x-1 mb-1">
                        {[...Array(3)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                        {[...Array(2)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-gray-300" />
                        ))}
                        <span className="text-sm text-gray-600">3.2 (45)</span>
                      </div>
                      <div className="text-sm text-gray-600">Plumber • 1.2 mi</div>
                      <div className="text-sm text-gray-500">Closed • Opens 8AM</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">C</span>
                        <span className="font-medium text-gray-700">Another Plumber Co</span>
                      </div>
                      <div className="flex items-center space-x-1 mb-1">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="h-3 w-3 text-gray-300" />
                        <span className="text-sm text-gray-600">4.1 (89)</span>
                      </div>
                      <div className="text-sm text-gray-600">Plumber • 2.1 mi</div>
                      <div className="text-sm text-gray-500">Open • Closes 5PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

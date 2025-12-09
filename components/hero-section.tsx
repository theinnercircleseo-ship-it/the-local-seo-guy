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
          style={{ objectPosition: "15% center" }}
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
              <div className="flex items-center gap-2">
                <span className="text-primary-foreground/90">Rated 5 stars on</span>
                <span className="inline-flex items-center bg-white/85 rounded-lg px-2 py-1">
                  <svg viewBox="0 0 272 92" className="h-5" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#EA4335"
                      d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                    />
                    <path
                      fill="#4285F4"
                      d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
                    />
                    <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z" />
                    <path
                      fill="#EA4335"
                      d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
                    />
                    <path
                      fill="#4285F4"
                      d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
                    />
                  </svg>
                </span>
              </div>
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

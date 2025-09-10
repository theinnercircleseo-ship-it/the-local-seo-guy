import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-background">
                    {/* Background circle */}
                    <circle cx="20" cy="20" r="18" fill="currentColor" className="opacity-5" />

                    {/* Map pins showing ranking progression - ascending from right to left */}
                    <g>
                      {/* Pin 3 (lowest) - smaller, more transparent */}
                      <path
                        d="M32 28c0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.5 4 6 4 6s4-4.5 4-6z"
                        fill="currentColor"
                        className="opacity-30"
                      />
                      <circle cx="28" cy="28" r="1.5" fill="currentColor" className="opacity-60" />
                      <text x="28" y="31" textAnchor="middle" fontSize="8" fill="currentColor" className="opacity-40">
                        3
                      </text>

                      {/* Pin 2 (middle) - medium size */}
                      <path
                        d="M24 20c0-2.5-2-4.5-4.5-4.5S15 17.5 15 20c0 1.8 4.5 7 4.5 7s4.5-5.2 4.5-7z"
                        fill="currentColor"
                        className="opacity-60"
                      />
                      <circle cx="19.5" cy="20" r="1.8" fill="currentColor" className="opacity-80" />
                      <text
                        x="19.5"
                        y="23.5"
                        textAnchor="middle"
                        fontSize="9"
                        fill="currentColor"
                        className="opacity-60"
                      >
                        2
                      </text>

                      {/* Pin 1 (highest) - largest, most prominent */}
                      <path
                        d="M16 12c0-3-2.5-5.5-5.5-5.5S5 9 5 12c0 2.2 5.5 8.5 5.5 8.5S16 14.2 16 12z"
                        fill="currentColor"
                      />
                      <circle cx="10.5" cy="12" r="2.2" fill="currentColor" className="opacity-20" />
                      <text x="10.5" y="16" textAnchor="middle" fontSize="10" fill="currentColor" className="font-bold">
                        1
                      </text>
                    </g>

                    {/* Upward trending arrow */}
                    <path
                      d="M30 32 L12 14 M8 18 L12 14 L16 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      className="opacity-70"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg text-background leading-tight">The Local</span>
                  <span className="font-bold text-lg text-background leading-tight">SEO Guy</span>
                </div>
              </div>
            </div>
            <p className="text-background/80">
              Helping local businesses dominate search results and grow their customer base through proven SEO
              strategies.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@thelocalseoguys.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Your City, State</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <div className="space-y-2">
              <Link
                href="/services/local-seo"
                className="block text-background/80 hover:text-background transition-colors"
              >
                Local SEO
              </Link>
              <Link
                href="/services/google-business-profile"
                className="block text-background/80 hover:text-background transition-colors"
              >
                Google Business Profile
              </Link>
              <Link
                href="/services/local-link-building"
                className="block text-background/80 hover:text-background transition-colors"
              >
                Local Link Building
              </Link>
              <Link
                href="/services/review-management"
                className="block text-background/80 hover:text-background transition-colors"
              >
                Review Management
              </Link>
              <Link
                href="/services/seo-audits"
                className="block text-background/80 hover:text-background transition-colors"
              >
                SEO Audits
              </Link>
              <Link
                href="/services/citation-building"
                className="block text-background/80 hover:text-background transition-colors"
              >
                Citation Building
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-background/80 hover:text-background transition-colors">
                About Us
              </Link>
              <Link href="/pricing" className="block text-background/80 hover:text-background transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="block text-background/80 hover:text-background transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="block text-background/80 hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-background/80 hover:text-background transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get Started</h3>
            <p className="text-background/80">Ready to dominate local search? Get your free SEO audit today.</p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get Free Audit
            </Link>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p>&copy; 2024 The Local SEO Guy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

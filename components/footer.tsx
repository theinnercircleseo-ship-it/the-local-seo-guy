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
                    <circle cx="20" cy="20" r="18" fill="currentColor" className="opacity-10" />
                    <path d="M20 8l-8 8h5v12h6V16h5l-8-8z" fill="currentColor" />
                    <circle cx="20" cy="30" r="2" fill="currentColor" />
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

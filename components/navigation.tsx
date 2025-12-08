"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 cursor-pointer select-none group">
            <div className="relative">
              <svg width="48" height="48" viewBox="0 0 48 48" className="text-primary">
                <path
                  d="M24 10c-5.5 0-10 4.5-10 10 0 3.5 10 20 10 20s10-16.5 10-20c0-5.5-4.5-10-10-10z"
                  fill="currentColor"
                />
                <circle cx="24" cy="20" r="4" fill="white" />
              </svg>
            </div>
            <span className="font-bold text-xl text-foreground cursor-pointer select-none">
              The <span className="text-primary cursor-pointer select-none">Local SEO</span> Guy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/services"
              className={`text-foreground hover:text-primary transition-colors pb-1 ${
                isActive("/services") ? "border-b-2 border-primary text-primary font-medium" : ""
              }`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`text-foreground hover:text-primary transition-colors pb-1 ${
                isActive("/about") ? "border-b-2 border-primary text-primary font-medium" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/pricing"
              className={`text-foreground hover:text-primary transition-colors pb-1 ${
                isActive("/pricing") ? "border-b-2 border-primary text-primary font-medium" : ""
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/case-studies"
              className={`text-foreground hover:text-primary transition-colors pb-1 ${
                isActive("/case-studies") ? "border-b-2 border-primary text-primary font-medium" : ""
              }`}
            >
              Case Studies
            </Link>
            <Link
              href="/contact"
              className={`text-foreground hover:text-primary transition-colors pb-1 ${
                isActive("/contact") ? "border-b-2 border-primary text-primary font-medium" : ""
              }`}
            >
              Contact
            </Link>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span className="text-sm">(555) 123-4567</span>
            </div>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Get Free Audit</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <Link
                href="/services"
                className={`block px-3 py-2 text-foreground hover:text-primary transition-colors ${
                  isActive("/services") ? "text-primary font-medium bg-primary/5" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 text-foreground hover:text-primary transition-colors ${
                  isActive("/about") ? "text-primary font-medium bg-primary/5" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/pricing"
                className={`block px-3 py-2 text-foreground hover:text-primary transition-colors ${
                  isActive("/pricing") ? "text-primary font-medium bg-primary/5" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/case-studies"
                className={`block px-3 py-2 text-foreground hover:text-primary transition-colors ${
                  isActive("/case-studies") ? "text-primary font-medium bg-primary/5" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 text-foreground hover:text-primary transition-colors ${
                  isActive("/contact") ? "text-primary font-medium bg-primary/5" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">Get Free Audit</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

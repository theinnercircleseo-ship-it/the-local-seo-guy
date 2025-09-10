"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-primary">
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
                    <circle cx="28" cy="28" r="1.5" fill="white" className="opacity-60" />
                    <text x="28" y="31" textAnchor="middle" fontSize="8" fill="currentColor" className="opacity-40">
                      3
                    </text>

                    {/* Pin 2 (middle) - medium size */}
                    <path
                      d="M24 20c0-2.5-2-4.5-4.5-4.5S15 17.5 15 20c0 1.8 4.5 7 4.5 7s4.5-5.2 4.5-7z"
                      fill="currentColor"
                      className="opacity-60"
                    />
                    <circle cx="19.5" cy="20" r="1.8" fill="white" className="opacity-80" />
                    <text x="19.5" y="23.5" textAnchor="middle" fontSize="9" fill="currentColor" className="opacity-60">
                      2
                    </text>

                    {/* Pin 1 (highest) - largest, most prominent */}
                    <path
                      d="M16 12c0-3-2.5-5.5-5.5-5.5S5 9 5 12c0 2.2 5.5 8.5 5.5 8.5S16 14.2 16 12z"
                      fill="currentColor"
                    />
                    <circle cx="10.5" cy="12" r="2.2" fill="white" />
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
                <span className="font-bold text-lg text-foreground leading-tight">The Local</span>
                <span className="font-bold text-lg text-primary leading-tight">SEO Guy</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
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
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/pricing"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
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

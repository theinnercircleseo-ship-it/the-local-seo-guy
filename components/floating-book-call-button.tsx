"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingBookCallButton() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Load Calendly script when component mounts
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]',
      )
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  useEffect(() => {
    if (isOpen && typeof window !== "undefined" && (window as any).Calendly) {
      ;(window as any).Calendly.initInlineWidget({
        url: "https://calendly.com/brunofigueiroacavalcanti/30min",
        parentElement: document.getElementById("calendly-embed-container"),
      })
    }
  }, [isOpen])

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-primary hover:bg-primary/90 text-white shadow-2xl h-14 px-6 rounded-lg font-semibold text-base transition-all duration-300 hover:scale-105"
      >
        Book a Call With Us
      </Button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 bg-primary hover:bg-primary/90 text-white rounded-full p-2 transition-all duration-200 hover:scale-110"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div
              id="calendly-embed-container"
              className="w-full h-[700px] overflow-auto"
              style={{ minWidth: "320px" }}
            />
          </div>
        </div>
      )}
    </>
  )
}

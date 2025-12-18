"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  })

  const popupRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form and close popup
    setFormData({ name: "", email: "", message: "", website: "" })
    setIsOpen(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {isOpen && (
        <div ref={popupRef} className="fixed left-24 top-1/2 -translate-y-1/2 z-40">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative animate-in slide-in-from-left duration-200 overflow-hidden">
            {/* Blue header section */}
            <div className="bg-blue-600 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Have a question?</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-blue-100 transition-colors"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* White body section */}
            <div className="p-6">
              <div className="mb-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <Image src="/images/localseoguy-logo-1.png" alt="LocalSEOGuy Logo" width={48} height={48} />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Enter your question below and we'll get back to you as soon as possible.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border-gray-200"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border-gray-200"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="I want to know more"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full resize-none bg-gray-100 border-gray-200"
                  />
                </div>

                <div>
                  <Input
                    type="url"
                    name="website"
                    placeholder="Your website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full bg-gray-100 border-gray-200"
                  />
                </div>

                <p className="text-xs text-gray-500 leading-relaxed">
                  By submitting you agree to receive SMS or e-mails for the provided channel. Rates may be applied.
                </p>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Send
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, CheckCircle, Calendar } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    website: "",
    service: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@thelocalseoguys.com",
      description: "Send us a message anytime",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Your City, State",
      description: "Serving local businesses nationwide",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 9AM-6PM",
      description: "We respond within 24 hours",
    },
  ]

  const services = [
    "Local SEO",
    "Google Business Profile Optimization",
    "Local Link Building",
    "Review Management",
    "SEO Audits",
    "Citation Building",
    "Full SEO Package",
    "Other",
  ]

  if (isSubmitted) {
    return (
      <main>
        <Navigation />
        <section className="py-20 bg-background min-h-screen flex items-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-foreground mb-4">Thank You!</h1>
              <p className="text-xl text-muted-foreground mb-6">
                We've received your message and will get back to you within 24 hours with your free SEO audit.
              </p>
              <Button asChild>
                <a href="/">Return to Homepage</a>
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Get Your Free SEO Audit</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
            Ready to dominate local search results? Contact us today for a free SEO audit and discover exactly how we
            can help your business grow.
          </p>
        </div>
      </section>

      {/* 1. Book a Call (Cal.com Section) */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="h-8 w-8 text-primary" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Book a call with our SEO specialist now
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Schedule a free 30-minute consultation to discuss your business goals and discover how we can help you
              dominate local search.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border">
            <div style={{ width: "100%", height: "700px", overflow: "scroll" }} id="my-cal-inline-15min"></div>
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `
                  (function (C, A, L) { 
                    let p = function (a, ar) { a.q.push(ar); }; 
                    let d = C.document; 
                    C.Cal = C.Cal || function () { 
                      let cal = C.Cal; 
                      let ar = arguments; 
                      if (!cal.loaded) { 
                        cal.ns = {}; 
                        cal.q = cal.q || []; 
                        d.head.appendChild(d.createElement("script")).src = A; 
                        cal.loaded = true; 
                      } 
                      if (ar[0] === L) { 
                        const api = function () { p(api, arguments); }; 
                        const namespace = ar[1]; 
                        api.q = api.q || []; 
                        if(typeof namespace === "string"){
                          cal.ns[namespace] = cal.ns[namespace] || api;
                          p(cal.ns[namespace], ar);
                          p(cal, ["initNamespace", namespace]);
                        } else p(cal, ar); 
                        return;
                      } 
                      p(cal, ar); 
                    }; 
                  })(window, "https://app.cal.com/embed/embed.js", "init");
                  Cal("init", "15min", {origin:"https://app.cal.com"});  
                  Cal.ns["15min"]("inline", {    
                    elementOrSelector:"#my-cal-inline-15min",    
                    config: {"layout":"month_view"},    
                    calLink: "bruno-pedro-zb4myr/15min",  
                  });  
                  Cal.ns["15min"]("ui", {
                    "cssVarsPerTheme":{"light":{"cal-brand":"#434fd8"}},
                    "hideEventTypeDetails":false,
                    "layout":"month_view"
                  });
                `,
              }}
            />
          </div>
        </div>
      </section>

      {/* 2. Get in Touch & 3. How to Reach Us (Combined Section) */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Get in Touch Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll send you a comprehensive SEO audit within 24 hours.
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="border-2 border-input bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="border-2 border-input bg-background"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="border-2 border-input bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="business">Business Name *</Label>
                        <Input
                          id="business"
                          value={formData.business}
                          onChange={(e) => handleInputChange("business", e.target.value)}
                          required
                          className="border-2 border-input bg-background"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website">Website URL</Label>
                      <Input
                        id="website"
                        type="url"
                        placeholder="https://yourwebsite.com"
                        value={formData.website}
                        onChange={(e) => handleInputChange("website", e.target.value)}
                        className="border-2 border-input bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <Select onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger className="border-2 border-input bg-background">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about your business and goals</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder="Describe your business, current challenges, and what you hope to achieve with SEO..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="border-2 border-input bg-background"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Get My Free SEO Audit
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      * Required fields. We'll never share your information with third parties.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* How to Reach Us - Contact Information */}
            <div className="space-y-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">How to Reach Us</h2>
                <p className="text-muted-foreground">
                  Have questions? We're here to help. Reach out to us using any of the methods below, and we'll get back
                  to you as soon as possible.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <Card key={info.title} className="border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                            <p className="text-lg font-medium text-foreground mb-1">{info.details}</p>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What Happens Next Section */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">What Happens Next?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0">
                    1
                  </div>
                  <p className="text-foreground text-lg pt-1">We analyze your website and local SEO performance</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0">
                    2
                  </div>
                  <p className="text-foreground text-lg pt-1">We research your competitors and local market</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0">
                    3
                  </div>
                  <p className="text-foreground text-lg pt-1">
                    We send you a detailed audit with actionable recommendations
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0">
                    4
                  </div>
                  <p className="text-foreground text-lg pt-1">We schedule a call to discuss your SEO strategy</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$797",
      period: "/month",
      description: "Perfect for small local businesses just getting started with SEO",
      popular: false,
      features: [
        "Google Business Profile optimization",
        "Basic local keyword research",
        "On-page SEO for 5 pages",
        "Local citation building (25 citations)",
        "Monthly performance report",
        "Email support",
      ],
      notIncluded: ["Link building campaigns", "Review management", "Content creation", "Phone support"],
    },
    {
      name: "Professional",
      price: "$1,297",
      period: "/month",
      description: "Most popular choice for established businesses ready to dominate local search",
      popular: true,
      features: [
        "Everything in Starter plan",
        "Advanced local keyword research",
        "On-page SEO for 15 pages",
        "Local citation building (50 citations)",
        "Local link building campaign",
        "Review management & responses",
        "Monthly content creation (2 blog posts)",
        "Bi-weekly performance reports",
        "Phone & email support",
      ],
      notIncluded: ["Social media management", "Paid advertising management"],
    },
    {
      name: "Enterprise",
      price: "$1,997",
      period: "/month",
      description: "Comprehensive solution for businesses serious about market domination",
      popular: false,
      features: [
        "Everything in Professional plan",
        "Comprehensive local keyword research",
        "On-page SEO for unlimited pages",
        "Local citation building (100+ citations)",
        "Advanced link building campaigns",
        "Complete review management",
        "Weekly content creation (4 blog posts)",
        "Weekly performance reports",
        "Priority phone & email support",
        "Dedicated account manager",
        "Competitor monitoring",
        "Local PR outreach",
      ],
      notIncluded: [],
    },
  ]

  const addOns = [
    {
      name: "Website Design & Development",
      price: "$2,997",
      description: "Professional, SEO-optimized website built for conversions",
    },
    {
      name: "Social Media Management",
      price: "$497/month",
      description: "Complete social media management for Facebook, Instagram, and LinkedIn",
    },
    {
      name: "Google Ads Management",
      price: "$997/month",
      description: "Professional Google Ads campaigns to complement your SEO efforts",
    },
    {
      name: "Additional Content Creation",
      price: "$197/post",
      description: "Extra blog posts and content pieces beyond your plan allocation",
    },
  ]

  const faqs = [
    {
      question: "How long does it take to see results?",
      answer:
        "Most clients start seeing improvements in local search rankings within 30-60 days. Significant traffic increases typically occur within 3-6 months as our strategies take full effect.",
    },
    {
      question: "Do you require long-term contracts?",
      answer:
        "No, we work on a month-to-month basis. We're confident in our results and don't believe in locking clients into long-term contracts they don't want.",
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer:
        "We offer a 30-day satisfaction guarantee. If you're not happy with our service in the first month, we'll refund your investment completely.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "You can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at your next billing cycle.",
    },
    {
      question: "Do you work with businesses outside my area?",
      answer:
        "Yes, we work with local businesses nationwide. Our strategies are effective regardless of your location, and we customize our approach for your specific market.",
    },
    {
      question: "What's included in the free SEO audit?",
      answer:
        "Our free audit includes a comprehensive analysis of your current SEO performance, competitor research, keyword opportunities, and a detailed action plan with specific recommendations.",
    },
  ]

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/gradient-background.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance text-white">Simple, Transparent Pricing</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto text-pretty">
            Choose the perfect plan for your business. All plans include our core local SEO services with no hidden fees
            or long-term contracts.
          </p>
          <div className="mt-8">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              30-Day Money-Back Guarantee
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative ${
                  plan.popular ? "border-2 border-primary shadow-lg scale-105" : "border border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground mt-4">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full" size="lg" variant={plan.popular ? "default" : "outline"}>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enhance your SEO package with these additional services designed to accelerate your growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {addOns.map((addon) => (
              <Card key={addon.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-foreground">{addon.name}</h3>
                    <span className="text-lg font-bold text-primary">{addon.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{addon.description}</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Have questions about our pricing or services? Here are the answers to our most common questions.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}

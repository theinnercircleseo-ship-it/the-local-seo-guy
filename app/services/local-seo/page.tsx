import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Search, TrendingUp, MapPin, Users } from "lucide-react"
import Link from "next/link"

export default function LocalSEOPage() {
  const benefits = [
    "Keyword research and optimization for local search terms",
    "On-page SEO optimization for local relevance",
    "Local schema markup implementation",
    "Google My Business optimization",
    "Local content creation and optimization",
    "Competitor analysis and strategy development",
    "Monthly reporting and performance tracking",
    "Ongoing optimization and improvements",
  ]

  const features = [
    {
      icon: Search,
      title: "Local Keyword Research",
      description:
        "Identify the most valuable local search terms your customers are using to find businesses like yours.",
    },
    {
      icon: TrendingUp,
      title: "On-Page Optimization",
      description: "Optimize your website content, meta tags, and structure for maximum local search visibility.",
    },
    {
      icon: MapPin,
      title: "Local Schema Markup",
      description: "Implement structured data to help search engines understand your business location and services.",
    },
    {
      icon: Users,
      title: "Competitor Analysis",
      description: "Analyze your local competitors to identify opportunities and develop winning strategies.",
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-balance text-white">Local SEO Services</h1>
              <p className="text-xl text-white/90 text-pretty">
                Dominate local search results and attract more customers with our comprehensive local SEO strategies.
                Get found by customers in your area when they need your services most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  <Link href="/contact">Free SEO Audit</Link>
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="space-y-4">
                <div className="text-2xl font-bold text-white">What You Get:</div>
                <div className="space-y-2">
                  {benefits.slice(0, 4).map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Local SEO Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use proven strategies to improve your local search rankings and drive more qualified traffic to your
              business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="border-2 hover:border-primary/20 transition-colors">
                  <CardHeader>
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Complete Local SEO Package</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Everything you need to dominate local search results and grow your business online.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Ready to Get Started?</h3>
                <p className="text-muted-foreground">
                  Get a free local SEO audit and see exactly how we can help your business rank higher in local search
                  results.
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact">Get Your Free Audit</Link>
                </Button>
                <p className="text-sm text-muted-foreground">No obligation • Results in 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}

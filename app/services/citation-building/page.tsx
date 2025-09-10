import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Building2, Globe, MapPin, Database } from "lucide-react"
import Link from "next/link"

export default function CitationBuildingPage() {
  const benefits = [
    "Major directory submissions (Google, Bing, Apple Maps)",
    "Industry-specific directory listings",
    "Local business directory submissions",
    "Citation consistency audit and cleanup",
    "NAP (Name, Address, Phone) standardization",
    "Duplicate listing identification and removal",
    "Citation monitoring and maintenance",
    "Monthly citation building reports",
  ]

  const features = [
    {
      icon: Building2,
      title: "Major Directory Listings",
      description: "Get listed on all major search engines and directory platforms for maximum visibility.",
    },
    {
      icon: Globe,
      title: "Industry Directories",
      description: "Targeted submissions to industry-specific directories relevant to your business type.",
    },
    {
      icon: MapPin,
      title: "Local Directories",
      description: "Comprehensive listings in local business directories and community websites.",
    },
    {
      icon: Database,
      title: "Citation Management",
      description: "Ongoing monitoring and maintenance of your business citations across the web.",
    },
  ]

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">Citation Building Services</h1>
              <p className="text-xl text-primary-foreground/90 text-pretty">
                Build consistent business citations across the web to improve your local search visibility and help
                customers find your business information easily.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Build My Citations</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <Link href="/contact">Free Citation Audit</Link>
                </Button>
              </div>
            </div>
            <div className="bg-background/10 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="text-2xl font-bold">Citation Building Includes:</div>
                <div className="space-y-2">
                  {benefits.slice(0, 4).map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-primary-foreground/90">{benefit}</span>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Complete Citation Management</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We ensure your business information is consistent and accurate across all major directories and platforms.
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
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Citations Matter for Local SEO
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Consistent business citations across the web help search engines verify your business information and
                improve local rankings.
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
                <h3 className="text-2xl font-bold text-foreground">Improve Your Visibility</h3>
                <p className="text-muted-foreground">
                  Consistent citations across 50+ directories can significantly improve your local search rankings.
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact">Start Building Citations</Link>
                </Button>
                <p className="text-sm text-muted-foreground">First 20 citations completed within 7 days</p>
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

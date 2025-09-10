import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, LinkIcon, Building, Newspaper, Users } from "lucide-react"
import Link from "next/link"

export default function LocalLinkBuildingPage() {
  const benefits = [
    "Local business directory submissions",
    "Industry-specific citation building",
    "Local news and media outreach",
    "Community partnership link building",
    "Local event and sponsorship opportunities",
    "Chamber of Commerce and association links",
    "Quality backlink analysis and monitoring",
    "Monthly link building reports",
  ]

  const features = [
    {
      icon: Building,
      title: "Local Directory Links",
      description: "Get listed in high-authority local business directories and industry-specific platforms.",
    },
    {
      icon: Newspaper,
      title: "Media Outreach",
      description: "Secure coverage and backlinks from local news outlets, blogs, and industry publications.",
    },
    {
      icon: Users,
      title: "Community Partnerships",
      description:
        "Build relationships with local organizations, charities, and businesses for mutual link opportunities.",
    },
    {
      icon: LinkIcon,
      title: "Quality Link Analysis",
      description: "Monitor and analyze your backlink profile to ensure high-quality, relevant local links.",
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
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">Local Link Building Services</h1>
              <p className="text-xl text-primary-foreground/90 text-pretty">
                Build high-quality local backlinks that boost your search rankings and establish your business as a
                trusted authority in your local market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Start Link Building</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <Link href="/contact">Free Link Audit</Link>
                </Button>
              </div>
            </div>
            <div className="bg-background/10 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="text-2xl font-bold">Link Building Includes:</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Strategic Local Link Building</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We focus on building high-quality, relevant local backlinks that improve your search rankings and drive
              targeted traffic.
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
                Complete Local Link Building Strategy
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Build domain authority and improve local search rankings with our comprehensive link building approach.
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
                <h3 className="text-2xl font-bold text-foreground">Boost Your Rankings</h3>
                <p className="text-muted-foreground">
                  Quality local backlinks are one of the strongest ranking factors for local search results.
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact">Start Building Links</Link>
                </Button>
                <p className="text-sm text-muted-foreground">First links secured within 30 days</p>
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

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Search, BarChart3, FileText, Target } from "lucide-react"
import Link from "next/link"

export default function SEOAuditsPage() {
  const benefits = [
    "Comprehensive website SEO analysis",
    "Local search performance evaluation",
    "Competitor analysis and benchmarking",
    "Technical SEO issue identification",
    "Content optimization recommendations",
    "Local citation audit and cleanup",
    "Actionable improvement roadmap",
    "Priority-based implementation guide",
  ]

  const features = [
    {
      icon: Search,
      title: "Technical SEO Audit",
      description: "Comprehensive analysis of your website's technical SEO factors affecting search performance.",
    },
    {
      icon: BarChart3,
      title: "Performance Analysis",
      description: "Detailed review of your current search rankings, traffic, and local visibility metrics.",
    },
    {
      icon: FileText,
      title: "Detailed Report",
      description: "Professional audit report with findings, recommendations, and step-by-step action plan.",
    },
    {
      icon: Target,
      title: "Competitor Analysis",
      description: "Analysis of your top local competitors to identify opportunities and gaps in your strategy.",
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
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">Local SEO Audits</h1>
              <p className="text-xl text-primary-foreground/90 text-pretty">
                Get a comprehensive analysis of your local SEO performance with actionable recommendations to improve
                your search rankings and attract more customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Get My SEO Audit</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <Link href="/contact">Free Quick Audit</Link>
                </Button>
              </div>
            </div>
            <div className="bg-background/10 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="text-2xl font-bold">Your SEO Audit Includes:</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Comprehensive SEO Analysis</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our detailed SEO audits identify exactly what's holding your business back from ranking higher in local
              search results.
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
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">What You'll Discover</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our comprehensive SEO audit reveals the exact steps needed to improve your local search performance.
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
                <h3 className="text-2xl font-bold text-foreground">Get Your Free Audit</h3>
                <p className="text-muted-foreground">
                  Discover exactly what's preventing your business from ranking higher in local search results.
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact">Get Free SEO Audit</Link>
                </Button>
                <p className="text-sm text-muted-foreground">Detailed report delivered in 24 hours</p>
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

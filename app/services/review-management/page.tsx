import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, MessageCircle, Shield, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function ReviewManagementPage() {
  const benefits = [
    "Review monitoring across all major platforms",
    "Professional response to all reviews",
    "Review generation campaigns",
    "Negative review mitigation strategies",
    "Review platform optimization",
    "Customer feedback analysis",
    "Reputation monitoring and alerts",
    "Monthly reputation reports",
  ]

  const features = [
    {
      icon: Star,
      title: "Review Generation",
      description: "Systematic campaigns to encourage satisfied customers to leave positive reviews on key platforms.",
    },
    {
      icon: MessageCircle,
      title: "Professional Responses",
      description:
        "Thoughtful, professional responses to all reviews that demonstrate your commitment to customer service.",
    },
    {
      icon: Shield,
      title: "Reputation Protection",
      description: "Proactive strategies to address negative reviews and protect your business reputation online.",
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Monitor your review performance across platforms and track improvements over time.",
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
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">Review Management Services</h1>
              <p className="text-xl text-primary-foreground/90 text-pretty">
                Build trust and attract more customers with professional review management. We help you maintain a
                stellar online reputation across all review platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Manage My Reviews</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <Link href="/contact">Free Reputation Audit</Link>
                </Button>
              </div>
            </div>
            <div className="bg-background/10 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="text-2xl font-bold">Review Management Includes:</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Complete Reputation Management</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Protect and enhance your online reputation with our comprehensive review management strategies.
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
                Why Reviews Matter for Local Business
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                90% of consumers read reviews before making a purchase decision. Make sure yours work in your favor.
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
                <h3 className="text-2xl font-bold text-foreground">Improve Your Reputation</h3>
                <p className="text-muted-foreground">
                  Professional review management can increase your average rating and customer trust significantly.
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact">Start Managing Reviews</Link>
                </Button>
                <p className="text-sm text-muted-foreground">See improvements within 30 days</p>
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

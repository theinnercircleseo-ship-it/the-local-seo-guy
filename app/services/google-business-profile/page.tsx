import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, MapPin, Star, Camera, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function GoogleBusinessProfilePage() {
  const benefits = [
    "Complete Google Business Profile setup and optimization",
    "Professional business photos and virtual tours",
    "Review management and response strategies",
    "Post scheduling and content creation",
    "Q&A management and optimization",
    "Insights tracking and reporting",
    "Local SEO integration",
    "Ongoing maintenance and updates",
  ]

  const features = [
    {
      icon: MapPin,
      title: "Profile Optimization",
      description:
        "Complete setup and optimization of your Google Business Profile for maximum visibility in local search results.",
    },
    {
      icon: Camera,
      title: "Professional Photos",
      description:
        "High-quality business photos and virtual tours that showcase your business and attract more customers.",
    },
    {
      icon: Star,
      title: "Review Management",
      description:
        "Strategic review management to improve your online reputation and encourage positive customer feedback.",
    },
    {
      icon: MessageSquare,
      title: "Content & Posts",
      description: "Regular posts and updates to keep your profile active and engage with potential customers.",
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
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">Google Business Profile Optimization</h1>
              <p className="text-xl text-primary-foreground/90 text-pretty">
                Maximize your visibility in Google Maps and local search results. Our Google Business Profile
                optimization helps you attract more customers and build trust in your local market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Optimize My Profile</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <Link href="/contact">Free Profile Audit</Link>
                </Button>
              </div>
            </div>
            <div className="bg-background/10 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="text-2xl font-bold">Profile Optimization Includes:</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Complete Google Business Profile Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We handle every aspect of your Google Business Profile to ensure maximum visibility and customer
              engagement.
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
                Why Google Business Profile Matters
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Your Google Business Profile is often the first impression customers have of your business. Make it
                count.
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
                <h3 className="text-2xl font-bold text-foreground">Get More Customers</h3>
                <p className="text-muted-foreground">
                  A fully optimized Google Business Profile can increase your visibility by up to 300% in local search
                  results.
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact">Optimize My Profile</Link>
                </Button>
                <p className="text-sm text-muted-foreground">Setup completed within 48 hours</p>
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

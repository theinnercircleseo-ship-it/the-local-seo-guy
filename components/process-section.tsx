import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Target, Rocket, Shield } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Deep Business Analysis",
      description:
        "We analyze your business, competitors, and market to identify long-term growth opportunities and quick wins that can boost your rankings immediately.",
      highlight: "Find low-hanging fruit",
    },
    {
      icon: Target,
      number: "02",
      title: "Choose Your Plan",
      description:
        "Based on our analysis, we recommend the perfect plan for your business goals and budget. No cookie-cutter solutions - everything is tailored to you.",
      highlight: "Customized strategy",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Implementation Begins",
      description:
        "Our team gets to work immediately optimizing your Google Business Profile, building citations, and implementing proven local SEO strategies.",
      highlight: "Immediate action",
    },
    {
      icon: Shield,
      number: "04",
      title: "Results Guaranteed",
      description:
        "If you don't see ranking improvements within 60 days, we'll refund your money. That's how confident we are in our proven process.",
      highlight: "60-day guarantee",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Our Proven Process
          </Badge>
          <h2 className="text-4xl font-bold text-balance mb-6">
            How We Get Your Business to <span className="text-primary">Rank #1</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Our systematic approach has helped hundreds of local businesses dominate their markets. Here's exactly how
            we'll do it for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    <h3 className="text-xl font-semibold mb-4 text-balance">{step.title}</h3>
                    <p className="text-muted-foreground mb-4 text-balance leading-relaxed">{step.description}</p>

                    <Badge variant="secondary" className="text-foreground bg-muted">
                      {step.highlight}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-green-800">60-Day Money-Back Guarantee</h3>
            </div>
            <p className="text-green-700 text-lg mb-6 text-balance">
              We're so confident in our process that if you don't see ranking improvements within 60 days, we'll refund
              every penny. No questions asked.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                Start Your Free Audit
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              >
                View Our Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

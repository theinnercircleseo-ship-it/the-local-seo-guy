import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-background">
          <CardContent className="p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                  Ready to Dominate Local Search?
                </h2>
                <p className="text-xl text-muted-foreground text-pretty">
                  Get a free SEO audit and discover exactly what's holding your business back from ranking #1 in local
                  search results.
                </p>

                <div className="space-y-3">
                  {[
                    "Complete local SEO analysis",
                    "Competitor research & insights",
                    "Custom action plan",
                    "No obligation consultation",
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">FREE</div>
                  <div className="text-lg font-medium text-foreground mb-4">SEO Audit & Consultation</div>
                  <div className="text-muted-foreground mb-6">Usually $500 - Limited time offer</div>

                  <div className="space-y-4">
                    <Button
                      asChild
                      size="lg"
                      className="w-full text-lg bg-orange-700 hover:bg-orange-800 text-primary-foreground"
                    >
                      <Link href="/contact">Get Your Free Audit Now</Link>
                    </Button>

                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>Or call: (555) 123-4567</span>
                    </div>
                  </div>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  ⚡ Most audits completed within 24 hours
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

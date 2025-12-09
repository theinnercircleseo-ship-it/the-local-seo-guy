import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, MapPin, Star } from "lucide-react"
import Image from "next/image"

export function CaseStudySection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 text-foreground bg-green-100 border-green-200 hover:bg-green-100">
            <TrendingUp className="w-4 h-4 mr-2" />
            Case Study
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Real Results in Just 30 Days</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we transformed The Local Window Guy's local search presence from struggling to dominating their
            market
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-none">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Before */}
                <div className="p-8 bg-red-50 border-r">
                  <div className="text-center mb-6">
                    <Badge variant="destructive" className="mb-3">
                      Before
                    </Badge>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Struggling to Rank</h3>
                    <p className="text-muted-foreground text-sm">Poor visibility in local search results</p>
                  </div>

                  <div className="relative mb-6">
                    <Image
                      src="/case-study-before.png"
                      alt="Before: Poor local search rankings with average rank 9.61"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md w-full h-auto object-contain"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Average Rank:</span>
                      <span className="font-bold text-red-600 text-lg">9.61</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">High Rankings:</span>
                      <span className="font-semibold text-red-600">10%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Out of Top 20:</span>
                      <span className="font-semibold text-red-600">5%</span>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="p-8 bg-green-50">
                  <div className="text-center mb-6">
                    {/* Removed hover effects from badge */}
                    <Badge className="mb-3 bg-green-600 text-white hover:bg-green-600">After 30 Days</Badge>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Dominating Local Search</h3>
                    <p className="text-muted-foreground text-sm">Consistent top rankings across the market</p>
                  </div>

                  <div className="relative mb-6">
                    <Image
                      src="/case-study-after.png"
                      alt="After: Excellent local search rankings with average rank 3.57"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md w-full h-auto object-contain"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Average Rank:</span>
                      <span className="font-bold text-green-600 text-lg">3.57</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">High Rankings:</span>
                      <span className="font-semibold text-green-600">52%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Out of Top 20:</span>
                      <span className="font-semibold text-green-600">0%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Summary */}
              <div className="p-8 bg-gradient-to-r from-blue-50 to-green-50 border-t">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Transformation Results</h4>
                  <p className="text-muted-foreground">Dramatic improvements across all key metrics</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
                      <span className="text-2xl font-bold text-green-600">169%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Ranking Improvement</p>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Star className="w-6 h-6 text-green-600 mr-2" />
                      <span className="text-2xl font-bold text-green-600">420%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">More High Rankings</p>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <MapPin className="w-6 h-6 text-green-600 mr-2" />
                      <span className="text-2xl font-bold text-green-600">100%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Eliminated Out-of-Range</p>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <p className="text-lg font-semibold text-foreground mb-2">
                    "The results speak for themselves - we went from invisible to dominating our local market."
                  </p>
                  <p className="text-muted-foreground">- The Local Window Guy, Langley BC</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

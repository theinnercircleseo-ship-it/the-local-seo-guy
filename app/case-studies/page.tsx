import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CaseStudiesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
              <Badge variant="outline" className="mb-4 text-primary border-primary/20">
                Real Results
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Local SEO <span className="text-primary">Success Stories</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                Discover how we've helped local businesses dominate their markets and achieve incredible ranking
                improvements in just 30-90 days.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-8 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl overflow-hidden border border-blue-100">
              <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-12">
                <div className="flex flex-col justify-center">
                  <Badge className="mb-4 w-fit bg-green-600 text-white">Featured Case Study</Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
                    The Local Window Guy: From Page 3 to <span className="text-primary">#1 in 30 Days</span>
                  </h2>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Industry</p>
                        <p className="text-muted-foreground">Window Replacement Services</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Timeline</p>
                        <p className="text-muted-foreground">30 Days to Top Rankings</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Key Results</p>
                        <ul className="text-muted-foreground list-disc list-inside">
                          <li>Average ranking improved from 9.61 to 3.57</li>
                          <li>420% increase in top 3 rankings</li>
                          <li>Eliminated all out-of-range results (0%)</li>
                          <li>52% of keywords now rank in top 3 positions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-blue-200 mb-8">
                    <p className="text-lg text-foreground italic mb-4">
                      "The results speak for themselves. In just 30 days, we went from being invisible on Google to
                      dominating our local market. Our phone hasn't stopped ringing!"
                    </p>
                    <p className="font-semibold text-primary">— Owner, The Local Window Guy</p>
                  </div>

                  <Button asChild size="lg" className="w-fit">
                    <Link href="/contact">Get Similar Results for Your Business</Link>
                  </Button>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="font-semibold text-lg mb-4 text-center">Before - Average Rank: 9.61</h3>
                    <Image
                      src="/images/image-20-2813-29.png"
                      alt="Before local rankings - scattered yellow and red markers showing poor rankings"
                      width={600}
                      height={400}
                      className="rounded-lg w-full"
                    />
                    <div className="grid grid-cols-4 gap-2 mt-4 text-center text-sm">
                      <div>
                        <p className="text-green-600 font-bold">10%</p>
                        <p className="text-muted-foreground">High</p>
                      </div>
                      <div>
                        <p className="text-yellow-600 font-bold">56%</p>
                        <p className="text-muted-foreground">Med</p>
                      </div>
                      <div>
                        <p className="text-orange-600 font-bold">29%</p>
                        <p className="text-muted-foreground">Low</p>
                      </div>
                      <div>
                        <p className="text-red-600 font-bold">5%</p>
                        <p className="text-muted-foreground">Out</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-500">
                    <h3 className="font-semibold text-lg mb-4 text-center text-green-600">
                      After - Average Rank: 3.57
                    </h3>
                    <Image
                      src="/images/image-20-2814-29.png"
                      alt="After local rankings - dominant green markers showing top rankings"
                      width={600}
                      height={400}
                      className="rounded-lg w-full"
                    />
                    <div className="grid grid-cols-4 gap-2 mt-4 text-center text-sm">
                      <div>
                        <p className="text-green-600 font-bold">52%</p>
                        <p className="text-muted-foreground">High</p>
                      </div>
                      <div>
                        <p className="text-yellow-600 font-bold">48%</p>
                        <p className="text-muted-foreground">Med</p>
                      </div>
                      <div>
                        <p className="text-orange-600 font-bold">0%</p>
                        <p className="text-muted-foreground">Low</p>
                      </div>
                      <div>
                        <p className="text-red-600 font-bold">0%</p>
                        <p className="text-muted-foreground">Out</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Placeholder Section for Future Case Studies */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">More Success Stories Coming Soon</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                We're currently documenting additional case studies from our successful client campaigns. Check back
                soon to see more impressive results!
              </p>
              <div className="bg-white rounded-2xl p-12 max-w-4xl mx-auto border-2 border-dashed border-muted-foreground/20">
                <p className="text-muted-foreground text-lg italic">
                  In the meantime, let's create a success story for your business. Our proven strategies have worked for
                  hundreds of local businesses across various industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-xl mb-8 text-balance opacity-90">
              Get your free local SEO audit and discover how we can help your business dominate local search results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link href="/contact">Get Your Free Audit</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link href="/pricing">View Our Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

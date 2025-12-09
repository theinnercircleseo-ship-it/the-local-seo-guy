import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, TrendingUp, Users, MapPin } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Johnson's Family Restaurant",
      location: "Austin, TX",
      industry: "Restaurant",
      rating: 5,
      result: "+400% online orders",
      timeframe: "6 months",
      quote:
        "The Local SEO Guy completely transformed our online presence. We went from barely showing up in local searches to being the #1 result for 'family restaurant Austin.' Our online orders increased by 400% and we had to hire additional staff to keep up with demand.",
      image: "SJ",
    },
    {
      name: "Mike Rodriguez",
      business: "Rodriguez Plumbing Services",
      location: "Phoenix, AZ",
      industry: "Plumbing",
      rating: 5,
      result: "+250% service calls",
      timeframe: "4 months",
      quote:
        "I was skeptical about SEO at first, but the results speak for themselves. My phone hasn't stopped ringing since we started working together. I'm now the top-ranked plumber in Phoenix and my revenue has doubled.",
      image: "MR",
    },
    {
      name: "Dr. Emily Chen",
      business: "Chen Family Dentistry",
      location: "Seattle, WA",
      industry: "Healthcare",
      rating: 5,
      result: "+180% new patients",
      timeframe: "5 months",
      quote:
        "As a new practice, I needed to establish credibility and attract patients quickly. The Local SEO Guy helped me rank #1 for 'dentist near me' and my practice is now fully booked. The ROI has been incredible.",
      image: "EC",
    },
    {
      name: "Tom Wilson",
      business: "Wilson Auto Repair",
      location: "Denver, CO",
      industry: "Automotive",
      rating: 5,
      result: "+320% website traffic",
      timeframe: "3 months",
      quote:
        "I couldn't believe how fast the results came. Within 3 months, my website traffic increased by 320% and I'm getting 5-10 new customers per week from Google searches. Best investment I've made for my business.",
      image: "TW",
    },
    {
      name: "Lisa Martinez",
      business: "Martinez Law Firm",
      location: "Miami, FL",
      industry: "Legal",
      rating: 5,
      result: "+200% qualified leads",
      timeframe: "6 months",
      quote:
        "The team understood the competitive nature of legal services and developed a strategy that set us apart. We're now ranking above much larger firms and our qualified lead volume has doubled.",
      image: "LM",
    },
    {
      name: "David Park",
      business: "Park's Home Improvement",
      location: "Chicago, IL",
      industry: "Home Services",
      rating: 5,
      result: "+150% project inquiries",
      timeframe: "4 months",
      quote:
        "Working with The Local SEO Guy was a game-changer. My Google Business Profile is now optimized, I'm getting great reviews, and project inquiries have increased by 150%. I'm booked solid for the next 3 months.",
      image: "DP",
    },
  ]

  const stats = [
    {
      icon: TrendingUp,
      number: "300%",
      label: "Average Traffic Increase",
      description: "Our clients see significant traffic growth within 3-6 months",
    },
    {
      icon: Users,
      number: "500+",
      label: "Businesses Helped",
      description: "Local businesses across various industries trust our expertise",
    },
    {
      icon: MapPin,
      number: "90%",
      label: "First Page Rankings",
      description: "Of our clients achieve first-page rankings for target keywords",
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Client Satisfaction",
      description: "Average rating from our clients across all review platforms",
    },
  ]

  const industries = [
    "Restaurants & Food Service",
    "Healthcare & Medical",
    "Legal Services",
    "Home Services",
    "Automotive",
    "Real Estate",
    "Retail & E-commerce",
    "Professional Services",
    "Beauty & Wellness",
    "Fitness & Recreation",
  ]

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/gradient-background.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance text-white">Client Success Stories</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto text-pretty">
            See how we've helped local businesses across various industries dominate their local markets and achieve
            remarkable growth through strategic SEO.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <Card key={stat.label} className="text-center">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="font-semibold text-foreground mb-2">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from real businesses. Here's how we've helped our clients achieve their local SEO goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6">
                  <div className="absolute -top-3 -left-3 bg-primary text-primary-foreground p-2 rounded-full">
                    <Quote className="h-4 w-4" />
                  </div>

                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-foreground mb-6 italic">"{testimonial.quote}"</blockquote>

                  <div className="border-t pt-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">{testimonial.image}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{testimonial.industry}</Badge>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {testimonial.result}
                      </Badge>
                      <Badge variant="outline">{testimonial.timeframe}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've successfully helped businesses across a wide range of industries achieve their local SEO goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <span className="text-foreground font-medium">{industry}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Video Testimonials</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear directly from our clients about their experience working with The Local SEO Guy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <Card key={video} className="overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground">Video Testimonial {video}</p>
                    <p className="text-sm text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}

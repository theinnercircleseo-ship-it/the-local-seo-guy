import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, TrendingUp, Target } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that directly impact your business growth and revenue.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We work as an extension of your team to achieve your business goals.",
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Years of experience in local SEO with proven strategies that work across different industries.",
    },
    {
      icon: TrendingUp,
      title: "Transparency",
      description: "Clear reporting and communication so you always know how your SEO investment is performing.",
    },
  ]

  const stats = [
    { number: "100+", label: "Local Businesses Helped" },
    { number: "300%", label: "Average Traffic Increase" },
    { number: "90%", label: "First Page Rankings" },
    { number: "5 Years", label: "Local SEO Experience" },
  ]

  const achievements = [
    "Helped over 100 local businesses improve their online visibility",
    "Generated millions in additional revenue for our clients",
    "Achieved first-page rankings for 90% of target keywords",
    "Maintained 98% client satisfaction rate",
    "Recognized as a leading local SEO expert in the industry",
    "Featured in major marketing publications and podcasts",
  ]

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">About The Local SEO Guy</h1>
              <p className="text-xl text-primary-foreground/90 text-pretty">
                We're passionate about helping local businesses dominate their market through proven SEO strategies. Our
                mission is to level the playing field so small businesses can compete with larger competitors online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Work With Us</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="bg-background/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary-foreground">{stat.number}</div>
                    <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Local SEO Guy was founded with a simple mission: help local businesses succeed online. After
                  seeing too many great local businesses struggle to compete with larger companies in search results, we
                  knew there had to be a better way.
                </p>
                <p>
                  We started by helping a small family restaurant increase their online visibility. Within 6 months,
                  they saw a 400% increase in online orders and had to hire additional staff to keep up with demand.
                  That's when we knew we were onto something special.
                </p>
                <p>
                  Today, we've helped over 100 local businesses across various industries achieve similar success. From
                  plumbers and dentists to restaurants and retail stores, we've developed proven strategies that work
                  regardless of your business type.
                </p>
              </div>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do and ensure we deliver exceptional results for every client.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="border-2 hover:border-primary/20 transition-colors">
                  <CardHeader>
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Meet The Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced team of local SEO specialists is dedicated to helping your business succeed online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">JD</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">John Doe</h3>
                <p className="text-primary font-medium mb-3">Founder & Lead SEO Strategist</p>
                <p className="text-muted-foreground text-sm">
                  5+ years of local SEO experience helping businesses dominate their local markets.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">SM</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Sarah Miller</h3>
                <p className="text-primary font-medium mb-3">Content & Link Building Specialist</p>
                <p className="text-muted-foreground text-sm">
                  Expert in creating compelling content and building high-quality local backlinks.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">MJ</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Mike Johnson</h3>
                <p className="text-primary font-medium mb-3">Technical SEO Analyst</p>
                <p className="text-muted-foreground text-sm">
                  Specializes in technical SEO audits and website optimization for better search performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}

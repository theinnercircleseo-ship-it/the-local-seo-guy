import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Search, LinkIcon, Star, BarChart3, Users } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Search,
    title: "Local SEO",
    description: "Optimize your business for local search results and get found by customers in your area.",
    href: "/services/local-seo",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    description: "Optimize and manage your Google Business Profile to attract more local customers.",
    href: "/services/google-business-profile",
  },
  {
    icon: LinkIcon,
    title: "Local Link Building",
    description: "Build high-quality local backlinks to boost your search rankings and authority.",
    href: "/services/local-link-building",
  },
  {
    icon: Star,
    title: "Review Management",
    description: "Manage and improve your online reviews to build trust and attract more customers.",
    href: "/services/review-management",
  },
  {
    icon: BarChart3,
    title: "Local SEO Audits",
    description: "Comprehensive analysis of your local SEO performance with actionable recommendations.",
    href: "/services/seo-audits",
  },
  {
    icon: Users,
    title: "Citation Building",
    description: "Build consistent business citations across the web to improve local search visibility.",
    href: "/services/citation-building",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Local SEO Services That Drive Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We help local businesses dominate their market with proven SEO strategies that increase visibility, drive
            traffic, and generate more leads.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

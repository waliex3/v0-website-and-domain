import { Factory, Globe, Shield, Truck, Users, Zap } from "lucide-react"

const features = [
  {
    icon: Factory,
    title: "Modern Facility",
    description: "State-of-the-art manufacturing equipment ensuring consistent quality and high production capacity.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Rigorous quality control processes at every stage of production to meet international standards.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving customers in over 50 countries with reliable shipping and export documentation support.",
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    description: "Efficient logistics and inventory management to ensure on-time delivery for all orders.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced professionals dedicated to providing excellent customer service and technical support.",
  },
  {
    icon: Zap,
    title: "Competitive Pricing",
    description: "Optimized production processes allow us to offer the best value without compromising quality.",
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Your Trusted Manufacturing Partner
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine traditional craftsmanship with modern technology to deliver exceptional products and services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

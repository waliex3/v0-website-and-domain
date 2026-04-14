import Image from "next/image"

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Countries Served" },
  { value: "1M+", label: "Products Delivered" },
  { value: "100%", label: "Quality Commitment" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/factory-floor.jpg"
                alt="El Mueiz Factory production facility"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              About Our Factory
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6 text-balance">
              Crafting Quality Products for Global Markets
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                El Mueiz Factory has established itself as a leading manufacturer of PP ropes and PVC shoes, serving customers across the globe with premium quality products at competitive prices.
              </p>
              <p>
                Our state-of-the-art manufacturing facility is equipped with modern machinery and operated by skilled professionals who are committed to delivering excellence in every product.
              </p>
              <p>
                We take pride in our ability to customize products according to client specifications while maintaining the highest standards of quality control throughout the production process.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-10 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

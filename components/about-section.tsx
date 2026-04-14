import Image from "next/image"

const stats = [
  { value: "35+", label: "Years Experience" },
  { value: "1989", label: "Established" },
  { value: "2", label: "Product Lines" },
  { value: "100%", label: "Quality Commitment" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-14%20at%2022.29.27%20%282%29-Ev4Y8GyNklFTwRU48114nxVOvNJTO1.jpeg"
                alt="El Mueiz Factory BAYAN rope products"
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
              Leading Plastics Manufacturer in Sudan
            </h2>
            <p className="text-lg text-muted-foreground mb-2" dir="rtl">
              مصنع المعز للبلاستيك - رائد صناعة البلاستيك منذ عام 1989
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Since 1989, El Mueiz Factory has been a pioneer in plastics manufacturing in Sudan. Based in Atbara Industrial Area, we specialize in producing high-quality PP ropes under our BAYAN brand and durable PVC footwear.
              </p>
              <p>
                Our factory combines traditional craftsmanship with modern manufacturing techniques to deliver products that meet the highest standards of quality and durability.
              </p>
              <p>
                We take pride in being a trusted supplier to businesses and retailers across Sudan, offering competitive prices and reliable delivery.
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

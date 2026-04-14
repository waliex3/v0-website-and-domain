import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const products = [
  {
    title: "PP Rope",
    subtitle: "Polypropylene Ropes",
    description: "High-strength polypropylene ropes designed for industrial, agricultural, and marine applications. Available in various colors, sizes, and specifications.",
    image: "/images/pp-rope.jpg",
    features: [
      "High tensile strength",
      "UV resistant",
      "Lightweight & floatable",
      "Multiple color options",
      "Custom lengths available",
    ],
  },
  {
    title: "PVC Shoes",
    subtitle: "Industrial Footwear",
    description: "Durable PVC shoes and sandals perfect for everyday wear, industrial use, and various working conditions. Comfortable, affordable, and long-lasting.",
    image: "/images/pvc-shoes.jpg",
    features: [
      "Water resistant",
      "Comfortable fit",
      "Durable construction",
      "Various sizes",
      "Multiple styles",
    ],
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            Our Products
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Quality Manufacturing for Global Markets
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in producing high-quality PP ropes and PVC footwear that meet international standards.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    {product.subtitle}
                  </span>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-card-foreground">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" asChild className="group/btn">
                  <Link href="#contact">
                    Request Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

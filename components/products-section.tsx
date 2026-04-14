import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const ropeProducts = [
  {
    color: "Blue",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-14%20at%2022.29.26%20%281%29-WDgHelaP6rFexHea2kUkHZH9gKPNah.jpeg",
  },
  {
    color: "Yellow",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-14%20at%2022.29.26-fYnr8xIVGNrLCTGc8i5zlcCc9Rrl8F.jpeg",
  },
  {
    color: "Green",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-14%20at%2022.29.27-HeMIeavUIQbxbVBOtGOAzbEgS4g64N.jpeg",
  },
  {
    color: "Neon Yellow",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-14%20at%2022.29.27%20%281%29-bOAaPijFuUBZewZQrZmMWoTnfHHJji.jpeg",
  },
]

const shoeProducts = [
  {
    name: "Classic Loafer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2921.JPG-yZtfma6p7UK058BetYkwJkCCTHOF8t.jpeg",
  },
  {
    name: "Perforated Flat",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2922.JPG-ufbRWxhQunEeVwdKtpRbsqSrqLgQuJ.jpeg",
  },
  {
    name: "Brogue Style",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2924.JPG-txvBrC8DFsu22cvvYIJk5YU2iqXJWu.jpeg",
  },
  {
    name: "Slip-On",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2923.JPG-MWW5RiIuEE66BcqUfEYsc05QAZ1UrR.jpeg",
  },
  {
    name: "Sneaker Style",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2925.JPG-xIisx1mCGSuKHI5yngZjosRbpS72d3.jpeg",
  },
]

const ropeFeatures = [
  "High tensile strength",
  "UV resistant",
  "Lightweight & floatable",
  "Multiple color options",
  "Custom lengths available",
]

const shoeFeatures = [
  "Water resistant",
  "Comfortable fit",
  "Durable construction",
  "Various sizes (36-45)",
  "Multiple styles",
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
            Quality Manufacturing Since 1989
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            BAYAN brand PP ropes and premium PVC footwear - trusted by customers across Sudan and beyond.
          </p>
        </div>

        {/* PP Rope Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-foreground">PP Rope - BAYAN Brand</h3>
            <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              Polypropylene
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Rope Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              {ropeProducts.map((rope) => (
                <div key={rope.color} className="group relative aspect-square rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={rope.image}
                    alt={`${rope.color} PP Rope`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <span className="text-sm font-medium text-white">{rope.color}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Rope Info */}
            <div className="flex flex-col justify-center">
              <p className="text-muted-foreground leading-relaxed mb-6">
                High-strength polypropylene ropes designed for industrial, agricultural, and marine applications. Our BAYAN brand ropes are available in various colors, sizes, and specifications to meet your specific needs.
              </p>
              <ul className="space-y-3 mb-8">
                {ropeFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-foreground">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" asChild className="group/btn w-fit">
                <Link href="#contact">
                  Request Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* PVC Shoes Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-foreground">PVC Shoes</h3>
            <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              Footwear
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Shoe Info */}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Durable PVC shoes perfect for everyday wear, industrial use, and various working conditions. Our footwear collection includes multiple styles - from classic loafers to modern sneakers - all made with comfort and durability in mind.
              </p>
              <ul className="space-y-3 mb-8">
                {shoeFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-foreground">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" asChild className="group/btn w-fit">
                <Link href="#contact">
                  Request Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            {/* Shoe Images Grid */}
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-2 gap-4">
                {shoeProducts.slice(0, 4).map((shoe) => (
                  <div key={shoe.name} className="group relative aspect-square rounded-lg overflow-hidden bg-white">
                    <Image
                      src={shoe.image}
                      alt={shoe.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <span className="text-sm font-medium text-white">{shoe.name}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Fifth shoe centered below */}
              <div className="mt-4 flex justify-center">
                <div className="group relative aspect-square w-1/2 rounded-lg overflow-hidden bg-white">
                  <Image
                    src={shoeProducts[4].image}
                    alt={shoeProducts[4].name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <span className="text-sm font-medium text-white">{shoeProducts[4].name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

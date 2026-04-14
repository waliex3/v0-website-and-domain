import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-factory.jpg"
          alt="El Mueiz Factory manufacturing facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/80 mb-4">
            Manufacturing Excellence Since Establishment
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl text-balance leading-tight">
            Quality PP Rope &amp; PVC Shoes Manufacturing
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 max-w-xl">
            El Mueiz Factory delivers premium quality polypropylene ropes and PVC footwear to businesses worldwide. Trusted for durability, reliability, and competitive pricing.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="group">
              <Link href="#products">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link href="#contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-primary-foreground/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-12 w-px bg-primary-foreground/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-primary-foreground/60 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

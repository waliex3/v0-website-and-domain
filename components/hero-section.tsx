import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#1a365d]">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="absolute inset-0 bg-[#c53030] rounded-l-[100px] transform translate-x-1/4" />
        </div>
        <div className="absolute inset-0 bg-[#1a365d]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-white/70 mb-4">
              Manufacturing Excellence Since 1989
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance leading-tight">
              Premium PP Rope &amp; PVC Shoes Manufacturer
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80 max-w-xl">
              El Mueiz Factory delivers high-quality BAYAN brand polypropylene ropes and durable PVC footwear to businesses across Sudan and beyond. Trusted since 1989.
            </p>
            <p className="mt-2 text-base text-white/60" dir="rtl">
              مصنع المعز للبلاستيك - رائد صناعة البلاستيك منذ عام 1989
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group bg-[#c53030] hover:bg-[#9b2c2c] text-white">
                <Link href="#products">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white">
                <Link href="#contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
          
          {/* Logo/Image Side */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Profile-2CdfracH3QZMn56l7DE39HSeGZ4qFz.jpg"
                alt="El Mueiz Factory"
                width={400}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-12 w-px bg-white/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/60 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

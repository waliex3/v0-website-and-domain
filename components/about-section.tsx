"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 35, suffix: "+", label: "Years Experience" },
  { value: 1989, suffix: "", label: "Established" },
  { value: 2, suffix: "", label: "Product Lines" },
  { value: 100, suffix: "%", label: "Quality Commitment" },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const statNumbersRef = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image slides in from left
      gsap.fromTo(
        imageRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          },
        }
      )

      // Content fades up
      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        }
      )

      // Counter animations for stats
      stats.forEach((stat, i) => {
        const el = statNumbersRef.current[i]
        if (!el) return

        const obj = { val: 0 }
        gsap.fromTo(
          obj,
          { val: 0 },
          {
            val: stat.value,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
            },
            onUpdate: () => {
              el.textContent = Math.round(obj.val) + stat.suffix
            },
          }
        )
      })

      // Stats container fade in
      gsap.fromTo(
        statsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-14%20at%2022.29.27%20%282%29-Ev4Y8GyNklFTwRU48114nxVOvNJTO1.jpeg"
                alt="El Mueiz Factory BAYAN rope products"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              About Our Factory
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6 text-balance">
              Leading Plastics Manufacturer in Sudan
            </h2>
            <p className="text-lg text-muted-foreground mb-2" dir="rtl">
              مصنع المعز للبلاستيك - رواد صناعة البلاستيك منذ عام 1989
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
            <div
              ref={statsRef}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-10 border-t border-border"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground">
                    <span
                      ref={(el) => { statNumbersRef.current[i] = el }}
                    >
                      0{stat.suffix}
                    </span>
                  </div>
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

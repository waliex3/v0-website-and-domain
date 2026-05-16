"use client"

import { useEffect, useRef } from "react"
import { Factory, Globe, Shield, Truck, Users, Zap } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Factory,
    title: "35+ Years Experience",
    description: "Established in 1989, we bring decades of expertise in plastics manufacturing to every product we make.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Rigorous quality control on all BAYAN ropes and PVC footwear to ensure durability and reliability.",
  },
  {
    icon: Globe,
    title: "Sudanese Made",
    description: "Proudly manufactured in Atbara Industrial Area, supporting local industry and employment.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "Efficient logistics across Sudan ensuring your orders arrive on time, every time.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "Dedicated team providing personalized service and support for all your product needs.",
  },
  {
    icon: Zap,
    title: "Competitive Pricing",
    description: "High quality products at fair prices - best value without compromising on quality.",
  },
]

export function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        }
      )

      // Cards stagger in
      const cards = gridRef.current?.querySelectorAll(".feature-card")
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: {
              amount: 0.5,
              grid: [2, 3],
              from: "start",
            },
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
            },
          }
        )
      }

      // Icon pulse on scroll trigger
      const icons = gridRef.current?.querySelectorAll(".feature-icon")
      if (icons) {
        gsap.fromTo(
          icons,
          { scale: 0, rotate: -15 },
          {
            scale: 1,
            rotate: 0,
            duration: 0.5,
            stagger: {
              amount: 0.5,
              from: "start",
            },
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="why-us" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
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
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card group p-6 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="feature-icon inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
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

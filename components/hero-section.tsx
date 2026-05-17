"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const arabicRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const bgRedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // Background red shape slides in
      tl.fromTo(
        bgRedRef.current,
        { x: "100%", opacity: 0 },
        { x: "25%", opacity: 1, duration: 1.2, ease: "power4.out" }
      )

      // Tagline fades up
      tl.fromTo(
        taglineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.8"
      )

      // Headline words stagger in
      const words = headlineRef.current?.querySelectorAll(".word")
      if (words) {
        tl.fromTo(
          words,
          { y: 60, opacity: 0, rotateX: -30 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.7, stagger: 0.08 },
          "-=0.3"
        )
      }

      // Description paragraph
      tl.fromTo(
        descRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      )

      // Arabic text
      tl.fromTo(
        arabicRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.3"
      )

      // Buttons
      tl.fromTo(
        buttonsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.2"
      )

      // Image slides in from right
      tl.fromTo(
        imageRef.current,
        { x: 80, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 0.9, ease: "power3.out" },
        "-=0.7"
      )

      // Scroll indicator fades in last
      tl.fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.2"
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Split headline into words for stagger
  const headlineText = "Premium PP Rope & PVC Shoes Manufacturer"
  const words = headlineText.split(" ")

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center bg-[#1a365d]">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div
            ref={bgRedRef}
            className="absolute inset-0 bg-[#c53030] rounded-l-[100px] transform translate-x-1/4"
          />
        </div>
        <div className="absolute inset-0 bg-[#1a365d]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              ref={taglineRef}
              className="text-sm font-medium uppercase tracking-widest text-white/70 mb-4"
            >
              Manufacturing Excellence Since 1989
            </p>

            <h1
              ref={headlineRef}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance leading-tight"
              style={{ perspective: "600px" }}
            >
              {words.map((word, i) => (
                <span key={i} className="word inline-block mr-[0.25em] last:mr-0">
                  {word}
                </span>
              ))}
            </h1>

            <p
              ref={descRef}
              className="mt-6 text-lg leading-relaxed text-white/80 max-w-xl"
            >
              El Mueiz Factory delivers high-quality BAYAN brand polypropylene ropes and durable PVC footwear to businesses across Sudan and beyond. Trusted since 1989.
            </p>

            <p ref={arabicRef} className="mt-2 text-base text-white/60" dir="rtl">
              مصنع المعز للبلاستيك - رواد صناعة البلاستيك منذ عام 1989
            </p>

            <div
              ref={buttonsRef}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" asChild className="group bg-[#c53030] hover:bg-[#9b2c2c] text-white">
                <Link href="#products">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="#contact">Request a Quote</Link>
              </Button>
            </div>
          </div>

          {/* Logo/Image Side */}
          <div className="hidden lg:flex justify-center">
            <div ref={imageRef} className="relative">
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
      <div ref={scrollRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
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

"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

gsap.registerPlugin(ScrollTrigger)

const statsData = [
  { value: 35, suffix: "+" },
  { value: 1989, suffix: "" },
  { value: 2, suffix: "" },
  { value: 100, suffix: "%" },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const statNumbersRef = useRef<(HTMLSpanElement | null)[]>([])

  const { lang, isArabic } = useLanguage()
  const t = translations[lang].about

  const statLabels = [
    t.stats.yearsExp,
    t.stats.established,
    t.stats.productLines,
    t.stats.quality,
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: imageRef.current, start: "top 80%" } }
      )

      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: contentRef.current, start: "top 80%" } }
      )

      statsData.forEach((stat, i) => {
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
            scrollTrigger: { trigger: statsRef.current, start: "top 85%" },
            onUpdate: () => { el.textContent = Math.round(obj.val) + stat.suffix },
          }
        )
      })

      gsap.fromTo(
        statsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: statsRef.current, start: "top 85%" } }
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
                className="object-contain"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              {t.sectionLabel}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6 text-balance">
              {t.sectionTitle}
            </h2>
            {/* Show Arabic subtitle only in English mode */}
            {!isArabic && (
              <p className="text-lg text-muted-foreground mb-2" dir="rtl">
                {t.arabicSubtitle}
              </p>
            )}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-10 border-t border-border"
            >
              {statsData.map((stat, i) => (
                <div key={statLabels[i]} className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-foreground">
                    <span ref={(el) => { statNumbersRef.current[i] = el }}>
                      0{stat.suffix}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{statLabels[i]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

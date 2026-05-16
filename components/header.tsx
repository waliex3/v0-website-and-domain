"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "About", href: "#about" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const navLinksRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.fromTo(headerRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
      tl.fromTo(logoRef.current, { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, "-=0.4")
      const links = navLinksRef.current?.querySelectorAll("a")
      if (links) tl.fromTo(links, { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.08 }, "-=0.3")
      tl.fromTo(ctaRef.current, { x: 20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4 }, "-=0.3")
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <div ref={logoRef} className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
              <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-14%20at%2010.11.24%E2%80%AFPM-Pjm1nKopl37MviTLX4iZEMLghn4iWW.png" alt="El Mueiz Factory Logo" width={140} height={60} className="h-12 w-auto" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground" onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div ref={navLinksRef} className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{item.name}</Link>
            ))}
          </div>
          <div ref={ctaRef} className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button asChild><Link href="#contact">Get Quote</Link></Button>
          </div>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[999] lg:hidden">
          <div className="fixed inset-0 bg-black/40" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-[1000] w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-14%20at%2010.11.24%E2%80%AFPM-Pjm1nKopl37MviTLX4iZEMLghn4iWW.png" alt="El Mueiz Factory Logo" width={120} height={50} className="h-10 w-auto" />
              </Link>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-foreground" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                  ))}
                </div>
                <div className="py-6">
                  <Button asChild className="w-full">
                    <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Get Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

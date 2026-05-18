"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const SUPABASE_URL = "https://cycltvxzvxpblwqbxfga.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5Y2x0dnh6dnhwYmx3cWJ4ZmdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxOTQzODAsImV4cCI6MjA5MTc3MDM4MH0.4mJTDOxDYxlTJYrRXno8qMB8mwWda_Xwr7Lgb6G2NxY"
const phoneNumbers = [
  "0912330434",
  "0912503935",
  "0123767367",
  "0123083564",
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const contactItemsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Info side slides in from left
      gsap.fromTo(
        infoRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
          },
        }
      )

      // Contact items stagger
      const items = contactItemsRef.current?.querySelectorAll(".contact-item")
      if (items) {
        gsap.fromTo(
          items,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contactItemsRef.current,
              start: "top 80%",
            },
          }
        )
      }

      // Form slides in from right
      gsap.fromTo(
        formRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const dbRes = await fetch(SUPABASE_URL + "/rest/v1/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": "Bearer " + SUPABASE_ANON_KEY,
        "Prefer": "return=minimal"
      },
      body: JSON.stringify(formState)
    })
    if (dbRes.ok) {
      fetch("https://waliex3.app.n8n.cloud/webhook/elmueiz-contact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": "Bearer " + SUPABASE_ANON_KEY
        },
        body: JSON.stringify(formState)
      }).catch(() => {})
    }
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", company: "", phone: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 lg:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div ref={infoRef}>
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6 text-balance">
              Ready to Start Your Order?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Contact us today for product inquiries, quotes, or to discuss your specific requirements. Our team is ready to assist you.
            </p>

            <div ref={contactItemsRef} className="space-y-6">
              <div className="contact-item flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Email Us</h3>
                  <a href="mailto:office@elmueizfactory.com" className="text-muted-foreground hover:text-primary transition-colors">
                    office@elmueizfactory.com
                  </a>
                </div>
              </div>

              <div className="contact-item flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Call Us</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {phoneNumbers.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:+249${phone.slice(1)}`}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="contact-item flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Visit Us</h3>
                  <p className="text-muted-foreground">
                    Atbara Industrial Area<br />
                    Sudan
                  </p>
                  <p className="text-muted-foreground text-sm mt-1" dir="rtl">
                    عطبرة المنطقة الصناعية - مصنع المعز للبلاستيك
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="bg-card rounded-lg border border-border p-6 lg:p-8">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for contacting us. We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                      Your Name
                    </label>
                    <Input id="name" name="name" value={formState.name} onChange={handleChange} placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                      Email Address
                    </label>
                    <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-card-foreground">
                      Company Name
                    </label>
                    <Input id="company" name="company" value={formState.company} onChange={handleChange} placeholder="Your Company" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-card-foreground">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" type="tel" value={formState.phone} onChange={handleChange} placeholder="+249 912 330 434" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                    Your Message
                  </label>
                  <Textarea id="message" name="message" value={formState.message} onChange={handleChange} placeholder="Tell us about your requirements..." rows={5} required />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

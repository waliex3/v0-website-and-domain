import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service | El Mueiz Factory",
  description:
    "Terms of Service for El Mueiz Factory, covering use of our website and our internal TikTok video-upload automation tool.",
  alternates: {
    canonical: "https://www.elmueizfactory.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Legal
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4 text-balance">
              Terms of Service
            </h1>
            <p className="text-sm text-muted-foreground mb-12">
              Last updated: July 26, 2026
            </p>

            <div className="space-y-10 text-muted-foreground leading-relaxed">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  1. About This Service
                </h2>
                <p>
                  This website and the internal automation tool it describes
                  are operated by El Mueiz Factory ("we", "us", "our"), a PP
                  rope (BAYAN brand) and PVC footwear manufacturer based in
                  Atbara Industrial Area, Sudan. The automation tool is built
                  and used for our own internal purposes - it uploads our own
                  product videos to the drafts of our own company TikTok
                  account on a schedule. It is not offered to, or intended
                  for use by, any external party.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  2. Scope of Use
                </h2>
                <p>
                  Access to the automation tool is restricted to authorized
                  members of our team. It connects to a single, company-owned
                  TikTok account and performs only the task of uploading
                  videos we produce to that account's drafts. It does not
                  provide access to, or act on behalf of, any other TikTok
                  account or user.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  3. Acceptable Use
                </h2>
                <p>
                  The tool and this website may only be used for lawful
                  purposes connected to our business. Users must not attempt
                  to use the tool to access accounts, data, or systems other
                  than those it is authorized for, or to interfere with its
                  operation or with TikTok's platform.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  4. Ownership of Content
                </h2>
                <p>
                  All product videos and other content uploaded through the
                  tool are produced by us and remain the property of El
                  Mueiz Factory. Nothing in these terms transfers ownership
                  of that content to any third party.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  5. Limitation of Liability
                </h2>
                <p>
                  The tool is provided for our own internal use on an "as
                  is" basis, without warranties of any kind. To the fullest
                  extent permitted by law, El Mueiz Factory shall not be
                  liable for any indirect, incidental, or consequential
                  damages arising from the use or unavailability of this
                  tool or website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  6. Governing Law
                </h2>
                <p>
                  These terms are governed by the laws of Sudan, without
                  regard to conflict-of-law principles.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  7. Changes to These Terms
                </h2>
                <p>
                  If we make material changes to these terms, we will update
                  the "Last updated" date above.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  8. Contact Us
                </h2>
                <p>
                  El Mueiz Factory, Atbara Industrial Area, Sudan. Email:{" "}
                  <a
                    href="mailto:office@elmueizfactory.com"
                    className="text-primary hover:underline"
                  >
                    office@elmueizfactory.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

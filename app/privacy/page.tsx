import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | El Mueiz Factory",
  description:
    "Privacy Policy for El Mueiz Factory, covering the data handled by our internal TikTok video-upload tool and our website contact form.",
  alternates: {
    canonical: "https://www.elmueizfactory.com/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground mb-12">
              Last updated: July 26, 2026
            </p>

            <div className="space-y-10 text-muted-foreground leading-relaxed">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  1. Who We Are
                </h2>
                <p>
                  El Mueiz Factory ("we", "us", "our") is a manufacturer of PP
                  rope (BAYAN brand) and PVC footwear, based in Atbara
                  Industrial Area, Sudan, operating since 1989. This policy
                  explains how we handle data in connection with our website
                  and an internal automation tool we use to manage our own
                  company TikTok account. If you have any questions about
                  this policy, contact us at{" "}
                  <a
                    href="mailto:office@elmueizfactory.com"
                    className="text-primary hover:underline"
                  >
                    office@elmueizfactory.com
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  2. Our TikTok Integration
                </h2>
                <p className="mb-4">
                  We built an internal tool that uploads our own product
                  videos to the drafts of our own company-owned TikTok
                  account on a schedule. This tool has no external users - it
                  is used only by our team to manage our own account. It does
                  not interact with, view, or process data belonging to any
                  other TikTok user.
                </p>
                <p className="mb-2 font-medium text-foreground">
                  Data we collect through TikTok's API:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>
                    An OAuth access token and refresh token issued by TikTok
                    for our own company TikTok account, used to authorize the
                    tool to upload videos on our behalf.
                  </li>
                </ul>
                <p className="mb-2 font-medium text-foreground">
                  Data we do not collect:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    We do not collect personal data from any other TikTok
                    user.
                  </li>
                  <li>
                    We do not access profiles, followers, comments, likes, or
                    analytics belonging to other TikTok accounts.
                  </li>
                  <li>
                    We do not collect video content, captions, or metadata
                    beyond the videos we ourselves upload.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  3. How We Use This Data
                </h2>
                <p>
                  The OAuth tokens are used solely to authenticate our tool
                  with TikTok's API so it can upload our own product videos
                  to our own account's drafts. Tokens are never used for any
                  other purpose, and are never sold, shared, rented, or
                  transferred to any third party.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  4. Storage, Security & Retention
                </h2>
                <p>
                  Tokens are stored encrypted in our private infrastructure
                  and are accessible only to authorized members of our team.
                  We retain a token for as long as it remains valid and the
                  automation is in active use. If the automation is
                  discontinued, or if access is revoked, we delete the
                  associated tokens from our systems.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  5. Revoking Access
                </h2>
                <p>
                  Our company TikTok account owner can revoke this
                  integration's access at any time from TikTok's account
                  settings (Settings and Privacy → Security → Manage
                  Connected Apps, or the equivalent setting in the TikTok
                  app). Revoking access immediately invalidates the tokens we
                  hold.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  6. Requesting Deletion
                </h2>
                <p>
                  To request deletion of any data we hold in connection with
                  this integration, email us at{" "}
                  <a
                    href="mailto:office@elmueizfactory.com"
                    className="text-primary hover:underline"
                  >
                    office@elmueizfactory.com
                  </a>{" "}
                  and we will delete the relevant tokens from our systems.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  7. Website Contact Form
                </h2>
                <p>
                  Separately from the TikTok integration, our website
                  includes a contact form where visitors may voluntarily
                  submit their name, email address, company name, phone
                  number, and message. We use this information only to
                  respond to inquiries and do not sell or share it with third
                  parties.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  8. Changes to This Policy
                </h2>
                <p>
                  If we make material changes to this policy, we will update
                  the "Last updated" date above.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  9. Contact Us
                </h2>
                <p>
                  El Mueiz Factory, Atbara Industrial Area, Sudan.
                  Email:{" "}
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

import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: '--font-cairo'
});

export const metadata: Metadata = {
  title: 'El Mueiz Factory | PP Rope & PVC Shoes Manufacturer',
  description: 'Leading manufacturer of high-quality PP rope and PVC shoes. Trusted by businesses worldwide for durable, reliable products.',
  keywords: ['PP rope', 'PVC shoes', 'manufacturing', 'factory', 'industrial rope', 'footwear'],
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  openGraph: {
    title: 'El Mueiz Factory | PP Rope & PVC Shoes Manufacturer',
    description: 'Leading manufacturer of high-quality PP rope and PVC shoes.',
    url: 'https://www.elmueizfactory.com',
    siteName: 'El Mueiz Factory',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${spaceGrotesk.variable} ${cairo.variable} bg-background`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

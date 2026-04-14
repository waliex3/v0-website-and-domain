import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'El Mueiz Factory | PP Rope & PVC Shoes Manufacturer',
  description: 'Leading manufacturer of high-quality PP rope and PVC shoes. Trusted by businesses worldwide for durable, reliable products.',
  keywords: ['PP rope', 'PVC shoes', 'manufacturing', 'factory', 'industrial rope', 'footwear'],
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

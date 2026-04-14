import Link from "next/link"
import Image from "next/image"

const navigation = {
  main: [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ],
  products: [
    { name: "PP Rope (BAYAN)", href: "#products" },
    { name: "PVC Shoes", href: "#products" },
    { name: "Custom Orders", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#1a365d] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Profile-2CdfracH3QZMn56l7DE39HSeGZ4qFz.jpg"
                alt="El Mueiz Factory Logo"
                width={80}
                height={80}
                className="h-16 w-auto rounded"
              />
            </Link>
            <p className="mt-4 text-white/70 leading-relaxed max-w-sm">
              Leading manufacturer of high-quality PP rope (BAYAN brand) and PVC shoes, serving customers across Sudan since 1989.
            </p>
            <p className="mt-2 text-white/60 text-sm" dir="rtl">
              مصنع المعز للبلاستيك - رائد صناعة البلاستيك منذ عام 1989
            </p>
            <div className="mt-4 text-sm text-white/60">
              <p>Atbara Industrial Area, Sudan</p>
              <p className="mt-1">Tel: 0912330434, 0912503935</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              {new Date().getFullYear()} El Mueiz Factory. All rights reserved.
            </p>
            <p className="text-sm text-white/60">
              <Link href="https://www.elmueizfactory.com" className="hover:text-white transition-colors">
                www.elmueizfactory.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

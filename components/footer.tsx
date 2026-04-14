import Link from "next/link"

const navigation = {
  main: [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ],
  products: [
    { name: "PP Rope", href: "#products" },
    { name: "PVC Shoes", href: "#products" },
    { name: "Custom Orders", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight">
                El Mueiz<span className="text-primary">Factory</span>
              </span>
            </Link>
            <p className="mt-4 text-background/70 leading-relaxed max-w-sm">
              Leading manufacturer of high-quality PP rope and PVC shoes, serving customers worldwide with reliable products and exceptional service.
            </p>
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
                    className="text-background/70 hover:text-background transition-colors"
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
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              {new Date().getFullYear()} El Mueiz Factory. All rights reserved.
            </p>
            <p className="text-sm text-background/60">
              <Link href="https://www.elmueizfactory.com" className="hover:text-background transition-colors">
                www.elmueizfactory.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

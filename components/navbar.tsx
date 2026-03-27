"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X, ArrowRight, BookOpen, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

import { ComingSoonModal } from "@/components/coming-soon-modal"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Brands", href: "#", isDropdown: true },
  { name: "Our Team", href: "/team" },
  { name: "Contact", href: "/contact" },
]

const brandItems = [
  { name: "Siemens", href: "/siemens-industrial-products-india", logo: "/images/siemens-logo.png" },
  { name: "Ventil", href: "/ventil-equipment-india", logo: "/images/ventil-logo.svg" },
  { name: "Spitmaan", href: "/spitmaan-solutions-india", logo: "/images/spitmaan-logo.png" },
  { name: "RKS", href: "/rks-industrial-solutions", logo: "/images/rks-logo.png" },
  { name: "Scientific Devices", href: "/scientific-devices-india", logo: "/images/scientific-devices-logo.png" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [brandsOpen, setBrandsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-xl shadow-lg border-b border-border" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-32">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/kemplast-logo-updated.png"
                alt="Kemplast Process Solutions"
                width={400}
                height={112}
                className="h-28 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                if (item.isDropdown) {
                  return (
                    <div 
                      key={item.name} 
                      className="relative group px-4 py-2"
                      onMouseEnter={() => setBrandsOpen(true)}
                      onMouseLeave={() => setBrandsOpen(false)}
                    >
                      <button className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors whitespace-nowrap">
                        {item.name}
                        <ChevronDown className="w-3 h-3" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 w-56 pt-2 transition-all duration-200 origin-top ${brandsOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                        <div className="glass bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-xl overflow-hidden p-1">
                          {brandItems.map((brand) => (
                            <Link
                              key={brand.name}
                              href={brand.href}
                              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${pathname === brand.href ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted hover:text-primary"}`}
                            >
                              <div className="w-8 h-8 rounded-md bg-white/50 flex items-center justify-center p-1 overflow-hidden shrink-0">
                                <Image 
                                  src={brand.logo} 
                                  alt={brand.name} 
                                  width={32} 
                                  height={32} 
                                  className="object-contain w-full h-full"
                                />
                              </div>
                              {brand.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                }

                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors group whitespace-nowrap ${isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
                      }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-primary transition-transform origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`} />
                  </Link>
                )
              })}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 text-foreground/70 hover:text-foreground"
                onClick={() => setModalOpen(true)}
              >
                <BookOpen className="w-4 h-4" />
                Catalog
              </Button>
              <Link href="/contact">
                <Button
                  size="sm"
                  className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border max-h-[calc(100vh-8rem)] overflow-y-auto">
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item) => {
                if (item.isDropdown) {
                  return (
                    <div key={item.name} className="px-4 py-2">
                      <div className="text-sm font-semibold text-muted-foreground mb-2">{item.name}</div>
                      <div className="pl-4 space-y-1 border-l-2 border-border/50 ml-2">
                          {brandItems.map((brand) => (
                            <Link
                              key={brand.name}
                              href={brand.href}
                              onClick={() => setIsOpen(false)}
                              className={`flex items-center gap-3 py-2 text-sm transition-colors ${pathname === brand.href ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
                            >
                              <div className="w-6 h-6 rounded-md bg-white/50 flex items-center justify-center p-0.5 overflow-hidden shrink-0">
                                <Image 
                                  src={brand.logo} 
                                  alt={brand.name} 
                                  width={24} 
                                  height={24} 
                                  className="object-contain w-full h-full"
                                />
                              </div>
                              {brand.name}
                            </Link>
                          ))}
                      </div>
                    </div>
                  )
                }

                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive
                        ? "text-primary bg-primary/10 border-l-2 border-primary"
                        : "text-foreground hover:text-primary hover:bg-muted"
                      }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <div className="pt-4 flex flex-col gap-2 border-t border-border mt-4">
                <Button
                  variant="outline"
                  className="w-full justify-center gap-2 bg-transparent"
                  onClick={() => {
                    setIsOpen(false)
                    setModalOpen(true)
                  }}
                >
                  <BookOpen className="w-4 h-4" />
                  Catalog
                </Button>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full">
                  <Button className="w-full justify-center gap-2 bg-primary">
                    Get a Quote
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      <ComingSoonModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

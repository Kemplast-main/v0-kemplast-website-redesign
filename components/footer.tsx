import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Orange accent bar */}
      <div className="h-1 bg-primary" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="xl:col-span-2 pr-4">
            <Image
              src="/images/kemplast-logo-updated.png"
              alt="Kemplast Process Solutions"
              width={400}
              height={100}
              className="w-full max-w-[280px] h-auto mb-6"
            />
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Your trusted partner in process instrumentation, packing, insulation, and valve products since 1986. Providing world-class process solutions across India.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>4-3-83 to 85, Laxmana Business Ctr, Hill St, Ranigunj, Secunderabad – 500003</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+914027711000">040-27711000</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:sales@kemplast.in">sales@kemplast.in</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Mon - Sat: 9AM - 6PM</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Brands */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Brands</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/siemens-industrial-products-india" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Siemens
                </Link>
              </li>
              <li>
                <Link href="/ventil-equipment-india" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Ventil
                </Link>
              </li>
              <li>
                <Link href="/spitmaan-solutions-india" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Spitmaan
                </Link>
              </li>
              <li>
                <Link href="/rks-industrial-solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  RKS
                </Link>
              </li>
              <li>
                <Link href="/scientific-devices-india" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Scientific Devices
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Top Categories</h3>
            <ul className="space-y-3">
              {["Instrumentation", "Valve Testing", "Gland Packings", "Industrial Valves", "Laboratory Devices"].map((item) => (
                <li key={item}>
                  <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Location Maps */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm flex flex-col h-full bg-card">
            <div className="p-3 bg-secondary/50 border-b border-border text-sm font-semibold text-foreground text-center">
              Secunderabad Office (Headquarters)
            </div>
            <iframe 
              src="https://www.google.com/maps?q=Kemplast+Process+Solutions&output=embed"
              width="100%" 
              height="220" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy"
              className="flex-grow"
            >
            </iframe>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm flex flex-col h-full bg-card">
            <div className="p-3 bg-secondary/50 border-b border-border text-sm font-semibold text-foreground text-center">
              Bangalore Office
            </div>
            <iframe 
              src="https://www.google.com/maps?q=1st+cross,+2nd+Main+Rd,+NGEF+Layout,+Sanjayanagara,+Bengaluru,+Karnataka+560094,+India&output=embed"
              width="100%" 
              height="220" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy"
              className="flex-grow"
            >
            </iframe>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Kemplast Process Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

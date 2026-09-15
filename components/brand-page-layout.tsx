import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { InquiryForm } from "@/components/inquiry-form"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"

interface BrandPageLayoutProps {
  brandName: string
  title: string
  description: string
  heroImage: string
  products: { name: string; description: string; image?: string }[]
  content: React.ReactNode
}

export function BrandPageLayout({
  brandName,
  title,
  description,
  heroImage,
  products,
  content
}: BrandPageLayoutProps) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": "Kemplast Process Solutions",
      "url": "https://kemplast.in",
      "logo": "https://kemplast.in/images/kemplast-logo-updated.png"
    },
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": `Kemplast Process Solutions - Authorized ${brandName} Distributor in India`,
      "description": `Authorized top distributor, dealer, and supplier of ${brandName} products in India.`,
      "image": "https://kemplast.in/images/kemplast-logo-updated.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4-3-83 to 85, Laxmana Business Ctr, Hill St, Ranigunj",
        "addressLocality": "Secunderabad",
        "addressRegion": "Telangana",
        "postalCode": "500003",
        "addressCountry": "IN"
      },
      "telephone": ["+91-40-27711000", "+91-89777-54033"],
      "areaServed": "India",
      "brand": {
        "@type": "Brand",
        "name": brandName,
        "logo": `https://kemplast.in${heroImage}`
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Navbar />
      <main className="min-h-screen pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#inquiry"
                className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 h-12 px-8"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-primary/10 z-10" />
            <Image
              src={heroImage}
              alt={`${brandName} products by Kemplast India`}
              fill
              className="object-contain p-8 transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-2">
            <div className="text-lg space-y-6 text-muted-foreground [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mb-6 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-foreground [&_h3]:mt-10 [&_h3]:mb-4 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:leading-relaxed [&_strong]:text-foreground">
              {content}
            </div>
          </div>
          
          <div className="lg:col-span-1" id="inquiry">
            <div className="glass text-card-foreground rounded-2xl border border-white/10 shadow-xl p-8 relative overflow-hidden sticky top-36">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
              <h3 className="text-2xl font-bold mb-4">Request a Quote for {brandName}</h3>
              <p className="text-muted-foreground mb-6">
                Looking for {brandName} solutions in India? Fill out the form below and our experts will get back to you.
              </p>
              <InquiryForm defaultSubject={`${brandName} Inquiry from Website`} />
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="glass rounded-3xl border border-primary/20 shadow-2xl p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-card/80 to-primary/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
            <h2 className="text-3xl font-bold mb-8 text-center tracking-tight">Why Choose Kemplast for {brandName}?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Authorized Distributor in India",
                "100% Genuine Products",
                "Expert Technical Support",
                "Fast Delivery Pan India",
                "Competitive Pricing",
                "Decades of Industry Experience"
              ].map((item, i) => (
                <div key={i} className="flex items-center text-lg text-foreground transition-all hover:text-primary font-medium p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-12 mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Key {brandName} Products We Supply</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              As a trusted supplier in India, we offer a comprehensive range of {brandName} equipment and solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="h-full">
                <ProductCard
                  index={index}
                  name={product.name}
                  category={brandName}
                  description={product.description}
                  image={product.image || "/placeholder.svg"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}

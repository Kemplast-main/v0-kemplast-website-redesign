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
  return (
    <>
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
          <div className="lg:col-span-2 flex flex-col gap-12">
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary">
              {content}
            </div>
            
            <div className="glass rounded-2xl border border-white/10 shadow-xl p-8 bg-card/50">
              <h4 className="text-xl font-bold mb-6">Why Choose Kemplast?</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Authorized Distributor",
                  "100% Genuine Products",
                  "Expert Technical Support",
                  "Fast Delivery Pan India",
                  "Competitive Pricing"
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-muted-foreground transition-all hover:text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
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

        <div className="space-y-12 mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Key {brandName} Products We Supply</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              As a trusted supplier in India, we offer a comprehensive range of {brandName} equipment and solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

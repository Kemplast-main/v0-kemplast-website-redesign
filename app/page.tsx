import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Hero3D } from "@/components/hero-3d"
import { AboutSection } from "@/components/about-section"
import { ProductExplorer } from "@/components/product-explorer"
import { ServicesSection } from "@/components/services-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"
import { IpecFlyerModal } from "@/components/ipec-flyer-modal"

export const metadata: Metadata = {
  title: "Kemplast Process Solutions | #1 Authorized Dealer for Siemens, WIKA, RKS, Spitmaan, Ventil & Scientific Devices in India",
  description:
    "Kemplast Process Solutions — India's most trusted authorized dealer & distributor for Siemens, WIKA, RKS, Spitmaan, Ventil & Scientific Devices since 1986. We supply pressure gauges, PLCs, temperature sensors, flow meters, industrial valves, packing & insulation equipment across Hyderabad, Mumbai, Bangalore, Chennai, Delhi, Pune & pan-India.",
  alternates: { canonical: "https://kemplast.in" },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://kemplast.in/#localbusiness",
  name: "Kemplast Process Solutions",
  image: "https://kemplast.in/images/kemplast-logo-updated.png",
  url: "https://kemplast.in",
  telephone: "+91-40-27711000",
  email: "sales@kemplast.in",
  priceRange: "$$",
  description:
    "South India's most trusted authorized dealer for Siemens, WIKA, RKS, Spitmaan, Ventil & Scientific Devices. Supplying industrial instrumentation, pressure gauges, PLCs, valves, packing and insulation equipment to Hyderabad, Telangana and South India since 1986.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4-3-83 to 85, Laxmana Business Ctr, Hill St, Ranigunj",
    addressLocality: "Secunderabad",
    addressRegion: "Telangana",
    postalCode: "500003",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.4399,
    longitude: 78.4983,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "13:00",
    },
  ],
  areaServed: [
    "India",
    "Hyderabad",
    "Secunderabad",
    "Telangana",
    "Andhra Pradesh",
    "Mumbai",
    "Maharashtra",
    "Bangalore",
    "Karnataka",
    "Chennai",
    "Tamil Nadu",
    "Delhi",
    "Pune",
    "Kolkata",
    "South India",
    "North India",
    "West India",
  ],
  knowsAbout: [
    "Siemens industrial products",
    "WIKA pressure instruments",
    "RKS industrial valves",
    "Spitmaan packing solutions",
    "Ventil process equipment",
    "Scientific Devices instrumentation",
    "Process instrumentation",
    "Industrial automation",
    "Pressure transmitters",
    "Flow meters",
    "Temperature sensors",
    "Level instruments",
    "PLCs",
    "Gland packing",
    "PTFE products",
    "Thermal insulation",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "120",
    bestRating: "5",
    worstRating: "1",
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main className="min-h-screen bg-background relative overflow-x-hidden">
        <Navbar />
        <Hero3D />
        <AboutSection />
        <ProductExplorer />
        <ServicesSection />
        <PartnersSection />
        <Footer />
        <IpecFlyerModal />
      </main>
    </>
  )
}

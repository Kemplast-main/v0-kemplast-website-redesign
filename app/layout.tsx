import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"

import { GlobalBackground } from "@/components/global-background"
import { ScrollProgress } from "@/components/scroll-progress"
import { Toaster } from "sonner"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://kemplast.in"),
  title: {
    default: "Kemplast Process Solutions | #1 Authorized Dealer for Siemens, WIKA, RKS, Spitmaan, Ventil & Scientific Devices in India",
    template: "%s | Kemplast Process Solutions",
  },
  description:
    "Kemplast Process Solutions — India's most trusted authorized dealer & distributor for Siemens, WIKA, RKS, Spitmaan, Ventil & Scientific Devices industrial instruments. Supplying pressure gauges, temperature sensors, flow meters, PLCs, valves, packing & insulation products across Hyderabad, Mumbai, Delhi, Bangalore, Chennai, Pune, Kolkata & pan-India since 1986.",
  keywords: [
    // Brand + Dealer — Pan India
    "Siemens authorized dealer India",
    "Siemens authorized distributor India",
    "Siemens authorized dealer Hyderabad",
    "Siemens authorized dealer Mumbai",
    "Siemens authorized dealer Bangalore",
    "Siemens authorized dealer Chennai",
    "Siemens authorized dealer Delhi",
    "Siemens authorized dealer Pune",
    "WIKA instruments dealer India",
    "WIKA authorized distributor India",
    "WIKA pressure gauge dealer India",
    "WIKA instruments dealer Hyderabad",
    "WIKA instruments dealer Mumbai",
    "WIKA instruments dealer Bangalore",
    "RKS valves dealer India",
    "RKS authorized distributor India",
    "RKS valves dealer Hyderabad",
    "Spitmaan packing dealer India",
    "Spitmaan authorized distributor India",
    "Spitmaan products dealer Hyderabad",
    "Ventil equipment dealer India",
    "Ventil authorized supplier India",
    "Scientific Devices authorized dealer India",
    "Scientific Devices distributor India",
    // Product category — Pan India
    "industrial instrumentation dealer India",
    "process instrumentation supplier India",
    "pressure gauges dealer India",
    "pressure transmitter supplier India",
    "Siemens PLC dealer India",
    "Siemens SITRANS dealer India",
    "industrial valves supplier India",
    "temperature sensors dealer India",
    "flow meters supplier India",
    "level instruments dealer India",
    "industrial packing materials India",
    "gland packing supplier India",
    "PTFE packing dealer India",
    "thermal insulation supplier India",
    "ceramic fiber insulation India",
    "calibration equipment India",
    "valve positioner supplier India",
    "differential pressure transmitter India",
    // Local SEO — Hyderabad
    "best industrial equipment supplier Hyderabad",
    "industrial instrumentation company Secunderabad",
    "process equipment dealer Telangana",
    "industrial automation supplier Hyderabad",
    "instrumentation dealer Secunderabad",
    // Local SEO — Other cities
    "industrial instruments dealer Mumbai",
    "process instrumentation supplier Bangalore",
    "industrial equipment dealer Chennai",
    "instrumentation company Pune",
    "industrial supplier Delhi NCR",
    // Brand name
    "Kemplast Process Solutions",
    "Kemplast Hyderabad",
    "Kemplast authorized dealer",
    "Kemplast industrial instruments",
  ],
  authors: [{ name: "Kemplast Process Solutions" }],
  creator: "Kemplast Process Solutions",
  publisher: "Kemplast Process Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kemplast.in",
    siteName: "Kemplast Process Solutions",
    title: "Kemplast Process Solutions | #1 Authorized Dealer for Siemens, WIKA, RKS & More in India",
    description:
      "India's most trusted authorized distributor for Siemens, WIKA, RKS, Spitmaan, Ventil & Scientific Devices. Precision instrumentation, valves, PLCs & industrial equipment — serving Hyderabad & pan-India since 1986.",
    images: [{ url: "/images/kemplast-logo-updated.png", width: 400, height: 112, alt: "Kemplast Process Solutions – Authorized Dealer India" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kemplast Process Solutions | #1 Authorized Dealer – Siemens, WIKA, RKS in India",
    description:
      "India's leading authorized dealer for Siemens, WIKA, RKS, Spitmaan, Ventil & Scientific Devices industrial instruments. Serving pan-India since 1986.",
    images: ["/images/kemplast-logo-updated.png"],
  },
  alternates: { canonical: "https://kemplast.in" },
  verification: {
    google: "xWDb8MihZE6hT8QVfHxE1dT3EYC8COtG5RMeADbEh4s",
  },
  icons: {
    icon: "/kemplast-favicon.png",
    shortcut: "/kemplast-favicon.png",
    apple: "/kemplast-favicon.png",
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://kemplast.in/#website",
  name: "Kemplast Process Solutions",
  url: "https://kemplast.in",
  description: "India's most trusted authorized dealer for Siemens, WIKA, RKS, Spitmaan, Ventil & Scientific Devices industrial instruments.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://kemplast.in/products?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@id": "https://kemplast.in/#organization",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://kemplast.in/#organization",
  name: "Kemplast Process Solutions",
  alternateName: ["Kemplast", "Kemplast India"],
  url: "https://kemplast.in",
  logo: {
    "@type": "ImageObject",
    url: "https://kemplast.in/images/kemplast-logo-updated.png",
    width: 400,
    height: 112,
  },
  foundingDate: "1986",
  description:
    "India's most trusted authorized dealer and distributor for Siemens, WIKA, RKS, Spitmaan, Ventil & Scientific Devices industrial instruments. Specializing in process instrumentation, pressure gauges, PLCs, temperature sensors, flow meters, valves, packing and insulation products. Serving Hyderabad, Mumbai, Bangalore, Chennai, Delhi, Pune and pan-India since 1986.",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "State", name: "Telangana" },
    { "@type": "State", name: "Andhra Pradesh" },
    { "@type": "State", name: "Karnataka" },
    { "@type": "State", name: "Tamil Nadu" },
    { "@type": "State", name: "Kerala" },
    { "@type": "State", name: "Maharashtra" },
    { "@type": "State", name: "Gujarat" },
    { "@type": "State", name: "West Bengal" },
    { "@type": "State", name: "Delhi" },
    { "@type": "AdministrativeArea", name: "South India" },
    { "@type": "AdministrativeArea", name: "North India" },
    { "@type": "AdministrativeArea", name: "West India" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "4-3-83 to 85, Laxmana Business Ctr, Hill St, Ranigunj",
    addressLocality: "Secunderabad",
    addressRegion: "Telangana",
    postalCode: "500003",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-40-27711000",
      contactType: "sales",
      email: "sales@kemplast.in",
      availableLanguage: ["English", "Hindi", "Telugu"],
      areaServed: "IN",
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-40-27714090",
      contactType: "customer support",
      availableLanguage: ["English", "Hindi", "Telugu"],
      areaServed: "IN",
    }
  ],
  sameAs: [
    "https://www.linkedin.com/company/kemplast",
    "https://www.indiamart.com/kempflon-engineering/profile.html?srsltid=AfmBOorhMck_1YNLlpwLBBu-tYDeAEYctcqCg014e5Niue7emUsn8ZA-",
    "https://www.tradeindia.com/kemplast",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Industrial Instrumentation & Process Equipment",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Siemens PLC & Automation Systems", brand: { "@type": "Brand", name: "Siemens" } } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "WIKA Pressure Gauges & Temperature Instruments", brand: { "@type": "Brand", name: "WIKA" } } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "RKS Industrial Valves & Fittings", brand: { "@type": "Brand", name: "RKS" } } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Spitmaan Packing & Sealing Materials", brand: { "@type": "Brand", name: "Spitmaan" } } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Ventil Process Equipment", brand: { "@type": "Brand", name: "Ventil" } } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Scientific Devices Measurement Instruments", brand: { "@type": "Brand", name: "Scientific Devices" } } },
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <ScrollProgress />
          <GlobalBackground />
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

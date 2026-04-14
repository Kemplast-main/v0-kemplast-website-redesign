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
    default: "Kemplast Process Solutions | #1 Authorized Dealer for Siemens, WIKA, RKS, Spitmaan, Ventil & Scientific Devices in Hyderabad, South India",
    template: "%s | Kemplast Process Solutions – Hyderabad",
  },
  description:
    "Kemplast Process Solutions is South India's most trusted authorized dealer and distributor for Siemens, WIKA, RKS, Spitmaan, Ventil & Scientific Devices industrial instruments. Serving Hyderabad, Telangana & the entire South India region since 1986 with pressure gauges, temperature sensors, flow meters, PLCs, valves, packing & insulation products.",
  keywords: [
    // Brand + dealer keywords
    "Siemens authorized dealer Hyderabad",
    "Siemens authorized distributor South India",
    "WIKA instruments dealer Hyderabad",
    "WIKA authorized distributor India",
    "RKS valves dealer Hyderabad",
    "RKS authorized distributor South India",
    "Spitmaan packing dealer Hyderabad",
    "Spitmaan products South India",
    "Ventil equipment dealer Hyderabad",
    "Scientific Devices authorized dealer Hyderabad",
    "Scientific Devices distributor South India",
    // Product category keywords
    "industrial instrumentation Hyderabad",
    "process instrumentation South India",
    "pressure gauges Hyderabad",
    "WIKA pressure gauges Hyderabad",
    "Siemens PLC dealer Hyderabad",
    "industrial valves supplier Hyderabad",
    "temperature sensors Hyderabad",
    "flow meters South India",
    "level instruments Hyderabad",
    "industrial packing materials Hyderabad",
    "thermal insulation supplier Hyderabad",
    "calibration equipment Hyderabad",
    // Local SEO
    "best industrial equipment supplier Hyderabad",
    "top instrumentation company Secunderabad",
    "process equipment dealer Telangana",
    "industrial automation supplier Hyderabad",
    "Kemplast Process Solutions",
    "Kemplast Hyderabad",
    "Kemplast Secunderabad",
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
    title: "Kemplast Process Solutions | #1 Authorized Dealer for Siemens, WIKA, RKS & More in Hyderabad",
    description:
      "South India's most trusted authorized distributor for Siemens, WIKA, RKS, Spitmaan, Ventil & Scientific Devices. Precision instrumentation, valves, PLCs & industrial equipment — serving Hyderabad & South India since 1986.",
    images: [{ url: "/images/kemplast-logo-updated.png", width: 400, height: 112, alt: "Kemplast Process Solutions – Authorized Dealer Hyderabad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kemplast Process Solutions | #1 Authorized Dealer – Siemens, WIKA, RKS in Hyderabad",
    description:
      "South India's leading authorized dealer for Siemens, WIKA, RKS, Spitmaan, Ventil & Scientific Devices industrial instruments. Based in Hyderabad since 1986.",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kemplast Process Solutions",
  alternateName: "Kemplast",
  url: "https://kemplast.in",
  logo: "https://kemplast.in/images/kemplast-logo-updated.png",
  foundingDate: "1986",
  description:
    "South India's most trusted authorized dealer and distributor for Siemens, WIKA, RKS, Spitmaan, Ventil & Scientific Devices industrial instruments. Specializing in process instrumentation, pressure gauges, PLCs, temperature sensors, flow meters, valves, packing and insulation products. Serving Hyderabad, Secunderabad, Telangana and all of South India since 1986.",
  areaServed: [
    { "@type": "State", name: "Telangana" },
    { "@type": "State", name: "Andhra Pradesh" },
    { "@type": "State", name: "Karnataka" },
    { "@type": "State", name: "Tamil Nadu" },
    { "@type": "State", name: "Kerala" },
    { "@type": "AdministrativeArea", name: "South India" },
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
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Siemens PLC & Automation Systems", brand: "Siemens" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "WIKA Pressure Gauges & Temperature Instruments", brand: "WIKA" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "RKS Industrial Valves & Fittings", brand: "RKS" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Spitmaan Packing & Sealing Materials", brand: "Spitmaan" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Ventil Process Equipment", brand: "Ventil" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Scientific Devices Measurement Instruments", brand: "Scientific Devices" } },
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

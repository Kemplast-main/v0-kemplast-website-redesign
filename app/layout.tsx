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
    default: "Kemplast Process Solutions | Industrial Instrumentation & Equipment Supplier India",
    template: "%s | Kemplast Process Solutions",
  },
  description:
    "Kemplast Process Solutions — authorized supplier of Siemens, Ventil, Spitmaan, RKS & Scientific Devices industrial products in India. Process instrumentation, packing, insulation, and valve equipment since 1986.",
  keywords: [
    "Siemens distributors India",
    "Ventil equipment suppliers India",
    "Spitmaan products India",
    "RKS industrial solutions",
    "Scientific devices suppliers India",
    "industrial automation suppliers India",
    "valve testing equipment India",
    "calibration equipment providers India",
    "industrial instrumentation Hyderabad",
    "process instrumentation South India",
    "Kemplast Process Solutions",
  ],
  authors: [{ name: "Kemplast Process Solutions" }],
  creator: "Kemplast Process Solutions",
  publisher: "Kemplast Process Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kemplast.in",
    siteName: "Kemplast Process Solutions",
    title: "Kemplast Process Solutions | Industrial Equipment Supplier India",
    description:
      "Authorized supplier of Siemens, Ventil, Spitmaan, RKS & Scientific Devices industrial products in India. Serving process industries since 1986.",
    images: [{ url: "/images/kemplast-logo-updated.png", width: 400, height: 112, alt: "Kemplast Process Solutions Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kemplast Process Solutions | Industrial Equipment Supplier India",
    description:
      "Authorized supplier of Siemens, Ventil, Spitmaan, RKS & Scientific Devices industrial products in India.",
    images: ["/images/kemplast-logo-updated.png"],
  },
  alternates: { canonical: "https://kemplast.in" },
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
  url: "https://kemplast.in",
  logo: "https://kemplast.in/images/kemplast-logo-updated.png",
  foundingDate: "1986",
  description:
    "Authorized supplier of Siemens, Ventil, Spitmaan, RKS & Scientific Devices industrial products in India. Specializing in process instrumentation, packing, insulation, and valve products.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4-3-83 to 85, Laxmana Business Ctr, Hill St, Ranigunj",
    addressLocality: "Secunderabad",
    addressRegion: "Telangana",
    postalCode: "500003",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-40-27711000",
    contactType: "sales",
    email: "sales@kemplast.in",
    availableLanguage: ["English", "Hindi", "Telugu"],
  },
  sameAs: [
    "https://www.linkedin.com/company/kemplast",
    "https://www.indiamart.com/kemplast",
    "https://www.tradeindia.com/kemplast",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className="font-sans antialiased">
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

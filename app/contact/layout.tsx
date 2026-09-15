import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Kemplast Process Solutions | Authorized Dealer India | Hyderabad & Bangalore",
  description:
    "Contact Kemplast Process Solutions — India's authorized dealer for Siemens, WIKA, RKS, Spitmaan, Ventil & Scientific Devices. Offices in Secunderabad (Hyderabad) & Bangalore. Call: 040-27711000 | +91 89777 54033 | Email: sales@kemplast.in | Get a quote for industrial instruments across India.",
  keywords: [
    "contact Kemplast",
    "Kemplast address Hyderabad",
    "Kemplast phone number",
    "Kemplast Secunderabad office",
    "Kemplast Bangalore office",
    "industrial instruments dealer contact India",
    "Siemens dealer contact Hyderabad",
    "WIKA dealer contact India",
    "get quote industrial instruments India",
    "Kemplast Process Solutions contact",
    "sales@kemplast.in",
    "040-27711000",
  ],
  alternates: { canonical: "https://kemplast.in/contact" },
  openGraph: {
    title: "Contact Kemplast | Authorized Industrial Instruments Dealer India",
    description: "Reach Kemplast's Hyderabad & Bangalore offices. Authorized dealer for Siemens, WIKA, RKS, Spitmaan, Ventil & Scientific Devices. Get a quote today.",
    url: "https://kemplast.in/contact",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kemplast.in" },
    { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://kemplast.in/contact" },
  ],
}

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Kemplast Process Solutions",
  url: "https://kemplast.in/contact",
  description: "Contact page for Kemplast Process Solutions — authorized dealer for Siemens, WIKA, RKS, Spitmaan, Ventil & Scientific Devices in India.",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://kemplast.in/#organization",
    name: "Kemplast Process Solutions",
    address: [
      {
        "@type": "PostalAddress",
        name: "Secunderabad Office",
        streetAddress: "4-3-83 to 85, Laxmana Business Ctr, Hill St, Ranigunj",
        addressLocality: "Secunderabad",
        addressRegion: "Telangana",
        postalCode: "500003",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        name: "Bangalore Office",
        streetAddress: "No: 41, 15th Cross, MTS Layout, Kengeri Satellite Town",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        postalCode: "560060",
        addressCountry: "IN",
      },
    ],
    telephone: ["+91-40-27711000", "+91-40-27714090", "+91-89777-54033"],
    email: "sales@kemplast.in",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      {children}
    </>
  )
}

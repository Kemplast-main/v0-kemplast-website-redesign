import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industrial Automation Services India | PLC, DCS, SCADA, IoT | Kemplast",
  description:
    "Kemplast delivers end-to-end industrial automation solutions across India — PLC/DCS programming, SCADA design, Industrial IoT, process optimization and turnkey automation projects. Serving Hyderabad, Mumbai, Bangalore, Chennai, Pune & pan-India. Contact: +91-40-27711000 / +91 89777 54033.",
  keywords: [
    "industrial automation company India",
    "PLC programming services India",
    "DCS programming India",
    "SCADA system design India",
    "industrial IoT solutions India",
    "process automation services India",
    "turnkey automation projects India",
    "Siemens PLC programming Hyderabad",
    "automation integrator Hyderabad",
    "automation company Secunderabad",
    "plant automation India",
    "control system integrator India",
    "industrial automation Bangalore",
    "automation services Mumbai",
    "Kemplast automation",
  ],
  alternates: { canonical: "https://kemplast.in/services/automation" },
  openGraph: {
    title: "Industrial Automation Services India | PLC, SCADA, IoT | Kemplast",
    description: "End-to-end industrial automation: PLC/DCS programming, SCADA, Industrial IoT and turnkey projects. Pan-India delivery by Kemplast.",
    url: "https://kemplast.in/services/automation",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kemplast.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://kemplast.in/services" },
    { "@type": "ListItem", position: 3, name: "Automation Projects", item: "https://kemplast.in/services/automation" },
  ],
}

export default function AutomationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}

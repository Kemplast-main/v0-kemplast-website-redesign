import type { Metadata } from "next"
import { BrandPageLayout } from "@/components/brand-page-layout"

export const metadata: Metadata = {
  title: "Siemens Authorized Distributor & Dealer in India | SITRANS, PLC, Instrumentation | Kemplast",
  description:
    "Kemplast is India's top Siemens authorized distributor & dealer. Buy genuine Siemens SITRANS pressure transmitters, temperature sensors, flow meters, level instruments, SIPART positioners & PLCs. Serving Hyderabad, Mumbai, Bangalore, Chennai, Delhi, Pune & pan-India. Call +91-40-27711000 / +91 89777 54033.",
  keywords: [
    "Siemens authorized dealer India",
    "Siemens authorized distributor India",
    "Siemens SITRANS dealer India",
    "Siemens SITRANS P pressure transmitter India",
    "Siemens SITRANS T temperature transmitter India",
    "Siemens SITRANS F flow meter India",
    "Siemens SITRANS L level instrument India",
    "SIPART PS2 positioner dealer India",
    "Siemens PLC dealer India",
    "Siemens S7 1200 dealer India",
    "Siemens S7 1500 dealer India",
    "Siemens instrumentation dealer Hyderabad",
    "Siemens distributor Bangalore",
    "Siemens dealer Mumbai",
    "Siemens instruments Chennai",
    "Siemens industrial products Pune",
    "buy Siemens instruments India",
    "genuine Siemens products India",
  ],
  alternates: {
    canonical: "https://kemplast.in/siemens-industrial-products-india",
  },
  openGraph: {
    title: "Siemens Authorized Distributor & Dealer in India | Kemplast",
    description: "Buy genuine Siemens SITRANS instruments, PLCs & positioners from India's trusted authorized dealer — Kemplast Process Solutions. Pan-India supply from Hyderabad.",
    url: "https://kemplast.in/siemens-industrial-products-india",
    images: [{ url: "/images/siemens-logo.png", alt: "Siemens Authorized Dealer India – Kemplast" }],
  },
}

const products = [
  {
    name: "Pressure Measurement",
    description: "SITRANS P transmitters for absolute, gauge, and differential pressure measurement in process industries.",
    image: "/gauge-pressure.png"
  },
  {
    name: "Temperature Measurement",
    description: "SITRANS T products including sensors, transmitters, and complete measuring points for precise temperature control.",
    image: "/images/temp-images/resistance-temperature-detectors.png"
  },
  {
    name: "Flow Measurement",
    description: "SITRANS F flowmeters for measuring liquids, gases, and steam with electromagnetic, Coriolis, and ultrasonic technologies.",
    image: "/images/flow images/ELECTROMAGNETIC FLOWMETER.png"
  },
  {
    name: "Level Measurement",
    description: "SITRANS L solutions covering radar, ultrasonic, capacitance, and hydrostatic level measurement.",
    image: "/images/level images/SITRANS-LR140.png"
  },
  {
    name: "Positioners",
    description: "SIPART PS2 electropneumatic positioners for linear and part-turn actuators with advanced diagnostics.",
    image: "/industrial-valve-positioner.jpg"
  },
  {
    name: "Process Controllers",
    description: "SIPART process controllers for sophisticated control tasks in the various manufacturing applications.",
    image: "/absolute-pressure.png"
  }
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kemplast.in" },
    { "@type": "ListItem", position: 2, name: "Siemens Industrial Products India", item: "https://kemplast.in/siemens-industrial-products-india" },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Kemplast an authorized Siemens dealer in India?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Kemplast Process Solutions is an authorized distributor and dealer for Siemens industrial instrumentation in India, supplying genuine SITRANS and SIPART products with full manufacturer warranty." },
    },
    {
      "@type": "Question",
      name: "Which Siemens products does Kemplast supply?",
      acceptedAnswer: { "@type": "Answer", text: "Kemplast supplies Siemens SITRANS P pressure transmitters, SITRANS T temperature transmitters, SITRANS F flow meters, SITRANS L level instruments, SIPART PS2 positioners, and Siemens PLCs (S7-1200, S7-1500, S7-300, S7-400) across India." },
    },
    {
      "@type": "Question",
      name: "Does Kemplast supply Siemens products across India?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Kemplast ships Siemens instruments and automation products to all major cities including Hyderabad, Mumbai, Bangalore, Chennai, Delhi, Pune, Kolkata, and across India." },
    },
    {
      "@type": "Question",
      name: "How do I buy Siemens SITRANS instruments from Kemplast?",
      acceptedAnswer: { "@type": "Answer", text: "You can contact Kemplast Process Solutions at +91-40-27711000 / +91 89777 54033 or email sales@kemplast.in to get a quote for genuine Siemens SITRANS instruments with delivery across India." },
    },
  ],
}

export default function SiemensPage() {
  const content = (
    <>
      <h2>Top Siemens Authorized Distributor & Dealer in India</h2>
      <p>
        As leading industrial automation suppliers and a top <strong>Siemens authorized distributor in India</strong>, Kemplast brings you the complete range of Siemens process instrumentation. For decades, Siemens has been synonymous with engineering excellence, innovation, and reliability. We ensure that these world-class products reach facilities across India—including major hubs like Hyderabad, Bangalore, Mumbai, and Pune—with the support and technical expertise required for seamless integration.
      </p>

      <h3>Why Siemens?</h3>
      <p>
        Siemens instruments are designed to maximize plant efficiency, ensure safety, and optimize resource usage. Whether you are dealing with aggressive chemicals, extreme temperatures, or high-pressure environments, Siemens provides rugged and dependable solutions. 
      </p>
      <ul>
        <li>Advanced diagnostic capabilities for predictive maintenance</li>
        <li>High accuracy and long-term stability</li>
        <li>Seamless integration with existing control systems (Profibus, PROFINET, HART)</li>
        <li>Globally certified for hazardous and safety-critical applications</li>
      </ul>

      <h3>Applications Across Industries</h3>
      <p>
        The versatility of Siemens products makes them suitable for a wide array of sectors. We regularly supply solutions to the chemical and petrochemical, water and wastewater, food and beverage, pharmaceutical, and power generation industries across India.
      </p>

      <h3>Our Value Addition</h3>
      <p>
        At Kemplast, we don't just sell products; we offer process solutions. Our technical team assists with product selection, ensuring you get the right instrument for your specific application. We also provide prompt after-sales support and calibration services to keep your operations running smoothly.
      </p>
    </>
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BrandPageLayout
        brandName="Siemens"
        title="Siemens Authorized Distributor in India"
        description="Elevate your process control with world-class Siemens instrumentation. As a top authorized distributor and dealer, we provide genuine Siemens products with expert support across India."
        heroImage="/images/siemens-logo.png"
        products={products}
        content={content}
      />
    </>
  )
}

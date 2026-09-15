import type { Metadata } from "next"
import { BrandPageLayout } from "@/components/brand-page-layout"

export const metadata: Metadata = {
  title: "WIKA Authorized Distributor India | Pressure Gauges, Thermometers, Calibration | Kemplast",
  description:
    "Kemplast is India's top WIKA authorized distributor & dealer. Buy genuine WIKA pressure gauges, bimetallic thermometers, differential pressure instruments, level transmitters & calibration equipment. Supplying Hyderabad, Mumbai, Bangalore, Chennai, Delhi, Pune & pan-India. Call +91-40-27711000 / +91 89777 54033.",
  keywords: [
    "WIKA authorized distributor India",
    "WIKA authorized dealer India",
    "WIKA pressure gauge dealer India",
    "WIKA pressure gauge Hyderabad",
    "WIKA thermometer dealer India",
    "WIKA bimetallic thermometer India",
    "WIKA differential pressure gauge India",
    "WIKA level transmitter India",
    "WIKA calibration equipment India",
    "WIKA instruments dealer Hyderabad",
    "WIKA instruments dealer Mumbai",
    "WIKA instruments dealer Bangalore",
    "WIKA instruments dealer Chennai",
    "buy WIKA pressure gauge India",
    "genuine WIKA instruments India",
    "industrial pressure gauge supplier India",
    "process thermometer dealer India",
  ],
  alternates: {
    canonical: "https://kemplast.in/wika-instruments-india",
  },
  openGraph: {
    title: "WIKA Authorized Distributor India | Pressure Gauges & Instruments | Kemplast",
    description: "Buy genuine WIKA pressure gauges, thermometers & calibration instruments from India's authorized dealer — Kemplast Process Solutions. Pan-India supply.",
    url: "https://kemplast.in/wika-instruments-india",
    images: [{ url: "/industrial-pressure-gauge.jpg", alt: "WIKA Authorized Dealer India – Kemplast" }],
  },
}

const products = [
  {
    name: "Pressure Gauges",
    description: "WIKA Bourdon tube and diaphragm pressure gauges offering precision measurement for industrial process and utility applications.",
    image: "/industrial-pressure-gauge.jpg"
  },
  {
    name: "Temperature Measurement",
    description: "Industrial thermometers, bimetallic thermometers and resistance thermometers (RTDs) for reliable temperature monitoring.",
    image: "/industrial-temperature-sensor-probe.jpg"
  },
  {
    name: "Differential Pressure Instruments",
    description: "High-accuracy differential pressure gauges and transmitters designed for critical flow and filter monitoring applications.",
    image: "/differential-pressure.png"
  },
  {
    name: "Level Instruments",
    description: "WIKA level gauges and transmitters covering magnetic, float, and radar-based technologies for tanks and vessels.",
    image: "/industrial-level-indicator-instrument.jpg"
  },
  {
    name: "Calibration Equipment",
    description: "Portable and bench-top calibrators, pressure pumps, and reference standards for on-site and laboratory use.",
    image: "/industrial-weighing-scale-system.jpg"
  },
  {
    name: "Process Transmitters",
    description: "Smart pressure and temperature transmitters with HART, PROFIBUS, and IO-Link communication for seamless integration.",
    image: "/industrial-manufacturing-plant-machinery-process-e.jpg"
  }
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kemplast.in" },
    { "@type": "ListItem", position: 2, name: "WIKA Instruments India", item: "https://kemplast.in/wika-instruments-india" },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Kemplast an authorized WIKA distributor in India?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Kemplast Process Solutions is an authorized distributor and dealer for WIKA instruments in India, supplying genuine WIKA pressure gauges, thermometers, level instruments, and calibration equipment with full manufacturer warranty." },
    },
    {
      "@type": "Question",
      name: "Which WIKA products does Kemplast supply?",
      acceptedAnswer: { "@type": "Answer", text: "Kemplast supplies WIKA Bourdon tube pressure gauges, diaphragm gauges, bimetallic thermometers, RTD temperature instruments, differential pressure gauges, level transmitters, process transmitters, and calibration equipment across India." },
    },
    {
      "@type": "Question",
      name: "Where can I buy WIKA pressure gauges in India?",
      acceptedAnswer: { "@type": "Answer", text: "You can buy genuine WIKA pressure gauges from Kemplast Process Solutions — an authorized WIKA dealer in India. We supply to Hyderabad, Mumbai, Bangalore, Chennai, Delhi, Pune and all major cities. Contact us at +91-40-27711000 / +91 89777 54033 or sales@kemplast.in." },
    },
  ],
}

export default function WIKAPage() {
  const content = (
    <>
      <h2>Authorized WIKA Distributor &amp; Dealer in India</h2>
      <p>
        Kemplast Process Solutions is a proud <strong>authorized distributor and dealer for WIKA</strong> in India — one of the world&apos;s leading manufacturers of pressure, temperature, level, and flow measurement instruments. With over 75 years of global engineering heritage, WIKA products are synonymous with precision, reliability, and innovation in industrial process measurement.
      </p>

      <h3>World-Class Measurement Technology</h3>
      <p>
        WIKA manufactures an extensive portfolio of instruments covering every measurement parameter in the process industry. From standard mechanical pressure gauges to high-end digital transmitters with smart communication protocols, WIKA delivers solutions that meet the exacting demands of oil &amp; gas, chemical, power, pharmaceutical, and water treatment sectors.
      </p>

      <h3>Why Choose WIKA Products?</h3>
      <ul>
        <li><strong>Global Leader:</strong> Over 10,000 products with a presence in more than 85 countries — a benchmark for measurement technology.</li>
        <li><strong>Precision &amp; Accuracy:</strong> Engineered to highest accuracy classes, ensuring reliable readings even in harsh process conditions.</li>
        <li><strong>Broad Application Range:</strong> Products designed for extreme temperatures, aggressive media, high-vibration environments, and hygienic processes.</li>
        <li><strong>Compliance &amp; Certification:</strong> Instruments compliant with ATEX, IECEx, SIL, and other international safety and quality standards.</li>
      </ul>

      <h3>Our Role as Your Supplier</h3>
      <p>
        At Kemplast, we leverage our deep application expertise and direct partnership with WIKA to recommend the precise instrument for your process. Whether you need standard off-the-shelf gauges or customized transmitters built to your exact specifications, our team ensures you receive genuine WIKA products, backed by full technical support and fast delivery across India.
      </p>
    </>
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BrandPageLayout
        brandName="WIKA"
        title="WIKA Authorized Distributor in India"
        description="Source precision pressure gauges, temperature instruments, level sensors and calibration equipment from WIKA through Kemplast — your trusted authorized distributor in India."
        heroImage="/images/WIKA.webp"
        products={products}
        content={content}
      />
    </>
  )
}

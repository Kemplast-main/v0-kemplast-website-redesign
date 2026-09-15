import type { Metadata } from "next"
import { BrandPageLayout } from "@/components/brand-page-layout"

export const metadata: Metadata = {
  title: "Spitmaan Authorized Distributor India | Gland Packing, PTFE, Graphite Seals | Kemplast",
  description:
    "Kemplast is India's top Spitmaan authorized distributor & dealer. Buy genuine Spitmaan PTFE gland packings, graphite packings, Aramid packings, non-asbestos gasket sheets & ceramic fibre products. Supplying Hyderabad, Mumbai, Bangalore, Chennai, Delhi, Pune & pan-India. Call +91-40-27711000 / +91 89777 54033.",
  keywords: [
    "Spitmaan authorized distributor India",
    "Spitmaan authorized dealer India",
    "Spitmaan gland packing dealer India",
    "Spitmaan PTFE packing dealer India",
    "Spitmaan graphite packing India",
    "gland packing supplier India",
    "PTFE gland packing dealer India",
    "graphite packing supplier India",
    "aramid packing dealer India",
    "non-asbestos gasket sheet India",
    "industrial packing dealer Hyderabad",
    "sealing solutions supplier India",
    "ceramic fibre packing India",
    "pump packing dealer India",
    "valve packing supplier India",
    "buy Spitmaan packing India",
  ],
  alternates: {
    canonical: "https://kemplast.in/spitmaan-solutions-india",
  },
  openGraph: {
    title: "Spitmaan Authorized Distributor India | Gland Packing & Sealing | Kemplast",
    description: "Buy genuine Spitmaan PTFE, graphite & aramid gland packings from India's authorized dealer — Kemplast Process Solutions.",
    url: "https://kemplast.in/spitmaan-solutions-india",
  },
}

const products = [
  {
    name: "PTFE Gland Packings",
    description: "High-performance pure PTFE and graphite-impregnated PTFE packings for excellent chemical resistance.",
    image: "/ptfe-pure-ptfe-packing.webp"
  },
  {
    name: "Graphite Packings",
    description: "Flexible, high-temperature graphite packings ideal for steam valves and high-speed pumps.",
    image: "/expanded-graphite-packing.webp"
  },
  {
    name: "Aramid & Kevlar Packings",
    description: "Extremely durable packings designed to resist abrasive media and high pressure applications.",
    image: "/Aramid-Packing.jpg"
  },
  {
    name: "Non-Asbestos Gasket Sheets",
    description: "Compressed fibre jointing sheets for a wide variety of industrial sealing requirements.",
    image: "/fibre-packing-sheets.png"
  },
  {
    name: "Ceramic Fibre Products",
    description: "Ropes, tapes, and blankets for high-temperature insulation and sealing.",
    image: "/ceramic-fiber-blanket.png"
  },
  {
    name: "Specialty Sealing Solutions",
    description: "Custom-engineered seals and packings for specific, challenging industrial environments.",
    image: "/teflon-diaphragms.webp"
  }
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kemplast.in" },
    { "@type": "ListItem", position: 2, name: "Spitmaan Solutions India", item: "https://kemplast.in/spitmaan-solutions-india" },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Kemplast an authorized Spitmaan distributor in India?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Kemplast Process Solutions is an authorized distributor and dealer for Spitmaan industrial packing and sealing products in India, supplying genuine items with full manufacturer warranty." },
    },
    {
      "@type": "Question",
      name: "What Spitmaan products does Kemplast supply?",
      acceptedAnswer: { "@type": "Answer", text: "Kemplast supplies Spitmaan PTFE gland packings, expanded graphite packings, Aramid/Kevlar packings, non-asbestos compressed fibre jointing sheets, ceramic fibre ropes and tapes, and specialty sealing solutions across India." },
    },
    {
      "@type": "Question",
      name: "Where can I buy Spitmaan gland packing in India?",
      acceptedAnswer: { "@type": "Answer", text: "You can buy genuine Spitmaan gland packings from Kemplast Process Solutions — an authorized Spitmaan dealer in India. We supply to Hyderabad, Mumbai, Bangalore, Chennai, Delhi, Pune and all major cities. Contact: +91-40-27711000 / +91 89777 54033 or sales@kemplast.in." },
    },
  ],
}

export default function SpitmaanPage() {
  const content = (
    <>
      <h2>Top Authorized Spitmaan Distributor & Dealer in India</h2>
      <p>
        For decades, Spitmaan has been a hallmark of quality in the field of industrial fluid sealing and insulation. Kemplast is an <strong>authorized distributor and top supplier</strong> of Spitmaan products in India, ensuring that industries across the country have access to reliable, high-performance sealing solutions that prevent leaks, reduce maintenance, and enhance plant safety.
      </p>

      <h3>Overcoming Sealing Challenges</h3>
      <p>
        Leaks in industrial processes can lead to product loss, environmental hazards, and catastrophic equipment failure. Spitmaan products are engineered to combat the toughest conditions—from corrosive chemicals and high-pressure steam to abrasive slurries and extreme temperatures.
      </p>

      <h3>The Spitmaan Advantage</h3>
      <ul>
        <li><strong>Material Excellence:</strong> Utilizing advanced fibres like pure PTFE, expanded graphite, and Aramid to ensure superior longevity.</li>
        <li><strong>Friction Reduction:</strong> Specially lubricated packings that minimize shaft wear and reduce energy consumption in pumps.</li>
        <li><strong>Environmental Compliance:</strong> A complete range of non-asbestos products to meet modern health, safety, and environmental standards.</li>
        <li><strong>Versatility:</strong> Solutions tailored for rotary pumps, reciprocating equipment, and static valve applications.</li>
      </ul>

      <h3>Kemplast's Commitment to Quality</h3>
      <p>
        Choosing the correct packing or gasket is critical to operational success. Our experienced team at Kemplast assists you in identifying the exact Spitmaan product required for your specific media, temperature, and pressure parameters. We maintain a robust inventory to ensure prompt delivery across India, minimizing your downtime.
      </p>
    </>
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BrandPageLayout
        brandName="Spitmaan"
        title="Spitmaan Authorized Distributor in India"
        description="Prevent leaks and maximize equipment life with Spitmaan's premium gland packings and jointings. Distributed across India by Kemplast, your trusted authorized dealer."
        heroImage="/images/spitmaan-logo.png"
        products={products}
        content={content}
      />
    </>
  )
}

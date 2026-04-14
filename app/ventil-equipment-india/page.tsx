import type { Metadata } from "next"
import { BrandPageLayout } from "@/components/brand-page-layout"

export const metadata: Metadata = {
  title: "Ventil Authorized Distributor India | Valve Testing Equipment & Test Benches | Kemplast",
  description:
    "Kemplast is India's top Ventil authorized distributor & dealer. Buy genuine Ventil valve test benches, safety valve test units, control valve test systems, lapping machines & portable test equipment. Serving Hyderabad, Mumbai, Bangalore, Chennai, Delhi, Pune & pan-India. Call +91-40-27711000.",
  keywords: [
    "Ventil authorized distributor India",
    "Ventil authorized dealer India",
    "Ventil valve testing equipment India",
    "valve test bench dealer India",
    "safety valve test bench India",
    "control valve test unit India",
    "valve testing equipment supplier India",
    "portable valve test equipment India",
    "valve lapping machine dealer India",
    "valve repair equipment India",
    "Ventil equipment Hyderabad",
    "valve testing equipment Mumbai",
    "valve testing machine India",
    "buy Ventil test bench India",
  ],
  alternates: {
    canonical: "https://kemplast.in/ventil-equipment-india",
  },
  openGraph: {
    title: "Ventil Authorized Distributor India | Valve Testing Equipment | Kemplast",
    description: "Buy genuine Ventil valve test benches and testing equipment from India's authorized dealer — Kemplast Process Solutions.",
    url: "https://kemplast.in/ventil-equipment-india",
  },
}

const products = [
  {
    name: "Test Benches for Safety Valves",
    description: "High-performance test units for setting and testing safety relief valves for gas, liquid, and steam applications.",
    image: "/srv.png"
  },
  {
    name: "Control Valve Test Units",
    description: "Advanced systems for testing control and shut-off valves, measuring seat leakage and operational characteristics.",
    image: "/vents.png"
  },
  {
    name: "Portable Test Equipment",
    description: "In-situ testing solutions for safety valves, allowing verification without removing the valve from the line.",
    image: "/sepv.png"
  },
  {
    name: "Valve Lapping & Grinding Machines",
    description: "Precision equipment for repairing and restoring valve seats and discs to optimal condition.",
    image: "/r-disc.png"
  },
  {
    name: "Actuator Test Benches",
    description: "Specialized benches for testing the functionality and torque of pneumatic and electric actuators.",
    image: "/industrial-valve-positioner.jpg"
  },
  {
    name: "Data Acquisition Systems",
    description: "Software and hardware for digitally recording, analyzing, and reporting valve test results.",
    image: "/industrial-process-engineering-factory-machinery.jpg"
  }
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kemplast.in" },
    { "@type": "ListItem", position: 2, name: "Ventil Equipment India", item: "https://kemplast.in/ventil-equipment-india" },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Kemplast an authorized Ventil distributor in India?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Kemplast Process Solutions is an authorized distributor and dealer for Ventil valve testing equipment in India, supplying genuine Ventil test benches with full manufacturer warranty and technical support." },
    },
    {
      "@type": "Question",
      name: "What Ventil products does Kemplast supply?",
      acceptedAnswer: { "@type": "Answer", text: "Kemplast supplies Ventil test benches for safety relief valves, control valve test units, portable in-situ test equipment, valve lapping and grinding machines, actuator test benches, and data acquisition systems across India." },
    },
    {
      "@type": "Question",
      name: "Where can I buy Ventil valve testing equipment in India?",
      acceptedAnswer: { "@type": "Answer", text: "Buy genuine Ventil valve testing equipment from Kemplast Process Solutions — India's authorized Ventil dealer. We supply to all major industrial cities. Contact: +91-40-27711000 or sales@kemplast.in." },
    },
  ],
}

export default function VentilPage() {
  const content = (
    <>
      <h2>Top Authorized Ventil Distributor & Dealer in India</h2>
      <p>
        Kemplast is proud to be a <strong>top authorized distributor and dealer</strong> of Ventil equipment in India. Ventil is globally recognized as the leading manufacturer of high-pressure test equipment for industrial valves. With our extensive network and deep technical knowledge, we bring these cutting-edge valve testing solutions to manufacturers, repair shops, and end-users across the subcontinent, ensuring you get the best authentic equipment and support.
      </p>

      <h3>The Importance of Reliable Valve Testing</h3>
      <p>
        Industrial valves are critical components in process plants, pipelines, and power stations. Their failure can lead to severe safety hazards, environmental incidents, and costly downtime. Ventil test benches ensure that every valve—whether newly manufactured or refurbished—meets strict international standards (API, DIN, ANSI) for shell strength and seat tightness.
      </p>

      <h3>Key Advantages of Ventil Equipment</h3>
      <ul>
        <li><strong>Durability:</strong> Built to withstand rigorous daily use in demanding industrial environments.</li>
        <li><strong>Versatility:</strong> Capable of testing a vast range of valve types, sizes, and pressure classes.</li>
        <li><strong>Safety:</strong> Engineered with operator safety as the foremost priority, featuring robust clamping systems and safety screens.</li>
        <li><strong>Digital Traceability:</strong> Integrated Computer Registration Systems (CRS) for automated reporting and data storage.</li>
      </ul>

      <h3>Why Partner with Kemplast?</h3>
      <p>
        Selecting the right test equipment requires a thorough understanding of your testing volume, valve range, and applicable standards. The experts at Kemplast guide you through this selection process. Furthermore, we support our clients with installation guidance, operator training, and reliable after-sales service, ensuring your Ventil equipment delivers optimal performance year after year.
      </p>
    </>
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BrandPageLayout
        brandName="Ventil"
        title="Ventil Authorized Distributor in India"
        description="Ensure safety and compliance with Ventil's industry-leading valve testing and repair equipment. Expertly supplied and supported by Kemplast, your trusted authorized dealer."
        heroImage="/images/ventil-logo.svg"
        products={products}
        content={content}
      />
    </>
  )
}

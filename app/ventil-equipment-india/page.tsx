import type { Metadata } from "next"
import { BrandPageLayout } from "@/components/brand-page-layout"

export const metadata: Metadata = {
  title: "Ventil Valve Testing Equipment Supplier in India",
  description:
    "Kemplast is an authorized supplier of Ventil valve testing equipment in India. Discover high-quality test benches for safety and control valves.",
  alternates: {
    canonical: "https://kemplast.in/ventil-equipment-india",
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

export default function VentilPage() {
  const content = (
    <>
      <h2>Premier Supplier of Ventil Valve Testing Solutions in India</h2>
      <p>
        Kemplast is proud to be a trusted supplier of Ventil equipment in India. Ventil is globally recognized as the leading manufacturer of high-pressure test equipment for industrial valves. With our extensive network and deep technical knowledge, we bring these cutting-edge valve testing solutions to manufacturers, repair shops, and end-users across the subcontinent.
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
    <BrandPageLayout
      brandName="Ventil"
      title="Ventil Valve Testing Equipment Supplier in India"
      description="Ensure safety and compliance with Ventil's industry-leading valve testing and repair equipment. Expertly supplied and supported by Kemplast."
      heroImage="/images/ventil-logo.svg"
      products={products}
      content={content}
    />
  )
}

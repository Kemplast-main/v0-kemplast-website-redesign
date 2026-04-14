import type { Metadata } from "next"
import { BrandPageLayout } from "@/components/brand-page-layout"

export const metadata: Metadata = {
  title: "WIKA Authorized Distributor | Pressure, Temperature & Level Instruments India",
  description:
    "Kemplast is an authorized distributor of WIKA instruments in India. Source precision pressure gauges, thermometers, level instruments and calibration equipment for industrial applications.",
  alternates: {
    canonical: "https://kemplast.in/wika-instruments-india",
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
    <BrandPageLayout
      brandName="WIKA"
      title="WIKA Authorized Distributor in India"
      description="Source precision pressure gauges, temperature instruments, level sensors and calibration equipment from WIKA through Kemplast — your trusted authorized distributor in India."
      heroImage="/images/WIKA.webp"
      products={products}
      content={content}
    />
  )
}

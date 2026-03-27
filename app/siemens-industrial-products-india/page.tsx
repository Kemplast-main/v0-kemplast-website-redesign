import type { Metadata } from "next"
import { BrandPageLayout } from "@/components/brand-page-layout"

export const metadata: Metadata = {
  title: "Siemens Industrial Products Supplier in India",
  description:
    "Authorized supplier of Siemens industrial automation & instrumentation products in India. Contact Kemplast today for process instrumentation.",
  alternates: {
    canonical: "https://kemplast.in/siemens-industrial-products-india",
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

export default function SiemensPage() {
  const content = (
    <>
      <h2>Your Trusted Partner for Siemens Process Instrumentation in India</h2>
      <p>
        As leading industrial automation suppliers, Kemplast brings you the complete range of Siemens process instrumentation. For decades, Siemens has been synonymous with engineering excellence, innovation, and reliability. We ensure that these world-class products reach facilities across India with the support and technical expertise required for seamless integration.
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
    <BrandPageLayout
      brandName="Siemens"
      title="Siemens Industrial Products Supplier in India"
      description="Elevate your process control with world-class Siemens instrumentation. As an authorized supplier, we provide genuine Siemens products with expert support across India."
      heroImage="/images/siemens-logo.png"
      products={products}
      content={content}
    />
  )
}

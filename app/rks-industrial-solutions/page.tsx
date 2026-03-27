import type { Metadata } from "next"
import { BrandPageLayout } from "@/components/brand-page-layout"

export const metadata: Metadata = {
  title: "RKS Industrial Solutions Supplier in India",
  description:
    "Authorized dealer for RKS industrial solutions in India. Access robust and reliable industrial components and valves with Kemplast.",
  alternates: {
    canonical: "https://kemplast.in/rks-industrial-solutions",
  },
}

const products = [
  {
    name: "Industrial Valves",
    description: "A comprehensive range of gate, globe, check, and ball valves engineered for demanding process applications.",
    image: "/industrial-pressure-gauge.jpg"
  },
  {
    name: "Pipe Fittings",
    description: "High-quality forged and cast pipe fittings available in various materials and specifications.",
    image: "/industrial-instrument-manifold.jpg"
  },
  {
    name: "Flanges",
    description: "Precision-manufactured flanges ensuring secure and leak-proof connections in piping systems.",
    image: "/industrial-flow-meter-device.jpg"
  },
  {
    name: "Strainers",
    description: "Y-type and basket strainers designed to protect valuable downstream equipment from pipeline debris.",
    image: "/industrial-manufacturing-plant-machinery-process-e.jpg"
  },
  {
    name: "Steam Traps",
    description: "Efficient steam traps for effective condensate removal and steam system optimization.",
    image: "/industrial-temperature-sensor-probe.jpg"
  },
  {
    name: "Actuation Systems",
    description: "Pneumatic and electric actuators tailored for reliable automated valve operation.",
    image: "/industrial-valve-positioner.jpg"
  }
]

export default function RKSPage() {
  const content = (
    <>
      <h2>Authorized Dealer for RKS Industrial Solutions in India</h2>
      <p>
        Kemplast partners with RKS to deliver robust and dependable industrial solutions across India. Known for their meticulous manufacturing processes and adherence to stringent quality standards, RKS products form the backbone of reliable piping and structural systems in various industrial sectors.
      </p>

      <h3>Built for Performance</h3>
      <p>
        RKS industrial solutions are designed to withstand the rigors of heavy industry. Whether it's high-pressure fluid transfer, corrosive environments, or critical isolation applications, RKS valves and fittings provide the structural integrity and operational reliability that plant managers demand.
      </p>

      <h3>Why Choose RKS Products?</h3>
      <ul>
        <li><strong>Material Integrity:</strong> Manufactured using high-grade materials to ensure long service life and resistance to wear.</li>
        <li><strong>Precision Engineering:</strong> Exacting tolerances provide leak-tight performance and seamless integration.</li>
        <li><strong>Comprehensive Range:</strong> Providing end-to-end solutions from manual valves to fully automated actuation packages.</li>
        <li><strong>Cost-Effective Reliability:</strong> Delivering premium performance without compromising on project budgets.</li>
      </ul>

      <h3>Our Role as Your Supplier</h3>
      <p>
        At Kemplast, we hold a deep understanding of process piping requirements. We work closely with contractors, EPCs, and end-users to supply the right RKS components on time. Our strong logistics network ensures that whether you are undertaking a routine maintenance shutdown or a new greenfield project, your materials arrive exactly when you need them.
      </p>
    </>
  )

  return (
    <BrandPageLayout
      brandName="RKS"
      title="RKS Industrial Solutions Supplier in India"
      description="Source reliable valves, fittings, and industrial solutions from RKS through Kemplast, your trusted process equipment partner in India."
      heroImage="/images/rks-logo.png"
      products={products}
      content={content}
    />
  )
}

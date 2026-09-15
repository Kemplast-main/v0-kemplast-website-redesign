import type { Metadata } from "next"
import { BrandPageLayout } from "@/components/brand-page-layout"

export const metadata: Metadata = {
  title: "RKS Authorized Distributor India | Industrial Valves, Fittings & Flanges | Kemplast",
  description:
    "Kemplast is India's top RKS authorized distributor & dealer. Buy genuine RKS industrial valves (gate, globe, ball, check), pipe fittings, flanges, strainers & steam traps. Supplying Hyderabad, Mumbai, Bangalore, Chennai, Delhi, Pune & pan-India. Call +91-40-27711000 / +91 89777 54033.",
  keywords: [
    "RKS authorized distributor India",
    "RKS authorized dealer India",
    "RKS industrial valves dealer India",
    "RKS gate valve dealer India",
    "RKS ball valve dealer India",
    "RKS pipe fittings supplier India",
    "RKS flanges dealer India",
    "RKS steam trap dealer India",
    "industrial valves supplier India",
    "industrial valves dealer Hyderabad",
    "pipe fittings supplier India",
    "flanges manufacturer dealer India",
    "steam trap supplier India",
    "strainer supplier India",
    "valve actuator supplier India",
    "buy RKS valves India",
  ],
  alternates: {
    canonical: "https://kemplast.in/rks-industrial-solutions",
  },
  openGraph: {
    title: "RKS Authorized Distributor India | Industrial Valves & Fittings | Kemplast",
    description: "Buy genuine RKS industrial valves, pipe fittings, flanges & steam traps from India's authorized dealer — Kemplast Process Solutions.",
    url: "https://kemplast.in/rks-industrial-solutions",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kemplast.in" },
    { "@type": "ListItem", position: 2, name: "RKS Industrial Solutions India", item: "https://kemplast.in/rks-industrial-solutions" },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Kemplast an authorized RKS distributor in India?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Kemplast Process Solutions is an authorized distributor and dealer for RKS industrial solutions in India, supplying genuine RKS valves, pipe fittings, flanges, strainers, and actuation systems with full manufacturer warranty." },
    },
    {
      "@type": "Question",
      name: "What RKS products does Kemplast supply?",
      acceptedAnswer: { "@type": "Answer", text: "Kemplast supplies RKS gate valves, globe valves, check valves, ball valves, pipe fittings, flanges, Y-type and basket strainers, steam traps, and pneumatic/electric actuation systems across India." },
    },
    {
      "@type": "Question",
      name: "Where can I buy RKS industrial valves in India?",
      acceptedAnswer: { "@type": "Answer", text: "You can buy genuine RKS industrial valves from Kemplast Process Solutions — an authorized RKS dealer in India. We supply to all major cities including Hyderabad, Mumbai, Bangalore, Chennai, Delhi, Pune. Contact us at +91-40-27711000 / +91 89777 54033 or sales@kemplast.in." },
    },
  ],
}

export default function RKSPage() {
  const content = (
    <>
      <h2>Top Authorized RKS Distributor & Dealer in India</h2>
      <p>
        Kemplast proudly serves as a <strong>top authorized distributor and dealer</strong> for RKS, delivering robust and dependable industrial solutions across India. Known for their meticulous manufacturing processes and adherence to stringent quality standards, authentic RKS products form the backbone of reliable piping and structural systems in various industrial sectors across the nation.
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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BrandPageLayout
        brandName="RKS"
        title="RKS Authorized Distributor in India"
        description="Source reliable valves, fittings, and industrial solutions from RKS through Kemplast, your trusted authorized process equipment distributor in India."
        heroImage="/images/rks-logo.png"
        products={products}
        content={content}
      />
    </>
  )
}

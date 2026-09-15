import type { Metadata } from "next"
import { BrandPageLayout } from "@/components/brand-page-layout"

export const metadata: Metadata = {
  title: "Scientific Devices Authorized Distributor India | Precision Balances, Calibration | Kemplast",
  description:
    "Kemplast is India's top Scientific Devices authorized distributor & dealer. Buy genuine precision balances, calibration equipment, material testing instruments, analytical instruments & lab equipment. Serving Hyderabad, Mumbai, Bangalore, Chennai, Delhi, Pune & pan-India. Call +91-40-27711000 / +91 89777 54033.",
  keywords: [
    "Scientific Devices authorized distributor India",
    "Scientific Devices authorized dealer India",
    "precision balance dealer India",
    "analytical instruments dealer India",
    "calibration equipment supplier India",
    "laboratory instruments dealer India",
    "material testing instruments India",
    "QA QC instruments supplier India",
    "scientific instruments dealer Hyderabad",
    "laboratory equipment supplier Mumbai",
    "precision measurement instruments India",
    "industrial calibration equipment India",
    "buy scientific devices India",
    "genuine scientific instruments India",
  ],
  alternates: {
    canonical: "https://kemplast.in/scientific-devices-india",
  },
  openGraph: {
    title: "Scientific Devices Authorized Distributor India | Precision Instruments | Kemplast",
    description: "Buy genuine precision balances, calibration & analytical instruments from India's authorized Scientific Devices dealer — Kemplast Process Solutions.",
    url: "https://kemplast.in/scientific-devices-india",
  },
}

const products = [
  {
    name: "Precision Balances",
    description: "Highly accurate analytical and precision balances for laboratory and industrial weighing applications.",
    image: "/industrial-weighing-scale-system.jpg"
  },
  {
    name: "Calibration Equipment",
    description: "Certified standards and calibrators for ensuring the accuracy of process instrumentation.",
    image: "/absolute-pressure.png"
  },
  {
    name: "Material Testing Instruments",
    description: "Devices for testing the physical and chemical properties of raw materials and finished products.",
    image: "/gauge-pressure.png"
  },
  {
    name: "Environmental Testing Chambers",
    description: "Controlled environment chambers for stability testing and simulated aging of products.",
    image: "/industrial-process-engineering-factory-machinery.jpg"
  },
  {
    name: "Analytical Instruments",
    description: "Spectrometers, chromatographs, and other analytical tools for comprehensive material analysis.",
    image: "/industrial-flow-meter-device.jpg"
  },
  {
    name: "Laboratory Consumables",
    description: "High-quality glassware, reagents, and standard solutions for everyday laboratory operations.",
    image: "/industrial-loose-glass-wool.jpg"
  }
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kemplast.in" },
    { "@type": "ListItem", position: 2, name: "Scientific Devices India", item: "https://kemplast.in/scientific-devices-india" },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Kemplast an authorized Scientific Devices distributor in India?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Kemplast Process Solutions is an authorized distributor and dealer for Scientific Devices precision instruments in India, supplying genuine products with full manufacturer warranty and after-sales support." },
    },
    {
      "@type": "Question",
      name: "What Scientific Devices products does Kemplast supply?",
      acceptedAnswer: { "@type": "Answer", text: "Kemplast supplies Scientific Devices precision balances, calibration equipment, material testing instruments, environmental testing chambers, analytical instruments (spectrometers, chromatographs), and laboratory consumables across India." },
    },
    {
      "@type": "Question",
      name: "Where can I buy Scientific Devices precision instruments in India?",
      acceptedAnswer: { "@type": "Answer", text: "Buy genuine Scientific Devices instruments from Kemplast Process Solutions — an authorized dealer in India. We supply to Hyderabad, Mumbai, Bangalore, Chennai, Delhi, Pune and all major cities. Contact: +91-40-27711000 / +91 89777 54033 or sales@kemplast.in." },
    },
  ],
}

export default function ScientificDevicesPage() {
  const content = (
    <>
      <h2>Top Authorized Scientific Devices Distributor & Dealer in India</h2>
      <p>
        In modern manufacturing and research, precision is not just desired; it is mandatory. Kemplast is a <strong>premier authorized distributor and supplier</strong> of advanced scientific devices and laboratory instruments in India. We cater to the exacting needs of Quality Assurance (QA), Quality Control (QC), and Research & Development (R&D) laboratories across various industries, ensuring you receive authentic, world-class measurement tools.
      </p>

      <h3>Driving Quality and Innovation</h3>
      <p>
        The quality of a final product is heavily dependent on the accuracy of the measurements taken during its development and production. The scientific devices we supply ensure that you can measure, test, and validate with absolute confidence, meeting international regulatory standards (such as FDA, ISO, and GMP).
      </p>

      <h3>Features of Our Scientific Portfolio</h3>
      <ul>
        <li><strong>Uncompromising Accuracy:</strong> Instruments calibrated to deliver precise and repeatable results.</li>
        <li><strong>Technological Advancement:</strong> Incorporating the latest digital interfaces for seamless data logging and LIMS integration.</li>
        <li><strong>Regulatory Compliance:</strong> Equipment designed to facilitate easy validation and audit trailing.</li>
        <li><strong>Robust Construction:</strong> Built to provide reliable service in both pristine laboratory settings and demanding industrial environments.</li>
      </ul>

      <h3>Expert Consultation and Support</h3>
      <p>
        The landscape of scientific instrumentation is complex. The Kemplast team provides expert consultation to help you configure the right laboratory setup. Beyond supply, we assist with installation, calibration services, and ongoing technical support, ensuring your scientific devices remain accurate and operational year after year.
      </p>
    </>
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BrandPageLayout
        brandName="Scientific Devices"
        title="Scientific Devices Authorized Distributor in India"
        description="Equip your laboratory with high-precision scientific devices and testing instruments. Reliable measurement solutions supplied by Kemplast, an authorized distributor."
        heroImage="/images/scientific-devices-logo.png"
        products={products}
        content={content}
      />
    </>
  )
}

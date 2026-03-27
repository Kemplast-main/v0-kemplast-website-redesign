import type { Metadata } from "next"
import { BrandPageLayout } from "@/components/brand-page-layout"

export const metadata: Metadata = {
  title: "Scientific Devices Supplier in India",
  description:
    "Kemplast supplies high-precision scientific devices and instruments for laboratories and industrial QA/QC applications in India.",
  alternates: {
    canonical: "https://kemplast.in/scientific-devices-india",
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

export default function ScientificDevicesPage() {
  const content = (
    <>
      <h2>Your Partner for Precision Scientific Devices in India</h2>
      <p>
        In modern manufacturing and research, precision is not just desired; it is mandatory. Kemplast is a premier supplier of advanced scientific devices and laboratory instruments in India. We cater to the exacting needs of Quality Assurance (QA), Quality Control (QC), and Research & Development (R&D) laboratories across various industries.
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
    <BrandPageLayout
      brandName="Scientific Devices"
      title="Scientific Devices & Instruments Supplier in India"
      description="Equip your laboratory with high-precision scientific devices and testing instruments. Reliable measurement solutions supplied by Kemplast."
      heroImage="/images/scientific-devices-logo.png"
      products={products}
      content={content}
    />
  )
}

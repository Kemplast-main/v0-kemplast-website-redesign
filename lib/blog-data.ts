export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  author: string
  category: string
  faqSchema: {
    question: string
    answer: string
  }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "top-siemens-industrial-products-india",
    title: "Top Siemens Industrial Products Available in India",
    date: "2023-11-15",
    author: "Kemplast Technical Team",
    category: "Process Instrumentation",
    excerpt: "Discover the most sought-after Siemens industrial products for process automation and instrumentation in the Indian market.",
    content: `
<h2>The Role of Siemens in Indian Industry</h2>
<p>Siemens has long been a pillar of industrial automation globally, and India is no exception. With rapid industrialization, the demand for reliable, accurate, and durable process instrumentation has skyrocketed. Siemens provides solutions that not only meet but exceed these demands.</p>

<h3>Key Products We Supply</h3>
<ol>
  <li><strong>SITRANS P (Pressure Transmitters):</strong> Essential for measuring pressure with precision in harsh environments. Known for their long-term stability and robust design.</li>
  <li><strong>SITRANS T (Temperature Transmitters):</strong> Vital for temperature control in chemical and pharmaceutical plants.</li>
  <li><strong>SITRANS F (Flowmeters):</strong> Used extensively in water treatment and oil and gas sectors for accurate flow measurement.</li>
  <li><strong>SIPART PS2 (Positioners):</strong> Intelligent positioners for linear and part-turn actuators, featuring advanced diagnostics.</li>
</ol>

<h3>Why Source from an Authorized Supplier like Kemplast?</h3>
<p>Sourcing from an authorized supplier ensures you receive genuine products with full manufacturer warranty. Furthermore, our team at Kemplast provides unparalleled technical support, assisting with product selection, installation guidance, and troubleshooting.</p>
`,
    faqSchema: [
      {
        question: "What are Siemens SITRANS products?",
        answer: "SITRANS is Siemens' family of process instrumentation products, including devices for measuring pressure, temperature, flow, and level."
      },
      {
        question: "Where can I buy genuine Siemens products in India?",
        answer: "You can purchase genuine Siemens industrial products from authorized suppliers like Kemplast Process Solutions, based in India."
      }
    ]
  },
  {
    slug: "best-ventil-equipment-suppliers-india",
    title: "Best Ventil Equipment Suppliers in India — Why Choose Kemplast",
    date: "2023-10-22",
    author: "Engineering Desk",
    category: "Testing Equipment",
    excerpt: "An overview of Ventil valve testing equipment and why Kemplast is your ideal partner for sourcing these critical machines in India.",
    content: `
<h2>Ensuring Valve Integrity with Ventil</h2>
<p>Valves are the gatekeepers of any process plant. A malfunctioning valve can lead to severe safety and operational issues. Ventil, a global leader in valve testing equipment, provides the technology necessary to ensure every valve operates flawlessly.</p>

<h3>The Ventil Equipment Range</h3>
<p>Ventil manufactures a wide array of test benches, from compact, portable units for on-site testing to large-scale, automated systems for heavy industry. These machines test for shell strength, seat tightness, and operational torque, adhering strictly to international standards.</p>

<h3>Partnering with Kemplast</h3>
<p>As a leading supplier of Ventil equipment in India, Kemplast offers more than just the product. We provide comprehensive support that includes:</p>
<ul>
  <li><strong>Consultation:</strong> Helping you choose the right test bench for your specific valve types and sizes.</li>
  <li><strong>Support:</strong> Offering installation assistance and operator training.</li>
  <li><strong>After-Sales Service:</strong> Ensuring minimal downtime for your testing operations through prompt service.</li>
</ul>
`,
    faqSchema: [
      {
        question: "What is Ventil equipment used for?",
        answer: "Ventil equipment is primarily used for testing, repairing, and lapping industrial valves to ensure they meet safety and performance standards."
      },
      {
        question: "Is Kemplast an authorized supplier for Ventil in India?",
        answer: "Yes, Kemplast is a trusted supplier of Ventil valve testing equipment across India."
      }
    ]
  },
  {
    slug: "why-scientific-devices-matter-in-industry",
    title: "Why Scientific Devices Matter in Modern Industry",
    date: "2023-09-10",
    author: "QA/QC Department",
    category: "Laboratory & QA",
    excerpt: "Explore the critical role that precision scientific devices play in industrial quality control and research and development.",
    content: `
<h2>The Foundation of Quality</h2>
<p>In today's highly competitive industrial landscape, quality is the primary differentiator. Scientific devices and laboratory instruments are the foundation upon which this quality is built and verified.</p>

<h3>Applications in QA/QC</h3>
<p>Quality Assurance and Quality Control (QA/QC) departments rely heavily on precision instruments. From analytical balances that measure to the microgram to environmental chambers that simulate extreme conditions, these devices ensure products meet strict specifications before they reach the market.</p>

<h3>Driving Innovation in R&D</h3>
<p>Research and Development (R&D) relies on advanced scientific devices to analyze materials, test new formulations, and push the boundaries of current technology. Without reliable instruments, innovation would stall.</p>

<h3>Sourcing the Best Solutions</h3>
<p>Kemplast supplies a comprehensive range of scientific devices tailored for industrial applications in India. We partner with top global manufacturers to bring high-accuracy, reliable instruments to your laboratory, backed by our expert technical support.</p>
`,
    faqSchema: [
      {
        question: "What types of scientific devices are used in industry?",
        answer: "Common industrial scientific devices include precision balances, calibration equipment, material testing instruments, and environmental chambers."
      },
      {
        question: "Why is accuracy important in laboratory instruments?",
        answer: "Accuracy is vital because even minor measurement errors can lead to compromised product quality, regulatory non-compliance, and safety hazards."
      }
    ]
  }
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

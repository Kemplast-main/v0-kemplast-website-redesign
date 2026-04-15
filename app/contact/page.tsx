"use client"

import type React from "react"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Phone, Mail, Send, Building2, Globe, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const contactInfo = [
  {
    icon: Building2,
    title: "Secunderabad Office",
    details: [
      "Kemplast Inc",
      "4-3-83 to 85 Laxmana Business Ctr",
      "Hill Street, Ranigunj",
      "Secunderabad – 500003",
      "Telangana, India",
    ],
  },
  {
    icon: Building2,
    title: "Bangalore Office",
    details: [
      "No: 41, 15th Cross,",
      "MTS Layout,",
      "Kengeri Satellite Town,",
      "Bangalore - 560060, India",
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["040-27711000", "040-27714090"],
  },
  {
    icon: Smartphone,
    title: "Cell",
    details: ["+91 76740 12423", "+91 98494 24374"],
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: ["sales@kemplast.in", "support@kemplast.in"],
  },
]

const categoryProductsMap: Record<string, string[]> = {
  "Pressure Instruments": [
    "Pencil Type Pressure Transmitter",
    "Gauge Pressure Transmitter",
    "Absolute Pressure Transmitter",
    "Differential Pressure Transmitter",
    "Pressure Gauge",
    "Differential Pressure Gauge",
  ],
  "Level Instruments": [
    "ECHOMAX XPS-10, XPS-15 & XPS-30",
    "SITRANS PROBE LU240",
    "SITRANS LR100",
    "SITRANS LR110",
    "SITRANS LR120",
    "SITRANS LR150",
    "SITRANS LR510",
    "SITRANS LR530",
    "SITRANS LR550",
    "SITRANS LR580",
    "CAPACITANCE SWITCHES",
    "VIBRATING SWITCHES",
    "ROTATION PADDLE SWITCHES",
  ],
  "Flow Instruments": [
    "ELECTROMAGNETIC FLOWMETER",
    "VORTEX FLOWMETER",
    "TURBINE FLOWMETER",
    "ORIFICE TYPE DP FLOW METER",
    "PITOT TUBE TYPE DP FLOW METER",
  ],
  "Temperature Instruments": [
    "Bimetallic Thermometer",
    "Glass Thermometer",
    "RESISTANCE TEMPERATURE DETECTORS",
    "HEAD MOUNTED TRANSMITTERS",
    "FIELD MOUNT TEMPERATURE TRANSMITTER",
    "RAIL MOUNT TEMPERATURE TRANSMITTER",
  ],
  "Safety Instruments": [
    "Control Valve",
    "Relief Valve",
    "Safety Relief Valve",
    "Inline Flame Arrestor",
    "End of Line Flame Arrestor",
    "Explosion Vents",
    "Rupture Disc",
  ],
  "Valve Positioners": [
    "Siemens Positioner",
    "Smart Electro Pneumatic Valve Positioner",
  ],
  "Packing": [
    "Fibre Packing Sheets",
    "Aramid Packing",
    "Asbestos PTFE Packing",
    "Carbon Fiber Packing",
    "Carbonized Fiber Packing",
    "Composite Aramid Fiber Packing",
    "Expanded Graphite Packing",
    "Graphite Packing With Carbon Fiber",
    "PTFE Packing With Graphite",
    "PTFE Pure PTFE packing",
    "Ramie Graphite Packing",
    "Ramie PTFE Packing",
    "Spiral Wound Gaskets",
    "Cut Fiber Gaskets",
    "Expanded Teflon (PTFE) Gasket",
    "Teflon (PTFE) Envelope Gasket",
    "Teflon (PTFE) Ring Gasket",
    "PTFE Sheets",
    "Teflon Rods, Bushes & Tubes",
    "Teflon Belows",
    "Teflon Universal Rope",
    "Teflon Diaphragms with Neoprene Rubber Pad",
  ],
  "Insulation": [
    "Loose Glass Wool",
    "Polybond Mineralwool Thermal Insulation Wool",
    "Ceramic Fiber Wool",
    "Lightly Resin Bonded Mattress",
    "Ceramic Fibre Board",
    "Ceramic Fiber Blanket",
    "Acoustic Insulation Slab",
    "Thermal Insulation Slab",
    "Ceramic Cloth",
    "Ceramic Tape",
    "Ceramic Rope",
  ],
}

function ContactForm() {
  const searchParams = useSearchParams()
  const initialSubject = searchParams.get("subject") || ""

  const [formData, setFormData] = useState<{
    name: string
    email: string
    product: string[]
    specificProducts: string[]
    subject: string
    message: string
  }>({
    name: "",
    email: "",
    product: [],
    specificProducts: [],
    subject: initialSubject,
    message: "",
  })
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const availableProducts = formData.product
    .flatMap((cat) => categoryProductsMap[cat] ?? [])
    .filter((p, i, arr) => arr.indexOf(p) === i)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const payload = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      product: [...formData.product, ...formData.specificProducts],
    }

    try {
      // Send email first — primary notification (must succeed)
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Failed to send email")

      toast.success("Request sent successfully! We will get back to you soon.")
      setFormData({ name: "", email: "", product: [], specificProducts: [], subject: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("Failed to send request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xl font-bold tracking-widest uppercase shadow-[0_0_15px_-5px_hsl(var(--primary))] backdrop-blur-sm mb-4">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our products or services? We&apos;re here to help. Reach out to our team today.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
                <h2 className="text-2xl font-bold text-foreground mb-8">Request a Quote</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-foreground font-medium mb-2">Your Name (required)</label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-secondary border-border h-12"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-foreground font-medium mb-2">Your Email (required)</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-secondary border-border h-12"
                      required
                    />
                  </div>



                  <div className="relative">
                    <label className="block text-foreground font-medium mb-2">Select Products</label>
                    <div className="relative">
                      {/* Trigger Area */}
                      <div
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="min-h-12 w-full rounded-md border border-border bg-secondary px-3 py-2 text-sm cursor-pointer hover:border-primary/50 transition-colors"
                      >
                        <div className="flex flex-wrap gap-2">
                          {formData.product.length > 0 ? (
                            formData.product.map((prod) => (
                              <span
                                key={prod}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-primary/20 text-primary px-2 py-1 rounded-md text-xs flex items-center gap-1 font-medium ring-1 ring-inset ring-primary/20"
                              >
                                {prod}
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    const newCategories = formData.product.filter((p) => p !== prod)
                                    const remainingProducts = newCategories.flatMap((cat) => categoryProductsMap[cat] ?? [])
                                    setFormData({
                                      ...formData,
                                      product: newCategories,
                                      specificProducts: formData.specificProducts.filter((sp) => remainingProducts.includes(sp)),
                                    })
                                  }}
                                  className="hover:text-foreground ml-1 p-0.5"
                                >
                                  ×
                                </button>
                              </span>
                            ))
                          ) : (
                            <span className="text-muted-foreground py-1">Select products...</span>
                          )}
                        </div>
                        <div className="absolute right-3 top-3 pointer-events-none">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`text-muted-foreground transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                          >
                            <path
                              d="M2.5 4.5L6 8L9.5 4.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Backdrop to close dropdown on outside click */}
                      {isDropdownOpen && (
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => setIsDropdownOpen(false)}
                        />
                      )}

                      {/* Dropdown Menu */}
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-xl z-20 overflow-hidden py-1 h-60 overflow-y-auto custom-scrollbar">
                          {[
                            "Pressure Instruments",
                            "Level Instruments",
                            "Flow Instruments",
                            "Temperature Instruments",
                            "Safety Instruments",
                            "Valve Positioners",
                            "Packing",
                            "Insulation",
                            "Other"
                          ].map((option) => {
                            const isSelected = formData.product.includes(option)
                            return (
                              <div
                                key={option}
                                onClick={() => {
                                  if (!isSelected) {
                                    setFormData({ ...formData, product: [...formData.product, option] })
                                    setIsDropdownOpen(false)
                                  }
                                }}
                                className={`px-4 py-3 text-sm cursor-pointer transition-colors flex items-center justify-between
                                  ${isSelected
                                    ? 'bg-secondary/50 text-muted-foreground cursor-default'
                                    : 'hover:bg-primary/10 hover:text-primary text-foreground'
                                  }`}
                              >
                                {option}
                                {isSelected && (
                                  <span className="text-xs text-primary font-medium">Selected</span>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Specific product selection — only shown when a category is selected */}
                  {availableProducts.length > 0 && (
                    <div className="relative">
                      <label className="block text-foreground font-medium mb-2">Select Specific Products</label>
                      <div className="relative">
                        <div
                          onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                          className="min-h-12 w-full rounded-md border border-border bg-secondary px-3 py-2 text-sm cursor-pointer hover:border-primary/50 transition-colors"
                        >
                          <div className="flex flex-wrap gap-2">
                            {formData.specificProducts.length > 0 ? (
                              formData.specificProducts.map((prod) => (
                                <span
                                  key={prod}
                                  onClick={(e) => e.stopPropagation()}
                                  className="bg-primary/20 text-primary px-2 py-1 rounded-md text-xs flex items-center gap-1 font-medium ring-1 ring-inset ring-primary/20"
                                >
                                  {prod}
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      setFormData({
                                        ...formData,
                                        specificProducts: formData.specificProducts.filter((p) => p !== prod),
                                      })
                                    }}
                                    className="hover:text-foreground ml-1 p-0.5"
                                  >
                                    ×
                                  </button>
                                </span>
                              ))
                            ) : (
                              <span className="text-muted-foreground py-1">Select specific products...</span>
                            )}
                          </div>
                          <div className="absolute right-3 top-3 pointer-events-none">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className={`text-muted-foreground transition-transform duration-200 ${isProductDropdownOpen ? 'rotate-180' : ''}`}
                            >
                              <path
                                d="M2.5 4.5L6 8L9.5 4.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>

                        {isProductDropdownOpen && (
                          <div
                            className="fixed inset-0 z-10"
                            onClick={() => setIsProductDropdownOpen(false)}
                          />
                        )}

                        {isProductDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-xl z-20 overflow-hidden py-1 max-h-60 overflow-y-auto custom-scrollbar">
                            {formData.product.map((cat) => {
                              const products = categoryProductsMap[cat] ?? []
                              if (products.length === 0) return null
                              return (
                                <div key={cat}>
                                  <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider bg-secondary/50 border-b border-border">
                                    {cat}
                                  </div>
                                  {products.map((product) => {
                                    const isSelected = formData.specificProducts.includes(product)
                                    return (
                                      <div
                                        key={product}
                                        onClick={() => {
                                          if (!isSelected) {
                                            setFormData({
                                              ...formData,
                                              specificProducts: [...formData.specificProducts, product],
                                            })
                                          } else {
                                            setFormData({
                                              ...formData,
                                              specificProducts: formData.specificProducts.filter((p) => p !== product),
                                            })
                                          }
                                        }}
                                        className={`px-4 py-3 text-sm cursor-pointer transition-colors flex items-center justify-between
                                          ${isSelected
                                            ? 'bg-primary/10 text-primary'
                                            : 'hover:bg-primary/10 hover:text-primary text-foreground'
                                          }`}
                                      >
                                        {product}
                                        {isSelected && (
                                          <span className="text-xs text-primary font-medium">✓</span>
                                        )}
                                      </div>
                                    )
                                  })}
                                </div>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-foreground font-medium mb-2">Subject</label>
                    <Input
                      type="text"
                      placeholder="Brief subject of your inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-secondary border-border h-12"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-foreground font-medium mb-2">Your Message</label>
                    <Textarea
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-secondary border-border min-h-[150px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Request
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}


            </motion.div>
          </div>


        </div>
      </section >

      <Footer />
    </main >
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ContactForm />
    </Suspense>
  )
}

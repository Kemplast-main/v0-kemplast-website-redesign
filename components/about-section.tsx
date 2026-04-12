"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Handshake, Award, CheckCircle2, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const milestones = [
  {
    year: "1986",
    title: "The Beginning",
    description: "Established with SPITMAAN Industries to serve process industries across South India with precision instrumentation.",
    icon: Building2,
    color: "from-primary/30 to-orange-400/10",
  },
  {
    year: "2001",
    title: "Kempflon Engineering",
    description: "Partnered with Thermocare India, expanding our portfolio with world-class insulation and packing solutions.",
    icon: Handshake,
    color: "from-orange-400/30 to-primary/10",
  },
  {
    year: "2017",
    title: "SIEMENS Partnership",
    description: "Became authorised distributor for Siemens, delivering cutting-edge PLC and process instrumentation products.",
    icon: Award,
    color: "from-amber-400/30 to-orange-400/10",
  },
]

const industries = [
  "Power", "Sugar", "Paper", "Pharma",
  "Cement", "F&B", "Chemical", "Process",
  "Oil & Gas", "Water Treatment",
]

const pillars = [
  { label: "Customer Focus", value: "Priority #1" },
  { label: "Stock Availability", value: "Critical Items" },
  { label: "After-Sales Support", value: "24/7" },
  { label: "Brand Partners", value: "10+" },
]

export function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-6 sm:px-10 overflow-hidden bg-background">

      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/3 to-transparent pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            About Us
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-foreground mt-4">
            Trusted Partner
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-500">
              Since 1986
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-start">

          {/* ── Left: Story + pillars + industries ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-10"
          >
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                <span className="text-foreground font-semibold">Kemplast Inc</span> was established in 1986 with the sole aim of serving process industries in South India. Through exceptional customer service and quality products, we have earned unwavering trust across the process industry.
              </p>
              <p>
                We solve customer problems with innovative solutions, reduce lead-times by maintaining stock of critical items, and continuously pass on cost savings achieved through operational efficiency.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="group p-4 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="text-xl font-black text-primary">{p.value}</div>
                  <div className="text-sm text-muted-foreground font-medium mt-0.5">{p.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Industry Tags */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Industries Served</p>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind, i) => (
                  <motion.span
                    key={ind}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-muted/80 border border-border text-sm font-medium text-foreground hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    {ind}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
            >
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  View Our Products
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Right: Glowing milestone timeline ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative space-y-0"
          >
            {/* Vertical connector line */}
            <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary/60 via-orange-400/40 to-primary/20 rounded-full" />

            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.18, duration: 0.7 }}
                className={`group relative flex gap-6 ${i < milestones.length - 1 ? "pb-8" : ""}`}
              >
                {/* Icon node */}
                <div className="relative flex-shrink-0 z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${m.color} border border-primary/20 flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-400`}>
                    <m.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 pb-2">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-3xl font-black text-primary tracking-tight">{m.year}</span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">{m.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Bottom quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-orange-400/5 to-transparent border border-primary/20 backdrop-blur-sm"
            >
              <p className="text-sm font-semibold text-foreground/90 italic leading-relaxed">
                "Engineering excellence through proven partnerships and delivering the highest quality instrumentation solutions to Indian industry."
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-6 h-px bg-primary" />
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Kemplast Philosophy</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Package, Settings, Gauge, Wrench, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    number: "01",
    icon: Package,
    title: "Packing & Insulation",
    description: "World-class gaskets, packing materials, and insulation products at economical prices for all industrial applications.",
    link: "/services",
    color: "from-primary/20 to-orange-400/5",
    glow: "group-hover:shadow-primary/20",
  },
  {
    number: "02",
    icon: Settings,
    title: "Process Engineering",
    description: "End-to-end engineering consultancy to match the right instrumentation equipment with your specific process requirements.",
    link: "/services",
    color: "from-orange-400/20 to-amber-400/5",
    glow: "group-hover:shadow-orange-400/20",
  },
  {
    number: "03",
    icon: Gauge,
    title: "Calibration Services",
    description: "Precision calibration of all process instruments with certified documentation, traceable to national standards.",
    link: "/services/calibration",
    color: "from-amber-400/20 to-primary/5",
    glow: "group-hover:shadow-amber-400/20",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Round-the-clock technical support and preventive maintenance programs to keep your plant running at peak efficiency.",
    link: "/services",
    color: "from-primary/20 to-orange-500/5",
    glow: "group-hover:shadow-primary/20",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-6 sm:px-10 overflow-hidden bg-background">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Our Expertise
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mt-4">
              <span className="text-foreground">What We</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-500">
                Deliver
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:max-w-xs"
          >
            <p className="text-muted-foreground leading-relaxed">
              From measurement instruments to complete automation systems — we cover every stage of your process with precision and reliability.
            </p>
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group mt-6 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                View All Services
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={svc.link} className="block h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`group h-full p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-400 shadow-lg hover:shadow-2xl ${svc.glow} relative overflow-hidden flex flex-col`}
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${svc.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Large number */}
                  <div className="absolute top-4 right-5 text-6xl font-black text-border/40 group-hover:text-primary/10 transition-colors duration-500 select-none leading-none">
                    {svc.number}
                  </div>

                  <div className="relative flex flex-col gap-5 flex-1">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-400">
                      <svc.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {svc.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        {svc.description}
                      </p>
                    </div>

                    {/* CTA arrow */}
                    <div className="flex items-center gap-2 text-primary text-sm font-semibold mt-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Learn more
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

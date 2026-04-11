"use client"

import { motion } from "framer-motion"

import Image from "next/image"

const partners = [
  { name: "SIEMENS", src: "/images/siemens-logo.png" },
  { name: "Scientific Devices", src: "/images/scientific-devices-logo.png" },
  { name: "Ventil", src: "/images/ventil-logo.svg" },
  { name: "Spitmaan", src: "/images/spitmaan-logo.png" },
  { name: "RKS", src: "/images/rks-logo.png" },
]

export function PartnersSection() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xl font-bold tracking-widest uppercase shadow-[0_0_15px_-5px_hsl(var(--primary))] backdrop-blur-sm mb-4">
            Partners
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4">Our Partners</h2>
        </motion.div>

        {/* Scrolling logos */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Scrolling track */}
          <div className="flex overflow-hidden">
            <div className="flex gap-8 animate-scroll">
              {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 w-64 h-32 bg-card rounded-xl border border-border flex items-center justify-center p-6 hover:border-primary/30 transition-colors"
                >
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={200}
                    height={100}
                    className="w-full h-full object-contain transition-all duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

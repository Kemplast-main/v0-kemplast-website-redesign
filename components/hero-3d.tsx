"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, animate, useScroll, useTransform } from "framer-motion"
import { ArrowRight, BookOpen, ChevronDown, Award, Users, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/ui/magnetic-button"

function AnimatedStat({ value, label, icon: Icon }: { value: number; label: string; icon: any }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    })

    return () => controls.stop()
  }, [value])

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="bg-background/40 backdrop-blur-md border border-foreground/10 rounded-2xl px-6 py-6 shadow-2xl hover:border-primary/50 transition-all group"
    >
      <div className="flex items-center gap-4 mb-2">
        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
          <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
        <div className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">{display}+</div>
      </div>
      <div className="text-sm font-medium text-muted-foreground pl-1">{label}</div>
    </motion.div>
  )
}

import { ComingSoonModal } from "@/components/coming-soon-modal"

export function Hero3D() {
  const [modalOpen, setModalOpen] = useState(false)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, 200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background selection:bg-primary/30">

      {/* Modern Grid Overlay */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-[1] bg-[linear-gradient(color-mix(in_oklch,var(--foreground),transparent_97%)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_oklch,var(--foreground),transparent_97%)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/90 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50 z-[1]" />

      {/* Content */}
      <div className="relative z-[10] flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-20">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div style={{ y: y2, opacity }} className="text-left space-y-8">




            {/* Main heading */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[0.9]"
              >
                KEMPLAST
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-primary bg-[length:200%_auto] animate-gradient">
                  PROCESS SOLUTIONS
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed border-l-2 border-primary/50 pl-6"
            >
              Pioneering process instrumentation and industrial solutions since 1986. We engineer the future of fluid control systems.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <MagneticButton>
                <Link href="/products">
                  <Button
                    size="lg"
                    className="rounded-full px-8 h-14 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)]"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 h-14 text-base font-semibold border-foreground/20 text-foreground hover:bg-foreground/10 hover:border-foreground/40 backdrop-blur-sm"
                  onClick={() => setModalOpen(true)}
                >
                  <BookOpen className="mr-2 w-5 h-5" />
                  Our Catalog
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-muted-foreground font-medium">Follow us:</span>
              <a
                href="https://www.linkedin.com/company/42715487/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/20 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a
                href="https://www.indiamart.com/company/21640575/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B6085]/10 border border-[#1B6085]/20 text-[#1B6085] hover:bg-[#1B6085] hover:text-white transition-all text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                IndiaMART
              </a>
            </motion.div>
          </motion.div>

          {/* Right Stats (Floating) */}
          <div className="relative hidden lg:block h-[600px]">
            {/* This area lets the 3D scene show through more, but we float stats over it */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute top-10 right-10 z-20"
            >
              <AnimatedStat value={38} label="Years Experience" icon={Award} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute top-1/2 right-0 -translate-y-1/2 z-20"
            >
              <AnimatedStat value={500} label="Global Clients" icon={Users} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              className="absolute bottom-10 right-20 z-20"
            >
              <AnimatedStat value={100} label="Quality Assurance" icon={Building2} />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-px h-12 bg-gradient-to-b from-primary/0 via-primary to-primary/0"
          />
        </motion.div>
      </div>
      <ComingSoonModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}

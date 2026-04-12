"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { motion, animate, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowRight, BookOpen, ArrowUpRight, Zap, Shield, Globe, Clock } from "lucide-react"
import { ComingSoonModal } from "@/components/coming-soon-modal"

/* ── Animated counter ── */
function Counter({ value, suffix = "+" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {display}{suffix}
    </span>
  )
}

const stats = [
  { value: 38, suffix: "+", label: "Years of Excellence", icon: Clock },
  { value: 500, suffix: "+", label: "Global Clients", icon: Globe },
  { value: 100, suffix: "%", label: "Quality Assured", icon: Shield },
  { value: 24, suffix: "/7", label: "Support Available", icon: Zap },
]

const industries = [
  "Power Generation", "Sugar Mills", "Paper & Pulp", "Pharmaceuticals",
  "Cement Plants", "Food & Beverage", "Chemical Processing", "Oil & Gas",
  "Water Treatment", "Petrochemicals", "Fertilizers", "Steel Plants",
]

/* ── Floating orb ── */
function Orb({ className }: { className: string }) {
  return <div className={`absolute rounded-full blur-[120px] pointer-events-none ${className}`} />
}

export function Hero3D() {
  const [modalOpen, setModalOpen] = useState(false)
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const heroY = useTransform(scrollY, [0, 500], [0, -120])

  /* stagger children */
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  }

  return (
    <>
      {/* ═══════════════════  HERO  ═══════════════════ */}
      <section className="relative min-h-screen w-full overflow-hidden bg-background flex flex-col">

        {/* ── Ambient orbs ── */}
        <Orb className="w-[700px] h-[700px] bg-primary/20 top-[-200px] left-[-200px]" />
        <Orb className="w-[500px] h-[500px] bg-orange-500/10 top-[20%] right-[-100px]" />
        <Orb className="w-[400px] h-[400px] bg-primary/10 bottom-[0] left-[30%]" />

        {/* ── Dot grid ── */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, oklch(0.6 0 0 / 15%) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%)",
          }}
        />

        {/* ── Diagonal accent line ── */}
        <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent translate-x-[40vw] rotate-6 origin-top" />
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent translate-x-[55vw] rotate-6 origin-top" />
        </div>

        {/* ── Main content ── */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 flex-1 flex items-center px-6 sm:px-10 lg:px-20 pt-28 pb-10 pointer-events-none"
        >
          <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-[1fr_auto] gap-16 items-center">

            {/* Left content */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="space-y-8 max-w-3xl pointer-events-auto"
            >
              {/* Badge */}
              <motion.div variants={item}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Est. 1986 · Trusted by Industry Leaders
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div variants={item} className="space-y-1">
                <h1 className="text-[clamp(3rem,8vw,7rem)] font-black tracking-tighter leading-[0.88] text-foreground">
                  KEMPLAST
                </h1>
                <h1 className="text-[clamp(3rem,8vw,7rem)] font-black tracking-tighter leading-[0.88]">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-500 bg-[length:200%] animate-gradient">
                    PROCESS
                  </span>
                </h1>
                <h1 className="text-[clamp(3rem,8vw,7rem)] font-black tracking-tighter leading-[0.88]">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-400 to-primary bg-[length:200%] animate-gradient [animation-delay:0.5s]">
                    SOLUTIONS
                  </span>
                </h1>
              </motion.div>

              {/* Sub */}
              <motion.p
                variants={item}
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl border-l-[3px] border-primary pl-6"
              >
                Pioneering process instrumentation and industrial solutions since{" "}
                <span className="text-foreground font-semibold">1986</span>. We engineer the future of fluid control systems across South India and beyond.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={item} className="flex flex-wrap gap-4">
                <Link href="/products">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-base shadow-[0_0_40px_-8px_hsl(var(--primary))] hover:shadow-[0_0_60px_-6px_hsl(var(--primary))] transition-all duration-300"
                  >
                    Explore Products
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border bg-background/60 backdrop-blur-sm font-bold text-base hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 text-primary" />
                  Our Catalog
                </motion.button>
              </motion.div>

              {/* Social */}
              <motion.div variants={item} className="flex items-center gap-3 flex-wrap">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Connect</span>
                <div className="w-8 h-px bg-border" />
                <a
                  href="https://www.linkedin.com/company/42715487/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/20 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all text-sm font-semibold"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  LinkedIn
                </a>
                <a
                  href="https://www.indiamart.com/kempflon-engineering/profile.html?srsltid=AfmBOorhMck_1YNLlpwLBBu-tYDeAEYctcqCg014e5Niue7emUsn8ZA-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B6085]/10 border border-[#1B6085]/20 text-[#1B6085] hover:bg-[#1B6085] hover:text-white transition-all text-sm font-semibold"
                >
                  <Globe className="w-4 h-4" />
                  IndiaMART
                </a>
              </motion.div>
            </motion.div>

            {/* Right — scattered stat cards */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } } }}
              className="hidden lg:flex flex-col gap-8 w-[320px] pointer-events-auto items-center"
            >
              {stats.map((s, idx) => {
                // Scatter offsets to break the straight line
                const scatterOffsets = [30, -60, 40, -50]
                const rotOffset = idx % 2 === 0 ? 1.5 : -1.5

                return (
                <motion.div
                  key={s.label}
                  variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22,1,0.36,1] as [number, number, number, number] } } }}
                  style={{ marginLeft: `${scatterOffsets[idx]}px` }}
                  className="w-[220px]"
                >
                  <motion.div
                    animate={{ y: [0, -12, 0], rotate: [0, rotOffset, 0] }}
                    transition={{
                      duration: 5 + idx * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5 + idx * 0.3,
                    }}
                    whileHover={{ scale: 1.04, x: -4 }}
                    className="group relative px-6 py-5 rounded-2xl bg-white/95 backdrop-blur-xl border-[1.5px] border-primary/30 hover:border-primary/60 shadow-xl shadow-primary/10 hover:shadow-primary/30 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex flex-col gap-1 z-10">
                      <s.icon className="w-5 h-5 text-primary mb-1" />
                      <div className="text-3xl font-black text-foreground tracking-tight">
                        <Counter value={s.value} suffix={s.suffix} />
                      </div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{s.label}</div>
                    </div>
                  </motion.div>
                </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* ── Scroll cue ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-primary/0 via-primary to-primary/0"
          />
        </motion.div>
      </section>

      {/* ═══════════════════  INDUSTRIES MARQUEE  ═══════════════════ */}
      <div className="relative overflow-hidden bg-primary py-4 z-20">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...industries, ...industries].map((ind, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6 text-sm font-bold text-primary-foreground/90 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60 flex-shrink-0" />
              {ind}
            </span>
          ))}
        </div>
      </div>

      <ComingSoonModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

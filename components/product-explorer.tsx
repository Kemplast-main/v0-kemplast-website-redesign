"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { TiltCard } from "@/components/ui/tilt-card"

const products = [
    {
        id: 1,
        title: "Pressure Instruments",
        description: "High-precision measurement for all industrial environments.",
        image: "/industrial-pressure-gauge.jpg",
        link: "/products?category=pressure",
        colSpan: "lg:col-span-2",
    },
    {
        id: 2,
        title: "Level Instruments",
        description: "Radar, Ultrasonic, and Switch technologies.",
        image: "/industrial-level-indicator-instrument.jpg",
        link: "/products?category=level",
        colSpan: "lg:col-span-1",
    },
    {
        id: 3,
        title: "Flow Instruments",
        description: "Accurate monitoring for liquid and gas flow.",
        image: "/industrial-flow-meter-device.jpg",
        link: "/products?category=flow",
        colSpan: "lg:col-span-1",
    },
    {
        id: 4,
        title: "Temperature",
        description: "Sensors ensuring optimal thermal control.",
        image: "/industrial-temperature-sensor-probe.jpg",
        link: "/products?category=temperature",
        colSpan: "lg:col-span-1",
    },
    {
        id: 5,
        title: "Valves & Positioners",
        description: "Smart control for process automation.",
        image: "/industrial-valve-positioner.jpg",
        link: "/products?category=valve",
        colSpan: "lg:col-span-1",
    },
    {
        id: 6,
        title: "Safety Instruments",
        description: "Critical protection with our rupture discs and vents.",
        image: "/r-disc.png",
        link: "/products?category=safety",
        colSpan: "lg:col-span-2",
    },
    {
        id: 7,
        title: "Siemens PLC Systems",
        description: "LOGO, S7-200, S7-1200, S7-300, S7-400, S7-1500 & distributed ET 200 systems for industrial automation.",
        image: "/images/plc-images/s7-1200.jpeg",
        link: "/products?category=plc",
        colSpan: "lg:col-span-4",
    },
]

export function ProductExplorer() {
    return (
        <section className="py-24 px-4 sm:px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-4">
                            Explore Products
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Precision Solutions for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                                Every Industry
                            </span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Discover our comprehensive range of process instrumentation and control equipment.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/products">
                            <button className="group flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-primary hover:text-white transition-all duration-300">
                                View All Products
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </Link>
                    </motion.div>
                </div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.15,
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            variants={{
                                hidden: { opacity: 0, y: 40, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
                            }}
                            className={`group relative ${product.colSpan} h-[280px] lg:h-[320px] rounded-3xl overflow-hidden cursor-pointer`}
                        >
                            <Link href={product.link} className="block w-full h-full">
                                <div className="w-full h-full relative">
                                    {/* Background Image */}
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-2xl font-bold text-white shadow-black/50 drop-shadow-md group-hover:text-primary transition-colors">
                                                    {product.title}
                                                </h3>
                                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                                </div>
                                            </div>
                                            <p className="text-white/80 text-sm line-clamp-2 shadow-black/50 drop-shadow-md group-hover:text-white transition-colors">
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

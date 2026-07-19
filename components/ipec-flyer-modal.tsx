"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

export function IpecFlyerModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show modal immediately after mount
    setIsOpen(true)
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] cursor-pointer"
          />
          
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[101] p-4 sm:p-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-xl shadow-2xl pointer-events-auto relative overflow-hidden flex flex-col"
              style={{
                width: 'min(90vw, 85vh, 800px)',
                height: 'min(90vw, 85vh, 800px)'
              }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full text-gray-500 hover:text-gray-900 transition-colors z-20 shadow-sm border border-gray-100"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-full flex items-center justify-center bg-gray-50">
                <Image
                  src="/images/Exhibition image.jpeg"
                  alt="IPEC 2026 Exhibition Poster"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

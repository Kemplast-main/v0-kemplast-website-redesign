"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ComingSoonModal } from "@/components/coming-soon-modal";

interface ProductCardProps {
  name: string;
  category: string;
  image: string;
  description?: string;
  introduction?: string;
  benefits?: string[];
  technicalSpecs?: Record<string, string>;
  applications?: string[];
  imageFit?: "cover" | "contain";
  index: number;
}

export function ProductCard({
  name,
  category,
  image,
  description,
  introduction,
  benefits,
  technicalSpecs,
  applications,
  imageFit,
  index,
}: ProductCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  // Determine the object-fit style
  // Priority: 1. imageFit prop, 2. Category specific, 3. Default (contain)
  const isInsulation = category === "Insulation Products" || category === "insulation";
  const defaultFit = isInsulation ? "object-cover" : "object-contain p-4";

  // If specific imageFit is provided, we might need to adjust padding too
  // Typically 'cover' needs no padding, 'contain' might want padding.
  // But for the specific case of 'contain' requested by user for zoomed images,
  // let's assume they want it contained but maybe full size? Or with padding?
  // Let's stick to the previous 'p-4' for contain, and no padding for cover.

  let fitClass = "";
  if (imageFit) {
    if (imageFit === "cover") fitClass = "object-cover";
    else fitClass = "object-contain p-4";
  } else {
    fitClass = defaultFit;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: (index % 4) * 0.1, type: "spring", bounce: 0.3 }}
        viewport={{ once: true, margin: "100px" }}
        whileHover={{ y: -8, transition: { duration: 0.2 } }}
        className="group relative bg-card border border-border rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col"
        onClick={() => setShowDetails(true)}
      >
        {/* ✅ FIXED IMAGE CONTAINER */}
        <div className="relative aspect-[4/3] bg-white flex items-center justify-center overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${fitClass}`}
          />

          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full shadow-sm">
              {category}
            </span>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
            {name}
          </h3>

          <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
            High quality industrial grade product
          </p>

          <div className="flex flex-col gap-3 mt-auto">
            <Button
              variant="outline"
              className="w-full gap-2 hover:bg-secondary/50 border-input"
              onClick={(e) => {
                e.stopPropagation();
                setShowDetails(true);
              }}
            >
              <Info className="w-4 h-4" />
              Get Full Details
            </Button>

            <Link
              href={`/contact?subject=Inquiry about ${encodeURIComponent(name)}`}
              className="w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Button className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                Request Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      <ComingSoonModal
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        title={name}
        productName={name}
        description={description}
        introduction={introduction}
        benefits={benefits}
        technicalSpecs={technicalSpecs}
        applications={applications}
      />
    </>
  );
}

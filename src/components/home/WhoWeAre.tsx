"use client"

import { motion } from "framer-motion"
import { SvgUnderline } from "@/components/ui/SvgUnderline"
import { AnimatedButton } from "@/components/ui/AnimatedButton"

function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`bg-gray-200 flex flex-col items-center justify-center text-gray-400 w-full h-full min-h-[500px] md:min-h-[600px] ${className}`}
    >
      <svg className="w-12 h-12 mb-2 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}

export function WhoWeAre() {
  return (
    <section className="w-full px-4 py-8 flex justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full max-w-7xl relative rounded-3xl overflow-hidden min-h-[500px] md:min-h-[600px]"
      >
        <ImagePlaceholder label="Who We Are Background (1600×600)" className="absolute inset-0" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full min-h-[500px] md:min-h-[600px] px-6 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-4 md:mb-6"
          >
            <span className="relative inline-block text-[#7EB8D4] text-lg md:text-xl font-medium tracking-wide">
              Who We Are
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute left-0 -bottom-1.5 w-[110%] -ml-[5%] h-3 pointer-events-none"
              >
                <SvgUnderline className="opacity-80" />
              </motion.div>
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight max-w-4xl"
          >
            Empowering communities through compassion, integrity, and dedicated service.
          </motion.h2>

          <div className="flex-1 min-h-[80px]" />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-white/80 text-sm font-light uppercase tracking-widest">We Are</p>
            <h3 className="text-[#589E47] text-3xl md:text-5xl font-semibold mb-2">
              Arise CSF
            </h3>
            <AnimatedButton variant="glass" hasArrow className="px-9 py-3.5 text-base font-light" href="/about">
              Learn More
            </AnimatedButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

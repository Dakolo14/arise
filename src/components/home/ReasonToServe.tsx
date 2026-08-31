"use client"

import { motion } from "framer-motion"
import { SvgUnderline } from "@/components/ui/SvgUnderline"

function ImagePlaceholder({ label, className = "", aspectRatio = "3/4" }: { label: string; className?: string; aspectRatio?: string }) {
  return (
    <div
      className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center text-gray-400 ${className}`}
      style={{ aspectRatio }}
    >
      <svg className="w-10 h-10 mb-2 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="text-sm font-medium text-center px-4">{label}</span>
    </div>
  )
}

const STATS = [
  { number: "1.78 Million", label: "Children in Labour" },
  { number: "3.4 Million", label: "Children in Street" },
  { number: "4.5 Million", label: "Children are Orphans" },
  { number: "1.6 Million", label: "children in Hunger" },
]

export function ReasonToServe() {
  return (
    <section className="w-full py-20 md:py-32 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="mb-6 md:mb-8">
            <span className="relative inline-block text-[#1E4D97] text-lg md:text-xl font-medium tracking-wide">
              Our Reason to Serve
              <motion.div
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute left-0 -bottom-2 w-[110%] -ml-[5%] h-3 pointer-events-none"
              >
                <SvgUnderline className="opacity-80" />
              </motion.div>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-gray-800 leading-tight mt-6 max-w-4xl mx-auto">
            Every Life We Touch Inspires Us — And Every Story Pushes Us to Create Even Greater Change
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-6 max-w-2xl mx-auto leading-relaxed font-light">
            From Empty Plates to Safe Homes, From Uncertainty to Opportunity — Every Human Struggle Fuels Our Purpose
          </p>
        </motion.div>

        {/* 3-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-end">
          {/* Left image - shorter */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <ImagePlaceholder label="Portrait 1 (400×530)" aspectRatio="3/4" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 left-0 md:-left-8 bg-white/90 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-xl shadow-gray-200/50 border border-white"
            >
              <p className="text-xl md:text-2xl font-semibold text-[#1E4D97]">{STATS[0].number}</p>
              <p className="text-[13px] text-gray-500 mt-0.5">{STATS[0].label}</p>
            </motion.div>
          </motion.div>

          {/* Center image - taller */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative md:-mt-12"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-6 left-0 md:-left-8 bg-white/90 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-xl shadow-gray-200/50 border border-white z-20"
            >
              <p className="text-xl md:text-2xl font-semibold text-[#1E4D97]">{STATS[1].number}</p>
              <p className="text-[13px] text-gray-500 mt-0.5">{STATS[1].label}</p>
            </motion.div>

            <ImagePlaceholder label="Portrait 2 (400×550)" aspectRatio="3/4.5" className="relative z-10" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 right-0 md:-right-8 bg-white/90 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-xl shadow-gray-200/50 border border-white z-20"
            >
              <p className="text-xl md:text-2xl font-semibold text-[#1E4D97]">{STATS[2].number}</p>
              <p className="text-[13px] text-gray-500 mt-0.5">{STATS[2].label}</p>
            </motion.div>
          </motion.div>

          {/* Right image - shorter */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-6 right-0 md:-right-4 bg-white/90 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-xl shadow-gray-200/50 border border-white z-20"
            >
              <p className="text-xl md:text-2xl font-semibold text-[#1E4D97]">{STATS[3].number}</p>
              <p className="text-[13px] text-gray-500 mt-0.5">{STATS[3].label}</p>
            </motion.div>

            <ImagePlaceholder label="Portrait 3 (400×530)" aspectRatio="3/4" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

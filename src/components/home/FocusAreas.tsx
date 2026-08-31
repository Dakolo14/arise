"use client"

import { motion } from "framer-motion"
import { SvgUnderline } from "@/components/ui/SvgUnderline"

function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center text-gray-400 w-full aspect-[16/10] ${className}`}
    >
      <svg className="w-10 h-10 mb-2 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="text-sm font-medium text-center px-4">{label}</span>
    </div>
  )
}

const FOCUS_AREAS = [
  {
    icon: "🎓",
    title: "Education & Scholarships",
    description: "Support education through scholarships and educational assistance for deserving indigent students.",
    imageLabel: "Image: Education outreach",
  },
  {
    icon: "🩺",
    title: "Healthcare & Diabetes Support",
    description: "Promote health through diabetes and blood pressure screening, awareness, counseling, and medical support.",
    imageLabel: "Image: Health screening",
  },
  {
    icon: "🏛",
    title: "Culture & Leadership (Igiogbe)",
    description: "Preserve culture and promote leadership through The Igiogbe Information Center.",
    imageLabel: "Image: Igiogbe Center",
  },
  {
    icon: "🌟",
    title: "Youth & Senior Citizens Support",
    description: "Empower young people through leadership development and support senior citizens with dignity, care, and engagement.",
    imageLabel: "Image: Youth & seniors program",
  },
]

export function WhatWeDo() {
  return (
    <section className="w-full py-20 md:py-32 px-4 bg-white overflow-hidden">
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
              What We Do
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute left-0 -bottom-2 w-[110%] -ml-[5%] h-3 pointer-events-none"
              >
                <SvgUnderline className="opacity-80" />
              </motion.div>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-gray-800 leading-tight mt-6 max-w-3xl mx-auto">
            Building Bridges of Hope{" "}
            <br className="hidden md:block" />
            Through Compassion and Action
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-6 max-w-2xl mx-auto leading-relaxed font-light">
            From education to healthcare, from culture to community support — we focus on the areas that bring real change and lasting impact.
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {FOCUS_AREAS.map((area, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group cursor-pointer transition-all duration-300 hover:-translate-y-2"
            >
              <div className="rounded-3xl overflow-hidden mb-6 bg-gray-50/50 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                <ImagePlaceholder label={area.imageLabel} className="group-hover:scale-[1.03] transition-transform duration-500 ease-out" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{area.icon}</span>
                <h3 className="text-xl md:text-[22px] font-medium text-gray-800 group-hover:text-[#1E4D97] transition-colors">
                  {area.title}
                </h3>
              </div>
              <p className="text-[15px] text-gray-500 leading-relaxed font-light pr-4">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

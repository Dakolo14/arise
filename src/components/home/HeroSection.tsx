"use client"

import { motion } from "framer-motion"
import { SvgUnderline } from "@/components/ui/SvgUnderline"
import { AnimatedButton } from "@/components/ui/AnimatedButton"

import Image from "next/image"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-semibold text-gray-900 leading-tight">
            Connecting Caring{" "}
            <span className="relative inline-block">
              Hearts
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute left-0 -bottom-1 w-full h-3 z-0 pointer-events-none"
              >
                <SvgUnderline />
              </motion.div>
            </span>{" "}
            with Lives in Need
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-gray-500 text-base md:text-lg max-w-3xl mx-auto mb-12 md:mb-16 font-light leading-relaxed"
        >
          We connect compassionate individuals and organizations with deserving communities through education, healthcare, culture, leadership, and social support.
        </motion.p>

        {/* Image Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-4 right-4 md:right-8 bg-[#1E4D97] text-white rounded-3xl px-6 py-4 shadow-xl z-20"
            >
              <p className="text-[15px] font-light">Education changes</p>
              <p className="text-[15px] font-light">lives every day</p>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/30 mt-3 hover:bg-white/10 cursor-pointer transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
              </span>
            </motion.div>

            <div className="w-full mt-12 z-10 relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image src="/images/educational-support/1.jpg" alt="Community outreach" fill className="object-cover" />
            </div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-6 left-4 md:-left-4 bg-[#E8EFF8]/90 backdrop-blur-xl rounded-3xl p-5 max-w-[280px] border border-white/40 shadow-2xl z-20"
            >
              <span className="text-3xl font-serif text-[#1E4D97] leading-none absolute top-3 left-4">&ldquo;</span>
              <p className="text-[15px] text-gray-800 leading-snug mt-4 pl-1">Connecting caring hearts with lives in need</p>
              <p className="text-[13px] font-medium text-gray-600 mt-1 pl-1">— Arise CSF</p>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative md:mt-16"
          >
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -top-8 right-0 md:-right-6 bg-[#E8EFF8]/90 backdrop-blur-xl rounded-3xl p-5 max-w-[260px] border border-white/40 shadow-2xl z-20"
            >
              <p className="text-[15px] text-gray-800 leading-snug pr-4">Every act of kindness creates hope</p>
              <p className="text-[13px] font-medium text-gray-600 mt-1 pr-4">Join our mission today</p>
              <span className="text-3xl font-serif text-[#1E4D97] leading-none absolute bottom-3 right-4">&rdquo;</span>
            </motion.div>

            <div className="w-full z-10 relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image src="/images/diabetes-support/1.jpg" alt="Volunteers in action" fill className="object-cover" />
            </div>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="absolute -bottom-6 left-8 bg-[#E8EFF8]/90 backdrop-blur-xl rounded-3xl px-6 py-4 border border-white/40 shadow-2xl z-20"
            >
              <p className="text-[15px] text-gray-800">Healthcare for all</p>
              <p className="text-[15px] font-light text-gray-700">Free screenings & support</p>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#1E4D97]/20 mt-3 text-[#1E4D97] hover:bg-[#1E4D97]/5 cursor-pointer transition-colors">
                <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="flex justify-center mt-20"
        >
          <AnimatedButton variant="primary" hasArrow className="px-10 py-4 text-base font-light" href="/about">
            Hear Our Story
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  )
}

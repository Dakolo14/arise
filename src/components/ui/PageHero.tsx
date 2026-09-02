"use client"

import { motion } from "framer-motion"

export function PageHero({ title, subtitle, titleClassName = "", label, backgroundImage }: { title: string; subtitle?: string; titleClassName?: string; label?: string; backgroundImage?: string }) {
  return (
    <section className="w-full pt-12 md:pt-16 pb-4 md:pb-8 px-6 bg-gradient-to-b from-[#f9f9fa] to-white relative overflow-hidden">
      {backgroundImage && (
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      )}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {label && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex"
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#E8EFF8] text-[#1E4D97]">
              {label}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#111] mb-6 leading-[1.1] ${titleClassName}`}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-500 text-base md:text-lg font-light max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}

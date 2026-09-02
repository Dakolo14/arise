"use client"

import { motion } from "framer-motion"
import { SvgUnderline } from "@/components/ui/SvgUnderline"
import { AnimatedButton } from "@/components/ui/AnimatedButton"

import Image from "next/image"

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
        <Image src="/images/educational-support/2.jpg" alt="Who We Are Background" fill className="object-cover absolute inset-0" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full min-h-[500px] md:min-h-[600px] px-6 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-4 md:mb-6"
          >
            <span className="relative inline-block text-[#7EB8D4] text-lg md:text-xl font-medium tracking-wide drop-shadow-md">
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
            className="text-white text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-4xl"
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
            <p className="text-white/80 text-sm font-medium uppercase tracking-widest mb-1">We Are</p>
            <h3 className="text-[#589E47] text-3xl md:text-5xl font-semibold mb-2 drop-shadow-md">
              Arise CSF
            </h3>
            <AnimatedButton variant="secondary" hasArrow className="px-9 py-3.5 text-base font-medium shadow-xl" href="/about">
              Learn More
            </AnimatedButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

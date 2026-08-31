"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SvgUnderline } from "@/components/ui/SvgUnderline"
import { AnimatedButton } from "@/components/ui/AnimatedButton"

export function CTASection() {
  return (
    <section className="w-full py-16 px-4 bg-white overflow-hidden flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl relative rounded-[40px] bg-[#1E4D97] flex flex-col md:flex-row items-center min-h-[400px] shadow-2xl overflow-visible"
      >
        {/* Left Side - Image Overlap */}
        <div className="w-full md:w-5/12 self-end relative flex-shrink-0 z-10 pointer-events-none pt-10 md:pt-0 -mb-px">
          <Image
            src="/overlapping-img.png"
            alt="Arise CSF Impact"
            width={600}
            height={600}
            className="w-[90%] md:w-[105%] h-auto object-contain object-bottom drop-shadow-2xl transform md:scale-[1.10] md:origin-bottom-left ml-0"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-7/12 p-10 md:p-16 lg:p-24 flex flex-col justify-center z-0 relative">
          <div className="mb-4 md:mb-6">
            <span className="relative inline-block text-[#E8EFF8] text-xl md:text-2xl font-medium tracking-wide">
              Get Involved
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute left-0 -bottom-2 w-[110%] -ml-[5%] h-3 pointer-events-none"
              >
                <SvgUnderline className="opacity-80 stroke-[#E8EFF8]" />
              </motion.div>
            </span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight mt-6 mb-10 max-w-2xl">
            Connecting Caring Hearts with Lives in Need. Every Act of Giving Changes a Life.
          </h2>
          
          <div>
            <AnimatedButton variant="secondary" hasArrow className="px-10 py-4 text-[17px]" href="/get-involved">
              Support Our Mission
            </AnimatedButton>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

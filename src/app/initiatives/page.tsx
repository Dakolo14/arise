"use client"

import { motion } from "framer-motion"
import { PageHero } from "@/components/ui/PageHero"
import { SvgUnderline } from "@/components/ui/SvgUnderline"

const INITIATIVES = [
  {
    icon: "🎓",
    title: "Arise Education Scholarship Initiative",
    description: "Providing scholarships and educational support to deserving indigent students, empowering them to achieve their full potential.",
    imageLabel: "Image: Scholarship ceremony",
  },
  {
    icon: "🩸",
    title: "Arise Diabetes Support Initiative",
    description: "Providing free diabetes and blood pressure screening, health education, counseling, and medical support for vulnerable individuals who cannot afford essential care.",
    imageLabel: "Image: Health screening event",
  },
  {
    icon: "🏛",
    title: "The Igiogbe Information Center",
    description: "Preserving our cultural heritage, promoting leadership, and strengthening communities through education and civic engagement.",
    imageLabel: "Image: Igiogbe Center",
  },
  {
    icon: "🌟",
    title: "Arise Youth & Leadership Development Initiative",
    description: "Empowering young people through mentorship, leadership training, and community service.",
    imageLabel: "Image: Youth leadership program",
  },
  {
    icon: "👴👵",
    title: "Arise Senior Citizens Support Initiative",
    description: "Promoting the health, dignity, and well-being of senior citizens through care, support, and community engagement.",
    imageLabel: "Image: Senior citizens program",
  },
]

export default function InitiativesPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <PageHero
        label="Our Initiatives"
        title="Connecting Caring Hearts with Lives in Need"
        subtitle="Every initiative reflects our commitment to connecting caring hearts with lives in need."
      />

      {/* Initiatives List */}
      <section className="w-full py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          {INITIATIVES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
            >
              {/* Image */}
              <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-3xl aspect-[16/10] flex flex-col items-center justify-center text-gray-400 hover:shadow-lg transition-shadow duration-300">
                  <span className="text-5xl mb-3">{item.icon}</span>
                  <svg className="w-10 h-10 mb-2 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium">{item.imageLabel}</span>
                </div>
              </div>

              {/* Content */}
              <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed font-light">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Commitment */}
      <section className="w-full py-16 md:py-24 px-4 bg-[#F5F8FC]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="relative inline-block text-[#1E4D97] text-lg font-medium tracking-wide mb-6">
            Our Commitment
            <SvgUnderline className="opacity-80" />
          </span>
          <p className="text-gray-600 text-lg leading-relaxed font-light mt-6">
            Every initiative reflects our commitment to connecting caring hearts with deserving lives and creating lasting hope and opportunity.
          </p>
        </motion.div>
      </section>

      {/* Sponsors & Partners */}
      <section className="w-full py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="relative inline-block text-[#1E4D97] text-lg font-medium tracking-wide mb-4">
              Sponsors & Partners
              <SvgUnderline className="opacity-80" />
            </span>
            <p className="text-gray-500 text-base mt-6 font-light">
              Connecting caring hearts to create lasting impact through collaboration.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl h-24 flex items-center justify-center text-gray-400"
              >
                <span className="text-sm font-medium">Partner Logo {i}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { LayoutGrid, Grid2X2, Command, Code, Disc, LayoutTemplate, Hexagon, PieChart } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { SvgUnderline } from "@/components/ui/SvgUnderline"
const INITIATIVES = [
  {
    title: "Arise Education Scholarship Initiative",
    description: "Providing scholarships and educational support to deserving indigent students, empowering them to achieve their full potential.",
    imageSrc: "/images/educational-support/2.jpg",
  },
  {
    title: "Arise Diabetes Support Initiative",
    description: "Providing free diabetes and blood pressure screening, health education, counseling, and medical support for vulnerable individuals who cannot afford essential care.",
    imageSrc: "/images/diabetes-support/3.JPG",
  },
  {
    title: "The Igiogbe Information Center",
    description: "Preserving our cultural heritage, promoting leadership, and strengthening communities through education and civic engagement.",
    imageSrc: "/images/igiogbe-support/1.jpg",
  },
  {
    title: "Arise Youth & Leadership Development Initiative",
    description: "Empowering young people through mentorship, leadership training, and community service.",
    imageSrc: "/images/educational-support/6.jpg",
  },
  {
    title: "Arise Senior Citizens Support Initiative",
    description: "Promoting the health, dignity, and well-being of senior citizens through care, support, and community engagement.",
    imageSrc: "/images/educational-support/3.JPG",
  },
]

export default function InitiativesPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <PageHero
        title="Connecting Caring Hearts with Lives in Need"
        subtitle="Every initiative reflects our commitment to connecting caring hearts with lives in need."
        titleClassName="max-w-4xl mx-auto"
      />

      {/* Initiatives List */}
      <section className="w-full pt-8 md:pt-12 pb-16 md:pb-24 px-4">
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
                <div className="relative rounded-3xl aspect-[16/10] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <Image src={item.imageSrc} alt={item.title} fill className="object-cover" />
                </div>
              </div>

              {/* Content */}
              <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
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

          <div className="w-full overflow-hidden relative flex">
            <div className="flex w-max items-center gap-x-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 animate-marquee pr-12">
              <div className="flex items-center gap-2 text-gray-800"><LayoutGrid className="w-6 h-6" /><span className="text-xl font-bold tracking-tight">Logoluxe</span></div>
              <div className="flex items-center gap-2 text-gray-800"><Grid2X2 className="w-6 h-6" /><span className="text-xl font-bold tracking-tight">Graphicraft</span></div>
              <div className="flex items-center gap-2 text-gray-800"><Command className="w-6 h-6" /><span className="text-xl font-bold tracking-tight">Auraicons</span></div>
              <div className="flex items-center gap-2 text-gray-800"><Code className="w-6 h-6" /><span className="text-xl font-bold tracking-tight">Nexmark</span></div>
              <div className="flex items-center gap-2 text-gray-800"><Disc className="w-6 h-6" /><span className="text-xl font-bold tracking-tight">Logolaze</span></div>
              <div className="flex items-center gap-2 text-gray-800"><LayoutTemplate className="w-6 h-6" /><span className="text-xl font-bold tracking-tight">Primeark</span></div>
              <div className="flex items-center gap-2 text-gray-800"><Hexagon className="w-6 h-6 fill-current" /><span className="text-xl font-bold tracking-tight">Logozen</span></div>
              <div className="flex items-center gap-2 text-gray-800"><PieChart className="w-6 h-6" /><span className="text-xl font-bold tracking-tight">Designnest</span></div>
              
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-2 text-gray-800"><LayoutGrid className="w-6 h-6" /><span className="text-xl font-bold tracking-tight">Logoluxe</span></div>
              <div className="flex items-center gap-2 text-gray-800"><Grid2X2 className="w-6 h-6" /><span className="text-xl font-bold tracking-tight">Graphicraft</span></div>
              <div className="flex items-center gap-2 text-gray-800"><Command className="w-6 h-6" /><span className="text-xl font-bold tracking-tight">Auraicons</span></div>
              <div className="flex items-center gap-2 text-gray-800"><Code className="w-6 h-6" /><span className="text-xl font-bold tracking-tight">Nexmark</span></div>
              <div className="flex items-center gap-2 text-gray-800"><Disc className="w-6 h-6" /><span className="text-xl font-bold tracking-tight">Logolaze</span></div>
              <div className="flex items-center gap-2 text-gray-800"><LayoutTemplate className="w-6 h-6" /><span className="text-xl font-bold tracking-tight">Primeark</span></div>
              <div className="flex items-center gap-2 text-gray-800"><Hexagon className="w-6 h-6 fill-current" /><span className="text-xl font-bold tracking-tight">Logozen</span></div>
              <div className="flex items-center gap-2 text-gray-800"><PieChart className="w-6 h-6" /><span className="text-xl font-bold tracking-tight">Designnest</span></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

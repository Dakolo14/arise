"use client"

import { motion } from "framer-motion"
import Image from "next/image"

function InitiativeCard({ title, imageSrc, isFirst }: { title: string; imageSrc?: string; isFirst?: boolean }) {
  if (isFirst) {
    return (
      <div className="bg-[#1E4D97] rounded-3xl p-8 flex flex-col justify-end min-h-[280px] md:min-h-[320px] group cursor-pointer relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#1E4D97]/20">
        <div className="absolute inset-0 bg-[#173f7a] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 flex items-center justify-between w-full">
          <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-wide">{title}</h3>
          <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#1E4D97] transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-200 rounded-3xl min-h-[280px] md:min-h-[320px] relative overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {imageSrc && (
        <Image src={imageSrc} alt={title} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out" />
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute bottom-6 left-6 z-10 transform group-hover:translate-x-2 transition-transform duration-300">
        <h3 className="text-white text-2xl font-semibold tracking-wide">{title}</h3>
      </div>
    </div>
  )
}

const INITIATIVES = [
  { title: "Our Initiatives", isFirst: true },
  { title: "Education Scholarship", imageSrc: "/images/educational-support/2.jpg" },
  { title: "Diabetes Support", imageSrc: "/images/diabetes-support/3.JPG" },
  { title: "Igiogbe Center", imageSrc: "/images/igiogbe-support/1.jpg" },
  { title: "Youth & Leadership", imageSrc: "/images/educational-support/6.jpg" },
  { title: "Senior Citizens", imageSrc: "/images/educational-support/3.JPG" },
]

export function OurInitiatives() {
  return (
    <section className="w-full py-16 md:py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INITIATIVES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <InitiativeCard title={item.title} imageSrc={item.imageSrc} isFirst={item.isFirst} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

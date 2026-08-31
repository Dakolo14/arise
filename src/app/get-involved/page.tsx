"use client"

import { motion } from "framer-motion"
import { PageHero } from "@/components/ui/PageHero"
import { AnimatedButton } from "@/components/ui/AnimatedButton"

const GET_INVOLVED_ITEMS = [
  {
    icon: "🎓",
    title: "Sponsor a Student",
    description: "Give a deserving indigent student the opportunity to access quality education through scholarships and educational support.",
  },
  {
    icon: "💊",
    title: "Donate Medications",
    description: "Help provide essential medications and medical supplies through our healthcare partners.",
  },
  {
    icon: "❤️",
    title: "Support Health Initiatives",
    description: "Help fund free diabetes and blood pressure screening, health education, and medical outreach.",
  },
  {
    icon: "🏗️",
    title: "Sponsor a Project",
    description: "Support impactful projects in education, healthcare, culture, leadership, or senior citizens' welfare.",
  },
  {
    icon: "🤝",
    title: "Partner With Us",
    description: "Collaborate with Arise CSF to expand our reach and transform more lives.",
  },
  {
    icon: "🙋",
    title: "Volunteer",
    description: "Share your time, skills, and expertise to support our mission.",
  },
  {
    icon: "💝",
    title: "Make a Donation",
    description: "Every contribution brings hope, dignity, and opportunity to those who need it most.",
  },
]

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <PageHero
        label="Get Involved"
        title="Be the Heart Behind a Life Changed"
        subtitle="Every act of kindness creates hope. Join us in connecting caring hearts with deserving lives and make a lasting difference in your community."
      />

      {/* Cards Grid */}
      <section className="w-full py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GET_INVOLVED_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            >
              <span className="text-4xl block mb-5 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
              <h3 className="text-xl font-medium text-gray-800 mb-3 group-hover:text-[#1E4D97] transition-colors">{item.title}</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed font-light">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full py-16 md:py-24 px-4 bg-[#1E4D97]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Let&apos;s connect caring hearts! 💚
          </h2>
          <p className="text-white/70 text-lg font-light mb-10">
            Become the reason someone has hope tomorrow.
          </p>
          <AnimatedButton variant="secondary" hasArrow className="px-10 py-4 text-[17px]" href="/contact">
            Contact Us Today
          </AnimatedButton>
        </motion.div>
      </section>
    </div>
  )
}

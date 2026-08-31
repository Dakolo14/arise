"use client"

import { motion } from "framer-motion"
import { PageHero } from "@/components/ui/PageHero"
import { SvgUnderline } from "@/components/ui/SvgUnderline"
import { AnimatedButton } from "@/components/ui/AnimatedButton"

function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center text-gray-400 ${className}`}
    >
      <svg className="w-10 h-10 mb-2 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
      </svg>
      <span className="text-sm font-medium text-center px-4">{label}</span>
    </div>
  )
}

const CORE_VALUES = [
  { icon: "❤️", label: "Compassion" },
  { icon: "🤝", label: "Integrity" },
  { icon: "🌱", label: "Empowerment" },
  { icon: "🌍", label: "Community" },
  { icon: "⭐", label: "Excellence" },
  { icon: "🤲", label: "Service" },
]

const SDGS = [
  { icon: "❤️", label: "SDG 3", title: "Good Health & Well-being" },
  { icon: "🎓", label: "SDG 4", title: "Quality Education" },
  { icon: "⚖️", label: "SDG 10", title: "Reduced Inequalities" },
  { icon: "🏙️", label: "SDG 11", title: "Sustainable Cities & Communities" },
  { icon: "🤝", label: "SDG 17", title: "Partnerships for the Goals" },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <PageHero
        label="About Us"
        title="Who We Are"
        subtitle="Arise Community Support Foundation (Arise CSF) is a nonprofit organization dedicated to connecting caring hearts with lives in need."
      />

      {/* Our Story */}
      <section className="w-full py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6">
              <span className="relative inline-block text-[#1E4D97] text-lg font-medium tracking-wide">
                Our Story
                <SvgUnderline className="opacity-80 stroke-[#1E4D97]" />
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              From Education to Community Transformation
            </h2>
            <div className="space-y-4 text-[15px] text-gray-500 leading-relaxed font-light">
              <p>
                Our journey began in <strong className="text-gray-900 font-medium">2007</strong> with Arise Education Scholarship Foundation, driven by a simple belief: every child deserves access to quality education.
              </p>
              <p>
                As our vision grew beyond education, we expanded into healthcare, culture, leadership, senior citizens&apos; support, and community development.
              </p>
              <p>
                In <strong className="text-gray-900 font-medium">2026</strong>, these efforts were unified under <strong className="text-gray-900 font-medium">Arise Community Support Foundation</strong> — a single organisation connecting caring hearts with lives in need.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full aspect-[4/3] rounded-3xl overflow-hidden"
          >
            <ImagePlaceholder label="Our Story Image" className="w-full h-full" />
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="w-full py-16 md:py-24 px-4 bg-[#F5F8FC]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="relative inline-block text-[#1E4D97] text-lg font-medium tracking-wide mb-4">
              What We Do
              <SvgUnderline className="opacity-80 stroke-[#1E4D97]" />
            </span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🎓", text: "Support education through scholarships and educational assistance." },
              { icon: "🩺", text: "Promote health through diabetes and blood pressure screening, awareness, counseling, and medical support." },
              { icon: "🏛", text: "Preserve culture and promote leadership through The Igiogbe Information Center." },
              { icon: "🌟", text: "Empower young people through leadership development." },
              { icon: "👴👵", text: "Support senior citizens with dignity, care, and community engagement." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:-translate-y-1 transition-all duration-300 hover:shadow-md"
              >
                <span className="text-4xl block mb-6">{item.icon}</span>
                <p className="text-[15px] text-gray-600 leading-relaxed font-light">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="relative inline-block text-[#1E4D97] text-lg font-medium tracking-wide mb-4">
              Our Core Values
              <SvgUnderline className="opacity-80 stroke-[#1E4D97]" />
            </span>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {CORE_VALUES.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-[#F5F8FC] hover:bg-[#E8EFF8] transition-colors duration-300 cursor-default"
              >
                <span className="text-4xl">{v.icon}</span>
                <span className="text-sm font-medium text-gray-900">{v.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDGs */}
      <section className="w-full py-16 md:py-24 px-4 bg-[#1E4D97]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="relative inline-block text-[#7EB8D4] text-lg font-medium tracking-wide mb-4">
              UN Sustainable Development Goals
              <SvgUnderline className="opacity-60 stroke-[#7EB8D4]" />
            </span>
            <p className="text-white/80 text-base mt-6 font-light max-w-2xl mx-auto">
              Our initiatives contribute to the United Nations Sustainable Development Goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {SDGS.map((sdg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors duration-300"
              >
                <span className="text-4xl mb-2">{sdg.icon}</span>
                <span className="text-[#7EB8D4] text-xs font-bold tracking-wider uppercase">{sdg.label}</span>
                <span className="text-white text-sm font-light leading-relaxed">{sdg.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="w-full py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F5F8FC] rounded-3xl p-8 md:p-12 border border-gray-100"
          >
            <span className="relative inline-block text-[#1E4D97] text-lg font-medium tracking-wide mb-6">
              Our Vision
              <SvgUnderline className="opacity-80 stroke-[#1E4D97]" />
            </span>
            <p className="text-gray-600 text-lg leading-relaxed font-light mt-4">
              To build a compassionate society where caring hearts connect with deserving lives, creating lasting hope and opportunity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1E4D97] rounded-3xl p-8 md:p-12 shadow-lg"
          >
            <span className="relative inline-block text-[#7EB8D4] text-lg font-medium tracking-wide mb-6">
              Our Mission
              <SvgUnderline className="opacity-60 stroke-[#7EB8D4]" />
            </span>
            <p className="text-white/90 text-[15px] leading-relaxed font-light mt-4">
              To connect compassionate individuals, organizations, and partners with deserving beneficiaries through education, healthcare, cultural preservation, leadership development, and community support.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <AnimatedButton variant="primary" hasArrow className="px-10 py-4 text-base" href="/get-involved">
            Join Our Mission
          </AnimatedButton>
        </motion.div>
      </section>
    </div>
  )
}

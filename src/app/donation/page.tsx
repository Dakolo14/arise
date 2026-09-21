"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { 
  GraduationCap, 
  HeartPulse, 
  Landmark, 
  Compass, 
  Heart, 
  Layers, 
  Mail, 
  ArrowRight,
  ShieldCheck,
  MessageSquare
} from "lucide-react"
import { FaWhatsapp } from "@/components/ui/SocialIcons"

interface SupportArea {
  id: string
  number: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  whatsappMessage: string
  accentColor: {
    bg: string
    text: string
    border: string
    badge: string
  }
}

const SUPPORT_AREAS: SupportArea[] = [
  {
    id: "education",
    number: "01",
    title: "Education Scholarships",
    description: "Sponsor a deserving student’s education by supporting school fees, books, learning materials or other educational needs. You can also partner with Arise Education Scholarship Foundation to support more students through their education.",
    icon: GraduationCap,
    whatsappMessage: "Hello Arise, I would like to support Education Scholarships. Please let me know the current needs and how I can contribute or partner.",
    accentColor: {
      bg: "bg-blue-50/70",
      text: "text-[#1E4D97]",
      border: "border-blue-100",
      badge: "bg-blue-100/70 text-[#1E4D97]",
    },
  },
  {
    id: "diabetes",
    number: "02",
    title: "Diabetes & Hypertension Support",
    description: "Support Arise Diabetes Support by donating diabetes and hypertension medicines, screening equipment, test strips and other essential supplies. You can also sponsor free community screenings, health education and awareness campaigns.",
    icon: HeartPulse,
    whatsappMessage: "Hello Arise, I would like to support Diabetes & Hypertension Support. Please let me know the current needs and how I can contribute or partner.",
    accentColor: {
      bg: "bg-emerald-50/70",
      text: "text-emerald-700",
      border: "border-emerald-100",
      badge: "bg-emerald-100/70 text-emerald-800",
    },
  },
  {
    id: "culture",
    number: "03",
    title: "Cultural Awareness & Community Programmes",
    description: "Sponsor programmes that promote cultural knowledge, preserve our heritage and encourage learning across generations, including activities at The Igiogbe.",
    icon: Landmark,
    whatsappMessage: "Hello Arise, I would like to support Cultural Awareness & Community Programmes. Please let me know the current needs and how I can contribute or partner.",
    accentColor: {
      bg: "bg-amber-50/70",
      text: "text-amber-800",
      border: "border-amber-100",
      badge: "bg-amber-100/70 text-amber-900",
    },
  },
  {
    id: "youth",
    number: "04",
    title: "Youth & Leadership Development",
    description: "Support mentoring, skills development and leadership programmes that help young people discover their potential and contribute to their communities.",
    icon: Compass,
    whatsappMessage: "Hello Arise, I would like to support Youth & Leadership Development. Please let me know the current needs and how I can contribute or partner.",
    accentColor: {
      bg: "bg-indigo-50/70",
      text: "text-indigo-700",
      border: "border-indigo-100",
      badge: "bg-indigo-100/70 text-indigo-900",
    },
  },
  {
    id: "seniors",
    number: "05",
    title: "Senior Citizens Support",
    description: "Contribute towards the care, welfare and practical needs of older members of our communities.",
    icon: Heart,
    whatsappMessage: "Hello Arise, I would like to support Senior Citizens Support. Please let me know the current needs and how I can contribute or partner.",
    accentColor: {
      bg: "bg-rose-50/70",
      text: "text-rose-700",
      border: "border-rose-100",
      badge: "bg-rose-100/70 text-rose-900",
    },
  },
  {
    id: "admin",
    number: "06",
    title: "Administrative & Operational Support",
    description: "Help sustain the Foundation’s work by contributing towards programme coordination, logistics, administration and essential running costs.",
    icon: Layers,
    whatsappMessage: "Hello Arise, I would like to support Administrative & Operational Support. Please let me know the current needs and how I can contribute or partner.",
    accentColor: {
      bg: "bg-slate-50/80",
      text: "text-slate-800",
      border: "border-slate-200",
      badge: "bg-slate-200/80 text-slate-800",
    },
  },
]

export default function SupportAndPartnerPage() {
  const whatsappNumber = "2348034664190"
  const officialPhoneDisplay = "+234 803 466 4190"
  const officialEmail = "info@arisecsf.org"

  return (
    <div className="flex flex-col w-full bg-[#fcfcfd] text-[#111827] font-sans pb-24 md:pb-32">
      
      {/* 1. Page Header Fold */}
      <section className="w-full pt-12 sm:pt-16 md:pt-24 pb-10 sm:pb-14 px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-b from-[#f4f6fa] via-white to-[#fcfcfd]">
        <div className="w-full max-w-4xl mx-auto text-center">
          
          <motion.h1 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#111] mb-6 leading-[1.15]"
          >
            Support & Partner With Us
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 text-gray-600 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto"
          >
            <p>
              Every act of support can make a meaningful difference. Whether you wish to sponsor a deserving student, contribute healthcare supplies, support community programmes or help with the Foundation’s running costs, we would be glad to discuss how you can get involved.
            </p>
            <p className="text-gray-900 font-normal text-base sm:text-lg pt-1">
              Choose an area close to your heart and contact us to learn about current needs and partnership opportunities.
            </p>
          </motion.div>

          {/* Quick Contact Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 pt-4"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Arise, I would like to learn more about supporting and partnering with Arise Community Support Foundation.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-medium shadow-sm transition-all"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Chat on WhatsApp: {officialPhoneDisplay}</span>
            </a>

            <a
              href={`mailto:${officialEmail}?subject=${encodeURIComponent("Partnership & Support Inquiry - Arise CSF")}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 text-sm font-medium shadow-xs transition-all"
            >
              <Mail className="w-4 h-4 text-[#1E4D97]" />
              <span>Email: {officialEmail}</span>
            </a>
          </motion.div>

        </div>
      </section>

      {/* 2. Ways You Can Support Grid */}
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pt-6 sm:pt-10">
        <div className="w-full max-w-7xl mx-auto">
          
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#111]">
              Ways You Can Support
            </h2>
            <p className="text-gray-500 font-light text-sm sm:text-base mt-2">
              Select an area below to inquire directly about active needs, supplies, and sponsorship opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SUPPORT_AREAS.map((area, index) => {
              const Icon = area.icon
              const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(area.whatsappMessage)}`
              const emailUrl = `mailto:${officialEmail}?subject=${encodeURIComponent(`Inquiry: Supporting ${area.title}`)}&body=${encodeURIComponent(area.whatsappMessage)}`

              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs hover:shadow-lg hover:border-gray-300 transition-all duration-300 group"
                >
                  <div>
                    {/* Card Header: Icon & Index Number */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-2xl ${area.accentColor.bg} ${area.accentColor.text} flex items-center justify-center border ${area.accentColor.border} group-hover:scale-105 transition-transform duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-medium text-gray-400">
                        {area.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight mb-3 group-hover:text-[#1E4D97] transition-colors">
                      {area.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed mb-8">
                      {area.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#1E4D97] hover:bg-[#163a73] text-white text-xs sm:text-sm font-medium transition-colors shadow-xs"
                    >
                      <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                      <span>Enquire About Supporting</span>
                    </a>
                    
                    <a
                      href={emailUrl}
                      title="Enquire via Email"
                      className="inline-flex items-center justify-center px-3.5 py-3 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-gray-900 border border-gray-200 transition-colors text-xs font-medium"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </section>

      {/* 3. Privacy & Personal Coordination Reassurance */}
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 mt-14 sm:mt-18">
        <div className="w-full max-w-7xl mx-auto">
          <div className="bg-[#f0f4fa] rounded-3xl p-6 sm:p-10 border border-[#1E4D97]/15 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
            <div className="w-12 h-12 rounded-2xl bg-[#1E4D97] text-white flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                Direct & Private Support Coordination
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                To ensure personal accountability, alignment, and security, we do not publish banking details publicly on the website. Once you get in touch regarding your preferred area of support, our foundation leadership will share the relevant contribution and logistics details with you privately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Closing Invitation & General Inquiries */}
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 mt-14 sm:mt-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1E4D97] to-[#0f172a] text-white p-8 sm:p-12 md:p-16 shadow-xl">
            
            {/* Background subtle image pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <Image 
                src="/images/educational-support/2.jpg" 
                alt="Arise CSF Community Support" 
                fill 
                className="object-cover" 
              />
            </div>

            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-blue-200 block mb-3">
                Partnership & Collaboration
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white mb-4 leading-snug">
                Have another way you would like to help?
              </h2>

              <p className="text-gray-200 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-8 sm:mb-10">
                We welcome individuals, families, businesses and organisations interested in supporting or partnering with us. Contact us to discuss your ideas and how your contribution can make a difference.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Arise, I would like to discuss partnering with Arise Community Support Foundation.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-sm sm:text-base shadow-md transition-all cursor-pointer"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Chat With Us on WhatsApp: {officialPhoneDisplay}</span>
                </a>

                <a
                  href={`mailto:${officialEmail}?subject=${encodeURIComponent("Support & Partnership Discussion - Arise CSF")}`}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base border border-white/25 backdrop-blur-sm transition-all"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us: {officialEmail}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

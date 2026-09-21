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
  ArrowUpRight,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from "lucide-react"
import { FaWhatsapp } from "@/components/ui/SocialIcons"

interface SupportArea {
  id: string
  category: string
  title: string
  description: string
  image: string
  icon: React.ComponentType<{ className?: string }>
  whatsappMessage: string
}

const SUPPORT_AREAS: SupportArea[] = [
  {
    id: "education",
    category: "Education",
    title: "Education Scholarships",
    description: "Sponsor a deserving student’s education by supporting school fees, books, learning materials or other educational needs. You can also partner with Arise Education Scholarship Foundation to support more students through their education.",
    image: "/images/educational-support/1.jpg",
    icon: GraduationCap,
    whatsappMessage: "Hello Arise, I would like to support Education Scholarships. Please let me know the current needs and how I can contribute or partner.",
  },
  {
    id: "diabetes",
    category: "Healthcare",
    title: "Diabetes & Hypertension Support",
    description: "Support Arise Diabetes Support by donating diabetes and hypertension medicines, screening equipment, test strips and other essential supplies. You can also sponsor free community screenings, health education and awareness campaigns.",
    image: "/images/diabetes-support/2.jpg",
    icon: HeartPulse,
    whatsappMessage: "Hello Arise, I would like to support Diabetes & Hypertension Support. Please let me know the current needs and how I can contribute or partner.",
  },
  {
    id: "culture",
    category: "Heritage",
    title: "Cultural Awareness & Community Programmes",
    description: "Sponsor programmes that promote cultural knowledge, preserve our heritage and encourage learning across generations, including activities at The Igiogbe.",
    image: "/images/igiogbe-support/1.jpg",
    icon: Landmark,
    whatsappMessage: "Hello Arise, I would like to support Cultural Awareness & Community Programmes. Please let me know the current needs and how I can contribute or partner.",
  },
  {
    id: "youth",
    category: "Empowerment",
    title: "Youth & Leadership Development",
    description: "Support mentoring, skills development and leadership programmes that help young people discover their potential and contribute to their communities.",
    image: "/images/educational-support/6.jpg",
    icon: Compass,
    whatsappMessage: "Hello Arise, I would like to support Youth & Leadership Development. Please let me know the current needs and how I can contribute or partner.",
  },
  {
    id: "seniors",
    category: "Welfare",
    title: "Senior Citizens Support",
    description: "Contribute towards the care, welfare and practical needs of older members of our communities.",
    image: "/images/diabetes-support/9.jpg",
    icon: Heart,
    whatsappMessage: "Hello Arise, I would like to support Senior Citizens Support. Please let me know the current needs and how I can contribute or partner.",
  },
  {
    id: "admin",
    category: "Operations",
    title: "Administrative & Operational Support",
    description: "Help sustain the Foundation’s work by contributing towards programme coordination, logistics, administration and essential running costs.",
    image: "/images/educational-support/7.jpg",
    icon: Layers,
    whatsappMessage: "Hello Arise, I would like to support Administrative & Operational Support. Please let me know the current needs and how I can contribute or partner.",
  },
]

export default function SupportAndPartnerPage() {
  const whatsappNumber = "2348034664190"
  const officialEmail = "info@arisecsf.org"

  return (
    <div className="w-full bg-[#FCFCFD] text-[#0F172A] font-sans selection:bg-[#1E4D97] selection:text-white">
      
      {/* 1. Senior Editorial Hero: Warm, Human, & Balanced */}
      <section className="relative w-full pt-8 sm:pt-14 md:pt-20 pb-16 sm:pb-20 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden border-b border-slate-100">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100/70 text-xs font-medium text-[#1E4D97] mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#1E4D97]" />
              <span>Partnership & Giving</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-slate-900 mb-6 leading-[1.12]"
            >
              Support & Partner With Us
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4 text-slate-600 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl"
            >
              <p>
                Every act of support can make a meaningful difference. Whether you wish to sponsor a deserving student, contribute healthcare supplies, support community programmes or help with the Foundation’s running costs, we would be glad to discuss how you can get involved.
              </p>
              <p className="text-slate-900 font-normal text-sm sm:text-base pt-1">
                Choose an area close to your heart and contact us to learn about current needs and partnership opportunities.
              </p>
            </motion.div>

            {/* Crisp, Senior Button Group: Zero sentence text */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap items-center gap-3.5 pt-8"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Arise, I would like to learn more about supporting and partnering with Arise Community Support Foundation.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1E4D97] hover:bg-[#163a75] text-white text-sm font-medium transition-all shadow-sm hover:shadow active:scale-[0.98]"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${officialEmail}?subject=${encodeURIComponent("Partnership & Support Inquiry - Arise CSF")}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium border border-slate-200/80 transition-all shadow-2xs hover:border-slate-300 active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Email</span>
              </a>

              <span className="text-xs text-slate-400 font-light pl-1">
                Direct coordination • Since 2007
              </span>
            </motion.div>
          </div>

          {/* Right Column: Authentic Human Imagery (No AI wireframe feel) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
              <Image 
                src="/images/educational-support/1.jpg" 
                alt="Arise Foundation community scholarship outreach" 
                fill 
                className="object-cover" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-sm flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-medium">Grassroots Impact</p>
                  <p className="text-sm font-medium text-slate-900">Serving communities across Nigeria</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. Ways You Can Support: Senior Editorial Grid */}
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-24 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16 pb-5 border-b border-slate-100">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#1E4D97] font-semibold block mb-2">
              Focus Areas
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-slate-900">
              Ways You Can Support
            </h2>
            <p className="text-slate-500 font-light text-sm sm:text-base mt-2 max-w-xl">
              Choose an area close to your heart. Connect directly with our team to learn current requirements and support opportunities.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-400">
            <span>6 Key Initiatives</span>
          </div>
        </div>

        {/* 6 Editorial Initiative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {SUPPORT_AREAS.map((area, index) => {
            const Icon = area.icon
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(area.whatsappMessage)}`
            const emailUrl = `mailto:${officialEmail}?subject=${encodeURIComponent(`Inquiry: Supporting ${area.title}`)}&body=${encodeURIComponent(area.whatsappMessage)}`

            return (
              <motion.article
                key={area.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col justify-between bg-white rounded-3xl overflow-hidden border border-slate-200/70 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Visual Header with Real Image */}
                  <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                    
                    {/* Floating Category Pill */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-slate-800 text-xs font-medium shadow-xs">
                      <Icon className="w-3.5 h-3.5 text-[#1E4D97]" />
                      <span>{area.category}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3 group-hover:text-[#1E4D97] transition-colors leading-snug">
                      {area.title}
                    </h3>
                    <p className="text-slate-600 text-sm font-light leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Bar: Crisp, neat, zero sentence text */}
                <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors py-1 px-2.5 rounded-lg bg-emerald-50/80 hover:bg-emerald-100"
                  >
                    <FaWhatsapp className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <a
                    href={emailUrl}
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors py-1 px-2.5 rounded-lg hover:bg-slate-50"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>Email</span>
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      {/* 3. Transparent Process & Private Coordination (Seamless Trust Flow) */}
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-12 bg-slate-50/60 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center shrink-0 text-[#1E4D97] font-semibold text-sm">
                1
              </div>
              <div>
                <h4 className="text-base font-medium text-slate-900 mb-1">Choose an Area</h4>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                  Select a cause aligned with your heart—scholarships, diabetes outreach, culture, or youth.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center shrink-0 text-[#1E4D97] font-semibold text-sm">
                2
              </div>
              <div>
                <h4 className="text-base font-medium text-slate-900 mb-1">Connect Directly</h4>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                  Reach out via WhatsApp or Email to discuss immediate supplies, student rosters, or community dates.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center shrink-0 text-[#1E4D97] font-semibold text-sm">
                3
              </div>
              <div>
                <h4 className="text-base font-medium text-slate-900 mb-1">Direct Coordination</h4>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                  Contribution details are shared privately and verified transparently by Foundation leadership.
                </p>
              </div>
            </div>
          </div>

          {/* Quiet, Dignified Security Note */}
          <div className="mt-6 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm text-slate-500 font-light">
            <div className="flex items-center gap-2 text-slate-800 font-medium shrink-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Private Coordination Policy:</span>
            </div>
            <p>
              To ensure personal alignment and security, we do not publish banking details on the website. Once you get in touch regarding your preferred area of support, our team shares relevant contribution and logistics details privately.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Closing Invitation: Modern Warm Editorial Banner */}
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-20 sm:py-28 max-w-7xl mx-auto">
        <div className="w-full rounded-3xl bg-[#0F172A] text-white p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Background Accent */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#1E4D97]/30 blur-3xl pointer-events-none" />
          <div className="absolute right-1/4 -top-20 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#7EB8D4] font-medium block mb-3">
              Open Collaboration
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white mb-5 leading-tight">
              Have another way you would like to help?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8 sm:mb-10 max-w-2xl">
              We welcome individuals, families, businesses and organisations interested in supporting or partnering with us. Contact us to discuss your ideas and how your contribution can make a difference.
            </p>

            {/* Crisp Buttons: Zero sentence text */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Arise, I would like to discuss partnering with Arise Community Support Foundation.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-medium transition-all shadow-sm active:scale-[0.98]"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${officialEmail}?subject=${encodeURIComponent("Support & Partnership Discussion - Arise CSF")}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/20 transition-all active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-slate-300" />
                <span>Email</span>
              </a>

              <span className="text-xs text-slate-400 font-light sm:ml-2">
                Direct: +234 803 466 4190 • info@arisecsf.org
              </span>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { AnimatedButton } from "@/components/ui/AnimatedButton"
import { Heart, ShieldCheck, Zap, Users, Star, HelpingHand, Play, ExternalLink } from "lucide-react"

const CORE_VALUES = [
  { icon: Heart, title: "Compassion", desc: "Acting with deep empathy and care." },
  { icon: ShieldCheck, title: "Integrity", desc: "Upholding trust in all we do." },
  { icon: Zap, title: "Empowerment", desc: "Lifting others to their full potential." },
  { icon: Users, title: "Community", desc: "Building strong, united networks." },
  { icon: Star, title: "Excellence", desc: "Delivering our best every day." },
  { icon: HelpingHand, title: "Service", desc: "Selflessly helping those in need." },
]

// When uploaded to YouTube, paste the YouTube video ID here (e.g. "dQw4w9WgXcQ" or from https://youtu.be/ID)
const FEATURED_COMMUNITY_VIDEO = {
  title: "Education & Grassroots Community Impact Documentary",
  thumbnail: "/images/educational-support/2.jpg",
  duration: "Full Video",
  youtubeId: "", // Paste YouTube video ID or link here
}

export default function AboutPage() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false)

  return (
    <div className="flex flex-col w-full bg-[#f9f9fa] text-[#111111] font-sans selection:bg-[#1E4D97] selection:text-white pb-20 md:pb-28">
      
      {/* 1. Header & Story Write-up (Top of page fold) */}
      <section className="w-full pt-10 sm:pt-14 md:pt-20 px-4 sm:px-8 md:px-12 lg:px-20">
        {/* Main Title */}
        <div className="text-center w-full mb-12 sm:mb-16 md:mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#111] mb-4 sm:mb-6 leading-[1.15]"
          >
            Where compassion meets action
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-gray-600 text-base sm:text-lg md:text-xl font-light leading-relaxed"
          >
            Connecting caring hearts with lives in need, empowering communities, and building lasting pathways of hope and opportunity.
          </motion.p>
        </div>

        {/* Short Write-up: Building bridges of hope */}
        <div className="w-full mb-14 sm:mb-20 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start w-full">
            <div className="lg:col-span-5">
              <span className="text-[#1E4D97] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 block">
                Our Origin & Mission
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111] leading-snug sm:leading-tight">
                Building bridges of hope for everyone
              </h2>
            </div>
            <div className="lg:col-span-7 text-gray-600 font-light leading-relaxed space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg">
              <p>
                Our journey began in <strong className="text-[#111] font-medium">2007</strong> with the <strong className="text-[#111] font-medium">Arise Education Scholarship Foundation</strong>, driven by a simple belief: every child deserves access to quality education.
              </p>
              <p>
                In <strong className="text-[#111] font-medium">2026</strong>, our expanded efforts across healthcare, cultural heritage, leadership, and senior citizens support were unified under <strong className="text-[#111] font-medium">Arise Community Support Foundation</strong>. By delivering hands-on, high-impact initiatives, we are redefining community empowerment.
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-10 pt-8 sm:pt-12 mt-8 sm:mt-12 border-t border-gray-200 w-full">
            <div className="pr-2 sm:pr-0">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-[#1E4D97] mb-1 sm:mb-2">2007</p>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 font-light">Year Founded</p>
            </div>
            <div className="border-l border-gray-200 pl-4 sm:pl-6 md:pl-10">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-[#1E4D97] mb-1 sm:mb-2">10k+</p>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 font-light">Lives Touched</p>
            </div>
            <div className="border-t sm:border-t-0 md:border-l border-gray-200 pt-4 sm:pt-0 pl-0 md:pl-10">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-[#1E4D97] mb-1 sm:mb-2">17</p>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 font-light">SDGs Supported</p>
            </div>
            <div className="border-t sm:border-t-0 border-l border-gray-200 pt-4 sm:pt-0 pl-4 sm:pl-6 md:pl-10">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-[#1E4D97] mb-1 sm:mb-2">5+</p>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 font-light">Core Initiatives</p>
            </div>
          </div>
        </div>

        {/* Impact Gallery Grid (Masonry on Desktop, Clean Proportional Cards on Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 h-auto lg:h-[700px] w-full">
          {/* Large Left Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-1 lg:col-span-4 rounded-3xl overflow-hidden relative h-[260px] sm:h-[360px] lg:h-full bg-gray-200 shadow-sm"
          >
            <Image src="/images/educational-support/1.jpg" alt="Arise Education outreach" fill className="object-cover" />
          </motion.div>

          {/* Right Side Grid */}
          <div className="col-span-1 lg:col-span-8 flex flex-col gap-4 sm:gap-6 h-auto lg:h-full">
            {/* Top Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 h-auto lg:h-1/2 w-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-[#1E4D97] rounded-3xl p-6 sm:p-8 md:p-10 min-h-[170px] sm:min-h-0 flex flex-col justify-end text-white relative overflow-hidden shadow-sm"
              >
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-1.5 sm:mb-2 tracking-tighter">10k+</h3>
                <p className="text-sm sm:text-base lg:text-lg font-light opacity-90">Beneficiaries Across Edo State</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gray-200 rounded-3xl relative overflow-hidden h-[240px] sm:h-auto lg:h-full shadow-sm"
              >
                <Image src="/images/diabetes-support/7.jpg" alt="Edo State Ministry of Health Partnership Outreach" fill className="object-cover" />
              </motion.div>
            </div>
            
            {/* Bottom Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 h-auto lg:h-1/2 w-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gray-200 rounded-3xl relative overflow-hidden h-[240px] sm:h-auto lg:h-full shadow-sm"
              >
                <Image src="/images/igiogbe-support/1.jpg" alt="The Igiogbe Information Center" fill className="object-cover" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-[#111111] rounded-3xl p-6 sm:p-8 md:p-10 min-h-[170px] sm:min-h-0 flex flex-col justify-end text-white relative overflow-hidden shadow-sm"
              >
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-1.5 sm:mb-2 tracking-tighter">5+</h3>
                <p className="text-sm sm:text-base lg:text-lg font-light opacity-90">Active Community Programs</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Values */}
      <section className="w-full py-16 sm:py-20 md:py-28 px-4 sm:px-8 md:px-12 lg:px-20 bg-white rounded-3xl mt-14 sm:mt-20">
        <div className="w-full">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-[#111] mb-3 sm:mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-500 font-light leading-relaxed text-sm sm:text-base md:text-lg">
              We believe in forging strong relationships with our communities, partners, and beneficiaries, based on trust and mutual respect.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-x-16 text-left w-full">
            {CORE_VALUES.map((val, i) => (
              <div key={i} className="flex flex-col gap-2.5 sm:gap-3">
                <div className="flex items-center gap-2.5 text-[#111]">
                  <val.icon className="w-5 h-5 text-[#1E4D97] stroke-[2]" />
                  <h4 className="text-base sm:text-lg font-medium">{val.title}</h4>
                </div>
                <p className="text-gray-500 font-light leading-relaxed text-sm sm:text-[15px]">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Strategic Institutional Partners */}
      <section className="w-full py-16 sm:py-20 md:py-28 px-4 sm:px-8 md:px-12 lg:px-20 mt-14 sm:mt-20 text-center">
        <div className="w-full">
          <div className="mb-10 sm:mb-14 md:mb-18 w-full">
            <span className="text-[#1E4D97] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 sm:mb-3 block">
              Official Collaboration
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-[#111] mb-3 sm:mb-4">
              Our Strategic Institutional Partners
            </h2>
            <p className="text-gray-600 font-light text-sm sm:text-base md:text-lg leading-relaxed">
              We are honored to collaborate with key public institutions and healthcare leaders to deliver vital screening, treatment, and community support across Edo State.
            </p>
          </div>
          
          {/* Institutional Partner Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left w-full">
            {/* Edo State Ministry of Health */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1E4D97] text-xs font-medium mb-4">
                  Healthcare Partnership
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  Edo State Ministry of Health
                </h3>
                <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
                  Official partner for the <strong>Arise Diabetes Support Initiative</strong>. Launched in partnership with the State Ministry of Health to provide free diabetes screenings, hypertension testing, vital medical consultations, and health education to thousands of residents.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>Edo State Government</span>
                <span className="font-medium text-[#1E4D97]">Official Public Health Partner</span>
              </div>
            </div>

            {/* Central Hospital, Edo State */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-medium mb-4">
                  Clinical & Referral Partner
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  Central Hospital, Edo State
                </h3>
                <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
                  Collaborating on clinical care, medical professional support, and referral pathways for diagnosed beneficiaries requiring specialized treatment, continuous monitoring, and ongoing management in Benin City.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>Benin City, Edo State</span>
                <span className="font-medium text-[#1E4D97]">Clinical Partner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Vision / Mission (Founder Note style) */}
      <section className="w-full py-16 sm:py-20 md:py-28 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 md:gap-20 items-center w-full">
            
            <div className="md:col-span-5 md:col-start-8 order-1 md:order-2 rounded-3xl overflow-hidden relative h-[320px] sm:h-[420px] md:h-[520px] bg-gray-200 shadow-sm border border-gray-100">
              <Image src="/images/diabetes-support/9.jpg" alt="Rex Osagiede - Founder, Arise CSF" fill className="object-cover object-top" />
            </div>

            <div className="md:col-span-6 md:col-start-1 md:row-start-1 order-2 md:order-1 flex flex-col gap-6 sm:gap-8">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-[#111]">
                A Word on Our Vision
              </h2>
              <div className="text-gray-500 font-light leading-relaxed space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg">
                <p>
                  Our vision is simple: to build a compassionate society where caring hearts connect with deserving lives, creating lasting hope and opportunity.
                </p>
                <p>
                  This is not just an organization. It is a community, a space where ideas grow, challenges are met with creativity, and every individual matters. None of this would be possible without your support, trust, and belief in what we stand for. Thank you for being a part of this story.
                </p>
                <p>
                  Together, we are building something truly special, and I can&apos;t wait to see what the future holds.
                </p>
              </div>
              <div className="mt-2 sm:mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 sm:gap-8">
                <div>
                  <p className="font-semibold text-[#111] text-base sm:text-lg">Rex Osagiede</p>
                  <p className="text-gray-400 font-light text-xs sm:text-sm">Founder, Arise CSF</p>
                </div>
                <AnimatedButton href="/rex-osagiede" variant="primary" hasArrow className="px-6 py-2.5">
                  Hear Founder Story
                </AnimatedButton>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Videos */}
      <section className="w-full py-16 sm:py-20 md:py-28 px-4 sm:px-8 md:px-12 lg:px-20 mt-14 sm:mt-16">
        <div className="w-full">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-[#111] mb-3 sm:mb-6">
              Trusted by the community
            </h2>
            <p className="text-gray-500 font-light text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Hear directly from the individuals and communities whose lives have been transformed through our initiatives.
            </p>
          </div>

          {/* Single full-width featured video container */}
          <div className="w-full">
            <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-xl border border-gray-200/80 group">
              {isPlayingVideo && FEATURED_COMMUNITY_VIDEO.youtubeId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${FEATURED_COMMUNITY_VIDEO.youtubeId}?autoplay=1&rel=0`}
                  title={FEATURED_COMMUNITY_VIDEO.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div 
                  onClick={() => {
                    if (FEATURED_COMMUNITY_VIDEO.youtubeId) {
                      setIsPlayingVideo(true)
                    } else {
                      window.open("https://youtube.com/@theigiogbe?si=plHGstVxhLyFs9P_", "_blank", "noopener,noreferrer")
                    }
                  }}
                  className="relative w-full h-full cursor-pointer select-none"
                >
                  <Image
                    src={FEATURED_COMMUNITY_VIDEO.thumbnail}
                    alt={FEATURED_COMMUNITY_VIDEO.title}
                    fill
                    priority
                    className="object-cover group-hover:scale-102 transition-transform duration-700"
                  />
                  
                  {/* Dark gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25 group-hover:from-black/75 group-hover:via-black/25 transition-colors" />

                  {/* Center Play Button */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center border border-white/60 group-hover:scale-110 group-hover:bg-[#1E4D97] transition-all duration-300 shadow-2xl">
                      <Play className="w-7 sm:w-9 md:w-11 h-7 sm:h-9 md:h-11 text-white fill-white ml-1" />
                    </div>
                    <span className="mt-4 text-xs sm:text-sm font-medium tracking-wide text-white/95 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                      Click to Watch Community Impact Story
                    </span>
                  </div>

                  {/* Bottom Information Bar */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
                    <div className="max-w-2xl">
                      <h3 className="text-base sm:text-xl md:text-2xl font-medium text-white drop-shadow-md leading-snug">
                        {FEATURED_COMMUNITY_VIDEO.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 font-light mt-1 line-clamp-1 sm:line-clamp-none">
                        Educational scholarship awards, grassroots diabetes screenings, and youth leadership in action.
                      </p>
                    </div>

                    <a
                      href="https://youtube.com/@theigiogbe?si=plHGstVxhLyFs9P_"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 self-start sm:self-auto text-xs font-semibold px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white backdrop-blur-md transition-colors shrink-0 shadow-md"
                    >
                      <span>YouTube Channel</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

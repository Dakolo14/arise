"use client"

import React, { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Metadata } from "next"
import { AnimatedButton } from "@/components/ui/AnimatedButton"
import { Heart, ShieldCheck, Zap, Users, Star, HelpingHand, LayoutGrid, Grid2X2, Command, Code, Disc, LayoutTemplate, Hexagon, PieChart, ChevronLeft, ChevronRight, Play } from "lucide-react"

const CORE_VALUES = [
  { icon: Heart, title: "Compassion", desc: "Acting with deep empathy and care." },
  { icon: ShieldCheck, title: "Integrity", desc: "Upholding trust in all we do." },
  { icon: Zap, title: "Empowerment", desc: "Lifting others to their full potential." },
  { icon: Users, title: "Community", desc: "Building strong, united networks." },
  { icon: Star, title: "Excellence", desc: "Delivering our best every day." },
  { icon: HelpingHand, title: "Service", desc: "Selflessly helping those in need." },
]

const TEAM = [
  { name: "Team Member Name", role: "Co-Founder", img: "" },
  { name: "Team Member Name", role: "Head of Programs", img: "" },
  { name: "Team Member Name", role: "Community Lead", img: "" },
  { name: "Team Member Name", role: "Medical Director", img: "" },
]

const VIDEOS = [
  { title: "Education Impact Story", thumbnail: "/images/educational-support/2.jpg", duration: "3:42" },
  { title: "Healthcare Outreach", thumbnail: "/images/diabetes-support/2.jpg", duration: "2:15" },
  { title: "Community Transformation", thumbnail: "/images/igiogbe-support/1.jpg", duration: "5:04" },
]

export default function AboutPage() {
  const carouselRef = useRef<HTMLDivElement>(null)
  
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col w-full bg-[#f9f9fa] text-[#111111] font-sans selection:bg-[#1E4D97] selection:text-white pb-24">
      
      {/* 1. Hero & Masonry Grid */}
      <section className="w-full pt-12 md:pt-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#111] mb-6 leading-[1.1]"
            >
              Where compassion meets action
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-gray-500 text-base md:text-lg font-light max-w-2xl mx-auto"
            >
              Our mission is to bridge the gap between those who care and those in need, ensuring every individual can thrive in a supportive community.
            </motion.p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 h-auto lg:h-[700px]">
            {/* Large Left Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-1 lg:col-span-4 rounded-[2rem] overflow-hidden relative h-[400px] lg:h-full bg-gray-200"
            >
              <Image src="/images/educational-support/1.jpg" alt="Our impact" fill className="object-cover" />
            </motion.div>

            {/* Right Side Grid */}
            <div className="col-span-1 lg:col-span-8 flex flex-col gap-4 lg:gap-6 h-full">
              {/* Top Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 h-[400px] lg:h-1/2">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-[#1E4D97] rounded-[2rem] p-8 md:p-12 flex flex-col justify-end text-white relative overflow-hidden"
                >
                  <h3 className="text-6xl lg:text-7xl font-semibold mb-2 tracking-tighter">10k+</h3>
                  <p className="text-xl font-light opacity-90">Lives Touched</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-gray-200 rounded-[2rem] relative overflow-hidden h-[300px] md:h-full"
                >
                  <Image src="/images/diabetes-support/1.jpg" alt="Community support" fill className="object-cover" />
                </motion.div>
              </div>
              
              {/* Bottom Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 h-[400px] lg:h-1/2">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="bg-gray-200 rounded-[2rem] relative overflow-hidden h-[300px] md:h-full"
                >
                  <Image src="/images/igiogbe-support/4.JPG" alt="Igiogbe Center" fill className="object-cover" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-[#111111] rounded-[2rem] p-8 md:p-12 flex flex-col justify-end text-white relative overflow-hidden"
                >
                  <h3 className="text-6xl lg:text-7xl font-semibold mb-2 tracking-tighter">5+</h3>
                  <p className="text-xl font-light opacity-90">Core Initiatives</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="w-full py-24 md:py-32 px-6 bg-white mt-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-20">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#111] leading-[1.2]">
              Building bridges of hope for everyone
            </h2>
            <div className="text-gray-500 font-light leading-relaxed space-y-6">
              <p>
                Our journey began in <strong className="text-[#111] font-medium">2007</strong> with Arise Education Scholarship Foundation, driven by a simple belief: every child deserves access to quality education.
              </p>
              <p>
                In <strong className="text-[#111] font-medium">2026</strong>, our expanded efforts across healthcare, culture, leadership, and senior support were unified under <strong className="text-[#111] font-medium">Arise Community Support Foundation</strong>. By delivering impactful initiatives, we are redefining community empowerment.
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-16 border-t border-gray-100">
            <div>
              <p className="text-5xl md:text-6xl font-semibold tracking-tighter text-[#111] mb-2">2007</p>
              <p className="text-sm text-gray-500 font-light">Year Founded</p>
            </div>
            <div className="border-l border-gray-100 pl-8 md:pl-12">
              <p className="text-5xl md:text-6xl font-semibold tracking-tighter text-[#111] mb-2">10k+</p>
              <p className="text-sm text-gray-500 font-light">Lives Touched</p>
            </div>
            <div className="border-l border-gray-100 pl-8 md:pl-12">
              <p className="text-5xl md:text-6xl font-semibold tracking-tighter text-[#111] mb-2">17</p>
              <p className="text-sm text-gray-500 font-light">SDGs Supported</p>
            </div>
            <div className="border-l border-gray-100 pl-8 md:pl-12">
              <p className="text-5xl md:text-6xl font-semibold tracking-tighter text-[#111] mb-2">5+</p>
              <p className="text-sm text-gray-500 font-light">Active Initiatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="w-full py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 md:mb-24 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#111] mb-6">
              Our core values
            </h2>
            <p className="text-gray-500 font-light leading-relaxed">
              We believe in forging strong relationships with our communities, partners, and beneficiaries, based on trust and mutual respect.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12 lg:gap-x-16 text-left">
            {CORE_VALUES.map((val, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5 text-[#111]">
                  <val.icon className="w-5 h-5 stroke-[1.5]" />
                  <h4 className="text-[17px] font-medium">{val.title}</h4>
                </div>
                <p className="text-gray-500 font-light leading-relaxed text-[15px]">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Supported By Logos */}
      <section className="w-full py-20 md:py-28 px-6 bg-white text-center">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#111] mb-4">
              Backed by the best
            </h2>
            <p className="text-gray-500 font-light text-sm md:text-base max-w-xl mx-auto">
              We're proud to be supported by a network of world-class partners who share our vision for community empowerment and excellence.
            </p>
          </div>
          
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

      {/* 5. Vision / Mission (Founder Note style) */}
      <section className="w-full py-24 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
            
            <div className="md:col-span-5 md:col-start-8 order-1 md:order-2 rounded-[2rem] overflow-hidden relative h-[500px] bg-gray-200">
              <Image src="/images/igiogbe-support/7.JPG" alt="Our Leadership" fill className="object-cover" />
            </div>

            <div className="md:col-span-6 md:col-start-1 md:row-start-1 order-2 md:order-1 flex flex-col gap-8">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#111]">
                A Word on Our Vision
              </h2>
              <div className="text-gray-500 font-light leading-relaxed space-y-6 text-lg">
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
              <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-start gap-8">
                <div>
                  <p className="font-semibold text-[#111] text-lg">Rex Osagiede</p>
                  <p className="text-gray-400 font-light">Founder, Arise CSF</p>
                </div>
                <AnimatedButton href="/rex-osagiede" variant="primary" hasArrow className="px-6 py-2.5">
                  Hear Founder Story
                </AnimatedButton>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Meet The Team */}
      <section className="w-full py-24 md:py-32 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#111] mb-6">
                Meet the team
              </h2>
              <p className="text-gray-500 font-light">
                Behind every great initiative is a team of passionate innovators, problem-solvers, and visionaries.
              </p>
            </div>
            
            {/* Carousel Controls */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 text-[#111] hover:bg-gray-50 transition-colors"
                aria-label="Previous team member"
              >
                <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 text-[#111] hover:bg-gray-50 transition-colors"
                aria-label="Next team member"
              >
                <ChevronRight className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>
          </div>

          <div 
            ref={carouselRef}
            className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          >
            {TEAM.map((member, i) => (
              <div key={i} className="flex flex-col gap-4 min-w-[280px] md:min-w-[320px] snap-start">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200 border-dashed">
                  {member.img ? (
                    <Image src={member.img} alt={member.name} fill className="object-cover" />
                  ) : (
                    <Users className="w-16 h-16 text-gray-300 stroke-[1.5]" />
                  )}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#111]">{member.name}</h4>
                  <p className="text-gray-500 font-light text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Videos */}
      <section className="w-full py-24 md:py-32 px-6 bg-[#fcfcfd]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#1E4D97] mb-4 bg-[#1E4D97]/10 px-4 py-2 rounded-full">
              ✦ Impact Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#111] mb-6">
              Trusted by the community
            </h2>
            <p className="text-gray-500 font-light max-w-2xl mx-auto">
              Hear directly from the individuals and communities whose lives have been transformed through our initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {VIDEOS.map((video, i) => (
              <div key={i} className="flex flex-col gap-4 group cursor-pointer">
                <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-gray-200 shadow-sm">
                  <Image src={video.thumbnail} alt={video.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <h4 className="text-lg font-medium text-[#111] px-2">{video.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

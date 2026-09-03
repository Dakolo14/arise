"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { 
  ShieldCheck, 
  Heart, 
  GraduationCap, 
  HeartPulse, 
  Users, 
  HelpCircle,
  Award
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { GivingWidget } from "@/components/donation/GivingWidget"

const PILLARS = [
  {
    icon: GraduationCap,
    title: "Education Scholarships",
    desc: "Tuition, textbooks, and supplies for promising pupils across Edo State.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Diabetes Care",
    desc: "Free diagnostic screenings, glucometers, and critical medications.",
  },
  {
    icon: Users,
    title: "Senior Citizens Care",
    desc: "Nutritional food boxes, home wellness checks, and companionship.",
  },
]

const FAQS = [
  {
    q: "How is my donation used?",
    a: "100% of public donations go directly toward grassroots community programs. Our administrative overhead is covered separately by founding trustees, ensuring maximum impact for every Naira, Dollar, and Pound contributed.",
  },
  {
    q: "Can I donate from outside Nigeria?",
    a: "Yes! International and diaspora donors can give via our online card payment gateway (accepting USD, GBP, EUR) or directly through our Domiciliary foreign currency bank accounts with Zenith Bank.",
  },
  {
    q: "Can I designate my gift to a specific initiative?",
    a: "Absolutely. You can choose whether your contribution goes to Education Scholarships, Free Diabetes Care, Youth Empowerment, or Senior Welfare directly in the giving form.",
  },
  {
    q: "Do I receive a receipt for my contribution?",
    a: "Yes. For online payments, an instant receipt is emailed to you. For direct bank transfers, notify our team via WhatsApp or email with your payment reference, and we will issue an official acknowledgment and receipt.",
  },
]

export default function DonatePage() {
  return (
    <div className="flex flex-col w-full bg-white pb-24">
      {/* Hero */}
      <PageHero
        label="Support Our Mission"
        title="Be the Heart Behind a Life Changed"
        subtitle="Your generosity directly empowers students, provides free life-saving healthcare, and brings comfort to vulnerable seniors in Nigeria."
      />

      {/* Main Giving Section */}
      <section className="w-full px-4 sm:px-6 md:px-8 max-w-6xl mx-auto -mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Giving Widget */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl"
          >
            <div className="mb-6">
              <span className="text-xs font-bold text-[#1E4D97] uppercase tracking-wider block mb-1">
                Make a Contribution
              </span>
              <h2 className="text-2xl font-bold text-gray-900">
                Secure Giving Portal
              </h2>
            </div>

            <GivingWidget />
          </motion.div>

          {/* Right Column: Trust & Impact Storytelling */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Trust Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#E8EFF8] to-white border border-[#1E4D97]/15 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#1E4D97] text-white flex items-center justify-center shadow-md">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">100% Transparent Giving</h3>
                  <p className="text-xs text-gray-500">Accountability at every step</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Arise Community Support Foundation operates with complete financial integrity. Every gift directly touches lives in grassroots communities in Benin City and surrounding regions.
              </p>
            </div>

            {/* Photo Card */}
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-md border border-gray-100 group">
              <Image 
                src="/images/educational-support/3.JPG" 
                alt="Beneficiaries receiving educational support from Arise CSF" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <p className="text-white text-sm font-medium leading-snug">
                  &ldquo;Your support gives students the wings to dream beyond their circumstances.&rdquo;
                </p>
              </div>
            </div>

            {/* Core Impact Pillars */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-1">
                Where Your Gift Goes
              </h4>
              {PILLARS.map((pillar, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-gray-100 bg-gray-50/70 flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-white text-[#1E4D97] shadow-xs shrink-0">
                    <pillar.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-gray-800">{pillar.title}</h5>
                    <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 mt-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#E8EFF8] text-[#1E4D97] uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Donor Questions</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-sm transition-all"
            >
              <h4 className="text-base font-semibold text-gray-900 mb-2">
                {faq.q}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

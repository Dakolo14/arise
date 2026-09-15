"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { PageHero } from "@/components/ui/PageHero"
import { SvgUnderline } from "@/components/ui/SvgUnderline"
import { FaInstagram } from "@/components/ui/SocialIcons"

interface InitiativeItem {
  title: string
  description: string
  imageSrc: string
  partnerBadge?: string
  instagramLink?: string
}

const INITIATIVES: InitiativeItem[] = [
  {
    title: "Arise Education Scholarship Initiative",
    description: "Providing scholarships and educational support to deserving indigent students, empowering them to achieve their full potential across secondary and tertiary levels.",
    imageSrc: "/images/educational-support/2.jpg",
  },
  {
    title: "Arise Diabetes Support Initiative",
    description: "Providing free diabetes and blood pressure screening, health education, medical counseling, and free medications for vulnerable individuals who cannot afford essential healthcare.",
    partnerBadge: "Official Partnership: Edo State Ministry of Health & Central Hospital, Edo State",
    instagramLink: "https://www.instagram.com/arisediabetessupport?stkn=MXd5N3NuM3E1eHNuaA%3D%3D&utm_source=qr",
    imageSrc: "/images/diabetes-support/7.jpg",
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
    description: "Promoting the health, dignity, and well-being of senior citizens through regular health checkups, medication support, and caring community engagement.",
    imageSrc: "/images/diabetes-support/4.png",
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
                <div className="relative rounded-3xl aspect-[16/10] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-gray-100">
                  <Image src={item.imageSrc} alt={item.title} fill className="object-cover" />
                </div>
              </div>

              {/* Content */}
              <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                {item.partnerBadge && (
                  <span className="inline-block bg-blue-50 text-[#1E4D97] border border-blue-100 text-xs font-medium px-3 py-1.5 rounded-full mb-3">
                    {item.partnerBadge}
                  </span>
                )}
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed font-light mb-4">{item.description}</p>
                {item.instagramLink && (
                  <a
                    href={item.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#E4405F] hover:text-[#c13584] transition-colors"
                  >
                    <FaInstagram className="w-4 h-4" />
                    <span>Follow @arisediabetessupport on Instagram</span>
                  </a>
                )}
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

      {/* Strategic Institutional Partners */}
      <section className="w-full py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <span className="relative inline-block text-[#1E4D97] text-lg font-medium tracking-wide mb-4">
              Strategic Institutional Partners
              <SvgUnderline className="opacity-80" />
            </span>
            <p className="text-gray-500 text-base mt-6 font-light max-w-xl mx-auto">
              Collaborating with leading state healthcare and public institutions to create measurable, life-saving impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-[#F8FAFC] border border-blue-100 rounded-3xl p-8 hover:shadow-md transition-shadow">
              <span className="text-xs font-semibold text-[#1E4D97] uppercase tracking-wider block mb-2">Government Public Health</span>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Edo State Ministry of Health</h4>
              <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                Partnered with Arise Diabetes Support to launch and deliver state-wide free screenings, counseling, and public awareness campaigns for early diagnosis and treatment of diabetes and hypertension.
              </p>
              <div className="text-xs text-gray-500 font-medium pt-4 border-t border-gray-200">
                Official Ministry Healthcare Partner
              </div>
            </div>

            <div className="bg-[#F8FAFC] border border-emerald-100 rounded-3xl p-8 hover:shadow-md transition-shadow">
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-2">Clinical Support & Referrals</span>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Central Hospital, Edo State</h4>
              <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                Working in tandem with medical practitioners to provide clinical consultations, professional supervision, and referral pathways for indigent patients requiring continuous medical intervention in Benin City.
              </p>
              <div className="text-xs text-gray-500 font-medium pt-4 border-t border-gray-200">
                Clinical Healthcare Partner
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

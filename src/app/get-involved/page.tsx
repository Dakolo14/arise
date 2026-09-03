"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { GraduationCap, Pill, HeartPulse, Building2, Handshake, HandHeart, Gift, ArrowRight } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { AnimatedButton } from "@/components/ui/AnimatedButton"
import { useDonationModal, DonationTab } from "@/context/DonationContext"

interface GetInvolvedItem {
  icon: React.ElementType
  title: string
  description: string
  action: "modal" | "link"
  causeId?: string
  tab?: DonationTab
  href?: string
}

const GET_INVOLVED_ITEMS: GetInvolvedItem[] = [
  {
    icon: GraduationCap,
    title: "Sponsor a Student",
    description: "Give a deserving indigent student the opportunity to access quality education through scholarships and educational support.",
    action: "modal",
    causeId: "education",
  },
  {
    icon: Pill,
    title: "Donate Medications",
    description: "Help provide essential medications and medical supplies through our healthcare partners.",
    action: "modal",
    tab: "inkind",
  },
  {
    icon: HeartPulse,
    title: "Support Health Initiatives",
    description: "Help fund free diabetes and blood pressure screening, health education, and medical outreach.",
    action: "modal",
    causeId: "diabetes",
  },
  {
    icon: Building2,
    title: "Sponsor a Project",
    description: "Support impactful projects in education, healthcare, culture, leadership, or senior citizens' welfare.",
    action: "modal",
    tab: "inkind",
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    description: "Collaborate with Arise CSF to expand our reach and transform more lives.",
    action: "link",
    href: "/contact",
  },
  {
    icon: HandHeart,
    title: "Volunteer",
    description: "Share your time, skills, and expertise to support our mission.",
    action: "link",
    href: "/contact",
  },
  {
    icon: Gift,
    title: "Make a Donation",
    description: "Every contribution brings hope, dignity, and opportunity to those who need it most.",
    action: "modal",
    causeId: "general",
  },
]

export default function GetInvolvedPage() {
  const router = useRouter()
  const { openDonationModal } = useDonationModal()

  const handleCardClick = (item: GetInvolvedItem) => {
    if (item.action === "modal") {
      openDonationModal({ causeId: item.causeId, defaultTab: item.tab })
    } else if (item.href) {
      router.push(item.href)
    }
  }

  return (
    <div className="flex flex-col w-full bg-white">
      <PageHero
        label="Get Involved"
        title="Be the Heart Behind a Life Changed"
        subtitle="Every act of kindness creates hope. Join us in connecting caring hearts with deserving lives and make a lasting difference in your community."
      />

      {/* Cards Grid */}
      <section className="w-full pt-8 md:pt-12 pb-16 md:pb-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GET_INVOLVED_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onClick={() => handleCardClick(item)}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <item.icon className="w-10 h-10 mb-5 text-[#1E4D97] group-hover:scale-110 group-hover:text-[#589E47] transition-all duration-300 stroke-[1.5]" />
                <h3 className="text-xl font-medium text-gray-800 mb-3 group-hover:text-[#1E4D97] transition-colors">{item.title}</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed font-light">{item.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#1E4D97] group-hover:translate-x-1 transition-transform">
                <span>{item.action === "modal" ? "Give Now" : "Get in Touch"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="w-full pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto rounded-3xl p-10 md:p-14 text-center bg-gradient-to-br from-[#E8EFF8] to-white border border-[#1E4D97]/15 shadow-sm"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            Let&apos;s Connect Caring Hearts
          </h2>
          <p className="text-gray-600 text-base font-light max-w-xl mx-auto mb-8">
            Become the reason someone has hope tomorrow. Whether through volunteering, partnership, or sponsorship, your support matters.
          </p>
          <AnimatedButton variant="primary" hasArrow className="px-8 py-3.5" href="/contact">
            Contact Us Today
          </AnimatedButton>
        </motion.div>
      </section>
    </div>
  )
}

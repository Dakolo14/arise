"use client"

import { motion } from "framer-motion"
import { PageHero } from "@/components/ui/PageHero"
import { SvgUnderline } from "@/components/ui/SvgUnderline"
const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
    label: "Address",
    value: "The Igiogbe, 10 Airport Road, Benin City, Edo State, Nigeria.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
    ),
    label: "Phone",
    value: "+234 803 466 4190\n+234 703 414 5860\n+234 805 324 7625",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    label: "Email",
    value: "info@AriseCSF.org",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
    ),
    label: "Website",
    value: "www.AriseCSF.org",
  },
]

const SOCIALS = [
  { label: "Facebook", icon: "📘", href: "#" },
  { label: "Instagram", icon: "📸", href: "#" },
  { label: "LinkedIn", icon: "💼", href: "#" },
  { label: "YouTube", icon: "▶️", href: "#" },
  { label: "TikTok", icon: "🎵", href: "#" },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <PageHero
        label="Contact Us"
        title="Get in Touch"
        subtitle="We'd love to hear from you. Whether you'd like to partner with us, volunteer, support our initiatives, or simply learn more, we're here to help."
      />

      {/* Contact Info Cards */}
      <section className="w-full pt-8 md:pt-12 pb-16 md:pb-24 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {CONTACT_INFO.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#F5F8FC] rounded-3xl p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1E4D97] text-white flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">{item.label}</h3>
              <p className="text-[15px] text-gray-500 font-light whitespace-pre-line">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Media */}
      <section className="w-full py-16 md:py-24 px-4 bg-[#F5F8FC]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="relative inline-block text-[#1E4D97] text-lg font-medium tracking-wide mb-4">
              Connect With Us
              <SvgUnderline className="opacity-80" />
            </span>
            <p className="text-gray-500 text-base mt-6 font-light">
              Stay connected through our social media channels for updates, events, and inspiring stories.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {SOCIALS.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white w-32 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <span className="text-3xl">{s.icon}</span>
                <span className="text-sm font-medium text-gray-700">{s.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Embedded Google Map */}
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-8 text-center">Find Us in Benin City</h2>
            <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126839.8143977543!2d5.526279612046535!3d6.332306788544497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3714ec5c935%3A0x6b4af45564bf1d02!2sBenin%20City%2C%20Edo%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1714567890123!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Arise CSF Location - Benin City"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Placeholder */}
      <section className="w-full py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="relative inline-block text-[#1E4D97] text-lg font-medium tracking-wide mb-4">
              Send Us a Message
              <SvgUnderline className="opacity-80" />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl bg-[#F5F8FC] border border-gray-200 text-[15px] font-light focus:outline-none focus:ring-2 focus:ring-[#1E4D97]/30 focus:border-[#1E4D97] transition-all" />
              <input type="email" placeholder="Your Email" className="w-full px-6 py-4 rounded-2xl bg-[#F5F8FC] border border-gray-200 text-[15px] font-light focus:outline-none focus:ring-2 focus:ring-[#1E4D97]/30 focus:border-[#1E4D97] transition-all" />
            </div>
            <input type="text" placeholder="Subject" className="w-full px-6 py-4 rounded-2xl bg-[#F5F8FC] border border-gray-200 text-[15px] font-light focus:outline-none focus:ring-2 focus:ring-[#1E4D97]/30 focus:border-[#1E4D97] transition-all" />
            <textarea placeholder="Your Message" rows={6} className="w-full px-6 py-4 rounded-2xl bg-[#F5F8FC] border border-gray-200 text-[15px] font-light focus:outline-none focus:ring-2 focus:ring-[#1E4D97]/30 focus:border-[#1E4D97] transition-all resize-none" />
            <div className="flex justify-center">
              <button className="bg-[#1E4D97] hover:bg-[#163a73] text-white px-10 py-4 rounded-full text-base font-medium transition-all hover:scale-105 shadow-xl shadow-[#1E4D97]/20">
                Send Message
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom */}
      <section className="w-full py-12 px-4 bg-[#1E4D97] text-center">
        <p className="text-white/80 text-lg font-light">
          Let&apos;s Connect — Connecting caring hearts with lives in need. 💙💚
        </p>
      </section>
    </div>
  )
}

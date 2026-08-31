"use client"

import { motion } from "framer-motion"
import { PageHero } from "@/components/ui/PageHero"

const PLACEHOLDER_ARTICLES = [
  { title: "Education Scholarship Awards Ceremony 2026", date: "June 15, 2026", category: "Education" },
  { title: "Free Diabetes Screening: Over 200 Beneficiaries", date: "May 28, 2026", category: "Healthcare" },
  { title: "Youth Leadership Summit at The Igiogbe", date: "April 10, 2026", category: "Leadership" },
  { title: "Senior Citizens Day Celebration", date: "March 22, 2026", category: "Community" },
  { title: "Arise CSF Partners with Local Organizations", date: "February 14, 2026", category: "Partnerships" },
  { title: "New Scholarship Applications Open", date: "January 5, 2026", category: "Education" },
]

export default function NewsImpactPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <PageHero
        label="News & Impact"
        title="Stories That Inspire Change"
        subtitle="Follow our journey as we connect caring hearts with lives in need. Read about the lives we've touched and the communities we've strengthened."
      />

      {/* Articles Grid */}
      <section className="w-full py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PLACEHOLDER_ARTICLES.map((article, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group cursor-pointer hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-3xl aspect-[16/10] flex flex-col items-center justify-center text-gray-400 mb-5 group-hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <svg className="w-10 h-10 mb-2 text-gray-300 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">Article Image</span>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-[#1E4D97] bg-[#E8EFF8] px-3 py-1 rounded-full">{article.category}</span>
                <span className="text-xs text-gray-400">{article.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-[#1E4D97] transition-colors leading-snug">
                {article.title}
              </h3>

              {/* Read more */}
              <p className="text-sm text-gray-400 mt-3 font-light group-hover:text-[#1E4D97] transition-colors">
                Read more →
              </p>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  )
}

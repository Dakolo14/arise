"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { NEWS_ARTICLES } from "@/data/news"
export default function NewsImpactPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <PageHero
        label="News & Impact"
        title="Stories That Inspire Change"
        subtitle="Follow our journey as we connect caring hearts with lives in need. Read about the lives we've touched and the communities we've strengthened."
      />

      {/* Articles Grid */}
      <section className="w-full pt-8 md:pt-12 pb-16 md:pb-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ARTICLES.map((article, i) => (
            <Link href={`/news-impact/${article.slug}`} key={article.slug}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group cursor-pointer hover:-translate-y-2 transition-all duration-300 h-full flex flex-col"
              >
                {/* Image Placeholder */}
                <div className="relative rounded-3xl aspect-[16/10] overflow-hidden mb-5 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                  <Image src={article.imageSrc} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
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
                <div className="mt-auto pt-4 flex items-center gap-1.5 text-[#1E4D97] font-medium text-[15px] group-hover:text-[#7EB8D4] transition-colors">
                  <span>Read article</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

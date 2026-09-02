"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, ArrowLeft, ArrowRight, Share2 } from "lucide-react"

type Article = {
  slug: string
  title: string
  date: string
  category: string
  imageSrc: string
  content: string
  author?: string
  authorAvatar?: string
  readTime?: string
}

export function ArticleClientView({
  article,
  prevArticle,
  nextArticle,
}: {
  article: Article
  prevArticle: Article | null
  nextArticle: Article | null
}) {
  return (
    <div className="flex flex-col w-full bg-white pb-32">
      <section className="w-full pt-16 md:pt-24 px-6 relative">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#1E4D97]/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto w-full flex justify-start mb-8"
          >
            <Link href="/news-impact" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#1E4D97] transition-colors group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to News
            </Link>
          </motion.div>

          {/* Article Header (Centered) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center mb-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#111] leading-[1.15] mb-8">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <span className="px-5 py-2 rounded-full border border-[#1E4D97]/20 text-sm font-medium text-[#1E4D97] bg-[#E8EFF8] shadow-sm backdrop-blur-sm">
                {article.category}
              </span>
              <span className="px-5 py-2 rounded-full border border-green-200 text-sm font-medium text-[#589E47] bg-green-50 shadow-sm backdrop-blur-sm">
                Arise CSF
              </span>
            </div>
          </motion.div>
          
          {/* Massive Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full aspect-[21/9] md:aspect-[2.5/1] rounded-[2rem] overflow-hidden mb-16 shadow-xl border border-gray-100 group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
            <Image 
              src={article.imageSrc} 
              alt={article.title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
              priority
            />
          </motion.div>

          {/* Main Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Left Sidebar (Contributor & Read Time) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-3 flex flex-row lg:flex-col gap-8 lg:gap-10 border-b lg:border-b-0 lg:border-r border-gray-100 pb-8 lg:pb-0 lg:pr-8 sticky top-32 h-fit"
            >
              <div className="flex flex-col gap-3">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Contributor</span>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 border-2 border-white shadow-md shrink-0">
                    <Image src={article.authorAvatar || "/arise-logo.jpg"} alt={article.author || "Author"} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900">{article.author || "Arise Team"}</span>
                    <span className="text-xs text-gray-500">{article.date}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Reading Time</span>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                  <Clock className="w-4 h-4 text-[#589E47]" />
                  <span>{article.readTime || "3 Minute read"}</span>
                </div>
              </div>

              <div className="hidden lg:flex flex-col gap-3 pt-6 border-t border-gray-100">
                <button className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#1E4D97] transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share Article
                </button>
              </div>
            </motion.div>

            {/* Right Main Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="lg:col-span-9"
            >
              <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed">
                <p className="text-2xl md:text-3xl leading-relaxed text-[#1E4D97] mb-10 font-medium">
                  {article.content.split('.')[0]}.
                </p>
                <p className="mb-6 text-lg text-gray-700">
                  {article.content.substring(article.content.indexOf('.') + 1)}
                </p>
                
                <div className="p-8 my-10 rounded-2xl bg-gradient-to-br from-[#E8EFF8] to-white border border-[#1E4D97]/10 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#1E4D97]/5 rounded-full blur-2xl -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150" />
                  <h3 className="text-2xl font-semibold text-[#111] mb-4 relative z-10">Our Commitment</h3>
                  <p className="text-gray-700 relative z-10">
                    Arise Community Support Foundation is dedicated to transforming lives and empowering communities through targeted initiatives in education, healthcare, and leadership development. Every project we undertake is a step towards a more equitable society.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Looking Ahead</h3>
                <p className="mb-12 text-lg text-gray-700">
                  As we continue our work, we remain grateful for the generous support of our partners, volunteers, and donors who make this impact possible. Together, we can build a sustainable future where every individual has the opportunity to thrive.
                </p>
              </div>

              {/* Navigation Pagination */}
              <div className="flex items-center justify-between pt-10 border-t border-gray-100 mt-16">
                {prevArticle ? (
                  <Link href={`/news-impact/${prevArticle.slug}`} className="group flex items-center gap-4 p-4 pr-6 rounded-2xl border border-gray-100 hover:border-[#1E4D97]/30 bg-gray-50/50 hover:bg-[#E8EFF8]/50 transition-all duration-300 w-[48%]">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100 group-hover:border-[#1E4D97]/30 transition-colors">
                      <ArrowLeft className="w-4 h-4 text-gray-500 group-hover:text-[#1E4D97] transition-colors" />
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Previous</span>
                      <span className="text-sm font-medium text-gray-900 truncate group-hover:text-[#1E4D97] transition-colors" title={prevArticle.title}>
                        {prevArticle.title}
                      </span>
                    </div>
                  </Link>
                ) : <div className="w-[48%]" />}
                
                {nextArticle ? (
                  <Link href={`/news-impact/${nextArticle.slug}`} className="group flex items-center justify-end gap-4 p-4 pl-6 rounded-2xl border border-gray-100 hover:border-[#1E4D97]/30 bg-gray-50/50 hover:bg-[#E8EFF8]/50 transition-all duration-300 w-[48%] text-right">
                    <div className="flex flex-col overflow-hidden items-end">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Next</span>
                      <span className="text-sm font-medium text-gray-900 truncate group-hover:text-[#1E4D97] transition-colors" title={nextArticle.title}>
                        {nextArticle.title}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#1E4D97] flex items-center justify-center shrink-0 shadow-md group-hover:bg-[#163a73] transition-colors">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </Link>
                ) : <div className="w-[48%]" />}
              </div>

            </motion.div>
          </div>

        </div>
      </section>
    </div>
  )
}

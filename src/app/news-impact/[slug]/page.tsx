import { notFound } from "next/navigation"
import { NEWS_ARTICLES } from "@/data/news"
import { ArticleClientView } from "./ArticleClientView"

export function generateStaticParams() {
  return NEWS_ARTICLES.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const articleIndex = NEWS_ARTICLES.findIndex((a) => a.slug === resolvedParams.slug)
  
  if (articleIndex === -1) {
    notFound()
  }

  const article = NEWS_ARTICLES[articleIndex]
  const prevArticle = articleIndex > 0 ? NEWS_ARTICLES[articleIndex - 1] : null
  const nextArticle = articleIndex < NEWS_ARTICLES.length - 1 ? NEWS_ARTICLES[articleIndex + 1] : null

  return (
    <ArticleClientView 
      article={article} 
      prevArticle={prevArticle} 
      nextArticle={nextArticle} 
    />
  )
}

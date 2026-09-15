import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { NEWS_ARTICLES } from "@/data/news"
import { ArticleClientView } from "./ArticleClientView"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arisecsf.org';

export function generateStaticParams() {
  return NEWS_ARTICLES.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const article = NEWS_ARTICLES.find((a) => a.slug === resolvedParams.slug)
  if (!article) return {}

  const description = article.content.length > 155 
    ? `${article.content.slice(0, 152)}...` 
    : article.content

  return {
    title: `${article.title} | Arise CSF News`,
    description,
    alternates: {
      canonical: `${siteUrl}/news-impact/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | Arise CSF News`,
      description,
      url: `${siteUrl}/news-impact/${article.slug}`,
      images: [
        {
          url: article.imageSrc,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Arise CSF News`,
      description,
      images: [article.imageSrc],
    },
  }
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

import { MetadataRoute } from 'next'
import { NEWS_ARTICLES } from '@/data/news'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.arisecsf.org'

  const staticPages: MetadataRoute.Sitemap = [
    { 
      url: `${baseUrl}`, 
      lastModified: new Date(), 
      changeFrequency: 'weekly', 
      priority: 1.0 
    },
    { 
      url: `${baseUrl}/about`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly', 
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/initiatives`, 
      lastModified: new Date(), 
      changeFrequency: 'weekly', 
      priority: 0.9 
    },
    { 
      url: `${baseUrl}/donation`, 
      lastModified: new Date(), 
      changeFrequency: 'weekly', 
      priority: 0.9 
    },
    { 
      url: `${baseUrl}/rex-osagiede`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly', 
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/get-involved`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly', 
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/news-impact`, 
      lastModified: new Date(), 
      changeFrequency: 'weekly', 
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/contact`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly', 
      priority: 0.7 
    },
    { 
      url: `${baseUrl}/privacy-policy`, 
      lastModified: new Date(), 
      changeFrequency: 'yearly', 
      priority: 0.4 
    },
  ]

  const dynamicArticles: MetadataRoute.Sitemap = NEWS_ARTICLES.map((article) => ({
    url: `${baseUrl}/news-impact/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...dynamicArticles]
}

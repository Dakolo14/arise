import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'GPTBot',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'Applebot-Extended',
          'anthropic-ai',
          'CCBot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://www.arisecsf.org/sitemap.xml',
  }
}

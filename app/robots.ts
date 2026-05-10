import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/', '/demo/explorer'] },
    sitemap: 'https://pulse-rwe-web.vercel.app/sitemap.xml',
  }
}

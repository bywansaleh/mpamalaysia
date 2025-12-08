import type { Metadata, Viewport } from 'next'

import { baseUrl, siteDescription, siteTitle } from '@/lib/config'
import { bgDark, bgLight } from '@/styles/colors'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: siteTitle,
    template: `${siteTitle} — %s`,
  },
  robots: {
    index: true,
    follow: true,
  },
  description: siteDescription,
  keywords: ['malaysia', 'music', 'publishers', 'mpa', 'rights', 'royalties', 'copyright'],
  authors: [
    {
      name: 'Wan Saleh',
      url: 'https://wansaleh.com',
    },
  ],
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: bgLight },
    { media: '(prefers-color-scheme: dark)', color: bgDark },
  ],
}

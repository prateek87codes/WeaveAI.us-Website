import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
})

export const metadata: Metadata = {
  title: {
    default: 'WeaveAI - Weaving AI into Content & Commerce',
    template: '%s | WeaveAI',
  },
  description: 'Leveraging AI to redefine the content-to-commerce business model. Transform your content into commerce with intelligent automation. Partner with leading publishers and e-commerce brands.',
  keywords: ['AI', 'content to commerce', 'e-commerce', 'AI automation', 'growth funnel', 'AI analytics', 'content optimization'],
  authors: [{ name: 'WeaveAI' }],
  creator: 'WeaveAI',
  publisher: 'WeaveAI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://weaveai.us'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://weaveai.us',
    title: 'WeaveAI - Weaving AI into Content & Commerce',
    description: 'Leveraging AI to redefine the content-to-commerce business model. Transform your content into commerce with intelligent automation.',
    siteName: 'WeaveAI',
    images: [
      {
        url: 'https://weaveai.us/WeaveAI.US%20logo.png',
        width: 1200,
        height: 630,
        alt: 'WeaveAI - Weaving AI into Content & Commerce',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WeaveAI - Weaving AI into Content & Commerce',
    description: 'Leveraging AI to redefine the content-to-commerce business model. Transform your content into commerce with intelligent automation.',
    images: ['https://weaveai.us/WeaveAI.US%20logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome', url: '/favicon_io/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome', url: '/favicon_io/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
  manifest: '/favicon_io/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'WeaveAI',
              url: 'https://weaveai.us',
              logo: 'https://weaveai.us/WeaveAI.US%20logo.png',
              description: 'Leveraging AI to redefine the content-to-commerce business model.',
              sameAs: [],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                url: 'https://weaveai.us/contact',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-green focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

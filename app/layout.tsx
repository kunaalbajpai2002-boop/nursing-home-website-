import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import './globals.css'


const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nursing-home-website.vercel.app'),
  title: 'Aggarwal Nursing Home — Compassionate Healthcare Services',
  description: 'Providing advanced medical care, rehabilitation, elder care, and personalized healthcare services with a patient-first approach. Book your appointment today.',
  openGraph: {
    title: 'Aggarwal Nursing Home — Compassionate Healthcare Services',
    description: 'Providing advanced medical care, rehabilitation, elder care, and personalized healthcare services with a patient-first approach. Book your appointment today.',
    url: 'https://nursing-home-website.vercel.app',
    siteName: 'Aggarwal Nursing Home',
    images: [
      {
        url: '/LOGO.png.jpeg',
        width: 1200,
        height: 630,
        alt: 'Aggarwal Nursing Home Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aggarwal Nursing Home — Compassionate Healthcare Services',
    description: 'Providing advanced medical care, rehabilitation, elder care, and personalized healthcare services with a patient-first approach. Book your appointment today.',
    images: ['/LOGO.png.jpeg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable}`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

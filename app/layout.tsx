import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vaibhav Thatai — Software Engineer',
  description:
    'Software Development Engineer at RapidFort. Building high-impact systems with Python, Go, React, and Kubernetes. NIT Jalandhar alumnus.',
  keywords: ['Vaibhav Thatai', 'Software Engineer', 'RapidFort', 'Python', 'Golang', 'React', 'Kubernetes'],
  authors: [{ name: 'Vaibhav Thatai' }],
  openGraph: {
    title: 'Vaibhav Thatai — Software Engineer',
    description: 'Software Development Engineer at RapidFort. Building high-impact systems.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#080d1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} style={{ backgroundColor: '#080d1a' }}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

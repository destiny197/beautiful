import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextApp - Modern Web Development',
  description: 'Build modern web applications with Next.js, React, TypeScript, and Tailwind CSS',
  keywords: 'Next.js, React, TypeScript, Tailwind CSS, Web Development',
  authors: [{ name: 'NextApp Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Goodoo.ai Strategic Website',
  description: 'Comprehensive strategic framework showcase for Goodoo.ai - AI-powered project management platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-secondary-100">
          {children}
        </div>
      </body>
    </html>
  )
} 
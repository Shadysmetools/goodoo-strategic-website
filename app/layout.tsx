import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from './contexts/AuthContext'
import ConditionalLogoutButton from './components/ConditionalLogoutButton'
import ErrorBoundary from './components/ErrorBoundary'

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
      <body className="font-sans">
        <ErrorBoundary>
          <AuthProvider>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
              <ConditionalLogoutButton />
              {children}
            </div>
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
} 
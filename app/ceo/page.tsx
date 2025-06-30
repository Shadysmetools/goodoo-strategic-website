"use client";

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function CEODashboard() {
  const menuItems = [
    {
      title: 'Goodoo.ai: 1-Year Product & Strategy Master Plan',
      description: 'Comprehensive strategic roadmap for the next 12 months',
      href: '/ceo/master-plan',
      icon: '📋'
    },
    {
      title: 'Goodoo.ai Go-to-Market Strategy',
      description: 'Detailed GTM strategy and market entry plan',
      href: '/ceo/gtm-strategy',
      icon: '🚀'
    },
    {
      title: 'Business Strategy',
      description: 'Core business strategy and competitive positioning',
      href: '/ceo/business-strategy',
      icon: '💼'
    },
    {
      title: 'Market Analysis',
      description: 'Market research and competitive landscape analysis',
      href: '/ceo/market-analysis',
      icon: '📊'
    }
  ]

  const [documents, setDocuments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDocuments()
  }, [])

  const fetchDocuments = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/documents')
      if (res.ok) {
        const data = await res.json()
        setDocuments(data)
      } else {
        setDocuments([])
      }
    } catch {
      setDocuments([])
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Back to Home Dashboard button */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-semibold shadow-sm transition-colors backdrop-blur border border-gray-300"
          >
            <span className="mr-2">🏠</span>
            Back to Home Dashboard
          </Link>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">CEO Dashboard</h1>
            <p className="text-xl text-gray-600">Strategic leadership tools and insights for Goodoo.ai</p>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <div className="flex justify-center space-x-4">
              <Link
                href="/ceo/documents"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
              >
                <span>📄</span>
                <span>All Documents</span>
              </Link>
              <Link
                href="/ceo/html-content"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
              >
                <span>🌐</span>
                <span>HTML Content</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Recent Documents - now dynamic */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Recent Documents</h2>
              <Link
                href="/ceo/documents"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                View All →
              </Link>
            </div>
            {loading ? (
              <div className="text-center text-gray-500">Loading...</div>
            ) : documents.length === 0 ? (
              <div className="text-center text-gray-500">No documents found. Upload a document to get started.</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documents.slice(0, 4).map((doc, index) => (
                  <a
                    key={doc.id || index}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">📄</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{doc.title}</h3>
                        <p className="text-sm text-gray-600">{doc.date} • {doc.size}</p>
                      </div>
                    </div>
                    <span className="text-blue-600">→</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">12</div>
                <div className="text-sm text-gray-600">Month Strategy</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">5</div>
                <div className="text-sm text-gray-600">Key Initiatives</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">3</div>
                <div className="text-sm text-gray-600">Market Segments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
"use client";

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

interface DocumentMeta {
  id: string;
  title: string;
  type: string;
  date: string;
  size: string;
  url: string;
}

export default function CTODashboard() {
  const menuItems = [
    {
      title: 'Development Roadmap',
      description: 'Technical development timeline and milestones',
      href: '/cto/development-roadmap',
      icon: '🛠️'
    },
    {
      title: 'Technical Architecture',
      description: 'System architecture and technology decisions',
      href: '/cto/technical-architecture',
      icon: '🏗️'
    },
    {
      title: 'Product Roadmap',
      description: 'Product development and feature planning',
      href: '/cto/product-roadmap',
      icon: '📱'
    },
    {
      title: 'Technology Stack',
      description: 'Current and planned technology stack',
      href: '/cto/technology-stack',
      icon: '⚙️'
    }
  ]

  const [documents, setDocuments] = useState<DocumentMeta[]>([]);
  const [loadingDocs, setLoadingDocs] = useState(true);

  useEffect(() => {
    async function fetchDocs() {
      setLoadingDocs(true);
      try {
        const res = await fetch('/api/documents');
        if (res.ok) {
          const data = await res.json();
          setDocuments(Array.isArray(data) ? data.slice(-4).reverse() : []);
        } else {
          setDocuments([]);
        }
      } catch {
        setDocuments([]);
      }
      setLoadingDocs(false);
    }
    fetchDocs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Back to Home Button */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">CTO Dashboard</h1>
            <p className="text-xl text-gray-600">Technical leadership and engineering excellence for Goodoo.ai</p>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <div className="flex justify-center space-x-4">
              <Link
                href="/cto/documents"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
              >
                <span>📄</span>
                <span>All Documents</span>
              </Link>
              <Link
                href="/cto/html-content"
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
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-green-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Recent Documents */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Recent Documents</h2>
              <Link
                href="/cto/documents"
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                View All →
              </Link>
            </div>
            {loadingDocs ? (
              <div className="text-gray-500 text-center py-8">Loading...</div>
            ) : documents.length === 0 ? (
              <div className="text-gray-500 text-center py-8">No recent documents.</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documents.map((doc) => (
                  <Link
                    key={doc.id}
                    href={doc.url}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">📄</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{doc.title}</h3>
                        <p className="text-sm text-gray-600">{doc.date} • {doc.size}</p>
                      </div>
                    </div>
                    <span className="text-green-600">→</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Engineering Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">15</div>
                <div className="text-sm text-gray-600">Engineers</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">2.5s</div>
                <div className="text-sm text-gray-600">Avg Response</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">50+</div>
                <div className="text-sm text-gray-600">Microservices</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
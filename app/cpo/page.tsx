import React from 'react'
import Link from 'next/link'

export default function CPODashboard() {
  const menuItems = [
    {
      title: 'User Personas',
      description: 'Detailed user personas and customer segments',
      href: '/cpo/user-personas',
      icon: '👥'
    },
    {
      title: 'Product Vision',
      description: 'Product vision and strategic direction',
      href: '/cpo/product-vision',
      icon: '🎯'
    },
    {
      title: 'Feature Prioritization',
      description: 'Feature roadmap and prioritization framework',
      href: '/cpo/feature-prioritization',
      icon: '📋'
    },
    {
      title: 'User Research',
      description: 'User research insights and findings',
      href: '/cpo/user-research',
      icon: '🔍'
    }
  ]

  const currentYear = new Date().getFullYear();

  const documents = [
    {
      title: 'Product Requirements Document',
      type: 'PDF',
      date: `March ${currentYear}`,
      size: '2.8 MB',
      href: '/cpo/documents/product-requirements'
    },
    {
      title: 'User Research Report',
      type: 'PDF',
      date: `March ${currentYear}`,
      size: '3.4 MB',
      href: '/cpo/documents/user-research'
    },
    {
      title: 'Feature Prioritization Matrix',
      type: 'PDF',
      date: `February ${currentYear}`,
      size: '1.6 MB',
      href: '/cpo/documents/feature-matrix'
    },
    {
      title: 'Product Roadmap Q2',
      type: 'PDF',
      date: `January ${currentYear}`,
      size: '2.1 MB',
      href: '/cpo/documents/roadmap-q2'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">CPO Dashboard</h1>
            <p className="text-xl text-gray-600">Product leadership and user-centric innovation for Goodoo.ai</p>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <div className="flex justify-center space-x-4">
              <Link
                href="/cpo/documents"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
              >
                <span>📄</span>
                <span>All Documents</span>
              </Link>
              <Link
                href="/cpo/html-content"
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
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-pink-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
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
                href="/cpo/documents"
                className="text-pink-600 hover:text-pink-700 font-semibold"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((doc, index) => (
                <Link
                  key={index}
                  href={doc.href}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">📄</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{doc.title}</h3>
                      <p className="text-sm text-gray-600">{doc.date} • {doc.size}</p>
                    </div>
                  </div>
                  <span className="text-pink-600">→</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-pink-50 rounded-lg">
                <div className="text-2xl font-bold text-pink-600">4.8/5</div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">85%</div>
                <div className="text-sm text-gray-600">Retention</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">12</div>
                <div className="text-sm text-gray-600">Core Features</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">3</div>
                <div className="text-sm text-gray-600">User Personas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
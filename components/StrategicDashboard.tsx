import React from 'react'

const strategicDocuments = [
  {
    id: 'product-roadmap',
    title: 'Product Roadmap',
    subtitle: '12-Month Strategic Plan',
    description: 'Comprehensive roadmap covering MVP hardening, launch, expansion, and scaling phases.',
    status: 'Active',
    lastUpdated: 'June 2025',
    icon: '📋',
    color: 'bg-blue-500',
  },
  {
    id: 'gtm-strategy',
    title: 'GTM Strategy',
    subtitle: 'Go-to-Market Plan',
    description: 'Targeted strategy focusing on Odoo PMs and the Belgian Odoo event for initial market capture.',
    status: 'In Progress',
    lastUpdated: 'June 2025',
    icon: '🎯',
    color: 'bg-green-500',
  },
  {
    id: 'master-plan',
    title: 'Master Plan',
    subtitle: '1-Year CPO Strategy',
    description: 'Detailed strategic plan with KPIs, quarterly roadmaps, and business objectives.',
    status: 'Draft',
    lastUpdated: 'June 17, 2025',
    icon: '📊',
    color: 'bg-purple-500',
  },
  {
    id: 'user-personas',
    title: 'User Personas',
    subtitle: 'Customer Profiles',
    description: 'Detailed profiles of target users including Pieter Janssen (Odoo PM) and secondary personas.',
    status: 'Complete',
    lastUpdated: 'June 2025',
    icon: '👥',
    color: 'bg-orange-500',
  },
  {
    id: 'development-roadmap',
    title: 'Development Roadmap',
    subtitle: 'Technical Implementation',
    description: 'Sprint breakdown and user stories across three strategic development phases.',
    status: 'Active',
    lastUpdated: 'June 2025',
    icon: '⚙️',
    color: 'bg-red-500',
  },
  {
    id: 'final-vision',
    title: 'Final Vision',
    subtitle: 'Product Overview',
    description: 'Complete product vision, technical specifications, and future capabilities.',
    status: 'Complete',
    lastUpdated: 'June 2025',
    icon: '🔮',
    color: 'bg-indigo-500',
  },
]

export default function StrategicDashboard() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-secondary-900">
          Goodoo.ai Strategic Framework
        </h1>
        <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
          Comprehensive strategic documents and planning framework for the AI-powered project management platform
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card text-center">
          <div className="text-3xl font-bold text-primary-600">6</div>
          <div className="text-secondary-600">Strategic Documents</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-green-600">12</div>
          <div className="text-secondary-600">Month Timeline</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-purple-600">3</div>
          <div className="text-secondary-600">Development Phases</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-orange-600">15</div>
          <div className="text-secondary-600">User Stories</div>
        </div>
      </div>

      {/* Strategic Documents Grid */}
      <div>
        <h2 className="section-title">Strategic Documents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategicDocuments.map((doc) => (
            <div key={doc.id} className="card hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${doc.color} rounded-lg flex items-center justify-center text-white text-2xl`}>
                  {doc.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-secondary-600 mb-2">{doc.subtitle}</p>
                  <p className="text-sm text-secondary-700 mb-3">{doc.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      doc.status === 'Complete' ? 'bg-green-100 text-green-800' :
                      doc.status === 'Active' ? 'bg-blue-100 text-blue-800' :
                      doc.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {doc.status}
                    </span>
                    <span className="text-xs text-secondary-500">
                      Updated: {doc.lastUpdated}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div>
        <h2 className="section-title">Key Performance Indicators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card">
            <div className="text-2xl font-bold text-secondary-900">$5,000+</div>
            <div className="text-secondary-600">Target MRR (Q2 2026)</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-secondary-900">40%+</div>
            <div className="text-secondary-600">Month 1 User Retention</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-secondary-900">40+</div>
            <div className="text-secondary-600">Net Promoter Score</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-secondary-900">3:1</div>
            <div className="text-secondary-600">LTV to CAC Ratio</div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="card bg-primary-50 border-primary-200">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold text-primary-900">Need More Information?</h3>
          <p className="text-primary-700">
            Contact the product team for detailed insights into any strategic document
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-primary-700">
            <div>
              <span className="font-medium">Product Lead:</span> Shady Al-halawani
            </div>
            <div>
              <span className="font-medium">Email:</span> shady@smetools.io
            </div>
            <div>
              <span className="font-medium">Company:</span> SMEtools Holdings
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
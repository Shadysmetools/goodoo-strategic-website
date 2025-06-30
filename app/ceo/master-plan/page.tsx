import React from 'react'

export default function CEOMasterPlan() {
  const phases = [
    {
      phase: 'Phase 1: Foundation (Months 1-3)',
      objectives: [
        'Complete MVP development and testing',
        'Establish core team and partnerships',
        'Secure initial funding round',
        'Develop go-to-market strategy',
        'Build initial customer base'
      ],
      metrics: ['MVP Launch', 'Team Size: 15', 'Funding: $2M', 'Beta Users: 100']
    },
    {
      phase: 'Phase 2: Growth (Months 4-6)',
      objectives: [
        'Scale product features based on user feedback',
        'Expand marketing and sales efforts',
        'Enter new market segments',
        'Optimize product-market fit',
        'Build strategic partnerships'
      ],
      metrics: ['Active Users: 1K', 'Revenue: $50K/Mo', 'Partnerships: 5', 'Team Size: 25']
    },
    {
      phase: 'Phase 3: Expansion (Months 7-9)',
      objectives: [
        'Launch enterprise features',
        'Expand to international markets',
        'Scale operations and infrastructure',
        'Build advanced AI capabilities',
        'Prepare for Series A funding'
      ],
      metrics: ['Enterprise Customers: 10', 'International Markets: 3', 'Revenue: $200K/Mo', 'Team Size: 40']
    },
    {
      phase: 'Phase 4: Scale (Months 10-12)',
      objectives: [
        'Achieve product-market fit at scale',
        'Secure Series A funding',
        'Establish market leadership',
        'Build sustainable growth engine',
        'Prepare for Series B planning'
      ],
      metrics: ['Total Users: 10K', 'Revenue: $500K/Mo', 'Series A: $10M', 'Team Size: 60']
    }
  ]

  const keyInitiatives = [
    {
      title: 'Product Development',
      description: 'Build and iterate on core AI-powered features',
      timeline: 'Ongoing',
      priority: 'High'
    },
    {
      title: 'Market Expansion',
      description: 'Enter new verticals and geographic markets',
      timeline: 'Months 4-12',
      priority: 'High'
    },
    {
      title: 'Team Building',
      description: 'Scale engineering and sales teams',
      timeline: 'Months 2-12',
      priority: 'Medium'
    },
    {
      title: 'Partnership Development',
      description: 'Build strategic partnerships and integrations',
      timeline: 'Months 3-12',
      priority: 'Medium'
    },
    {
      title: 'Funding Strategy',
      description: 'Secure Series A funding for growth',
      timeline: 'Months 8-10',
      priority: 'High'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Goodoo.ai: 1-Year Product & Strategy Master Plan
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive strategic roadmap for scaling Goodoo.ai from startup to market leader
            </p>
          </div>

          {/* Executive Summary */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Executive Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">$10M</div>
                <div className="text-sm text-gray-600">Target Series A</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600">10K</div>
                <div className="text-sm text-gray-600">Target Users</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">$500K</div>
                <div className="text-sm text-gray-600">Monthly Revenue</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-600">60</div>
                <div className="text-sm text-gray-600">Team Size</div>
              </div>
            </div>
          </div>

          {/* Strategic Phases */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Strategic Phases</h2>
            <div className="space-y-6">
              {phases.map((phase, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{phase.phase}</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Objectives</h4>
                      <ul className="space-y-2">
                        {phase.objectives.map((objective, objIndex) => (
                          <li key={objIndex} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-gray-700">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Success Metrics</h4>
                      <ul className="space-y-2">
                        {phase.metrics.map((metric, metricIndex) => (
                          <li key={metricIndex} className="flex items-start">
                            <span className="text-blue-500 mr-2">📊</span>
                            <span className="text-gray-700">{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Initiatives */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyInitiatives.map((initiative, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{initiative.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      initiative.priority === 'High' ? 'bg-red-100 text-red-800' :
                      initiative.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {initiative.priority}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{initiative.description}</p>
                  <div className="text-sm text-gray-500">
                    <strong>Timeline:</strong> {initiative.timeline}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
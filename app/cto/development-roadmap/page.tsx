import React from 'react'

export default function CTODevelopmentRoadmap() {
  const phases = [
    {
      phase: 'Phase 1: MVP Development (Months 1-3)',
      focus: 'Core Platform',
      milestones: [
        'Backend API development with Node.js/Express',
        'Frontend development with React/Next.js',
        'Database design and implementation (PostgreSQL)',
        'Basic AI integration and API endpoints',
        'Authentication and user management system'
      ],
      techStack: ['Node.js', 'React', 'PostgreSQL', 'OpenAI API', 'JWT Auth'],
      team: '5 Engineers'
    },
    {
      phase: 'Phase 2: Feature Enhancement (Months 4-6)',
      focus: 'Advanced Features',
      milestones: [
        'Advanced AI model integration',
        'Real-time collaboration features',
        'File upload and processing system',
        'Analytics and reporting dashboard',
        'Mobile-responsive design optimization'
      ],
      techStack: ['WebSocket', 'Redis', 'AWS S3', 'Analytics', 'PWA'],
      team: '8 Engineers'
    },
    {
      phase: 'Phase 3: Scale & Performance (Months 7-9)',
      focus: 'Infrastructure',
      milestones: [
        'Microservices architecture implementation',
        'Load balancing and auto-scaling',
        'Advanced caching strategies',
        'Performance optimization and monitoring',
        'Security hardening and compliance'
      ],
      techStack: ['Docker', 'Kubernetes', 'Redis Cluster', 'Prometheus', 'OAuth2'],
      team: '12 Engineers'
    },
    {
      phase: 'Phase 4: Enterprise Features (Months 10-12)',
      focus: 'Enterprise Ready',
      milestones: [
        'Enterprise SSO and LDAP integration',
        'Advanced admin and user management',
        'API rate limiting and usage tracking',
        'Multi-tenant architecture',
        'Advanced security and audit logging'
      ],
      techStack: ['SAML', 'LDAP', 'Rate Limiting', 'Multi-tenancy', 'Audit Logs'],
      team: '15 Engineers'
    }
  ]

  const technicalMetrics = [
    {
      metric: 'API Response Time',
      target: '< 200ms',
      current: '250ms',
      status: 'In Progress'
    },
    {
      metric: 'System Uptime',
      target: '99.9%',
      current: '99.5%',
      status: 'In Progress'
    },
    {
      metric: 'Code Coverage',
      target: '> 90%',
      current: '85%',
      status: 'In Progress'
    },
    {
      metric: 'Security Score',
      target: 'A+',
      current: 'A',
      status: 'In Progress'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Development Roadmap
            </h1>
            <p className="text-xl text-gray-600">
              Technical development timeline and engineering milestones for Goodoo.ai
            </p>
          </div>

          {/* Technical Metrics */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalMetrics.map((metric, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{metric.metric}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Target:</span>
                      <span className="text-sm font-medium text-green-600">{metric.target}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Current:</span>
                      <span className="text-sm font-medium text-blue-600">{metric.current}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Status:</span>
                      <span className="text-sm font-medium text-orange-600">{metric.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Development Phases */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Development Phases</h2>
            <div className="space-y-8">
              {phases.map((phase, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{phase.phase}</h3>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                      {phase.focus}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Milestones</h4>
                      <ul className="space-y-2">
                        {phase.milestones.map((milestone, milestoneIndex) => (
                          <li key={milestoneIndex} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-gray-700 text-sm">{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {phase.techStack.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Team Size</h4>
                      <div className="text-lg font-bold text-purple-600">{phase.team}</div>
                    </div>
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
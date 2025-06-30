import React from 'react'
import Link from 'next/link'

export default function CPOUserPersonas() {
  const personas = [
    {
      name: 'Pieter Janssen',
      role: 'Odoo Project Manager',
      company: 'Odoo Partner',
      age: 38,
      avatar: '👨‍💼',
      description: 'Experienced Odoo Project Manager managing multiple client implementations simultaneously.',
      goals: [
        'Deliver projects on time and on budget',
        'High client satisfaction and retention',
        'Be seen as an expert and trusted advisor',
        'Finding ways to work smarter, not harder'
      ],
      painPoints: [
        '"Project Amnesia": Details from meetings are lost almost immediately',
        'Documentation Lag: Manually creating guides is time-consuming and often inaccurate',
        'Context Switching Chaos: Juggling multiple complex Odoo projects means details get mixed up',
        'The "Said vs. Shown" Gap: Audio transcripts miss critical visual context from screen demos'
      ],
      techSavvy: 'High',
      budget: '$1K-5K/year',
      decisionMaking: 'Decision Maker',
      link: '/cpo/user-personas/pieter-janssen'
    },
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'Tech Startup',
      age: 32,
      avatar: '👩‍💼',
      description: 'Product manager at a fast-growing SaaS startup looking to streamline product development processes',
      goals: [
        'Improve team collaboration and communication',
        'Reduce time to market for new features',
        'Better understand user needs and feedback',
        'Optimize product roadmap planning'
      ],
      painPoints: [
        'Manual data collection and analysis is time-consuming',
        'Difficulty tracking feature usage and impact',
        'Team communication gaps across departments',
        'Limited insights into user behavior patterns'
      ],
      techSavvy: 'High',
      budget: '$5K-15K/year',
      decisionMaking: 'Influencer'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'Mid-size Enterprise',
      age: 45,
      avatar: '👨‍💻',
      description: 'CTO at a mid-size enterprise focused on digital transformation and AI adoption',
      goals: [
        'Implement AI-powered solutions across the organization',
        'Improve operational efficiency and automation',
        'Enhance data security and compliance',
        'Scale technology infrastructure cost-effectively'
      ],
      painPoints: [
        'Legacy systems integration challenges',
        'High costs of custom AI development',
        'Security and compliance requirements',
        'Limited internal AI expertise'
      ],
      techSavvy: 'Very High',
      budget: '$50K-200K/year',
      decisionMaking: 'Decision Maker'
    },
    {
      name: 'Emily Watson',
      role: 'Marketing Director',
      company: 'E-commerce Company',
      age: 38,
      avatar: '👩‍🎨',
      description: 'Marketing director at an e-commerce company focused on customer acquisition and retention',
      goals: [
        'Improve customer segmentation and targeting',
        'Optimize marketing campaign performance',
        'Enhance customer experience and engagement',
        'Increase conversion rates and revenue'
      ],
      painPoints: [
        'Difficulty understanding customer behavior',
        'Manual campaign optimization is inefficient',
        'Limited personalization capabilities',
        'Data silos across marketing tools'
      ],
      techSavvy: 'Medium',
      budget: '$10K-30K/year',
      decisionMaking: 'Decision Maker'
    }
  ]

  const userJourney = [
    {
      stage: 'Awareness',
      description: 'User discovers Goodoo.ai through various channels',
      touchpoints: ['Google Search', 'Social Media', 'Industry Events', 'Referrals'],
      emotions: ['Curious', 'Skeptical', 'Interested']
    },
    {
      stage: 'Consideration',
      description: 'User evaluates Goodoo.ai against alternatives',
      touchpoints: ['Website', 'Demo', 'Case Studies', 'Free Trial'],
      emotions: ['Analytical', 'Cautious', 'Hopeful']
    },
    {
      stage: 'Decision',
      description: 'User decides to purchase and onboard',
      touchpoints: ['Sales Call', 'Contract', 'Onboarding', 'Training'],
      emotions: ['Excited', 'Nervous', 'Optimistic']
    },
    {
      stage: 'Adoption',
      description: 'User integrates Goodoo.ai into their workflow',
      touchpoints: ['Setup', 'Training', 'Support', 'Success Team'],
      emotions: ['Frustrated', 'Learning', 'Satisfied']
    },
    {
      stage: 'Advocacy',
      description: 'User becomes a promoter and provides referrals',
      touchpoints: ['Success Stories', 'Referrals', 'Reviews', 'Community'],
      emotions: ['Proud', 'Grateful', 'Enthusiastic']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              User Personas
            </h1>
            <p className="text-xl text-gray-600">
              Detailed user personas and customer segments for Goodoo.ai
            </p>
          </div>

          {/* User Personas */}
          <div className="space-y-8 mb-12">
            {personas.map((persona, index) => (
              <Link href={persona.link || '#'} key={index} className="block">
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="text-6xl">{persona.avatar}</div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{persona.name}</h2>
                      <p className="text-lg text-gray-600 mb-1">{persona.role} at {persona.company}</p>
                      <p className="text-gray-500">{persona.age} years old</p>
                    </div>
                    <div className="text-right">
                      <div className="space-y-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {persona.techSavvy} Tech Savvy
                        </span>
                        <div className="text-sm text-gray-600">
                          Budget: <span className="font-medium">{persona.budget}</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          Role: <span className="font-medium">{persona.decisionMaking}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">{persona.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Goals</h3>
                      <ul className="space-y-2">
                        {persona.goals.map((goal, goalIndex) => (
                          <li key={goalIndex} className="flex items-start">
                            <span className="text-green-500 mr-2">🎯</span>
                            <span className="text-gray-700">{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Pain Points</h3>
                      <ul className="space-y-2">
                        {persona.painPoints.map((pain, painIndex) => (
                          <li key={painIndex} className="flex items-start">
                            <span className="text-red-500 mr-2">⚠️</span>
                            <span className="text-gray-700">{pain}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* User Journey */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">User Journey</h2>
            <div className="space-y-6">
              {userJourney.map((stage, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{stage.stage}</h3>
                    <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                      Stage {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{stage.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Touchpoints</h4>
                      <div className="flex flex-wrap gap-2">
                        {stage.touchpoints.map((touchpoint, touchIndex) => (
                          <span key={touchIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                            {touchpoint}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Emotions</h4>
                      <div className="flex flex-wrap gap-2">
                        {stage.emotions.map((emotion, emotionIndex) => (
                          <span key={emotionIndex} className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                            {emotion}
                          </span>
                        ))}
                      </div>
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
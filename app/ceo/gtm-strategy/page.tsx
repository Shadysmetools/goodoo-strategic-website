'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import MindMap, { marketStrategyMindMapData } from '../../components/MindMap';

export default function CEOGTMStrategy() {
  const [showMindMap, setShowMindMap] = useState(false);

  const marketSegments = [
    {
      segment: 'SMB (Small & Medium Businesses)',
      description: 'Companies with 10-500 employees looking to automate workflows',
      size: '50M+ companies globally',
      approach: 'Self-service SaaS model with freemium tier',
      channels: ['Content Marketing', 'SEO/SEM', 'Product Hunt', 'Referrals']
    },
    {
      segment: 'Enterprise',
      description: 'Large corporations seeking enterprise-grade AI solutions',
      size: '10K+ target accounts',
      approach: 'Direct sales with custom implementation',
      channels: ['Direct Sales', 'Partnerships', 'Industry Events', 'Case Studies']
    },
    {
      segment: 'Startups & Scale-ups',
      description: 'Fast-growing companies building AI-first products',
      size: '100K+ potential customers',
      approach: 'Product-led growth with developer focus',
      channels: ['Developer Relations', 'GitHub', 'Tech Conferences', 'API Documentation']
    }
  ];

  const gtmPillars = [
    {
      pillar: 'Product-Led Growth',
      description: 'Focus on product experience and user adoption',
      initiatives: [
        'Freemium model with clear value proposition',
        'Self-service onboarding and activation',
        'In-product analytics and optimization',
        'User feedback loops and iteration'
      ]
    },
    {
      pillar: 'Content Marketing',
      description: 'Establish thought leadership and drive organic growth',
      initiatives: [
        'Technical blog and documentation',
        'Case studies and success stories',
        'Webinars and educational content',
        'Industry reports and whitepapers'
      ]
    },
    {
      pillar: 'Partnership Strategy',
      description: 'Build ecosystem partnerships for distribution',
      initiatives: [
        'Technology partnerships (AWS, Google Cloud)',
        'Channel partnerships and resellers',
        'System integrators and consultants',
        'Developer community partnerships'
      ]
    },
    {
      pillar: 'Sales & Customer Success',
      description: 'Direct sales for enterprise and customer retention',
      initiatives: [
        'Inside sales for SMB segment',
        'Enterprise sales team for large accounts',
        'Customer success and onboarding',
        'Account expansion and upsell'
      ]
    }
  ];

  const timeline = [
    {
      quarter: 'Q1 2025',
      focus: 'Foundation & Development',
      activities: [
        'Complete MVP development',
        'Build initial customer base (100 beta users)',
        'Establish content marketing foundation',
        'Develop sales playbook and processes'
      ]
    },
    {
      quarter: 'Q2 2026',
      focus: 'MVP Preparation & Testing',
      activities: [
        'Finalize MVP features and testing',
        'Scale content marketing efforts',
        'Launch partnership program',
        'Build sales team and processes'
      ]
    },
    {
      quarter: 'Q3 2026',
      focus: 'MVP Launch & Growth',
      activities: [
        'Launch MVP with core features (September 2026)',
        'Enter new market segments',
        'Launch enterprise features',
        'Scale sales and marketing operations'
      ]
    },
    {
      quarter: 'Q4 2026',
      focus: 'Market Leadership',
      activities: [
        'Achieve market leadership position',
        'Expand to international markets',
        'Launch advanced AI capabilities',
        'Prepare for Series A funding'
      ]
    }
  ];

  return (
    <div className="min-h-screen gradient-bg">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-2xl">🚀</span>
              <span className="text-white font-semibold">Go-to-Market Strategy</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Go-to-Market Strategy
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              A Targeted 12-Month Plan to Capture the Initial Market with High-Trust Channels and Strategic Execution
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Navigation */}
          <div className="mb-8">
            <Link
              href="/ceo"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2 hover-lift inline-flex"
            >
              <span className="text-xl">←</span>
              <span>Back to CEO Dashboard</span>
            </Link>
          </div>

          {/* Mind Map Toggle Button */}
          <div className="mb-8 text-center">
            <button
              onClick={() => setShowMindMap(!showMindMap)}
              className="btn-modern bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-soft hover:shadow-medium flex items-center space-x-3 mx-auto"
            >
              <span className="text-2xl">🧠</span>
              <span>{showMindMap ? 'Hide' : 'Show'} Market Strategy Mind Map</span>
            </button>
          </div>

          {/* Strategic Mind Map */}
          {showMindMap && (
            <div className="mb-16 animate-fade-in-up">
              <MindMap 
                nodes={marketStrategyMindMapData} 
                title="Market Strategy Mind Map"
                className="mb-8"
              />
              <div className="text-center">
                <p className="text-slate-600 max-w-3xl mx-auto">
                  Explore the market strategy framework by clicking on nodes to see connections and understand how different market elements work together to drive business success.
                </p>
              </div>
            </div>
          )}

          {/* Core Strategy Section */}
          <div className="mb-16">
            <div className="card-elevated p-8">
              <h2 className="text-3xl font-bold text-indigo-600 flex items-center gap-3 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3.5 3.5 1.414 1.414A2 2 0 0 1 5.586 6h12.828a2 2 0 0 1 1.414.586L21.23 7.81a2 2 0 0 1 0 2.828L19.814 12.05A2 2 0 0 1 18.4 12.636H5.6A2 2 0 0 1 4.186 12.05L2.77 10.636a2 2 0 0 1 0-2.828L4.186 6.39A2 2 0 0 1 5.6 5.814h12.8a2 2 0 0 1 1.414.586L21.23 7.81"></path><path d="M12 22v-6"></path><path d="M9 16h6"></path></svg>
                Core Strategy: Spearhead with High-Trust Channels
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                The GTM strategy for the first 12 months is centered on a "spearhead model." We will leverage the high-trust, high-relevance channels of the CEO's personal network and the Belgian Odoo annual event to acquire a critical mass of ideal first users. The goal is not broad awareness but deep penetration and validation within the Odoo PM community. This initial traction will fuel all future expansion.
              </p>
            </div>
          </div>

          {/* Market Segments */}
          <div className="mb-16">
            <h2 className="section-title text-center mb-12">Target Market Segments</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {marketSegments.map((segment, index) => (
                <div 
                  key={index} 
                  className="card-elevated hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{segment.segment}</h3>
                    <p className="text-slate-600">{segment.description}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Market Size</h4>
                      <p className="text-slate-600 text-sm">{segment.size}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Approach</h4>
                      <p className="text-slate-600 text-sm">{segment.approach}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Channels</h4>
                      <div className="flex flex-wrap gap-2">
                        {segment.channels.map((channel, cIndex) => (
                          <span key={cIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                            {channel}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GTM Pillars */}
          <div className="mb-16">
            <h2 className="section-title text-center mb-12">Go-to-Market Pillars</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {gtmPillars.map((pillar, index) => (
                <div 
                  key={index} 
                  className="card-elevated hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{pillar.pillar}</h3>
                      <p className="text-slate-600">{pillar.description}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Key Initiatives</h4>
                    <ul className="space-y-2">
                      {pillar.initiatives.map((initiative, iIndex) => (
                        <li key={iIndex} className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-slate-700 text-sm">{initiative}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="section-title text-center mb-12">12-Month Execution Timeline</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              
              <div className="space-y-8">
                {timeline.map((phase, index) => (
                  <div key={index} className="relative flex items-start space-x-6">
                    {/* Timeline Dot */}
                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-soft">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="card-elevated flex-1 hover-scale">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-slate-900">{phase.quarter}</h3>
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold">
                          {phase.focus}
                        </span>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        {phase.activities.map((activity, aIndex) => (
                          <div key={aIndex} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
                            <span className="text-blue-500 font-bold text-lg">•</span>
                            <span className="text-slate-700 text-sm">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="card-elevated">
            <h2 className="section-title text-center mb-8">Success Metrics & KPIs</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { metric: 'Customer Acquisition', target: '500+', description: 'New customers in first year' },
                { metric: 'Revenue Growth', target: '300%', description: 'Year-over-year growth' },
                { metric: 'Market Share', target: '5%', description: 'In target segments' },
                { metric: 'Customer Satisfaction', target: '95%', description: 'Net Promoter Score' }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl hover-scale">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{item.target}</div>
                  <div className="font-semibold text-slate-900 mb-1">{item.metric}</div>
                  <div className="text-sm text-slate-600">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
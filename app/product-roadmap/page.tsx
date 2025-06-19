import React from 'react'
import roadmapData from '../../data/product-roadmap.json'

type Initiative = {
  title: string;
  items: string[];
};

type Phase = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coreFocus: string;
  initiatives: Initiative[];
  successMetrics: string[];
};

type Roadmap = {
  title: string;
  subtitle: string;
  phases: Phase[];
};

const roadmap = roadmapData as Roadmap;

export default function ProductRoadmapPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="section-title">{roadmap.title}</h1>
      <p className="text-secondary-700 mb-4 text-lg">{roadmap.subtitle}</p>
      <div className="space-y-10">
        {roadmap.phases.map((phase) => (
          <div key={phase.id} className="card">
            <h2 className="text-xl font-bold text-primary-700 mb-1">{phase.title} <span className="text-secondary-600 font-normal">({phase.subtitle})</span></h2>
            <p className="text-secondary-800 mb-2">{phase.description}</p>
            <div className="mb-2">
              <span className="font-semibold text-primary-600">Core Focus:</span> {phase.coreFocus}
            </div>
            <div className="mb-2">
              <span className="font-semibold text-primary-600">Key Initiatives:</span>
              <ul className="list-disc ml-6 mt-1">
                {phase.initiatives.map((initiative, idx) => (
                  <li key={idx} className="mb-1">
                    <span className="font-medium text-secondary-900">{initiative.title}:</span>
                    <ul className="list-[circle] ml-6">
                      {initiative.items.map((item, i) => (
                        <li key={i} className="text-secondary-700">{item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-semibold text-primary-600">Success Metrics:</span>
              <ul className="list-disc ml-6 mt-1">
                {phase.successMetrics.map((metric, idx) => (
                  <li key={idx} className="text-secondary-700">{metric}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 
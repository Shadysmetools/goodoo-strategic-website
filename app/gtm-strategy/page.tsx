import React from 'react'
import gtmData from '../../data/gtm-strategy.json'

type Initiative = {
  title: string;
  description: string;
  actions: string[];
  objective: string;
};

type Phase = {
  id: string;
  title: string;
  subtitle: string;
  initiatives: Initiative[];
};

type GTMStrategy = {
  title: string;
  subtitle: string;
  coreStrategy: string;
  description: string;
  phases: Phase[];
};

const gtm = gtmData as GTMStrategy;

export default function GTMStrategyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="section-title">{gtm.title}</h1>
      <p className="text-secondary-700 mb-2 text-lg">{gtm.subtitle}</p>
      <div className="mb-4">
        <span className="font-semibold text-primary-600">Core Strategy:</span> {gtm.coreStrategy}
      </div>
      <p className="text-secondary-800 mb-6">{gtm.description}</p>
      <div className="space-y-10">
        {gtm.phases.map((phase) => (
          <div key={phase.id} className="card">
            <h2 className="text-xl font-bold text-primary-700 mb-1">{phase.title} <span className="text-secondary-600 font-normal">({phase.subtitle})</span></h2>
            {phase.initiatives.map((initiative, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="text-lg font-semibold text-secondary-900 mb-1">{initiative.title}</h3>
                <p className="text-secondary-700 mb-1">{initiative.description}</p>
                <div className="mb-1">
                  <span className="font-semibold text-primary-600">Actions:</span>
                  <ul className="list-disc ml-6 mt-1">
                    {initiative.actions.map((action, i) => (
                      <li key={i} className="text-secondary-700">{action}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="font-semibold text-primary-600">Objective:</span> {initiative.objective}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
} 
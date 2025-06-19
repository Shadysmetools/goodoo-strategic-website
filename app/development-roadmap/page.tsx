import React from 'react'
import roadmapData from '../../data/development-roadmap.json'

type Phase = {
  id: string;
  title: string;
  deadline: string;
  sprint?: string;
  features?: string[];
  userStories?: string[];
  sprints?: { id: string; title: string; feature?: string; features?: string[] }[];
  removedFeature?: string;
};

type Roadmap = {
  title: string;
  subtitle: string;
  executiveSummary: Record<string, { title: string; description: string; deadline: string }>;
  phases: Phase[];
  developmentTimeline: { phase: string; sprint: string; keyFeatures: string; deadline: string }[];
  userStoriesSummary: { phase: string; sprint: string; userStoriesCount: number; percentage: number }[];
  highComplexityTask: { title: string; description: string };
  sprintBreakdown: Record<string, { title: string; goals: string[]; scope: string[]; deliverables: string[] }>;
};

const roadmap = roadmapData as Roadmap;

export default function DevelopmentRoadmapPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-10">
      <h1 className="section-title">{roadmap.title}</h1>
      <p className="text-secondary-700 mb-4 text-lg">{roadmap.subtitle}</p>
      <div className="card mb-6">
        <h2 className="text-lg font-bold text-primary-700 mb-2">Executive Summary</h2>
        <ul className="list-disc ml-6 mt-1">
          {Object.values(roadmap.executiveSummary).map((phase, idx) => (
            <li key={idx} className="mb-1">
              <span className="font-medium text-secondary-900">{phase.title}:</span> {phase.description} <span className="text-secondary-600">(Deadline: {phase.deadline})</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="card mb-6">
        <h2 className="text-lg font-bold text-primary-700 mb-2">Phases</h2>
        {roadmap.phases.map((phase, idx) => (
          <div key={phase.id} className="mb-6">
            <h3 className="text-md font-semibold text-primary-600 mb-1">{phase.title} <span className="text-secondary-600">(Deadline: {phase.deadline})</span></h3>
            {phase.sprint && <div className="mb-1"><span className="font-semibold text-secondary-900">Sprint:</span> {phase.sprint}</div>}
            {phase.features && <div className="mb-1"><span className="font-semibold text-secondary-900">Features:</span>
              <ul className="list-disc ml-6 mt-1">{phase.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
            </div>}
            {phase.userStories && <div className="mb-1"><span className="font-semibold text-secondary-900">User Stories:</span>
              <ul className="list-disc ml-6 mt-1">{phase.userStories.map((us, i) => <li key={i}>{us}</li>)}</ul>
            </div>}
            {phase.sprints && <div className="mb-1"><span className="font-semibold text-secondary-900">Sprints:</span>
              <ul className="list-disc ml-6 mt-1">{phase.sprints.map((s, i) => <li key={i}>{s.title} {s.feature && `- ${s.feature}`}</li>)}</ul>
            </div>}
            {phase.removedFeature && <div className="mb-1"><span className="font-semibold text-secondary-900">Removed Feature:</span> {phase.removedFeature}</div>}
          </div>
        ))}
      </div>
      <div className="card mb-6">
        <h2 className="text-lg font-bold text-primary-700 mb-2">Development Timeline</h2>
        <ul className="list-disc ml-6 mt-1">
          {roadmap.developmentTimeline.map((item, idx) => (
            <li key={idx}><span className="font-medium text-secondary-900">{item.phase}:</span> Sprint {item.sprint} - {item.keyFeatures} <span className="text-secondary-600">(Deadline: {item.deadline})</span></li>
          ))}
        </ul>
      </div>
      <div className="card mb-6">
        <h2 className="text-lg font-bold text-primary-700 mb-2">User Stories Summary</h2>
        <ul className="list-disc ml-6 mt-1">
          {roadmap.userStoriesSummary.map((us, idx) => (
            <li key={idx}><span className="font-medium text-secondary-900">{us.phase}:</span> {us.userStoriesCount} user stories ({us.percentage}%)</li>
          ))}
        </ul>
      </div>
      <div className="card mb-6">
        <h2 className="text-lg font-bold text-primary-700 mb-2">High-Complexity Task</h2>
        <div className="mb-1"><span className="font-semibold text-secondary-900">{roadmap.highComplexityTask.title}:</span> {roadmap.highComplexityTask.description}</div>
      </div>
      <div className="card">
        <h2 className="text-lg font-bold text-primary-700 mb-2">Sprint Breakdown</h2>
        {Object.values(roadmap.sprintBreakdown).map((sprint, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-md font-semibold text-primary-600 mb-1">{sprint.title}</h3>
            <div className="mb-1"><span className="font-semibold text-secondary-900">Goals:</span>
              <ul className="list-disc ml-6 mt-1">{sprint.goals.map((g, i) => <li key={i}>{g}</li>)}</ul>
            </div>
            <div className="mb-1"><span className="font-semibold text-secondary-900">Scope:</span>
              <ul className="list-disc ml-6 mt-1">{sprint.scope.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>
            <div><span className="font-semibold text-secondary-900">Deliverables:</span>
              <ul className="list-disc ml-6 mt-1">{sprint.deliverables.map((d, i) => <li key={i}>{d}</li>)}</ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 
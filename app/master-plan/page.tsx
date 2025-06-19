import React from 'react'
import masterPlanData from '../../data/master-plan.json'
import { FaBullseye, FaChartLine, FaUsers, FaCalendarAlt, FaRegStar, FaCheckCircle, FaLightbulb } from 'react-icons/fa'

const data = masterPlanData as any;

export default function MasterPlanPage() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-12">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-primary-700 flex items-center justify-center gap-2">
          <FaChartLine className="inline text-purple-500" /> {data.title}
        </h1>
        <p className="text-xl text-secondary-600">Version {data.version} &bull; {data.date} &bull; <span className="font-semibold">{data.author}</span></p>
        <span className="inline-block bg-purple-100 text-purple-700 rounded px-3 py-1 font-semibold mt-2">{data.status}</span>
      </div>
      {/* Executive Summary */}
      <div className="card bg-gradient-to-r from-purple-50 to-white shadow-lg p-8">
        <h2 className="text-2xl font-bold text-primary-700 mb-2 flex items-center gap-2"><FaLightbulb className="text-yellow-400" /> Executive Summary</h2>
        <div className="mb-2"><span className="font-semibold text-primary-600">Vision:</span> {data.executiveSummary.vision}</div>
        <div className="mb-2"><span className="font-semibold text-primary-600">Mission:</span> {data.executiveSummary.mission}</div>
        <div className="mb-2"><span className="font-semibold text-primary-600">Core Problem:</span> {data.executiveSummary.coreProblem}</div>
        <div>
          <span className="font-semibold text-primary-600">Strategic Goals:</span>
          <ul className="list-disc ml-6 mt-1">
            {data.executiveSummary.strategicGoals.map((goal: any, i: number) => (
              <li key={i} className="mb-1"><span className="font-medium text-secondary-900">{goal.title}:</span> {goal.description}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* KPIs */}
      <div className="card bg-white shadow p-8">
        <h2 className="text-xl font-bold text-primary-700 mb-2 flex items-center gap-2"><FaBullseye className="text-green-600" /> Year-End KPIs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(data.kpis.yearEndTargets).map(([key, kpi]: any, i: number) => (
            <div key={i} className="bg-purple-50 rounded-lg p-4 shadow flex flex-col gap-2">
              <h3 className="font-semibold text-primary-600 text-lg flex items-center gap-2">
                <FaRegStar className="text-yellow-400" /> {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str: string) => str.toUpperCase())}
              </h3>
              <div className="text-secondary-700">Target: <span className="font-bold text-primary-700">{kpi.target}</span> {kpi.unit}</div>
              <div className="text-secondary-600 text-sm">Strategic Goal: {kpi.strategicGoal}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Product Strategy */}
      <div className="card bg-gradient-to-r from-white to-purple-50 shadow p-8">
        <h2 className="text-xl font-bold text-primary-700 mb-2">Product Strategy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          {data.productStrategy.corePillars.map((pillar: any, i: number) => (
            <div key={i} className="bg-white border-l-4 border-purple-400 p-4 rounded shadow-sm">
              <h3 className="font-semibold text-primary-600 mb-1">{pillar.title}</h3>
              <p className="text-secondary-700">{pillar.description}</p>
            </div>
          ))}
        </div>
        <div className="mb-2">
          <span className="font-semibold text-primary-600">Primary Audience:</span> {data.productStrategy.targetAudience.primary}
        </div>
        <div>
          <span className="font-semibold text-primary-600">Segments:</span>
          <ul className="list-disc ml-6 mt-1">
            {data.productStrategy.targetAudience.segments.map((seg: any, i: number) => (
              <li key={i} className="mb-1"><span className="font-medium text-secondary-900">{seg.title}:</span> {seg.description}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* Quarterly Roadmap */}
      <div className="card bg-white shadow p-8">
        <h2 className="text-xl font-bold text-primary-700 mb-2 flex items-center gap-2"><FaCalendarAlt className="text-blue-500" /> Quarterly Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.quarterlyRoadmap.map((q: any, i: number) => (
            <div key={i} className="bg-purple-50 rounded-lg p-4 shadow flex flex-col gap-2">
              <h3 className="font-semibold text-primary-600 text-lg flex items-center gap-2">
                <FaCalendarAlt className="text-blue-500" /> {q.quarter} <span className="text-secondary-600 font-normal">({q.period})</span>
              </h3>
              <div className="mb-1"><span className="font-semibold text-secondary-900">Theme:</span> {q.theme}</div>
              <div className="mb-1"><span className="font-semibold text-secondary-900">Primary Goal:</span> {q.primaryGoal}</div>
              <div className="mb-1"><span className="font-semibold text-secondary-900">Key Initiatives:</span>
                <ul className="list-disc ml-6">
                  {q.keyInitiatives.map((init: any, j: number) => (
                    <li key={j} className="text-secondary-700">{init.title}: {init.description}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-1"><span className="font-semibold text-secondary-900">KPIs:</span>
                <ul className="list-disc ml-6">
                  {Object.entries(q.kpis).map(([k, v]: any, j: number) => (
                    <li key={j} className="text-secondary-700">{k.replace(/([A-Z])/g, ' $1').replace(/^./, (str: string) => str.toUpperCase())}: {v.target} {v.unit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 
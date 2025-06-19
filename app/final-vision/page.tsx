import React from 'react'
import finalVisionData from '../../data/final-vision.json'
import { FaCheckCircle, FaRocket, FaUsers, FaCogs, FaLightbulb, FaEnvelope, FaLink, FaRegStar, FaRegCalendarAlt } from 'react-icons/fa'

const data = finalVisionData as any;

export default function FinalVisionPage() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-12">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-primary-700 flex items-center justify-center gap-2">
          <FaRocket className="inline text-indigo-500" /> {data.title}
        </h1>
        <p className="text-xl text-secondary-600">{data.subtitle}</p>
      </div>
      {/* Executive Summary */}
      <div className="card bg-gradient-to-r from-indigo-50 to-white shadow-lg p-8">
        <h2 className="text-2xl font-bold text-primary-700 mb-2 flex items-center gap-2"><FaLightbulb className="text-yellow-400" /> Executive Summary</h2>
        <p className="mb-2 text-secondary-800">{data.executiveSummary.description}</p>
        <div className="flex flex-wrap gap-4 items-center mb-2">
          <div className="bg-indigo-100 rounded px-3 py-1 text-indigo-700 font-semibold">Key Users: {data.executiveSummary.keyTargetUsers.join(', ')}</div>
          <a href={data.executiveSummary.liveMockupTestPlatform} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary-600 hover:underline"><FaLink /> Live Mockup</a>
        </div>
      </div>
      {/* What is Goodoo AI */}
      <div className="card bg-white shadow p-8">
        <h2 className="text-xl font-bold text-primary-700 mb-2">What is Goodoo AI?</h2>
        <p className="mb-2 text-secondary-800">{data.whatIsGoodooAI.description}</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none">
          {data.whatIsGoodooAI.features.map((f: string, i: number) => (
            <li key={i} className="flex items-center gap-2 text-secondary-700"><FaCheckCircle className="text-green-500" /> {f}</li>
          ))}
        </ul>
      </div>
      {/* Final Vision */}
      <div className="card bg-gradient-to-r from-indigo-100 to-white shadow p-8">
        <h2 className="text-xl font-bold text-primary-700 mb-2">Final Vision</h2>
        <p className="mb-2 text-secondary-800">{data.finalVision.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-primary-600 mb-1">Capabilities</h3>
            <ul className="list-disc ml-6">
              {data.finalVision.capabilities.map((c: string, i: number) => (
                <li key={i} className="text-secondary-700">{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary-600 mb-1">Key Future Capabilities</h3>
            <ul className="list-disc ml-6">
              {data.finalVision.keyFutureCapabilities.map((c: string, i: number) => (
                <li key={i} className="text-secondary-700">{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Core Features */}
      <div className="card bg-white shadow p-8">
        <h2 className="text-xl font-bold text-primary-700 mb-4">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(data.coreFeatures).map(([key, feature]: any, i: number) => (
            <div key={i} className="bg-indigo-50 rounded-lg p-4 shadow flex flex-col gap-2">
              <h3 className="font-semibold text-primary-600 text-lg flex items-center gap-2">
                {feature.title}
              </h3>
              {feature.features && (
                <ul className="list-disc ml-6">
                  {feature.features.map((f: string, j: number) => (
                    <li key={j} className="text-secondary-700">{f}</li>
                  ))}
                </ul>
              )}
              {feature.description && <p className="text-secondary-700 text-sm">{feature.description}</p>}
              {feature.capabilities && (
                <ul className="list-disc ml-6">
                  {feature.capabilities.map((c: string, j: number) => (
                    <li key={j} className="text-secondary-700">{c}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* User Flow */}
      <div className="card bg-gradient-to-r from-white to-indigo-50 shadow p-8">
        <h2 className="text-xl font-bold text-primary-700 mb-2">User Flow</h2>
        <ol className="list-decimal ml-6 space-y-1">
          {data.userFlow.map((step: string, i: number) => (
            <li key={i} className="text-secondary-700">{step}</li>
          ))}
        </ol>
      </div>
      {/* Technical Specifications */}
      <div className="card bg-white shadow p-8">
        <h2 className="text-xl font-bold text-primary-700 mb-4">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(data.technicalSpecifications).map(([key, spec]: any, i: number) => (
            <div key={i} className="bg-white border-l-4 border-indigo-400 p-4 rounded shadow-sm">
              <h3 className="font-semibold text-primary-600 mb-1">{spec.title}</h3>
              <ul className="list-disc ml-6">
                {spec.features.map((f: string, j: number) => (
                  <li key={j} className="text-secondary-700">{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Integrations */}
      <div className="card bg-gradient-to-r from-indigo-50 to-white shadow p-8">
        <h2 className="text-xl font-bold text-primary-700 mb-2">Integrations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(data.integrationDetails).map(([key, integration]: any, i: number) => (
            <div key={i} className="bg-white border-l-4 border-green-400 p-4 rounded shadow-sm">
              <h3 className="font-semibold text-green-700 mb-1">{integration.title || key.replace(/([A-Z])/g, ' $1').replace(/^./, (str: string) => str.toUpperCase())}</h3>
              {integration.features && (
                <ul className="list-disc ml-6">
                  {integration.features.map((f: string, j: number) => (
                    <li key={j} className="text-secondary-700">{f}</li>
                  ))}
                </ul>
              )}
              {Array.isArray(integration) && (
                <ul className="list-disc ml-6">
                  {integration.map((f: string, j: number) => (
                    <li key={j} className="text-secondary-700">{f}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* MVP Deliverables */}
      <div className="card bg-white shadow p-8">
        <h2 className="text-xl font-bold text-primary-700 mb-2">MVP Deliverables</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-primary-600 mb-1">Included</h3>
            <ul className="list-disc ml-6">
              {data.mvpDeliverables.included.map((item: string, i: number) => (
                <li key={i} className="text-secondary-700">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary-600 mb-1">Not Included</h3>
            <ul className="list-disc ml-6">
              {data.mvpDeliverables.notIncluded.map((item: string, i: number) => (
                <li key={i} className="text-secondary-700">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Differentiators */}
      <div className="card bg-gradient-to-r from-indigo-50 to-white shadow p-8">
        <h2 className="text-xl font-bold text-primary-700 mb-2">Differentiators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-primary-600 mb-1">Key Advantages</h3>
            <ul className="list-disc ml-6">
              {data.differentiators.keyAdvantages.map((item: string, i: number) => (
                <li key={i} className="text-secondary-700">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary-600 mb-1">Business Value</h3>
            <div className="mb-2">
              <span className="font-semibold text-green-700">Time Savings:</span>
              <ul className="list-disc ml-6">
                {data.differentiators.businessValue.timeSavings.map((item: string, i: number) => (
                  <li key={i} className="text-secondary-700">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-semibold text-green-700">Quality Improvements:</span>
              <ul className="list-disc ml-6">
                {data.differentiators.businessValue.qualityImprovements.map((item: string, i: number) => (
                  <li key={i} className="text-secondary-700">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Roadmap */}
      <div className="card bg-white shadow p-8">
        <h2 className="text-xl font-bold text-primary-700 mb-2">Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-primary-600 mb-1">Upcoming</h3>
            <p className="mb-1 text-secondary-700 font-medium">{data.roadmap.upcoming.title}</p>
            <ul className="list-disc ml-6">
              {data.roadmap.upcoming.features.map((item: string, i: number) => (
                <li key={i} className="text-secondary-700">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary-600 mb-1">Advanced Features</h3>
            <ul className="list-disc ml-6">
              {data.roadmap.advancedFeatures.map((item: string, i: number) => (
                <li key={i} className="text-secondary-700">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Contact Information */}
      <div className="card bg-gradient-to-r from-indigo-50 to-white shadow p-8">
        <h2 className="text-xl font-bold text-primary-700 mb-2 flex items-center gap-2"><FaEnvelope className="text-primary-600" /> Contact Information</h2>
        <ul className="list-none space-y-1">
          <li><span className="font-semibold text-primary-600">Product Lead:</span> {data.contactInformation.productLead}</li>
          <li><span className="font-semibold text-primary-600">Email:</span> <a href={`mailto:${data.contactInformation.email}`} className="text-primary-600 hover:underline">{data.contactInformation.email}</a></li>
          <li><span className="font-semibold text-primary-600">Test Platform:</span> <a href={data.contactInformation.testPlatform} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">{data.contactInformation.testPlatform}</a></li>
          <li><span className="font-semibold text-primary-600">Company:</span> {data.contactInformation.company}</li>
        </ul>
      </div>
    </div>
  )
} 
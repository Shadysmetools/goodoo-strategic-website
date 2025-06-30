import React from 'react'
import Link from 'next/link'

export default function CPOProductRoadmap() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/cpo"
            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2"
          >
            <span>←</span>
            <span>Back to CPO Dashboard</span>
          </Link>
        </div>

        {/* Header Section */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Goodoo.ai Product Roadmap</h1>
          <p className="mt-4 text-lg md:text-xl text-slate-600">A 12-Month Strategic Plan for a Market-Landing Launch</p>
        </header>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Bar */}
          <div className="hidden md:block absolute left-1/2 -ml-0.5 w-1 bg-slate-200 h-full"></div>

          {/* Quarter 1: Months 1-3 */}
          <div className="mb-12 md:flex md:items-center">
            <div className="md:w-1/2 md:pr-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                <h2 className="text-2xl font-bold text-blue-600">Months 1-3 (Q3 2025)</h2>
                <p className="text-lg font-semibold text-slate-700 mt-1">MVP Hardening & Beta Readiness</p>
                <div className="mt-4">
                  <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    Phase Objective: Sellable MVP
                  </h3>
                  <p className="text-slate-600 mt-1 pl-7">Transition from a prototype to a stable, polished, and sellable Minimum Viable Product, focusing on core functionality, reliability, and UX.</p>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-slate-800">Key Initiatives & Features:</h3>
                  <ul className="list-disc list-inside mt-2 space-y-2 text-slate-600">
                    <li><strong>Chrome Extension Polish:</strong> Perfect auto-start/stop and finalize intuitive UI.</li>
                    <li><strong>Core Platform Hardening:</strong> Ensure seamless recording-to-chat experience.</li>
                    <li><strong>Visual Artifact Generation Mockup:</strong> Implement UI for generating step-by-step guides (can use placeholder content).</li>
                    <li><strong>Infrastructure & Onboarding:</strong> Build logic for premium limits and create a guided setup process.</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-slate-800">Expected Outcomes:</h3>
                  <ul className="list-disc list-inside mt-2 space-y-2 text-slate-600">
                    <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 flex-shrink-0 mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg><span>A stable and reliable MVP ready for the first 500 users.</span></li>
                    <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 flex-shrink-0 mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg><span>A polished user experience that feels intuitive and trustworthy.</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2"></div>
          </div>

          {/* Quarter 2: Months 4-6 */}
          <div className="mb-12 md:flex md:items-center md:flex-row-reverse">
            <div className="md:w-1/2 md:pl-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                <h2 className="text-2xl font-bold text-blue-600">Months 4-6 (Q4 2025)</h2>
                <p className="text-lg font-semibold text-slate-700 mt-1">Launch, Feedback & Iteration</p>
                <div className="mt-4">
                  <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    Phase Objective: Market Validation & User Activation
                  </h3>
                  <p className="text-slate-600 mt-1 pl-7">Successfully launch at the Odoo event, onboard the first beta users, and aggressively iterate based on real-world feedback.</p>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-slate-800">Key Initiatives & Features:</h3>
                  <ul className="list-disc list-inside mt-2 space-y-2 text-slate-600">
                    <li><strong>Beta User Onboarding & Support:</strong> Personally onboard the first 100 users.</li>
                    <li><strong>Feedback Collection System:</strong> Implement robust in-app feedback tools.</li>
                    <li><strong>Visual Artifact Engine (V1):</strong> Connect UI to a live AI backend and allow PDF/Markdown export.</li>
                    <li><strong>Monetization & Billing:</strong> Fully implement payment gateway (e.g., Stripe) for all tiers.</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-slate-800">Expected Outcomes:</h3>
                  <ul className="list-disc list-inside mt-2 space-y-2 text-slate-600">
                    <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 flex-shrink-0 mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg><span>100+ activated beta users providing consistent feedback.</span></li>
                    <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 flex-shrink-0 mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg><span>First paying customers acquired.</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2"></div>
          </div>

          {/* Quarter 3: Months 7-9 */}
          <div className="mb-12 md:flex md:items-center">
            <div className="md:w-1/2 md:pr-8">
               <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                  <h2 className="text-2xl font-bold text-blue-600">Months 7-9 (Q1 2026)</h2>
                  <p className="text-lg font-semibold text-slate-700 mt-1">Expansion & Intelligence</p>
                  <div className="mt-4">
                    <h3 className="font-bold text-slate-800 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                      Phase Objective: Deepen Value & Expand Reach
                    </h3>
                    <p className="text-slate-600 mt-1 pl-7">Move beyond the initial feature set to deepen the product's intelligence and expand its integration capabilities to adjacent markets.</p>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold text-slate-800">Key Initiatives & Features:</h3>
                    <ul className="list-disc list-inside mt-2 space-y-2 text-slate-600">
                      <li><strong>Platform Expansion:</strong> Integrate with Zoom & Microsoft Teams.</li>
                      <li><strong>Enhanced Intelligence:</strong> Develop cross-project memory and semantic search capabilities.</li>
                      <li><strong>Collaboration Features:</strong> Introduce team invitations and public sharing links.</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold text-slate-800">Expected Outcomes:</h3>
                    <ul className="list-disc list-inside mt-2 space-y-2 text-slate-600">
                      <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 flex-shrink-0 mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg><span>Measurable increase in user retention and engagement metrics.</span></li>
                      <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 flex-shrink-0 mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg><span>First teams actively collaborating on the platform.</span></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className="hidden md:block md:w-1/2"></div>
          </div>

          {/* Quarter 4: Months 10-12 */}
          <div className="md:flex md:items-center md:flex-row-reverse">
            <div className="md:w-1/2 md:pl-8">
               <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                  <h2 className="text-2xl font-bold text-blue-600">Months 10-12 (Q2 2026)</h2>
                  <p className="text-lg font-semibold text-slate-700 mt-1">Scaling & Automation</p>
                  <div className="mt-4">
                    <h3 className="font-bold text-slate-800 flex items-center gap-2">
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        Phase Objective: Prepare for Growth
                    </h3>
                    <p className="text-slate-600 mt-1 pl-7">Focus on scalability, automation, and preparing the product and team for significant user growth and enterprise clients.</p>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold text-slate-800">Key Initiatives & Features:</h3>
                    <ul className="list-disc list-inside mt-2 space-y-2 text-slate-600">
                      <li><strong>Enterprise Readiness:</strong> Develop role-based access control and custom contract infrastructure.</li>
                      <li><strong>Workflow Automation:</strong> Allow action items to be pushed to popular PM tools (e.g., Trello, Jira).</li>
                      <li><strong>Performance & Scalability:</strong> Refactor and optimize backend services to handle higher volume.</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold text-slate-800">Expected Outcomes:</h3>
                    <ul className="list-disc list-inside mt-2 space-y-2 text-slate-600">
                      <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 flex-shrink-0 mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg><span>Platform is ready for a public launch beyond the beta group.</span></li>
                      <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 flex-shrink-0 mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg><span>A clear path to the first enterprise-level contracts is established.</span></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className="hidden md:block md:w-1/2"></div>
          </div>

        </div>
      </div>
    </div>
  )
} 
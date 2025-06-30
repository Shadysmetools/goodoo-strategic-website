import React from 'react'
import Link from 'next/link'

export default function CPOGTMStrategy() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/cpo"
            className="text-pink-600 hover:text-pink-700 font-semibold flex items-center space-x-2"
          >
            <span>←</span>
            <span>Back to CPO Dashboard</span>
          </Link>
        </div>

        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Go-to-Market Strategy</h1>
          <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">A Targeted 12-Month Plan to Capture the Initial Market</p>
        </header>

        {/* Core Strategy Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-indigo-600 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3.5 3.5 1.414 1.414A2 2 0 0 1 5.586 6h12.828a2 2 0 0 1 1.414.586L21.23 7.81a2 2 0 0 1 0 2.828L19.814 12.05A2 2 0 0 1 18.4 12.636H5.6A2 2 0 0 1 4.186 12.05L2.77 10.636a2 2 0 0 1 0-2.828L4.186 6.39A2 2 0 0 1 5.6 5.814h12.8a2 2 0 0 1 1.414.586L21.23 7.81"></path><path d="M12 22v-6"></path><path d="M9 16h6"></path></svg>
              Core Strategy: Spearhead with High-Trust Channels
            </h2>
            <p className="mt-4 text-slate-600">The GTM strategy for the first 12 months is centered on a "spearhead model." We will leverage the high-trust, high-relevance channels of the CEO's personal network and the Belgian Odoo annual event to acquire a critical mass of ideal first users. The goal is not broad awareness but deep penetration and validation within the Odoo PM community. This initial traction will fuel all future expansion.</p>
          </div>
        </div>

        {/* Phases Container */}
        <div className="space-y-16">

          {/* Phase 1: Months 1-3 */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-slate-800">Months 1-3 (Q3 2025)</h3>
              <p className="text-xl text-slate-500 mt-1">Pre-Launch & Event Preparation</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Initiative 1 Card */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 flex flex-col">
                <h4 className="text-xl font-semibold text-indigo-700">Initiative 1: "Founder's Circle" Email Campaign</h4>
                <p className="text-slate-600 mt-2">Target the CEO's list of 500 Odoo PMs with a personal invitation to an exclusive circle.</p>
                <div className="mt-4 space-y-3">
                  <p><strong>Action:</strong> Draft a 3-part email sequence (Teaser, Demo, Invite).</p>
                  <p><strong>Objective:</strong> Secure 50-100 sign-ups for the beta waitlist before the event.</p>
                </div>
              </div>
              {/* Initiative 2 Card */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 flex flex-col">
                <h4 className="text-xl font-semibold text-indigo-700">Initiative 2: Odoo Event "Shock & Awe" Package</h4>
                <p className="text-slate-600 mt-2">Prepare materials to make a significant impact at the Belgian Odoo event and be the most talked-about new tool.</p>
                <div className="mt-4 space-y-3">
                  <p><strong>Action:</strong> Develop event collateral (Live Demo Script, Landing Page, One-Pager).</p>
                  <p><strong>Objective:</strong> Be fully prepared to capture leads, provide stunning demos, and convert attendees.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2: Months 4-6 */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-slate-800">Months 4-6 (Q4 2025)</h3>
              <p className="text-xl text-slate-500 mt-1">Launch Execution & Early Adopter Program</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Initiative 1 Card */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 flex flex-col">
                <h4 className="text-xl font-semibold text-indigo-700">Initiative 1: High-Impact Event Presence</h4>
                <p className="text-slate-600 mt-2">Execute the plan at the Odoo event with a focus on active engagement and continuous live demos.</p>
                <div className="mt-4 space-y-3">
                  <p><strong>Action:</strong> Actively network and drive traffic to your presence.</p>
                  <p><strong>Objective:</strong> Acquire at least 50 high-quality beta sign-ups directly from the event.</p>
                </div>
              </div>
              {/* Initiative 2 Card */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 flex flex-col">
                <h4 className="text-xl font-semibold text-indigo-700">Initiative 2: White-Glove Onboarding Program</h4>
                <p className="text-slate-600 mt-2">Treat the first 100 users like VIPs. Their success is your success.</p>
                <div className="mt-4 space-y-3">
                  <p><strong>Action:</strong> Personally onboard every beta user via 1-on-1 video call and create a private Discord/Slack.</p>
                  <p><strong>Objective:</strong> Achieve &gt;70% activation rate and identify the first 5-10 power users for case studies.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3: Months 7-12 */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-slate-800">Months 7-12 (Q1-Q2 2026)</h3>
              <p className="text-xl text-slate-500 mt-1">Amplify, Expand & Scale</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Initiative 1 Card */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 flex flex-col">
                <h4 className="text-xl font-semibold text-indigo-700">Initiative 1: Amplify with Case Studies</h4>
                <p className="text-slate-600 mt-2">Turn early adopter success into powerful marketing assets and social proof.</p>
                 <div className="mt-4 space-y-3">
                    <p><strong>Action:</strong> Interview top 5-10 power users and create detailed case studies (blog posts & videos).</p>
                    <p><strong>Objective:</strong> Develop a library of social proof for future marketing and sales enablement.</p>
                  </div>
              </div>
              {/* Initiative 2 Card */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 flex flex-col">
                <h4 className="text-xl font-semibold text-indigo-700">Initiative 2: Expand to New Channels</h4>
                <p className="text-slate-600 mt-2">Use the initial traction and case studies to expand into broader, scalable channels.</p>
                <div className="mt-4 space-y-3">
                     <p><strong>Action:</strong> Begin targeted content marketing and launch LinkedIn ad campaigns at "Project Managers".</p>
                    <p><strong>Objective:</strong> Establish a repeatable, scalable channel for lead generation beyond the initial spearhead.</p>
                  </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
} 
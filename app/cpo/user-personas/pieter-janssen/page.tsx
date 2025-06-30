import React from 'react';

export default function UserPersonaPage() {
  return (
    <div className="text-slate-600 bg-slate-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">User Persona Profile</h1>
          <p className="mt-2 text-lg md:text-xl text-slate-500">Your Ideal First Customer: The Odoo Project Manager</p>
        </header>

        <div className="max-w-6xl mx-auto space-y-8">
          <div className="persona-card p-6 md:p-8 bg-white rounded-lg shadow-md border border-slate-200">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-indigo-500 flex items-center justify-center text-white text-6xl font-bold">
                  P
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-bold text-slate-800">Pieter Janssen</h2>
                <p className="text-xl text-indigo-600 font-semibold mt-1">Odoo Project Manager</p>
                <blockquote className="mt-4 text-slate-600 italic border-l-4 border-indigo-200 pl-4 py-2">
                  "I feel like I live in back-to-back meetings. By the end of the week, I can't remember who approved which change or the exact steps I showed the client on Tuesday. It's all a blur, and the documentation is always a week behind."
                </blockquote>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-8 lg:col-span-1">
              <div className="persona-card p-6 bg-white rounded-lg shadow-md border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Demographics</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Age:</strong> 32-45</li>
                  <li><strong>Location:</strong> Benelux region (e.g., Belgium, Netherlands)</li>
                  <li><strong>Experience:</strong> 5+ years in ERP, 2+ as a PM</li>
                  <li><strong>Company Size:</strong> Odoo Partner or mid-sized company</li>
                  <li><strong>Tech Savviness:</strong> High, but frustrated by tool fragmentation.</li>
                </ul>
              </div>
              <div className="persona-card p-6 bg-white rounded-lg shadow-md border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Motivations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Delivering projects on time and on budget.</span></li>
                  <li className="flex items-start gap-3"><svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>High client satisfaction and retention.</span></li>
                  <li className="flex items-start gap-3"><svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Being seen as an expert and trusted advisor.</span></li>
                  <li className="flex items-start gap-3"><svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Finding ways to work smarter, not harder.</span></li>
                </ul>
              </div>
            </div>

            <div className="space-y-8 lg:col-span-2">
              <div className="persona-card p-6 bg-white rounded-lg shadow-md border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Goals & Objectives</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><svg className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V2.75A.75.75 0 0110 2zM5.404 4.343a.75.75 0 010 1.06 6.5 6.5 0 109.192 0 .75.75 0 111.06-1.06 8 8 0 11-11.313 0 .75.75 0 011.06 0zM10 16a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 16z" /></svg><span>Maintain a perfect, up-to-date memory of every client interaction and decision.</span></li>
                  <li className="flex items-start gap-3"><svg className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V2.75A.75.75 0 0110 2zM5.404 4.343a.75.75 0 010 1.06 6.5 6.5 0 109.192 0 .75.75 0 111.06-1.06 8 8 0 11-11.313 0 .75.75 0 011.06 0zM10 16a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 16z" /></svg><span>Reduce time spent on manual tasks like writing meeting minutes and creating training docs.</span></li>
                  <li className="flex items-start gap-3"><svg className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V2.75A.75.75 0 0110 2zM5.404 4.343a.75.75 0 010 1.06 6.5 6.5 0 109.192 0 .75.75 0 111.06-1.06 8 8 0 11-11.313 0 .75.75 0 011.06 0zM10 16a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 16z" /></svg><span>Quickly onboard new team members to a project without having to re-explain everything.</span></li>
                  <li className="flex items-start gap-3"><svg className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V2.75A.75.75 0 0110 2zM5.404 4.343a.75.75 0 010 1.06 6.5 6.5 0 109.192 0 .75.75 0 111.06-1.06 8 8 0 11-11.313 0 .75.75 0 011.06 0zM10 16a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 16z" /></svg><span>Have a single source of truth for each project that both he and his clients can trust.</span></li>
                </ul>
              </div>
              <div className="persona-card p-6 bg-white rounded-lg shadow-md border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Pain Points & Frustrations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" /></svg><div><strong>"Project Amnesia":</strong> Details from meetings are lost almost immediately after the call ends.</div></li>
                  <li className="flex items-start gap-3"><svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" /></svg><div><strong>Documentation Lag:</strong> Manually creating guides is time-consuming and often inaccurate.</div></li>
                  <li className="flex items-start gap-3"><svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" /></svg><div><strong>Context Switching Chaos:</strong> Juggling multiple complex Odoo projects means details get mixed up.</div></li>
                  <li className="flex items-start gap-3"><svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" /></svg><div><strong>The "Said vs. Shown" Gap:</strong> Audio transcripts miss critical visual context from screen demos.</div></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="persona-card p-6 md:p-8 bg-white rounded-lg shadow-md border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">How Goodoo.ai Helps Pieter Win</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <h4 className="font-semibold text-red-700">From "Project Amnesia"</h4>
                <p className="text-green-700 font-semibold mt-1">To "Total Recall"</p>
                <p className="mt-1 text-sm">Provides a perfect, queryable memory of every meeting, capturing both audio and visual context.</p>
              </div>
              <div>
                <h4 className="font-semibold text-red-700">From Tedious Documentation</h4>
                <p className="text-green-700 font-semibold mt-1">To Instant Artifacts</p>
                <p className="mt-1 text-sm">Generate a detailed, visual training document in minutes, directly from a meeting recording.</p>
              </div>
              <div>
                <h4 className="font-semibold text-red-700">From Context Switching</h4>
                <p className="text-green-700 font-semibold mt-1">To Project Focus</p>
                <p className="mt-1 text-sm">A dedicated, intelligent workspace for each project ensures details are never mixed up between clients.</p>
              </div>
              <div>
                <h4 className="font-semibold text-red-700">From Ambiguity</h4>
                <p className="text-green-700 font-semibold mt-1">To a Single Source of Truth</p>
                <p className="mt-1 text-sm">Pull up the transcript, linked to the video, showing exactly what was said and shown for indisputable clarity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
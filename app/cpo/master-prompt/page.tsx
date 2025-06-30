import React from 'react'
import Link from 'next/link'

export default function CPOMasterPrompt() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/cpo/documents"
              className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-4"
            >
              ← Back to CPO Documents
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Master Prompt Framework</h1>
            <p className="text-xl text-gray-600">Core AI prompt framework and guidelines for Goodoo.ai product development</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Document Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-pink-50 rounded-lg">
                <div className="text-2xl font-bold text-pink-600">1.5 MB</div>
                <div className="text-sm text-gray-600">File Size</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">March 2025</div>
                <div className="text-sm text-gray-600">Last Updated</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">v2.1</div>
                <div className="text-sm text-gray-600">Version</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Executive Summary */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Executive Summary</h2>
              <p className="text-gray-700 mb-4">
                The Master Prompt Framework serves as the foundational AI interaction protocol for Goodoo.ai's product ecosystem. 
                This document outlines the standardized approach to prompt engineering, ensuring consistent, high-quality AI responses 
                across all product features and user interactions.
              </p>
              <p className="text-gray-700">
                This framework is essential for product teams to maintain AI response quality, user experience consistency, 
                and operational efficiency in our AI-powered features.
              </p>
            </div>

            {/* Core Principles */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Principles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-pink-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">User-Centric Design</h3>
                  <p className="text-gray-600">Prompts must prioritize user needs and deliver actionable, relevant responses.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Consistency</h3>
                  <p className="text-gray-600">Standardized prompt structures ensure uniform AI behavior across features.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Safety & Ethics</h3>
                  <p className="text-gray-600">All prompts must include safety guardrails and ethical considerations.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Performance Optimization</h3>
                  <p className="text-gray-600">Prompts should be optimized for speed, accuracy, and cost efficiency.</p>
                </div>
              </div>
            </div>

            {/* Prompt Structure */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Standard Prompt Structure</h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Template Format:</h3>
                <pre className="text-sm text-gray-700 whitespace-pre-wrap">
{`ROLE: Act as an expert technical writer and transcriber.
GOAL: Your task is to analyze the provided screen-recorded software demo and produce a "Visual Transcript." This transcript must perfectly integrate spoken dialogue with on-screen user interactions into a single, chronological flow.
OUTPUT FORMAT: The transcript must consist of two types of entries: Dialogue and Visual Actions.
Dialogue Entry:


Format: Start with the speaker's name in bold, followed by a colon, and then their verbatim dialogue.
Example: Sarah: That's it? Wow, that was easy. Thanks!
Visual Action Entry:


Format: Describe the user's interaction with a specific UI element. The description must be concise, written in the present tense, and formatted as a blockquote.
Example: > User clicks the "Create" button.
RULES & LOGIC:
Language & Dialect: Transcribe all dialogue verbatim in the original language and dialect spoken in the video. Do not translate the dialogue into English. Descriptions of visual actions should also be written in the same language as the dialogue to maintain consistency.


Chronology: Transcribe the conversation chronologically, identifying the speaker for each Dialogue Entry based on the names displayed.


Action Integration: When a user performs a key action (e.g., clicking a button, typing in a field, selecting a menu item), insert a Visual Action Entry.


Placement is Critical: The Visual Action Entry should be placed immediately after the dialogue that prompts it, or immediately before the dialogue that discusses its result. Use your judgment to create the most logical and easy-to-follow sequence.


Specificity: Do not use generic phrases like "clicks a button." Identify the button or element by its label (e.g., "Confirm," "Invoicing module," "Customer field"). If the label is unclear, use a descriptive name (e.g., "the user settings icon").


Timestamps & URL Changes: Each time the webpage changes to a new URL, this must be noted in its own paragraph. Start the line with the video timestamp in [HH:MM:SS] format, followed by the new URL.


Example: https://example.com/dashboard/settings
EXAMPLE OF PERFECT OUTPUT: Here is a short example of the required output format and flow. (Note: The language in this example is English for clarity, but your output should be in the language of the video).
John: Okay, I've filled in all the details for this client. Now, I'll head over to the settings page to adjust the defaults. https://example.com/dashboard/settings
John: Right, first thing is to change the default currency.
User clicks the "Default Currency" dropdown menu. User selects "EUR" from the list.`}
                </pre>
              </div>
            </div>

            {/* Implementation Guidelines */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Guidelines</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">1. Context Setting</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Always provide clear context about the AI's role</li>
                    <li>Include relevant user background information</li>
                    <li>Set appropriate constraints and limitations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">2. Instruction Clarity</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Use clear, unambiguous language</li>
                    <li>Specify expected output format</li>
                    <li>Include examples when helpful</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">3. Safety Measures</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Implement content filtering</li>
                    <li>Include ethical guidelines</li>
                    <li>Provide fallback responses</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quality Assurance */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quality Assurance Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Testing Protocol</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Automated response validation</li>
                    <li>Human review of sample outputs</li>
                    <li>Performance benchmarking</li>
                    <li>User feedback integration</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Monitoring Metrics</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Response accuracy rates</li>
                    <li>User satisfaction scores</li>
                    <li>Response time performance</li>
                    <li>Safety violation incidents</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Version History */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Version History</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900">v2.1 (March 2025)</h3>
                  <p className="text-gray-600">Enhanced safety protocols and performance optimization guidelines</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">v2.0 (February 2025)</h3>
                  <p className="text-gray-600">Major restructure with improved prompt templates and QA processes</p>
                </div>
                <div className="border-l-4 border-gray-400 pl-4">
                  <h3 className="font-semibold text-gray-900">v1.0 (January 2025)</h3>
                  <p className="text-gray-600">Initial framework establishment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="flex flex-wrap gap-4">
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
                📥 Download PDF
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
                📝 Edit Document
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
                🔄 Check for Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
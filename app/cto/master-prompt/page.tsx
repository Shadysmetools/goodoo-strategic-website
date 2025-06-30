import React from 'react'
import Link from 'next/link'

export default function CTOMasterPrompt() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/cto/documents"
              className="inline-flex items-center text-green-600 hover:text-green-700 mb-4"
            >
              ← Back to CTO Documents
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Master Prompt Framework</h1>
            <p className="text-xl text-gray-600">Core AI prompt framework and guidelines for Goodoo.ai technical implementation</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Document Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">1.5 MB</div>
                <div className="text-sm text-gray-600">File Size</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">March 2025</div>
                <div className="text-sm text-gray-600">Last Updated</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">v2.1</div>
                <div className="text-sm text-gray-600">Version</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Master Prompt Content */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Master Prompt Framework</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">ROLE:</h3>
                <p className="text-gray-700 mb-4">Act as an expert technical writer and transcriber.</p>
                
                <h3 className="font-semibold text-gray-900 mb-4">GOAL:</h3>
                <p className="text-gray-700 mb-4">Your task is to analyze the provided screen-recorded software demo and produce a "Visual Transcript." This transcript must perfectly integrate spoken dialogue with on-screen user interactions into a single, chronological flow.</p>
                
                <h3 className="font-semibold text-gray-900 mb-4">OUTPUT FORMAT:</h3>
                <p className="text-gray-700 mb-4">The transcript must consist of two types of entries: Dialogue and Visual Actions.</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Dialogue Entry:</h3>
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-700 mb-2"><strong>Format:</strong> Start with the speaker's name in bold, followed by a colon, and then their verbatim dialogue.</p>
                    <p className="text-sm text-gray-700"><strong>Example:</strong> Sarah: That's it? Wow, that was easy. Thanks!</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Visual Action Entry:</h3>
                  <div className="bg-green-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-700 mb-2"><strong>Format:</strong> Describe the user's interaction with a specific UI element. The description must be concise, written in the present tense, and formatted as a blockquote.</p>
                    <p className="text-sm text-gray-700"><strong>Example:</strong> &gt; User clicks the "Create" button.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rules & Logic */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">RULES & LOGIC:</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Language & Dialect:</h3>
                  <p className="text-gray-700">Transcribe all dialogue verbatim in the original language and dialect spoken in the video. Do not translate the dialogue into English. Descriptions of visual actions should also be written in the same language as the dialogue to maintain consistency.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Chronology:</h3>
                  <p className="text-gray-700">Transcribe the conversation chronologically, identifying the speaker for each Dialogue Entry based on the names displayed.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Action Integration:</h3>
                  <p className="text-gray-700">When a user performs a key action (e.g., clicking a button, typing in a field, selecting a menu item), insert a Visual Action Entry.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Placement is Critical:</h3>
                  <p className="text-gray-700">The Visual Action Entry should be placed immediately after the dialogue that prompts it, or immediately before the dialogue that discusses its result. Use your judgment to create the most logical and easy-to-follow sequence.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Specificity:</h3>
                  <p className="text-gray-700">Do not use generic phrases like "clicks a button." Identify the button or element by its label (e.g., "Confirm," "Invoicing module," "Customer field"). If the label is unclear, use a descriptive name (e.g., "the user settings icon").</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Timestamps & URL Changes:</h3>
                  <p className="text-gray-700">Each time the webpage changes to a new URL, this must be noted in its own paragraph. Start the line with the video timestamp in [HH:MM:SS] format, followed by the new URL.</p>
                </div>
              </div>
            </div>

            {/* Example */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">EXAMPLE OF PERFECT OUTPUT:</h2>
              <p className="text-gray-700 mb-4">Here is a short example of the required output format and flow. (Note: The language in this example is English for clarity, but your output should be in the language of the video).</p>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2"><strong>John:</strong> Okay, I've filled in all the details for this client. Now, I'll head over to the settings page to adjust the defaults.</p>
                <p className="text-gray-700 mb-2">https://example.com/dashboard/settings</p>
                <p className="text-gray-700 mb-2"><strong>John:</strong> Right, first thing is to change the default currency.</p>
                <p className="text-gray-700 mb-2">&gt; User clicks the "Default Currency" dropdown menu.</p>
                <p className="text-gray-700">&gt; User selects "EUR" from the list.</p>
              </div>
            </div>

            {/* Technical Implementation Notes */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Implementation Notes</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI Model Integration:</h3>
                  <p className="text-gray-700">This prompt framework is designed to work with large language models for automated transcription and analysis of software demos and user interactions.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Assurance:</h3>
                  <p className="text-gray-700">All transcriptions should be reviewed for accuracy, especially technical terms and UI element identification.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Scalability:</h3>
                  <p className="text-gray-700">This framework can be adapted for different types of software demos, user testing sessions, and training materials.</p>
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
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
                📥 Download PDF
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
                📝 Edit Document
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
                🔄 Check for Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
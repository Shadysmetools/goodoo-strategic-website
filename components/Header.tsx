import React from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-secondary-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-secondary-900">Goodoo.ai</h1>
              <p className="text-secondary-600">Strategic Framework</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-secondary-600">
              <span className="font-medium">Product Lead:</span> Shady Al-halawani
            </div>
            <div className="text-sm text-secondary-600">
              <span className="font-medium">Email:</span> shady@smetools.io
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 
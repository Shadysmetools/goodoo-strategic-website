import React from 'react'
import Header from '../components/Header'
import StrategicDashboard from '../components/StrategicDashboard'
import Navigation from '../components/Navigation'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <StrategicDashboard />
      </main>
    </div>
  )
} 
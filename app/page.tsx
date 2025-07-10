"use client";
import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import { useAuth } from './contexts/AuthContext'
import LoadingSpinner from './components/LoadingSpinner'

export default function HomePage() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }
  const roles = [
    {
      title: 'CEO',
      description: 'Strategic leadership and business growth',
      href: '/ceo',
      icon: '👔',
      color: 'blue'
    },
    {
      title: 'CTO',
      description: 'Technical leadership and engineering excellence',
      href: '/cto',
      icon: '🛠️',
      color: 'purple'
    },
    {
      title: 'CPO',
      description: 'Product leadership and user-centric innovation',
      href: '/cpo',
      icon: '🎯',
      color: 'pink'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Goodoo.ai
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Choose your role to access specialized tools and insights
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <Link
                key={index}
                href={role.href}
                className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 border-transparent hover:border-${role.color}-300 transform hover:-translate-y-1`}
              >
                <div className="text-6xl mb-4">{role.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {role.title}
                </h2>
                <p className="text-gray-600">{role.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-gray-600">Executive Roles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">12+</div>
                <div className="text-gray-600">Specialized Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Access Available</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 
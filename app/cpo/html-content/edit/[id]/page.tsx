'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { HTMLContent } from '../../../../types/htmlContent'

interface PageProps {
  params: {
    id: string
  }
}

export default function CPOEditHTMLContent({ params }: PageProps) {
  const router = useRouter()
  const [content, setContent] = useState<HTMLContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchContent()
  }, [params.id])

  const fetchContent = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/html-content?id=${params.id}`)
      if (response.ok) {
        const data = await response.json()
        setContent(data)
      } else {
        setError('Content not found')
      }
    } catch (error) {
      console.error('Error fetching content:', error)
      setError('Failed to load content')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field: keyof HTMLContent, value: string) => {
    if (!content) return
    setContent({ ...content, [field]: value })
  }

  const handleSave = async () => {
    if (!content) return
    
    try {
      setSaving(true)
      const response = await fetch('/api/html-content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(content),
      })

      if (response.ok) {
        router.push(`/cpo/html-content/view/${content.id}`)
      } else {
        setError('Failed to save content')
      }
    } catch (error) {
      console.error('Error saving content:', error)
      setError('Failed to save content')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-rose-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading content...</p>
        </div>
      </div>
    )
  }

  if (error || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-rose-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{error || 'Content not found'}</h1>
          <Link
            href="/cpo/html-content"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Back to HTML Content
          </Link>
        </div>
      </div>
    )
  }

  const categories = ['Product Strategy Documents', 'Market & Competitive Analysis', 'Product Development', 'Go-to-Market Materials']

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <Link
            href="/cpo"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            ← Back to Dashboard
          </Link>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Edit HTML Content</h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={content.title}
                onChange={e => handleChange('title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={content.category}
                onChange={e => handleChange('category', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={content.description}
                onChange={e => handleChange('description', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                rows={2}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">HTML Content</label>
              <textarea
                value={content.content}
                onChange={e => handleChange('content', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent font-mono text-sm"
                rows={15}
              />
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex-1 bg-pink-600 hover:bg-pink-700 disabled:bg-pink-400 text-white py-2 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              {saving ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </button>
            <Link
              href={`/cpo/html-content/view/${content.id}`}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 rounded-lg font-semibold transition-colors text-center"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 
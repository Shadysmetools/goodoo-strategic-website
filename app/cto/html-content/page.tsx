'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { HTMLContent } from '../../types/htmlContent'

export default function CTOHTMLContent() {
  const [contents, setContents] = useState<HTMLContent[]>([])
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showCategoryModal, setShowCategoryModal] = useState(false)
  const [editingContent, setEditingContent] = useState<HTMLContent | null>(null)
  const [newContent, setNewContent] = useState({
    title: '',
    content: '',
    category: 'Technical Strategy Documents',
    description: ''
  })
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  
  // Category management state
  const [categories, setCategories] = useState(['Technical Strategy Documents', 'Infrastructure & DevOps', 'AI & Machine Learning', 'Team & Process Management'])
  const [newCategoryName, setNewCategoryName] = useState('')
  const [editingCategory, setEditingCategory] = useState('')
  const [editingCategoryIndex, setEditingCategoryIndex] = useState(-1)

  useEffect(() => {
    fetchContents()
    loadCategories()
  }, [])

  const loadCategories = () => {
    const savedCategories = localStorage.getItem('cto-categories')
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories))
    }
  }

  const saveCategories = (newCategories: string[]) => {
    setCategories(newCategories)
    localStorage.setItem('cto-categories', JSON.stringify(newCategories))
  }

  const addCategory = () => {
    if (newCategoryName.trim() && !categories.includes(newCategoryName.trim())) {
      const updatedCategories = [...categories, newCategoryName.trim()]
      saveCategories(updatedCategories)
      setNewCategoryName('')
    }
  }

  const editCategory = () => {
    if (editingCategory.trim() && editingCategoryIndex >= 0) {
      const updatedCategories = [...categories]
      updatedCategories[editingCategoryIndex] = editingCategory.trim()
      saveCategories(updatedCategories)
      setEditingCategory('')
      setEditingCategoryIndex(-1)
    }
  }

  const deleteCategory = (index: number) => {
    if (confirm('Are you sure you want to delete this category? Content in this category will be moved to "Technical Strategy Documents".')) {
      const categoryToDelete = categories[index]
      const updatedCategories = categories.filter((_, i) => i !== index)
      saveCategories(updatedCategories)
      
      // Move content from deleted category to "Technical Strategy Documents"
      const updatedContents = contents.map(content => 
        content.category === categoryToDelete 
          ? { ...content, category: 'Technical Strategy Documents' }
          : content
      )
      setContents(updatedContents)
      
      // Update content in storage
      localStorage.setItem('cto-html-content', JSON.stringify(updatedContents))
    }
  }

  const fetchContents = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/html-content?role=cto')
      if (response.ok) {
        const data = await response.json()
        setContents(data)
      } else {
        console.error('Failed to fetch content')
      }
    } catch (error) {
      console.error('Error fetching content:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredContents = contents.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All Categories' || content.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const groupedContents = categories.reduce((acc, category) => {
    const categoryContents = filteredContents.filter(content => content.category === category)
    if (categoryContents.length > 0) {
      acc[category] = categoryContents
    }
    return acc
  }, {} as Record<string, HTMLContent[]>)

  const handleCreateContent = async () => {
    try {
      const response = await fetch('/api/html-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newContent,
          role: 'cto'
        }),
      })

      if (response.ok) {
        await fetchContents()
        setNewContent({ title: '', content: '', category: 'Technical Strategy Documents', description: '' })
        setShowCreateModal(false)
      } else {
        console.error('Failed to create content')
      }
    } catch (error) {
      console.error('Error creating content:', error)
    }
  }

  const handleEditContent = async () => {
    if (!editingContent) return
    
    try {
      const response = await fetch('/api/html-content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingContent),
      })

      if (response.ok) {
        await fetchContents()
        setEditingContent(null)
        setShowEditModal(false)
      } else {
        console.error('Failed to update content')
      }
    } catch (error) {
      console.error('Error updating content:', error)
    }
  }

  const handleDeleteContent = async (id: string) => {
    if (confirm('Are you sure you want to delete this HTML content?')) {
      try {
        const response = await fetch(`/api/html-content?id=${id}`, {
          method: 'DELETE',
        })

        if (response.ok) {
          await fetchContents()
        } else {
          console.error('Failed to delete content')
        }
      } catch (error) {
        console.error('Error deleting content:', error)
      }
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading content...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">CTO HTML Content Management</h1>
            <p className="text-xl text-gray-600">Create and manage HTML webpages for technical content</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <button
              onClick={() => setShowCreateModal(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
            >
              <span>📝</span>
              <span>Create HTML Content</span>
            </button>
            <button
              onClick={() => setShowCategoryModal(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
            >
              <span>📂</span>
              <span>Manage Categories</span>
            </button>
            <Link
              href="/cto"
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
            >
              <span>←</span>
              <span>Back to Dashboard</span>
            </Link>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search HTML content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option>All Categories</option>
                  {categories.map(cat => (
                    <option key={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* HTML Content Categories */}
          <div className="space-y-8">
            {Object.entries(groupedContents).map(([category, categoryContents]) => (
              <div key={category} className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryContents.map((content) => (
                    <div
                      key={content.id}
                      className="group border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-200 hover:border-green-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">🌐</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                            {content.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3">{content.description}</p>
                          <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                            <span>{content.createdAt}</span>
                            <span>HTML</span>
                          </div>
                          <div className="flex gap-2">
                            <Link
                              href={`/cto/html-content/view/${content.id}`}
                              className="text-green-600 hover:text-green-700 text-sm font-medium"
                            >
                              View Page
                            </Link>
                            <button
                              onClick={() => {
                                setEditingContent(content)
                                setShowEditModal(true)
                              }}
                              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteContent(content.id)}
                              className="text-red-600 hover:text-red-700 text-sm font-medium"
                            >
                              Delete
                            </button>
                          </div>
                          <div className="flex gap-2 items-center mt-2">
                            <label className="flex items-center text-xs">
                              <input
                                type="checkbox"
                                checked={content.isPublic}
                                onChange={async (e) => {
                                  const res = await fetch('/api/html-content', {
                                    method: 'PUT',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ id: content.id, isPublic: e.target.checked })
                                  });
                                  if (res.ok) fetchContents();
                                }}
                                className="mr-1"
                              />
                              Public
                            </label>
                            {content.isPublic && (
                              <button
                                className="text-blue-500 underline text-xs ml-2"
                                onClick={() => {
                                  navigator.clipboard.writeText(`${window.location.origin}/public/html-content/${content.shareToken}`)
                                }}
                              >
                                Copy Public Share Link
                              </button>
                            )}
                            <button
                              className="text-purple-500 underline text-xs ml-2"
                              onClick={() => {
                                navigator.clipboard.writeText(`${window.location.origin}/cto/html-content/shared/${content.shareToken}`)
                              }}
                            >
                              Copy Private Share Link
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {Object.keys(groupedContents).length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No HTML content found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* Create HTML Content Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold mb-6">Create New HTML Content</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={newContent.title}
                  onChange={(e) => setNewContent({...newContent, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <div className="flex gap-2">
                  <select
                    value={newContent.category}
                    onChange={(e) => setNewContent({...newContent, category: e.target.value})}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    {categories.map(cat => (
                      <option key={cat}>{cat}</option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={() => {
                      const newCat = prompt('Enter new category name:')
                      if (newCat && newCat.trim() && !categories.includes(newCat.trim())) {
                        const updatedCategories = [...categories, newCat.trim()]
                        saveCategories(updatedCategories)
                        setNewContent({...newContent, category: newCat.trim()})
                      }
                    }}
                    className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    + New
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={newContent.description}
                  onChange={(e) => setNewContent({...newContent, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">HTML Content</label>
                <textarea
                  value={newContent.content}
                  onChange={(e) => setNewContent({...newContent, content: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent font-mono text-sm"
                  rows={15}
                  placeholder="Enter your HTML content here..."
                />
                <p className="text-sm text-gray-500 mt-2">
                  You can use HTML tags, Tailwind CSS classes, and custom styling.
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleCreateContent}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors"
              >
                Create
              </button>
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 rounded-lg font-semibold transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit HTML Content Modal */}
      {showEditModal && editingContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold mb-6">Edit HTML Content</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={editingContent.title}
                  onChange={(e) => setEditingContent({...editingContent, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <div className="flex gap-2">
                  <select
                    value={editingContent.category}
                    onChange={(e) => setEditingContent({...editingContent, category: e.target.value})}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    {categories.map(cat => (
                      <option key={cat}>{cat}</option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={() => {
                      const newCat = prompt('Enter new category name:')
                      if (newCat && newCat.trim() && !categories.includes(newCat.trim())) {
                        const updatedCategories = [...categories, newCat.trim()]
                        saveCategories(updatedCategories)
                        setEditingContent({...editingContent, category: newCat.trim()})
                      }
                    }}
                    className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    + New
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={editingContent.description}
                  onChange={(e) => setEditingContent({...editingContent, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  rows={2}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">HTML Content</label>
                <textarea
                  value={editingContent.content}
                  onChange={(e) => setEditingContent({...editingContent, content: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent font-mono text-sm"
                  rows={15}
                />
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleEditContent}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors"
              >
                Save Changes
              </button>
              <button
                onClick={() => setShowEditModal(false)}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 rounded-lg font-semibold transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Category Management Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold mb-6">Manage Categories</h3>
            
            {/* Add New Category */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">Add New Category</h4>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  placeholder="Enter category name..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  onKeyPress={(e) => e.key === 'Enter' && addCategory()}
                />
                <button
                  onClick={addCategory}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Existing Categories */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4">Existing Categories</h4>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div key={category} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <span className="font-medium">{category}</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingCategory(category)
                          setEditingCategoryIndex(index)
                        }}
                        className="px-3 py-1 bg-yellow-600 hover:bg-yellow-700 text-white rounded text-sm transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteCategory(index)}
                        className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-sm transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Edit Category */}
            {editingCategoryIndex >= 0 && (
              <div className="mb-6 p-4 bg-yellow-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Edit Category</h4>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={editingCategory}
                    onChange={(e) => setEditingCategory(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    onKeyPress={(e) => e.key === 'Enter' && editCategory()}
                  />
                  <button
                    onClick={editCategory}
                    className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setEditingCategory('')
                      setEditingCategoryIndex(-1)
                    }}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setShowCategoryModal(false)}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 rounded-lg font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 
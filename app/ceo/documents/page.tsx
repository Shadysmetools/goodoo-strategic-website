'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { DocumentMeta } from '../../types/document';

export default function CEODocuments() {
  const [documents, setDocuments] = useState<DocumentMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: 'Strategic Documents',
    type: 'PDF',
  });
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [typeFilter, setTypeFilter] = useState('All Types');

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    setLoading(true);
    const res = await fetch('/api/documents');
    const data = await res.json();
    setDocuments(data);
    setLoading(false);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('category', form.category);
    formData.append('type', form.type);
    await fetch('/api/documents', {
      method: 'POST',
      body: formData,
    });
    setUploading(false);
    setShowUploadModal(false);
    setFile(null);
    setForm({ title: '', description: '', category: 'Strategic Documents', type: 'PDF' });
    fetchDocuments();
  };

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(search.toLowerCase()) ||
      doc.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      categoryFilter === 'All Categories' || doc.category === categoryFilter;
    const matchesType = typeFilter === 'All Types' || doc.type === typeFilter;
    return matchesSearch && matchesCategory && matchesType;
  });

  const categories = Array.from(new Set(documents.map((doc) => doc.category)));
  const types = Array.from(new Set(documents.map((doc) => doc.type)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Link
              href="/ceo"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              ← Back to Dashboard
            </Link>
          </div>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">CEO Documents</h1>
            <p className="text-xl text-gray-600">Strategic documents and executive materials for Goodoo.ai</p>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={categoryFilter}
                  onChange={e => setCategoryFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat}>{cat}</option>
                  ))}
                </select>
                <select
                  value={typeFilter}
                  onChange={e => setTypeFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>All Types</option>
                  {types.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Document List */}
          <div className="space-y-8">
            {loading ? (
              <div className="text-center text-gray-500">Loading...</div>
            ) : filteredDocuments.length === 0 ? (
              <div className="text-center text-gray-500">No documents found.</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDocuments.map((doc) => (
                  <a
                    key={doc.id}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-200 hover:border-blue-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">
                        {doc.type === 'DOC' ? '📝' : '📄'}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                          {doc.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">{doc.description}</p>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                          <span>{doc.date}</span>
                          <span>{doc.size}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="flex flex-wrap gap-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
                onClick={() => setShowUploadModal(true)}
              >
                📤 Upload New Document
              </button>
            </div>
          </div>

          {/* Upload Modal */}
          {showUploadModal && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
                <h3 className="text-xl font-bold mb-4">Upload New Document</h3>
                <form onSubmit={handleUpload}>
                  <input
                    type="file"
                    accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf,.doc,.docx"
                    onChange={e => setFile(e.target.files?.[0] || null)}
                    className="mb-4"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Title"
                    value={form.title}
                    onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                    className="w-full mb-2 px-3 py-2 border rounded"
                    required
                  />
                  <textarea
                    placeholder="Description"
                    value={form.description}
                    onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                    className="w-full mb-2 px-3 py-2 border rounded"
                  />
                  <select
                    value={form.category}
                    onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                    className="w-full mb-2 px-3 py-2 border rounded"
                  >
                    <option>Strategic Documents</option>
                    <option>Financial Documents</option>
                    <option>Market Research</option>
                    <option>Board & Investor Materials</option>
                  </select>
                  <select
                    value={form.type}
                    onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                    className="w-full mb-4 px-3 py-2 border rounded"
                  >
                    <option>PDF</option>
                    <option>HTML</option>
                    <option>Excel</option>
                  </select>
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      disabled={uploading}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors"
                    >
                      {uploading ? 'Uploading...' : 'Upload'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowUploadModal(false)}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 rounded-lg font-semibold transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
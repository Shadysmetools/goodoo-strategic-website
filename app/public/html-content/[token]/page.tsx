"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PublicHTMLContentPage() {
  const params = useParams();
  const token = Array.isArray(params.token) ? params.token[0] : params.token;
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
    // eslint-disable-next-line
  }, [token]);

  const fetchContent = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/html-content/public/${token}`);
      if (response.ok) {
        const data = await response.json();
        setContent(data);
      } else {
        setContent(null);
      }
    } catch (error) {
      setContent(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading content...</p>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Content Not Found</h1>
          <p className="text-gray-600 mb-6">The requested HTML content could not be found or is not public.</p>
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Content Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{content.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{content.description}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Created: {content.createdAt}</span>
              <span>•</span>
              <span>Updated: {content.updatedAt}</span>
              <span>•</span>
              <span>Category: {content.category}</span>
            </div>
          </div>

          {/* HTML Content Display */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: content.content || content.html }}
            />
          </div>

          {/* Action Button */}
          <div className="flex justify-center mt-8">
            <Link
              href="/"
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 
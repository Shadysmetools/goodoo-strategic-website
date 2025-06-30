"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SharedHTMLContentPage({ params }: { params: { token: string } }) {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    async function fetchContent() {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`/api/html-content/private/${params.token}`);
        if (res.ok) {
          const data = await res.json();
          setContent(data);
        } else if (res.status === 401) {
          router.push('/login');
        } else {
          setError('Content not found or you do not have access.');
        }
      } catch {
        setError('Failed to load content.');
      } finally {
        setLoading(false);
      }
    }
    fetchContent();
  }, [params.token, router]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  if (!content) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-2">{content.title}</h1>
        <p className="text-gray-600 mb-4">{content.description}</p>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content.content }} />
      </div>
    </div>
  );
} 
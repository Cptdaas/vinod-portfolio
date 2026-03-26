"use client";

import { useEffect, useState } from 'react';

export default function BookPage() {
  const [bookContent, setBookContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/FullGenAICourse_Book.html')
      .then(response => response.text())
      .then(html => {
        setBookContent(html);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading book:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading book...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div 
        dangerouslySetInnerHTML={{ __html: bookContent }}
        style={{
          backgroundColor: 'white',
          color: '#2c3e50'
        }}
      />
    </div>
  );
}

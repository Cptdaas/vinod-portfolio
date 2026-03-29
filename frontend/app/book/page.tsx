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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-800 text-xl">Loading book...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="responsive-book-container">
        <style jsx>{`
          .responsive-book-container {
            width: 100%;
            height: 100vh;
            overflow: auto;
          }
          
          .responsive-book-container * {
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          
          .responsive-book-container body {
            margin: 0 !important;
            padding: 0 !important;
            font-size: 16px !important;
            line-height: 1.6 !important;
          }
          
          .responsive-book-container .title-page {
            min-height: 100vh !important;
            height: auto !important;
            padding: 2rem 1rem !important;
          }
          
          .responsive-book-container .title-content {
            padding: 1rem !important;
            max-width: 100% !important;
            text-align: center !important;
          }
          
          .responsive-book-container h1 {
            font-size: clamp(1.5rem, 5vw, 3rem) !important;
            margin: 1rem 0 !important;
          }
          
          .responsive-book-container h2 {
            font-size: clamp(1.2rem, 4vw, 2rem) !important;
            margin: 0.8rem 0 !important;
          }
          
          .responsive-book-container h3 {
            font-size: clamp(1rem, 3vw, 1.5rem) !important;
            margin: 0.6rem 0 !important;
          }
          
          .responsive-book-container p {
            font-size: clamp(0.9rem, 2.5vw, 1.1rem) !important;
            margin: 1rem 0 !important;
            padding: 0 1rem !important;
          }
          
          .responsive-book-container ul, 
          .responsive-book-container ol {
            padding: 0 2rem !important;
            margin: 1rem 0 !important;
          }
          
          .responsive-book-container li {
            font-size: clamp(0.9rem, 2.5vw, 1.1rem) !important;
            margin: 0.5rem 0 !important;
          }
          
          .responsive-book-container code {
            font-size: clamp(0.8rem, 2vw, 1rem) !important;
            word-wrap: break-word !important;
            white-space: pre-wrap !important;
          }
          
          .responsive-book-container pre {
            font-size: clamp(0.8rem, 2vw, 1rem) !important;
            overflow-x: auto !important;
            max-width: 100% !important;
            padding: 1rem !important;
            margin: 1rem 0 !important;
          }
          
          .responsive-book-container img {
            max-width: 100% !important;
            height: auto !important;
            margin: 1rem 0 !important;
          }
          
          .responsive-book-container table {
            width: 100% !important;
            max-width: 100% !important;
            font-size: clamp(0.8rem, 2vw, 1rem) !important;
          }
          
          .responsive-book-container th,
          .responsive-book-container td {
            padding: 0.5rem !important;
            font-size: clamp(0.8rem, 2vw, 1rem) !important;
          }
          
          @media (max-width: 768px) {
            .responsive-book-container {
              font-size: 14px !important;
            }
            
            .responsive-book-container .title-content {
              padding: 0.5rem !important;
            }
            
            .responsive-book-container p,
            .responsive-book-container li {
              padding: 0 0.5rem !important;
            }
          }
          
          @media (max-width: 480px) {
            .responsive-book-container {
              font-size: 12px !important;
            }
            
            .responsive-book-container .title-content {
              padding: 0.25rem !important;
            }
          }
        `}</style>
        <div 
          dangerouslySetInnerHTML={{ __html: bookContent }}
        />
      </div>
    </div>
  );
}

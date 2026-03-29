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
      <style jsx global>{`
        /* Global reset for book content */
        .responsive-book-container * {
          max-width: 100% !important;
          box-sizing: border-box !important;
        }
        
        /* Base responsive styles */
        .responsive-book-container body {
          margin: 0 !important;
          padding: 0 !important;
          font-size: 16px !important;
          line-height: 1.6 !important;
          font-family: 'Georgia', 'Times New Roman', serif !important;
        }
        
        /* Title page responsive */
        .responsive-book-container .title-page {
          min-height: 100vh !important;
          height: auto !important;
          background: url('/genAI1.jpg') center/cover no-repeat !important;
          background-position: center !important;
          background-size: cover !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
          align-items: center !important;
          position: relative !important;
          padding: 2rem 1rem !important;
        }
        
        .responsive-book-container .title-overlay {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          background: rgba(0, 0, 0, 0.6) !important;
        }
        
        .responsive-book-container .title-content {
          position: relative !important;
          z-index: 10 !important;
          text-align: center !important;
          color: white !important;
          max-width: 95% !important;
          padding: 1rem !important;
          margin: 0 auto !important;
        }
        
        .responsive-book-container .main-title {
          font-size: 5vw !important;
          font-weight: bold !important;
          margin: 1rem auto !important;
          padding: 0.5rem !important;
          text-align: center !important;
          display: block !important;
          line-height: 1.1 !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          white-space: normal !important;
          max-width: 100% !important;
          letter-spacing: normal !important;
          word-break: break-word !important;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.8) !important;
        }
        
        .responsive-book-container .subtitle {
          font-size: 3vw !important;
          margin: 0.5rem auto !important;
          text-align: center !important;
          line-height: 1.4 !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          white-space: normal !important;
          max-width: 100% !important;
          font-style: italic !important;
          opacity: 0.9 !important;
        }
        
        .responsive-book-container .author-info {
          position: relative !important;
          bottom: auto !important;
          right: auto !important;
          text-align: center !important;
          margin: 2rem auto 1rem !important;
          padding: 1rem !important;
          background: rgba(0,0,0,0.5) !important;
          border-radius: 10px !important;
          max-width: 90% !important;
          color: white !important;
        }
        
        .responsive-book-container .author-name {
          font-size: 2.5vw !important;
          font-weight: bold !important;
          margin-bottom: 0.5rem !important;
        }
        
        .responsive-book-container .author-title {
          font-size: 2vw !important;
          margin-bottom: 0.5rem !important;
          opacity: 0.8 !important;
        }
        
        .responsive-book-container .author-links {
          font-size: 1.5vw !important;
          opacity: 0.8 !important;
        }
        
        /* Content pages responsive */
        .responsive-book-container .toc-page,
        .responsive-book-container .content-page {
          min-height: 100vh !important;
          padding: 2rem 1rem !important;
          background: white !important;
        }
        
        .responsive-book-container .toc-content,
        .responsive-book-container .content-wrapper {
          max-width: 100% !important;
          margin: 0 auto !important;
          padding: 1rem !important;
        }
        
        .responsive-book-container .toc-title,
        .responsive-book-container h1 {
          font-size: 4vw !important;
          text-align: center !important;
          margin: 1rem 0 !important;
          line-height: 1.2 !important;
          word-wrap: break-word !important;
        }
        
        .responsive-book-container h2 {
          font-size: 3.5vw !important;
          margin: 0.8rem 0 !important;
          line-height: 1.3 !important;
          word-wrap: break-word !important;
        }
        
        .responsive-book-container h3 {
          font-size: 3vw !important;
          margin: 0.6rem 0 !important;
          line-height: 1.3 !important;
          word-wrap: break-word !important;
        }
        
        .responsive-book-container p {
          font-size: 2.5vw !important;
          margin: 1rem 0 !important;
          padding: 0 1rem !important;
          line-height: 1.6 !important;
          word-wrap: break-word !important;
        }
        
        .responsive-book-container ul, 
        .responsive-book-container ol {
          padding: 0 2rem !important;
          margin: 1rem 0 !important;
        }
        
        .responsive-book-container li {
          font-size: 2.5vw !important;
          margin: 0.5rem 0 !important;
          line-height: 1.5 !important;
          word-wrap: break-word !important;
        }
        
        .responsive-book-container code {
          font-size: 2vw !important;
          word-wrap: break-word !important;
          white-space: pre-wrap !important;
          background: #f4f4f4 !important;
          padding: 0.2rem 0.4rem !important;
          border-radius: 3px !important;
        }
        
        .responsive-book-container pre {
          font-size: 2vw !important;
          overflow-x: auto !important;
          max-width: 100% !important;
          padding: 1rem !important;
          margin: 1rem 0 !important;
          background: #f4f4f4 !important;
          border-radius: 5px !important;
          word-wrap: break-word !important;
          white-space: pre-wrap !important;
        }
        
        .responsive-book-container img {
          max-width: 100% !important;
          height: auto !important;
          margin: 1rem 0 !important;
          display: block !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }
        
        .responsive-book-container table {
          width: 100% !important;
          max-width: 100% !important;
          font-size: 2vw !important;
          margin: 1rem 0 !important;
          border-collapse: collapse !important;
        }
        
        .responsive-book-container th,
        .responsive-book-container td {
          padding: 0.5rem !important;
          font-size: 2vw !important;
          border: 1px solid #ddd !important;
          text-align: left !important;
          word-wrap: break-word !important;
        }
        
        /* Mobile breakpoints */
        @media (max-width: 768px) {
          .responsive-book-container .main-title { font-size: 4vw !important; }
          .responsive-book-container .subtitle { font-size: 2.5vw !important; }
          .responsive-book-container .author-name { font-size: 3vw !important; }
          .responsive-book-container .author-title { font-size: 2.5vw !important; }
          .responsive-book-container .author-links { font-size: 2vw !important; }
          .responsive-book-container h1 { font-size: 3.5vw !important; }
          .responsive-book-container h2 { font-size: 3vw !important; }
          .responsive-book-container h3 { font-size: 2.5vw !important; }
          .responsive-book-container p { font-size: 2.2vw !important; }
          .responsive-book-container li { font-size: 2.2vw !important; }
          .responsive-book-container code { font-size: 1.8vw !important; }
          .responsive-book-container pre { font-size: 1.8vw !important; }
          .responsive-book-container th,
          .responsive-book-container td { font-size: 1.8vw !important; }
        }
        
        @media (max-width: 480px) {
          .responsive-book-container .main-title { font-size: 3.5vw !important; }
          .responsive-book-container .subtitle { font-size: 2vw !important; }
          .responsive-book-container .author-name { font-size: 2.5vw !important; }
          .responsive-book-container .author-title { font-size: 2vw !important; }
          .responsive-book-container .author-links { font-size: 1.5vw !important; }
          .responsive-book-container h1 { font-size: 3vw !important; }
          .responsive-book-container h2 { font-size: 2.5vw !important; }
          .responsive-book-container h3 { font-size: 2vw !important; }
          .responsive-book-container p { font-size: 2vw !important; }
          .responsive-book-container li { font-size: 2vw !important; }
          .responsive-book-container code { font-size: 1.5vw !important; }
          .responsive-book-container pre { font-size: 1.5vw !important; }
          .responsive-book-container th,
          .responsive-book-container td { font-size: 1.5vw !important; }
        }
        
        @media (max-width: 375px) {
          .responsive-book-container .main-title { font-size: 3vw !important; }
          .responsive-book-container .subtitle { font-size: 1.8vw !important; }
          .responsive-book-container p { font-size: 1.8vw !important; }
          .responsive-book-container li { font-size: 1.8vw !important; }
          .responsive-book-container code { font-size: 1.3vw !important; }
          .responsive-book-container pre { font-size: 1.3vw !important; }
        }
        
        @media (max-width: 320px) {
          .responsive-book-container .main-title { font-size: 2.8vw !important; }
          .responsive-book-container .subtitle { font-size: 1.5vw !important; }
          .responsive-book-container p { font-size: 1.6vw !important; }
          .responsive-book-container li { font-size: 1.6vw !important; }
          .responsive-book-container code { font-size: 1.2vw !important; }
          .responsive-book-container pre { font-size: 1.2vw !important; }
        }
      `}</style>
      <div className="responsive-book-container">
        <div 
          dangerouslySetInnerHTML={{ __html: bookContent }}
        />
      </div>
    </div>
  );
}

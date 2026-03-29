"use client";

import { useEffect, useState } from 'react';

export default function BookPage() {
  const [bookContent, setBookContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [chapters, setChapters] = useState<{ title: string; id: string }[]>([]);
  const [currentChapter, setCurrentChapter] = useState(0);

  // Function to extract chapters and add IDs
  const processChapters = (htmlContent: string) => {
    let processedHtml = htmlContent;
    const chapterList: { title: string; id: string }[] = [];
    let chapterIndex = 0;
    
    // Replace h1 tags with id-added versions
    processedHtml = processedHtml.replace(/<h1>([^<]*)<\/h1>/gi, (match, title) => {
      const id = `chapter-${chapterIndex}`;
      chapterList.push({
        title: title.trim(),
        id
      });
      chapterIndex++;
      return `<h1 id="${id}">${title}</h1>`;
    });
    
    setChapters(chapterList);
    return processedHtml;
  };

  // Scroll to specific chapter
  const scrollToChapter = (index: number) => {
    if (index >= 0 && index < chapters.length) {
      setCurrentChapter(index);
      const element = document.getElementById(chapters[index].id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Function to add practice links to HTML content
  const addPracticeLinks = (htmlContent: string) => {
    let processedHtml = htmlContent;
    
    // Define chapter keywords mapping to GitHub links (priority order - first match wins)
    const chapterLinkMap: { keyword: string; url: string; label: string }[] = [
      { keyword: 'Introduction', url: 'https://github.com/Cptdaas/FullGenAIpractice/tree/training1/01train', label: 'LLM & Prompt Practice' },
      { keyword: 'Prompt', url: 'https://github.com/Cptdaas/FullGenAIpractice/tree/training1/01train', label: 'Prompt & Template Practice' },
      { keyword: 'Chain', url: 'https://github.com/Cptdaas/FullGenAIpractice/tree/training1/02trainlect07to08', label: 'Chains & Response Practice' },
      { keyword: 'Document', url: 'https://github.com/Cptdaas/FullGenAIpractice/blob/training1/03Documentloader/01loader.ipynb', label: 'Document Loader Practice' },
      { keyword: 'Splitter', url: 'https://github.com/Cptdaas/FullGenAIpractice/blob/training1/04textsplitter', label: 'Text Splitter Practice' },
      { keyword: 'Chunk', url: 'https://github.com/Cptdaas/FullGenAIpractice/blob/training1/04textsplitter', label: 'Text Splitter Practice' },
      { keyword: 'Vector', url: 'https://github.com/Cptdaas/FullGenAIpractice/tree/training1/05VectorStore', label: 'Vector Store Practice' },
      { keyword: 'Store', url: 'https://github.com/Cptdaas/FullGenAIpractice/tree/training1/05VectorStore', label: 'Vector Store Practice' },
      { keyword: 'Retrieve', url: 'https://github.com/Cptdaas/FullGenAIpractice/tree/training1/06Retriever', label: 'Retriever Practice' },
      { keyword: 'RAG', url: 'https://github.com/Cptdaas/FullGenAIpractice', label: 'RAG Practice' },
      { keyword: 'Agent', url: 'https://github.com/Cptdaas/FullGenAIpractice', label: 'Agentic Practice' }
    ];
    
    // Find all h1 chapter titles
    const h1Regex = /<h1>([^<]*)<\/h1>/gi;
    let match;
    const chapters: { original: string; title: string; position: number }[] = [];
    
    while ((match = h1Regex.exec(processedHtml)) !== null) {
      chapters.push({
        original: match[0],
        title: match[1],
        position: match.index
      });
    }
    
    // Process chapters in reverse order (to maintain position indices)
    for (let i = chapters.length - 1; i >= 0; i--) {
      const chapter = chapters[i];
      const chapterTitle = chapter.title.toLowerCase();
      
      // Find first matching keyword for this chapter
      let matchedLink: { keyword: string; url: string; label: string } | null = null;
      for (const link of chapterLinkMap) {
        if (chapterTitle.includes(link.keyword.toLowerCase())) {
          matchedLink = link;
          break;
        }
      }
      
      // If no specific match, use default
      if (!matchedLink) {
        matchedLink = { 
          keyword: 'practice', 
          url: 'https://github.com/Cptdaas/FullGenAIpractice',
          label: 'Full Repository'
        };
      }
      
      // Create single practice link HTML
      const linkHtml = `
        <div class="practice-links" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%); border: 1px solid #cbd5e1; border-radius: 8px; padding: 1rem; margin: 1rem 0; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);">
          <h3 style="color: #1e293b; font-size: 1.2vw; margin-bottom: 0.8rem; text-align: center; font-weight: 600;">🔗 Practice Code</h3>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li style="margin: 0.5rem 0; padding: 0; background: rgba(255, 255, 255, 0.8); border-radius: 6px; border: 1px solid rgba(203, 213, 225, 0.5);">
              <a href="${matchedLink.url}" target="_blank" rel="noopener noreferrer" style="color: #3b82f6; text-decoration: none; font-weight: 500; font-size: 1vw; display: block; padding: 0.4rem 0.8rem; transition: all 0.2s ease;">${matchedLink.label} →</a>
            </li>
          </ul>
        </div>
      `;
      
      // Insert link after the h1 tag
      const insertPosition = chapter.position + chapter.original.length;
      processedHtml = processedHtml.slice(0, insertPosition) + linkHtml + processedHtml.slice(insertPosition);
    }
    
    return processedHtml;
  };

  useEffect(() => {
    fetch('/01book.html')
      .then(response => response.text())
      .then(html => {
        const processedHtml = addPracticeLinks(html);
        const htmlWithIds = processChapters(processedHtml);
        setBookContent(htmlWithIds);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading book:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-gray-800 text-xl">Loading book...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <style jsx global>{`
        /* Main container with left-right borders */
        .responsive-book-container {
          max-width: 1400px !important;
          margin: 0 auto !important;
          background: white !important;
          border-left: 20px solid #e5e7eb !important;
          border-right: 20px solid #e5e7eb !important;
          box-shadow: 0 0 20px rgba(0,0,0,0.1) !important;
          min-height: 100vh !important;
          overflow-x: hidden !important;
        }
        
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
          background-position: center center !important;
          background-size: cover !important;
          background-repeat: no-repeat !important;
          background-attachment: scroll !important;
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
          background: transparent !important;
          color: inherit !important;
          padding: 0 !important;
          border: none !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          font-style: inherit !important;
        }
        
        /* Dark code blocks for pre/code elements */
        .responsive-book-container pre code {
          background: #1a202c !important;
          color: #e2e8f0 !important;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
        }
        
        /* Python function blocks styling */
        .responsive-book-container .python-function {
          background: #1a202c !important;
          color: #e2e8f0 !important;
          padding: 1rem !important;
          border-radius: 8px !important;
          border: 1px solid #2d3748 !important;
          overflow-x: auto !important;
          margin: 1rem 0 !important;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
          font-size: 1.8vw !important;
        }
        
        .responsive-book-container .python-function code {
          background: transparent !important;
          color: inherit !important;
          padding: 0 !important;
          border: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
        }
        
        .responsive-book-container pre {
          font-size: 2vw !important;
          overflow-x: auto !important;
          max-width: 100% !important;
          padding: 1rem !important;
          margin: 1rem 0 !important;
          background: #1a202c !important;
          color: #e2e8f0 !important;
          border-radius: 8px !important;
          border: 1px solid #2d3748 !important;
          word-wrap: break-word !important;
          white-space: pre-wrap !important;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
          position: relative !important;
        }
        
        /* Remove all language labels from code blocks */
        .responsive-book-container pre::before,
        .responsive-book-container pre.python-code::before,
        .responsive-book-container pre[data-lang]::before,
        .responsive-book-container pre[class*="code"]::before,
        .responsive-book-container pre[class*="language"]::before,
        .responsive-book-container .python-function::before,
        .responsive-book-container code::before {
          display: none !important;
          content: none !important;
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
        
        /* Tablet-specific optimizations */
        @media (min-width: 768px) and (max-width: 1024px) {
          .responsive-book-container .title-page {
            background-size: cover !important;
            background-position: center center !important;
            background-attachment: scroll !important;
          }
          
          .responsive-book-container .main-title { 
            font-size: 4.5vw !important; 
            padding: 0.8rem 1rem !important;
          }
          
          .responsive-book-container .subtitle { 
            font-size: 2.8vw !important; 
          }
          
          .responsive-book-container .author-info {
            max-width: 80% !important;
            padding: 1.5rem !important;
          }
          
          /* Ensure dark code blocks on iPad */
          .responsive-book-container code {
            background: transparent !important;
            color: inherit !important;
            border: none !important;
          }
          
          .responsive-book-container pre code {
            background: #1a202c !important;
            color: #e2e8f0 !important;
            border: 1px solid #2d3748 !important;
          }
          
          .responsive-book-container pre {
            background: #1a202c !important;
            color: #e2e8f0 !important;
            border: 1px solid #2d3748 !important;
          }
          
          .responsive-book-container .python-function {
            background: #1a202c !important;
            color: #e2e8f0 !important;
            border: 1px solid #2d3748 !important;
          }
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
          .responsive-book-container code { 
            font-size: 1.8vw !important;
            background: transparent !important;
            color: inherit !important;
            border: none !important;
          }
          .responsive-book-container pre code {
            background: #1a202c !important;
            color: #e2e8f0 !important;
            border: 1px solid #2d3748 !important;
          }
          .responsive-book-container pre { 
            font-size: 1.8vw !important; 
            padding: 1rem !important;
            background: #1a202c !important;
            color: #e2e8f0 !important;
            border: 1px solid #2d3748 !important;
          }
          .responsive-book-container .python-function {
            background: #1a202c !important;
            color: #e2e8f0 !important;
            border: 1px solid #2d3748 !important;
          }
          .responsive-book-container th,
          .responsive-book-container td { font-size: 1.8vw !important; }
        }
        
        /* Desktop/Laptop zoom effect - scale down without blank gaps */
        @media (min-width: 1024px) {
          /* Apply zoom transform to content pages - NO blank gaps */
          .responsive-book-container .content-page,
          .responsive-book-container .toc-page,
          .responsive-book-container .thank-you-page {
            transform: scale(0.9) !important;
            transform-origin: top center !important;
            margin-bottom: -10vh !important; /* Compensate for scale to remove gap */
          }
          
          /* Last page doesn't need negative margin */
          .responsive-book-container .thank-you-page:last-child {
            margin-bottom: 0 !important;
          }
          
          .responsive-book-container .toc-page,
          .responsive-book-container .content-page,
          .responsive-book-container .thank-you-page {
            padding: 1rem 0.5rem !important;
          }
          
          .responsive-book-container .toc-page h1,
          .responsive-book-container .content-page h1,
          .responsive-book-container .thank-you-page h1 {
            font-size: 3.5vw !important;
          }
          
          .responsive-book-container .toc-page h2,
          .responsive-book-container .content-page h2,
          .responsive-book-container .thank-you-page h2 {
            font-size: 3vw !important;
          }
          
          .responsive-book-container .toc-page h3,
          .responsive-book-container .content-page h3,
          .responsive-book-container .thank-you-page h3 {
            font-size: 2.5vw !important;
          }
          
          .responsive-book-container .toc-page p,
          .responsive-book-container .content-page p,
          .responsive-book-container .thank-you-page p,
          .responsive-book-container .toc-page li,
          .responsive-book-container .content-page li,
          .responsive-book-container .thank-you-page li {
            font-size: 2vw !important;
          }
          
          .responsive-book-container .toc-page table,
          .responsive-book-container .content-page table,
          .responsive-book-container .thank-you-page table {
            font-size: 1.8vw !important;
          }
          
          .responsive-book-container .toc-page pre,
          .responsive-book-container .content-page pre,
          .responsive-book-container .thank-you-page pre {
            font-size: 1.6vw !important;
          }
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
          
          /* Ensure dark code blocks on small mobile */
          .responsive-book-container code { 
            font-size: 1.5vw !important;
            background: transparent !important;
            color: inherit !important;
            border: none !important;
          }
          .responsive-book-container pre code {
            background: #1a202c !important;
            color: #e2e8f0 !important;
            border: 1px solid #2d3748 !important;
          }
          .responsive-book-container pre { 
            font-size: 1.5vw !important;
            background: #1a202c !important;
            color: #e2e8f0 !important;
            border: 1px solid #2d3748 !important;
          }
          .responsive-book-container .python-function {
            background: #1a202c !important;
            color: #e2e8f0 !important;
            border: 1px solid #2d3748 !important;
          }
        }
        
        @media (max-width: 375px) {
          .responsive-book-container .main-title { font-size: 3vw !important; }
          .responsive-book-container .subtitle { font-size: 1.8vw !important; }
          .responsive-book-container p { font-size: 1.8vw !important; }
          .responsive-book-container li { font-size: 1.8vw !important; }
          
          /* Ensure dark code blocks on iPhone SE */
          .responsive-book-container code { 
            font-size: 1.3vw !important;
            background: transparent !important;
            color: inherit !important;
            border: none !important;
          }
          .responsive-book-container pre code {
            background: #1a202c !important;
            color: #e2e8f0 !important;
            border: 1px solid #2d3748 !important;
          }
          .responsive-book-container pre { 
            font-size: 1.3vw !important;
            background: #1a202c !important;
            color: #e2e8f0 !important;
            border: 1px solid #2d3748 !important;
          }
          .responsive-book-container .python-function {
            background: #1a202c !important;
            color: #e2e8f0 !important;
            border: 1px solid #2d3748 !important;
          }
        }
        
        @media (max-width: 320px) {
          .responsive-book-container .main-title { font-size: 2.8vw !important; }
          .responsive-book-container .subtitle { font-size: 1.5vw !important; }
          .responsive-book-container p { font-size: 1.6vw !important; }
          .responsive-book-container li { font-size: 1.6vw !important; }
          
          /* Ensure dark code blocks on small phones */
          .responsive-book-container code { 
            font-size: 1.2vw !important;
            background: transparent !important;
            color: inherit !important;
            border: none !important;
          }
          .responsive-book-container pre code {
            background: #1a202c !important;
            color: #e2e8f0 !important;
            border: 1px solid #2d3748 !important;
          }
          .responsive-book-container pre { 
            font-size: 1.2vw !important;
            background: #1a202c !important;
            color: #e2e8f0 !important;
            border: 1px solid #2d3748 !important;
          }
          .responsive-book-container .python-function {
            background: #1a202c !important;
            color: #e2e8f0 !important;
            border: 1px solid #2d3748 !important;
          }
        }
      `}</style>
      <div className="responsive-book-container">
        <div 
          dangerouslySetInnerHTML={{ __html: bookContent }}
        />
        
        {/* Chapter Navigation */}
        {chapters.length > 0 && (
          <div className="chapter-navigation" style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '10px 20px',
            borderRadius: '30px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            zIndex: 1000,
            border: '2px solid #e5e7eb'
          }}>
            <button
              onClick={() => scrollToChapter(currentChapter - 1)}
              disabled={currentChapter === 0}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: 'none',
                background: currentChapter === 0 ? '#e5e7eb' : '#3b82f6',
                color: currentChapter === 0 ? '#9ca3af' : 'white',
                cursor: currentChapter === 0 ? 'not-allowed' : 'pointer',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'all 0.2s ease'
              }}
            >
              ← Previous
            </button>
            
            <span style={{
              fontSize: '14px',
              color: '#4b5563',
              fontWeight: 500,
              whiteSpace: 'nowrap'
            }}>
              {currentChapter + 1} / {chapters.length}
            </span>
            
            <button
              onClick={() => scrollToChapter(currentChapter + 1)}
              disabled={currentChapter === chapters.length - 1}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: 'none',
                background: currentChapter === chapters.length - 1 ? '#e5e7eb' : '#3b82f6',
                color: currentChapter === chapters.length - 1 ? '#9ca3af' : 'white',
                cursor: currentChapter === chapters.length - 1 ? 'not-allowed' : 'pointer',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'all 0.2s ease'
              }}
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

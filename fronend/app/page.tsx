"use client";

import WickBackground from "./components/WickBackground";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white px-6 py-24">
      
      <WickBackground />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center mb-36">
        
        <h1 className="text-6xl font-bold tracking-wide mb-6">
          Vinod Tiwari
        </h1>

        <h2 className="text-2xl text-gray-400 mb-8">
          AI Architect | Data Scientist | Agentic AI Engineer
        </h2>

        <p className="max-w-3xl text-gray-300 mb-12 text-lg leading-relaxed">
          Designing multi-agent AI systems with precision. Architecting scalable LLM pipelines.
          Building intelligent systems for real-world impact.
        </p>

        <div className="flex flex-wrap gap-6 justify-center text-lg">
          
          <Link
            href="/blog"
            className="border border-red-600 px-6 py-3 hover:bg-red-700 hover:shadow-[0_0_20px_red] transition duration-300"
          >
            Read My Medium
          </Link>

          <a
            href="/Vinod_Tiwari_Resume.pdf"
            download
            className="border border-gray-600 px-6 py-3 hover:bg-gray-800 transition duration-300"
          >
            Download Resume
          </a>

          <a
            href="https://youtube.com/@captiandaasai"
            target="_blank"
            className="border border-gray-600 px-6 py-3 hover:bg-gray-800 transition duration-300"
          >
            YouTube
          </a>

        </div>
      </section>

      {/* PROFESSIONAL OVERVIEW */}
      <section className="max-w-4xl mx-auto space-y-10">

        <h3 className="text-4xl font-semibold text-red-600 text-center mb-8">
          Professional Overview
        </h3>

        <p className="text-gray-300 text-lg leading-relaxed">
          AI Architect and Data Scientist with 6+ years of experience designing and deploying 
          production-grade Machine Learning and Generative AI systems. Specialized in Agentic AI, 
          Graph RAG architectures, LLM orchestration, and scalable cloud-native AI pipelines on AWS.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed">
          At Deloitte, led the architecture and deployment of multi-agent LLM systems for enterprise 
          pharmaceutical and automotive clients. Designed distributed agent orchestration using 
          LangGraph and MCP, optimized prompt pipelines, implemented vector embedding architectures 
          with PostgreSQL VectorDB, and ensured high availability and runtime performance.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed">
          Previously at TCS, optimized ML models via quantization frameworks to reduce inference costs 
          while maintaining accuracy. Delivered OCR systems achieving 95%+ extraction accuracy and 
          fine-tuned deep learning models reaching 98.9% classification performance.
        </p>

      </section>

    </main>
  );
}
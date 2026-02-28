"use client";

import WickBackground from "./components/WickBackground";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white px-6 py-20">

      <WickBackground />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center mb-32">
        <h1 className="text-6xl font-bold tracking-wide mb-6">
          Vinod Tiwari
        </h1>

        <h2 className="text-2xl text-gray-400 mb-8">
          AI Architect | Data Scientist | Agentic AI Engineer
        </h2>

        <p className="max-w-2xl text-gray-300 mb-10">
          Designing multi-agent AI systems with precision.
          Architecting scalable LLM pipelines.
          Building intelligent systems for real-world impact.
        </p>

        <div className="flex flex-wrap gap-6 justify-center text-lg">
          <Link
            href="/blog"
            className="border border-red-600 px-6 py-3 hover:bg-red-700 transition"
          >
            Read My Medium
          </Link>

          <a
            href="/Vinod_Tiwari_Resume.pdf"
            download
            className="border border-gray-600 px-6 py-3 hover:bg-gray-800 transition"
          >
            Download Resume
          </a>

          <a
            href="https://youtube.com/@captiandaasai"
            target="_blank"
            className="border border-gray-600 px-6 py-3 hover:bg-gray-800 transition"
          >
            YouTube
          </a>
        </div>
      </section>

      {/* PROFESSIONAL SUMMARY */}
      <section className="max-w-4xl mx-auto leading-relaxed space-y-8">

        <h3 className="text-3xl font-semibold text-red-600 mb-6 text-center">
          Professional Overview
        </h3>

        <p className="text-gray-300">
          AI Architect and Data Scientist with 6+ years of experience designing and deploying 
          production-grade Machine Learning and Generative AI systems. Specialized in Agentic AI, 
          Graph RAG architectures, LLM orchestration, and scalable cloud-native AI pipelines on AWS.
        </p>

        <p className="text-gray-300">
          At Deloitte, led the architecture and deployment of multi-agent LLM systems for enterprise 
          pharmaceutical and automotive clients. Designed distributed agent orchestration using 
          LangGraph and MCP, optimized prompt pipelines, implemented vector embedding architectures 
          with PostgreSQL VectorDB, and ensured high availability and runtime performance.
        </p>

        <p className="text-gray-300">
          Built a Graph RAG pipeline for supply chain intelligence, improving retrieval efficiency 
          and relationship mapping across complex data networks. Engineered automated PDF extraction 
          pipelines using AWS Lambda and RDS, optimizing cloud resource utilization and processing workflows.
        </p>

        <p className="text-gray-300">
          Previously at TCS, optimized ML models via quantization frameworks to reduce inference costs 
          while maintaining accuracy. Delivered OCR systems achieving 95%+ extraction accuracy and 
          fine-tuned deep learning models reaching 98.9% classification performance.
        </p>

        <p className="text-gray-300">
          Strong focus on scalability, infrastructure design, multi-agent orchestration, 
          prompt optimization, and aligning AI systems with measurable business impact.
        </p>

      </section>

    </main>
  );
}
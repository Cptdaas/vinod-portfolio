"use client";

import WickBackground from "./components/WickBackground";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white px-6 py-24 overflow-hidden">
      
      {/* Background */}
      <WickBackground />

      {/* Sidebar Navigation */}
      <Sidebar />

      {/* HERO */}
      <section className="flex flex-col items-center text-center mb-32">
        
        <h1 className="text-6xl font-bold tracking-wide mb-6">
          Vinod Tiwari
        </h1>

        <h2 className="text-2xl text-gray-400 mb-8">
          AI Architect | Data Scientist | Agentic AI Engineer
        </h2>

        <p className="max-w-3xl text-gray-300 text-lg leading-relaxed">
          Designing multi-agent AI systems with precision.
          Architecting scalable LLM pipelines.
          Building intelligent systems for real-world impact.
        </p>

      </section>

      {/* EXPERIENCE */}
      <section className="max-w-5xl mx-auto mt-24 space-y-12">

        <h3 className="text-4xl font-semibold text-red-600 text-center">
          Experience Highlights
        </h3>

        <div className="grid md:grid-cols-2 gap-10 text-gray-300 text-lg">

          <div className="space-y-4 border border-gray-800 p-8 hover:border-red-600 transition">
            <h4 className="text-xl font-semibold text-white">Deloitte</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Architected multi-agent LLM systems using LangGraph & MCP</li>
              <li>Built Graph RAG pipeline for supply chain intelligence</li>
              <li>Designed PostgreSQL VectorDB embedding infrastructure</li>
              <li>Deployed scalable AI systems on AWS</li>
            </ul>
          </div>

          <div className="space-y-4 border border-gray-800 p-8 hover:border-red-600 transition">
            <h4 className="text-xl font-semibold text-white">TCS</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Reduced inference cost via model quantization</li>
              <li>Delivered OCR pipeline with 95%+ accuracy</li>
              <li>Fine-tuned DL models achieving 98.9% performance</li>
              <li>Built demand forecasting models (ARIMA, Ridge, Lasso)</li>
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}
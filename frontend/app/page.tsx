"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import WickBackground from "./components/WickBackground";
import Sidebar from "./components/Sidebar";

// Recognition Data
const recognitionData = {
  "TCS Golden Guru Gala Award": {
    title: "TCS Golden Guru Gala Award",
    count: "3-Time Recipient",
    years: "2021–2022",
    details: "Recognized for excellence in mentoring and training TCS associates in AI, Mathematics for ML, Deep Learning, and Python through the Research & Development team's training programs."
  },
  "TCS Faculty & Magazine Recognition": {
    title: "TCS Faculty & Magazine Recognition",
    count: "Featured in TCS Magazine",
    years: "2021–2022 (2 Times)",
    details: "Name mentioned in TCS Magazine as TCS Golden Guru and Top TCS Faculty/SME (Subject Matter Expert) in Machine Learning and Python, highlighting contributions to internal technical education and knowledge sharing."
  },
  "Training & Mentorship": {
    title: "Training & Mentorship Impact",
    count: "R&D Training Team",
    years: "Ongoing",
    details: "Hosted and mentored TCS associates through comprehensive training programs covering: Artificial Intelligence fundamentals, Mathematics for Machine Learning, Deep Learning architectures, and Python programming for data science."
  }
};

export default function Home() {
  const [selectedRecognition, setSelectedRecognition] = useState<string | null>(null);

  const handleRecognitionClick = (topic: string) => {
    setSelectedRecognition(selectedRecognition === topic ? null : topic);
  };

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

      {/* RECOGNITION SECTION */}
      <section className="max-w-5xl mx-auto mt-24 space-y-8">
        <h3 className="text-4xl font-semibold text-red-600 text-center">
          Recognition
        </h3>
        <p className="text-center text-gray-400">
          Click on any topic to view detailed achievements
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.keys(recognitionData).map((topic, i) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              onClick={() => handleRecognitionClick(topic)}
              className={`border p-6 text-center cursor-pointer transition duration-300 ${
                selectedRecognition === topic
                  ? "border-red-600 bg-red-900/20 shadow-[0_0_20px_red]"
                  : "border-gray-700 hover:border-red-600 hover:bg-red-900/10"
              }`}
            >
              <h4 className="text-lg font-semibold text-white mb-2">
                {recognitionData[topic as keyof typeof recognitionData].title}
              </h4>
              <p className="text-red-400 text-sm mb-1">
                {recognitionData[topic as keyof typeof recognitionData].count}
              </p>
              <p className="text-gray-400 text-xs">
                {recognitionData[topic as keyof typeof recognitionData].years}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Recognition Info */}
        {selectedRecognition && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="border border-red-600 bg-gray-900/50 p-6 rounded-lg"
          >
            <h4 className="text-xl font-bold text-red-600 mb-4">
              {recognitionData[selectedRecognition as keyof typeof recognitionData].title} Details
            </h4>
            <p className="text-gray-300 text-lg leading-relaxed">
              {recognitionData[selectedRecognition as keyof typeof recognitionData].details}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-red-900/30 border border-red-600 rounded-full text-sm text-red-400">
                {recognitionData[selectedRecognition as keyof typeof recognitionData].years}
              </span>
              <span className="px-3 py-1 bg-red-900/30 border border-red-600 rounded-full text-sm text-red-400">
                {recognitionData[selectedRecognition as keyof typeof recognitionData].count}
              </span>
            </div>
          </motion.div>
        )}
      </section>

    </main>
  );
}
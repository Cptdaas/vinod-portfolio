"use client";

import { motion } from "framer-motion";
import WickBackground from "../components/WickBackground";

const skills = [
  "Agentic AI Systems",
  "Graph RAG Architectures",
  "LangGraph & MCP",
  "LLM Orchestration",
  "AWS ML Pipelines",
  "PostgreSQL VectorDB",
  "FastAPI & Docker",
  "TensorFlow / PyTorch",
  "OCR & Computer Vision",
  "Demand Forecasting (ARIMA, Ridge, Lasso)"
];

const awards = [
  "TCS Golden Guru Gala Award (2021)",
  "TCS Faculty Award (2021–2022)"
];

const education = [
  {
    degree: "B.Tech – Mechanical Engineering",
    institution: "Uttar Pradesh Technical University",
    year: "2015 – 2019"
  }
];

export default function Portfolio() {
  return (
    <main className="relative min-h-screen text-white px-6 py-24">
      <WickBackground />

      <section className="max-w-6xl mx-auto space-y-24">

        {/* SKILLS SECTION */}
        <div>
          <h2 className="text-4xl font-bold text-red-600 text-center mb-12">
            Core Competencies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border border-gray-700 p-6 text-center hover:border-red-600 hover:shadow-[0_0_20px_red] transition duration-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* AWARDS SECTION */}
        <div>
          <h2 className="text-4xl font-bold text-red-600 text-center mb-12">
            Recognition
          </h2>

          <div className="flex flex-col md:flex-row gap-10 justify-center">
            {awards.map((award, i) => (
              <motion.div
                key={award}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="border border-red-600 p-8 text-center hover:bg-red-900/20 transition duration-300"
              >
                {award}
              </motion.div>
            ))}
          </div>
        </div>

        {/* EDUCATION SECTION */}
        <div>
          <h2 className="text-4xl font-bold text-red-600 text-center mb-12">
            Education
          </h2>

          <div className="space-y-8 max-w-3xl mx-auto">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="border-l-4 border-red-600 pl-6 py-4"
              >
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-400">{edu.institution}</p>
                <p className="text-gray-500">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}
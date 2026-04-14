"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import WickBackground from "../components/WickBackground";

// Competency to Experience Mapping
const competencyData = {
  "Agentic AI Systems": {
    company: "Deloitte USI",
    role: "Data Scientist / AI Architect",
    period: "JUN 2024 — Present",
    details: [
      "Led architecture, design, and deployment of an Agentic AI multi-agent system for Clinical Study Reports (CSR) for a pharmaceutical client. Utilized LangGraph and MCP to orchestrate multiple agents, optimized prompts for each agent, and managed distributed execution on AWS.",
      "Coordinated cross-functional team collaboration to ensure high performance and accuracy.",
      "Oversaw enterprise-grade LLM chatbot systems, ensuring scalability, high availability, and performance; implemented monitoring and logging to optimize runtime.",
      "Built a Graph RAG LLM pipeline with multi-agent models on AWS for automobile supply chain exploration; improved relationship mapping and retrieval efficiency.",
      "Developed Talk-to-Infra agentic AI tool to automatically resolve Mongo script errors, enhancing system reliability."
    ]
  },
  "Graph RAG Architectures": {
    company: "Deloitte USI",
    role: "Data Scientist / AI Architect",
    period: "JUN 2024 — Present",
    details: [
      "Built a Graph RAG LLM pipeline with multi-agent models on AWS for automobile supply chain exploration; improved relationship mapping and retrieval efficiency.",
      "Designed and deployed an automated PDF data extraction pipeline using PyPDF, Plumber, AWS Lambda, extracting structured data from PDFs and storing it in RDS database.",
      "Implemented taxonomy mapping and optimized cloud resources for minimal runtime and cost.",
      "Designed microservices, vector embedding pipelines (PostgreSQL VectorDB), and automated job scheduling to streamline ingestion and retrieval workflows."
    ]
  },
  "LangGraph & MCP": {
    company: "Deloitte USI",
    role: "Data Scientist / AI Architect",
    period: "JUN 2024 — Present",
    details: [
      "Led architecture, design, and deployment of an Agentic AI multi-agent system for Clinical Study Reports (CSR) for a pharmaceutical client.",
      "Utilized LangGraph and MCP to orchestrate multiple agents, optimized prompts for each agent, and managed distributed execution on AWS.",
      "Coordinated cross-functional team collaboration to ensure high performance and accuracy."
    ]
  },
  "LLM Orchestration": {
    company: "Deloitte USI",
    role: "Data Scientist / AI Architect",
    period: "JUN 2024 — Present",
    details: [
      "Oversaw enterprise-grade LLM chatbot systems, ensuring scalability, high availability, and performance; implemented monitoring and logging to optimize runtime.",
      "Collaborated with product and research teams, providing AI/ML solutions aligned with business goals, including prompt engineering, agent orchestration, and pipeline optimization.",
      "Developed Talk-to-Infra agentic AI tool to automatically resolve Mongo script errors, enhancing system reliability."
    ]
  },
  "AWS ML Pipelines": {
    company: "Deloitte USI",
    role: "Data Scientist / AI Architect",
    period: "JUN 2024 — Present",
    details: [
      "Managed distributed execution of multi-agent systems on AWS.",
      "Designed and deployed an automated PDF data extraction pipeline using PyPDF, Plumber, AWS Lambda, extracting structured data from PDFs and storing it in RDS database.",
      "Implemented taxonomy mapping and optimized cloud resources for minimal runtime and cost.",
      "Built a Graph RAG LLM pipeline with multi-agent models on AWS for automobile supply chain exploration."
    ]
  },
  "PostgreSQL VectorDB": {
    company: "Deloitte USI",
    role: "Data Scientist / AI Architect",
    period: "JUN 2024 — Present",
    details: [
      "Designed microservices and vector embedding pipelines using PostgreSQL VectorDB.",
      "Implemented automated job scheduling to streamline ingestion and retrieval workflows.",
      "Built Graph RAG infrastructure with vector embeddings for efficient similarity search."
    ]
  },
  "FastAPI & Docker": {
    company: "Tata Consultancy Services",
    role: "Data Scientist / NLP Engineer",
    period: "JAN 2019 — JUN 2024",
    details: [
      "Designed and implemented a Flask API and containerized the entire application using Docker for advanced language models.",
      "Ensured seamless portability and consistent performance across diverse environments.",
      "Drove the Proof of Concept (POC) development for cutting-edge language models like GPT-3 and BERT."
    ]
  },
  "TensorFlow / PyTorch": {
    company: "Tata Consultancy Services",
    role: "Data Scientist / Vision Use Case",
    period: "JAN 2019 — JUN 2024",
    details: [
      "Drove impactful image classification initiatives, excelling in the pre-processing and retraining of deep learning models under the transfer learning paradigm.",
      "Specialized in refining models like InceptionV3, ResNet, and Efficient B0, meticulously tailored for extensive fashion datasets encompassing 26,000 images totaling approximately 26 gigabytes.",
      "Executed effective model optimization strategies, systematically experimenting with and fine-tuning all models to boost their efficiency in transfer learning scenarios.",
      "Formulated and fine-tuned customized configurations, resulting in peak performance model accuracy of 98.96 percent."
    ]
  },
  "OCR & Computer Vision": {
    company: "Tata Consultancy Services",
    role: "Data Scientist / Vision Use Case",
    period: "JAN 2019 — JUN 2024",
    details: [
      "Analyzed and segmented a business problem into two solutions: one utilizing computer vision and the other employing NLP, with an additional recommendation system to enhance strategic approaches.",
      "Proficiency in Craft Text Detector and TensorFlow's VGG16 model, achieving a text detection accuracy rate exceeding 95%.",
      "Meticulous approach to image data pre-processing using OpenCV, successfully enhanced image quality, resulting in a remarkable 20% increase in clarity.",
      "Seamlessly integrated Tesseract OCR into workflow, elevating OCR accuracy to an impressive 98%, contributing to a 30% improvement in overall results.",
      "Delivered OCR pipeline with 95%+ accuracy for production systems."
    ]
  },
  "Demand Forecasting (ARIMA, Ridge, Lasso)": {
    company: "Tata Consultancy Services",
    role: "Data Scientist / Demand Forecasting",
    period: "JAN 2019 — JUN 2024",
    details: [
      "Conducted comprehensive analyses to identify complementary and substitute items for market competition assessment.",
      "Utilized regression techniques (Simple Linear, Multiple, Ridge, Lasso) for precise determination of Price elasticity and cross elasticity.",
      "Demonstrated adeptness in time forecasting methods (AR, MAR, ARIMA) for accurate sales projections.",
      "Built demand forecasting models achieving significant business impact."
    ]
  }
};

// Additional experiences for TCS
const additionalTCSExperience = {
  "ML Model Quantization": {
    company: "Tata Consultancy Services",
    role: "A.I. Engineer / ML Model Quantization",
    period: "JAN 2019 — JUN 2024",
    details: [
      "Automated daily report generation from the XOAH platform using Python scripting, resulting in significant time savings for the team and enhanced productivity in other tasks.",
      "Quantized AI machine learning model using the AMD framework and developed test suites for the model's layers.",
      "These test suites were instrumental in optimizing the model post-quantization.",
      "Reduced inference cost via model quantization for production deployment."
    ]
  },
  "NLP & Sentiment Analysis": {
    company: "Tata Consultancy Services",
    role: "Data Scientist / NLP Use Case",
    period: "JAN 2019 — JUN 2024",
    details: [
      "As a Sentiment Analysis Engineer, conducted in-depth sentiment analysis on product feedback.",
      "Utilized advanced NLPToolkit for meticulous data preprocessing, implementing techniques such as Bag of Words, TF-IDF, and Word Embedding (Word2Vec).",
      "Executed two distinct approaches: rule-based (VADER, TextBlob) and attention-based (Transformer model), achieving outstanding accuracy particularly with the Transformer-based method.",
      "Leveraged expertise in NLP toolkits to analyze text data, with a focus on implementing the Bag of Words methodology.",
      "Substantially improved OCR-extracted text similarity by addressing both lexical and semantic dimensions through advanced Word2Vec processing."
    ]
  },
  "Data Engineering": {
    company: "Tata Consultancy Services",
    role: "Data Engineer / ETL",
    period: "JAN 2019 — JUN 2024",
    details: [
      "Engineered and implemented scalable data pipelines on the Snowflake Azure cloud platform, demonstrating proficiency in managing extensive datasets.",
      "Spearheaded the design and maintenance of ETL processes and data integration workflows, ensuring rigorous adherence to data quality and integrity standards.",
      "Streamlined SQL queries and data ingestion pipelines, resulting in a remarkable 30% reduction in data processing time.",
      "Specialized in intricate data mapping tasks, orchestrating seamless transformations within the ETL framework for enhanced efficiency."
    ]
  }
};

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

// Recognition Data with detailed information
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

const education = [
  {
    degree: "B.Tech – Mechanical Engineering",
    institution: "Uttar Pradesh Technical University",
    year: "2015 – 2019"
  }
];

export default function Portfolio() {
  const [selectedCompetency, setSelectedCompetency] = useState<string | null>(null);
  const [selectedRecognition, setSelectedRecognition] = useState<string | null>(null);

  const handleCompetencyClick = (skill: string) => {
    setSelectedCompetency(selectedCompetency === skill ? null : skill);
  };

  const handleRecognitionClick = (topic: string) => {
    setSelectedRecognition(selectedRecognition === topic ? null : topic);
  };

  return (
    <main className="relative min-h-screen text-white px-6 py-24">
      <WickBackground />

      <section className="max-w-6xl mx-auto space-y-24">

        {/* SKILLS SECTION */}
        <div>
          <h2 className="text-4xl font-bold text-red-600 text-center mb-12">
            Core Competencies
          </h2>
          <p className="text-center text-gray-400 mb-8">
            Click on any competency to view relevant work experience
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => handleCompetencyClick(skill)}
                className={`border p-6 text-center cursor-pointer transition duration-300 ${
                  selectedCompetency === skill
                    ? "border-red-600 bg-red-900/20 shadow-[0_0_20px_red]"
                    : "border-gray-700 hover:border-red-600 hover:shadow-[0_0_20px_red]"
                }`}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* WORK EXPERIENCE SECTION */}
        {selectedCompetency && competencyData[selectedCompetency as keyof typeof competencyData] && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="border border-red-600 bg-gray-900/50 p-8 rounded-lg"
          >
            <h3 className="text-3xl font-bold text-red-600 mb-6">
              {selectedCompetency} Experience
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-red-600 pl-6">
                <h4 className="text-xl font-semibold text-white">
                  {competencyData[selectedCompetency as keyof typeof competencyData].company}
                </h4>
                <p className="text-red-400 font-medium">
                  {competencyData[selectedCompetency as keyof typeof competencyData].role}
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  {competencyData[selectedCompetency as keyof typeof competencyData].period}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {competencyData[selectedCompetency as keyof typeof competencyData].details.map((detail, idx) => (
                    <li key={idx} className="text-base leading-relaxed">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* LEADERSHIP & VISION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-red-600 bg-gray-900/50 p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
            Leadership Philosophy & Vision
          </h2>

          {/* Leadership Approach */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Leadership Approach</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I believe in servant leadership—empowering teams through mentorship, fostering psychological safety, 
              and creating an environment where innovation thrives. My approach combines technical depth with 
              cross-functional collaboration, ensuring that every team member feels valued while delivering 
              enterprise-grade AI solutions. I lead by example, staying hands-on with architecture decisions 
              while mentoring the next generation of AI engineers.
            </p>
          </div>

          {/* Tech Role Identity */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">My Role in Tech</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              As an AI Architect and Data Scientist, I bridge the gap between cutting-edge research and 
              production-ready systems. I specialize in translating complex business problems into scalable 
              AI architectures—whether that's orchestrating multi-agent systems with LangGraph, building 
              Graph RAG pipelines, or optimizing LLM deployments. My role is to be the catalyst that transforms 
              theoretical AI capabilities into tangible business value.
            </p>
          </div>

          {/* AI Vision - Life Sciences & Healthcare */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              AI Vision: Bridging Artificial and Biological Intelligence
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              The future of AI lies in its convergence with life sciences—specifically in brain-to-machine 
              communication and the seamless interface between artificial neurons and biological neural networks. 
              I envision a world where AI doesn't just process data but understands and augments human cognition 
              at the neuronal level.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              My research explores how artificial intelligence can decode and communicate with biological 
              neural patterns, paving the way for breakthrough medical applications. From neuroprosthetics that 
              restore movement to brain-computer interfaces that help patients with neurological disorders, 
              the potential is limitless. By leveraging transformer architectures and neural decoding techniques, 
              we can create AI systems that truly understand the language of the human brain.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              This vision extends to healthcare automation, where AI agents can understand complex medical 
              literature, assist in clinical decision-making, and bridge the gap between medical research and 
              patient care. The ultimate goal is creating symbiotic AI systems that enhance human capabilities 
              while maintaining the ethical standards essential in medical science.
            </p>
            <a 
              href="https://medium.com/@cpt1995daas/advancing-brain-to-machine-communication-in-medical-science-through-artificial-intelligence-fd14f5776d45" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-red-400 hover:text-red-300 underline transition duration-300 mt-4"
            >
              Read my Medium article on Brain-to-Machine Communication →
            </a>
          </div>
        </motion.div>

        {/* RECOGNITION SECTION */}
        <div>
          <h2 className="text-4xl font-bold text-red-600 text-center mb-4">
            Recognition
          </h2>
          <p className="text-center text-gray-400 mb-8">
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
                    : "border-red-600 hover:bg-red-900/20"
                }`}
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {recognitionData[topic as keyof typeof recognitionData].title}
                </h3>
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
              className="mt-8 border border-red-600 bg-gray-900/50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-red-600 mb-4">
                {recognitionData[selectedRecognition as keyof typeof recognitionData].title} Details
              </h3>
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
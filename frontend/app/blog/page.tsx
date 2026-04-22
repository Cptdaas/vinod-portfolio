"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The New East India Company Has No Ships",
      subtitle: "Digital Colonialism & What India Must Confront Now",
      description: "An examination of how modern AI extraction mirrors colonial economic structures, and what India must do to protect its digital sovereignty.",
      date: "2026",
      category: "AI & Economy",
      href: "/blog/digital-colonialism",
      color: "border-red-600 hover:bg-red-900/20"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-center">
          Tactical AI Writings
        </h1>
        <p className="max-w-2xl text-gray-400 mb-12 text-center">
          Deep dives into Agentic AI, Graph RAG, LLM architecture,
          production ML systems, and the philosophy of intelligence.
        </p>

        {/* Blog Posts */}
        <div className="space-y-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={post.href}>
                <div className={`border p-8 transition ${post.color}`}>
                  <div className="text-red-400 text-sm font-mono mb-2">
                    {post.category} · {post.date}
                  </div>
                  <h2 className="text-2xl font-bold mb-2">
                    {post.title}
                  </h2>
                  <h3 className="text-lg text-gray-300 mb-4">
                    {post.subtitle}
                  </h3>
                  <p className="text-gray-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Medium Link */}
        <div className="text-center">
          <a
            href="https://medium.com/@cpt1995daas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-red-600 px-8 py-4 hover:bg-red-700 transition text-lg"
          >
            View More on Medium
          </a>
        </div>
      </div>

    </main>
  );
}
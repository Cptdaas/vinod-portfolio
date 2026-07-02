"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, FileDown, Youtube } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Explore Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-6 right-6 bg-red-600/90 backdrop-blur-sm border border-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-red-600/30 font-semibold tracking-wide z-50"
      >
        Explore
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: 320 }}
            animate={{ x: 0 }}
            exit={{ x: 320 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-gray-800 p-10 overflow-y-auto"
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="mb-10 text-gray-400 hover:text-red-500 transition"
            >
              Close
            </button>

            {/* Portfolio */}
            <div className="mb-10">
              <h3 className="text-sm text-gray-500 mb-4 tracking-widest">
                WORK
              </h3>
              <Link
                href="/portfolio"
                className="block text-lg text-gray-300 hover:text-red-500 transition mb-3"
              >
                Portfolio
              </Link>
              <Link
                href="/sed"
                className="block text-lg text-gray-300 hover:text-blue-500 transition"
              >
                SED - Society of Engineers & Doctors
              </Link>
            </div>

            {/* Writing / Media */}
            <div className="mb-10">
              <h3 className="text-sm text-gray-500 mb-4 tracking-widest">
                RESEARCH & MEDIA
              </h3>

              <Link
                href="/blog"
                className="block text-lg text-gray-300 hover:text-red-500 transition mb-3"
              >
                Blog
              </Link>

              <Link
                href="/book"
                className="block text-lg text-gray-300 hover:text-red-500 transition mb-3"
              >
                GenAI Book
              </Link>

              <a
                href="https://medium.com/@cpt1995daas"
                target="_blank"
                className="block text-lg text-gray-300 hover:text-red-500 transition mb-3"
              >
                Medium
              </a>

              <a
                href="https://youtube.com/@captiandaasai"
                target="_blank"
                className="flex items-center gap-3 text-lg text-gray-300 hover:text-red-500 transition"
              >
                <Youtube size={18} />
                YouTube
              </a>
            </div>

            {/* Professional Links */}
            <div className="mb-10">
              <h3 className="text-sm text-gray-500 mb-4 tracking-widest">
                PROFESSIONAL
              </h3>

              <div className="flex gap-6">

                <a
                  href="https://github.com/Cptdaas"
                  target="_blank"
                  className="group relative flex items-center gap-3 px-4 py-3 border border-gray-700 rounded-lg hover:border-red-600 hover:bg-red-900/10 transition duration-300 overflow-hidden"
                >
                  <Github size={20} className="group-hover:text-red-500 transition" />
                  <span className="text-sm text-gray-400 translate-x-[-8px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300">
                    GitHub
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/cptvinod/"
                  target="_blank"
                  className="group relative flex items-center gap-3 px-4 py-3 border border-gray-700 rounded-lg hover:border-blue-500 hover:bg-blue-900/10 transition duration-300 overflow-hidden"
                >
                  <Linkedin size={20} className="group-hover:text-blue-500 transition" />
                  <span className="text-sm text-gray-400 translate-x-[-8px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300">
                    LinkedIn
                  </span>
                </a>

              </div>
            </div>

            {/* Resume */}
            <div>
              <h3 className="text-sm text-gray-500 mb-4 tracking-widest">
                CV
              </h3>

              <a
                href="/VinodResume2026.pdf"
                download
                className="flex items-center gap-3 text-lg text-gray-300 hover:text-red-500 transition"
              >
                <FileDown size={18} />
                Download Resume
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
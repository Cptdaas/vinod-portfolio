"use client";

import { motion } from "framer-motion";

export default function AnimatedCurves() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.08]"
      viewBox="0 0 1440 900"
      fill="none"
    >
      <motion.path
        d="M0 450 Q 400 200 800 450 T 1600 450"
        stroke="rgba(248,113,113,0.9)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      <motion.path
        d="M0 520 Q 500 750 900 520 T 1600 520"
        stroke="rgba(148,163,184,0.8)"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 22, repeat: Infinity }}
      />
    </svg>
  );
}
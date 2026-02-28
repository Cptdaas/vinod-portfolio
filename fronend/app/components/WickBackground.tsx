"use client";

import { motion } from "framer-motion";

export default function WickBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Base Dark */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Red Glow */}
      <motion.div
        className="absolute w-[800px] h-[800px] bg-red-800 rounded-full blur-[200px] opacity-20"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{ top: "20%", left: "30%" }}
      />

      {/* Subtle Math Curves SVG */}
      <svg
        className="absolute w-full h-full opacity-10"
        viewBox="0 0 1440 800"
        fill="none"
      >
        <motion.path
          d="M0 400 Q 360 200 720 400 T 1440 400"
          stroke="red"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.path
          d="M0 450 Q 360 650 720 450 T 1440 450"
          stroke="gray"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </svg>

      {/* Floating Formula Text */}
      <motion.div
        className="absolute text-gray-500 text-sm opacity-10"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{ top: "30%", left: "15%" }}
      >
        f(x) = ∑(wᵢ · xᵢ) + b
      </motion.div>

      <motion.div
        className="absolute text-gray-500 text-sm opacity-10"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 7, repeat: Infinity }}
        style={{ bottom: "20%", right: "20%" }}
      >
        P(A|B) = P(B|A)P(A)/P(B)
      </motion.div>

    </div>
  );
}
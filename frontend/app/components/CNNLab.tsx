"use client";

import { motion } from "framer-motion";

export default function CNNLab() {
  return (
    <div className="absolute right-[10%] top-[25%] opacity-[0.10]">

      <svg width="450" height="450">

        {/* Grid */}
        {[...Array(6)].map((_, row) =>
          [...Array(6)].map((_, col) => (
            <rect
              key={`${row}-${col}`}
              x={col * 60}
              y={row * 60}
              width="50"
              height="50"
              fill="#38bdf8"
              opacity="0.3"
            />
          ))
        )}

        {/* Moving Convolution Window */}
        <motion.rect
          width="120"
          height="120"
          fill="none"
          stroke="#facc15"
          strokeWidth="3"
          animate={{
            x: [0, 180, 180, 0, 0],
            y: [0, 0, 180, 180, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      </svg>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";

export default function ANNLab() {
  return (
    <div className="absolute left-[10%] top-[30%] opacity-[0.12]">

      <svg width="500" height="300">

        {/* Input Layer */}
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={`in-${i}`}
            cx="50"
            cy={60 + i * 50}
            r="12"
            fill="#f87171"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 6 + i, repeat: Infinity }}
          />
        ))}

        {/* Hidden Layer */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`hid-${i}`}
            cx="250"
            cy={80 + i * 60}
            r="14"
            fill="#facc15"
            animate={{ opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 7 + i, repeat: Infinity }}
          />
        ))}

        {/* Output */}
        <motion.circle
          cx="430"
          cy="150"
          r="16"
          fill="#38bdf8"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Connections */}
        {[0, 1, 2, 3].map((i) =>
          [0, 1, 2].map((j) => (
            <line
              key={`${i}-${j}`}
              x1="50"
              y1={60 + i * 50}
              x2="250"
              y2={80 + j * 60}
              stroke="#f87171"
              strokeWidth="1"
              opacity="0.25"
            />
          ))
        )}

        {[0, 1, 2].map((i) => (
          <line
            key={`out-${i}`}
            x1="250"
            y1={80 + i * 60}
            x2="430"
            y2="150"
            stroke="#facc15"
            strokeWidth="1"
            opacity="0.25"
          />
        ))}

      </svg>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";

const formulas = [
  "∂L/∂w = (y - ŷ)x",
  "P(A|B) = P(B|A)P(A)/P(B)",
  "H0 vs H1",
  "Var(X) = E[X²] - (E[X])²"
];

export default function MathLayer() {
  return (
    <>
      {formulas.map((f, i) => (
        <motion.div
          key={f}
          className="absolute text-gray-400/20 font-mono text-xs"
          style={{
            top: `${20 + i * 12}%`,
            left: `${10 + i * 15}%`
          }}
          animate={{ y: [-8, 8, -8] }}
          transition={{
            duration: 8 + i,
            repeat: Infinity
          }}
        >
          {f}
        </motion.div>
      ))}
    </>
  );
}
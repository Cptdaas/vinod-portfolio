"use client";

import { motion } from "framer-motion";

export default function WickBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      
      {/* Dark base */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Red radial glow */}
      <motion.div
        className="absolute w-[800px] h-[800px] bg-red-800 rounded-full blur-[200px] opacity-30"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{ top: "20%", left: "30%" }}
      />

      {/* Subtle moving light streak */}
      <motion.div
        className="absolute w-[2px] h-full bg-red-600 opacity-20"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </div>
  );
}
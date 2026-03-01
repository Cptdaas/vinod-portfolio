"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function ExploreMenu() {
  const [open, setOpen] = useState(false);

  const items = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "GitHub", href: "https://github.com/Cptdaas", external: true },
    { name: "Medium", href: "https://medium.com/@cpt1995daas", external: true },
    { name: "YouTube", href: "https://youtube.com/@captiandaasai", external: true }
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Main Button */}
      <button className="border border-red-600 px-8 py-3 hover:bg-red-700 transition duration-300">
        Explore ▸
      </button>

      {/* Sliding Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 mt-4 w-60 bg-black border border-gray-700 p-6 space-y-4 shadow-[0_0_25px_rgba(255,0,0,0.3)]"
          >
            {items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    className="block hover:text-red-600 transition"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="block hover:text-red-600 transition"
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
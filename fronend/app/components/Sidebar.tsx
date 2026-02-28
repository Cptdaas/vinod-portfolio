"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const items = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "GitHub", href: "https://github.com/Cptdaas", external: true },
    { name: "Medium", href: "https://medium.com/@cpt1995daas", external: true },
    { name: "YouTube", href: "https://youtube.com/@captiandaasai", external: true },
    { name: "Download CV", href: "/Vinod_Tiwari_Resume.pdf", external: false }
  ];

  return (
    <>
      {/* Fixed Sidebar Trigger */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
        <button
          onClick={() => setOpen(true)}
          className="border border-red-600 px-4 py-2 rotate-[-90deg] hover:bg-red-700 transition"
        >
          Explore
        </button>
      </div>

      {/* Sliding Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed right-0 top-0 h-full w-80 bg-black border-l border-gray-700 z-50 p-10 space-y-8"
            >
              <h2 className="text-2xl font-bold text-red-600 mb-6">
                Navigate
              </h2>

              {items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      className="block text-lg hover:text-red-600 transition"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-lg hover:text-red-600 transition"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}

              <button
                onClick={() => setOpen(false)}
                className="mt-10 text-sm text-gray-500 hover:text-red-600"
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
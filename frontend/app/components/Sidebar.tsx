"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Linkedin, Github, FileDown } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const items = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "GitHub", href: "https://github.com/Cptdaas", external: true },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/cptvinod/", external: true },
    { name: "Medium", href: "https://medium.com/@cpt1995daas", external: true },
    { name: "YouTube", href: "https://youtube.com/@captiandaasai", external: true },
    { name: "Download CV", href: "/Vinod_Tiwari_Resume.pdf", external: false }
  ];

  return (
    <>
      <button onClick={() => setOpen(true)}>Explore</button>

      <AnimatePresence>
        {open && (
          <motion.div>
            {items.map((item) => (
              <motion.div key={item.name}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    className="flex items-center gap-3 text-lg hover:text-red-600 transition"
                  >
                    {item.name === "LinkedIn" && <Linkedin size={18} />}
                    {item.name === "GitHub" && <Github size={18} />}
                    {item.name === "Download CV" && <FileDown size={18} />}
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
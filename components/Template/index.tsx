"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        mass: 10,
        stiffness: 200,
        damping: 100,
        velocity: 1,
      }}
    >
      {children}
    </motion.div>
  );
}

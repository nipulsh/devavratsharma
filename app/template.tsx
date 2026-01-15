"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Top Left Half */}
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{ x: "-100%", y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Custom bezier for "slash" feel
        className="fixed inset-0 z-[100] bg-[#050814] pointer-events-none"
        style={{ clipPath: "polygon(0 0, 200% 0, 0 200%)" }} 
      >
        <div className="absolute right-0 bottom-0 w-[500%] h-1 bg-primary-purple shadow-[0_0_20px_#ff003c]" />
      </motion.div>

      {/* Bottom Right Half */}
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{ x: "100%", y: "100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[100] bg-[#050814] pointer-events-none"
        style={{ clipPath: "polygon(100% 100%, -100% 100%, 100% -100%)" }}
      >
         <div className="absolute left-0 top-0 w-[500%] h-1 bg-secondary-blue shadow-[0_0_20px_#00f0ff]" />
      </motion.div>
      
      {/* Content Fade In */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
}

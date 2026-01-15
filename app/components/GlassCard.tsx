import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`glass rounded-xl p-6 border border-white/10 shadow-xl backdrop-blur-md bg-white/5 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;

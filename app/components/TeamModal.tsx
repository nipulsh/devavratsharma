"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  code: string;
  description: string;
  image?: string;
}

interface TeamModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export default function TeamModal({ member, onClose }: TeamModalProps) {
  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        >
          {/* Backdrop with Blur */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl bg-[#0f0f0f] border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row max-h-[90vh] md:h-[600px]"
          >
             {/* Decorative Corner Borders */}
             <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary-purple z-20" />
             <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-secondary-blue z-20" />

             {/* Left Side: Image (Portrait) */}
             <div className="w-full md:w-5/12 relative min-h-[300px] md:h-full bg-black/50 border-b md:border-b-0 md:border-r border-white/10 group">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                
                {/* Image Placeholder */}
                <div className="absolute inset-4 border border-white/10 overflow-hidden flex items-center justify-center bg-[#1a1a1a]">
                     {member.image ? (
                        <Image 
                            src={member.image} 
                            alt={member.name}
                            fill
                            className="object-cover"
                        />
                     ) : (
                         <div className="text-center">
                             <div className="text-6xl mb-2 grayscale opacity-30">👤</div>
                             <div className="text-xs font-mono text-gray-500 uppercase">Image Unavailable</div>
                         </div>
                     )}
                     
                     {/* Overlay Scan Effect */}
                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-purple/5 to-transparent animate-scan pointer-events-none opacity-50" />
                </div>
                
                {/* HUD Data */}
                <div className="absolute bottom-8 left-8 right-8 flex justify-between text-xs font-mono text-white/60">
                    <span>ID: {member.code}</span>
                    <span className="text-green-500">SYNCED</span>
                </div>
             </div>

             {/* Right Side: Content */}
             <div className="w-full md:w-7/12 p-8 md:p-12 md:overflow-y-auto relative custom-scrollbar">
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors group z-30"
                >
                    <span className="text-2xl font-light text-gray-400 group-hover:text-white">×</span>
                </button>

                <div className="space-y-6 md:mt-8">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-0.5 bg-primary-purple/20 text-primary-purple text-xs font-mono uppercase border border-primary-purple/30">
                                Personnel File
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
                            {member.name}
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-primary-purple to-transparent mt-4" />
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-sm font-mono text-gray-400 uppercase tracking-widest">Assigned Role</h3>
                        <p className="text-xl md:text-2xl font-bold text-white uppercase">{member.role}</p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-white/10">
                        <h3 className="text-sm font-mono text-gray-400 uppercase tracking-widest">System Protocols & Duties</h3>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                            {member.description}
                        </p>
                    </div>

                    {/* Stats / Skills Placeholder */}
                    <div className="pt-6 grid grid-cols-2 gap-4">
                        <div className="p-3 bg-white/5 border border-white/5">
                            <div className="text-xs text-gray-500 mb-1">CLEARANCE</div>
                            <div className="text-white font-bold">LEVEL 4</div>
                        </div>
                        <div className="p-3 bg-white/5 border border-white/5">
                            <div className="text-xs text-gray-500 mb-1">STATUS</div>
                            <div className="text-green-500 font-bold">ACTIVE</div>
                        </div>
                    </div>
                </div>
             </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

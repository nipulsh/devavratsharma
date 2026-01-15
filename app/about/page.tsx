"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GlassCard from "../components/GlassCard";
import TeamModal from "../components/TeamModal";

const TEAM_MEMBERS = [
    { 
        name: "Devavrat Sharma", 
        role: "Developer", 
        code: "DEV_LEAD",
        description: "Orchestrates the core coding infrastructure. Responsible for full-stack implementation, system architecture optimization, and ensuring code integrity across all modules.",
        image: "/developer.png"
    },
    { 
        name: "Ranver Singh", 
        role: "Data Collector", 
        code: "DATA_OPS",
        description: "Leads the critical mission of gathering diverse and high-quality datasets. Ensures data variance to train robust emotion recognition models under varying environmental conditions.",
        image: "/collector.png"
    },
    { 
        name: "Yash Girsay", 
        role: "Video Editor", 
        code: "VISUAL_FX",
        description: "Manages all visual documentation and presentation assets. Crafts compelling visual narratives to demonstrate system capabilities and project milestones.",
        image: "/editor.png"
    },
    { 
        name: "Nitesh", 
        role: "Logbook Filler", 
        code: "LOG_MGR",
        description: "Maintains precise operational logs and documentation. Tracks project timelines, bug reports, and development sprints to ensure rigorous quality control standards.",
        image: "/logbook.png"   
    },
    { 
        name: "Anshuman Kaushik", 
        role: "Data Preprocessor", 
        code: "DATA_ENG",
        description: "Refines raw data into machine-learnable formats. Implements cleaning algorithms, normalization techniques, and data augmentation to maximize model accuracy.",
        image: "/preprocessor.png"  
    },
    { 
        name: "Pranshu", 
        role: "Tester", 
        code: "QA_UNIT",
        description: "Executes stress tests and validation protocols. Identifies edge cases and system vulnerabilities to ensure stability and reliability before deployment.",
        image: "/tester.png"        
    },
];

export default function About() {
  const [selectedMember, setSelectedMember] = React.useState<typeof TEAM_MEMBERS[0] | null>(null);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#050814] text-white">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-blue/10 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 container mx-auto px-6 py-32 flex flex-col gap-24">
        
        {/* Header Section */}
        <section className="text-center space-y-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block"
            >
                <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="h-[1px] w-12 bg-primary-purple" />
                    <span className="text-xs font-mono text-primary-purple uppercase tracking-[0.3em]">System.Personnel</span>
                    <div className="h-[1px] w-12 bg-primary-purple" />
                </div>
                <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 py-2 pr-4">
                    THE SQUAD
                </h1>
            </motion.div>
        </section>

        {/* Team Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => setSelectedMember(member)}
                    className="cursor-pointer"
                >
                    <div className="group relative h-full bg-black/50 border border-white/10 hover:border-primary-purple/50 transition-all duration-300 overflow-hidden">
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Content */}
                        <div className="relative p-8 flex flex-col h-full z-10">
                            <div className="flex justify-between items-start mb-8">
                                <div className="text-xs font-mono text-gray-500 group-hover:text-primary-purple transition-colors">
                                    [{member.code}]
                                </div>
                                <div className="w-2 h-2 bg-gray-700 group-hover:bg-green-500 transition-colors rounded-sm" />
                            </div>

                            <div className="mt-auto space-y-2">
                                <h3 className="text-2xl font-bold uppercase tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                                    {member.name}
                                </h3>
                                <div className="h-[1px] w-12 bg-white/20 group-hover:w-full group-hover:bg-primary-purple transition-all duration-500" />
                                <p className="text-sm font-mono text-gray-400 uppercase tracking-widest pt-2">
                                    {member.role}
                                </p>
                            </div>
                        </div>

                        {/* Corner Deco */}
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/10 group-hover:border-primary-purple bg-transparent transition-colors" />
                    </div>
                </motion.div>
            ))}
        </section>

        {/* Target Audience / Mentors Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center bg-white/5 border border-white/10 p-12 relative overflow-hidden group min-h-[500px]">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            
            {/* Left Col: Target */}
            <div className="relative z-10 space-y-6">
                 <div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-2">
                        Target <span className="text-primary-purple">Audience</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary-purple to-transparent" />
                 </div>
                 
                 <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                     <p>
                        Our predictive analysis system is specifically engineered to empower educational institutions. By analyzing subtle facial cues and micro-expressions, SNAP VIBE provides real-time insights into student emotional well-being.
                     </p>
                     <p>
                        This critical data assists <span className="text-white font-bold border-b border-primary-purple">Teachers</span> and <span className="text-white font-bold border-b border-primary-purple">Councilors</span> in identifying distress signals early, enabling proactive support and fostering a more empathetic learning environment.
                     </p>
                 </div>

                 <div className="flex flex-wrap gap-4 pt-4">
                    <div className="px-4 py-2 border border-white/20 text-xs font-mono uppercase hover:bg-white/10 transition-colors flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Authorized: Faculty
                    </div>
                    <div className="px-4 py-2 border border-white/20 text-xs font-mono uppercase hover:bg-white/10 transition-colors flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        Authorized: Admin
                    </div>
                 </div>
            </div>

            {/* Right Col: Teacher Image */}
            <div className="relative z-10 flex justify-center items-center h-full">
                 <div className="relative w-full max-w-sm aspect-[3/4] rounded-lg overflow-hidden border border-white/10 group-hover:border-primary-purple/50 transition-colors duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    {/* Image */}
                    <Image 
                        src="/teacher.png" 
                        alt="Teacher and Student Interaction" 
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Tech Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-black/40 backdrop-blur-sm">
                        <div className="flex justify-between items-end">
                            <div>
                                <div className="text-xs font-mono text-primary-purple mb-1">SCANNING_SECTOR_07</div>
                                <div className="text-xl font-bold uppercase text-white">Classroom Environment</div>
                            </div>
                            
                        </div>
                    </div>
                    
                    {/* Animated HUD Lines */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary-purple/50" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary-purple/50" />
                 </div>
            </div>
        </section>

      </main>
      
      {/* Team Member Modal */}
      <TeamModal 
        member={selectedMember} 
        onClose={() => setSelectedMember(null)} 
      />
    </div>
  );
}

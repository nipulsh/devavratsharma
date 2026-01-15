"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formState);
    alert("TRANSMISSION SENT SUCCESSFULLY");
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#050814] text-white selection:bg-primary-purple selection:text-white">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
         <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-purple/10 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary-blue/10 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto">
            
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                 <div className="inline-block relative 0">
                    <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase relative z-10 py-2 pr-8">
                        CONTACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-secondary-blue">HQ</span>
                    </h1>
                     <div className="absolute -bottom-2 -right-4 text-xs font-mono text-primary-purple tracking-widest">
                        // SECURE_CHANNEL_OPEN
                    </div>
                </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-8"
                >
                    <div className="bg-black/40 border border-white/10 p-8 backdrop-blur-sm relative group overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-primary-purple/50 group-hover:bg-primary-purple transition-colors" />
                        <h3 className="text-2xl font-bold uppercase mb-2">Direct Line</h3>
                        <p className="text-gray-400 font-mono mb-4 text-sm">For urgent inquiries and system support.</p>
                        <a href="tel:+91XXXXXXXXXX" className="text-xl md:text-2xl font-mono text-white hover:text-primary-purple transition-colors block">
                            +91 98765 43210
                        </a>
                    </div>

                     <div className="bg-black/40 border border-white/10 p-8 backdrop-blur-sm relative group overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-secondary-blue/50 group-hover:bg-secondary-blue transition-colors" />
                        <h3 className="text-2xl font-bold uppercase mb-2">Neural Net</h3>
                        <p className="text-gray-400 font-mono mb-4 text-sm">Electronic mail transmission.</p>
                        <a href="mailto:snapvibe00@gmail.com" className="text-xl md:text-2xl font-mono text-white hover:text-secondary-blue transition-colors block break-words">
                            snapvibe00@gmail.com
                        </a>
                    </div>

                    <div className="p-4 border border-white/5 bg-white/5 rounded-sm">
                        <div className="flex items-center gap-3 text-xs font-mono text-gray-500 uppercase">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            System Status: Online
                        </div>
                    </div>
                </motion.div>

                {/* Feedback Form */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative"
                >
                    {/* Corner Brackets */}
                    <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary-purple/50" />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary-purple/50" />

                    <form onSubmit={handleSubmit} className="bg-[#0a0a0a] border border-white/10 p-8 space-y-6 relative z-10">
                        <h3 className="text-lg font-bold uppercase tracking-widest border-b border-white/10 pb-4 mb-6">
                            Send Transmission
                        </h3>

                        <div className="space-y-1">
                            <label className="text-xs font-mono text-gray-500 uppercase ml-1">Identity</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                placeholder="ENTER NAME"
                                className="w-full bg-black/50 border border-white/20 p-4 font-mono text-white placeholder:text-gray-700 focus:border-primary-purple focus:outline-none transition-colors"
                                required
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-mono text-gray-500 uppercase ml-1">Frequency</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                placeholder="ENTER EMAIL"
                                className="w-full bg-black/50 border border-white/20 p-4 font-mono text-white placeholder:text-gray-700 focus:border-primary-purple focus:outline-none transition-colors"
                                required
                            />
                        </div>

                         <div className="space-y-1">
                            <label className="text-xs font-mono text-gray-500 uppercase ml-1">Data Packet</label>
                            <textarea 
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                placeholder="ENTER MESSAGE"
                                rows={5}
                                className="w-full bg-black/50 border border-white/20 p-4 font-mono text-white placeholder:text-gray-700 focus:border-primary-purple focus:outline-none transition-colors resize-none"
                                required
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-gradient-to-r from-primary-purple to-primary-pink py-4 font-black uppercase tracking-widest hover:brightness-110 transition-all active:scale-[0.99]"
                        >
                            Intialize Upload
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
      </main>
    </div>
  );
}

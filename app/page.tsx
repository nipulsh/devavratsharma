"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GlassCard from "./components/GlassCard"; 
import ArchiveCarousel from "./components/ArchiveCarousel";
import Image from "next/image";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={targetRef} className="min-h-screen relative overflow-hidden bg-[#0a0a0a] text-white selection:bg-primary-purple selection:text-white">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Samurai Background Image */}
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 blur-sm scale-105"
            style={{ backgroundImage: "url('/bg-samurai.png')" }}
        />
        {/* Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Animated Orbs (Subtler now) */}
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-primary-purple/10 rounded-full blur-[120px] mix-blend-screen" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-secondary-blue/10 rounded-full blur-[120px] mix-blend-screen" 
        />
        
        {/* Tech Grid & Lines */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>

      <main className="relative z-10 container mx-auto px-8 md:px-12 lg:px-20 pt-32 pb-24 flex flex-col gap-32">
        {/* Enhanced Hero Section */}
        <motion.section 
          style={{ scale: heroScale, opacity }}
          className="min-h-[70vh] flex flex-col items-center justify-center text-center space-y-8 relative"
        >
          {/* ... (Hero content remains same, just ensuring padding context is updated) ... */}
          {/* Decorative Elements */}
          <div className="absolute top-0 left-10 w-24 h-24 border-t-2 border-l-2 border-primary-purple/50 opacity-50" />
          <div className="absolute bottom-0 right-10 w-24 h-24 border-b-2 border-r-2 border-accent-pink/50 opacity-50" />
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Glitch Effect Title Wrapper */}
            <div className="relative group">
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 pb-4 relative z-10">
                SNAP VIBE
                </h1>
                <h1 className="absolute top-0 left-0 w-full text-7xl md:text-9xl font-black tracking-tighter text-primary-purple/30 blur-sm animate-pulse z-0">
                SNAP VIBE
                </h1>
            </div>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-gradient-to-r from-transparent via-primary-purple to-transparent mx-auto mt-2"
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light tracking-wide uppercase"
          >
            <span className="text-primary-purple font-semibold">&lt;AI&gt;</span> Powered Emotion Detection <span className="text-secondary-blue font-semibold">&lt;/System&gt;</span>
          </motion.p>

          <div className="flex gap-6 mt-12">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors clip-path-slant"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
            >
                Get Started
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
            >
                View Demo
            </motion.button>
          </div>

          {/* Floating Stats/Badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[5%] top-[20%] hidden lg:block"
          >
             <GlassCard className="!p-4 !bg-black/40 border-primary-purple/30 backdrop-blur-xl">
                <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Accuracy</div>
                <div className="text-2xl font-bold text-primary-purple">98.5%</div>
             </GlassCard>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute left-[5%] bottom-[20%] hidden lg:block"
          >
             <GlassCard className="!p-4 !bg-black/40 border-secondary-blue/30 backdrop-blur-xl">
                <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Latency</div>
                <div className="text-2xl font-bold text-secondary-blue">&lt; 50ms</div>
             </GlassCard>
          </motion.div>
        </motion.section>

        {/* Introduction Section - Gaming Style Enhanced */}
        <section className="introduction-section grid md:grid-cols-2 gap-16 items-center bg-white  relative py-12">
          {/* Cyberpunk decoration lines */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-purple/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary-blue/50 to-transparent" />

          <div className="order-2 md:order-1 relative group z-10 md:ml-12">
            {/* Tech Frame Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-purple to-secondary-blue opacity-30 group-hover:opacity-50 blur-md transition-opacity duration-500" 
                 style={{ clipPath: 'polygon(0 10%, 10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%)' }} />
            
            <div className="relative bg-[#0f0f0f] p-10 pl-16 border border-white/10"
                 style={{ clipPath: 'polygon(0 10%, 10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%)' }}>
              
              <div className="flex items-center gap-4 mb-6">
                  <div className="w-2 h-8 bg-primary-purple" />
                  <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">
                    Introduction
                  </h2>
              </div>

              <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed text-lg font-light border-l-2 border-white/10 pl-4">
                    In this project, we delve into the fascinating realm of <span className="text-primary-purple font-bold">Artificial Intelligence (AI)</span> to develop a mood recognition model (SNAP VIBE).
                  </p>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    This innovative project leverages the power of <span className="text-secondary-blue">computer vision</span> and machine learning. 
                    It not only explores the technical aspects of AI but also highlights its potential to enhance human-computer interaction and create more empathetic digital experiences.
                  </p>
              </div>

              {/* Decorative Tech Specs */}
              <div className="mt-8 flex gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
                  <div className="border border-gray-700 px-2 py-1">Sys: Online</div>
                  <div className="border border-gray-700 px-2 py-1">Ver: 2.0.4</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center relative">
             {/* Hexagonal/Gaming Image Container */}
             <div className="relative w-full aspect-square max-w-md group">
                {/* Background Glitch Elements */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 border-b-4 border-r-4 border-primary-purple/50 opacity-50" />
                <div className="absolute -left-4 -top-4 w-24 h-24 border-t-4 border-l-4 border-secondary-blue/50 opacity-50" />
                
                <div className="relative h-full w-full bg-black/80 border-2 border-white/10 p-2"
                     style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}>
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
                    
                    <div className="h-full w-full flex flex-col items-center justify-center relative z-10 overflow-hidden">
                        {/* Animated Grid Background inside image */}
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30 animate-pulse" />
                        
                        <div className="relative w-full h-full z-20 text-center">
                            <Image src="/samurai-fight.png" className="w-full h-full object-contain" alt="Logo" width={100} height={100} />
                        </div>

                        {/* Scan Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-white/50 shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-scan" />
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Aim Section - Gaming Style Enhanced */}
        <section className="grid md:grid-cols-2 gap-16 items-center  relative py-12">
           {/* Cyberpunk decoration pulsing glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[500px] bg-secondary-blue/5 rounded-full blur-[100px] -z-10 animate-pulse" />

          <div className="flex justify-center relative z-10 w-full">
             {/* Target Visual */}
             <div className="relative w-full max-w-lg aspect-square md:aspect-video group">
                {/* Tech Border Container */}
                <div className="absolute -inset-4 border border-secondary-blue/30 rounded-lg opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-secondary-blue/5 border border-secondary-blue/20 rounded-lg overflow-hidden backdrop-blur-sm">
                    {/* Target Image */}
                    <div className="relative w-full h-full p-4">
                        <Image 
                            src="/aim.png" 
                            className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(148,163,184,0.3)]" 
                            alt="Aim Visual" 
                            width={500} 
                            height={500} 
                        />
                    </div>
                    
                    {/* Grid Overlay */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                    
                    {/* Scanning Line Animation */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-secondary-blue/50 shadow-[0_0_15px_rgba(148,163,184,0.8)] animate-scan" style={{ animationDuration: '4s' }} />
                </div>

                {/* Corner Markers */}
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-primary-purple" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-primary-purple" />
                <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-secondary-blue" />
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-secondary-blue" />

                {/* HUD Labels */}
                <div className="absolute top-2 left-4 text-[10px] font-mono text-secondary-blue/80 uppercase">
                    Target_Acquisition // Mode: Active
                </div>
                <div className="absolute bottom-2 right-4 text-[10px] font-mono text-primary-purple/80 uppercase animate-pulse">
                    Scanning...
                </div>
            </div>
          </div>

          <div className="relative group z-10">
            {/* Tech Frame Background */}
            <div className="absolute -inset-1 bg-gradient-to-l from-secondary-blue to-white opacity-20 group-hover:opacity-40 blur-md transition-opacity duration-500" 
                 style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }} />
            
            <div className="relative bg-[#0f0f0f] p-8 border-r-2 border-white/20"
                 style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}>
              
              <div className="flex flex-col items-end mb-6">
                  <h2 className="text-5xl font-black text-white uppercase tracking-tighter text-right">
                    OUR AIM
                  </h2>
                  <div className="text-xs font-mono text-secondary-blue uppercase tracking-[0.3em]">
                    Mission Objective
                  </div>
              </div>

              <div className="space-y-4 text-right">
                  <p className="text-gray-300 leading-relaxed text-lg font-light">
                    In this project, we aim to analyse <span className="text-secondary-blue font-bold bg-secondary-blue/10 px-1">facial expressions</span> and identify a user's emotional state.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    By training a model to recognize various emotions, we aim to create a project that can <span className="italic text-white">detect mood</span> effectively.
                  </p>
              </div>

              {/* Status Indicators */}
              <div className="mt-8 flex justify-end gap-2">
                  <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs font-mono text-gray-500">SYSTEM READY</span>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section - Gaming Style Enhanced */}
        <section className="space-y-16 py-12 relative">
             {/* Background Grid Accent */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] pointer-events-none" />

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center relative z-10"
            >
                <div className="inline-block relative">
                    <h2 className="text-6xl font-black text-white tracking-tighter uppercase relative z-10">
                        DATA <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-secondary-blue">ARCHIVES</span>
                    </h2>
                    <div className="absolute -top-4 -right-8 text-xs font-mono text-gray-500 transform rotate-90 origin-bottom-left">
                        // SECURE_ACCESS
                    </div>
                </div>
                <div className="mt-4 flex justify-center gap-2">
                    <div className="w-2 h-2 bg-primary-purple rounded-sm" />
                    <div className="w-2 h-2 bg-white/20 rounded-sm" />
                    <div className="w-2 h-2 bg-white/20 rounded-sm" />
                </div>
            </motion.div>
            
            <div className="relative z-10">
                <ArchiveCarousel />
            </div>
            
             {/* Bottom Decorative Bar */}
             <div className="flex items-center justify-center gap-4 opacity-30 mt-12">
                <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-white" />
                <div className="w-2 h-2 rotate-45 border border-white" />
                <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-white" />
             </div>
        </section>
      </main>
      
      <style jsx global>{`
        @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(500%); }
        }
        .animate-scan {
            animation: scan 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050814] border-t border-white/10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-purple/50 to-transparent" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="inline-block relative group">
                <h2 className="text-3xl font-black tracking-tighter text-white italic">
                    SNAP <span className="text-primary-purple">VIBE</span>
                </h2>
            </Link>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
              Pioneering the future of digital empathy through advanced computer vision and emotion recognition technology. 
              <br/><br/>
              <span className="font-mono text-xs text-primary-purple uppercase tracking-widest">// SYSTEM.ONLINE</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm border-l-2 border-primary-purple pl-3">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
                {['Home', 'About Us', 'Contact', 'Demo'].map((item) => (
                    <li key={item}>
                        <Link href="/" className="text-gray-400 hover:text-primary-purple transition-colors flex items-center gap-2 group">
                            <span className="w-1 h-1 bg-gray-600 group-hover:bg-primary-purple transition-colors" />
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>

          {/* Legal / Social */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm border-l-2 border-primary-purple pl-3">
              Connect
            </h3>
            <div className="flex gap-4">
                {/* Social placeholders */}
                {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-purple hover:border-primary-purple transition-all cursor-pointer group">
                        <div className="w-4 h-4 bg-gray-400 group-hover:bg-white rounded-sm" />
                    </div>
                ))}
            </div>
            <div className="text-xs text-gray-500 font-mono mt-8">
                &copy; {currentYear} SNAP VIBE.
                <br/>
                ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Status Bar */}
      <div className="w-full h-2 bg-gradient-to-r from-primary-purple via-primary-pink to-primary-purple opacity-20" />
    </footer>
  );
}

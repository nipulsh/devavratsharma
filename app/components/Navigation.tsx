"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contacts", href: "/contact" }, 
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050814]/90 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black italic tracking-tighter group relative z-50">
          <span className="text-white group-hover:text-primary-purple transition-colors">SNAP</span>
          <span className="text-primary-purple group-hover:text-white transition-colors"> VIBE</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-sm uppercase tracking-wider transition-colors ${
                pathname === link.href ? "text-primary-purple" : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-full block h-[2px] w-full bg-primary-purple"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
            className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-end gap-1.5 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
            <motion.span 
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-8 h-0.5 bg-white group-hover:bg-primary-purple transition-colors" 
            />
            <motion.span 
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-white group-hover:bg-primary-purple transition-colors" 
            />
            <motion.span 
                animate={isMobileMenuOpen ? { rotate: -45, y: -6, width: "2rem" } : { rotate: 0, y: 0, width: "1rem" }}
                className="h-0.5 bg-white group-hover:bg-primary-purple transition-colors" 
            />
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-100%" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 bg-[#050814] z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                >
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
                    
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-4xl font-black uppercase italic tracking-tighter ${
                                    pathname === link.href ? "text-primary-purple" : "text-white"
                                }`}
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
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
        <Link href="/" className="text-2xl font-black italic tracking-tighter group">
          <span className="text-white group-hover:text-primary-purple transition-colors">SNAP</span>
          <span className="text-primary-purple group-hover:text-white transition-colors"> VIBE</span>
        </Link>

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
      </div>
    </motion.nav>
  );
};

export default Navigation;

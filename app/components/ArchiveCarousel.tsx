"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Image from 'next/image';

const DATA_ITEMS = [
    { id: 1, image: "/gallary/image1.jpeg", label: "Analysis_01" },
    { id: 2, image: "/gallary/image2.jpeg", label: "Analysis_02" },
    { id: 3, image: "/gallary/image3.jpeg", label: "Analysis_03" },
    { id: 4, image: "/gallary/image4.jpeg", label: "Analysis_04" },
    { id: 5, image: "/gallary/image5.jpeg", label: "Analysis_05" },
    { id: 6, image: "/gallary/imag6.jpeg", label: "Analysis_06" },
];

export default function ArchiveCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(3);

    // Responsive visible items
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleItems(1);
            } else {
                setVisibleItems(3);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % DATA_ITEMS.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + DATA_ITEMS.length) % DATA_ITEMS.length);
    };

    // Auto-play
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // 3 seconds
        return () => clearInterval(interval);
    }, [currentIndex]);

    // Calculate visible range
    const getVisibleIndices = () => {
        const indices = [];
        for (let i = 0; i < visibleItems; i++) {
            indices.push((currentIndex + i) % DATA_ITEMS.length);
        }
        return indices;
    };

    return (
        <div className="relative w-full max-w-7xl mx-auto px-12">
            {/* Arrows */}
            <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center border border-white/20 bg-black/50 hover:bg-primary-purple hover:border-primary-purple transition-all group rounded-sm"
            >
                <span className="text-white group-hover:scale-125 transition-transform">&lt;</span>
            </button>
            <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center border border-white/20 bg-black/50 hover:bg-primary-purple hover:border-primary-purple transition-all group rounded-sm"
            >
                 <span className="text-white group-hover:scale-125 transition-transform">&gt;</span>
            </button>

            {/* Slides Container */}
            <div className="overflow-hidden">
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={false}
                >
                    <AnimatePresence mode='popLayout'>
                        {getVisibleIndices().map((itemIndex) => {
                             const item = DATA_ITEMS[itemIndex];
                             return (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5 }}
                                    className="group relative"
                                >
                                    {/* Card Container (Same Design as before) */}
                                    <div className="relative aspect-[4/5] bg-black/80 border border-white/10 overflow-hidden transition-all duration-300 group-hover:border-primary-purple/50 group-hover:shadow-[0_0_30px_rgba(255,46,46,0.2)]">
                                         {/* Corner Accents */}
                                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary-purple to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/30 group-hover:border-primary-purple transition-colors" />

                                        <div className="absolute top-4 left-4 z-20 flex flex-col items-start">
                                            <span className="px-2 py-1 bg-white/10 text-[10px] font-mono text-white backdrop-blur-md rounded-sm border border-white/10">
                                                REC_00{item.id}
                                            </span>
                                        </div>

                                         {/* Image Area */}
                                        <div className="absolute inset-0 m-1 bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
                                             <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 z-10" />
                                             <Image 
                                                src={item.image} 
                                                alt={`Gallery Image ${item.id}`} 
                                                fill 
                                                className="object-cover group-hover:scale-110 transition-transform duration-700" 
                                             />
                                             
                                             {/* Hover Distortion/Scan Effect */}
                                             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-purple/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out z-20" />
                                        </div>

                                        {/* Info Overlay (Slide Up) */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-white/10 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-30">
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <div className="text-xs text-gray-500 font-mono mb-1">SUBJECT_ID: 8X{item.id}2</div>
                                                    <div className="text-lg font-bold text-white leading-none">{item.label}</div>
                                                </div>
                                                <div className="text-primary-purple text-xl">↗</div>
                                            </div>
                                            <div className="mt-3 flex gap-2">
                                                <span className="text-[10px] uppercase bg-green-500/20 text-green-500 px-2 py-1 rounded">Confident</span>
                                                <span className="text-[10px] uppercase bg-blue-500/20 text-blue-500 px-2 py-1 rounded">99.9%</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                             );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>
            
             {/* Progress/Indicators */}
             <div className="flex justify-center gap-2 mt-8">
                {DATA_ITEMS.map((_, idx) => (
                    <div 
                        key={idx}
                        className={`h-1 transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-primary-purple' : 'w-2 bg-gray-700'}`}
                    />
                ))}
            </div>
        </div>
    );
}

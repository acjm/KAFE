"use client";

import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = 1 - Math.min(1, scrollY / 700);
      const translateY = scrollY * 0.4;
      
      heroRef.current.style.opacity = opacity.toString();
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#e3e1dd]">
      <div 
        ref={heroRef}
        className="container mx-auto px-6 text-center z-10 transition-all duration-300"
        suppressHydrationWarning
      >
        <h1 className="text-8xl md:text-9xl font-medium tracking-tighter mb-8 text-[#1b1b1b]">
          kafe.
        </h1>
        
        <p className="text-lg md:text-xl max-w-lg mx-auto opacity-80 font-light tracking-wide text-[#1b1b1b]">
          A sanctuary where coffee becomes ritual
        </p>
        
        <div className="mt-10 md:mt-16" suppressHydrationWarning>
          <a 
            href="#intent"
            className="inline-flex items-center opacity-60 hover:opacity-100 transition-opacity text-[#1b1b1b]"
          >
            <span className="mr-2 text-sm tracking-widest uppercase">Discover</span>
            <span className="animate-bounce">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
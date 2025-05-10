"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    setIsOpen(false);
  };
  
  const navLinks = [
    { name: 'Intent', href: '#intent' },
    { name: 'Scenes', href: '#scenes' },
    { name: 'Origins', href: '#origins' },
    { name: 'Offerings', href: '#offerings' },
    { name: 'Soundtrack', href: '#soundtrack' },
    { name: 'Contact', href: '#stay-close' },
  ];
  
  if (!isMounted) {
    return null;
  }
  
  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-700",
      isScrolled ? "bg-[#e3e1dd]/80 backdrop-blur-md py-3" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-2xl font-medium transition-transform duration-500 hover:scale-105"
        >
          kafe.
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm uppercase tracking-wider transition-all duration-500 hover:opacity-70 hover:scale-105 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden transition-transform duration-300 hover:scale-110"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-[#e3e1dd] flex flex-col justify-center items-center md:hidden transition-all duration-500",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xl uppercase tracking-wider transition-all duration-500 hover:opacity-70 hover:scale-105 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
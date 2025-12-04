import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  //{ name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'Process', href: '/process' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Insights', href: '/blog' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize state based on URL
  const [scrolled, setScrolled] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname !== '/';
    }
    return false;
  });

  useEffect(() => {
    const isHome = window.location.pathname === '/';

    if (isHome) {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20);
      };
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setScrolled(true);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <header 
        id="react-navbar"
        // FIX: Consistent positioning (left-1/2) + Custom cubic-bezier transition for smoothness
        className={`fixed z-[150] left-1/2 -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${
          scrolled 
            ? 'top-3 w-[90%] md:w-full md:max-w-5xl bg-arkeon-charcoal/40 backdrop-blur-xl border border-white/10 rounded-full py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)]' 
            : 'top-0 w-full bg-transparent py-3 border-b border-transparent'
        }`}
      >
        <div className={`flex items-center justify-between w-full ${scrolled ? 'px-8' : 'px-6 md:px-12'}`}>
          
          {/* Logo */}
          <a href="/" className="text-2xl font-serif font-bold text-arkeon-white tracking-wide relative z-[152] flex-shrink-0 hover:text-arkeon-gold transition-colors duration-300 group">
            ARKEON<span className="text-arkeon-gold">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-300 hover:text-white hover:shadow-[0_0_20px_rgba(230,197,91,0.4)] transition-all whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="/contact" 
              className={`ml-4 px-6 py-2.5 text-sm font-semibold rounded-full transition-all whitespace-nowrap shadow-lg ${
                scrolled 
                  ? 'bg-arkeon-gold text-arkeon-charcoal hover:bg-white hover:scale-105'
                  : 'bg-white text-arkeon-charcoal hover:bg-arkeon-gold hover:scale-105'
              }`}
            >
              Start Project
            </a>
          </nav>

          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden text-white relative z-[152] p-2 focus:outline-none bg-white/5 rounded-full hover:bg-white/10 transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-arkeon-charcoal z-[120] flex flex-col justify-center items-start pl-10 md:hidden"
          >
             <div className="absolute top-0 right-0 p-[20%] w-[300px] h-[300px] bg-arkeon-gold/20 blur-[100px] rounded-full pointer-events-none" />
             <div className="absolute bottom-0 left-0 p-[20%] w-[300px] h-[300px] bg-arkeon-blue/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="flex flex-col gap-3 relative z-10">
                {navLinks.map((link) => (
                <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-serif text-white hover:text-arkeon-gold transition-colors"
                >
                    {link.name}
                </a>
                ))}
                <a 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="mt-6 px-8 py-3 bg-arkeon-white text-arkeon-charcoal font-bold rounded-full text-base w-fit shadow-[0_0_20px_rgba(230,197,91,0.4)] hover:bg-arkeon-gold transition-colors"
                >
                Start Project
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
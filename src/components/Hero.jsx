import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements - Dynamic Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-arkeon-blue/30 rounded-full blur-[120px] opacity-60 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-arkeon-gold/20 rounded-full blur-[100px] opacity-50" />
        {/* Abstract Noise Texture */}
        <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full border border-arkeon-gold/30 bg-arkeon-gold/10 text-arkeon-gold text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(230,197,91,0.2)]">
            Where Brands Begin
          </span>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Design at the <br className="hidden md:block" />
            {/* NEW: Gold Gradient Text */}
            <span className="text-gradient-gold">
              Origin of Greatness
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            We craft premium, story-driven websites and brand identities that elevate brands and convert customers.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/contact" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-arkeon-gold to-[#F0D682] text-arkeon-charcoal font-bold rounded shadow-[0_0_20px_rgba(230,197,91,0.3)] hover:shadow-[0_0_30px_rgba(230,197,91,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Book Strategy Call
            </a>
            <a 
              href="/work" 
              className="w-full sm:w-auto px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium rounded hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center gap-2 group"
            >
              View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
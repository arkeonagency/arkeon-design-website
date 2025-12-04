import React from 'react';
import { Instagram, Linkedin, ArrowRight, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-arkeon-charcoal border-t border-white/10 pt-20 pb-10 relative z-10 overflow-hidden">
      {/* Footer Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-arkeon-gold/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-white">
              ARKEON<span className="text-arkeon-gold">.</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting premium, story-driven websites and brand identities that elevate businesses.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="/work" className="hover:text-arkeon-gold transition-colors">Work</a></li>
              <li><a href="/services" className="hover:text-arkeon-gold transition-colors">Services</a></li>
              <li><a href="/pricing" className="hover:text-arkeon-gold transition-colors">Pricing</a></li>
              <li><a href="/about" className="hover:text-arkeon-gold transition-colors">About</a></li>
              <li><a href="/process" className="hover:text-arkeon-gold transition-colors">Process</a></li>
              <li><a href="/blog" className="hover:text-arkeon-gold transition-colors">Insights</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="/contact" className="hover:text-arkeon-gold transition-colors">Book a Call</a></li>
              <li>hello@arkeon.example</li>
              <li>Addis Ababa, Ethiopia</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 p-3 rounded text-sm text-white focus:outline-none focus:border-arkeon-gold transition-colors"
              />
              <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-arkeon-gold hover:text-arkeon-charcoal text-white text-sm py-3 rounded transition-all">
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Arkeon Studio. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-400 items-center">
            <a href="/privacy" className="hover:text-arkeon-gold transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-arkeon-gold transition-colors">Terms</a>
            
            {/* Social Icons with Hover Effects */}
            <div className="flex gap-4 ml-4">
              <a href="https://t.me/bereket" target="_blank" rel="noreferrer" aria-label="Telegram" className="text-gray-400 hover:text-arkeon-gold hover:scale-110 transition-all">
                <Send size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-arkeon-gold hover:scale-110 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-arkeon-gold hover:scale-110 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted
    const consent = localStorage.getItem('arkeon_consent');
    if (!consent) {
      // Show after 2 seconds delay for smooth entrance
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('arkeon_consent', 'true');
    setIsVisible(false);
    // Here you would technically enable the tracking scripts
    // For now, we are just handling the UI
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="fixed bottom-6 left-6 z-[200] max-w-sm w-full"
        >
          <div className="bg-arkeon-charcoal/90 border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-xl relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-arkeon-gold/10 blur-[50px] rounded-full pointer-events-none"></div>

            <div className="flex items-start gap-4 relative z-10">
              <div className="bg-white/5 p-3 rounded-full text-arkeon-gold shrink-0">
                <Cookie size={24} />
              </div>
              <div>
                <h4 className="text-white font-serif font-bold text-lg mb-2">Cookies & Privacy</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  We use cookies to ensure you get the best experience on our website. 
                </p>
                <div className="flex gap-4">
                  <button 
                    onClick={handleAccept}
                    className="px-6 py-2 bg-arkeon-gold text-arkeon-charcoal font-bold rounded-full text-sm hover:bg-white transition-colors"
                  >
                    Accept
                  </button>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="px-4 py-2 text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
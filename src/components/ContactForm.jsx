import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // 1. Convert Form Data to JSON object (More reliable for API)
    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    
    // REPLACE 'your-email@gmail.com' WITH YOUR REAL EMAIL BELOW
    const formEndpoint = 'https://formsubmit.co/ajax/your-email@gmail.com';

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });

      const result = await response.json();

      if (response.ok || result.success === "true") {
        setStatus('success');
        e.target.reset();
      } else {
        console.error("Form Error:", result);
        setStatus('error');
      }
    } catch (err) {
      console.error("Network Error:", err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-900/20 border border-green-500/50 p-8 rounded-lg text-center backdrop-blur-sm">
        <div className="flex justify-center mb-4 text-green-500">
          <CheckCircle size={48} />
        </div>
        <h3 className="text-2xl font-serif text-white mb-2">Message Received</h3>
        <p className="text-gray-300">Thanks — we’ve received your request. Expect a reply within 48 hours.</p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-sm underline text-arkeon-gold hover:text-white">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Hidden Settings for FormSubmit */}
      <input type="hidden" name="_subject" value="New Project Inquiry - Arkeon Site" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
          <input 
            required 
            type="text" 
            name="name" 
            id="name"
            placeholder="Jane Doe"
            className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-arkeon-gold focus:outline-none focus:ring-1 focus:ring-arkeon-gold transition-all"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
          <input 
            required 
            type="email" 
            name="email" 
            id="email"
            placeholder="jane@company.com"
            className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-arkeon-gold focus:outline-none focus:ring-1 focus:ring-arkeon-gold transition-all"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-gray-400">Company (Optional)</label>
          <input 
            type="text" 
            name="company" 
            id="company"
            placeholder="Acme Inc."
            className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-arkeon-gold focus:outline-none focus:ring-1 focus:ring-arkeon-gold transition-all"
          />
        </div>
        
        {/* BUDGET SELECTOR */}
        <div className="space-y-2 relative">
          <label htmlFor="budget" className="text-sm font-medium text-gray-400">Estimated Budget</label>
          <div className="relative">
            <select 
              name="budget" 
              id="budget"
              className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-arkeon-gold focus:outline-none focus:ring-1 focus:ring-arkeon-gold transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled selected className="bg-arkeon-charcoal text-gray-500">Select a range</option>
              <option value="Origin ($1.5k - $3k)" className="bg-arkeon-charcoal text-white">Origin ($1.5k - $3k)</option>
              <option value="Evolution ($3.5k - $6k)" className="bg-arkeon-charcoal text-white">Evolution ($3.5k - $6k)</option>
              <option value="Pinnacle ($6k - $12k+)" className="bg-arkeon-charcoal text-white">Pinnacle ($6k - $12k+)</option>
              <option value="Custom / Not Sure" className="bg-arkeon-charcoal text-white">Custom / Not Sure</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-arkeon-gold">
                <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
        <textarea 
          required
          name="message" 
          id="message" 
          rows="4" 
          placeholder="Tell us about your project goals..."
          className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-arkeon-gold focus:outline-none focus:ring-1 focus:ring-arkeon-gold transition-all"
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full py-4 bg-arkeon-gold text-arkeon-charcoal font-bold rounded hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(230,197,91,0.2)]"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={18} />
      </button>

      {status === 'error' && (
        <div className="text-red-400 text-sm flex items-center gap-2 mt-4">
          <AlertCircle size={16} /> Something went wrong. Check the console or try again.
        </div>
      )}
    </form>
  );
}
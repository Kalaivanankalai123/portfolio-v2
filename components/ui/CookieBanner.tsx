'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted or declined
    const consent = localStorage.getItem('kk-cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('kk-cookie-consent', 'accepted');
    setIsVisible(false);
    // In a strict GDPR setup, you would trigger the GA script to load here
  };

  const handleDecline = () => {
    localStorage.setItem('kk-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-900 p-4 md:p-6 z-[100] flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl">
      <div className="text-zinc-400 text-xs font-mono max-w-3xl leading-relaxed">
        <span className="text-cyan-400 font-semibold mr-2">SYSTEM NOTICE:</span>
        This portfolio uses standard analytics cookies to track viewer history, page interactions, and site traffic. This helps me understand which projects engineers and recruiters are viewing most.
      </div>
      <div className="flex gap-3 shrink-0 w-full md:w-auto">
        <button 
          onClick={handleDecline}
          className="flex-1 md:flex-none bg-transparent border border-zinc-800 text-zinc-400 hover:text-zinc-200 px-4 py-2.5 rounded text-xs font-mono transition-colors"
        >
          Decline
        </button>
        <button 
          onClick={handleAccept}
          className="flex-1 md:flex-none bg-zinc-100 text-zinc-950 hover:bg-cyan-400 hover:text-zinc-950 px-6 py-2.5 rounded text-xs font-semibold font-mono transition-colors shadow-sm"
        >
          Accept Analytics
        </button>
      </div>
    </div>
  );
}
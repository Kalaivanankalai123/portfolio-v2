'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-zinc-50/90 dark:bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-900 z-40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link href="/" className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-mono">
          KALAIVANAN K.
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-mono text-[11px] tracking-wider uppercase text-zinc-600 dark:text-zinc-400">
          <Link href="/#about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">About</Link>
          <Link href="/#projects" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Projects</Link>
          <Link href="/#tech-stack" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Skills</Link>
          <Link href="/#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Contact</Link>
          <Link href="/resume/Kalaivanan_K_Resume.pdf" target="_blank" className="hover:text-cyan-600 dark:hover:text-cyan-500 transition-colors">Resume</Link>
          
          {/* Desktop Theme Switcher */}
          <ThemeToggle />
        </div>

        {/* Mobile Controls (Toggle + Menu Button) */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="text-zinc-600 dark:text-zinc-400 text-lg p-2 -mr-2 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 px-6 py-6 flex flex-col gap-6 font-mono text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400 shadow-2xl transition-colors duration-300">
          <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors block">About</Link>
          <Link href="/#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors block">Projects</Link>
          <Link href="/#tech-stack" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors block">Skills</Link>
          <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors block">Contact</Link>
          <Link href="/resume/Kalaivanan_K_Resume.pdf" target="_blank" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-600 dark:hover:text-cyan-500 transition-colors block">Resume</Link>
        </div>
      )}
    </nav>
  );
}
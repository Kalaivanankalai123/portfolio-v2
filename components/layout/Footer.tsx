import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950 py-8 pb-28 md:pb-8 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-mono font-bold text-sm cursor-default transition-colors">
            K
          </div>
          <p className="text-zinc-500 dark:text-zinc-500 text-xs font-mono text-center md:text-left transition-colors">
            © {new Date().getFullYear()} Kalaivanan K. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-6 text-xs font-mono text-zinc-600 dark:text-zinc-400 md:pr-24 transition-colors">
          <Link href="https://github.com/Kalaivanankalai123" target="_blank" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/kalaivanan-k-4a6914282/" target="_blank" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200">
            LinkedIn
          </Link>
          <Link href="mailto:kalaivanankk2005@gmail.com" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200">
            Email
          </Link>
        </div>
        
      </div>
    </footer>
  );
}
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a blank placeholder of the exact same size to prevent layout shift during SSR
  if (!mounted) {
    return (
      <button
        className="w-8 h-8 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-900/50 flex items-center justify-center"
        aria-label="Loading Theme Toggle"
        disabled
      ></button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-8 h-8 rounded border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-cyan-500 dark:hover:border-cyan-400 text-zinc-600 dark:text-zinc-400 flex items-center justify-center transition-colors duration-200 shadow-sm dark:shadow-none"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? '🌞' : '🌚'}
    </button>
  );
}
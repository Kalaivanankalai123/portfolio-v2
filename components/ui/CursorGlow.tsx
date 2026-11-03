'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      glow.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(240, 143, 7, 0.12), transparent 20%)`;
      glow.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      glow.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-1000 opacity-0"
    />
  );
}
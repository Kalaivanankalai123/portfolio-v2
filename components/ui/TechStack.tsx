'use client';

import React, { useEffect, useRef } from 'react';

const skillCategories = [
  {
    title: "Robotics & Autonomy",
    skills: ["ROS 2 (Humble/Jazzy)", "Nav2", "SLAM Toolbox", "micro-ROS"],
    specs: "Autonomy Modules"
  },
  {
    title: "Hardware & Sensors",
    skills: ["Raspberry Pi 5", "Arduino Mega 2560", "LiDAR", "Novelda X7 UWB Radar"],
    specs: "Interfaces"
  },
  {
    title: "AI & Computer Vision",
    skills: ["YOLOv11", "CNNs", "Swin Transformers", "Pydantic AI", "LlamaIndex"],
    specs: "Intelligence"
  },
  {
    title: "Software & Backend",
    skills: ["C/C++", "Python", "FastAPI", "Flask", "WebRTC"],
    specs: "Development"
  }
];

export default function TechStack() {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tech-stack" className="w-full max-w-5xl mx-auto px-6 py-24 relative z-10 border-t border-zinc-200 dark:border-zinc-900/50 transition-colors duration-300">
      
      <div className="flex flex-col items-center text-center mb-16 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-cyan-600 dark:bg-cyan-400 rounded-full"></span>
          <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs tracking-widest uppercase">Capabilities</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
          Technical Arsenal
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={category.title}
            ref={(el) => { revealRefs.current[index] = el; }}
            // Softened edges (rounded-2xl) and added organic glass blur (backdrop-blur-md)
            className="group flex flex-col bg-white/60 dark:bg-zinc-900/20 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800/50 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 p-6 md:p-8 rounded-2xl opacity-0 translate-y-12 transition-all duration-[800ms] ease-out shadow-sm hover:shadow-md dark:shadow-none dark:hover:bg-zinc-900/40"
          >
            <div className="mb-6 pb-6 border-b border-zinc-200/60 dark:border-zinc-800/60 transition-colors duration-300">
              <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
                {category.specs}
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-50 transition-colors duration-200">
                {category.title}
              </h3>
            </div>
            
            <ul className="flex flex-col space-y-3">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors font-mono text-sm">
                  <span className="text-cyan-500 mt-0.5">▹</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
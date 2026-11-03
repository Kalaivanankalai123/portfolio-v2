'use client';

import Link from "next/link";
import { useEffect, useRef } from "react";

interface Project {
  slug: string;
  title: string;
  category: "Autonomy" | "AI Workspace" | "Computer Vision";
  description: string;
  tags: string[];
  specs?: string;
  status?: string;
}

const projects: Project[] = [
  {
    slug: "amr-evaluation",
    title: "Enterprise AMR Platform Evaluation",
    category: "Autonomy",
    description: "Evaluated commercial Autonomous Mobile Robot platforms (Husarion ROSbot XL) for enterprise deployment, sensor payloads, and Nav2 hospital navigation stacks.",
    tags: ["ROS 2", "Husarion ROSbot XL", "Nav2", "LiDAR"],
    specs: "01 / FIELD STUDY",
    status: "Completed"
  },
  {
    slug: "my-model",
    title: "Personal AI Assistant Studio",
    category: "AI Workspace",
    description: "A FastAPI-powered technical workspace utilizing open-weight models via Groq to debug ROS 2 sensor pipelines, design custom launch files, and accelerate autonomous hardware development.",
    tags: ["FastAPI", "Groq", "Python", "ROS 2"],
    specs: "02 / FRAMEWORK",
    status: "Active"
  },
  {
    slug: "chest-xray-detection",
    title: "Chest X-Ray Disease Detection",
    category: "Computer Vision",
    description: "A full-stack medical imaging web application developed for my final year project. It uses Flask, MySQL, and a fine-tuned YOLOv11 deep learning model to automatically detect 14 types of chest diseases.",
    tags: ["YOLOv11", "Flask", "MySQL", "Python"],
    specs: "03 / COMPUTER VISION",
    status: "v1.2-Stable"
  },
];

export default function ProjectShowcase() {
  const revealRefs = useRef<(HTMLAnchorElement | null)[]>([]);

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
    <section id="projects" className="w-full max-w-5xl mx-auto px-6 py-24 relative z-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-cyan-600 dark:bg-cyan-400 rounded-full"></span>
            <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs tracking-widest uppercase">Select Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
            Featured Systems
          </h2>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-sm md:text-right leading-relaxed transition-colors duration-300">
          Software and embedded systems bridging real-time physical telemetry with autonomous AI navigation.
        </p>
      </div>

      <div className="flex flex-col space-y-8">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            ref={(el) => { revealRefs.current[index] = el; }}
            // Softened edges (rounded-2xl) and added organic glass blur (backdrop-blur-md)
            className="group flex flex-col justify-between bg-white/60 dark:bg-zinc-900/20 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800/50 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 p-6 md:p-8 rounded-2xl opacity-0 translate-y-12 transition-all duration-[800ms] ease-out shadow-sm hover:shadow-md dark:shadow-none dark:hover:bg-zinc-900/40"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono tracking-wider text-cyan-600 dark:text-cyan-400 uppercase">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  {project.specs}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200 flex items-center justify-between">
                  {project.title}
                  <span className="text-zinc-400 dark:text-zinc-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                    ↗
                  </span>
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors duration-300">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono bg-white/80 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-300 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {project.status && (
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 group-hover:bg-cyan-500 dark:group-hover:bg-cyan-400 transition-colors duration-200"></span>
                  {project.status}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
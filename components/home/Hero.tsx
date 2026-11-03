import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden border-b border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      
      {/* Full-Page Background Image (Gradient shade removed, opacity increased) */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-zinc-100 dark:bg-black transition-colors duration-300">
        <Image 
          src="/images/hero-avatar.jpg"
          alt="Kalaivanan K Background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.35] dark:opacity-[0.55] transition-opacity duration-300"
          priority
        />
        {/* The adaptive gradient overlay has been completely removed to reveal the full photo */}
      </div>
      
      {/* Centered Foreground Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto mt-12">
        
        {/* Enhanced blur on the badge so it stands out against the brighter background */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white/60 dark:bg-zinc-900/60 border border-zinc-300 dark:border-zinc-700 text-cyan-700 dark:text-cyan-400 text-xs font-mono tracking-wide backdrop-blur-md transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400 transition-colors"></span>
          Available for Engineering Roles
        </div>

        {/* Added drop-shadow-xl so the text pops over the brightened image */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-5xl md:text-7xl font-bold tracking-tighter mb-8 drop-shadow-xl">
          <span className="text-zinc-900 dark:text-zinc-100 font-sans transition-colors">Hardware &</span>
          <span className="text-cyan-600 dark:text-cyan-400 font-mono font-normal tracking-tight transition-colors">&lt;Software&gt;</span>
        </div>
        
        {/* Made paragraph text slightly bolder with a drop-shadow for readability */}
        <p className="text-zinc-900 dark:text-zinc-200 text-sm md:text-base font-semibold max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md transition-colors">
          I build intelligent systems at the intersection of physical hardware and digital algorithms. Specialized in ROS 2 navigation, computer vision, and embedded AI solutions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link 
            href="#projects"
            className="bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-zinc-950 font-semibold px-8 py-3 rounded text-sm transition-colors duration-200 shadow-lg dark:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
          >
            View Featured Systems
          </Link>
          <Link 
            href="#contact"
            className="bg-white/80 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-700 hover:border-cyan-600 dark:hover:border-cyan-400 text-zinc-900 dark:text-zinc-100 hover:text-cyan-600 dark:hover:text-cyan-400 px-8 py-3 rounded text-sm font-medium transition-colors duration-200 backdrop-blur-md shadow-lg"
          >
            Contact Me
          </Link>
        </div>
        
      </div>
    </section>
  );
}
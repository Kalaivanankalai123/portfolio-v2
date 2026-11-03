export default function AboutMe() {
  return (
    <section id="about" className="w-full max-w-5xl mx-auto px-6 py-24 relative z-10">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        
        <div className="md:w-1/3 shrink-0">
          <div className="sticky top-24 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-600 dark:bg-cyan-400 rounded-full"></span>
              <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs tracking-widest uppercase">Background</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 transition-colors">
              About Me
            </h2>
          </div>
        </div>

        <div className="md:w-2/3 space-y-8 text-zinc-700 dark:text-zinc-400 text-sm md:text-base leading-relaxed transition-colors">
          <p>
            I am Kalaivanan K., an AI and Data Science graduate driven by the challenge of making physical machines intelligent. My focus is on <strong className="text-zinc-900 dark:text-zinc-200 font-medium">artificial intelligence, machine learning, embedded systems, and autonomous mobile robots (AMRs)</strong>.
          </p>
          <p>
            Currently, I work as a Robotics Software Engineer, where I design and deploy real-world systems. I specialize in bridging the gap between high-level AI algorithms and low-level hardware control using <strong className="text-zinc-900 dark:text-zinc-200 font-medium">ROS 2, Python, C/C++, and various microcontrollers and sensors</strong>.
          </p>
          <p>
            My goal is to continuously build, troubleshoot, and scale robust autonomous architectures that can perceive and navigate their environments with precision.
          </p>
        </div>

      </div>
    </section>
  );
}
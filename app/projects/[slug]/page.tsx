import Link from "next/link";
import { notFound } from "next/navigation";

const projectsDb: Record<string, any> = {
  "amr-evaluation": {
    title: "Enterprise AMR Platform Evaluation",
    role: "Robotics Software Engineer",
    date: "July 2026",
    tech: ["Husarion ROSbot XL", "ROS 2", "LiDAR", "Nav2"],
    overview: "Evaluated commercial Autonomous Mobile Robot platforms, including the Husarion ROSbot XL, for research and development in an enterprise hospital deployment context. Analyzed payload options and sensor integrations.",
    metrics: ["Payload Optimization", "Sensor Integration", "Hospital Deployment Strategy"],
    githubUrl: "https://github.com/Kalaivanankalai123"
  },
  "my-model": {
    title: "Personal AI Assistant Studio",
    role: "AI Developer",
    date: "August 2026",
    tech: ["FastAPI", "Groq", "Python", "ROS 2"],
    overview: "Built a FastAPI-powered technical workspace utilizing open-weight models via Groq. The system is designed to debug ROS 2 sensor pipelines, design custom launch files, and accelerate autonomous hardware development directly from a streamlined interface.",
    metrics: ["FastAPI Backend Deployment", "Groq LLM Integration", "ROS 2 Workflow Acceleration"],
    githubUrl: "https://github.com/Kalaivanankalai123/my_model"
  },
  "chest-xray-detection": {
    title: "Chest X-Ray Disease Detection",
    role: "Computer Vision Engineer",
    date: "August 2026",
    tech: ["YOLOv11", "Flask", "MySQL", "Python"],
    overview: "Developed a full-stack medical imaging web application capable of identifying 14 distinct chest diseases. The architecture utilizes a fine-tuned YOLOv11 deep learning model connected to a Flask and MySQL backend for persistent anomaly tracking.",
    metrics: ["14-Class Anomaly Detection", "YOLOv11 Fine-tuning", "Flask/MySQL Integration"],
    githubUrl: "https://github.com/Kalaivanankalai123/chest-xray-detection"
  }
};

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsDb[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto flex flex-col relative z-10 bg-zinc-950/20">
      <Link 
        href="/#projects" 
        className="text-zinc-400 hover:text-cyan-400 flex items-center gap-2 mb-12 transition-all w-fit font-mono text-sm"
      >
        ← cd .. /projects
      </Link>

      <header className="space-y-6 mb-16 border-b border-zinc-800 pb-12">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-500">
          <span>{project.role}</span>
          <span>•</span>
          <span>{project.date}</span>
        </div>
        
        <div className="flex flex-wrap gap-1.5 pt-4">
          {project.tech.map((t: string) => (
            <span key={t} className="bg-zinc-950 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded text-xs font-mono">
              {t}
            </span>
          ))}
        </div>
      </header>

      <article className="prose prose-invert max-w-none space-y-12">
        <div>
          <h3 className="text-cyan-400 font-mono text-sm uppercase tracking-widest mb-4">&lt;overview&gt;</h3>
          <p className="text-zinc-300 leading-relaxed font-sans text-base">
            {project.overview}
          </p>
        </div>

        <div>
          <h3 className="text-cyan-400 font-mono text-sm uppercase tracking-widest mb-4">&lt;key_deliverables&gt;</h3>
          <ul className="list-none space-y-3 font-mono text-sm text-zinc-450">
            {project.metrics.map((m: string) => (
              <li key={m} className="flex items-start gap-2">
                <span className="text-cyan-500">▹</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-zinc-950/40 border border-zinc-900 p-8 rounded-lg mt-12 flex flex-col items-center justify-center text-center">
          <p className="text-zinc-500 text-xs font-mono mb-6 max-w-md leading-relaxed">
            Review the architecture, setup instructions, and complete source code for this project on GitHub.
          </p>
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-100 text-zinc-950 hover:bg-cyan-400 hover:text-zinc-950 transition-all px-6 py-2.5 rounded text-sm font-semibold flex items-center gap-2 group shadow-sm"
          >
            <span>View Repository</span>
            <span className="text-sm group-hover:translate-x-0.5 transition-transform">↗</span>
          </a>
        </div>
      </article>
    </main>
  );
}
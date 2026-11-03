import Hero from "@/components/home/Hero";
import AboutMe from "@/components/ui/AboutMe";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import TechStack from "@/components/ui/TechStack";
import Contact from "@/components/ui/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full overflow-x-hidden">
      <Hero />
      <AboutMe />
      <ProjectShowcase />
      <TechStack />
      <Contact />
    </main>
  );
}
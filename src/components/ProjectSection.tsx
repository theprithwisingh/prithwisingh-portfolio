import PillBadge from "./PillBadge";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolio";

export default function ProjectSection() {
  return (
    <section id="projects" className="pb-28 sm:pb-36">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12">
        <PillBadge className="mb-4">My Projects</PillBadge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--c-foreground)] mb-3">
          Check out my latest work
        </h2>
        <p className="text-sm sm:text-base text-[var(--c-muted)] max-w-lg mx-auto leading-relaxed">
          I build AI-powered products, developer tools, and scalable full-stack
          systems. Here are some projects I&apos;ve worked on.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

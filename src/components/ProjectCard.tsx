import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import type { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] p-5 sm:p-6 transition-all duration-200 hover:shadow-sm" style={{ ['--tw-shadow-color' as string]: 'rgba(0,0,0,0.05)' }}>
      {/* Name */}
      <h3 className="text-base sm:text-lg font-semibold text-[var(--c-foreground)] mb-2">
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-[var(--c-muted)] leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block px-2 py-0.5 text-[11px] rounded-full bg-[var(--c-tag-bg)] text-[var(--c-muted)] border border-[var(--c-tag-border)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--c-muted)] hover:text-[var(--c-foreground)] transition-colors"
            aria-label={`${project.name} GitHub repository`}
          >
            <GithubIcon size={13} />
            <span>GitHub</span>
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--c-muted)] hover:text-[var(--c-foreground)] transition-colors"
            aria-label={`${project.name} live demo`}
          >
            <ExternalLink size={13} strokeWidth={1.5} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
}

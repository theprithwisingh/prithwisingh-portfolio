import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./BrandIcons";
import { personalInfo } from "@/data/portfolio";

const iconMap: Record<string, (props: { size: number }) => React.ReactNode> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: XIcon,
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--c-border)] py-10 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-[var(--c-foreground)]">
            {personalInfo.name}
          </p>
          <p className="text-xs text-[var(--c-muted)] mt-0.5">
            Built with curiosity and too much coffee.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-[var(--c-muted)] hover:text-[var(--c-foreground)] transition-colors"
            aria-label="Email"
          >
            <Mail size={15} strokeWidth={1.5} />
          </a>
          {personalInfo.socialLinks.map((link) => {
            const IconComponent = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--c-muted)] hover:text-[var(--c-foreground)] transition-colors"
                aria-label={link.label}
              >
                {IconComponent ? <IconComponent size={15} /> : null}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

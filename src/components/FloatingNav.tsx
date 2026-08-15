"use client";

import { House, Calendar } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./BrandIcons";
import ThemeToggle from "./ThemeToggle";
import { personalInfo } from "@/data/portfolio";

const navItems = [
  {
    icon: <House size={20} strokeWidth={2} />,
    label: "Home",
    href: "#",
  },
  {
    icon: <GithubIcon size={20} />,
    label: "GitHub",
    href: personalInfo.socialLinks.find((l) => l.icon === "github")?.href || "#",
    external: true,
  },
  {
    icon: <LinkedinIcon size={20} />,
    label: "LinkedIn",
    href: personalInfo.socialLinks.find((l) => l.icon === "linkedin")?.href || "#",
    external: true,
  },
  {
    icon: <XIcon size={18} />,
    label: "X",
    href: personalInfo.socialLinks.find((l) => l.icon === "twitter")?.href || "#",
    external: true,
  },
  {
    icon: <Calendar size={20} strokeWidth={2} />,
    label: "Calendar",
    href: personalInfo.socialLinks.find((l) => l.icon === "calendar")?.href || "#",
    external: true,
  },
];

export default function FloatingNav() {
  return (
    <nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      aria-label="Quick navigation"
    >
      <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--c-surface)] border border-[var(--c-border)] shadow-xl shadow-black/10 backdrop-blur-md">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            {...(item.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="p-2 rounded-full text-[var(--c-foreground)] hover:bg-[var(--c-tag-bg)] hover:scale-105 active:scale-95 transition-all duration-150 flex items-center justify-center"
            aria-label={item.label}
            title={item.label}
          >
            {item.icon}
          </a>
        ))}
        <div className="w-px h-5 bg-[var(--c-border)] mx-1" aria-hidden="true" />
        <ThemeToggle />
      </div>
    </nav>
  );
}

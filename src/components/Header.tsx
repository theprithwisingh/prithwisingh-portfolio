import Image from "next/image";
import { Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Header() {
  return (
    <header className="pt-16 sm:pt-24 pb-16 sm:pb-20">
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
        {/* Text */}
        <div className="flex-1 min-w-0">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[var(--c-foreground)] leading-[1.1]">
            Hi, I&apos;m {personalInfo.name}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[var(--c-muted)] leading-relaxed max-w-md">
            {personalInfo.tagline}
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 mt-4 text-sm text-[var(--c-muted)] hover:text-[var(--c-foreground)] transition-colors"
            aria-label={`Email ${personalInfo.email}`}
          >
            <Mail size={14} strokeWidth={1.5} />
            <span>{personalInfo.email}</span>
          </a>
        </div>

        {/* Profile Photo */}
        <div className="shrink-0">
          <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden bg-[var(--c-border)]">
            <Image
              src={personalInfo.profileImage}
              alt={`${personalInfo.name} profile photo`}
              width={144}
              height={144}
              className="w-full h-full object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}

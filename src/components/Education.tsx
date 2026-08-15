import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="pb-20 sm:pb-24">
      <SectionHeading>Education</SectionHeading>
      <div className="space-y-5">
        {education.map((edu) => (
          <div
            key={`${edu.institution}-${edu.degree}`}
            className="flex items-start sm:items-center gap-3 sm:gap-4"
          >
            {/* Logo */}
            {edu.logoUrl ? (
              <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden flex items-center justify-center bg-white border border-[var(--c-border)] p-1">
                <Image
                  src={edu.logoUrl}
                  alt={`${edu.institution} logo`}
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div
                className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-semibold"
                style={{ backgroundColor: edu.logoColor || "#111111" }}
                aria-hidden="true"
              >
                {edu.logoInitial}
              </div>
            )}

            {/* Info */}
            <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-4">
              <div className="min-w-0">
                <p className="text-sm sm:text-base font-semibold text-[var(--c-foreground)] truncate">
                  {edu.institution}
                </p>
                <p className="text-xs sm:text-sm text-[var(--c-muted)]">
                  {edu.degree}
                </p>
              </div>
              <p className="text-xs sm:text-sm text-[var(--c-muted)] shrink-0">
                {edu.startYear} – {edu.endYear}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="pb-12 sm:pb-14">
      <SectionHeading>Work Experience</SectionHeading>
      <div className="space-y-5">
        {experiences.map((exp) => (
          <div
            key={`${exp.company}-${exp.role}`}
            className="flex items-start sm:items-center gap-3 sm:gap-4"
          >
            {/* Logo */}
            {exp.logoUrl ? (
              <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden flex items-center justify-center bg-white border border-[var(--c-border)] p-1">
                <Image
                  src={exp.logoUrl}
                  alt={`${exp.company} logo`}
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div
                className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-semibold"
                style={{ backgroundColor: exp.logoColor || "#111111" }}
                aria-hidden="true"
              >
                {exp.logoInitial}
              </div>
            )}

            {/* Info */}
            <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-4">
              <div className="min-w-0">
                <p className="text-sm sm:text-base font-semibold text-[var(--c-foreground)] truncate">
                  {exp.company}
                </p>
                <p className="text-xs sm:text-sm text-[var(--c-muted)]">
                  {exp.role}
                </p>
              </div>
              <p className="text-xs sm:text-sm text-[var(--c-muted)] shrink-0">
                {exp.startDate} – {exp.endDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

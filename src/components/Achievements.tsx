import { Trophy } from "lucide-react";
import PillBadge from "./PillBadge";
import { achievements } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="pb-24 sm:pb-28">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12">
        <PillBadge className="mb-4">Building Things</PillBadge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--c-foreground)] mb-3">
          I like building things
        </h2>
        <p className="text-sm sm:text-base text-[var(--c-muted)] max-w-lg mx-auto leading-relaxed">
          Solving real-world problems through software, experimentation, and
          open source.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative ml-3 sm:ml-4">
        {/* Vertical line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-[var(--c-border)]" aria-hidden="true" />

        <div className="space-y-8">
          {achievements.map((item, index) => (
            <div key={index} className="relative pl-7 sm:pl-8">
              {/* Dot */}
              <div
                className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-[var(--c-foreground)] -translate-x-[3.5px]"
                aria-hidden="true"
              />

              {/* Content */}
              <p className="text-xs text-[var(--c-muted)] mb-1">{item.date}</p>
              <div className="flex items-start gap-2 mb-1">
                <h3 className="text-sm sm:text-base font-semibold text-[var(--c-foreground)]">
                  {item.title}
                </h3>
                {item.result && (
                  <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium rounded-full bg-[var(--c-tag-bg)] text-[var(--c-muted)] border border-[var(--c-tag-border)]">
                    <Trophy size={10} strokeWidth={1.5} />
                    {item.result}
                  </span>
                )}
              </div>
              <p className="text-xs text-[var(--c-muted)] mb-1.5">
                {item.organization} · {item.location}
              </p>
              <p className="text-xs sm:text-sm text-[var(--c-muted)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

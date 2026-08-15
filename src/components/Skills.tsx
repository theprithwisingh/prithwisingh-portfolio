import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="pb-24 sm:pb-28">
      <SectionHeading>Skills</SectionHeading>
      <div className="space-y-4">
        {skillCategories.map((cat) => (
          <div key={cat.category}>
            <p className="text-xs font-medium text-[var(--c-muted)] mb-2 uppercase tracking-wider">
              {cat.category}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block px-2.5 py-1 text-xs rounded-full bg-[var(--c-tag-bg)] text-[var(--c-muted)] border border-[var(--c-tag-border)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

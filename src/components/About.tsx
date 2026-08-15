import SectionHeading from "./SectionHeading";
import { personalInfo } from "@/data/portfolio";

function parseBio(bio: string): React.ReactNode[] {
  const parts = bio.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-[var(--c-foreground)] font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function About() {
  return (
    <section id="about" className="pb-14 sm:pb-16">
      <SectionHeading>About</SectionHeading>
      <p className="text-sm sm:text-base text-[var(--c-muted)] leading-relaxed max-w-2xl">
        {parseBio(personalInfo.bio)}
      </p>
    </section>
  );
}

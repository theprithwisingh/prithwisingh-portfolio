interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-2xl sm:text-3xl font-bold tracking-tight text-[var(--c-foreground)] mb-6 ${className}`}
    >
      {children}
    </h2>
  );
}

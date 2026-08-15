interface PillBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function PillBadge({
  children,
  className = "",
}: PillBadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--c-pill-bg)] text-[var(--c-pill-text)] ${className}`}
    >
      {children}
    </span>
  );
}

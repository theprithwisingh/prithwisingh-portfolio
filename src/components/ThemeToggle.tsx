"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-[var(--c-foreground)] hover:bg-[var(--c-tag-bg)] hover:scale-105 active:scale-95 transition-all duration-150 flex items-center justify-center cursor-pointer"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {mounted ? (
        theme === "light" ? (
          <Moon size={20} strokeWidth={2} />
        ) : (
          <Sun size={20} strokeWidth={2} />
        )
      ) : (
        <Moon size={20} strokeWidth={2} />
      )}
    </button>
  );
}

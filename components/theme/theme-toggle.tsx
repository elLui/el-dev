"use client";

import { useTheme } from "next-themes";
import { GiMoon, GiSundial } from "react-icons/gi";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <GiSundial className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <GiMoon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">toggle dark light theme</span>
    </Button>
  );
}

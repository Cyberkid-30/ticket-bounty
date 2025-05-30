"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { LucideMoon, LucideSun } from "lucide-react";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      size="icon"
      className="cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <LucideSun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <LucideMoon className="absolute size-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeSwitch;

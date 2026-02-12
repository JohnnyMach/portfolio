import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import {cn} from "@/lib/Utils"

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return true;
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") return true;
    if (storedTheme === "light") return false;
    localStorage.setItem("theme", "dark");
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleThemeSwitch = () => {
    setIsDarkMode((prev) => !prev);
  };
   
    return <button onClick={toggleThemeSwitch} className={cn(
        "fixed max-sm:hidden top-3.5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
        )}
    >
        {isDarkMode ? (
    <Sun className="h-6 w-6 text-yellow-300"/>
    ) :  (
    <Moon className="h-6 w-6 text-blue-900"/>)
    }</button>
}
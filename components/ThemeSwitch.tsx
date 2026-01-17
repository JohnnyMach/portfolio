import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/Utils";

export const ThemeSwitch = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        if (stored === "dark") {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);

        if (next) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={cn(
                "relative flex items-center w-20 h-10 p-3 rounded-full",
                "bg-primary/30 transition-colors duration-300"
            )}
        >
            {/* Slider */}
            <span
                className={cn(
                    "absolute left-1 top-1 h-8 w-8 rounded-full bg-background",
                    "flex items-center justify-center shadow-sm",
                    "transition-transform duration-300",
                    isDark && "translate-x-10"
                )}
            >
                {isDark ? (
                    <Moon className="h-4 w-4 text-blue-400" />
                ) : (
                    <Sun className="h-4 w-4 text-yellow-400" />
                )}
            </span>
        </button>
    );
};

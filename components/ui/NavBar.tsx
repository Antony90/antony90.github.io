"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

export default function NavBar() {
  const [hasShadow, setHasShadow] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  return (
    <nav
      className={`bg-section/50 inset-ring-accent/50 sticky top-6 z-10 mx-auto w-fit items-center justify-center gap-8 rounded-full px-8 py-3.5 inset-ring-1 backdrop-blur-sm backdrop-contrast-100 transition-shadow duration-500 sm:flex ${
        hasShadow ? "shadow-md" : ""
      }`}
    >
    <ul className="text-primary flex justify-center gap-6 items-center">
        <Link
          href="/"
          className="before:bg-accent relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:transition-[width] before:duration-200 before:content-[''] hover:before:w-full"
        >
          Home
        </Link>

        <Link
          href="/#blog"
          className="before:bg-accent relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-0 before:transition-[width] before:duration-200 before:content-[''] hover:before:w-full"
        >
          Blog
        </Link>
      {/* Dark/Light Mode Toggle */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={() => setTheme(theme === "light" ? "dark" : "light")}
          className="sr-only peer"
        />
        <div className="w-14 h-8 bg-card peer-hover:ring-2 peer-hover:ring-accent/50 rounded-full ring-1 ring-accent/50 dark:ring-0 peer dark:bg-muted peer-checked:bg-accent/50 transition-colors flex items-center justify-between px-1">
          <FaMoon
        className={`h-5 w-5 text-primary transition-opacity ${
          theme === "dark" || !mounted ? "opacity-100" : "opacity-50"
        }`}
          />
          <FiSun
        className={`h-5 w-5 text-muted transition-opacity ${
          theme === "light" && mounted ? "opacity-100" : "opacity-50"
        }`}
          />
        </div>
        <span className="absolute left-1 top-1 w-6 h-6 bg-muted dark:bg-primary rounded-full transition-transform peer-checked:translate-x-6 flex items-center justify-center shadow-md"></span>
      </label>
      </ul>

    </nav>
  );
}

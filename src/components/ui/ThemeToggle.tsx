import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Use saved theme, fallback to system preference, default to light
    const initialMode = savedTheme
      ? savedTheme === "dark"
      : systemPrefersDark || false;

    setDarkMode(initialMode);
    document.documentElement.classList.toggle("dark", initialMode);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 px-2.5 rounded-full transition-all hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <Sun size={20} className="text-orange-400 hover:text-orange-500" />
      ) : (
        <Moon
          size={20}
          className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
        />
      )}
    </button>
  );
};

export default ThemeToggle;

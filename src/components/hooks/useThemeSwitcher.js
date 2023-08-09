import { useEffect, useState } from "react";

function useThemeSwitcher() {
  const [mode, setMode] = useState(() => {
    if (typeof window !== "undefined") {
      const localStorageValue = localStorage.getItem("theme");
      return localStorageValue || "light";
    }
    return "light";
  });

  useEffect(() => {
    const preferDarkQuery = "(prefers-color-scheme: dark)";

    const handleChange = (e) => {
      const check = e.matches ? "dark" : "light";
      setMode(check);
      document.documentElement.classList.toggle("dark", check === "dark");
      localStorage.setItem("theme", check);
    };

    // Check if running on the client-side
    if (typeof window !== "undefined") {
      const localStorageValue = localStorage.getItem("theme");
      const mediaQuery = window.matchMedia(preferDarkQuery);
      const initialMode = localStorageValue || (mediaQuery.matches ? "dark" : "light");
      setMode(initialMode);
      document.documentElement.classList.toggle("dark", initialMode === "dark");
      mediaQuery.addEventListener("change", handleChange);

      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [mode]);

  return [mode, setMode];
}

export default useThemeSwitcher;

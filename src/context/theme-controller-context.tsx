import { createContext, useContext, useEffect, useState } from "react";
import { Theme } from "../lib/types";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

type ThemeControllerProviderProps = { children: React.ReactNode };
const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeControllerProvider({
  children,
}: ThemeControllerProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }
  useEffect(() => {
    const localStorageTheme = window.localStorage.getItem(
      "theme",
    ) as Theme | null;
    if (localStorageTheme) {
      setTheme(localStorageTheme);
      if (localStorageTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
}

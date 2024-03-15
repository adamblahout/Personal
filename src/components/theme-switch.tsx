import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "../context/theme-controller-context";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="fixed bottom-5 right-5 border border-black/10 bg-gray-100  dark:bg-gray-800 dark:border-white/10 p-4 rounded-full hover:scale-110 transition-all active:scale-105 shadow-sm"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}

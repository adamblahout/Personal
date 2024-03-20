import { useLanguage } from "../context/language-context";

export default function LanguageSwitch() {
  const { lng, toggleLanguage } = useLanguage();

  return (
    <button
      className="absolute sm:fixed sm:top-5 top-20 right-5 border border-black/10 bg-gray-100  dark:bg-gray-800 dark:border-white/10 p-4  rounded-full hover:scale-110 transition-all active:scale-105 shadow-sm"
      onClick={toggleLanguage}
    >
      {lng === "cz" ? (
        <p className="flex flex-row items-center justify-center text-sm w-4 h-4">
          CZ
        </p>
      ) : (
        <p className="flex flex-row items-center justify-center text-sm w-4 h-4">
          EN
        </p>
      )}
    </button>
  );
}

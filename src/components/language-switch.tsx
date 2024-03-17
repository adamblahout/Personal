import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdGTranslate } from "react-icons/md";

export default function LanguageSwitch() {
  const [lng, setLng] = useState("cz");
  const [, i18n] = useTranslation("global");

  function toggleLanguage() {
    if (lng === "cz") {
      setLng("eng");
      window.localStorage.setItem("language", "eng");
      i18n.changeLanguage("eng");
    } else {
      setLng("cz");
      window.localStorage.setItem("language", "cz");
      i18n.changeLanguage("cz");
    }
  }

  useEffect(() => {
    const localStorageLanguage = window.localStorage.getItem("language");
    if (localStorageLanguage) {
      setLng(localStorageLanguage);
    } else {
      i18n.changeLanguage("cz");
    }
  }, [i18n]);

  return (
    <button
      className="fixed bottom-5 left-5 border border-black/10 bg-gray-100  dark:bg-gray-800 dark:border-white/10 p-4  rounded-full hover:scale-110 transition-all active:scale-105 shadow-sm"
      onClick={toggleLanguage}
    >
      {lng === "cz" ? (
        <p className="flex flex-row items-center justify-center gap-3">
          <MdGTranslate />
        </p>
      ) : (
        <p className="flex flex-row items-center justify-center gap-3">
          <MdGTranslate />
        </p>
      )}
    </button>
  );
}

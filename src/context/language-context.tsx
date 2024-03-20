import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Language } from "../lib/types";
import CVczech from "/CVczech.pdf";
import CVenglish from "/CVenglish.pdf";

type ThemeLanguageType = {
  lng: Language;
  toggleLanguage: () => void;
  cv: string | undefined;
};

type LanguageContextProviderProps = { children: React.ReactNode };
const LanguageContext = createContext<ThemeLanguageType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [, i18n] = useTranslation("global");
  const [lng, setLng] = useState<Language>("cz");
  const [cv, setCv] = useState<string>();

  function toggleLanguage() {
    if (lng === "cz") {
      setLng("eng");
      window.localStorage.setItem("language", "eng");
      setCv(CVenglish);
      i18n.changeLanguage("eng");
    } else {
      setLng("cz");
      window.localStorage.setItem("language", "cz");
      setCv(CVczech);
      i18n.changeLanguage("cz");
    }
  }

  useEffect(() => {
    const localStorageLanguage = window.localStorage.getItem("language");
    if (localStorageLanguage) {
      setLng(localStorageLanguage);
      if (localStorageLanguage === "cz") {
        setCv(CVczech);
      } else if (localStorageLanguage === "eng") {
        setCv(CVenglish);
      }
    } else {
      i18n.changeLanguage("cz");
      setCv(CVczech);
    }
  }, [i18n]);

  return (
    <LanguageContext.Provider value={{ cv, lng, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === null) {
    throw new Error("useContext must be used within a ThemeContextProvider");
  }
  return context;
}

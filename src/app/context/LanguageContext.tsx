"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { messages } from "../../i18n/config";

export const LocaleContext = createContext(null);

const detectLocale = () => {
  if (typeof window === "undefined") return "en";

  const saved = localStorage.getItem("locale");
  if (saved) return saved;

  const browserLang = navigator.language.toLowerCase();

  if (browserLang.startsWith("es")) return "es";
  if (browserLang.startsWith("it")) return "it";

  return "en";
};

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => detectLocale());

  const t = (key) => {
    const keys = key.split(".");
    return keys.reduce((acc, k) => acc?.[k], messages[locale]);
  };

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);

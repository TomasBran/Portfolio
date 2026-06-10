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

  const t = (key, vars = {}) => {
    const keys = key.split(".");

    let text = keys.reduce((acc, k) => acc?.[k], messages[locale]);

    if (!text) return "";

    return text.replace(/\{\{(\w+)\}\}/g, (_, k) => {
      return vars[k] ?? `{{${k}}}`;
    });
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

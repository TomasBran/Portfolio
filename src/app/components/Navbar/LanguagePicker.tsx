"use client";
import { useState, useRef, useEffect } from "react";
import Flag from "./Flag";
import { useLocale } from "../../context/LanguageContext";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale } = useLocale();

  const ref = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", label: "English", flag: "uk" },
    { code: "es", label: "Español", flag: "es" },
    { code: "it", label: "Italiano", flag: "it" },
  ] as const;

  const current = languages.find((l) => l.code === locale);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative flex items-center">
      {/* Button */}
      <div
        className="w-8 h-8 rounded-full flex justify-center cursor-pointer overflow-hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Flag code={current?.flag} />
      </div>

      {/* Dropdown */}
      <div
        className={`${
          open ? "max-h-32" : "max-h-0"
        } overflow-hidden transition-all duration-300 absolute right-0 top-12`}
      >
        <div className="flex flex-col gap-2 rounded-lg shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 z-50 p-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLocale(lang.code);
                setOpen(false);
              }}
              className={`flex items-center gap-2 px-3 py-1 rounded-md text-sm transition-colors ${
                locale === lang.code
                  ? "bg-gray-200 dark:bg-gray-800"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <div className="w-5 h-3 flex justify-center">
                <Flag code={lang.flag} />
              </div>

              <span className="text-slate-800 dark:text-white">
                {lang.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

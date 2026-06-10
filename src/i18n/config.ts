export const locales = ["en", "es", "it"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

import en from "../messages/en.json";
import es from "../messages/es.json";
import it from "../messages/it.json";

export const messages = {
  en,
  es,
  it,
} as const;

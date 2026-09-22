import { createContext, useContext, useEffect, useState } from 'react';
import {
  LANGUAGE_META,
  RTL_LANGUAGES,
  SUPPORTED_LANGUAGES,
  translations,
} from '../i18n';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'devsite-language';

function resolveValue(dict, key) {
  return key.split('.').reduce((acc, part) => acc?.[part], dict);
}

function format(value, vars) {
  if (typeof value !== 'string' || !vars) return value;
  return value.replace(/\{(\w+)\}/g, (_, name) =>
    vars[name] !== undefined ? String(vars[name]) : `{${name}}`,
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) return saved;
    return 'en';
  });

  const direction = RTL_LANGUAGES.includes(language) ? 'rtl' : 'ltr';

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.setAttribute('dir', direction);
    document.documentElement.setAttribute('lang', language);
  }, [language, direction]);

  const t = (key, vars) => {
    const fromCurrent = resolveValue(translations[language], key);
    const fromEn = resolveValue(translations.en, key);
    const value = fromCurrent !== undefined ? fromCurrent : fromEn;
    return format(value !== undefined ? value : key, vars);
  };

  const changeLanguage = (lang) => {
    if (SUPPORTED_LANGUAGES.includes(lang)) setLanguage(lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, t, direction, languages: LANGUAGE_META }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

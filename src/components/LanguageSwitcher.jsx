import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, changeLanguage, languages } = useLanguage();

  return (
    <label className="ms-1 inline-flex shrink-0 items-center sm:ms-2">
      <span className="sr-only">Language</span>
      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="lang-switcher"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </label>
  );
}

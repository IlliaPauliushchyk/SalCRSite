import ar from './locales/ar.js';
import az from './locales/az.js';
import be from './locales/be.js';
import bn from './locales/bn.js';
import de from './locales/de.js';
import en from './locales/en.js';
import es from './locales/es.js';
import fr from './locales/fr.js';
import hi from './locales/hi.js';
import hy from './locales/hy.js';
import id from './locales/id.js';
import it from './locales/it.js';
import ja from './locales/ja.js';
import kk from './locales/kk.js';
import ko from './locales/ko.js';
import ky from './locales/ky.js';
import nl from './locales/nl.js';
import pl from './locales/pl.js';
import pt from './locales/pt.js';
import ru from './locales/ru.js';
import sw from './locales/sw.js';
import th from './locales/th.js';
import tr from './locales/tr.js';
import uk from './locales/uk.js';
import ur from './locales/ur.js';
import vi from './locales/vi.js';
import zh from './locales/zh.js';

export const translations = {
  ar, az, be, bn, de, en, es, fr, hi, hy, id, it, ja, kk, ko, ky, nl, pl, pt, ru, sw, th, tr, uk, ur, vi, zh,
};

export const SUPPORTED_LANGUAGES = [
  'en', 'ru', 'uk', 'be', 'de', 'fr', 'es', 'pt', 'it', 'nl', 'pl', 'tr',
  'zh', 'ja', 'ko', 'vi', 'id', 'th', 'hi', 'bn', 'ar', 'ur', 'az', 'kk', 'ky', 'hy', 'sw',
];

export const RTL_LANGUAGES = ['ar', 'ur'];

export const LANGUAGE_META = [
  { code: 'en', name: 'English' },
  { code: 'ru', name: 'Русский' },
  { code: 'uk', name: 'Українська' },
  { code: 'be', name: 'Беларуская' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
  { code: 'pt', name: 'Português' },
  { code: 'it', name: 'Italiano' },
  { code: 'nl', name: 'Nederlands' },
  { code: 'pl', name: 'Polski' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'zh', name: '中文' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'vi', name: 'Tiếng Việt' },
  { code: 'id', name: 'Bahasa Indonesia' },
  { code: 'th', name: 'ไทย' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'ar', name: 'العربية' },
  { code: 'ur', name: 'اردو' },
  { code: 'az', name: 'Azərbaycan' },
  { code: 'kk', name: 'Қазақша' },
  { code: 'ky', name: 'Кыргызча' },
  { code: 'hy', name: 'Հայերեն' },
  { code: 'sw', name: 'Kiswahili' },
];

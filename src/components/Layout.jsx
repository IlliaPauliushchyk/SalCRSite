import { Link, NavLink } from 'react-router-dom';
import { PLAY_DEVELOPER_URL, SITE } from '../config';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Layout({ children, theme = 'spy', grain = 'field' }) {
  const { t, direction } = useLanguage();
  const themeClass = theme === 'sabotage' ? 'theme-sabotage' : 'theme-spy';
  const grainClass = grain === 'archive' ? 'archive-grain' : 'field-grain';

  const linkClass = ({ isActive }) =>
    ['nav-link', isActive ? 'is-active' : ''].filter(Boolean).join(' ');

  return (
    <div className={`${themeClass} page-shell ${direction === 'rtl' ? 'rtl' : 'ltr'}`}>
      <div className={`min-h-screen ${grainClass}`}>
        <header className="site-header sticky top-0 z-20 backdrop-blur-md">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <Link to="/" className="site-brand">
              {SITE.developerName}
            </Link>
            <nav className="site-nav">
              <NavLink to="/" end className={linkClass}>
                {t('nav.home')}
              </NavLink>
              <NavLink to="/privacy" className={linkClass}>
                {t('nav.privacy')}
              </NavLink>
              <NavLink to="/contact" className={linkClass}>
                {t('nav.contact')}
              </NavLink>
              <LanguageSwitcher />
            </nav>
          </div>
        </header>

        <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12">{children}</main>

        <footer className="site-footer">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-[var(--page-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="m-0">
              {t('footer.copyright', { year: SITE.year, name: SITE.developerName })}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/privacy" className="footer-link">
                {t('footer.privacy')}
              </Link>
              <Link to="/contact" className="footer-link">
                {t('footer.contact')}
              </Link>
              <a
                href={PLAY_DEVELOPER_URL}
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                {t('footer.play')}
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

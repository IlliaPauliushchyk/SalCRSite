import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import { APPS, SITE } from '../config';
import { useLanguage } from '../contexts/LanguageContext';

function BulletList({ items }) {
  if (!Array.isArray(items)) return null;
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function Privacy() {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  return (
    <Layout>
      <div className="animate-fade-up mb-8 max-w-3xl">
        <h1 className="font-display m-0 text-3xl text-[var(--page-text)] sm:text-4xl">
          {t('privacy.title')}
        </h1>
        <p className="mt-2 mb-0 text-sm text-[var(--page-muted)]">{t('privacy.lastUpdated')}</p>
      </div>

      <div className="animate-fade-up-delay grid max-w-3xl gap-5">
        <section className="section-card prose-block">
          <h2>{t('privacy.introTitle')}</h2>
          <p className="m-0">{t('privacy.intro', { email: SITE.email })}</p>
        </section>

        <section className="section-card prose-block">
          <h2>{t('privacy.appsTitle')}</h2>

          <div id="football-spy" className="scroll-mt-24">
            <h3 className="font-display mt-2 mb-2 text-lg text-[var(--page-primary)]">
              {t('privacy.spyBlockTitle')}
            </h3>
            <p className="m-0">{t('privacy.spySummary')}</p>
            <p className="mt-3 mb-0">
              <a
                href={APPS.footballSpy.privacyUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                {t('common.fullPrivacy')} — Football Spy
              </a>
            </p>
          </div>

          <div id="sabotage" className="mt-8 scroll-mt-24">
            <h3 className="font-display mt-2 mb-2 text-lg text-[var(--page-primary)]">
              {t('privacy.sabBlockTitle')}
            </h3>
            <p className="m-0">{t('privacy.sabSummary')}</p>
            <p className="mt-3 mb-0">
              <a
                href={APPS.sabotage.privacyUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                {t('common.fullPrivacy')} — Sabotage
              </a>
            </p>
          </div>
        </section>

        <section className="section-card prose-block">
          <h2>{t('privacy.collectTitle')}</h2>
          <BulletList items={t('privacy.collect')} />
        </section>

        <section className="section-card prose-block">
          <h2>{t('privacy.notCollectTitle')}</h2>
          <BulletList items={t('privacy.notCollect')} />
        </section>

        <section className="section-card prose-block">
          <h2>{t('privacy.purposeTitle')}</h2>
          <BulletList items={t('privacy.purpose')} />
        </section>

        <section className="section-card prose-block">
          <h2>{t('privacy.thirdTitle')}</h2>
          <BulletList items={t('privacy.third')} />
        </section>

        <section className="section-card prose-block">
          <h2>{t('privacy.rightsTitle')}</h2>
          <p className="m-0">{t('privacy.rights', { email: SITE.email })}</p>
        </section>

        <section className="section-card prose-block">
          <h2>{t('privacy.childrenTitle')}</h2>
          <p className="m-0">{t('privacy.children')}</p>
        </section>

        <section className="section-card prose-block">
          <h2>{t('privacy.changesTitle')}</h2>
          <p className="m-0">{t('privacy.changes')}</p>
        </section>

        <section className="section-card prose-block">
          <h2>{t('privacy.contactTitle')}</h2>
          <p className="m-0">{t('privacy.contact', { email: SITE.email })}</p>
          <p className="mt-3 mb-0">
            <a href={`mailto:${SITE.email}`} className="text-[var(--page-primary)]">
              {SITE.email}
            </a>
          </p>
          <p className="mt-4 mb-0">
            <Link to="/contact" className="text-[var(--page-primary)]">
              {t('nav.contact')}
            </Link>
          </p>
        </section>
      </div>
    </Layout>
  );
}

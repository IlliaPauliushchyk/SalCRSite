import { Link } from 'react-router-dom';
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

export default function FootballSpy() {
  const { t } = useLanguage();
  const app = APPS.footballSpy;

  return (
    <Layout>
      <div className="animate-fade-up mb-8 flex flex-col gap-5 sm:flex-row sm:items-center">
        <img
          src={app.icon}
          alt=""
          width={96}
          height={96}
          className="h-24 w-24 rounded-2xl object-cover shadow-lg"
        />
        <div>
          <h1 className="font-display m-0 text-3xl text-[var(--page-text)] sm:text-4xl">
            {t('spy.name')}
          </h1>
          <p className="m-0 mt-1 text-[var(--page-muted)]">{t('spy.nameLocal')}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={app.playUrl} target="_blank" rel="noreferrer" className="btn-primary">
              {t('common.getOnPlay')}
            </a>
            <Link to="/" className="btn-ghost">
              {t('common.backHome')}
            </Link>
          </div>
        </div>
      </div>

      <div className="animate-fade-up-delay grid gap-5">
        <section className="section-card prose-block">
          <h2>{t('spy.name')}</h2>
          <p className="m-0">{t('spy.description')}</p>
          <p className="mt-3 mb-0">
            <strong className="text-[var(--page-text)]">{t('common.platform')}:</strong>{' '}
            {t('common.platformValue')}
          </p>
        </section>

        <section className="section-card prose-block">
          <h2>{t('spy.featuresTitle')}</h2>
          <BulletList items={t('spy.features')} />
        </section>

        <section className="section-card prose-block">
          <h2>{t('spy.adsTitle')}</h2>
          <BulletList items={t('spy.ads')} />
        </section>

        <section className="section-card prose-block">
          <h2>{t('spy.dataTitle')}</h2>
          <BulletList items={t('spy.data')} />
          <p className="mt-4 mb-0">
            <a
              href={app.privacyUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--page-primary)]"
            >
              {t('common.fullPrivacy')}
            </a>
            {' · '}
            <Link to="/privacy#football-spy" className="text-[var(--page-primary)]">
              /privacy
            </Link>
          </p>
        </section>

        <section className="section-card prose-block">
          <h2>{t('common.support')}</h2>
          <p className="m-0">{t('spy.supportText')}</p>
          <p className="mt-3 mb-0">
            <a href={`mailto:${SITE.email}`} className="text-[var(--page-primary)]">
              {SITE.email}
            </a>
          </p>
        </section>
      </div>
    </Layout>
  );
}

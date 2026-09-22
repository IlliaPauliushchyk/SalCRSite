import { Link } from 'react-router-dom';
import { APPS } from '../config';
import { useLanguage } from '../contexts/LanguageContext';
import Layout from '../components/Layout';

function AppCard({ icon, name, oneLiner, playUrl, detailPath, delayClass }) {
  const { t } = useLanguage();

  return (
    <article className={`app-card ${delayClass}`}>
      <div className="flex items-center gap-4">
        <img src={icon} alt="" width={72} height={72} className="h-[72px] w-[72px] rounded-2xl object-cover shadow-lg" />
        <div>
          <h2 className="font-display m-0 text-xl text-[var(--page-text)] sm:text-2xl">{name}</h2>
          <p className="m-0 mt-1 text-sm text-[var(--page-muted)]">{oneLiner}</p>
        </div>
      </div>
      <div className="mt-auto flex flex-wrap gap-3">
        <a href={playUrl} target="_blank" rel="noreferrer" className="btn-primary">
          {t('common.getOnPlay')}
        </a>
        <Link to={detailPath} className="btn-ghost">
          {t('common.learnMore')}
        </Link>
      </div>
    </article>
  );
}

export default function Home() {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="animate-fade-up mb-10 max-w-2xl sm:mb-14">
        <h1 className="font-display mt-0 mb-4 text-4xl leading-tight text-[var(--page-text)] sm:text-5xl">
          {t('hub.headline')}
        </h1>
        <p className="m-0 text-base leading-relaxed text-[var(--page-muted)] sm:text-lg">
          {t('hub.tagline')}
        </p>
      </section>

      <section>
        <h2 className="animate-fade-up-delay font-display mb-5 text-2xl text-[var(--page-text)]">
          {t('hub.appsHeading')}
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          <AppCard
            icon={APPS.footballSpy.icon}
            name={t('hub.footballSpyName')}
            oneLiner={t('hub.footballSpyOneLiner')}
            playUrl={APPS.footballSpy.playUrl}
            detailPath={APPS.footballSpy.path}
            delayClass="animate-fade-up-delay"
          />
          <AppCard
            icon={APPS.sabotage.icon}
            name={t('hub.sabotageName')}
            oneLiner={t('hub.sabotageOneLiner')}
            playUrl={APPS.sabotage.playUrl}
            detailPath={APPS.sabotage.path}
            delayClass="animate-fade-up-delay-2"
          />
        </div>
      </section>
    </Layout>
  );
}

import Layout from '../components/Layout';
import { SITE } from '../config';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="animate-fade-up mx-auto max-w-xl">
        <h1 className="font-display m-0 text-3xl text-[var(--page-text)] sm:text-4xl">
          {t('contact.title')}
        </h1>
        <p className="mt-4 mb-0 text-base leading-relaxed text-[var(--page-muted)]">
          {t('contact.body')}
        </p>

        <div className="section-card mt-8">
          <p className="m-0 text-sm uppercase tracking-wide text-[var(--page-muted)]">
            {t('common.emailLabel')}
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-2 block break-all text-xl text-[var(--page-primary)] no-underline hover:underline sm:text-2xl"
          >
            {SITE.email}
          </a>
          <a href={`mailto:${SITE.email}`} className="btn-primary mt-6">
            {t('contact.cta')}
          </a>
        </div>
      </section>
    </Layout>
  );
}

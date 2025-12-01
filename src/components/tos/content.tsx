'use client';

import { useTranslations } from 'next-intl';
import { useMounted } from '@/hooks/use-mounted';

export function TermsContent() {
  const t = useTranslations('tos');
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <main className="w-full max-w-7xl mx-auto lg:px-8 flex-1">
      <div className="px-4 py-12 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter">
              {t('title')}
            </h1>
            <p className="text-lg mt-4">
              {t('lastUpdated')}
            </p>
          </div>
          
          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">{t('section1.title')}</h2>
              <p className="text-base font-normal leading-relaxed">{t('section1.content')}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">{t('section2.title')}</h2>
              <p className="text-base font-normal leading-relaxed">{t('section2.content')}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">{t('section3.title')}</h2>
              <p className="text-base font-normal leading-relaxed">{t('section3.content')}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">{t('section4.title')}</h2>
              <p className="text-base font-normal leading-relaxed">{t('section4.content')}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">{t('section5.title')}</h2>
              <p className="text-base font-normal leading-relaxed">{t('section5.content')}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">{t('section6.title')}</h2>
              <p className="text-base font-normal leading-relaxed">{t('section6.content')}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">{t('section7.title')}</h2>
              <p className="text-base font-normal leading-relaxed">{t('section7.content')}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">{t('section8.title')}</h2>
              <p className="text-base font-normal leading-relaxed">
                {t('section8.content')} <a href="mailto:legal@dadrix.com" className="text-primary dark:text-blue-400 hover:underline">legal@dadrix.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

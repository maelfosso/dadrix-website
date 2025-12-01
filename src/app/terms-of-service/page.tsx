'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useTranslations } from 'next-intl';
import { useMounted } from '@/hooks/use-mounted';

export default function TermsOfServicePage() {
  const t = useTranslations('tos');
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative flex w-full flex-col min-h-screen overflow-x-hidden">
      <Header />
      
      <main className="w-full max-w-7xl mx-auto lg:px-8 flex-1">
        <div className="px-4 py-12 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
                {t('title')}
              </h1>
              <p className="text-muted-foreground text-lg mt-4">
                {t('lastUpdated')}
              </p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/80 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">{t('section1.title')}</h2>
                <p>{t('section1.content')}</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">{t('section2.title')}</h2>
                <p>{t('section2.content')}</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">{t('section3.title')}</h2>
                <p>{t('section3.content')}</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">{t('section4.title')}</h2>
                <p>{t('section4.content')}</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">{t('section5.title')}</h2>
                <p>{t('section5.content')}</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">{t('section6.title')}</h2>
                <p>{t('section6.content')}</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">{t('section7.title')}</h2>
                <p>{t('section7.content')}</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">{t('section8.title')}</h2>
                <p>
                  {t('section8.content')} <a href="mailto:legal@dadrix.com" className="text-primary hover:underline">legal@dadrix.com</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

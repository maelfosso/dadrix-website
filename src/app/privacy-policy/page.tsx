'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useTranslations } from 'next-intl';
import { useMounted } from '@/hooks/use-mounted';

export default function PrivacyPolicyPage() {
  const t = useTranslations('privacy');
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative flex w-full flex-col min-h-screen overflow-x-hidden">
      <Header />
      
      <main className="w-full max-w-7xl mx-auto lg:px-8 flex-1">
        <div className="px-4 py-12 lg:py-20">
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
              <p>{t('intro')}</p>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">{t('section1.title')}</h2>
                <p>{t('section1.content')}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Data:</strong> {t('section1.personalData')}</li>
                  <li><strong>Derivative Data:</strong> {t('section1.derivativeData')}</li>
                  <li><strong>Financial Data:</strong> {t('section1.financialData')}</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">{t('section2.title')}</h2>
                <p>{t('section2.content')}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('section2.item1')}</li>
                  <li>{t('section2.item2')}</li>
                  <li>{t('section2.item3')}</li>
                  <li>{t('section2.item4')}</li>
                  <li>{t('section2.item5')}</li>
                  <li>{t('section2.item6')}</li>
                  <li>{t('section2.item7')}</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">{t('section3.title')}</h2>
                <p>{t('section3.content')}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>By Law or to Protect Rights:</strong> {t('section3.law')}</li>
                  <li><strong>Third-Party Service Providers:</strong> {t('section3.thirdParty')}</li>
                  <li><strong>Business Transfers:</strong> {t('section3.businessTransfers')}</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">{t('section4.title')}</h2>
                <p>{t('section4.content')}</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">{t('section5.title')}</h2>
                <p>{t('section5.content')}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('section5.item1')}</li>
                  <li>{t('section5.item2')}</li>
                  <li>{t('section5.item3')}</li>
                  <li>{t('section5.item4')}</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">{t('section6.title')}</h2>
                <p>{t('section6.content')}</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">{t('section7.title')}</h2>
                <p>{t('section7.content')}</p>
                <p className="space-y-2">
                  <span className="block">{t('section7.company')}</span>
                  <span className="block">{t('section7.address')}</span>
                  <span className="block">
                    Email: <a href="mailto:privacy@dadrix.com" className="text-primary hover:underline">{t('section7.email')}</a>
                  </span>
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
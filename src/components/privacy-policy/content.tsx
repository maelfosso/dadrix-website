'use client';

import { useTranslations } from 'next-intl';
import { useMounted } from '@/hooks/use-mounted';

export function PrivacyContent() {
  const t = useTranslations('privacy');
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <main className="w-full max-w-4xl mx-auto px-4 lg:px-8 py-12 lg:py-20 flex-1">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
          {t('title')}
        </h1>
        <p className="text-base lg:text-lg">
          {t('lastUpdated')}
        </p>
      </div>
      
      <div className="mt-10 lg:mt-16">
        <p className="text-base font-normal leading-relaxed mb-4">
          {t('intro')}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          {t('section1.title')}
        </h2>
        <p className="text-base font-normal leading-relaxed mb-4">
          {t('section1.content')}
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2 text-base font-normal leading-relaxed">
            <strong>Personal Data:</strong> {t('section1.personalData')}
          </li>
          <li className="mb-2 text-base font-normal leading-relaxed">
            <strong>Derivative Data:</strong> {t('section1.derivativeData')}
          </li>
          <li className="mb-2 text-base font-normal leading-relaxed">
            <strong>Financial Data:</strong> {t('section1.financialData')}
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          {t('section2.title')}
        </h2>
        <p className="text-base font-normal leading-relaxed mb-4">
          {t('section2.content')}
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2 text-base font-normal leading-relaxed">{t('section2.item1')}</li>
          <li className="mb-2 text-base font-normal leading-relaxed">{t('section2.item2')}</li>
          <li className="mb-2 text-base font-normal leading-relaxed">{t('section2.item3')}</li>
          <li className="mb-2 text-base font-normal leading-relaxed">{t('section2.item4')}</li>
          <li className="mb-2 text-base font-normal leading-relaxed">{t('section2.item5')}</li>
          <li className="mb-2 text-base font-normal leading-relaxed">{t('section2.item6')}</li>
          <li className="mb-2 text-base font-normal leading-relaxed">{t('section2.item7')}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          {t('section3.title')}
        </h2>
        <p className="text-base font-normal leading-relaxed mb-4">
          {t('section3.content')}
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2 text-base font-normal leading-relaxed">
            <strong>By Law or to Protect Rights:</strong> {t('section3.law')}
          </li>
          <li className="mb-2 text-base font-normal leading-relaxed">
            <strong>Third-Party Service Providers:</strong> {t('section3.thirdParty')}
          </li>
          <li className="mb-2 text-base font-normal leading-relaxed">
            <strong>Business Transfers:</strong> {t('section3.businessTransfers')}
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          {t('section4.title')}
        </h2>
        <p className="text-base font-normal leading-relaxed mb-4">
          {t('section4.content')}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          {t('section5.title')}
        </h2>
        <p className="text-base font-normal leading-relaxed mb-4">
          {t('section5.content')}
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2 text-base font-normal leading-relaxed">{t('section5.item1')}</li>
          <li className="mb-2 text-base font-normal leading-relaxed">{t('section5.item2')}</li>
          <li className="mb-2 text-base font-normal leading-relaxed">{t('section5.item3')}</li>
          <li className="mb-2 text-base font-normal leading-relaxed">{t('section5.item4')}</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          {t('section6.title')}
        </h2>
        <p className="text-base font-normal leading-relaxed mb-4">
          {t('section6.content')}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">
          {t('section7.title')}
        </h2>
        <p className="text-base font-normal leading-relaxed mb-4">
          {t('section7.content')}
        </p>
        <p className="text-base font-normal leading-relaxed space-y-2">
          <span className="block">{t('section7.company')}</span>
          <span className="block">{t('section7.address')}</span>
          <span className="block">
            Email: <a href="mailto:privacy@dadrix.com" className="text-primary dark:text-blue-400 hover:underline">{t('section7.email')}</a>
          </span>
        </p>
      </div>
    </main>
  );
}

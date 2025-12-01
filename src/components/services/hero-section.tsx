'use client';

import { useTranslations } from 'next-intl';

export function ServicesHeroSection() {
  const t = useTranslations('services');

  return (
    <section className="px-4 py-16 lg:py-24 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-foreground text-4xl lg:text-5xl font-bold tracking-tighter">
          {t('title')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t('subtitle')}
        </p>
      </div>
    </section>
  );
}

'use client';

import { useTranslations } from 'next-intl';

export function AboutHeroSection() {
  const t = useTranslations('about');

  return (
    <div className="px-4 py-12 lg:py-24 text-center">
      <h1 className="text-foreground text-4xl font-bold tracking-tighter sm:text-5xl">
        {t('title')}
      </h1>
      <p className="mt-4 text-muted-foreground text-lg max-w-3xl mx-auto">
        {t('subtitle')}
      </p>
    </div>
  );
}

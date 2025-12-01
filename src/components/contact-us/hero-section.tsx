'use client';

import { useTranslations } from 'next-intl';

export function ContactHeroSection() {
  const t = useTranslations('contact');

  return (
    <div className="flex flex-col items-center text-center gap-4 mb-8 lg:mb-12">
      <h1 className="text-foreground text-4xl lg:text-5xl font-bold tracking-tighter">
        {t('title')}
      </h1>
      <p className="text-muted-foreground text-base lg:text-lg max-w-2xl">
        {t('subtitle')}
      </p>
    </div>
  );
}

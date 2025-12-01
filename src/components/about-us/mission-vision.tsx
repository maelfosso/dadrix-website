'use client';

import { useTranslations } from 'next-intl';

export function MissionVisionSection() {
  const t = useTranslations('about');

  return (
    <section className="px-4 py-8 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight">
            {t('mission.title')}
          </h2>
          <p className="text-muted-foreground">
            {t('mission.content')}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight">
            {t('vision.title')}
          </h2>
          <p className="text-muted-foreground">
            {t('vision.content')}
          </p>
        </div>
      </div>
    </section>
  );
}

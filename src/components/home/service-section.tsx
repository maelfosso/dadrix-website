'use client';

import { useTranslations } from 'next-intl';

export function ServicesSection() {
  const t = useTranslations();

  return (
    <section id="services" className="px-4 py-8 lg:py-16 border-t border-border/50">
      <div className="flex flex-col items-center text-center gap-4 mb-8 lg:mb-12">
        <h2 className="text-foreground text-3xl lg:text-4xl font-bold tracking-tighter">
          {t('services.title')}
        </h2>
        <p className="text-muted-foreground text-base lg:text-lg max-w-2xl">
          {t('services.subtitle')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        <div className="flex flex-1 gap-4 rounded-xl border border-border bg-card p-6 flex-col">
          <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
          <div className="flex flex-col gap-2">
            <h3 className="text-foreground text-lg font-bold leading-tight">
              {t('services.ai.title')}
            </h3>
            <p className="text-muted-foreground text-base font-normal leading-normal">
              {t('services.ai.description')}
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-4 rounded-xl border border-border bg-card p-6 flex-col">
          <span className="material-symbols-outlined text-primary text-3xl">bar_chart</span>
          <div className="flex flex-col gap-2">
            <h3 className="text-foreground text-lg font-bold leading-tight">
              {t('services.bi.title')}
            </h3>
            <p className="text-muted-foreground text-base font-normal leading-normal">
              {t('services.bi.description')}
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-4 rounded-xl border border-border bg-card p-6 flex-col">
          <span className="material-symbols-outlined text-primary text-3xl">strategy</span>
          <div className="flex flex-col gap-2">
            <h3 className="text-foreground text-lg font-bold leading-tight">
              {t('services.strategy.title')}
            </h3>
            <p className="text-muted-foreground text-base font-normal leading-normal">
              {t('services.strategy.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

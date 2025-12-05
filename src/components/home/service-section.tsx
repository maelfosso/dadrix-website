'use client';

import { useTranslations } from 'next-intl';

export default function ServicesSection() {
  const t = useTranslations('services');

  const services = [
    { key: 'ai', icon: 'psychology' },
    { key: 'bi', icon: 'bar_chart' },
    { key: 'strategy', icon: 'strategy' },
  ];

  return (
    <section className="px-4 py-8 lg:py-16">
      <div className="flex flex-col items-center text-center gap-4 mb-8 lg:mb-12">
        <h2 className="text-text-primary dark:text-white text-3xl lg:text-4xl font-bold tracking-tighter">
          {t('title')}
        </h2>
        <p className="text-text-secondary dark:text-dark-text-secondary text-base lg:text-lg max-w-2xl">
          {t('description')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {services.map((service) => (
          <div
            key={service.key}
            className="flex flex-1 gap-4 rounded-xl border border-black/10 dark:border-dark-border bg-white dark:bg-dark-card p-6 flex-col transition-all duration-300 hover:shadow-lg"
          >
            {/* Icône avec arrière-plan bleu comme demandé */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl">
                {service.icon}
              </span>
            </div>
            
            <div className="flex flex-col gap-2">
              <h3 className="text-text-primary dark:text-white text-lg font-bold leading-tight">
                {t(`${service.key}.title`)}
              </h3>
              <p className="text-text-secondary dark:text-dark-text-secondary text-base font-normal leading-normal">
                {t(`${service.key}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

'use client';

import { useTranslations } from 'next-intl';

const timeline = [
  { id: 'item1' },
  { id: 'item2' },
  { id: 'item3' },
  { id: 'item4' },
];

export function TimelineSection() {
  const t = useTranslations('about');

  return (
    <section className="px-4 py-8 lg:py-16">
      <div className="flex flex-col items-center text-center gap-4 mb-8 lg:mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter">
          {t('story.title')}
        </h2>
      </div>
      <div className="relative pl-6 border-l-2 border-primary/20 dark:border-primary/40 max-w-3xl mx-auto">
        {timeline.map((item, index) => (
          <div key={item.id} className={`mb-8 ${index === timeline.length - 1 ? 'pb-0' : ''} relative`}>
            <div className="absolute -left-[35px] top-1.5 flex items-center justify-center size-5 bg-primary rounded-full ring-4 ring-background"></div>
            <h3 className="text-lg font-bold">
              {t(`story.${item.id}.title`)}
            </h3>
            <p className="text-muted-foreground mt-1">
              {t(`story.${item.id}.content`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

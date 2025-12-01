'use client';

import { Card } from '@/components/ui/card';
import { useTranslations } from 'next-intl';

const values = [
  { id: 'innovation', icon: 'lightbulb' },
  { id: 'integrity', icon: 'handshake' },
  { id: 'collaboration', icon: 'groups' },
];

export function ValuesSection() {
  const t = useTranslations('about');

  return (
    <section className="px-4 py-8 lg:py-16">
      <div className="flex flex-col items-center text-center gap-4 mb-8 lg:mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter">
          {t('values.title')}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((value) => (
          <Card key={value.id} className="flex flex-col items-center text-center gap-4 p-6">
            <span className="material-symbols-outlined text-primary text-3xl">
              {value.icon}
            </span>
            <h3 className="text-lg font-bold">
              {t(`values.${value.id}.title`)}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t(`values.${value.id}.content`)}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

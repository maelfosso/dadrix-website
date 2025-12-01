'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from 'next-intl';

interface Service {
  icon: string;
  key: 'training' | 'bi' | 'ml' | 'ai';
}

export function ServicesGrid() {
  const t = useTranslations('services');

  const services: Service[] = [
    { icon: 'school', key: 'training' },
    { icon: 'query_stats', key: 'bi' },
    { icon: 'psychology', key: 'ml' },
    { icon: 'smart_toy', key: 'ai' },
  ];

  return (
    <section className="px-4 pb-16 lg:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <Card key={service.key} className="flex flex-col gap-8 p-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 dark:bg-primary/20">
                <span className="material-symbols-outlined text-primary dark:text-white text-3xl">
                  {service.icon}
                </span>
              </div>
              <CardTitle className="text-2xl">
                {t(`${service.key}.title`)}
              </CardTitle>
            </div>
            <CardContent className="p-0">
              <p className="text-muted-foreground mb-4">
                {t(`${service.key}.description`)}
              </p>
              <ul className="space-y-3">
                {[1, 2, 3].map((num) => (
                  <li key={num} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                      check_circle
                    </span>
                    <span className="text-foreground">
                      {t(`${service.key}.benefit${num}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

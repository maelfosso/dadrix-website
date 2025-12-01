'use client';

import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export function ServicesCTASection() {
  const t = useTranslations('services');

  return (
    <section className="px-4 py-16 lg:py-24 bg-muted/50 rounded-xl mb-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter">
              {t('cta.title')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('cta.description')}
            </p>
          </div>
          <Link href="/contact-us">
            <Button size="lg">{t('cta.button')}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export function AboutMobileMenu() {
  const t = useTranslations('about');

  return (
    <div className="block lg:hidden">
      <div className="px-4 py-4">
        <div className="flex flex-col gap-2 rounded-lg bg-card p-4 border border-border">
          <Link href="/our-services" className="text-foreground font-medium text-base p-2 rounded-md hover:bg-accent transition-colors">
            {t('nav.services')}
          </Link>
          <Link href="/" className="text-foreground font-medium text-base p-2 rounded-md hover:bg-accent transition-colors">
            Pesoro
          </Link>
          <Link href="/" className="text-foreground font-medium text-base p-2 rounded-md hover:bg-accent transition-colors">
            Podcast
          </Link>
          <Link href="/about-us" className="text-foreground font-medium text-base p-2 rounded-md bg-accent">
            {t('nav.about')}
          </Link>
          <Link href="/contact-us" className="text-foreground font-medium text-base p-2 rounded-md hover:bg-accent transition-colors">
            {t('nav.contact')}
          </Link>
        </div>
      </div>
    </div>
  );
}

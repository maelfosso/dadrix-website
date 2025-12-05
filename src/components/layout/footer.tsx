'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="w-full bg-white dark:bg-dark-card border-t border-black/10 dark:border-white/10 mt-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                D
              </div>
              <h2 className="text-text-primary dark:text-white text-xl font-bold">
                DaDriX
              </h2>
            </div>
            <p className="text-text-secondary dark:text-dark-text-secondary text-sm">
              {t('rights')}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center flex-col sm:flex-row gap-4 lg:gap-8">
            <Link href="/services" className="text-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/pesoro" className="text-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-white transition-colors">
              Pesoro
            </Link>
            <Link href="/podcast" className="text-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-white transition-colors">
              Podcast
            </Link>
            <Link href="/privacy" className="text-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-white transition-colors">
              {t('privacy')}
            </Link>
            <Link href="/terms" className="text-text-secondary dark:text-dark-text-secondary hover:text-primary dark:hover:text-white transition-colors">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

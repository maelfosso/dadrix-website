'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Logo } from '../logo';

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="w-full bg-card border-t border-border mt-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                <Logo className="h-8 w-auto" />
              </div>
              <h2 className="text-foreground text-xl font-bold">DaDriX</h2>
            </div>
            <p className="text-muted-foreground text-sm">{t('footer.copyright')}</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <Link href="/our-services" className="text-muted-foreground hover:text-primary transition-colors">
              {t('footer.links.services')}
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              {t('footer.links.pesoro')}
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              {t('footer.links.podcast')}
            </Link>
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
              {t('footer.links.privacy')}
            </Link>
            <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
              {t('footer.links.tos')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

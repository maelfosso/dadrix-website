'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export function ContactInfo() {
  const t = useTranslations('contact');

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('info.title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
              <span className="material-symbols-outlined text-primary dark:text-white">mail</span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{t('info.email')}</p>
              <Link href="mailto:contact@dadrix.com" className="font-medium text-foreground hover:text-primary transition-colors">
                {t('info.emailValue')}
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
              <span className="material-symbols-outlined text-primary dark:text-white">call</span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{t('info.phone')}</p>
              <Link href="tel:+1234567890" className="font-medium text-foreground hover:text-primary transition-colors">
                {t('info.phoneValue')}
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
              <span className="material-symbols-outlined text-primary dark:text-white">location_on</span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{t('info.address')}</p>
              <p className="font-medium text-foreground">{t('info.addressValue')}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

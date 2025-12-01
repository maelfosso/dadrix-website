'use client';

import { Logo } from '@/components/logo';
import { ThemeSwitcher, LanguageSwitcher } from '@/components/switchers';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useMounted } from '@/hooks/use-mounted';

export function Header() {
  const t = useTranslations();
  const mounted = useMounted();

  // Évitez le rendu du contenu client avant le montage
  if (!mounted) {
    return <header className="sticky top-0 z-20 w-full h-16 border-b bg-background/80 backdrop-blur-sm" />;
  }

  return (
    <header className="sticky top-0 z-20 w-full bg-background/80 dark:bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
            <Logo className="h-8 w-auto" />
          </div>
          <Link href="/" className="text-foreground text-xl font-bold leading-tight tracking-[-0.015em] hover:opacity-80">
            DaDriX
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/our-services" className="text-muted-foreground hover:text-primary transition-colors">
            {t('header.nav.services')}
          </Link>
          <Link href="https://pesoro.dadrix.com/" target='_blank' className="text-muted-foreground hover:text-primary transition-colors">
            {t('header.nav.pesoro')}
          </Link>
          <Link href="https://podcast.dadrix.com/" target='_blank' className="text-muted-foreground hover:text-primary transition-colors">
            {t('header.nav.podcast')}
          </Link>
          <Link href="/about-us" className="text-muted-foreground hover:text-primary transition-colors">
            {t('header.nav.about')}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <Link href="/contact-us">
            <Button size="sm" className="hidden lg:flex">
              {t('header.nav.contact')}
            </Button>
          </Link>
          <button className="flex lg:hidden max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-foreground gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}

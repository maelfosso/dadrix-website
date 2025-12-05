'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { LangSwitcher } from '@/components/lang-switcher';

export function Header() {
  const t = useTranslations('header');

  return (
    <header className="sticky top-0 z-20 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
            D
          </div>
          <h2 className="text-text-primary dark:text-white text-xl font-bold">
            DaDriX
          </h2>
        </div>
        
        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/services" className="text-text-secondary dark:text-white/80 hover:text-primary dark:hover:text-white text-base font-medium transition-colors">
            {t('services')}
          </Link>
          <Link href="/pesoro" className="text-text-secondary dark:text-white/80 hover:text-primary dark:hover:text-white text-base font-medium transition-colors">
            {t('pesoro')}
          </Link>
          <Link href="/podcast" className="text-text-secondary dark:text-white/80 hover:text-primary dark:hover:text-white text-base font-medium transition-colors">
            {t('podcast')}
          </Link>
          <Link href="/about" className="text-text-secondary dark:text-white/80 hover:text-primary dark:hover:text-white text-base font-medium transition-colors">
            {t('about')}
          </Link>
        </nav>

        {/* Switchers */}
        <div className="flex items-center gap-2">
          <LangSwitcher />
          <ThemeSwitcher />
          
          <Link
            href="/contact"
            className="hidden lg:flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:opacity-90 transition-opacity"
          >
            {t('getInTouch')}
          </Link>
          
          <button className="flex lg:hidden items-center justify-center rounded-lg h-12 bg-transparent text-text-primary dark:text-white gap-2 text-base font-bold min-w-0 p-0">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}

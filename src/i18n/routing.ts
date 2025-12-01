// lib/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix: 'never', // Pas de préfixe dans l'URL
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);

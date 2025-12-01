'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useLocaleFromURL } from '@/hooks/use-locale-from-url';
import { getMessages } from 'next-intl/server';

export async function NextIntlProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocaleFromURL();
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}

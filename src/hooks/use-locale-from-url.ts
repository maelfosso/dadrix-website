'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

export function useLocaleFromURL(): string {
  const searchParams = useSearchParams();
  
  return useMemo(() => {
    const lang = searchParams.get('lang');
    return lang === 'fr' ? 'fr' : 'en'; // 'en' par défaut
  }, [searchParams]);
}

export function useLocaleFromCookie() {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((c) => c.startsWith("NEXT_LOCALE="));

    if (cookie) {
      setLocale(cookie.split("=")[1]);
    }
  }, []);

  return locale;
}
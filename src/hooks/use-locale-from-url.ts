'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export function useLocaleFromURL(): string {
  const searchParams = useSearchParams();
  
  return useMemo(() => {
    const lang = searchParams.get('lang');
    return lang === 'fr' ? 'fr' : 'en'; // 'en' par défaut
  }, [searchParams]);
}

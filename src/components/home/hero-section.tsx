'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HeroSection() {
  const t = useTranslations('home');

  return (
    <div className="p-4 lg:p-0 lg:py-16 @container">
      <div 
        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center px-4 py-10 text-center lg:min-h-[500px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(16, 16, 34, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkd4eHIYGzt4ZW6OddCHCmUXbZ7H1SlBIuTuwgYAFwR_8xHzQskNzOUeRlQyl5XaJYwTBlJkx6Hb9gB8SaBrtQybTW5okzB-ylXmmIowJA3L6ie6-F5FIAa86nLzgjE7iZGJv9v6hqmweV18OKEngP_ou32b-RN3sIB3Mx42Mc0PmzT9Dwv28RrSBPEP-I9Oh_tYfKcUMmYHvx3LrMGiJ8cD951pH_BMHnkRnhBf2PmhyqRR8D9-5lTWE3eydaHvseSrP0VDOtyitK")`
        }}
      >
        <div className="flex flex-col gap-4 max-w-3xl">
          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-6xl">
            {t('title')}
          </h1>
          <p className="text-white/80 text-base font-normal leading-normal sm:text-lg">
            {t('description')}
          </p>
        </div>
        <Link
          href="/contact"
          className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] mt-4 hover:opacity-90 transition-opacity"
        >
          <span className="truncate">{t('getFreeConsultation')}</span>
        </Link>
      </div>
    </div>
  );
}

'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useMounted } from '@/hooks/use-mounted';

export default function OurServicesPage() {
  const t = useTranslations('services');
  const mounted = useMounted();

  if (!mounted) {
    return null; // Évite les problèmes d'hydratation
  }

  const services = [
    {
      icon: 'school',
      key: 'training',
      benefits: ['benefit1', 'benefit2', 'benefit3'] as const,
    },
    {
      icon: 'query_stats',
      key: 'bi',
      benefits: ['benefit1', 'benefit2', 'benefit3'] as const,
    },
    {
      icon: 'psychology',
      key: 'ml',
      benefits: ['benefit1', 'benefit2', 'benefit3'] as const,
    },
    {
      icon: 'smart_toy',
      key: 'ai',
      benefits: ['benefit1', 'benefit2', 'benefit3'] as const,
    },
  ];

  return (
    <div className="relative flex w-full flex-col overflow-x-hidden min-h-screen">
      <Header />
      
      <main className="w-full max-w-7xl mx-auto lg:px-8 flex-1">
        {/* Hero Section */}
        <section className="px-4 py-16 lg:py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-foreground text-4xl lg:text-5xl font-bold tracking-tighter">
              {t('title')}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('subtitle')}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 pb-16 lg:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.key} className="flex flex-col gap-8 p-8">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 dark:bg-primary/20">
                    <span className="material-symbols-outlined text-primary dark:text-white text-3xl">
                      {service.icon}
                    </span>
                  </div>
                  <CardTitle className="text-2xl">
                    {t(`${service.key}.title`)}
                  </CardTitle>
                </div>
                <CardContent className="p-0">
                  <p className="text-muted-foreground mb-4">
                    {t(`${service.key}.description`)}
                  </p>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                          check_circle
                        </span>
                        <span className="text-foreground">
                          {t(`${service.key}.${benefit}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16 lg:py-24 bg-muted/50 rounded-xl mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="flex-1">
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter">
                  {t('cta.title')}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  {t('cta.description')}
                </p>
              </div>
              <Link href="/contact-us">
                <Button size="lg">{t('cta.button')}</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

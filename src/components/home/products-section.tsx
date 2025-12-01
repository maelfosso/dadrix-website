'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export function ProductsSection() {
  const t = useTranslations();

  return (
    <section id="products" className="px-4 py-8 lg:py-16 border-t border-border/50">
      <div className="flex flex-col items-center text-center gap-4 mb-8 lg:mb-12">
        <h2 className="text-foreground text-3xl lg:text-4xl font-bold tracking-tighter">
          {t('products.title')}
        </h2>
        <p className="text-muted-foreground text-base lg:text-lg max-w-2xl">
          {t('products.subtitle')}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col items-stretch justify-start rounded-xl bg-card overflow-hidden border border-border">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgQx8PKET40qoR4l7amE_4vFdf92dsC5nAMupp0xCYjQNwnxPuO9omJp2jO-ehrcS4ceH81Jhz6YrNv31lhnX9mDyoNaJqXjtGV30PpEIu9ZCllXzcnXrliL_OUxFJGi09Ly0b8sMpXh2baxZmPXFD1_tI_MsX6FMj5wBYfGApboNudMUJng86DGPChpZ9oqb1Dzbwo-UAJKo21X4r4GDQYN_2akmzPHWvAmHHcZ_iUWwzJcElP3jlbc6dqtxA_ByvqbOvLZteJH-D ")`,
            }}
          />
          <div className="flex w-full min-w-72 grow flex-col items-start justify-center gap-2 p-6">
            <p className="text-foreground text-xl font-bold leading-tight tracking-[-0.015em]">
              {t('products.pesoro.title')}
            </p>
            <p className="text-muted-foreground text-base font-normal leading-normal">
              {t('products.pesoro.description')}
            </p>
            <div className="flex items-end pt-4">
              <Button>{t('products.pesoro.cta')}</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch justify-start rounded-xl bg-card overflow-hidden border border-border">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAc2PjBskzTYALszjf-ng58GB55FuQ5p9I9CyH1dcx9CRxwtutATvFPSFmac9EBN22NPwYjBq9RXAMx1bTICF83DCdDpGQ6phWH7V9EJxMXf7n5KrN7fs05rRvdHlnmk7CQRgbDz4Pbt3kdJLsmXMrF0H6StViflpSguKmdve_Et3-Xrr0_IRac2NhtvtZjpOfSdyikeSn9HpoOEfDuqYijTOP6Mr7L5XfeZBPfuZ3VprDazxZszpTENIKgm1wWqXYpo2IjUG6oU4ig ")`,
            }}
          />
          <div className="flex w-full min-w-72 grow flex-col items-start justify-center gap-2 p-6">
            <p className="text-foreground text-xl font-bold leading-tight tracking-[-0.015em]">
              {t('products.podcast.title')}
            </p>
            <p className="text-muted-foreground text-base font-normal leading-normal">
              {t('products.podcast.description')}
            </p>
            <div className="flex items-end pt-4">
              <Button variant="secondary">{t('products.podcast.cta')}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function WorkSection() {
  const t = useTranslations('home');

  const works = [
    {
      key: 'pesoro',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgQx8PKET40qoR4l7amE_4vFdf92dsC5nAMupp0xCYjQNwnxPuO9omJp2jO-ehrcS4ceH81Jhz6YrNv31lhnX9mDyoNaJqXjtGV30PpEIu9ZCllXzcnXrliL_OUxFJGi09Ly0b8sMpXh2baxZmPXFD1_tI_MsX6FMj5wBYfGApboNudMUJng86DGPChpZ9oqb1Dzbwo-UAJKo21X4r4GDQYN_2akmzPHWvAmHHcZ_iUWwzJcElP3jlbc6dqtxA_ByvqbOvLZteJH-D',
      link: '/pesoro',
      isPrimary: true,
    },
    {
      key: 'podcast',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc2PjBskzTYALszjf-ng58GB55FuQ5p9I9CyH1dcx9CRxwtutATvFPSFmac9EBN22NPwYjBq9RXAMx1bTICF83DCdDpGQ6phWH7V9EJxMXf7n5KrN7fs05rRvdHlnmk7CQRgbDz4Pbt3kdJLsmXMrF0H6StViflpSguKmdve_Et3-Xrr0_IRac2NhtvtZjpOfSdyikeSn9HpoOEfDuqYijTOP6Mr7L5XfeZBPfuZ3VprDazxZszpTENIKgm1wWqXYpo2IjUG6oU4ig',
      link: '/podcast',
      isPrimary: false,
    },
  ];

  return (
    <section className="px-4 py-8 lg:py-16">
      <div className="flex flex-col items-center text-center gap-4 mb-8 lg:mb-12">
        <h2 className="text-text-primary dark:text-white text-3xl lg:text-4xl font-bold tracking-tighter">
          {t('work.title')}
        </h2>
        <p className="text-text-secondary dark:text-dark-text-secondary text-base lg:text-lg max-w-2xl">
          {t('work.description')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 @container">
        {works.map((work) => (
          <div
            key={work.key}
            className="flex flex-col items-stretch justify-start rounded-xl bg-white dark:bg-dark-card overflow-hidden border border-black/10 dark:border-dark-border transition-all duration-300 hover:shadow-xl"
          >
            <div 
              className="w-full bg-center bg-no-repeat aspect-video bg-cover transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url("${work.image}")` }}
            />
            <div className="flex w-full min-w-72 grow flex-col items-start justify-center gap-2 p-6">
              <h3 className="text-text-primary dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                {t(`work.${work.key}.title`)}
              </h3>
              <p className="text-text-secondary dark:text-dark-text-secondary text-base font-normal leading-normal">
                {t(`work.${work.key}.description`)}
              </p>
              <div className="flex items-end pt-4">
                <Link
                  href={work.link}
                  className={`flex min-w-[84px] max-w-[480px] items-center justify-center rounded-lg h-10 px-4 text-sm font-bold leading-normal transition-all duration-200 ${
                    work.isPrimary
                      ? 'bg-primary text-white hover:opacity-90'
                      : 'bg-primary/20 text-primary hover:bg-primary/30 dark:bg-primary/30 dark:text-white'
                  }`}
                >
                  <span className="truncate">
                    {t(`work.${work.key === 'pesoro' ? 'learnMore' : 'listenNow'}`)}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

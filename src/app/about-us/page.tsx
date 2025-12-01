'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import { useMounted } from '@/hooks/use-mounted';
import Link from 'next/link';

export default function AboutUsPage() {
  const t = useTranslations('about');
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  const teamMembers = [
    { id: 'jane', image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbPjVZ2IXVnqoaAUkQYIFLCI1-ppgPHjT9xR1WX3nGm9Y204BMssJ7PjcanMbycKIsa_d_wfaYEegVPWoYAf31SdTaY_uqs7EEyiIVqSTK6MDd2J4bp9RJDMro2ZQSOCqt_0FVaGdh0inOKeQaCsrTD2X4Evau1uF0EFx4LGcj2gAAghHaKz-zX4eun29abicQ-e3Y_IXBeZHO-C3co3zl6NNi1gDF_2NwmtfrUW2witSVru9EHy_5jVPqoMXThwg5mEL3vP4tiQY3" },
    { id: 'john', image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6dHG2uYgZ270ndrM4X4N4TnSWWXG8dTJyYqK4H5zQ4UVyEmQvBrepWQvqBbZmSkhH-bFhBkHpdacr_Ok42PrPHYAbd414KFPkwaKfURJp5sgq8PGf3BeySXE_lL6Bz95mgjZ8x6TNjWzbmBXqQQ0AAP_ewm11rRDnfpGyGaSkSTG3pygXUFcKSJO1DEEuxAcjazjofFV3LD9ZjG8N9cUZj0hOWB44zVL_9ri99A53SMEyyFfWsHRfbOsBU3Mxgy3272bqeFGbzJGe" },
    { id: 'emily', image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxg0Fg9KXONZLR2hjYUMQMoIM1q0lIZtjvjj0Wjzvqy_TpCF6RhjXB19kIDMUxMD1vJMbGVrb51-dsg_NjK51TeU3sFfGbNCpNNFy7vZKcEGw7wTVqICeolQrHui_HgpctjylZm2xuYUrAmbPrmj_F1GFbT-gu0CSGEo5EUYwmUvJ5nqmj3JzhZ4WB6QIScZaYw2TS49oC-voWfR2owf8sQpcwvwVg2ByuTUFusko7HCPs0MY_o_XqwbXoGHQ_TGn9EDLfiPg8a_SQ" },
  ];

  const values = [
    { id: 'innovation', icon: 'lightbulb' },
    { id: 'integrity', icon: 'handshake' },
    { id: 'collaboration', icon: 'groups' },
  ];

  const timeline = [
    { id: 'item1' },
    { id: 'item2' },
    { id: 'item3' },
    { id: 'item4' },
  ];

  const testimonials = [
    { 
      id: 'alex',
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoEfaKyl_nZL7Z3Y2Vd_p6msh1MqHwBlPgH6fUEg9GRGckTVNVtA6JFOl4JCz7dKKo3qKe_SqzhSPrn8Y2D51A7Xn_PiT5Arw_msNU4D1W0J0lD32mLshxtCQciffoMBKv1tjINoT18qyrIyCodzh0FNlQ7jJ9qV1RyQknOGfk1azfCKe0xkLAwjgis7KzXpR-x6wXG6L0z0faRGMWHvgjSKMGV7PioQLJUKrRkaZ6-jYbznJqanEOppig-UIw6qWshQeOjR-rt-Lu",
      name: 'Alex Johnson',
      role: 'CTO, Innovate Inc.'
    },
    { 
      id: 'samantha',
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcXWDDG7ymOENP95p9g6Esh6zvSz1krPG9CmITu3IXCdAXWUDe02WLtt4jqpGAjyApKnwAej7DzqVwkYN3EiQ0-NFwXXS4zvgMJTYED5qjssn0V4YnLbGqdkaCF_foeYyNVuKQWB_W9ms12nMLtzNBsOVQDLiqr_H6KWZPcT_e_3k8ztNEhGSjfmt8TqoktGjiVLmaMQK9JoTLmNuE_GaFFo_ZaYSY_7p9aKRNLq_ez7koGwHNqOlEsXFn5W5Kc4JraRjwg3IEM4Nd",
      name: 'Samantha Lee',
      role: 'Marketing Director, NextGen Retail'
    },
  ];

  return (
    <div className="relative flex w-full flex-col min-h-screen overflow-x-hidden">
      <Header />
      
      <main className="w-full max-w-7xl mx-auto lg:px-8 flex-1">
        {/* Hero Section */}
        <div className="px-4 py-12 lg:py-24 text-center">
          <h1 className="text-black dark:text-white text-4xl font-bold tracking-tighter sm:text-5xl">
            {t('title')}
          </h1>
          <p className="mt-4 text-black/60 dark:text-white/60 text-lg max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Mission & Vision */}
        <section className="px-4 py-8 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-black dark:text-white text-2xl font-bold tracking-tight">
                {t('mission.title')}
              </h2>
              <p className="text-black/60 dark:text-text-muted-dark">
                {t('mission.content')}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-black dark:text-white text-2xl font-bold tracking-tight">
                {t('vision.title')}
              </h2>
              <p className="text-black/60 dark:text-text-muted-dark">
                {t('vision.content')}
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-4 py-8 lg:py-16">
          <div className="flex flex-col items-center text-center gap-4 mb-8 lg:mb-12">
            <h2 className="text-black dark:text-white text-3xl lg:text-4xl font-bold tracking-tighter">
              {t('values.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <Card key={value.id} className="flex flex-col items-center text-center gap-4 p-6">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {value.icon}
                </span>
                <h3 className="text-black dark:text-white text-lg font-bold">
                  {t(`values.${value.id}.title`)}
                </h3>
                <p className="text-black/60 dark:text-text-muted-dark text-sm">
                  {t(`values.${value.id}.content`)}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="px-4 py-8 lg:py-16">
          <div className="flex flex-col items-center text-center gap-4 mb-8 lg:mb-12">
            <h2 className="text-black dark:text-white text-3xl lg:text-4xl font-bold tracking-tighter">
              {t('story.title')}
            </h2>
          </div>
          <div className="relative pl-6 border-l-2 border-primary/20 dark:border-primary/40 max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.id} className={`mb-8 ${index === timeline.length - 1 ? 'pb-0' : ''} relative`}>
                <div className="absolute -left-[35px] top-1.5 flex items-center justify-center size-5 bg-primary rounded-full ring-4 ring-background-light dark:ring-background-dark"></div>
                <h3 className="text-lg font-bold text-black dark:text-white">
                  {t(`story.${item.id}.title`)}
                </h3>
                <p className="text-black/60 dark:text-text-muted-dark mt-1">
                  {t(`story.${item.id}.content`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="px-4 py-8 lg:py-16">
          <div className="flex flex-col items-center text-center gap-4 mb-8 lg:mb-12">
            <h2 className="text-black dark:text-white text-3xl lg:text-4xl font-bold tracking-tighter">
              {t('team.title')}
            </h2>
            <p className="text-black/60 dark:text-white/60 text-base lg:text-lg max-w-2xl">
              {t('testimonials.title')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center text-center">
                <div
                  className="w-32 h-32 rounded-full bg-cover bg-center mb-4 ring-4 ring-primary/10"
                  style={{ backgroundImage: `url("${member.image}")` }}
                />
                <h3 className="text-black dark:text-white text-lg font-bold">
                  {t(`team.${member.id}.name`)}
                </h3>
                <p className="text-primary dark:text-primary/80 text-sm">
                  {t(`team.${member.id}.role`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 py-8 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="flex flex-col gap-4 p-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url("${testimonial.image}")` }}
                  />
                  <div className="flex flex-col">
                    <h3 className="text-black dark:text-white font-bold">
                      {testimonial.name}
                    </h3>
                    <p className="text-black/60 dark:text-text-muted-dark text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-black/80 dark:text-white/80">
                  {t(`testimonials.${testimonial.id}.content`)}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="px-4 py-4">
            <div className="flex flex-col gap-2 rounded-lg bg-card p-4 border border-border">
              <Link href="/our-services" className="text-foreground font-medium text-base p-2 rounded-md hover:bg-accent transition-colors">
                {t('nav.services')}
              </Link>
              <Link href="/" className="text-foreground font-medium text-base p-2 rounded-md hover:bg-accent transition-colors">
                Pesoro
              </Link>
              <Link href="/" className="text-foreground font-medium text-base p-2 rounded-md hover:bg-accent transition-colors">
                Podcast
              </Link>
              <Link href="/about-us" className="text-foreground font-medium text-base p-2 rounded-md bg-accent">
                {t('nav.about')}
              </Link>
              <Link href="/contact-us" className="text-foreground font-medium text-base p-2 rounded-md hover:bg-accent transition-colors">
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
